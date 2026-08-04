import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
} from "lucide-react";

import type { SanityProjectListItem } from "@/types/sanityProject";

type RelatedProjectsProps = {
  projects: SanityProjectListItem[];
};

export default function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="mt-28 border-t border-gray-200 pt-20">
      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
          Related Projects
        </span>

        <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl">
          Similar Projects
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => {
          const imageUrl =
            project.coverImage?.asset?.url;

          const imageAlt =
            project.coverImage?.alt?.trim() ||
            project.name;

          return (
            <article
              key={project._id}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_35px_90px_rgba(27,63,104,0.15)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block h-[260px] overflow-hidden bg-primary-blue"
                aria-label={`View ${project.name}`}
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#17395f] to-[#071a31]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 via-transparent to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex w-fit rounded-full border border-primary-blue/10 bg-primary-blue/[0.045] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-primary-blue">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors duration-300 hover:text-primary-red"
                  >
                    {project.name}
                  </Link>
                </h3>

                <div className="mt-4 flex items-start gap-2 font-medium leading-7 text-gray-600">
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-primary-red"
                  />

                  <span>{project.location}</span>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center font-black !text-primary-red transition-all duration-300 group-hover:translate-x-2 group-hover:!text-primary-blue"
                  >
                    View Project

                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}