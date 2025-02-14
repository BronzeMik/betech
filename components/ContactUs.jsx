"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    access_key: process.env.NEXT_PUBLIC_WEB3_API_KEY,
    name: "",
    email: "",
    message: "",
    honeypot: "", // Spam prevention field (should remain empty)
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const web3Api = process.env.NEXT_PUBLIC_WEB3_API_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam Prevention
    if (formData.honeypot) {
      console.warn("Spam detected, form not submitted.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccessMessage("Thank you! We’ll be in touch soon.");
      setFormData({
        access_key: web3Api,
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full bg-[#141122] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold">
            <span className="text-[#21FA90]">Get in Touch</span>
          </h2>
          <h3 className="text-lg mt-2">
            We’re here to help you innovate and scale.
          </h3>
          <hr className="my-4 border-[#2e294e] w-full" />

          {/* Contact Details */}
          <div className="space-y-4 mt-4">
            <p className="flex items-center text-gray-300">
              <Mail className="mr-2 text-[#21FA90]" /> contact@betech.com
            </p>
            <p className="flex items-center text-gray-300">
              <Phone className="mr-2 text-[#21FA90]" /> +1 (216) 465-5346
            </p>
            <p className="flex items-center text-gray-300">
              <MapPin className="mr-2 text-[#21FA90]" />
              Cleveland, Ohio
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <div
                key={index}
                className="relative group p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-6 h-6 text-white group-hover:text-[#21FA90] transition-all duration-300" />
                {/* Glow Effect */}
                <span className="absolute inset-0 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-[#21FA90] blur-lg rounded-full"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-2/3 bg-[#1a172b] p-8 rounded-lg border border-[#2e294e] shadow-lg">
          <h3 className="text-xl font-semibold text-[#21FA90]">
            Send Us a Message
          </h3>
          <p className="text-gray-300 mt-2">
            Have a question? Reach out and we'll get back to you as soon as
            possible.
          </p>
          {successMessage && (
            <p className="text-green-600 mt-4 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 mt-4 text-center">{errorMessage}</p>
          )}
          <form
            onSubmit={handleSubmit}
            className="mt-6"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            noValidate
          >
            <input type="hidden" name="access_key" value={web3Api} />
            <input type="hidden" name="subject" value="New Lead Submission" />
            <input type="checkbox" name="botcheck" className="hidden" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#2e294e] text-white focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
                aria-label="Full Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#2e294e] text-white focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
                aria-label="Email Address"
              />
              {/* Honeypot Field for Spam Prevention */}
              <input
                type="text"
                name="honeypot"
                className="hidden"
                onChange={handleChange}
              />
            </div>
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-[#2e294e] text-white focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              aria-label="Message"
            />
            <button
              type="submit"
              className="mt-4 flex items-center justify-center w-full px-6 py-3 bg-[#21FA90] text-black font-semibold rounded-lg hover:bg-[#16c77d] transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                "Sending Message..."
              ) : (
                <>
                  Send Message <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
