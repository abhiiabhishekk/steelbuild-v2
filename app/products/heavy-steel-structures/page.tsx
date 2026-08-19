import type { Metadata } from "next";

import HeavySteelHero from "@/components/heavy-steel-structures-page/HeavySteelHero";
import HeavySteelOverview from "@/components/heavy-steel-structures-page/HeavySteelOverview";
import HeavySteelAdvantages from "@/components/heavy-steel-structures-page/HeavySteelAdvantages";
import HeavySteelSystems from "@/components/heavy-steel-structures-page/HeavySteelSystems";
import HeavySteelApplications from "@/components/heavy-steel-structures-page/HeavySteelApplications";
import HeavySteelProcess from "@/components/heavy-steel-structures-page/HeavySteelProcess";
import HeavySteelCTA from "@/components/heavy-steel-structures-page/HeavySteelCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/heavy-steel-structures`;

/* =========================================================
   HEAVY STEEL STRUCTURES PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Heavy Steel Structures Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered heavy steel structures for industrial plants, manufacturing facilities, infrastructure, process buildings and large-scale structural steel projects across India.",

  alternates: {
    canonical:
      "/products/heavy-steel-structures",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Heavy Steel Structures Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered heavy structural steel solutions for industrial plants, manufacturing facilities, infrastructure and large-scale steel projects across India.",

    images: [
      {
        url:
          "/images/products/heavy-steel-structures.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Heavy Steel Structure Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Heavy Steel Structures Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered heavy structural steel solutions for industrial, manufacturing and infrastructure projects across India.",

    images: [
      "/images/products/heavy-steel-structures.jpg",
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
   HEAVY STEEL STRUCTURES PAGE
========================================================= */

export default function HeavySteelStructuresPage() {
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
      "Heavy Steel Structures Manufacturer in India",

    headline:
      "Engineered Heavy Structural Steel Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered heavy steel structure solutions for industrial plants, manufacturing facilities, infrastructure, process buildings and large-scale structural steel projects across India.",

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
        `${siteUrl}/images/products/heavy-steel-structures.jpg`,
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
      "Heavy Steel Structure Solutions",

    alternateName: [
      "Heavy Structural Steel",
      "Heavy Steel Structures",
      "Structural Steel Fabrication",
      "Industrial Steel Structures",
    ],

    serviceType:
      "Heavy Structural Steel Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for heavy structural steel systems used in industrial plants, manufacturing facilities, process buildings and infrastructure projects.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Process and Infrastructure Businesses",
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
          "Heavy Steel Structures",

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
        <HeavySteelHero />

        <HeavySteelOverview />

        <HeavySteelAdvantages />

        <HeavySteelSystems />

        <HeavySteelApplications />

        <HeavySteelProcess />

        <HeavySteelCTA />
      </main>
    </>
  );
}