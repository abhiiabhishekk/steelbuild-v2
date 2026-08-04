import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";
import { PROJECTS_QUERY } from "@/sanity/lib/projectQueries";

import type { SanityProjectListItem } from "@/types/sanityProject";

export const metadata: Metadata = {
  title:
    "Pre-Engineered Building Projects in India | Steelbuild Infra Projects",
  description:
    "Explore completed Pre-Engineered Building projects by Steelbuild Infra Projects Limited across warehousing, manufacturing, logistics, food processing, industrial and infrastructure sectors in India.",
  keywords: [
    "Pre-Engineered Building projects",
    "PEB projects in India",
    "industrial building projects",
    "warehouse construction projects",
    "factory building projects",
    "steel building projects",
    "PEB company projects",
    "Steelbuild Infra Projects",
  ],
  alternates: {
    canonical: "https://steelbuildinfra.com/projects",
  },
  openGraph: {
    title:
      "Pre-Engineered Building Projects | Steelbuild Infra Projects Limited",
    description:
      "Explore Steelbuild's completed PEB projects across industrial, warehousing, logistics, manufacturing and infrastructure sectors.",
    url: "https://steelbuildinfra.com/projects",
    siteName: "Steelbuild Infra Projects Limited",
    type: "website",
    images: [
      {
        url: "/images/projects/project-001/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Completed PEB projects by Steelbuild Infra Projects Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pre-Engineered Building Projects | Steelbuild Infra Projects Limited",
    description:
      "Explore completed industrial, warehousing, logistics and manufacturing PEB projects delivered across India.",
    images: [
      "/images/projects/project-001/cover.jpg",
    ],
  },
};

const getProjects = async (): Promise<
  SanityProjectListItem[]
> => {
  return sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 0,
  }) as Promise<SanityProjectListItem[]>;
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Pre-Engineered Building Projects",
          description:
            "Completed Pre-Engineered Building projects delivered by Steelbuild Infra Projects Limited across industrial sectors in India.",
          url: "https://steelbuildinfra.com/projects",
          isPartOf: {
            "@type": "WebSite",
            name: "Steelbuild Infra Projects Limited",
            url: "https://steelbuildinfra.com",
          },
          provider: {
            "@type": "Organization",
            name: "Steelbuild Infra Projects Limited",
            url: "https://steelbuildinfra.com",
          },
          hasPart: projects.map((project) => ({
            "@type": "CreativeWork",
            name: project.name,
            url: `https://steelbuildinfra.com/projects/${project.slug}`,
            image:
              project.coverImage?.asset?.url ||
              undefined,
            contentLocation: project.location,
          })),
        }}
      />

      <ProjectsHero />

      <ProjectsGrid projects={projects} />
    </>
  );
}