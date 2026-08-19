import type { Metadata } from "next";

import InnerHero from "@/components/common/InnerHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";

import IndustriesOverview from "@/components/industries-page/IndustriesOverview";
import IndustriesGrid from "@/components/industries-page/IndustriesGrid";
import WhyChooseIndustries from "@/components/industries-page/WhyChooseIndustries";
import IndustryProcess from "@/components/industries-page/IndustryProcess";
import IndustriesCTA from "@/components/industries-page/IndustriesCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/industries`;

const industries = [
  "Warehousing",
  "Manufacturing",
  "Logistics",
  "Automobile",
  "Food Processing",
  "Pharmaceutical",
  "FMCG",
  "Textile",
  "Electronics",
  "Cold Storage",
  "Factories",
  "Infrastructure & Construction",
] as const;

/* =========================================================
   INDUSTRIES PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industries We Serve | PEB Solutions for Warehouses, Factories & Industrial Buildings",
  },

  description:
    "Explore customized Pre-Engineered Building solutions from Steelbuild Infra Projects Limited for warehousing, manufacturing, logistics, automobile, food processing, pharmaceutical, FMCG, textile, cold storage and infrastructure sectors across India.",

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industries We Serve | Steelbuild Infra Projects",

    description:
      "Customized Pre-Engineered Building solutions for warehouses, manufacturing plants, logistics parks, food processing, pharmaceutical, automobile and other industrial sectors across India.",

    images: [
      {
        url:
          "/images/banners/industries-banner-v6.jpg",

        width: 1200,

        height: 630,

        alt:
          "Industries served by Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industries We Serve | Steelbuild Infra Projects",

    description:
      "Explore customized PEB solutions for warehousing, manufacturing, logistics, automotive, food processing and other industrial sectors across India.",

    images: [
      "/images/banners/industries-banner-v6.jpg",
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
   INDUSTRIES PAGE
========================================================= */

export default function IndustriesPage() {
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
        name: "Industries",
        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     INDUSTRY LIST SCHEMA
  ======================================================= */

  const industryListSchema = {
    "@type": "ItemList",

    "@id": `${pageUrl}/#industry-list`,

    name:
      "Industries Served by Steelbuild Infra Projects Limited",

    numberOfItems:
      industries.length,

    itemListElement:
      industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry,
      })),
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#peb-service`,

    name:
      "Industry-Specific Pre-Engineered Building Solutions",

    serviceType:
      "Design, engineering, manufacturing and execution of customized Pre-Engineered Buildings",

    description:
      "Steelbuild Infra Projects Limited provides industry-specific Pre-Engineered Building solutions engineered around operational workflow, structural loading, equipment requirements, storage, safety, environmental needs and future expansion.",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    audience:
      industries.map((industry) => ({
        "@type": "BusinessAudience",
        audienceType: industry,
      })),
  };

  /* =======================================================
     COLLECTION PAGE SCHEMA
  ======================================================= */

  const collectionPageSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "Industries We Serve | Steelbuild Infra Projects Limited",

    headline:
      "Pre-Engineered Building Solutions Across Diverse Industries",

    description:
      "Steelbuild Infra Projects Limited delivers customized Pre-Engineered Building solutions for warehousing, manufacturing, logistics, automobile, food processing, pharmaceutical, FMCG, textile, cold storage and infrastructure applications across India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}/#industry-list`,
    },

    mainEntity: {
      "@id": `${pageUrl}/#peb-service`,
    },

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url:
        `${siteUrl}/images/banners/industries-banner-v6.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      collectionPageSchema,
      breadcrumbSchema,
      industryListSchema,
      serviceSchema,
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
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <InnerHero
        title="Industries We Serve"
        subtitle="Engineered Building Solutions Across Diverse Industries"
        description="Steelbuild delivers customized Pre-Engineered Building solutions for warehouses, manufacturing plants, logistics parks, food processing units, pharmaceutical facilities, automobile industries and many other industrial sectors across India."
        image="/images/banners/industries-banner-v6.jpg"
        imageAlt="Industrial sectors served by Steelbuild Infra Projects"
        imagePosition="center"
        highlights={[
          "Sector-Specific Engineering",
          "Customized PEB Solutions",
          "Expansion-Ready Structures",
          "Pan-India Project Execution",
        ]}
        primaryAction={{
          label: "Explore Industries",
          href: "#industries-grid",
        }}
        secondaryAction={{
          label: "View Our Projects",
          href: "/projects",
        }}
      />

      <IndustriesOverview />

      <div
        id="industries-grid"
        className="scroll-mt-32"
      >
        <IndustriesGrid />
      </div>

      <WhyChooseIndustries />

      <IndustryProcess />

      <FeaturedProjects
        eyebrow="Featured Industrial Projects"
        title="Industrial Projects Delivered With Engineering Excellence"
        description="Explore selected Pre-Engineered Building projects delivered across manufacturing, warehousing, logistics and industrial sectors."
        maxProjects={6}
      />

      <IndustriesCTA />
    </>
  );
}