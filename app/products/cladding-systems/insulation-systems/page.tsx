import type { Metadata } from "next";

import InsulationSystemsHero from "@/components/insulation-systems-page/InsulationSystemsHero";
import InsulationSystemsOverview from "@/components/insulation-systems-page/InsulationSystemsOverview";
import InsulationSystemsAdvantages from "@/components/insulation-systems-page/InsulationSystemsAdvantages";
import InsulationSystemsComponents from "@/components/insulation-systems-page/InsulationSystemsComponents";
import InsulationSystemsApplications from "@/components/insulation-systems-page/InsulationSystemsApplications";
import InsulationSystemsProcess from "@/components/insulation-systems-page/InsulationSystemsProcess";
import InsulationSystemsManufacturing from "@/components/insulation-systems-page/InsulationSystemsManufacturing";
import InsulationSystemsCTA from "@/components/insulation-systems-page/InsulationSystemsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/insulation-systems`;

/* =========================================================
   INSULATION SYSTEMS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Insulation Systems in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial insulation systems for Pre-Engineered Buildings, factories, warehouses, cold storage, manufacturing facilities and steel infrastructure projects across India.",

  alternates: {
    canonical:
      "/products/cladding-systems/insulation-systems",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Insulation Systems in India | Steelbuild Infra Projects",

    description:
      "Explore engineered thermal insulation systems for PEB buildings, factories, warehouses, cold storage and industrial infrastructure applications across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Insulation Systems for PEB and Steel Buildings in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Insulation Systems in India | Steelbuild Infra Projects",

    description:
      "Engineered insulation systems for PEB buildings, factories, warehouses, cold storage and industrial facilities across India.",

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
   INSULATION SYSTEMS PAGE
========================================================= */

export default function InsulationSystemsPage() {
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
      "Industrial Insulation Systems in India",

    headline:
      "Engineered Insulation Systems for PEB and Industrial Steel Buildings",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial insulation systems for Pre-Engineered Buildings, factories, warehouses, cold storage facilities, manufacturing units and steel infrastructure projects across India.",

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
      "Industrial Insulation Systems",

    alternateName: [
      "PEB Insulation Systems",
      "Industrial Thermal Insulation",
      "Roof Insulation Systems",
      "Wall Insulation Systems",
      "Factory Insulation Systems",
      "Warehouse Insulation Systems",
      "Cold Storage Insulation",
    ],

    serviceType:
      "Industrial Insulation System Engineering and Project Solutions",

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
      "Engineering and project solutions for industrial insulation systems used in Pre-Engineered Buildings, factories, warehouses, cold storage facilities, manufacturing units and steel infrastructure projects.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Cold Chain, Logistics and Infrastructure Businesses",
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
          "Insulation Systems",

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
        <InsulationSystemsHero />

        <InsulationSystemsOverview />

        <InsulationSystemsAdvantages />

        <InsulationSystemsComponents />

        <InsulationSystemsApplications />

        <InsulationSystemsProcess />

        <InsulationSystemsManufacturing />

        <InsulationSystemsCTA />
      </main>
    </>
  );
}