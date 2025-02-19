"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Cloud,
  Code,
  Database,
  ArrowRight,
  CheckCheck,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@radix-ui/themes";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { isVerified } from "@/lib/utils";
import ITRoadmapForm from "@/components/ITRoadmapForm";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";


const AIPoweredITGenerator = () => {
  const emailRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    companyName: "",
    companySize: "",
    industry: "",
    techStack: "",
    itGoals: "",
    challenges: "",
    cloudPreference: "",
    securityPriority: "",
  });

  const searchParams = useSearchParams();
  const verificationToken = searchParams.get("verification");
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {

      if (!verificationToken) {
        console.log("No verification token provided");
        setEmailVerified(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post("/api/verify-email", {
          token: verificationToken,
        });

        if (response.status !== 200) {
          console.log("Invalid verification");
          toast({
            title: "Error",
            description: "An error occurred while verifying your email.",
            action: (
              <ToastAction altText="Your email has not been verified">
                Please verify the email sent to you
              </ToastAction>
            ),
          });
          setEmailVerified(false);
          return;
        }

        if (response.data.message == "Email verified successfully") {
          console.log(response.data);
          console.log("Email verified successfully");
          setEmailVerified(true);
          toast({
            title: "Verification Successful",
            description: "You now have access to the tool!",
            action: (
              <ToastAction altText="Your email has been verified!">
                Success
              </ToastAction>
            ),
          });
        } else {
          console.log(response.data);
          setEmailVerified(false);
        }
      } catch (error) {
        console.error("Verification check failed:", error);
        toast({
          title: "Error",
          description: "An error occurred while verifying your email.",
          action: (
            <ToastAction altText="Your email has not been verified">
              Please verify the email sent to you
            </ToastAction>
          ),
        });
        setEmailVerified(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div className="text-center py-10 h-screen w-screen mt-[50px] flex items-center justify-center"><span className="loader w-[200px] h-[200px]"></span></div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();

    if (email) {
      try {
        console.log(email);
        // Sending the email to the subscribe API endpoint
        const response = await axios.post("/api/subscribe", { email: email });

        if (response.status === 200) {
          // Show success toast if the subscription is successful
          setEmailSent(true);
          toast({
            title: "Success!",
            description: "Your guide is on its way to your inbox.",
            status: "success",
          });
          // Reset the email input using the ref
          emailRef.current.value = ""; // Clear the input after submission
        } else {
          // Handle cases where the response is not 200 (e.g., validation errors)
          toast({
            title: "Error",
            description: response.data.message || "Something went wrong.",
            status: "error",
          });
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error(error);
        toast({
          title: "Error",
          description:
            error.response?.data?.message ||
            "An error occurred. Please try again.",
          status: "error",
        });
      } finally {
        // Reset the email sent state after a short delay
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      }
    }
  };

  const steps = ["Company Info", "IT Goals", "Cloud & Security", "Review"];

  const features = [
    {
      icon: Shield,
      title: "AI-Driven Cybersecurity",
      description:
        "Utilize AI-powered threat detection and compliance automation to safeguard your IT environment.",
    },
    {
      icon: Cloud,
      title: "Smart Cloud Management",
      description:
        "Optimize cloud resources with AI-driven insights for cost efficiency, scalability, and performance.",
    },
    {
      icon: Code,
      title: "AI-Enhanced DevOps",
      description:
        "Streamline CI/CD pipelines with predictive analytics and automated workflows.",
    },
    {
      icon: Database,
      title: "Intelligent IT Infrastructure",
      description:
        "Leverage AI to design scalable, resilient architectures with automated monitoring and optimization.",
    },
  ];

  const benefits = [
    "Step-by-step implementation guides",
    "Ready-to-use templates and scripts",
    "Cost optimization strategies",
    "Security compliance checklists",
    "Performance optimization tips",
    "Disaster recovery blueprints",
  ];

  const testimonials = [
    {
      quote:
        "This guide transformed how we approach IT infrastructure. Highly recommended!",
      author: "Sarah Chen",
      role: "CTO, TechCore Solutions",
    },
    {
      quote:
        "The most comprehensive IT modernization resource I've found. Worth every minute.",
      author: "Michael Rodriguez",
      role: "IT Director, Global Systems Inc",
    },
    {
      quote: "Practical, actionable, and current. Exactly what we needed.",
      author: "David Park",
      role: "DevOps Lead, CloudScale",
    },
  ];

  return (
    <Suspense>
      {emailVerified ? (
        <div className="flex flex-col justify-center items-center text-center px-4 py-32 bg-[#fefefe]">
          <div className="flex flex-col md:flex-row w-full">
            {/* Sidebar */}
            <div
              className={`md:border-r-2 md:h-screen md:border-r-gray-100 p-4 ${
                isOpen ? "block" : "hidden"
              } md:block md:w-1/4 bg-[#3fa885]`}
            >
              <h2 className="text-[#fefefe] text-left font-semibold text-lg">Form Sections</h2>
              <Suspense>
                <p className="text-[#3fa885]">{searchParams}</p>
              </Suspense>
              <button
                className="block md:hidden bg-white text-green-600 px-2 py-1 mt-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <ul className="flex flex-col items-start justify-around w-full my-8">
                {steps.map((currStep, index) => (
                  <li key={index} className={`py-2 px-3 ${index === step ? "bg-white text-[#3fa885]" : "text-[#fefefe]"} border-b-2 border-b-gray-100 w-full text-left py-4 hover:underline cursor-pointer`}
                  onClick={() => setStep(index)}
                  >
                    {currStep}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2f2f2f]">
                IT Roadmap Generator
              </h1>
              <p className="text-[#3fa885] py-5 md:text-lg">
                Create your personalized IT strategy with AI-powered insights
              </p>
              <button
                className="md:hidden bg-green-600 text-white px-2 py-1 rounded mb-4"
                onClick={() => setIsOpen(true)}
              >
                Open Sidebar
              </button>
              <ITRoadmapForm
              step={step}
              setStep={setStep}
              steps={steps}
              formData={formData}
              setFormData={setFormData}
              searchParams={searchParams}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full overflow-hidden">
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
            <div className="absolute inset-0 bg-[#141122] -z-10" />
            <div className="container max-w-6xl mx-auto">
              <div className="text-center space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-[#fff]/95  rounded-full mb-4">
                  <span className="text-[#2f2f2f] text-sm font-medium">
                    Free Enterprise IT Guide
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl text-[#fff] font-bold leading-tight">
                  Build Your IT Roadmap
                  <br />
                  <span className="text-[#3fa885]">in Minutes with AI</span>
                </h1>
                <p className="text-lg md:text-xl text-[#fff] max-w-2xl mx-auto">
                  Transform your IT strategy with AI-driven insights. Generate a
                  clear, customized roadmap in just a few clicks—no guesswork,
                  just results.
                </p>

                {emailSent && (
                  <p className="text-[#3fa885]">
                    Please verify using the link sent to your email! (If you do
                    not see the email in your inbox, check your spam folder)
                  </p>
                )}
                {!emailSent && (
                  <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto space-y-4"
                  >
                    <div className="glass p-2 rounded-full flex items-center gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your work email"
                        className="rounded-full border-0 bg-[#fff] focus-visible:ring-0"
                        ref={emailRef}
                      />
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="rounded-xl cursor-pointer button-gradient"
                      >
                        Generate Your Roadmap{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-[#3fa885]">
                      Join 10,000+ IT professionals who already trust our
                      insights
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  AI-Powered IT Roadmap: What You'll Gain
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Leverage AI-driven insights to streamline IT strategy,
                  optimize infrastructure, and future-proof your technology
                  roadmap.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="glass-card p-6 animate-slide-up bg-[#4062de]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="h-10 w-10 text-[#fff] mb-4" />
                    <h3 className="text-xl text-[#fff] font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#fff]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  AI-Powered IT Roadmap for Success
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Unlock the power of AI to streamline IT operations, enhance
                  security, and drive digital transformation with our
                  comprehensive roadmap.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCheck className="h-6 w-6 text-[#4062de] flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-20 px-4 bg-[#141122]">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="h-6 w-6 text-[#3fa885]" />
                  <span className="text-[#3fa885] font-medium">
                    Trusted by Industry Leaders
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#fff]">
                  What Our Users Say
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.author}
                    className="glass-card p-6 bg-slate-50 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#4062de] text-[#4062de]"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4">
            <div className="container max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
                <p className="text-muted-foreground">
                  Everything you need to know about our IT infrastructure guide
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "What’s included in the AI-powered IT roadmap guide?",
                    a: "This guide provides AI-driven insights, step-by-step implementation strategies, automation templates, security compliance checklists, and best practices for optimizing IT infrastructure, cloud management, DevOps, and cybersecurity.",
                  },
                  {
                    q: "How will I receive the guide?",
                    a: "Once you enter your email, you'll get instant access to the guide in a downloadable PDF format, along with exclusive AI-powered tools and automation scripts to streamline your IT processes.",
                  },
                  {
                    q: "Is the content updated to reflect the latest IT trends?",
                    a: "Absolutely! Our guide is regularly updated with the latest industry trends, AI-driven advancements, security protocols, and emerging best practices to keep your IT strategy ahead of the curve.",
                  },
                  {
                    q: "Who is this guide for?",
                    a: "This guide is designed for IT professionals, business leaders, and tech teams looking to implement AI-driven automation, improve infrastructure efficiency, and stay ahead in today’s rapidly evolving IT landscape.",
                  },
                  {
                    q: "Do I need technical expertise to use this guide?",
                    a: "Not at all! Whether you're a beginner or an experienced IT professional, the guide provides clear, actionable steps with AI-powered recommendations to suit all skill levels.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.q}
                    className="glass-card p-6 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-[#141122]">
            <div className="container max-w-4xl mx-auto text-center">
              <h2 className="text-3xl text-[#3fa885] font-bold mb-6">
                Supercharge Your IT Strategy with AI-Powered Insights
              </h2>
              <p className="text-[#fff] mb-8 max-w-2xl mx-auto">
                Unlock cutting-edge automation, cost-saving strategies, and
                security best practices with our AI-driven IT roadmap. Get
                instant access and future-proof your IT infrastructure today.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="glass p-2 rounded-full flex items-center gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="rounded-full border-0 bg-[#fff] focus-visible:ring-0"
                  />
                  <Button
                    type="submit"
                    className="rounded-full button-gradient"
                  >
                    Get My AI Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
    </Suspense>
  );
};

export default AIPoweredITGenerator;
