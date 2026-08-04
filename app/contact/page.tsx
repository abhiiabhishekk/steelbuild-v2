import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Steelbuild Infra Projects | PEB Company in India",
  description:
    "Contact Steelbuild Infra Projects Limited for Pre-Engineered Buildings, warehouses, industrial buildings, factory buildings and steel structure solutions across India.",
  keywords: [
    "Contact Steelbuild Infra Projects",
    "PEB company contact",
    "Pre Engineered Building company India",
    "Warehouse building manufacturer contact",
    "Industrial building company India",
    "Steel structure company contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Steelbuild Infra Projects | PEB Company in India",
    description:
      "Get in touch with Steelbuild Infra Projects for premium PEB and industrial steel building solutions.",
    url: "https://steelbuildinfra.com/contact",
    siteName: "Steelbuild Infra Projects",
    images: [
      {
        url: "/images/contact/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Steelbuild Infra Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
    <JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Steelbuild Infra Projects Limited",
    url: "https://steelbuildinfra.com",
    email: "info@steelbuildinfra.com",
    telephone: ["+91 81301 99427", "+91 99170 65110"],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "303-304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place, Pitampura",
      addressLocality: "New Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 81301 99427",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  }}
/>

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
}