import type { Metadata } from "next";

import InnerHero from "@/components/common/InnerHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";

import IndustriesOverview from "@/components/industries-page/IndustriesOverview";
import IndustriesGrid from "@/components/industries-page/IndustriesGrid";
import WhyChooseIndustries from "@/components/industries-page/WhyChooseIndustries";
import IndustryProcess from "@/components/industries-page/IndustryProcess";
import IndustriesCTA from "@/components/industries-page/IndustriesCTA";

export const metadata: Metadata = {
  title:
    "Industries We Serve | PEB Solutions for Warehouses, Factories & Industrial Buildings",

  description:
    "Explore customized Pre-Engineered Building solutions by Steelbuild Infra Projects for warehousing, manufacturing, logistics, automobile, food processing, pharmaceutical, FMCG, textile, cold storage and infrastructure sectors.",

  keywords: [
    "Industries served by Steelbuild",
    "PEB solutions for industries",
    "warehouse building manufacturer India",
    "industrial factory buildings",
    "logistics warehouse buildings",
    "food processing building",
    "pharmaceutical factory building",
    "automobile plant building",
    "FMCG factory building",
    "cold storage building",
    "industrial steel buildings India",
    "Pre Engineered Building company India",
    "Steelbuild Infra Projects",
  ],

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title:
      "Industries We Serve | Steelbuild Infra Projects",

    description:
      "Customized Pre-Engineered Building solutions for warehouses, manufacturing plants, logistics parks, food processing, pharmaceutical, automobile and other industrial sectors.",

    url: "https://steelbuildinfra.com/industries",

    siteName: "Steelbuild Infra Projects",

    images: [
      {
        url: "/images/banners/industries-banner-v6.jpg",
        width: 1200,
        height: 630,
        alt: "Industries served by Steelbuild Infra Projects",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industries We Serve | Steelbuild Infra Projects",

    description:
      "Explore customized PEB solutions for diverse industrial, commercial and infrastructure applications.",

    images: ["/images/banners/industries-banner-v6.jpg"],
  },
};

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
];

const industriesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://steelbuildinfra.com/industries#breadcrumb",

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
          name: "Industries",
          item: "https://steelbuildinfra.com/industries",
        },
      ],
    },

    {
      "@type": "CollectionPage",
      "@id":
        "https://steelbuildinfra.com/industries#webpage",

      url: "https://steelbuildinfra.com/industries",

      name:
        "Industries We Serve | Steelbuild Infra Projects",

      description:
        "Customized Pre-Engineered Building solutions for warehousing, manufacturing, logistics, automobile, food processing, pharmaceutical, FMCG, textile, cold storage and infrastructure applications.",

      isPartOf: {
        "@type": "WebSite",
        "@id": "https://steelbuildinfra.com/#website",
        name: "Steelbuild Infra Projects",
        url: "https://steelbuildinfra.com/",
      },

      breadcrumb: {
        "@id":
          "https://steelbuildinfra.com/industries#breadcrumb",
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url:
          "https://steelbuildinfra.com/images/banners/industries-banner-v6.jpg",
      },

      about: {
        "@id":
          "https://steelbuildinfra.com/industries#industry-list",
      },
    },

    {
      "@type": "ItemList",
      "@id":
        "https://steelbuildinfra.com/industries#industry-list",

      name: "Industries Served by Steelbuild Infra Projects",

      numberOfItems: industries.length,

      itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry,
      })),
    },

    {
      "@type": "Service",
      "@id":
        "https://steelbuildinfra.com/industries#peb-service",

      name:
        "Industry-Specific Pre-Engineered Building Solutions",

      serviceType:
        "Design, manufacturing and execution of customized Pre-Engineered Buildings",

      description:
        "Steelbuild Infra Projects provides industry-specific PEB solutions engineered around operational workflow, structural loading, equipment, storage, safety, environmental requirements and future expansion.",

      provider: {
        "@type": "Organization",
        name: "Steelbuild Infra Projects Limited",
        url: "https://steelbuildinfra.com/",
        logo:
          "https://steelbuildinfra.com/images/logo/logo.png",

        telephone: [
          "+91 81301 99427",
          "+91 99170 65110",
        ],

        email: "info@steelbuildinfra.com",
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      audience: industries.map((industry) => ({
        "@type": "Audience",
        audienceType: industry,
      })),
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industriesSchema),
        }}
      />

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

      <div id="industries-grid" className="scroll-mt-32">
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