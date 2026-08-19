import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";
import ProductsIntro from "@/components/products/ProductsIntro";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductBenefits from "@/components/products/ProductBenefits";
import ProductApplications from "@/components/products/ProductApplications";
import ManufacturingAdvantage from "@/components/products/ManufacturingAdvantage";
import FeaturedProjects from "@/components/products/FeaturedProjects";
import ProductsFAQ from "@/components/products/ProductsFAQ";

import { productsFaqs } from "@/data/products-faq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products`;

/* =========================================================
   PRODUCTS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",
  },

  description:
    "Explore Steelbuild Infra Projects Limited's Pre-Engineered Building solutions for warehouses, factories, industrial buildings, cold storage, multi-storey buildings, heavy steel structures, roofing, cladding and mezzanine systems.",

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",

    description:
      "Explore engineered Pre-Engineered Building, structural steel, roofing, cladding and mezzanine solutions for industrial infrastructure projects across India.",

    images: [
      {
        url:
          "/images/products/pre-engineered-building.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Pre-Engineered Building and Steel Structure Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",

    description:
      "Explore Pre-Engineered Buildings, structural steel, roofing, cladding and mezzanine solutions from Steelbuild Infra Projects Limited.",

    images: [
      "/images/products/pre-engineered-building.jpg",
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
   PRODUCTS PAGE
========================================================= */

export default function ProductsPage() {
  /* =======================================================
     COLLECTION PAGE SCHEMA
  ======================================================= */

  const collectionPageSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "PEB Products & Pre-Engineered Building Solutions",

    headline:
      "Pre-Engineered Building and Steel Structure Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered Pre-Engineered Building, structural steel, roofing, cladding and mezzanine solutions for industrial infrastructure projects across India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#organization`,
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
        `${siteUrl}/images/products/pre-engineered-building.jpg`,
    },

    inLanguage: "en-IN",
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

        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     FAQ SCHEMA
  ======================================================= */

  const faqSchema = {
    "@type": "FAQPage",

    "@id": `${pageUrl}/#faq`,

    mainEntity: productsFaqs.map(
      (faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: faq.answer,
        },
      }),
    ),
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      collectionPageSchema,
      breadcrumbSchema,
      faqSchema,
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
          PRODUCTS PAGE CONTENT
      =================================================== */}

      <ProductsHero />

      <ProductsIntro />

      <ProductsGrid />

      <ProductBenefits />

      <ProductApplications />

      <ManufacturingAdvantage />

      <FeaturedProjects />

      <ProductsFAQ />
    </>
  );
}