import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
} from "lucide-react";

import type { SanityProjectListItem } from "@/types/sanityProject";

type ProjectNavigationProps = {
  previous?: SanityProjectListItem | null;
  next?: SanityProjectListItem | null;
};

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-gray-200 pt-14">
      <div className="grid gap-6 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-[28px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:shadow-xl"
          >
            <div className="flex items-center text-gray-500">
              <ArrowLeft
                size={18}
                className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
              />

              <span className="text-sm font-bold uppercase tracking-[0.12em]">
                Previous Project
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-black leading-tight text-primary-blue transition-colors duration-300 group-hover:text-primary-red">
              {previous.name}
            </h3>

            <p className="mt-3 inline-flex items-start gap-2 text-gray-600">
              <MapPin
                size={16}
                className="mt-1 shrink-0 text-primary-red"
              />

              {previous.location}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-[28px] border border-gray-200 bg-white p-8 text-right transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:shadow-xl"
          >
            <div className="flex items-center justify-end text-gray-500">
              <span className="text-sm font-bold uppercase tracking-[0.12em]">
                Next Project
              </span>

              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            <h3 className="mt-5 text-2xl font-black leading-tight text-primary-blue transition-colors duration-300 group-hover:text-primary-red">
              {next.name}
            </h3>

            <p className="mt-3 inline-flex items-start justify-end gap-2 text-gray-600">
              <MapPin
                size={16}
                className="mt-1 shrink-0 text-primary-red"
              />

              {next.location}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}