import type { Metadata } from "next";

import RoofingHero from "@/components/roofing-systems-page/RoofingHero";
import RoofingOverview from "@/components/roofing-systems-page/RoofingOverview";
import RoofingAdvantages from "@/components/roofing-systems-page/RoofingAdvantages";
import RoofingTypes from "@/components/roofing-systems-page/RoofingTypes";
import RoofingApplications from "@/components/roofing-systems-page/RoofingApplications";
import RoofingProcess from "@/components/roofing-systems-page/RoofingProcess";
import RoofingCTA from "@/components/roofing-systems-page/RoofingCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/roofing-systems`;

/* =========================================================
   ROOFING SYSTEMS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Roofing Systems Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial roofing systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and large-scale steel infrastructure projects across India.",

  alternates: {
    canonical: "/products/roofing-systems",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Industrial Roofing Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial roofing solutions for PEB buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

    images: [
      {
        url: "/images/products/roofing-systems.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Roofing Systems for PEB and Steel Buildings in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Roofing Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial roofing systems for PEB buildings, factories, warehouses and manufacturing facilities across India.",

    images: ["/images/products/roofing-systems.jpg"],
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
   ROOFING SYSTEMS PAGE
========================================================= */

export default function RoofingSystemsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Industrial Roofing Systems Manufacturer in India",

    headline:
      "Engineered Roofing Systems for PEB and Industrial Steel Buildings",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial roofing systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and large-scale steel infrastructure projects across India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}/#service`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url: `${siteUrl}/images/products/roofing-systems.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Industrial Roofing Systems",

    alternateName: [
      "PEB Roofing Systems",
      "Steel Roofing Systems",
      "Industrial Roof Systems",
      "Factory Roofing Systems",
      "Warehouse Roofing Systems",
      "Metal Roofing Systems",
    ],

    serviceType:
      "Industrial Roofing System Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for industrial roofing systems used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Logistics and Infrastructure Businesses",
    },
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",

    "@id": `${pageUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: siteUrl,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Products",

        item: `${siteUrl}/products`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: "Roofing Systems",

        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

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
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <main>
        <RoofingHero />

        <RoofingOverview />

        <RoofingAdvantages />

        <RoofingTypes />

        <RoofingApplications />

        <RoofingProcess />

        <RoofingCTA />
      </main>
    </>
  );
}