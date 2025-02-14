"use client";
import { useState, useEffect } from "react";
import LavaLamp from "@/components/LavaLamp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { MagicCard } from "@/components/ui/magic-card";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Card } from "primereact/card";
import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Blocks,
  Code,
  BarChart3,
} from "lucide-react";
import MainNavBar from "@/components/MainNavBar";

import { BoxesCore } from "@/components/BoxesCore";
import { cn } from "@/lib/utils";
import CTASection from "@/components/CTASection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("🎉 Thank you! Your free eBook is on its way!");
      setEmail(""); // Clear input
    } else {
      setMessage("⚠️ Please enter a valid email address.");
    }
  };
  return (
    <div>
      
      <div className="relative w-full h-auto">
        <LavaLamp />
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-around bg-gradient-to-b from-[#2e294ea3] to-[#1a172c] gap-4 min-h-[1200px] md:min-h-[1200px] text-white text-center px-12 mt-[-200px]">
          <div className="md:w-[40%]">
          <h1 className="text-3xl text-left md:text-5xl title transform scale-y-110 uppercase font-extrabold tracking-widest text-white py-4">
            Smart Solutions for a Digital Future
          </h1>
          <p className="text-xl text-left mt-4">
            Custom software development and IT strategies designed to drive your
            business forward.
          </p>
          <form
            className="cta-form w-full flex justify-start mt-10"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cta-input px-3 md:px-12 mr[-5px] md:mr-[-10px] text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <PulsatingButton className="px-2 md:px-10 md:py-4 bg-primary">
              Get Free E-book
            </PulsatingButton>
          </form>

          {message && <p className="cta-message">{message}</p>}
          </div>
          <div>
            <Image
              src="/hero-img.gif"
              alt="Hero Image"
              width={300}
              height={100}
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 w-screen px-4 md:px-20 items-center justify-center overflow-hidden pt-8 z-50 md:mt-[-200px]">
          <div className="md:hidden mt-[-100px]">
            <Image
              src={"/laptop-security.svg"}
              width={800}
              height={800}
              alt="Laptop Image"
              className="relative z-[60] w-[100%] h-auto"
            />
          </div>
          <div className="relative bg-slate-50 px-6 py-14 rounded-lg mt-[-150px] md:mt-0">
            <BoxReveal boxColor={"#21FA90"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Full Suite IT Services<span className="text-[#2E294E]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#21FA90"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                Save Time and Money With{" "}
                <span className="text-[#2E294E]">BeTech Solutions</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#21FA90"} duration={0.5}>
              <div className="mt-6">
                <p>
                  -&gt; Be confident in outsourcing your IT requirements including
                  <span className="font-semibold text-[#2E294E]"> Cybersecurity</span>,
                  <span className="font-semibold text-[#2E294E]">
                    {" "}
                    Cloud Management
                  </span>
                  ,
                  <span className="font-semibold text-[#2E294E]">
                    {" "}
                    Software Development
                  </span>
                  , and
                  <span className="font-semibold text-[#2E294E]">
                    {" "}
                    more
                  </span>
                  . <br />
                  -&gt; 100% satisfaction guarantee, and tailored to your needs. <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#21FA90"} duration={0.5}>
              <a href="/contact"><Button className="mt-[1.6rem] bg-[#2E294E]">Contact Us</Button></a>
            </BoxReveal>
          </div>
          <div className="hidden md:block md:mt-[-200px]">
            <Image
              src={"/laptop-security.svg"}
              width={800}
              height={800}
              alt="Laptop Image"
              className="w-[100%] h-auto"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 md:px-20 px-4 gap-7 z-50 mt-8">
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <ShieldCheck className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Cybersecurity & Ethical Hacking
            </h3>
            <p className="m-0 text-white">
              Protect your business with advanced security solutions.
            </p>
          </Card>
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <BrainCircuit className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Intelligent Automation
            </h3>
            <p className="m-0 text-white">
              Leverage AI-powered automation and data-driven insights.
            </p>
          </Card>
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <Cloud className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Cloud Computing & DevOps
            </h3>
            <p className="m-0 text-white">
              Scale efficiently with cloud infrastructure and automation.
            </p>
          </Card>
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <Blocks className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Blockchain & Web3 Development
            </h3>
            <p className="m-0 text-white">
              Adopt decentralized applications with blockchain technology.
            </p>
          </Card>
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <Code className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Full-Stack Web & Mobile Development
            </h3>
            <p className="m-0 text-white">
              Build high-performance web and mobile applications.
            </p>
          </Card>
          <Card className="bg-[#141122] col-span-1 px-4 py-8 flex flex-col items-center text-center justify-center rounded-sm shadow-md shadow-[#2e294e] hover:shadow-lg hover:shadow-[#2e294e] transition-shadow duration-300">
            <BarChart3 className="text-[#21FA90] w-full h-28 mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">
              IT Consulting & Automation
            </h3>
            <p className="m-0 text-white">
              Optimize workflows with AI-driven automation and consulting.
            </p>
          </Card>
        </div>
        <div className="h-[300px] px-4 md:px-0 text-center mt-9 relative w-full overflow-hidden bg-gradient-to-b from-[#060608] to-[#000] flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#060608] to-[#000] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <BoxesCore />
          <h1
            className={cn(
              "md:text-5xl text-3xl tracking-wider md:tracking-normal uppercase text-center text-white relative z-20"
            )}
          >
            Be <span className="text-purple-400">Innovative</span>,
            <br className="md:hidden" /> Be{" "}
            <span className="text-blue-400">Creative</span>,
            <br className="md:hidden" /> Be{" "}
            <span className="text-green-400">Technology</span>
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Embrace the future where creativity and technology merge. Transform
            ideas into reality with cutting-edge innovation and digital
            solutions.
          </p>
          <a href="/contact"><Button className="relative mt-6 px-6 py-2 bg-[#2e294e] hover:bg-purple-600 text-white tracking-wider font-semibold rounded-lg z-20">
            Start Innovating Today
          </Button></a>
        </div>

        
      </div>
    </div>
  );
}
