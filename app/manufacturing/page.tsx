import InnerHero from "@/components/common/InnerHero";
import CorporateVideo from "@/components/common/CorporateVideo";

import PlantMachinery from "@/components/manufacturing/PlantMachinery";
import RoofingCladding from "@/components/manufacturing/RoofingCladding";
import AccessoriesSection from "@/components/manufacturing/AccessoriesSection";
import SheetingAccessories from "@/components/manufacturing/SheetingAccessories";
import StandingSeamMachine from "@/components/manufacturing/StandingSeamMachine";
import ManufacturingFacilities from "@/components/manufacturing/ManufacturingFacilities";
import ManufacturingGallery from "@/components/manufacturing/ManufacturingGallery";
import ManufacturingCTA from "@/components/manufacturing/ManufacturingCTA";
import ManufacturingProcess from "@/components/manufacturing/ManufacturingProcess";
import QualitySection from "@/components/manufacturing/QualitySection";
import ManufacturingFAQ from "@/components/manufacturing/ManufacturingFAQ";
import type { Metadata } from "next";

export default function ManufacturingPage() {
  const manufacturingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
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
          name: "Manufacturing",
          item: "https://steelbuildinfra.com/manufacturing",
        },
      ],
    },

    {
      "@type": "ManufacturingBusiness",

      name: "Steelbuild Infra Projects Limited",

      url: "https://steelbuildinfra.com",

      logo: "https://steelbuildinfra.com/logo.png",

      image:
        "https://steelbuildinfra.com/images/banners/manufacturing-banner.jpg",

      description:
        "Steelbuild Infra Projects operates advanced manufacturing facilities for Pre-Engineered Buildings with precision fabrication, roofing, cladding and integrated quality control.",

      areaServed: "India",

      telephone: "+91-XXXXXXXXXX",

      address: {
        "@type": "PostalAddress",

        addressLocality: "Sonipat",

        addressRegion: "Haryana",

        addressCountry: "IN",
      },
    },

    {
      "@type": "VideoObject",

      name: "Steelbuild Infra Projects Corporate Film",

      description:
        "Explore Steelbuild's manufacturing facilities, engineering capabilities and project execution.",

      thumbnailUrl:
        "https://steelbuildinfra.com/images/video/corporate-video-thumbnail.jpg",

      uploadDate: "2025-01-01",

      embedUrl: "https://www.youtube.com/embed/u4w_zBIxQCw",

      contentUrl: "https://youtu.be/u4w_zBIxQCw",
    },
  ],
};
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(manufacturingSchema),
  }}
/>
      <InnerHero
  title="Manufacturing Excellence"
  subtitle="Advanced Manufacturing Infrastructure"
  description="Steelbuild Infra Projects operates integrated manufacturing facilities equipped with advanced machinery, automated production lines, precision fabrication and stringent quality control for premium Pre-Engineered Building solutions."
  image="/images/banners/manufacturing-banner.jpg"
  imageAlt="Steelbuild Infra advanced PEB manufacturing facility"
  imagePosition="center"
  highlights={[
    "50,000 MT Annual Capacity",
    "3 Integrated Manufacturing Units",
    "ISO 9001:2015 Certified Systems",
    "Pan-India Project Delivery",
  ]}
  primaryAction={{
    label: "Explore Our Facilities",
    href: "#manufacturing-facilities",
  }}
  secondaryAction={{
    label: "Watch Corporate Film",
    href: "#corporate-video",
  }}
/>

      <CorporateVideo
  sectionId="corporate-video"
  eyebrow="Watch Our Corporate Film"
  title="Experience Steelbuild Through Manufacturing Excellence"
  description="Explore our company, manufacturing facilities, engineering capabilities and project execution through our corporate film."
  thumbnail="/images/video/corporate-video-thumbnail.jpg"
  youtubeVideoId="u4w_zBIxQCw"
/>

      <PlantMachinery />

      <ManufacturingProcess />

      <QualitySection />

      <StandingSeamMachine />

      <RoofingCladding />

      <AccessoriesSection />

      <SheetingAccessories />

      <ManufacturingGallery />

      <ManufacturingFacilities />

      <ManufacturingFAQ />

      <ManufacturingCTA />
    </>
  );
}

// import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Manufacturing Facilities | Steelbuild Infra Projects | Advanced PEB Manufacturing",

  description:
    "Explore Steelbuild Infra Projects' advanced manufacturing facilities equipped with CNC machinery, automated fabrication, standing seam roll forming, roofing & cladding production, quality control and integrated PEB manufacturing infrastructure.",

  keywords: [
    "Steelbuild Manufacturing",
    "PEB Manufacturing",
    "Pre Engineered Building Manufacturing",
    "PEB Factory India",
    "Steel Fabrication Plant",
    "Standing Seam Roll Forming",
    "Roofing Sheet Manufacturing",
    "Cladding Sheet Manufacturing",
    "Structural Steel Fabrication",
    "Industrial Steel Manufacturing",
    "Steelbuild Factory",
    "PEB Manufacturer Haryana",
  ],

  alternates: {
    canonical: "/manufacturing",
  },

  openGraph: {
    title:
      "Advanced Manufacturing Facilities | Steelbuild Infra Projects",

    description:
      "Discover Steelbuild's world-class manufacturing infrastructure, CNC fabrication, roofing & cladding production and integrated PEB manufacturing capabilities.",

    url: "https://steelbuildinfra.com/manufacturing",

    siteName: "Steelbuild Infra Projects",

    images: [
      {
        url: "/images/banners/manufacturing-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Steelbuild Manufacturing Facility",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Advanced Manufacturing Facilities | Steelbuild Infra Projects",

    description:
      "Explore Steelbuild's advanced manufacturing facilities for premium Pre-Engineered Buildings.",

    images: ["/images/banners/manufacturing-banner.jpg"],
  },
};