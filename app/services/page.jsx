"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import LavaLamp from "@/components/LavaLamp";
import Image from "next/image";

const Services = () => {
  return (
    <>
    
    <section id="services" className="w-full py-20 z-40 bg-[#141122]">
        
      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row w-[50%] items-center justify-center">
            <div>
            <p className="z-20 whitespace-pre-wrap uppercase text-left text-3xl md:text-5xl font-bold tracking-wider text-[#21FA90]">
            Comprehensive Services
            </p>
            <p className="text-white py-4 text-left">Our expert consulting and smart tools empower you to make data-driven decisions, optimize processes, and ensure long-term success. Let us help you unlock your startup&apos;s full potential.</p>
            <div className="flex gap-2">
                <a className="bg-[#21FA90] px-4 py-2 uppercase cursor-pointer">Learn More</a>
                <a className="bg-white px-4 py-2 uppercase cursor-pointer">Contact Us</a>
            </div>
            </div>
            <Image 
            width={400}
            height={300}
            alt="robot"
            src='/services_page_img_transparent.png'
            priority
            loading="eager"
            />
        </div>
       
        {/* <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        /> */}
      </div>

      <div className="relative z-0 w-full h-fit border-b-[1px] border-b-[#2e294e] transform -skew-y-6">
        <div className="bg-transparent flex rounded-lg px-6 py-32 md:p-36 w-full skew-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute top-1 z-[5] w-24 h-24 border border-[#21FA90] rounded-xl bg-[#141122]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 102 102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle
                    cx="50"
                    cy="40"
                    r="20"
                    className="fill-[#21FA90]"
                  ></circle>
                  <circle
                    cx="70"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="30"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="50"
                    cy="60"
                    r="20"
                    className="fill-[#00ff84]"
                  ></circle>
                </g>
              </svg>
            </div>
            <div className="absolute top-14 w-[2px] h-full bg-gradient-to-b from-[#21FA90] to-[#0027EC]"></div>
          </div>
          {/* Cloud Management */}
          <div className="flex flex-col items-center justify-center ml-4 md:ml-36">
            <div className=" flex flex-col items-center text-center mt-6">
              <h2 className="text-2xl md:text-5xl uppercase font-bold bg-gradient-to-r from-[#21FA90] to-[#21FA90] bg-clip-text text-transparent">
                Cloud Management
              </h2>
              <p className="w-[80%] mt-2 text-gray-600">
                Optimize your cloud infrastructure with scalable,
                cost-effective, and secure cloud solutions. We help businesses
                migrate, manage, and maintain their cloud services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="flex flex-col items-center text-lg font-semibold text-gray-800">
                  Scalability
                </h3>
                <p className="text-gray-600 w-[80%]">
                  Easily scale your infrastructure to meet business demands.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Cost Efficiency
                </h3>
                <p className="text-gray-600">
                  Optimize resources and reduce cloud spending.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Security
                </h3>
                <p className="text-gray-600">
                  Ensure data protection with advanced cloud security measures.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Automation
                </h3>
                <p className="text-gray-600">
                  Automate workflows for seamless cloud operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 w-full h-fit border-b-[1px] border-b-[#2e294e] transform -skew-y-6">
        <div className="bg-transparent flex rounded-lg px-6 py-32 md:p-36 w-full skew-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute top-1 z-[5] w-24 h-24 border border-[#21FA90] rounded-xl bg-[#141122]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 102 102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle
                    cx="50"
                    cy="40"
                    r="20"
                    className="fill-[#21FA90]"
                  ></circle>
                  <circle
                    cx="70"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="30"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="50"
                    cy="60"
                    r="20"
                    className="fill-[#00ff84]"
                  ></circle>
                </g>
              </svg>
            </div>
            <div className="absolute top-14 w-[2px] h-full bg-gradient-to-b from-[#21FA90] to-[#0027EC]"></div>
          </div>
          {/* IT Support */}
          <div className="flex flex-col items-center justify-center ml-4 md:ml-36">
            <div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-2xl md:text-5xl uppercase font-bold bg-gradient-to-r from-[#21FA90] to-[#21FA90] bg-clip-text text-transparent">
                IT Support
              </h2>
              <p className="mt-2 text-gray-600 w-[80%]">
                Keep your business running smoothly with expert IT support. We
                provide troubleshooting, system maintenance, and infrastructure
                management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Help Desk
                </h3>
                <p className="text-gray-600">
                  24/7 technical support for all IT issues.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Network Management
                </h3>
                <p className="text-gray-600">
                  Ensure a reliable and secure IT network.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  System Maintenance
                </h3>
                <p className="text-gray-600">
                  Keep hardware and software running efficiently.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Cloud & Server Support
                </h3>
                <p className="text-gray-600">
                  Ensure uptime and reliability of cloud services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 w-full h-fit  border-b-[1px] border-b-[#2e294e] transform -skew-y-6">
        <div className="bg-transparent flex rounded-lg px-6 py-32 md:p-36 w-full skew-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute top-1 z-[5] w-24 h-24 border border-[#21FA90] rounded-xl bg-[#141122]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 102 102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle
                    cx="50"
                    cy="40"
                    r="20"
                    className="fill-[#21FA90]"
                  ></circle>
                  <circle
                    cx="70"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="30"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="50"
                    cy="60"
                    r="20"
                    className="fill-[#00ff84]"
                  ></circle>
                </g>
              </svg>
            </div>
            <div className="absolute top-14 w-[2px] h-full bg-gradient-to-b from-[#21FA90] to-[#0027EC]"></div>
          </div>
          {/* Cybersecurity */}
          <div className="flex flex-col items-center justify-center ml-4 md:ml-36">
            <div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-2xl md:text-5xl uppercase font-bold bg-gradient-to-r from-[#21FA90] to-[#21FA90] bg-clip-text text-transparent">
                Cybersecurity
              </h2>
              <p className="w-[80%] mt-2 text-gray-600">
                Protect your business with cutting-edge cybersecurity solutions.
                We safeguard data, detect threats, and prevent cyberattacks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Threat Detection
                </h3>
                <p className="text-gray-600">
                  Identify and prevent cyber threats in real time.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Data Protection
                </h3>
                <p className="text-gray-600">
                  Encrypt and secure sensitive business data.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compliance
                </h3>
                <p className="text-gray-600">
                  Ensure your business meets regulatory security standards.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Incident Response
                </h3>
                <p className="text-gray-600">
                  Rapid response and mitigation for security breaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 w-full h-fit border-b-[1px] border-b-[#2e294e] transform -skew-y-6">
        <div className="bg-transparent flex rounded-lg px-6 py-32 md:p-36 w-full skew-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute top-1 z-[5] w-24 h-24 border border-[#21FA90] rounded-xl bg-[#141122]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 102 102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle
                    cx="50"
                    cy="40"
                    r="20"
                    className="fill-[#21FA90]"
                  ></circle>
                  <circle
                    cx="70"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="30"
                    cy="50"
                    r="18"
                    className="fill-[#06c669]"
                  ></circle>
                  <circle
                    cx="50"
                    cy="60"
                    r="20"
                    className="fill-[#00ff84]"
                  ></circle>
                </g>
              </svg>
            </div>
            <div className="absolute top-3 w-[2px] h-full bg-gradient-to-b from-[#21FA90] to-[#0027EC]"></div>
          </div>
          {/* Software & Web Development */}
          <div className="flex flex-col items-center justify-center ml-4 md:ml-36">
            <div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-2xl md:text-5xl uppercase font-bold bg-gradient-to-br from-[#21FA90] to-[#21FA90] bg-clip-text text-transparent">
                Software & Web Development
              </h2>
              <p className="w-[80%] mt-2 text-gray-600">
                Build innovative software and web solutions tailored to your
                business needs. We specialize in modern, scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Custom Development
                </h3>
                <p className="text-gray-600">
                  Tailor-made solutions for unique business challenges.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Responsive Design
                </h3>
                <p className="text-gray-600">
                  Seamless user experience across all devices.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  API Integration
                </h3>
                <p className="text-gray-600">
                  Connect and integrate with third-party services.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  Performance
                </h3>
                <p className="text-gray-600">
                  Optimize your website for speed and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
