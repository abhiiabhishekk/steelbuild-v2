"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import ProjectHeroCard from "./ProjectHeroCard";
import ProjectCard from "./ProjectCard";

import type {
  SanityProjectCategory,
  SanityProjectListItem,
} from "@/types/sanityProject";

type FeaturedProject = {
  image: string;
  category: SanityProjectCategory;
  title: string;
  slug: string;
  location: string;
  area: string;
  tonnage: string;
  year: string;
};

const projects: FeaturedProject[] = [
  {
    image: "/images/projects/project-1.jpg",
    category: "Warehouse",
    title:
      "Large-Scale Warehouse Infrastructure Built for Modern Logistics",
    slug:
      "large-scale-warehouse-infrastructure-modern-logistics",
    location: "Pan India",
    area: "PEB Industrial Project",
    tonnage: "Not specified",
    year: "2026",
  },
  {
    image: "/images/projects/project-2.jpg",
    category: "Industrial",
    title:
      "Precision Steel Building for Manufacturing Excellence",
    slug:
      "precision-steel-building-manufacturing-excellence",
    location: "Industrial Sector",
    area: "Manufacturing Facility",
    tonnage: "Not specified",
    year: "2025",
  },
  {
    image: "/images/projects/project-3.jpg",
    category: "Industrial",
    title:
      "High-Performance Pre-Engineered Building Solution",
    slug:
      "high-performance-pre-engineered-building-solution",
    location: "Manufacturing Facility",
    area: "Steel Structure Project",
    tonnage: "Not specified",
    year: "2025",
  },
  {
    image: "/images/projects/project-4.jpg",
    category: "Logistics",
    title:
      "Scalable Warehouse Building for Supply Chain Growth",
    slug:
      "scalable-warehouse-building-supply-chain-growth",
    location: "Warehousing & Logistics",
    area: "Logistics Infrastructure",
    tonnage: "Not specified",
    year: "2026",
  },
];

function convertToSanityProject(
  project: FeaturedProject,
  index: number,
): SanityProjectListItem {
  return {
    _id: `featured-project-${index + 1}`,

    projectId: `FP-${String(
      index + 1,
    ).padStart(3, "0")}`,

    name: project.title,
    slug: project.slug,

    category: project.category,
    status: "Completed",

    location: project.location,
    area: project.area,
    tonnage: project.tonnage,

    coverImage: {
      _type: "image",

      alt: `${project.title} by Steelbuild Infra Projects Limited`,

      asset: {
        _id: `featured-project-image-${index + 1}`,
        url: project.image,
      },
    },

    shortDescription:
      "A featured Pre-Engineered Building project showcasing Steelbuild's engineering, manufacturing and project-delivery capabilities.",

    featured: true,
    active: true,

    displayOrder: index + 1,
    publishedAt: `${project.year}-01-01T00:00:00.000Z`,
  };
}

export default function FeaturedProjects() {
  const heroProject = projects[0];

  const remainingProjects = projects
    .slice(1)
    .map((project, index) =>
      convertToSanityProject(
        project,
        index + 1,
      ),
    );

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] pb-32 pt-40">
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <div className="absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-primary-red/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-120px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
            Featured Projects
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Engineering Excellence Across Every Industry.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            From warehouses and factories to large-scale
            industrial structures, Steelbuild delivers projects
            that combine speed, strength and precision.
          </p>
        </motion.div>

        {heroProject && (
          <div className="mt-16">
            <ProjectHeroCard
              image={heroProject.image}
              category={heroProject.category}
              title={heroProject.title}
              location={heroProject.location}
              area={heroProject.area}
              year={heroProject.year}
            />
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {remainingProjects.map(
            (project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={index}
              />
            ),
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-14 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-xl bg-primary-red px-10 py-5 text-lg font-black !text-white shadow-[0_20px_50px_rgba(194,17,25,0.30)] transition-all duration-500 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
          >
            Explore All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}