"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import React from "react";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import { Bot, Brain, Clock, CloudCog, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import AboutLavaLamp from "@/components/AboutLavaLamp";
import MissionVision from "@/components/MissionVision";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" text-white py-16 relative w-full h-auto">
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#2e294e] bg-opacity-0 border-0 p-20">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-wider uppercase">
          About <span className="text-[#21FA90]">BeTech Solutions</span>
        </p>
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.1}
          duration={0.3}
          repeatDelay={0}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <AboutLavaLamp />
      <div className="container mx-auto mt-[-200px] flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/laptop.svg"
          alt="Team Photo"
          width={600}
          height={200}
          className="relative z-50 mb-[-150px] md:mb-20 md:mr-[-150px]" // Reduce negative margin
        />
        <div className="relative z-40 bg-[#1a172b] shadow-lg shadow-[#21FA90] max-w-3xl text-center mb-12 py-24 px-12 md:pl-36 md:pr-12">
          {/* Balanced padding */}
          <h2 className="text-slate-50 text-3xl md:text-5xl uppercase mb-6">
            Who We Are
          </h2>
          <p className="text-slate-300 text-xl md:text-xl text-center md:text-justify w-[80%] mx-auto">
            We are a team of passionate IT professionals committed to delivering
            top-notch solutions that empower businesses to thrive in the digital
            landscape. With a focus on innovation and excellence, we bring a
            wealth of expertise to every project.
          </p>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-4 mt-28 mb-40 h-[500px] px-36">
        
        <Image
        width={400}
        height={400}
        src="about-us-how-we-work.svg"
        alt="ai graphic"
        />
        <h2 className="text-8xl uppercase font-bold">How We Work</h2>
        <p className="text-lg text-center md:w-[70%]">At BeTech, we leverage the power of AI-driven automation to streamline workflows, enhance efficiency, and create smarter, data-driven solutions for businesses. Our approach focuses on integrating artificial intelligence, machine learning, and automation into web development and business processes to reduce manual effort, improve decision-making, and drive growth.</p>
        <a className="bg-[#21FA90] px-8 font-bold py-4 text-black cursor-pointer hover:bg-[#46b17e] rounded-lg">Learn More</a>
      </div>


      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Cybersecurity & Ethical Hacking",
              description:
                "Protect your business with advanced security solutions.",
              icon: <Bot className="text-[#21FA90] w-12 h-12 mb-4" />,
            },
            {
              title: "Intelligent Automation",
              description:
                "Leverage AI-powered automation and data-driven insights.",
              icon: <Brain className="text-[#21FA90] w-12 h-12 mb-4" />,
            },
            {
              title: "Cloud Computing & DevOps",
              description:
                "Scale efficiently with cloud infrastructure and automation.",
              icon: <CloudCog className="text-[#21FA90] w-12 h-12 mb-4" />,
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-[#1a172b] p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#2e294e] border-2 border-[#2e294e] transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      


      {/* <div className="h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-6">
          {" "}
          <div className=" p-6 shadow-lg shadow-[#5e17eb2c] rounded-lg border-t-4 border-[#5e17eb] text-center">
            {" "}
            <img
              src="/branding.svg"
              alt="Branding"
              className="mx-auto mb-4"
            />{" "}
            <h3 className="text-lg font-semibold">Branding & Identity</h3>{" "}
            <a href="#" className="text-[#21FA90] font-semibold mt-2 block">
              MORE
            </a>{" "}
          </div>{" "}
          <div className=" p-6 shadow-lg shadow-[#5e17eb2c] rounded-lg border-t-4 border-[#5e17eb] text-center">
            {" "}
            <img
              src="/development.svg"
              alt="Development"
              className="mx-auto mb-4"
            />{" "}
            <h3 className="text-lg font-semibold">Web Development</h3>{" "}
            <a href="#" className="text-[#21FA90] font-semibold mt-2 block">
              MORE
            </a>{" "}
          </div>{" "}
          <div className=" p-6 shadow-lg shadow-[#5e17eb2c] rounded-lg border-t-4 border-[#5e17eb] text-center">
            {" "}
            <img
              src="/marketing.svg"
              alt="Marketing"
              className="mx-auto mb-4"
            />{" "}
            <h3 className="text-lg font-semibold">Digital Marketing</h3>{" "}
            <a href="#" className="text-[#21FA90] font-semibold mt-2 block">
              MORE
            </a>{" "}
          </div>{" "}
          <div className=" p-6 shadow-lg shadow-[#5e17eb2c] rounded-lg border-t-4 border-[#5e17eb] text-center">
            {" "}
            <img
              src="/consulting.svg"
              alt="Consulting"
              className="mx-auto mb-4"
            />{" "}
            <h3 className="text-lg font-semibold">IT Consulting</h3>{" "}
            <a href="#" className="text-[#21FA90] font-semibold mt-2 block">
              MORE
            </a>{" "}
          </div>{" "}
        </div>{" "}
        
      </div> */}
      

      <div className="grid grid-cols-1 md:grid-cols-2 align-middle items-center text-white p-10 mt-20 rounded-lg text-center md:px-28 px-6">
          <div className="text-center md:text-left md:w-[80%]">
            <h2 className="uppercase font-bold text-4xl md:text-8xl mb-4 text-white">About Us</h2>
            <p>At BeTech Solutions, we are passionate about solving business challenges through innovative online solutions. Specializing in web development, brand development, and online product strategy, we help businesses establish a strong digital presence that drives growth and efficiency.</p>
          </div>

          <div className="flex flex-col gap-11">

            <div className="flex items-center justify-start gap-6 px-4 py-3 border bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e]">

              <div>
                <Image
                width={100}
                height={100}
                src={"/about-us-img-1.svg"}
                alt="about us"
                className="rounded-xl"
                />
              </div>

              <div className="md:w-[70%] ">
                <h3 className="uppercase font-bold text-2xl mb-4 text-left text-white">Custom Solutions</h3>
                <p className="text-left">We create tailored digital products that align with your business goals.</p>
              </div>

            </div>


            <div className="flex items-center justify-start gap-6 px-4 py-3 border bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e]">

              <div>
                <Image
                width={100}
                height={100}
                src={"/about-us-img-1(1).svg"}
                alt="about us"
                className="rounded-xl"
                />
              </div>

              <div className="md:w-[70%] w-[60%]">
                <h3 className="uppercase font-bold text-2xl mb-4 text-left text-white">Technical Expertise</h3>
                <p className="text-left">We leverage modern frameworks and cloud solutions for high-performance applications.</p>
              </div>

            </div>

            <div className="flex items-center justify-start gap-6 px-4 py-3 border bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e]">

              <div>
                <Image
                width={100}
                height={100}
                src={"/about-us-img-1(2).svg"}
                alt="about us"
                className="rounded-xl"
                />
              </div>

              <div className="md:w-[70%] w-[60%]">
                <h3 className="uppercase font-bold text-2xl md:text-2xl mb-4 text-left text-white">Business Growth Focus</h3>
                <p className="text-left md:text-justify"> We don&apos;t just build software—we develop strategies to help your business thrive online.</p>
              </div>

            </div>
          </div>
      </div>

      

      <div className="mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12 justify-items-center">
          <div >
            <Image
            width={500}
            height={500}
            src="about-us-img-1(3).svg"
            alt="ai robot"
            className=""
            />
          </div>
          <div className=" flex flex-col justify-center">
            <h2 className="uppercase text-6xl font-bold pb-6 text-[#21FA90]">Why Choose Us</h2>
            <h3 className="text-4xl font-semibold pb-6">Our Unique Offer</h3>
            <p className="pb-6">With years of experience in IT support, system administration, and full-stack development, we've worked on projects ranging from expense tracking applications and cloud file management systems to field service management tools and dynamic websites. Our portfolio includes cutting-edge technologies like Next.js, PostgreSQL, Express.js, Vue.js, .NET, and Azure, ensuring robust and scalable solutions.</p>
           
          </div>
        </div>


        <div className="flex flex-col md:flex-row md:justify-center gap-6 px-16 mt-[-100px]">
          <div className="bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e] h-[200px] md:w-[30%] rounded-lg flex flex-col items-center justify-center gap-4">
            <h2 className="flex justify-center items-center text-3xl gap-4 w-full"><Phone className="text-8xl" /> Call Us</h2>
            <p>216-465-5346</p>
          </div>
          <div className="bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e] h-[200px] md:w-[30%] rounded-lg flex flex-col items-center justify-center gap-4">
            <h2 className="flex justify-center items-center text-3xl gap-4 w-full"><Mail /> Email Us</h2>
            <p>contact@betechpro.com</p>
          </div>
          <div className="bg-[#1a172b] border-[#2e294e] shadow-lg shadow-[#2e294e] h-[200px] md:w-[30%] rounded-lg flex flex-col items-center justify-center gap-4">
            <h2 className="flex justify-center items-center text-3xl gap-4 w-full"><Clock /> Hours</h2>
            <p>Monday-Friday: 8am-6pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
