"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/types/project";

export type ProjectFilter = "All" | ProjectCategory;

type Props = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

const filters: ProjectFilter[] = [
  "All",
  "Industrial",
  "Warehouse",
  "Factory",
  "Logistics",
  "Food Processing",
  "Infrastructure",
];

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-14 flex flex-wrap justify-center gap-3"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`rounded-full border px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition-all duration-300 ${
              isActive
                ? "border-primary-red bg-primary-red !text-white shadow-lg shadow-primary-red/20"
                : "border-gray-200 bg-white !text-primary-blue hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </motion.div>
  );
}