import supabase from "../../../lib/supabase";
import transporter from "../../../lib/nodemailer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import {Readable} from 'stream'; 



const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
const MAILCHIMP_DC = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;


// Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};



export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

 // Use `req.text()` to read the body as text
 const data = await req.text();

 // Parse the body (which is now a string)
 const parsedData = JSON.parse(data);
 const { email } = parsedData;


  console.log("Email:", email);

  try {
    // Check if email already exists in Supabase
    const { data: existingUser, error: fetchError } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", email)
      .single();

    if (fetchError) {
      // throw new Error("Error checking email.");
      console.log(fetchError.message);
    }

    if (existingUser) {
      try {
        // Generate a verification token
        const verificationToken = crypto.randomUUID();

        // Insert into Supabase
        const { data, error } = await supabase
          .from("subscribers")
          .update([
            {
              verification_token: verificationToken,
              is_verified: false,
            },
          ])
          .eq("email", email);

        if (error) {
          throw new Error("Error adding subscriber.");
        }

        // Send Verification Email via Nodemailer
        const verificationLink = `http://localhost:3000/tools/it-generator?verification=${verificationToken}`;
        await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL_USER,
          to: email,
          subject: "Please verify your email",
          html: `<p>Click below to verify: </p><a href="${verificationLink}" target="_blank">Verify Email</a>`,
        });

        

        // Add to Mailchimp
        await axios.post(
          `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
          { email_address: email, status: "subscribed" },
          {
            headers: {
              Authorization: `apikey ${MAILCHIMP_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        return NextResponse.json({ message: "Verification email sent!" }, { status: 200 });
      } catch (err) {
        console.error("Error:", err.message);
        return NextResponse.json({ message: err.message || "Something went wrong." }, { status: 500 });
      }
    }

    // Generate a verification token
    const verificationToken = crypto.randomUUID();

    // Insert into Supabase
    const { data, error } = await supabase
      .from("subscribers")
      .insert([
        { email, verification_token: verificationToken, is_verified: false },
      ]);

    if (error) {
      throw new Error("Error adding subscriber.");
    }

    // Send Verification Email via Nodemailer
    const verificationLink = `http://localhost:3000/tools/it-generator?verification=${verificationToken}`;
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: email,
      subject: "Please verify your email",
      html: `<p>Click below to verify: </p><a href="${verificationLink}" target="_blank">Verify Email</a>`,
    });

    // Add to Mailchimp
    await axios.post(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      { email_address: email, status: "subscribed" },
      {
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ message: "Verification email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ message: error.message || "Something went wrong." }, { status: 500 });
  }
}
