// src/components/GoogleAnalytics.tsx
"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  // Only render Google Analytics script in production
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BBM1F2WKNL`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BBM1F2WKNL');
          `,
        }}
      />
    </>
  );
}