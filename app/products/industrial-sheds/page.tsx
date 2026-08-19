import type { Metadata } from "next";

import IndustrialShedsHero from "@/components/industrial-sheds-page/IndustrialShedsHero";
import IndustrialShedsOverview from "@/components/industrial-sheds-page/IndustrialShedsOverview";
import IndustrialShedsAdvantages from "@/components/industrial-sheds-page/IndustrialShedsAdvantages";
import IndustrialShedsSystems from "@/components/industrial-sheds-page/IndustrialShedsSystems";
import IndustrialShedsApplications from "@/components/industrial-sheds-page/IndustrialShedsApplications";
import IndustrialShedsProcess from "@/components/industrial-sheds-page/IndustrialShedsProcess";
import IndustrialShedsCTA from "@/components/industrial-sheds-page/IndustrialShedsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/industrial-sheds`;

/* =========================================================
   INDUSTRIAL SHEDS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Shed Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial sheds and steel building solutions for factories, manufacturing units, warehouses, workshops and large-scale industrial facilities across India.",

  alternates: {
    canonical: "/products/industrial-sheds",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Industrial Shed Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial shed and steel building solutions for factories, manufacturing units, warehouses, workshops and industrial infrastructure projects across India.",

    images: [
      {
        url: "/images/products/industrial-building.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Shed and Steel Building Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Shed Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial sheds and steel building solutions for factories, warehouses, workshops and manufacturing facilities across India.",

    images: ["/images/products/industrial-building.jpg"],
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
   INDUSTRIAL SHEDS PAGE
========================================================= */

export default function IndustrialShedsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Industrial Shed Manufacturer in India",

    headline:
      "Engineered Industrial Shed and Steel Building Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial sheds and steel building solutions for factories, manufacturing units, warehouses, workshops and industrial facilities across India.",

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

      url: `${siteUrl}/images/products/industrial-building.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Industrial Shed Solutions",

    alternateName: [
      "Industrial Steel Sheds",
      "Factory Sheds",
      "Industrial Steel Buildings",
      "PEB Industrial Sheds",
      "Manufacturing Sheds",
    ],

    serviceType:
      "Industrial Shed Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for industrial sheds used in factories, manufacturing units, warehouses, workshops and industrial infrastructure projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing and Infrastructure Businesses",
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

        name: "Industrial Sheds",

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
        <IndustrialShedsHero />

        <IndustrialShedsOverview />

        <IndustrialShedsAdvantages />

        <IndustrialShedsSystems />

        <IndustrialShedsApplications />

        <IndustrialShedsProcess />

        <IndustrialShedsCTA />
      </main>
    </>
  );
}