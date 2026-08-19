import type { Metadata } from "next";

import CareersHero from "@/components/careers-page/CareersHero";
import WhyWorkWithUs from "@/components/careers-page/WhyWorkWithUs";
import CareersApplicationSection from "@/components/careers-page/CareersApplicationSection";
import CareersFAQ from "@/components/careers-page/CareersFAQ";
import CareersCTA from "@/components/careers-page/CareersCTA";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";

import { JOB_OPENINGS_QUERY } from "@/sanity/lib/jobOpeningQueries";

import type { SanityJobOpening } from "@/types/sanityJobOpening";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/careers`;

/* =========================================================
   CAREERS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Careers at Steelbuild Infra Projects | PEB Jobs in India",
  },

  description:
    "Explore career opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales, design and corporate functions in India.",

  alternates: {
    canonical: "/careers",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Careers at Steelbuild Infra Projects | PEB Jobs in India",

    description:
      "Explore job opportunities at Steelbuild Infra Projects Limited across engineering, manufacturing, detailing, quality, projects, sales and corporate functions.",

    images: [
      {
        url: "/images/careers/careers-hero.jpg",
        width: 1200,
        height: 630,
        alt:
          "Careers and job opportunities at Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Careers at Steelbuild Infra Projects | PEB Jobs in India",

    description:
      "Explore career opportunities across PEB engineering, manufacturing, quality, project execution, sales and corporate functions.",

    images: ["/images/careers/careers-hero.jpg"],
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
   CAREERS PAGE
========================================================= */

export default async function CareersPage() {
  let jobs: SanityJobOpening[] = [];

  try {
    jobs = await sanityFetch<SanityJobOpening[]>({
      query: JOB_OPENINGS_QUERY,

      revalidate: 60,

      tags: ["job-openings"],
    });
  } catch (error) {
    console.error(
      "Failed to fetch job openings:",
      error,
    );
  }

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
        name: "Careers",
        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     JOB LIST SCHEMA
  ======================================================= */

  const jobListSchema = {
    "@type": "ItemList",

    "@id": `${pageUrl}/#job-list`,

    name:
      "Current Job Openings at Steelbuild Infra Projects Limited",

    numberOfItems: jobs.length,

    itemListElement: jobs.map(
      (job, index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "JobPosting",

          name:
            job.title,

          title:
            job.title,

          description:
  job.description ||
  undefined,

          hiringOrganization: {
            "@id":
              `${siteUrl}/#organization`,
          },

          employmentType:
            job.employmentType ||
            undefined,

          jobLocation:
            job.location
              ? {
                  "@type": "Place",

                  address: {
                    "@type":
                      "PostalAddress",

                    addressLocality:
                      job.location,

                    addressCountry:
                      "IN",
                  },
                }
              : undefined,
        },
      }),
    ),
  };

  /* =======================================================
     COLLECTION PAGE SCHEMA
  ======================================================= */

  const collectionPageSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "Careers at Steelbuild Infra Projects Limited",

    headline:
      "Career Opportunities in PEB Engineering and Industrial Infrastructure",

    description:
      "Explore career opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales, design and corporate functions.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${pageUrl}/#job-list`,
    },

    mainEntity: {
      "@id":
        `${pageUrl}/#job-list`,
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
        `${siteUrl}/images/careers/careers-hero.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      collectionPageSchema,
      breadcrumbSchema,
      jobListSchema,
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

      <CareersHero />

      <WhyWorkWithUs />

      <CareersApplicationSection
        jobs={jobs}
      />

      <CareersFAQ />

      <CareersCTA />
    </>
  );
}