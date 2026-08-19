import type { Metadata } from "next";

import HandrailsGuardrailsHero from "@/components/handrails-guardrails-page/HandrailsGuardrailsHero";
import HandrailsGuardrailsOverview from "@/components/handrails-guardrails-page/HandrailsGuardrailsOverview";
import HandrailsGuardrailsAdvantages from "@/components/handrails-guardrails-page/HandrailsGuardrailsAdvantages";
import HandrailsGuardrailsComponents from "@/components/handrails-guardrails-page/HandrailsGuardrailsComponents";
import HandrailsGuardrailsApplications from "@/components/handrails-guardrails-page/HandrailsGuardrailsApplications";
import HandrailsGuardrailsProcess from "@/components/handrails-guardrails-page/HandrailsGuardrailsProcess";
import HandrailsGuardrailsCTA from "@/components/handrails-guardrails-page/HandrailsGuardrailsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/mezzanine-systems/handrails-guardrails`;

/* =========================================================
   HANDRAILS & GUARDRAILS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Handrails & Guardrails Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial handrails, safety guardrails and steel protection systems for mezzanines, staircases, platforms, walkways, factories and warehouses across India.",

  alternates: {
    canonical:
      "/products/mezzanine-systems/handrails-guardrails",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Handrails & Guardrails Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial handrails, safety guardrails and steel protection systems for mezzanines, staircases, platforms, walkways, factories and warehouses across India.",

    images: [
      {
        url:
          "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Handrails and Guardrails Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Handrails & Guardrails Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial handrails and safety guardrail systems for mezzanines, platforms, walkways, factories and warehouses across India.",

    images: [
      "/images/products/mezzanine-floor.jpg",
    ],
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
};

/* =========================================================
   HANDRAILS & GUARDRAILS PAGE
========================================================= */

export default function HandrailsGuardrailsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Industrial Handrails and Guardrails Manufacturer in India",

    headline:
      "Engineered Industrial Handrail and Safety Guardrail Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial handrails, guardrails and steel safety systems for mezzanines, staircases, platforms, walkways, factories, warehouses and industrial facilities across India.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${pageUrl}/#service`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/products/mezzanine-floor.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id":
      `${pageUrl}/#service`,

    name:
      "Industrial Handrail and Guardrail Systems",

    alternateName: [
      "Industrial Handrails",
      "Safety Guardrails",
      "Steel Guardrails",
      "Mezzanine Handrails",
      "Platform Guardrails",
      "Industrial Safety Railings",
    ],

    serviceType:
      "Industrial Handrail and Guardrail Engineering, Manufacturing and Project Execution",

    url:
      pageUrl,

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type":
        "Country",

      name:
        "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for industrial handrails and guardrails used in mezzanine systems, staircases, platforms, walkways, factories, warehouses and industrial facilities.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Maintenance and Infrastructure Businesses",
    },
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type":
      "BreadcrumbList",

    "@id":
      `${pageUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name:
          "Home",

        item:
          siteUrl,
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Products",

        item:
          `${siteUrl}/products`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          "Mezzanine Systems",

        item:
          `${siteUrl}/products/mezzanine-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Handrails & Guardrails",

        item:
          pageUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      webPageSchema,
      serviceSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <main>
        <HandrailsGuardrailsHero />

        <HandrailsGuardrailsOverview />

        <HandrailsGuardrailsAdvantages />

        <HandrailsGuardrailsComponents />

        <HandrailsGuardrailsApplications />

        <HandrailsGuardrailsProcess />

        <HandrailsGuardrailsCTA />
      </main>
    </>
  );
}