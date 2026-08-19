import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/contact`;

/* =========================================================
   CONTACT PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Steelbuild Infra Projects | PEB Company in India",
  },

  description:
    "Contact Steelbuild Infra Projects Limited for Pre-Engineered Buildings, warehouses, factories, industrial buildings, structural steel and industrial infrastructure solutions across India.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Contact Steelbuild Infra Projects | PEB Company in India",

    description:
      "Get in touch with Steelbuild Infra Projects Limited for Pre-Engineered Buildings, industrial steel structures, warehouses, factories and infrastructure solutions across India.",

    images: [
      {
        url:
          "/images/contact/contact-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Contact Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Steelbuild Infra Projects | PEB Company in India",

    description:
      "Contact Steelbuild Infra Projects Limited for PEB, warehouse, factory and industrial steel building solutions across India.",

    images: [
      "/images/contact/contact-hero.jpg",
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
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  /* =======================================================
     CONTACT PAGE SCHEMA
  ======================================================= */

  const contactPageSchema = {
    "@type": "ContactPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Contact Steelbuild Infra Projects Limited",

    headline:
      "Contact Steelbuild Infra Projects Limited",

    description:
      "Contact Steelbuild Infra Projects Limited for Pre-Engineered Buildings, industrial steel structures, warehouses, factories and industrial infrastructure solutions across India.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    mainEntity: {
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
        `${siteUrl}/images/contact/contact-hero.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     ORGANIZATION CONTACT DETAILS
  ======================================================= */

  const organizationSchema = {
    "@type": "Organization",

    "@id":
      `${siteUrl}/#organization`,

    name:
      "Steelbuild Infra Projects Limited",

    url:
      siteUrl,

    email:
      "info@steelbuildinfra.com",

    telephone: [
      "+91 81301 99427",
      "+91 99170 65110",
    ],

    address: {
      "@type":
        "PostalAddress",

      streetAddress:
        "303-304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place, Pitampura",

      addressLocality:
        "New Delhi",

      postalCode:
        "110034",

      addressCountry:
        "IN",
    },

    contactPoint: [
      {
        "@type":
          "ContactPoint",

        telephone:
          "+91 81301 99427",

        contactType:
          "customer service",

        areaServed:
          "IN",

        availableLanguage: [
          "English",
          "Hindi",
        ],
      },

      {
        "@type":
          "ContactPoint",

        telephone:
          "+91 99170 65110",

        contactType:
          "business inquiries",

        areaServed:
          "IN",

        availableLanguage: [
          "English",
          "Hindi",
        ],
      },
    ],

    openingHoursSpecification: [
      {
        "@type":
          "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],

        opens:
          "10:00",

        closes:
          "18:30",
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
          "Contact",

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
      contactPageSchema,
      organizationSchema,
      breadcrumbSchema,
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

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />
    </>
  );
}