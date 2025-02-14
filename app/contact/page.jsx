import ContactUs from "@/components/ContactUs";
import LeadForm from "@/components/LeadForm";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#141122] flex flex-col justify-center gap-6 px-6">
        <div className="flex flex-col text-white justify-center items-center pt-32 mx-auto w-[60%]">
          <h2 className="text-white text-3xl md:text-6xl uppercase tracking-wider font-bold text-center">
            Get In Touch With BeTech
          </h2>
          <p className="text-justify py-6">
            Have questions or need assistance? We're here to help! Whether
            you're looking for IT solutions, cloud management, cybersecurity, or
            software development, our team at BeTech is ready to assist you.
            Reach out to us via phone, email, or by filling out the contact form
            below. Let&apos;s build something great together!
          </p>
        </div>

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

            <div className="w-full md:w-2/3">
              <LeadForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
