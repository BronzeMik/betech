"use client";
import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    access_key: process.env.NEXT_PUBLIC_WEB3_API_KEY,
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
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
        phone: "",
        company: "",
        service: "",
        budget: "",
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
    <section className="w-full">
      <div className="container mx-auto max-w-2xl bg-[#141122] p-8 rounded-lg border border-[#2e294e] shadow-lg shadow-[#2e294e]">
        <h2 className="text-3xl font-bold text-center text-[#21FA90]">Send Us a Message</h2>
        <p className="text-center text-white mt-2">
          Have a question? Reach out and we&apos;ll get back to you as soon as possible.
        </p>

        {successMessage && <p className="text-green-600 mt-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}

        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-transparent text-gray-700"
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          noValidate
        >
          <input type="hidden" name="access_key" value={web3Api} />
          <input type="hidden" name="subject" value="New Lead Submission" />
          <input type="checkbox" name="botcheck" className="hidden" />

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4 py-5">
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.name}
              onChange={handleChange}
              aria-label="Full Name"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email Address"
            />
          </div>

          {/* Phone & Company */}
          <div className="flex flex-col md:flex-row gap-4 py-5">
            <input
              type="tel"
              name="phone"
              required
              placeholder="(123) 456-7890"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone Number"
            />

            <input
              type="text"
              name="company"
              placeholder="Your Company"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.company}
              onChange={handleChange}
              aria-label="Company Name"
            />
          </div>

          {/* Services & Budget */}
          <div className="flex flex-col md:flex-row gap-4 py-5">
            <select
              name="service"
              required
              className="w-full px-4 py-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.service}
              onChange={handleChange}
              aria-label="Interested Service"
            >
              <option value="">Select a Service</option>
              <option value="IT Support">IT Support</option>
              <option value="Cloud Management">Cloud Management</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Software & Web Development">Software & Web Development</option>
            </select>

            <select
              name="budget"
              required
              className="w-full px-4 py-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
              value={formData.budget}
              onChange={handleChange}
              aria-label="Budget"
            >
              <option value="">Select Your Budget</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $50,000">$10,000 - $50,000</option>
              <option value="Over $50,000">Over $50,000</option>
            </select>
          </div>

          {/* Message */}
          <label className="block mt-4 mb-2 text-white">Your Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us more about your project..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
            value={formData.message}
            onChange={handleChange}
            aria-label="Message"
          />

          {/* Honeypot Field for Spam Prevention */}
          <input type="text" name="honeypot" className="hidden" onChange={handleChange} />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#21FA90] text-black font-bold py-3 rounded-md hover:bg-[#16c77d] transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Get a Free Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
