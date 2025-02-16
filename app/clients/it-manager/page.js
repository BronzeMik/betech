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
                Transform Your IT Infrastructure with a Unified Approach
              </span>
              <h1 className="text-3xl md:text-6xl font-bold text-[#2f2f2f]">
                Scale Faster with Agile IT Solutions
              </h1>
              <p className="body-lg text-gray-500">
                BeTech helps tech leaders like you simplify IT modernization, enhance security, and drive digital transformation—without the complexity.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="btn-primary bg-[#3fa885]"
                  style={{ backgroundColor: "#3fa885", color: "#fff" }}
                >
                  Claim Your Free Tech Assessment
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
                  src="/it-worker-computer.jpg"
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

      {/* IT Efficency Ebook */}
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
                The Ultimate Guide for Scaling Technology Without the Complexity
              </h2>
              <p className="body-lg text-gray-500">
                Download our Efficient IT Management E-Book and unlock strategies that simplify IT operations, reduce risks, and streamline your digital transformation.
              </p>
              <ul className="text-left text-gray-500 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Proactive Risk Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Streamlined Vendor Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Cost-effective IT Solutions</span>
                </li>
              </ul>
              <button
                className="btn-primary"
                style={{ backgroundColor: "#3fa885", color: "#fff" }}
              >
                Download Your E-Book
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
                  src="/open-laptop.jpg"
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
                The AI-Powered Incident Response Playbook
              </h3>
              <p className="text-gray-500 mb-6">
              As a Tech Director navigating increasing cybersecurity threats and a fragmented IT environment, you need a smart, automated approach to incident response. This playbook leverages AI to help you detect, respond to, and recover from security breaches with precision—minimizing risk while improving system resilience.
              </p>
              <ul className="text-left text-gray-500 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Automated Incident Response</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>Improved Team Efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#3fa885] flex-shrink-0 mt-0.5" />
                  <span>AI-Powered Threat Detection</span>
                </li>
              </ul>
              <button
                className="btn-primary w-full"
                style={{ backgroundColor: "#3fa885", color: "#fff" }}
              >
                Download Now
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
      title: "Security vs. Speed Tradeoff",
      description:
        "Balancing the urgency of digital transformation with the need for robust security feels like an impossible challenge, especially as cyber threats grow more sophisticated.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Aging Infrastructure & Integration Struggles",
      description:
        "Your legacy systems are increasingly difficult to maintain and integrate with modern solutions, creating roadblocks in your company's digital transformation efforts.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Managing Complex Compliance Requirements",
      description:
        "Navigating compliance requirements like GDPR and SOC 2 without slowing down growth is a constant struggle, with the risk of missing critical deadlines or facing penalties.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Fragmented Vendor Management",
      description:
        "Managing multiple specialized vendors for different aspects of your IT infrastructure creates inefficiencies, and coordinating between them adds unnecessary complexity to your job.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Technical Debt Blocking Innovation",
      description:
        "The initial, rapid tech decisions you made are now slowing down innovation and making it harder to scale effectively. The pressure to modernize is high, but execution feels daunting.",
    },
    {
      icon: <ChevronDown className="h-6 w-6" />,
      title: "Finding the Right IT Partner",
      description:
        "Most solutions are tailored to enterprises, not fast-growing companies like yours. You need a partner who understands the unique demands of scaling IT infrastructure without sacrificing security or performance.",
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
        "Our solutions are designed for fast-growing companies like yours. Typical implementation takes between 2-12 weeks, with scalability built-in from day one to accommodate your company’s evolving needs.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "We adhere to SOC 2, ISO 27001, and other industry standards, with proactive security measures, automated compliance checks, and regular audits to ensure your systems remain secure and compliant without slowing down progress.",
    },
    {
      question: "Do you offer DevOps and infrastructure support?",
      answer:
        "Yes, we provide ongoing DevOps optimization, CI/CD pipeline management, and cloud infrastructure scaling to ensure your systems are agile, reliable, and ready for future growth—without the bottlenecks that come with legacy systems.",
    },
    {
      question: "Can you integrate with our existing tech stack?",
      answer:
        "Absolutely. We specialize in integrating modern solutions with existing tech stacks, whether it’s cloud services, security tools, or legacy systems, ensuring a seamless transition with minimal disruption to your operations.",
    },
    {
      question: "What kind of support do you provide post-launch?",
      answer:
        "We provide 24/7 support, proactive monitoring, and timely security updates to ensure your IT infrastructure remains stable, secure, and ready for the demands of your company as it scales. We’re here to support you through every phase of growth."
    },
  ];
  

export default ITLandingPage;
