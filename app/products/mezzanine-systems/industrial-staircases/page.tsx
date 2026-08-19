import type { Metadata } from "next";

import IndustrialStaircasesHero from "@/components/industrial-staircases-page/IndustrialStaircasesHero";
import IndustrialStaircasesOverview from "@/components/industrial-staircases-page/IndustrialStaircasesOverview";
import IndustrialStaircasesAdvantages from "@/components/industrial-staircases-page/IndustrialStaircasesAdvantages";
import IndustrialStaircasesComponents from "@/components/industrial-staircases-page/IndustrialStaircasesComponents";
import IndustrialStaircasesApplications from "@/components/industrial-staircases-page/IndustrialStaircasesApplications";
import IndustrialStaircasesProcess from "@/components/industrial-staircases-page/IndustrialStaircasesProcess";
import IndustrialStaircasesCTA from "@/components/industrial-staircases-page/IndustrialStaircasesCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/mezzanine-systems/industrial-staircases`;

/* =========================================================
   INDUSTRIAL STAIRCASES PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Steel Staircase Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial steel staircases and access systems for factories, warehouses, mezzanine floors, platforms, maintenance areas and industrial facilities across India.",
  
  alternates: {
    canonical:
      "/products/mezzanine-systems/industrial-staircases",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Steel Staircase Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial steel staircases and access systems for factories, warehouses, mezzanine floors, platforms and industrial facilities across India.",

    images: [
      {
        url:
          "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Steel Staircase and Access Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Steel Staircase Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial steel staircases and access systems for factories, warehouses, mezzanine floors and industrial facilities across India.",

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
   INDUSTRIAL STAIRCASES PAGE
========================================================= */

export default function IndustrialStaircasesPage() {
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
      "Industrial Steel Staircase Manufacturer in India",

    headline:
      "Engineered Industrial Steel Staircase and Access Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial steel staircases and access systems for factories, warehouses, mezzanine floors, platforms, maintenance areas and industrial facilities across India.",

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
      "Industrial Steel Staircase Systems",

    alternateName: [
      "Industrial Staircases",
      "Steel Staircases",
      "Factory Staircases",
      "Warehouse Staircases",
      "Mezzanine Staircases",
      "Industrial Access Stairs",
    ],

    serviceType:
      "Industrial Steel Staircase Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial steel staircases used in factories, warehouses, mezzanine systems, platforms, maintenance areas and industrial facilities.",

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
          "Industrial Staircases",

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
        <IndustrialStaircasesHero />

        <IndustrialStaircasesOverview />

        <IndustrialStaircasesAdvantages />

        <IndustrialStaircasesComponents />

        <IndustrialStaircasesApplications />

        <IndustrialStaircasesProcess />

        <IndustrialStaircasesCTA />
      </main>
    </>
  );
}