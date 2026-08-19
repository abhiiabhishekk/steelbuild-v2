import type { Metadata } from "next";
import { Suspense } from "react";

import JobApplicationForm from "@/components/careers-page/JobApplicationForm";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/careers/apply`;

/* =========================================================
   JOB APPLICATION PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Apply for Jobs at Steelbuild Infra Projects | Careers",
  },

  description:
    "Apply for current job opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales, design and corporate functions in India.",

  alternates: {
    canonical:
      "/careers/apply",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Apply for Jobs at Steelbuild Infra Projects | Careers",

    description:
      "Submit your application and resume for current career opportunities at Steelbuild Infra Projects Limited across engineering, manufacturing, quality, projects, sales and corporate functions.",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Apply for Jobs at Steelbuild Infra Projects",

    description:
      "Submit your job application and resume for current opportunities at Steelbuild Infra Projects Limited.",
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
   APPLICATION FORM FALLBACK
========================================================= */

function ApplicationFormFallback() {
  return (
    <section className="bg-[#f7f9fc] pb-24 pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto h-8 w-52 animate-pulse rounded-full bg-gray-200" />

          <div className="mx-auto mt-7 h-16 max-w-3xl animate-pulse rounded-2xl bg-gray-200" />

          <div className="mx-auto mt-6 h-8 max-w-2xl animate-pulse rounded-xl bg-gray-200" />
        </div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[900px] animate-pulse rounded-[36px] bg-white shadow-sm" />

          <div className="space-y-6">
            <div className="h-[470px] animate-pulse rounded-[34px] bg-primary-blue/90" />

            <div className="h-[280px] animate-pulse rounded-[30px] bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   JOB APPLICATION PAGE
========================================================= */

export default function JobApplicationPage() {
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
      "Apply for Jobs at Steelbuild Infra Projects Limited",

    headline:
      "Submit Your Job Application to Steelbuild Infra Projects Limited",

    description:
      "Submit a job application and resume for career opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales, design and corporate functions.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    potentialAction: {
      "@type":
        "ApplyAction",

      name:
        "Submit Job Application",

      target: {
        "@type":
          "EntryPoint",

        urlTemplate:
          pageUrl,
      },
    },

    inLanguage:
      "en-IN",
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
          "Careers",

        item:
          `${siteUrl}/careers`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          "Apply",

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
      webPageSchema,
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
          APPLICATION FORM
      =================================================== */}

      <Suspense
        fallback={
          <ApplicationFormFallback />
        }
      >
        <JobApplicationForm />
      </Suspense>
    </>
  );
}