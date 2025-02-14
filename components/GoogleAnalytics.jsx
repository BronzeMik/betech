"use client"; // ✅ Ensures this runs on the client side

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // ✅ Load GA ID from env

const GoogleAnalytics = () => {
  const pathname = usePathname(); // ✅ Get current page path

  useEffect(() => {
    if (GA_TRACKING_ID) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]); // ✅ Run whenever the route changes

  if (!GA_TRACKING_ID) return null; // ✅ Prevent errors if GA ID is missing

  return (
    <>
      {/* ✅ Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
