import type { Metadata } from "next";

import QuoteHero from "@/components/request-quote/QuoteHero";
import QuoteForm from "@/components/request-quote/QuoteForm";
import WhyChooseQuote from "@/components/request-quote/WhyChooseQuote";
import QuoteProcess from "@/components/request-quote/QuoteProcess";
import FAQ from "@/components/request-quote/FAQ";
import ContactCTA from "@/components/request-quote/ContactCTA";
import JsonLd from "@/components/seo/JsonLd";
import { requestQuoteFaqs } from "@/data/request-quote-faq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/request-a-quote`;

/* =========================================================
   REQUEST A QUOTE PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Request a Quote for PEB Projects | Steelbuild Infra Projects",
  },

  description:
    "Request a customized quotation for your Pre-Engineered Building project from Steelbuild Infra Projects Limited. Share your warehouse, factory, industrial building or steel structure requirements for technical evaluation and commercial proposal.",

  alternates: {
    canonical:
      "/request-a-quote",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Request a Quote for Your PEB Project | Steelbuild Infra Projects",

    description:
      "Share your industrial building requirements with Steelbuild Infra Projects Limited for engineering consultation, technical evaluation and a customized PEB quotation.",

    images: [
      {
        url:
          "/images/og/request-a-quote-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "Request a Pre-Engineered Building quotation from Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Request a Quote for Your PEB Project | Steelbuild Infra Projects",

    description:
      "Submit your warehouse, factory or industrial building requirements for technical evaluation and a customized Pre-Engineered Building quotation.",

    images: [
      "/images/og/request-a-quote-og.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

/* =========================================================
   REQUEST A QUOTE PAGE
========================================================= */

export default function RequestQuotePage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Request a Quote for Pre-Engineered Building Projects",

    headline:
      "Request a Customized Quote for Your PEB Project",

    description:
      "Submit your Pre-Engineered Building project requirements to Steelbuild Infra Projects Limited for engineering consultation, technical evaluation and a customized commercial proposal.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${pageUrl}/#service`,
    },

    mainEntity: {
      "@id":
        `${pageUrl}/#service`,
    },

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/og/request-a-quote-og.jpg`,
    },

    potentialAction: {
      "@type":
        "CommunicateAction",

      name:
        "Submit PEB Project Requirement",

      target: {
        "@type":
          "EntryPoint",

        urlTemplate:
          `${pageUrl}#quote-form`,
      },
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     PEB QUOTATION SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type":
      "Service",

    "@id":
      `${pageUrl}/#service`,

    name:
      "Pre-Engineered Building Project Quotation",

    alternateName: [
      "PEB Project Quote",
      "Pre-Engineered Building Quotation",
      "Industrial Building Quotation",
      "Warehouse Building Quotation",
      "Factory Building Quotation",
      "Steel Building Quotation",
    ],

    serviceType:
      "Engineering consultation, technical evaluation and commercial quotation for Pre-Engineered Building projects",

    description:
      "Steelbuild Infra Projects Limited evaluates project dimensions, building usage, project location, structural loading, roofing and cladding requirements, execution scope and available drawings before preparing a customized technical and commercial proposal.",

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

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial developers, manufacturers, warehouse owners, logistics companies, infrastructure businesses and commercial project owners",
    },

    availableChannel: [
      {
        "@type":
          "ServiceChannel",

        serviceUrl:
          pageUrl,

        servicePhone: {
          "@type":
            "ContactPoint",

          telephone:
            "+91 81301 99427",

          contactType:
            "sales",

          areaServed:
            "IN",

          availableLanguage: [
            "English",
            "Hindi",
          ],
        },
      },

      {
        "@type":
          "ServiceChannel",

        serviceUrl:
          "mailto:info@steelbuildinfra.com",
      },
    ],
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
          "Request a Quote",

        item:
          pageUrl,
      },
    ],
  };

  const faqSchema = {
  "@type": "FAQPage",

  "@id":
    `${pageUrl}/#faq`,

  mainEntity:
    requestQuoteFaqs.map(
      (faq) => ({
        "@type":
          "Question",

        name:
          faq.question,

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            faq.answer,
        },
      }),
    ),
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
    faqSchema,
  ],
};

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <JsonLd
        data={structuredData}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <QuoteHero />

      <QuoteForm />

      <WhyChooseQuote />

      <QuoteProcess />

      <FAQ />

      <ContactCTA />
    </>
  );
}