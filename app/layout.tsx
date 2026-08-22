import type { Metadata } from "next";
import Script from "next/script";

import AppLayoutShell from "@/components/layout/AppLayoutShell";
import CookieConsent from "@/components/common/CookieConsent";
import NewsletterPopup from "@/components/newsletter/NewsletterPopup";
import JsonLd from "@/components/seo/JsonLd";

import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  "G-3HVCMZ3306";

/* =========================================================
   GLOBAL METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",
    template: "%s | Steelbuild Infra Projects Limited",
  },

  description:
    "Steelbuild Infra Projects Limited is a Pre-Engineered Building and steel infrastructure company delivering PEB buildings, industrial sheds, warehouses, factories, structural steel, roofing, cladding and engineered construction solutions across India.",

  applicationName:
    "Steelbuild Infra Projects Limited",

  authors: [
    {
      name:
        "Steelbuild Infra Projects Limited",
      url:
        siteUrl,
    },
  ],

  creator:
    "Steelbuild Infra Projects Limited",

  publisher:
    "Steelbuild Infra Projects Limited",

  category:
    "Pre-Engineered Buildings and Industrial Construction",

  classification:
    "Pre-Engineered Buildings, Steel Structures, Industrial Buildings, Warehouses, Factories and Steel Infrastructure",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",

    locale:
      "en_IN",

    url:
      siteUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",

    description:
      "Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding and infrastructure solutions across India.",

    images: [
      {
        url:
          "/images/seo/steelbuild-og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Steelbuild Infra Projects Limited - Pre-Engineered Buildings and Steel Structures",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",

    description:
      "Pre-Engineered Buildings, industrial steel structures, warehouses, factories and infrastructure solutions across India.",

    images: [
      "/images/seo/steelbuild-og-image.jpg",
    ],
  },

  robots: {
    index:
      true,

    follow:
      true,

    googleBot: {
      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },

  other: {
    "content-language":
      "en-IN",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =======================================================
     ORGANIZATION SCHEMA
  ======================================================= */

  const organizationSchema = {
    "@type":
      "Organization",

    "@id":
      `${siteUrl}/#organization`,

    name:
      "Steelbuild Infra Projects Limited",

    alternateName:
      "Steelbuild Infra Projects",

    url:
      siteUrl,

    logo: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/logo/steelbuild-logo.png`,
    },

    description:
      "Steelbuild Infra Projects Limited provides Pre-Engineered Buildings, industrial steel structures, warehouses, factories, industrial sheds, roofing, cladding and engineered infrastructure solutions.",

    areaServed: {
      "@type":
        "Country",

      name:
        "India",
    },

    knowsAbout: [
      "Pre-Engineered Buildings",
      "PEB Buildings",
      "Pre-Engineered Steel Buildings",
      "Steel Buildings",
      "Structural Steel",
      "Industrial Construction",
      "Industrial Steel Buildings",
      "Industrial Sheds",
      "Warehouse Buildings",
      "Warehouse Construction",
      "Factory Buildings",
      "Factory Construction",
      "Commercial Steel Buildings",
      "Multi-Storey Steel Buildings",
      "Heavy Steel Structures",
      "Steel Structure Fabrication",
      "PEB Fabrication",
      "PEB Engineering",
      "PEB Design",
      "PEB Erection",
      "Steel Building Erection",
      "Turnkey PEB Projects",
      "Industrial Infrastructure",
      "Roofing Systems",
      "Roofing Sheets",
      "Standing Seam Roofing",
      "Deck Sheets",
      "Cladding Systems",
      "Wall Cladding",
      "Sandwich Panels",
      "Insulation Systems",
      "Sheeting Accessories",
      "Metal Louvers",
      "Mezzanine Systems",
      "Industrial Warehouses",
      "Logistics Warehouses",
      "Cold Storage Buildings",
      "Manufacturing Facilities",
      "Steel Infrastructure",
      "Sustainable Steel Construction",
      "Modular Steel Construction"
    ],

    contactPoint: {
      "@type":
        "ContactPoint",

      contactType:
        "sales",

      url:
        `${siteUrl}/contact`,

      areaServed:
        "IN",

      availableLanguage: [
        "English",
        "Hindi",
      ],
    },
  };

  /* =======================================================
     WEBSITE SCHEMA
  ======================================================= */

  const websiteSchema = {
    "@type":
      "WebSite",

    "@id":
      `${siteUrl}/#website`,

    url:
      siteUrl,

    name:
      "Steelbuild Infra Projects Limited",

    alternateName:
      "Steelbuild Infra Projects",

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     GLOBAL STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      organizationSchema,
      websiteSchema,
    ],
  };

  return (
    <html lang="en-IN">
      <body>
        {/* ===============================================
            GLOBAL SEO / GEO / AEO STRUCTURED DATA
        =============================================== */}

        <JsonLd
          data={structuredData}
        />

        {/* ===============================================
            WEBSITE
        =============================================== */}

        <AppLayoutShell>
          {children}
        </AppLayoutShell>

        <NewsletterPopup />

        <CookieConsent />

        <SanityLive />

        {/* ===============================================
            GOOGLE ANALYTICS 4
        =============================================== */}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer =
              window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag(
              'js',
              new Date()
            );

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