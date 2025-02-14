"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch("/api/blogs"); // ✅ Fetch from new API route
        const data = await response.json();
        setBlogPosts(data.slice(0, 5)); // ✅ Limit to latest 5 posts
      } catch (error) {
        console.error("🚨 Error fetching blog posts:", error);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <section className="w-full bg-[#141122] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Blog Cards Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="relative group block p-6 bg-[#1a172b] rounded-lg border border-[#2e294e] hover:border-[#21FA90] hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold group-hover:text-[#21FA90]">{post.title}</h4>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
                <span className="mt-4 flex items-center text-sm text-gray-300 group-hover:text-[#21FA90] transition-all duration-300">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-[#21fa9148] blur-3xl rounded-lg"></span>
              </Link>
            ))
          ) : (
            <p className="text-gray-400">Loading blog posts...</p>
          )}
        </div>

        {/* CTA Content Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold">
            <span className="text-[#21FA90]">Innovate. Secure. Scale.</span>
          </h2>
          <h3 className="text-lg mt-2">Empowering businesses with next-gen technology.</h3>
          <hr className="my-4 border-[#2e294e] w-full" />

          <p className="text-gray-300 italic">
            "BeTech helped us automate our workflows, secure our infrastructure, and scale effortlessly.
            Their AI-powered solutions have saved us countless hours!"
            <span className="block mt-2 text-[#21FA90]">– FutureTech CEO</span>
          </p>

          {/* Inline Form */}
          <form className="w-full flex mt-6">
            <input
              type="email"
              placeholder="Your work email"
              required
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-[#21FA90]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#21FA90] text-black font-semibold rounded-r-lg hover:bg-[#16c77d] transition-all duration-300"
            >
              Get Started
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-2">
            <em>Free consultation, no upfront commitment</em>
          </p>

          <hr className="my-4 border-[#2e294e] w-full" />
          <p className="text-sm text-gray-400">
            Interested in an enterprise solution?{" "}
            <Link href="mailto:sales@betech.com" className="text-[#21FA90] hover:underline">
              Contact sales
            </Link>{" "}
            for a tailored strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
