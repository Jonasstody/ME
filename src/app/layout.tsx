import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jonas Fabian Koerl',
  description: "I specialize in financial modelling, market analysis, and business strategy development to help businesses optimize operations and achieve sustainable growth. I work across industries, tailoring solutions to address unique challenges and drive data-backed decisions.\n\nMy expertise includes cost-benefit analysis, market entry strategy, and financial consulting. I focus on delivering practical, results-driven solutions that enhance operational efficiency and support long-term business goals.",
  openGraph: {
    title: 'Jonas Fabian Koerl',
    description: "I specialize in financial modelling, market analysis, and business strategy development to help businesses optimize operations and achieve sustainable growth. I work across industries, tailoring solutions to address unique challenges and drive data-backed decisions.\n\nMy expertise includes cost-benefit analysis, market entry strategy, and financial consulting. I focus on delivering practical, results-driven solutions that enhance operational efficiency and support long-term business goals.",
    type: 'website',
    locale: 'en_US', 
    url: 'https://jonaskoerl.com', // Placeholder, update with actual URL
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Jonas Fabian Koerl',
    description: "I specialize in financial modelling, market analysis, and business strategy development to help businesses optimize operations and achieve sustainable growth. I work across industries, tailoring solutions to address unique challenges and drive data-backed decisions.\n\nMy expertise includes cost-benefit analysis, market entry strategy, and financial consulting. I focus on delivering practical, results-driven solutions that enhance operational efficiency and support long-term business goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics - Only in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-BBM1F2WKNL"
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
        )}
      </head>
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}