import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";
import { PROJECTS_QUERY } from "@/sanity/lib/projectQueries";

import type { SanityProjectListItem } from "@/types/sanityProject";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/projects`;

/* =========================================================
   PROJECTS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Pre-Engineered Building Projects in India | Steelbuild Infra Projects",
  },

  description:
    "Explore Pre-Engineered Building projects delivered by Steelbuild Infra Projects Limited across warehousing, manufacturing, logistics, food processing, industrial and infrastructure sectors in India.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Pre-Engineered Building Projects in India | Steelbuild Infra Projects",

    description:
      "Explore Steelbuild Infra Projects Limited's PEB projects across industrial, warehousing, logistics, manufacturing and infrastructure sectors in India.",

    images: [
      {
        url:
          "/images/projects/project-001/cover.jpg",

        width: 1200,

        height: 630,

        alt:
          "Pre-Engineered Building projects delivered by Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pre-Engineered Building Projects in India | Steelbuild Infra Projects",

    description:
      "Explore industrial, warehousing, logistics and manufacturing PEB projects delivered by Steelbuild Infra Projects Limited across India.",

    images: [
      "/images/projects/project-001/cover.jpg",
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
   PROJECT DATA
========================================================= */

const getProjects = async (): Promise<
  SanityProjectListItem[]
> => {
  return sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 0,
  }) as Promise<SanityProjectListItem[]>;
};

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default async function ProjectsPage() {
  const projects = await getProjects();

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
        name: "Projects",
        item: pageUrl,
      },
    ],
  };

  const projectListSchema = {
    "@type": "ItemList",

    "@id": `${pageUrl}/#project-list`,

    name:
      "Pre-Engineered Building Projects by Steelbuild Infra Projects Limited",

    numberOfItems:
      projects.length,

    itemListElement:
      projects.map((project, index) => ({
        "@type": "ListItem",

        position:
          index + 1,

        item: {
          "@type": "CreativeWork",

          "@id":
            `${siteUrl}/projects/${project.slug}/#project`,

          name:
            project.name,

          url:
            `${siteUrl}/projects/${project.slug}`,

          image:
            project.coverImage?.asset?.url ||
            undefined,

          contentLocation:
            project.location || undefined,
        },
      })),
  };

  const collectionPageSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "Pre-Engineered Building Projects in India",

    headline:
      "Industrial and Pre-Engineered Building Projects Across India",

    description:
      "Explore Pre-Engineered Building projects delivered by Steelbuild Infra Projects Limited across warehousing, manufacturing, logistics, food processing, industrial and infrastructure sectors in India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}/#project-list`,
    },

    mainEntity: {
      "@id": `${pageUrl}/#project-list`,
    },

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url:
        `${siteUrl}/images/projects/project-001/cover.jpg`,
    },

    hasPart:
      projects.map((project) => ({
        "@id":
          `${siteUrl}/projects/${project.slug}/#project`,
      })),

    inLanguage: "en-IN",
  };

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      collectionPageSchema,
      breadcrumbSchema,
      projectListSchema,
    ],
  };

  return (
    <>
      <JsonLd
        data={structuredData}
      />

      <ProjectsHero />

      <ProjectsGrid
        projects={projects}
      />
    </>
  );
}