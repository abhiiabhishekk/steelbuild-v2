import type { Metadata } from "next";

import QuoteHero from "@/components/request-quote/QuoteHero";
import QuoteForm from "@/components/request-quote/QuoteForm";
import WhyChooseQuote from "@/components/request-quote/WhyChooseQuote";
import QuoteProcess from "@/components/request-quote/QuoteProcess";
import FAQ from "@/components/request-quote/FAQ";
import ContactCTA from "@/components/request-quote/ContactCTA";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Request a Quote for Pre-Engineered Building Projects | Steelbuild Infra Projects",

  description:
    "Request a customized quotation for your Pre-Engineered Building project. Share your industrial building requirements with Steelbuild Infra Projects Limited for engineering consultation, technical evaluation and commercial proposal.",

  keywords: [
    "Request PEB quotation",
    "Pre Engineered Building quotation",
    "PEB project quote India",
    "industrial shed quotation",
    "warehouse building quotation",
    "factory building quotation",
    "steel building quotation",
    "PEB manufacturer quotation",
    "industrial building cost estimate",
    "warehouse construction quote",
    "standing seam roofing quotation",
    "roofing and cladding quotation",
    "Steelbuild Infra Projects quote",
  ],

  alternates: {
    canonical: "/request-a-quote",
  },

  openGraph: {
    title:
      "Request a Quote for Your PEB Project | Steelbuild Infra Projects",

    description:
      "Share your industrial building requirements and receive engineering guidance and a customized PEB quotation from Steelbuild Infra Projects Limited.",

    url: "https://steelbuildinfra.com/request-a-quote",

    siteName: "Steelbuild Infra Projects Limited",

    images: [
      {
        url: "/images/og/request-a-quote-og.jpg",
        width: 1200,
        height: 630,
        alt: "Request a Pre-Engineered Building quotation from Steelbuild Infra Projects",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Request a Quote for Your PEB Project | Steelbuild Infra Projects",

    description:
      "Submit your industrial building requirement for technical evaluation and a customized Pre-Engineered Building quotation.",

    images: ["/images/og/request-a-quote-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const requestQuoteSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id":
        "https://steelbuildinfra.com/request-a-quote#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: "https://steelbuildinfra.com/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Request a Quote",

          item:
            "https://steelbuildinfra.com/request-a-quote",
        },
      ],
    },

    {
      "@type": "ContactPage",

      "@id":
        "https://steelbuildinfra.com/request-a-quote#webpage",

      url:
        "https://steelbuildinfra.com/request-a-quote",

      name:
        "Request a Quote for Pre-Engineered Building Projects",

      description:
        "Submit your Pre-Engineered Building project requirements to Steelbuild Infra Projects Limited for engineering consultation, technical evaluation and a customized commercial quotation.",

      isPartOf: {
        "@type": "WebSite",

        "@id": "https://steelbuildinfra.com/#website",

        name: "Steelbuild Infra Projects Limited",

        url: "https://steelbuildinfra.com/",
      },

      breadcrumb: {
        "@id":
          "https://steelbuildinfra.com/request-a-quote#breadcrumb",
      },

      about: {
        "@id":
          "https://steelbuildinfra.com/request-a-quote#service",
      },

      potentialAction: {
        "@type": "CommunicateAction",

        name: "Submit Project Requirement",

        target:
          "https://steelbuildinfra.com/request-a-quote#quote-form",
      },
    },

    {
      "@type": "Service",

      "@id":
        "https://steelbuildinfra.com/request-a-quote#service",

      name:
        "Pre-Engineered Building Project Quotation",

      serviceType:
        "Engineering consultation and quotation for Pre-Engineered Building projects",

      description:
        "Steelbuild Infra Projects Limited reviews project dimensions, building usage, location, loading requirements, roofing systems, execution scope and available drawings before preparing a customized technical and commercial proposal.",

      provider: {
        "@type": "Organization",

        "@id":
          "https://steelbuildinfra.com/#organization",

        name:
          "Steelbuild Infra Projects Limited",

        url: "https://steelbuildinfra.com/",

        telephone: "+91 81301 99427",

        email: "info@steelbuildinfra.com",

        logo: {
          "@type": "ImageObject",

          url:
            "https://steelbuildinfra.com/images/logo/logo.png",
        },

        address: {
          "@type": "PostalAddress",

          addressLocality: "New Delhi",

          addressRegion: "Delhi",

          addressCountry: "IN",
        },
      },

      areaServed: {
        "@type": "Country",

        name: "India",
      },

      audience: {
        "@type": "BusinessAudience",

        audienceType:
          "Industrial developers, warehouse owners, manufacturers, logistics companies and commercial project owners",
      },

      availableChannel: [
        {
          "@type": "ServiceChannel",

          serviceUrl:
            "https://steelbuildinfra.com/request-a-quote",

          servicePhone: {
            "@type": "ContactPoint",

            telephone: "+91 81301 99427",

            contactType: "sales",

            areaServed: "IN",

            availableLanguage: ["English", "Hindi"],
          },
        },

        {
          "@type": "ServiceChannel",

          serviceUrl:
            "mailto:info@steelbuildinfra.com",
        },
      ],
    },
  ],
};

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={requestQuoteSchema} />

      <QuoteHero />

      <QuoteForm />

      <WhyChooseQuote />

      <QuoteProcess />

      <FAQ />

      <ContactCTA />
    </>
  );
}