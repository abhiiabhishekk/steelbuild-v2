import type { Metadata } from "next";

import ColdStorageHero from "@/components/cold-storage-buildings-page/ColdStorageHero";
import ColdStorageOverview from "@/components/cold-storage-buildings-page/ColdStorageOverview";
import ColdStorageAdvantages from "@/components/cold-storage-buildings-page/ColdStorageAdvantages";
import ColdStorageSystems from "@/components/cold-storage-buildings-page/ColdStorageSystems";
import ColdStorageApplications from "@/components/cold-storage-buildings-page/ColdStorageApplications";
import ColdStorageProcess from "@/components/cold-storage-buildings-page/ColdStorageProcess";
import ColdStorageCTA from "@/components/cold-storage-buildings-page/ColdStorageCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/cold-storage-buildings`;

/* =========================================================
   COLD STORAGE BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Cold Storage Building Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered cold storage buildings and insulated steel building solutions for food processing, pharmaceuticals, agriculture, cold chain and temperature-controlled logistics projects across India.",

  alternates: {
    canonical: "/products/cold-storage-buildings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Cold Storage Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered cold storage and insulated steel building solutions for food processing, pharmaceuticals, agriculture, cold chain and temperature-controlled logistics projects across India.",

    images: [
      {
        url: "/images/products/cold-storage.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Cold Storage Building Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cold Storage Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered cold storage buildings for food, pharmaceutical, agriculture and temperature-controlled logistics applications across India.",

    images: ["/images/products/cold-storage.jpg"],
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
   COLD STORAGE BUILDINGS PAGE
========================================================= */

export default function ColdStorageBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Cold Storage Building Manufacturer in India",

    headline:
      "Engineered Cold Storage and Insulated Steel Building Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered cold storage buildings and insulated steel building solutions for food processing, pharmaceuticals, agriculture, cold chain and temperature-controlled logistics projects across India.",

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

      url: `${siteUrl}/images/products/cold-storage.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Cold Storage Building Solutions",

    alternateName: [
      "PEB Cold Storage Buildings",
      "Cold Storage Steel Buildings",
      "Insulated Cold Storage Buildings",
      "Cold Chain Buildings",
      "Temperature-Controlled Warehouses",
    ],

    serviceType:
      "Cold Storage Building Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for cold storage buildings used in food processing, pharmaceuticals, agriculture, cold chain logistics and temperature-controlled storage applications.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Food Processing, Pharmaceutical, Agriculture, Cold Chain and Logistics Businesses",
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

        name: "Cold Storage Buildings",

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
        <ColdStorageHero />

        <ColdStorageOverview />

        <ColdStorageAdvantages />

        <ColdStorageSystems />

        <ColdStorageApplications />

        <ColdStorageProcess />

        <ColdStorageCTA />
      </main>
    </>
  );
}