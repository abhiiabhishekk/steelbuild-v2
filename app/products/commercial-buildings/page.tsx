import type { Metadata } from "next";

import CommercialHero from "@/components/commercial-buildings-page/CommercialHero";
import CommercialOverview from "@/components/commercial-buildings-page/CommercialOverview";
import CommercialAdvantages from "@/components/commercial-buildings-page/CommercialAdvantages";
import CommercialSystems from "@/components/commercial-buildings-page/CommercialSystems";
import CommercialApplications from "@/components/commercial-buildings-page/CommercialApplications";
import CommercialProcess from "@/components/commercial-buildings-page/CommercialProcess";
import CommercialCTA from "@/components/commercial-buildings-page/CommercialCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/commercial-buildings`;

/* =========================================================
   COMMERCIAL BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Commercial Steel Building Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered commercial steel buildings for offices, showrooms, retail facilities, institutional buildings and modern commercial infrastructure projects across India.",

  alternates: {
    canonical: "/products/commercial-buildings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Commercial Steel Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered commercial steel building solutions for offices, showrooms, retail facilities, institutional buildings and modern infrastructure projects across India.",

    images: [
      {
        url: "/images/products/commercial-building.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Commercial Steel Building Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Commercial Steel Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered commercial steel buildings for offices, retail, showrooms, institutions and modern commercial infrastructure across India.",

    images: ["/images/products/commercial-building.jpg"],
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
   COMMERCIAL BUILDINGS PAGE
========================================================= */

export default function CommercialBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Commercial Steel Building Manufacturer in India",

    headline:
      "Engineered Commercial Steel Building Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered commercial steel buildings for offices, showrooms, retail facilities, institutional buildings and modern commercial infrastructure projects across India.",

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

      url: `${siteUrl}/images/products/commercial-building.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Commercial Steel Building Solutions",

    alternateName: [
      "Commercial Steel Buildings",
      "PEB Commercial Buildings",
      "Steel Frame Commercial Buildings",
      "Retail Steel Buildings",
      "Office Steel Buildings",
    ],

    serviceType:
      "Commercial Steel Building Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for commercial steel buildings used in offices, showrooms, retail facilities, institutional buildings and modern commercial infrastructure projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Commercial, Retail, Institutional, Corporate and Infrastructure Businesses",
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

        name: "Commercial Buildings",

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
        <CommercialHero />

        <CommercialOverview />

        <CommercialAdvantages />

        <CommercialSystems />

        <CommercialApplications />

        <CommercialProcess />

        <CommercialCTA />
      </main>
    </>
  );
}