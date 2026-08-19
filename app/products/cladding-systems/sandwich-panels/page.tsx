import type { Metadata } from "next";

import SandwichPanelsHero from "@/components/sandwich-panels-page/SandwichPanelsHero";
import SandwichPanelsOverview from "@/components/sandwich-panels-page/SandwichPanelsOverview";
import SandwichPanelsAdvantages from "@/components/sandwich-panels-page/SandwichPanelsAdvantages";
import SandwichPanelsComponents from "@/components/sandwich-panels-page/SandwichPanelsComponents";
import SandwichPanelsApplications from "@/components/sandwich-panels-page/SandwichPanelsApplications";
import SandwichPanelsProcess from "@/components/sandwich-panels-page/SandwichPanelsProcess";
import SandwichPanelsManufacturing from "@/components/sandwich-panels-page/SandwichPanelsManufacturing";
import SandwichPanelsCTA from "@/components/sandwich-panels-page/SandwichPanelsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/sandwich-panels`;

/* =========================================================
   SANDWICH PANELS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Sandwich Panels Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered sandwich panels and insulated panel systems for Pre-Engineered Buildings, factories, warehouses, cold storage, food processing and industrial facilities across India.",
  
  alternates: {
    canonical:
      "/products/cladding-systems/sandwich-panels",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Sandwich Panels Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered sandwich panels and insulated panel systems for PEB buildings, factories, warehouses, cold storage, food processing and industrial facilities across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Sandwich Panels and Insulated Panel Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sandwich Panels Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered sandwich panels and insulated panel systems for PEB buildings, factories, warehouses and cold storage applications across India.",

    images: [
      "/images/products/cladding.jpg",
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
   SANDWICH PANELS PAGE
========================================================= */

export default function SandwichPanelsPage() {
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
      "Sandwich Panels Manufacturer in India",

    headline:
      "Engineered Sandwich Panels and Insulated Panel Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered sandwich panels and insulated panel systems for Pre-Engineered Buildings, factories, warehouses, cold storage facilities, food processing units and industrial infrastructure projects across India.",

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
        `${siteUrl}/images/products/cladding.jpg`,
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
      "Sandwich Panel Systems",

    alternateName: [
      "Sandwich Panels",
      "Insulated Sandwich Panels",
      "Industrial Sandwich Panels",
      "PEB Sandwich Panels",
      "Insulated Wall Panels",
      "Insulated Roof Panels",
      "Cold Storage Panels",
    ],

    serviceType:
      "Sandwich Panel Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for sandwich panel systems used in Pre-Engineered Buildings, factories, warehouses, cold storage facilities, food processing units and industrial buildings.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Cold Chain, Food Processing and Infrastructure Businesses",
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
          "Cladding Systems",

        item:
          `${siteUrl}/products/cladding-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Sandwich Panels",

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
        <SandwichPanelsHero />

        <SandwichPanelsOverview />

        <SandwichPanelsAdvantages />

        <SandwichPanelsComponents />

        <SandwichPanelsApplications />

        <SandwichPanelsProcess />

        <SandwichPanelsManufacturing />

        <SandwichPanelsCTA />
      </main>
    </>
  );
}