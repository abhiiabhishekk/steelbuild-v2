"use client";

import {
  useMemo,
  useState,
} from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import ProjectFilters, {
  type ProjectFilter,
} from "./ProjectFilters";

import type { SanityProjectListItem } from "@/types/sanityProject";

const PROJECTS_PER_PAGE = 12;

type ProjectsGridProps = {
  projects: SanityProjectListItem[];
};

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const [visibleCount, setVisibleCount] =
    useState(PROJECTS_PER_PAGE);

  const [search, setSearch] =
    useState("");

  const filteredProjects = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch =
        activeFilter === "All" ||
        project.category === activeFilter;

      const searchMatch =
        normalizedSearch.length === 0 ||
        project.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        project.location
          .toLowerCase()
          .includes(normalizedSearch) ||
        project.category
          .toLowerCase()
          .includes(normalizedSearch);

      return (
        categoryMatch &&
        searchMatch
      );
    });
  }, [
    projects,
    activeFilter,
    search,
  ]);

  const visibleProjects =
    filteredProjects.slice(
      0,
      visibleCount,
    );

  const hasMoreProjects =
    visibleCount <
    filteredProjects.length;

  const handleFilterChange = (
    filter: ProjectFilter,
  ) => {
    setActiveFilter(filter);
    setVisibleCount(
      PROJECTS_PER_PAGE,
    );
  };

  return (
    <section
      id="projects-portfolio"
      className="relative scroll-mt-32 bg-[#f7f9fc] py-24 lg:py-28"
    >
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Our Projects
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Explore Our Complete
            <br />
            Project Portfolio
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Discover our completed
            Pre-Engineered Building
            projects across manufacturing,
            warehousing, logistics,
            factory and infrastructure
            sectors throughout India.
          </p>
        </motion.div>

        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={
            handleFilterChange
          }
        />

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
            />

            <input
              type="text"
              placeholder="Search project by name, category or location..."
              value={search}
              onChange={(event) => {
                setSearch(
                  event.target.value,
                );

                setVisibleCount(
                  PROJECTS_PER_PAGE,
                );
              }}
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-6 text-lg font-semibold text-primary-blue shadow-[0_18px_55px_rgba(27,63,104,0.08)] outline-none transition focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
            />
          </div>

          <p className="mt-4 text-center text-sm font-bold text-gray-500">
            Showing{" "}
            {visibleProjects.length} of{" "}
            {filteredProjects.length}{" "}
            projects
          </p>
        </div>

        {visibleProjects.length >
        0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map(
              (
                project,
                index,
              ) => (
                <ProjectCard
                  key={
                    project._id
                  }
                  project={
                    project
                  }
                  index={index}
                />
              ),
            )}
          </div>
        ) : (
          <div className="mt-14 rounded-[28px] border border-gray-200 bg-white p-10 text-center">
            <p className="text-xl font-black text-primary-blue">
              No projects found.
            </p>

            <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
              Try another search term
              or select a different
              project category.
            </p>
          </div>
        )}

        {hasMoreProjects ? (
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (
                    previous,
                  ) =>
                    Math.min(
                      previous +
                        PROJECTS_PER_PAGE,
                      filteredProjects.length,
                    ),
                )
              }
              className="inline-flex items-center rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
            >
              Load More Projects
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}