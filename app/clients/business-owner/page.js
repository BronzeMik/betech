"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITLandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen  bg-background mt-[75px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding ">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 px-3 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-[#3fa885]/10 text-[#3fa885] rounded-full text-sm font-medium">
                Secure Your Business for the Digital Future
              </span>
              <h1 className="text-3xl md:text-6xl font-bold text-[#2f2f2f]">
                Modernize Your Operations and Protect Your Digital Assets with Confidence
              </h1>
              <p className="body-lg text-gray-500">
              As the owner of a growing business, you understand the importance of staying ahead in a rapidly evolving digital landscape. The complexity of managing legacy systems, integrating new technology, and meeting compliance requirements can feel overwhelming. It&apos;s time to modernize your operations and streamline your security efforts, without compromising growth or budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="btn-primary bg-[#3fa885]"
                  style={{ backgroundColor: "#3fa885", color: "#fff" }}
                >
                  Claim Your Free Security Assessment
                </button>
                <a href="https://betechpro.com/services"><button className="btn-secondary">
                  Discover Our Solutions
                </button></a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/business-owner-working.jpg"
                  alt="Advanced Startup Technology"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-[#f9fafc] section-padding ">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f] mb-6">
              Common Challenges Modern Enterprises Face
            </h2>
            <p className="body-lg text-gray-500">
              In today&apos;s rapidly evolving digital landscape, businesses
              encounter critical IT challenges that can impact their growth and
              security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg hover-scale"
              >
                <div className="text-[#3fa885] mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-gray-500">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Migration Success */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f]">
                Quick Guide to Cloud Migration Success
              </h2>
              <p className="body-lg text-gray-500">
                Unlock the Benefits of Seamless Cloud Transition While Safeguarding Your Business
              </p>
              <ul className="text-left text-gray-500 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Streamlined Cloud Migration Process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Enhanced Security & Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Cost-Effective Scalability</span>
                </li>
              </ul>
              <button
                className="btn-primary"
                style={{ backgroundColor: "#3fa885", color: "#fff" }}
              >
                Download Your Guide
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/cloud-network.jpg"
                  alt="Automation Dashboard"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f] mb-6">
              Scalable IT Solutions for High-Growth Startups
            </h2>
            <p className="body-lg text-gray-500">
              Future-proof your startup with infrastructure that grows with you.
              Secure, scalable, and engineered for fast-moving teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg hover-scale"
              >
                <div className="text-[#3fa885] mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3fa885] font-medium hover:gap-2 transition-all duration-300"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="bg-[#141122] text-white section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#fff] mb-6">
              Why High-Growth Startups Trust BeTech
            </h2>
            <p className="body-lg text-white/80">
              Scalable, secure, and startup-ready—our expertise helps you grow
              without bottlenecks or security gaps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[#3fa885] mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {advantage.title}
                </h3>
                <p className="text-white/80">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#f9fafc]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f] mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="body-lg text-gray-500">
              See what our clients say about their experience working with
              BeTech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTAs */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f] mb-6">
              Free Resources to Transform Your Business
            </h2>
            <p className="body-lg text-gray-500">
              Access our expert-crafted tools to evaluate and enhance your IT
              infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-lg text-center"
            >
              <div className="text-[#3fa885] mb-6">
                <ChevronDown className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Unlock Your IT Team&apos;s Full Potential with AI-Driven Insights
              </h3>
              <p className="text-gray-500 mb-6">
                Discover Skill Gaps, Optimize Team Performance, and Make Data-Backed Hiring Decisions
              </p>
              <ul className="text-left text-gray-500 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Pinpoint Skills Gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Streamline Hiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Optimize Team Performance</span>
                </li>
              </ul>
              <button
                className="btn-primary w-full"
                style={{ backgroundColor: "#3fa885", color: "#fff" }}
              >
                Get Your Insights Now
              </button>
            </motion.div>

            {/* Business Continuity Template */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-lg text-center"
            >
              <div className="text-[#3fa885] mb-6">
                <ChevronDown className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
              Stay Compliant with Ease Using Our AI-Generated Cloud Compliance Guid
              </h3>
              <p className="text-gray-500 mb-6">
                Simplify cloud compliance for your startup with our AI-powered guide, designed to help you navigate complex regulations and ensure your business stays secure as it scales.
              </p>
              <ul className="text-left text-gray-500 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Automated Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Step-by-step guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Scalable Framework</span>
                </li>
              </ul>
              <button
                className="btn-primary w-full"
                style={{ backgroundColor: "#3fa885", color: "#fff" }}
              >
                Generate My Guide
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2f2f2f] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="body-lg text-gray-500">
              Get answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#141122] text-white section-padding">
        <div className="container mx-auto text-center px-6">
          <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-[#fff] mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="body-lg text-white/80 mb-8">
              Schedule your free consultation today and discover how BeTech can
              help you achieve your technology goals.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary bg-white text-primary hover:bg-white/90"
              style={{ backgroundColor: "#3fa885", color: "#fff" }}
            >
              Schedule Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Data
const painPoints = [
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Fear of Cybersecurity Breaches",
      description:
        "The growing threat of cyberattacks, fueled by recent security incidents and the rising number of breaches across the industry, leaves business owners constantly concerned about the integrity of their digital infrastructure.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Inefficient Technology Stack",
      description:
        "Many businesses rely on a mix of legacy systems and newer technologies, creating poor system integration, operational inefficiencies, and increasing the risk of data breaches due to fragmented infrastructure.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Struggling to Keep Up with Compliance Demands",
      description:
        "As companies expand into new markets, the pressure to meet stricter data protection regulations and security certifications (e.g., SOC 2, ISO) becomes overwhelming, especially without the right technical and compliance expertise.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "High Costs of IT Solutions",
      description:
        "While investing in robust cybersecurity and modern IT solutions is critical, businesses often hesitate to commit to expensive enterprise-level tools and struggle to allocate resources effectively for maximum ROI.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Lack of Expertise in Advanced IT and Security",
      description:
        "Even with in-house IT teams, many businesses lack the expertise to handle advanced cybersecurity threats or cloud-based solutions, which creates uncertainty about the long-term protection of their digital assets.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Risk of Falling Behind Competitors",
      description:
        "With rapid technological advancements, business owners fear falling behind more tech-savvy competitors, risking valuable business opportunities and the erosion of customer trust.",
    },
  ];
  
  
  

const services = [
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business needs and objectives.",
  },
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "Cloud Management",
    description:
      "Comprehensive cloud solutions for improved scalability and efficiency.",
  },
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "DevOps Solutions",
    description:
      "Streamlined development and operations processes for faster delivery.",
  },
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "Cybersecurity Services",
    description:
      "Advanced security solutions to protect your business from evolving cyber threats.",
  },
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "IT Infrastructure",
    description:
      "Modern infrastructure solutions designed for reliability, scalability, and performance.",
  },
  {
    icon: <ChevronDown className="h-6 w-6" />,
    title: "Automation Strategy",
    description:
      "Strategic automation solutions to improve efficiency and reduce operational costs.",
  },
];

const advantages = [
  {
    icon: <Check className="h-6 w-6" />,
    title: "15+ Years Experience",
    description: "Deep industry expertise and proven track record.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "99.9% Uptime",
    description: "Reliable services with guaranteed high availability.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Industry Certified",
    description: "Top certifications from leading technology providers.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote:
      "BeTech transformed our IT infrastructure, delivering exceptional results on time and within budget.",
  },
  {
    name: "Michael Chen",
    position: "IT Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote:
      "Their expertise in cloud solutions helped us achieve seamless scalability and improved security.",
  },
  {
    name: "Emily Rodriguez",
    position: "CEO, StartupX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote:
      "Working with BeTech has been transformative for our business operations and growth.",
  },
];

const faqs = [
    {
      question: "How quickly can we scale after implementation?",
      answer:
        "Our solutions are built with your growing business in mind. We typically implement within 2-12 weeks, ensuring scalability from the start to meet your evolving needs and help you stay ahead of competitors.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "We follow industry standards like SOC 2, ISO 27001, and GDPR, implementing proactive security measures, automated compliance checks, and regular audits to ensure that your business stays secure and compliant while accelerating growth.",
    },
    {
      question: "Do you offer DevOps and infrastructure support?",
      answer:
        "Yes, we provide continuous DevOps optimization, cloud infrastructure scaling, and CI/CD pipeline management to eliminate bottlenecks, improve reliability, and ensure your business is agile as it expands.",
    },
    {
      question: "Can you integrate with our existing tech stack?",
      answer:
        "Absolutely. Whether you have legacy systems or modern cloud tools, we specialize in seamless integration, ensuring that all your tech works together harmoniously as you transition to more advanced, efficient systems.",
    },
    {
      question: "What kind of support do you provide post-launch?",
      answer:
        "We offer round-the-clock support, proactive system monitoring, and timely security updates to ensure your IT infrastructure is stable, secure, and capable of handling your business’s increasing demands as it grows.",
    },
  ];
  
  

export default ITLandingPage;
