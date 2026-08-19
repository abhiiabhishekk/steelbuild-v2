import type { Metadata } from "next";

import FactoryHero from "@/components/factory-buildings-page/FactoryHero";
import FactoryOverview from "@/components/factory-buildings-page/FactoryOverview";
import FactoryAdvantages from "@/components/factory-buildings-page/FactoryAdvantages";
import FactorySystems from "@/components/factory-buildings-page/FactorySystems";
import FactoryApplications from "@/components/factory-buildings-page/FactoryApplications";
import FactoryProcess from "@/components/factory-buildings-page/FactoryProcess";
import FactoryCTA from "@/components/factory-buildings-page/FactoryCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/factory-buildings`;

/* =========================================================
   FACTORY BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Factory Building Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered factory buildings and PEB factory solutions for manufacturing plants, production facilities, industrial units, workshops and large-scale industrial projects across India.",

  alternates: {
    canonical: "/products/factory-buildings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Factory Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered factory building and PEB solutions for manufacturing plants, production facilities, industrial units and large-scale industrial infrastructure across India.",

    images: [
      {
        url: "/images/products/factory-building.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Factory Building and PEB Factory Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Factory Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered factory buildings and PEB solutions for manufacturing plants, industrial units, production facilities and workshops across India.",

    images: ["/images/products/factory-building.jpg"],
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
   FACTORY BUILDINGS PAGE
========================================================= */

export default function FactoryBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Factory Building Manufacturer in India",

    headline:
      "Engineered Factory Building and PEB Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered factory buildings and Pre-Engineered Building solutions for manufacturing plants, production facilities, industrial units, workshops and industrial infrastructure projects across India.",

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

      url: `${siteUrl}/images/products/factory-building.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Factory Building Solutions",

    alternateName: [
      "PEB Factory Buildings",
      "Steel Factory Buildings",
      "Industrial Factory Buildings",
      "Factory Sheds",
      "Manufacturing Plant Buildings",
    ],

    serviceType:
      "Factory Building Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for factory buildings used in manufacturing plants, production facilities, industrial units, workshops and large-scale industrial projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Manufacturing, Industrial, Engineering and Production Businesses",
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

        name: "Factory Buildings",

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
        <FactoryHero />

        <FactoryOverview />

        <FactoryAdvantages />

        <FactorySystems />

        <FactoryApplications />

        <FactoryProcess />

        <FactoryCTA />
      </main>
    </>
  );
}