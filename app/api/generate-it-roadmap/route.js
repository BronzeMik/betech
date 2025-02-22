import { NextResponse } from "next/server";
import OpenAI from "openai";
import axios from "axios";
import supabase from '../../../lib/supabase';
import transporter from '../../../lib/nodemailer';


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const config = {
  runtime: "edge",
};


export async function POST(req) {
  try {
    const data = await req.text();

    // Parse the body (which is now a string)
    const parsedData = JSON.parse(data);
    const { formData, verificationToken } = parsedData;

    const {data: lead_magnets, error: fetchError} = await supabase
    .from('subscribers')
    .select('lead_magnet_generated, email')
    .eq('verification_token', verificationToken);

    if (fetchError) {
        // throw new Error("Error checking email.");
        console.log(fetchError.message);
    }

    const email = lead_magnets?.[0]?.email;

    // If the lead magnet has already been generated within 48hrs, return an error
    if (lead_magnets && lead_magnets.length > 0) {
        const leadMagnetData = lead_magnets?.[0]?.lead_magnet_generated || {}; // JSONB object
    
        if (leadMagnetData && leadMagnetData["IT Roadmap"]) {
            const lastGeneratedTime = new Date(leadMagnetData["IT Roadmap"]);
            const now = new Date();
            const hoursDifference = (now - lastGeneratedTime) / (1000 * 60 * 60);
    
            if (hoursDifference <= 48) {
              return new Response(
                JSON.stringify({ message: "A lead magnet was already generated in the last 48 hours." }),
                {
                  status: 200,
                  headers: { "Content-Type": "application/json" },
                }
              );
            } else {
                // Update or insert the lead magnet timestamp
                const now = new Date();
                const nowISO = now.toISOString();   
                leadMagnetData["IT Roadmap"] = nowISO;
    
                const { error: updateError } = await supabase
                .from('subscribers')
                .update({ lead_magnet_generated: leadMagnetData })
                .eq('verification_token', verificationToken);
    
                if (updateError) {
                    console.error("Error updating lead magnet data:", updateError.message);
                    throw new Error("Error updating lead magnet timestamp.");
                }
    
            }
        } else {
            // Update or insert the lead magnet timestamp
            const now = new Date();
            const nowISO = now.toISOString();   
            leadMagnetData["IT Roadmap"] = nowISO;

            const { error: updateError } = await supabase
            .from('subscribers')
            .update({ lead_magnet_generated: leadMagnetData })
            .eq('verification_token', verificationToken);

            if (updateError) {
                console.error("Error updating lead magnet data:", updateError.message);
                throw new Error("Error updating lead magnet timestamp.");
            }

        }
    }

    if (!formData.companyName || !formData.itGoals) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
      
    }

    const prompt = `
      Given the following company details, generate a professional IT roadmap in **JSON format**. The JSON should include a list of sections for the roadmap, each containing a **title** and **content**. Each section should be formatted as a key-value pair, where the title is the section name and the content is a detailed explanation of that section, tailored to the company's goals and challenges.

The IT roadmap should be organized into the following sections:

1. **Company Overview**: Provide a brief description of the company, its size, industry, and its current IT infrastructure status.
2. **IT Goals & Objectives**: Define the company’s primary IT goals, such as cloud migration, improving security, or upgrading infrastructure.
3. **Cloud Strategy**: Based on the company's cloud preference (AWS, Azure, GCP), provide a cloud strategy that fits the company's needs.
4. **Security Strategy**: Given the security priority (high, medium, low), define security measures like data protection, encryption, firewalls, etc.
5. **Challenges & Solutions**: Identify the company’s key IT challenges (e.g., budget constraints, legacy systems, lack of skilled staff) and propose solutions.
6. **Action Plan**: Provide a step-by-step action plan, breaking down tasks over time, such as migrating to the cloud, upskilling employees, or implementing security protocols.

Each section should contain detailed, business-focused content. Keep the language professional and use industry terminology. The final JSON should include all these sections, with clear titles and content.

Here’s the structure to follow in the JSON format:

{
  "companyName": "${formData.companyName}",
  "companySize": "${formData.companySize}",
  "industry": "${formData.industry}",
  "itGoals": "${formData.itGoals}",
  "cloudPreference": "${formData.cloudPreference}",
  "securityPriority": "${formData.securityPriority}",
  "roadmapSections": [
    {
      "title": "Company Overview",
      "content": "{{Company Overview content}}"
    },
    {
      "title": "IT Goals & Objectives",
      "content": "{{IT Goals & Objectives content}}"
    },
    {
      "title": "Cloud Strategy",
      "content": "{{Cloud Strategy content}}"
    },
    {
      "title": "Security Strategy",
      "content": "{{Security Strategy content}}"
    },
    {
      "title": "Challenges & Solutions",
      "content": "{{Challenges & Solutions content}}"
    },
    {
      "title": "Action Plan",
      "content": "{{Action Plan content}}"
    }
  ]
}

    Use the following values for the placeholders:
    - {{companyName}}: The company’s name.
    - {{companySize}}: The company size (e.g., "Small", "Medium", "Large").
    - ${formData.industry}",: The industry the company operates in (e.g., "Software Development", "Retail", etc.).
    - ${formData.itGoals}",: The primary IT goals, such as "cloud migration", "improving security", "modernizing IT infrastructure".
    - ${formData.cloudPreference}",: The preferred cloud platform (AWS, Azure, or Google Cloud).
    - ${formData.securityPriority}: The company’s security priority (e.g., "High", "Medium", "Low").

The output should be a **clean, professional JSON structure** that follows the above format and reflects the company’s specific needs and goals in a well-organized manner.

Example output should look like this:

{
  "companyName": "Tech Innovators",
  "companySize": "Medium",
  "industry": "Software Development",
  "itGoals": "Improve infrastructure, migrate to cloud, enhance data security",
  "cloudPreference": "AWS",
  "securityPriority": "High",
  "roadmapSections": [
    {
      "title": "Company Overview",
      "content": "Tech Innovators is a medium-sized software development company focused on providing innovative web applications. The company currently operates on legacy IT infrastructure, which is limiting growth and scalability."
    },
    {
      "title": "IT Goals & Objectives",
      "content": "Tech Innovators aims to improve its infrastructure, migrate to the cloud, and enhance data security to support business growth and innovation."
    },
    {
      "title": "Cloud Strategy",
      "content": "We recommend AWS as your cloud provider for scalability, cost efficiency, and integration with your existing systems. AWS provides a comprehensive suite of services, including computing power, storage, and machine learning tools."
    },
    {
      "title": "Security Strategy",
      "content": "Given your high security priority, we suggest implementing multi-factor authentication, end-to-end encryption, and regular vulnerability assessments. Data security should be a top priority across all systems and processes."
    },
    {
      "title": "Challenges & Solutions",
      "content": "Tech Innovators faces challenges such as limited budget and a lack of skilled staff. Solutions include focusing on cost-effective cloud services like AWS and leveraging cloud-native security tools. Upskilling employees through training programs will help alleviate the workforce shortage."
    },
    {
      "title": "Action Plan",
      "content": "We propose a phased 12-month roadmap: 1. Q1: Staff training and cloud migration 2. Q2: Implement security measures and improve infrastructure 3. Q3-Q4: Monitor, optimize, and expand the cloud infrastructure."
    }
  ]
}
  Respond strictly in JSON format. Do not include any additional text outside the JSON format.

    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an AI IT consultant providing detailed, actionable roadmaps.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    let mdResponse = response.choices[0].message.content;

    const jsonStart = mdResponse.indexOf('{');
    const jsonEnd = mdResponse.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonString = mdResponse.substring(jsonStart, jsonEnd + 1);
        mdResponse = JSON.parse(jsonString);
    } else {
        throw new Error('Invalid JSON format received from AI.');
    }

    const payload = {
        companyName: mdResponse.companyName,
        companySize: mdResponse.companySize,
        industry: mdResponse.industry,
        itGoals: mdResponse.itGoals,
        cloudPreference: mdResponse.cloudPreference,
        securityPriority: mdResponse.securityPriority,
        roadmapSections: mdResponse.roadmapSections
    };

    const pdfResponse = await axios.post(
      "https://api.pdfmonkey.io/api/v1/documents",
      {
        document: {
          document_template_id: process.env.NEXT_PUBLIC_PDFMONKEY_TEMPLATE_ID, // Your PDFMonkey template ID
          payload: payload, // Data to fill in the template
          status: "pending", // or "draft" to preview
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PDFMONKEY_API_KEY}`, // API Key
          "Content-Type": "application/json",
        },
      }
    );
    
    const documentId = pdfResponse.data.document.id;
    

    // Wait for PDF to be generated
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Fetch the generated PDF URL
    const pdfUrlResponse = await axios.get(
      `https://api.pdfmonkey.io/api/v1/documents/${documentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PDFMONKEY_API_KEY}`,
        },
      }
    );

    const pdfUrl = pdfUrlResponse.data.document.download_url;

    await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL_USER,
          to: email,
          subject: "BeTech IT Solutions - Your IT Roadmap",
          html: `<p>Click below to view your IT Roadmap (link will expire in 24 hours): </p><a href="${pdfUrl}" target="_blank">Download your IT Roadmap</a>`,
        });

        return new Response(JSON.stringify({ roadmap: pdfUrl }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) { 
    console.log(error)
    return new Response(
      JSON.stringify({
        error: "Error generating roadmap",
        reason: error.message,
        statusText: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
