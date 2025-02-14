"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#141122] text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={150} height={75} alt="Company Logo"  priority
              loading="eager"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {["Home", "About", "Services", "Blogs", "Portfolio", "Contact"].map(
            (item, index) => (
              <div
                key={index}
                className="relative group transition-all duration-300 border-b-2 border-b-[#2e294e] hover:border-b-[#21FA90] hover:text-[#21FA90] hover:scale-105"
              >
                <Link href={`${item == 'Home' ? '/' : '/' + item.toLowerCase()}`} className="relative z-10">
                  {item}
                </Link>
                {/* Glow Effect */}
                <span className="absolute inset-0 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-[#21FA90] blur-lg rounded-md"></span>
              </div>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-[#1a172b] py-4 px-6 rounded-lg">
          {["Home", "About", "Services", "Portfolio", "Blogs", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="block text-white text-lg border-b-2 border-b-[#141122] hover:border-b-[#21FA90] hover:text-[#21FA90] transition-all duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default MainNavBar;
