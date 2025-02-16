import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavBar from "@/components/MainNavBar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import CTASection from "@/components/CTASection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BeTech - IT Solutions",
  description: "BeTech is your trusted partner for IT solutions, cloud management, and cybersecurity. Contact us today for a free consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        <header>
          <div
            className={`fixed left-0 w-full flex justify-between top-0 bg-[#141122] bg-opacity-95 shadow-md z-[100]`}
          >
            <MainNavBar />
          </div>
        </header>
        <main>{children}</main>
        <div className="relative min-h-[500px] z-50">
          <CTASection />
        </div>
        <div className="relative min-h-[500px] z-50">
          <ContactUs />
        </div>
        <Footer />
      </body>
    </html>
  );
}
