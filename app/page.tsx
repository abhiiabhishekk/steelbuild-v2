import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";

import TrustSection from "@/components/about/TrustSection";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Industries from "@/components/industries/Industries";
import WhySteelbuild from "@/components/why/WhySteelbuild";
import ManufacturingSection from "@/components/manufacturing/ManufacturingSection";
import ClientsSection from "@/components/clients/ClientsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CTASection from "@/components/cta/CTASection";

import { HERO_SLIDES } from "@/data/hero-slides";

import { sanityFetch } from "@/sanity/lib/live";
import { HERO_SLIDES_QUERY } from "@/sanity/lib/heroQueries";

import type { SanityHeroSlide } from "@/types/sanityHeroSlide";
import type { HeroSlide } from "@/components/hero/HeroSlider";

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://steelbuildinfra.com";

const companyName =
  "Steelbuild Infra Projects Limited";

/* =========================================================
   HOMEPAGE PRIMARY KEYWORD CLUSTER
========================================================= */

const homepageKeywords = [
  /* Brand */
  "Steelbuild Infra",
  "Steelbuild Infra Projects",
  "Steelbuild Infra Projects Limited",

  /* Core PEB */
  "PEB",
  "PEB Buildings",
  "PEB Company",
  "PEB Company India",
  "PEB Company in India",
  "PEB Manufacturer",
  "PEB Manufacturer India",
  "PEB Manufacturer in India",
  "PEB Building Manufacturer",
  "PEB Construction Company",
  "PEB Engineering Company",
  "PEB Fabrication Company",
  "PEB Solution Provider",
  "PEB Solutions India",
  "PEB Turnkey Solutions",
  "PEB Turnkey Contractor",
  "PEB Contractors India",

  /* Pre-Engineered Buildings */
  "Pre-Engineered Buildings",
  "Pre Engineered Buildings",
  "Pre-Engineered Building Company",
  "Pre Engineered Building Company India",
  "Pre-Engineered Building Manufacturer",
  "Pre Engineered Building Manufacturer India",
  "Pre-Engineered Steel Buildings",
  "Pre Engineered Warehouse",
  "Pre Engineered Factory Building",
  "Pre Fabricated Building Company",

  /* Steel Buildings */
  "Steel Buildings",
  "Steel Building Company",
  "Steel Building Company India",
  "Steel Building Manufacturer",
  "Steel Building Manufacturer India",
  "Steel Building Contractors",
  "Steel Building Solutions India",
  "Steel Construction Company",
  "Steel Construction Services",
  "Steel Infrastructure Company",

  /* Structural Steel */
  "Structural Steel",
  "Structural Steel Buildings",
  "Structural Steel Company",
  "Structural Steel Company India",
  "Structural Steel Manufacturer",
  "Steel Structure Company",
  "Steel Structure Company India",
  "Steel Structure Manufacturer",
  "Steel Structure Fabrication",
  "Steel Structure Design",
  "Steel Structure Erection",
  "Steel Structure Services",
  "Heavy Steel Structures",
  "Heavy Steel Structure Fabrication",

  /* Industrial Construction */
  "Industrial Buildings",
  "Industrial Building Company",
  "Industrial Building Construction Company",
  "Industrial Building Contractor",
  "Industrial Construction Company",
  "Industrial Construction Company India",
  "Industrial Construction Services",
  "Industrial Infrastructure Construction",
  "Industrial Infrastructure Company",
  "Industrial Steel Building Company",
  "Industrial Steel Structure Company",
  "Industrial Steel Contractors",
  "Industrial Project Construction",
  "Industrial Project Contractor",

  /* Warehouse */
  "Warehouse Buildings",
  "Warehouse Building Company",
  "Warehouse Building Manufacturer",
  "Warehouse Construction Company",
  "Warehouse Construction Company India",
  "Warehouse Construction Services",
  "Warehouse Contractor",
  "Warehouse Shed Construction",
  "Warehouse Shed Manufacturer",
  "Steel Warehouse Building",
  "Steel Warehouse Construction",
  "Steel Warehouse Builders",
  "Industrial Warehouse Construction",
  "Logistics Warehouse Construction",
  "PEB Warehouse Construction",
  "Warehouse PEB Building",
  "Pre Engineered Warehouse",

  /* Factory */
  "Factory Buildings",
  "Factory Building Manufacturer",
  "Factory Building Construction",
  "Factory Construction Services",
  "Factory Shed Construction",
  "Factory Shed Manufacturer",
  "Factory PEB Building",
  "Pre Engineered Factory Building",
  "Manufacturing Unit Construction",

  /* Industrial Sheds */
  "Industrial Sheds",
  "Industrial Shed Manufacturer",
  "Industrial Shed Manufacturers India",
  "Industrial Shed Construction",
  "Industrial Shed Contractor",
  "Steel Industrial Shed",
  "Steel Shed Construction",

  /* Commercial / Cold Storage */
  "Commercial Steel Building",
  "Commercial Warehouse Construction",
  "Commercial Buildings",
  "Cold Storage PEB Building",
  "Cold Storage Buildings",

  /* Multi-storey */
  "Multi Storey Buildings",
  "Multi Storey Steel Buildings",
  "High Rise Steel Structure",

  /* Mezzanine */
  "Mezzanine Systems",
  "Industrial Mezzanine",
  "Structural Mezzanine",
  "Industrial Staircases",
  "Industrial Walkways",
  "Industrial Catwalks",
  "Roof Platforms",
  "Handrails and Guardrails",

  /* Roofing */
  "Industrial Roofing Systems",
  "Industrial Roofing Solutions",
  "PEB Roofing Solutions",
  "Steel Roofing Contractor",
  "Roofing Sheets",
  "Standing Seam Roofing",
  "Deck Sheets",
  "Ridge Ventilators",
  "Turbo Ventilators",

  /* Cladding */
  "Industrial Cladding Systems",
  "Wall Cladding Systems",
  "Roofing and Cladding Systems",
  "Sandwich Panels",
  "Polycarbonate Sheets",
  "Insulation Systems",
  "Industrial Louvers",
  "Sheeting Accessories",

  /* Engineering / Manufacturing */
  "PEB Design",
  "PEB Engineering",
  "PEB Fabrication",
  "PEB Manufacturing",
  "PEB Installation",
  "PEB Installation Services",
  "Steel Building Design",
  "Steel Building Installation",
  "Steel Building Erection",
  "Steel Erection Services",
  "Steel Fabrication Company India",

  /* Turnkey */
  "Turnkey PEB Project",
  "Turnkey Construction Company",
  "Turnkey Steel Buildings",
  "PEB Industrial Solutions",

  /* Buyer Intent */
  "Best PEB Company in India",
  "Leading PEB Company in India",
  "Top PEB Companies in India",
  "Best PEB Manufacturer India",
  "PEB Supplier India",
  "Steel Building Suppliers",
  "Steel Structure Manufacturers India",
  "Warehouse Construction Experts",
  "Best Warehouse Builders",

  /* Geographic high-priority */
  "PEB Company in Delhi",
  "PEB Company in Delhi NCR",
  "PEB Company in NCR",
  "PEB Manufacturer in Delhi NCR",
  "PEB Company in Haryana",
  "PEB Company in Sonipat",
  "PEB Company in Gurgaon",
  "PEB Company in Gurugram",
  "PEB Company in Noida",
  "PEB Company in Faridabad",
  "PEB Company in North India",

  /* Informational intent */
  "What is PEB Building",
  "Advantages of PEB Buildings",
  "PEB Construction Process",
  "PEB Building Design",
  "PEB Building Benefits",
  "PEB Building Applications",
  "PEB Building Durability",
  "Steel Building Benefits",
  "Steel Building Lifespan",
  "PEB vs RCC Building",
  "PEB Construction Advantages India",
];

/* =========================================================
   HOMEPAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "PEB Manufacturer & Pre-Engineered Building Company in India | Steelbuild Infra",

  description:
    "Steelbuild Infra Projects Limited is a Pre-Engineered Building (PEB), structural steel and industrial construction company in India delivering warehouses, factories, industrial sheds, steel buildings, multi-storey buildings, mezzanine, roofing and cladding solutions.",

  applicationName: companyName,

  keywords: homepageKeywords,

  authors: [
    {
      name: companyName,
      url: siteUrl,
    },
  ],

  creator: companyName,
  publisher: companyName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: companyName,

    title:
      "PEB Manufacturer & Pre-Engineered Building Company in India | Steelbuild Infra",

    description:
      "Pre-Engineered Buildings, structural steel systems, warehouses, factories, industrial sheds, multi-storey steel buildings, roofing, cladding and turnkey industrial construction solutions across India.",

    images: [
      {
        url: "/images/seo/steelbuild-og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Steelbuild Infra Projects Limited - Pre-Engineered Building and Structural Steel Company in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PEB Manufacturer & Pre-Engineered Building Company in India | Steelbuild Infra",

    description:
      "Pre-Engineered Buildings, structural steel buildings, warehouses, factories and industrial infrastructure solutions across India.",

    images: [
      "/images/seo/steelbuild-og-image.jpg",
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

  category:
    "Pre-Engineered Buildings and Industrial Construction",
};

/* =========================================================
   SANITY HERO CONVERTER
========================================================= */

function convertSanityHeroSlides(
  slides: SanityHeroSlide[],
): HeroSlide[] {
  return slides
    .filter((slide) =>
      Boolean(
        slide.image?.asset?.url &&
          slide.title &&
          slide.description,
      ),
    )
    .map((slide) => ({
      id: slide._id,

      image:
        slide.image?.asset?.url ?? "",

      eyebrow:
        slide.eyebrow ?? "",

      title:
        slide.title,

      description:
        slide.description,

      primaryButtonText:
        slide.primaryButtonText ||
        "Explore Our Projects",

      primaryButtonLink:
        slide.primaryButtonLink ||
        "/projects",

      secondaryButtonText:
        slide.secondaryButtonText ||
        "Talk to Our Experts",

      secondaryButtonLink:
        slide.secondaryButtonLink ||
        "/contact",
    }));
}

/* =========================================================
   HOMEPAGE
========================================================= */

export default async function HomePage() {
  let heroSlides: HeroSlide[] =
    HERO_SLIDES;

  try {
    const { data } =
      await sanityFetch({
        query: HERO_SLIDES_QUERY,
      });

    const sanitySlides =
      (data ?? []) as SanityHeroSlide[];

    const convertedSlides =
      convertSanityHeroSlides(
        sanitySlides,
      );

    if (convertedSlides.length > 0) {
      heroSlides =
        convertedSlides;
    }
  } catch (error) {
    console.error(
      "Failed to fetch homepage hero slides from Sanity:",
      error,
    );
  }

  /* =======================================================
     ORGANIZATION SCHEMA
  ======================================================= */

  const organizationSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    "@id":
      `${siteUrl}/#organization`,

    name:
      companyName,

    alternateName: [
      "Steelbuild Infra",
      "Steelbuild Infra Projects",
    ],

    url:
      siteUrl,

    logo: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/icon.png`,
    },

    image:
      `${siteUrl}/images/seo/steelbuild-og-image.jpg`,

    description:
      "Steelbuild Infra Projects Limited is an Indian Pre-Engineered Building, structural steel and industrial construction company providing engineered steel building solutions for warehouses, factories, industrial sheds, commercial buildings and industrial infrastructure.",

    areaServed: {
      "@type":
        "Country",

      name:
        "India",
    },

    knowsAbout: [
      "Pre-Engineered Buildings",
      "PEB Buildings",
      "PEB Engineering",
      "PEB Manufacturing",
      "PEB Fabrication",
      "PEB Installation",
      "Structural Steel",
      "Structural Steel Buildings",
      "Steel Buildings",
      "Industrial Buildings",
      "Warehouse Buildings",
      "Factory Buildings",
      "Industrial Sheds",
      "Commercial Steel Buildings",
      "Cold Storage Buildings",
      "Multi-Storey Steel Buildings",
      "Heavy Steel Structures",
      "Mezzanine Systems",
      "Structural Mezzanine",
      "Industrial Roofing Systems",
      "Standing Seam Roofing",
      "Roofing Sheets",
      "Deck Sheets",
      "Industrial Cladding Systems",
      "Wall Cladding",
      "Sandwich Panels",
      "Polycarbonate Sheets",
      "Insulation Systems",
      "Industrial Louvers",
      "Ridge Ventilators",
      "Turbo Ventilators",
      "Steel Fabrication",
      "Steel Erection",
      "Industrial Infrastructure",
      "Warehouse Construction",
      "Factory Construction",
      "Industrial Construction",
    ],

    hasOfferCatalog: {
      "@type":
        "OfferCatalog",

      name:
        "Pre-Engineered Building and Industrial Steel Solutions",

      itemListElement: [
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Pre-Engineered Buildings",

            url:
              `${siteUrl}/products/pre-engineered-buildings`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Warehouse Buildings",

            url:
              `${siteUrl}/products/warehouse-buildings`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Factory Buildings",

            url:
              `${siteUrl}/products/factory-buildings`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Industrial Sheds",

            url:
              `${siteUrl}/products/industrial-sheds`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Heavy Steel Structures",

            url:
              `${siteUrl}/products/heavy-steel-structures`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Multi-Storey Buildings",

            url:
              `${siteUrl}/products/multi-storey-buildings`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Mezzanine Systems",

            url:
              `${siteUrl}/products/mezzanine-systems`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Roofing Systems",

            url:
              `${siteUrl}/products/roofing-systems`,
          },
        },
        {
          "@type":
            "Offer",

          itemOffered: {
            "@type":
              "Service",

            name:
              "Cladding Systems",

            url:
              `${siteUrl}/products/cladding-systems`,
          },
        },
      ],
    },
  };

  /* =======================================================
     WEBSITE SCHEMA
  ======================================================= */

  const websiteSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "WebSite",

    "@id":
      `${siteUrl}/#website`,

    url:
      siteUrl,

    name:
      companyName,

    alternateName:
      "Steelbuild Infra",

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     HOMEPAGE WEBPAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    "@id":
      `${siteUrl}/#webpage`,

    url:
      siteUrl,

    name:
      "PEB Manufacturer & Pre-Engineered Building Company in India | Steelbuild Infra",

    headline:
      "Pre-Engineered Buildings and Structural Steel Solutions in India",

    description:
      "Steelbuild Infra Projects Limited provides Pre-Engineered Buildings, structural steel systems, warehouse buildings, factories, industrial sheds, roofing, cladding and engineered industrial infrastructure solutions across India.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/seo/steelbuild-og-image.jpg`,

      width: 1200,
      height: 630,
    },

    keywords:
      homepageKeywords.join(", "),

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "Service",

    "@id":
      `${siteUrl}/#peb-services`,

    name:
      "Pre-Engineered Building and Structural Steel Solutions",

    alternateName: [
      "PEB Solutions",
      "Industrial Steel Building Solutions",
    ],

    url:
      siteUrl,

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

    serviceType: [
      "Pre-Engineered Building Design",
      "PEB Engineering",
      "PEB Manufacturing",
      "PEB Fabrication",
      "PEB Installation",
      "Structural Steel Fabrication",
      "Steel Building Construction",
      "Warehouse Building Construction",
      "Factory Building Construction",
      "Industrial Shed Construction",
      "Heavy Steel Structure Solutions",
      "Multi-Storey Steel Buildings",
      "Mezzanine Systems",
      "Industrial Roofing Systems",
      "Industrial Cladding Systems",
    ],

    description:
      "Engineering, manufacturing, fabrication and project solutions for Pre-Engineered Buildings, structural steel buildings, warehouses, factories, industrial sheds and industrial infrastructure projects in India.",
  };

  /* =======================================================
     PRODUCT / SOLUTION COLLECTION SCHEMA
  ======================================================= */

  const productCollectionSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "ItemList",

    "@id":
      `${siteUrl}/#solutions`,

    name:
      "Steelbuild Industrial Building Solutions",

    itemListElement: [
      {
        "@type":
          "ListItem",
        position: 1,
        name:
          "Pre-Engineered Buildings",
        url:
          `${siteUrl}/products/pre-engineered-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 2,
        name:
          "Warehouse Buildings",
        url:
          `${siteUrl}/products/warehouse-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 3,
        name:
          "Factory Buildings",
        url:
          `${siteUrl}/products/factory-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 4,
        name:
          "Industrial Sheds",
        url:
          `${siteUrl}/products/industrial-sheds`,
      },
      {
        "@type":
          "ListItem",
        position: 5,
        name:
          "Commercial Buildings",
        url:
          `${siteUrl}/products/commercial-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 6,
        name:
          "Cold Storage Buildings",
        url:
          `${siteUrl}/products/cold-storage-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 7,
        name:
          "Heavy Steel Structures",
        url:
          `${siteUrl}/products/heavy-steel-structures`,
      },
      {
        "@type":
          "ListItem",
        position: 8,
        name:
          "Multi-Storey Buildings",
        url:
          `${siteUrl}/products/multi-storey-buildings`,
      },
      {
        "@type":
          "ListItem",
        position: 9,
        name:
          "Mezzanine Systems",
        url:
          `${siteUrl}/products/mezzanine-systems`,
      },
      {
        "@type":
          "ListItem",
        position: 10,
        name:
          "Roofing Systems",
        url:
          `${siteUrl}/products/roofing-systems`,
      },
      {
        "@type":
          "ListItem",
        position: 11,
        name:
          "Cladding Systems",
        url:
          `${siteUrl}/products/cladding-systems`,
      },
    ],
  };

  /* =======================================================
     COMBINED JSON-LD GRAPH
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      organizationSchema,
      websiteSchema,
      webPageSchema,
      serviceSchema,
      productCollectionSchema,
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
          __html:
            JSON.stringify(
              structuredData,
            ),
        }}
      />

      {/* ===================================================
          EXISTING HOMEPAGE
      =================================================== */}

      <Hero slides={heroSlides} />

      <TrustSection />

      <FeaturedProjects />

      <Industries />

      <WhySteelbuild />

      <ManufacturingSection />

      <ClientsSection />

      <TestimonialsSection />

      <CTASection />
    </>
  );
}