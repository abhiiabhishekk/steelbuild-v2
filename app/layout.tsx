import type { Metadata } from "next";
import Script from "next/script";

import AppLayoutShell from "@/components/layout/AppLayoutShell";
import CookieConsent from "@/components/common/CookieConsent";
import NewsletterPopup from "@/components/newsletter/NewsletterPopup";

import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  "G-3HVCMZ3306";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",

    template: "%s | Steelbuild Infra Projects Limited",
  },

  description:
    "Steelbuild Infra Projects Limited delivers Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding and infrastructure solutions across India.",

  applicationName: "Steelbuild Infra Projects Limited",

  authors: [
    {
      name: "Steelbuild Infra Projects Limited",
      url: siteUrl,
    },
  ],

  creator: "Steelbuild Infra Projects Limited",

  publisher: "Steelbuild Infra Projects Limited",

  category: "Industrial Construction",

  classification:
    "Pre-Engineered Buildings, Steel Structures and Industrial Infrastructure",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: siteUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",

    description:
      "Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding and infrastructure solutions across India.",

    images: [
      {
        url: "/images/seo/steelbuild-og-image.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited - Pre-Engineered Buildings and Steel Structures",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",

    description:
      "Pre-Engineered Buildings, industrial steel structures and infrastructure solutions across India.",

    images: ["/images/seo/steelbuild-og-image.jpg"],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  other: {
    "content-language": "en-IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <AppLayoutShell>
          {children}
        </AppLayoutShell>

        <NewsletterPopup />

        <CookieConsent />

        <SanityLive />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag(
              'config',
              '${GA_MEASUREMENT_ID}',
              {
                anonymize_ip: true
              }
            );
          `}
        </Script>
      </body>
    </html>
  );
}