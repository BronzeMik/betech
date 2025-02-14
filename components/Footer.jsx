"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {FaTwitter, FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { ChevronDown } from "lucide-react";


const Footer = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <footer className="w-full bg-[#141122] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Brand Logo */}
        <div className="mb-6 md:mb-0">
          <Image src="/logo.svg" width={200} height={100} alt="Company Logo" priority
              loading="eager" />
        </div>

        {/* Mobile Toggle for Links */}
        <button
          className="md:hidden flex items-center text-white text-lg"
          onClick={() => setIsLinksOpen(!isLinksOpen)}
        >
          Navigation {isLinksOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isLinksOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row justify-center gap-6 mt-4 md:mt-0`}
        >
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <div
                key={index}
                className="relative group transition-all duration-300 border-b-2 border-b-[#2e294e] hover:border-b-[#21FA90] hover:text-[#21FA90] hover:scale-105"
              >
                <Link href={`#${item.toLowerCase()}`} className="relative z-10">
                  {item}
                </Link>
                {/* Glow Effect */}
                <span className="absolute inset-0 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-[#21FA90] blur-lg rounded-md"></span>
              </div>
            )
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
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

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
