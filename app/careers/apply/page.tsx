import type { Metadata } from "next";
import { Suspense } from "react";

import JobApplicationForm from "@/components/careers-page/JobApplicationForm";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Apply for Jobs at Steelbuild Infra Projects | Careers",

  description:
    "Apply for current job opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales and corporate functions.",

  keywords: [
    "Steelbuild careers",
    "PEB jobs in India",
    "PEB design engineer jobs",
    "PEB detailer jobs",
    "steel structure jobs",
    "manufacturing jobs Sonipat",
    "engineering jobs Delhi NCR",
    "Steelbuild job application",
  ],

  alternates: {
    canonical: "/careers/apply",
  },

  openGraph: {
    title:
      "Apply for Jobs at Steelbuild Infra Projects",

    description:
      "Submit your application and resume for current career opportunities at Steelbuild Infra Projects Limited.",

    url:
      "https://steelbuildinfra.com/careers/apply",

    siteName:
      "Steelbuild Infra Projects Limited",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Apply for Jobs at Steelbuild Infra Projects",

    description:
      "Submit your job application and resume for current opportunities at Steelbuild Infra Projects Limited.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jobApplicationSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id":
        "https://steelbuildinfra.com/careers/apply#breadcrumb",

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
          name: "Careers",
          item:
            "https://steelbuildinfra.com/careers",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Apply",
          item:
            "https://steelbuildinfra.com/careers/apply",
        },
      ],
    },

    {
      "@type": "WebPage",

      "@id":
        "https://steelbuildinfra.com/careers/apply#webpage",

      url:
        "https://steelbuildinfra.com/careers/apply",

      name:
        "Apply for Jobs at Steelbuild Infra Projects",

      description:
        "Submit a job application and resume for current career opportunities at Steelbuild Infra Projects Limited.",

      isPartOf: {
        "@type": "WebSite",

        "@id":
          "https://steelbuildinfra.com/#website",

        name:
          "Steelbuild Infra Projects Limited",

        url:
          "https://steelbuildinfra.com/",
      },

      breadcrumb: {
        "@id":
          "https://steelbuildinfra.com/careers/apply#breadcrumb",
      },

      about: {
        "@type": "Organization",

        "@id":
          "https://steelbuildinfra.com/#organization",

        name:
          "Steelbuild Infra Projects Limited",

        url:
          "https://steelbuildinfra.com/",
      },

      potentialAction: {
        "@type": "ApplyAction",

        name:
          "Submit Job Application",

        target:
          "https://steelbuildinfra.com/careers/apply",
      },
    },
  ],
};

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

export default function JobApplicationPage() {
  return (
    <>
      <JsonLd data={jobApplicationSchema} />

      <Suspense
        fallback={<ApplicationFormFallback />}
      >
        <JobApplicationForm />
      </Suspense>
    </>
  );
}