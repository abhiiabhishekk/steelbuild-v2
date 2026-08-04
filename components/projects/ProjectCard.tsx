"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import type { SanityProjectListItem } from "@/types/sanityProject";

type Props = {
  project: SanityProjectListItem;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: Props) {
  const imageUrl =
    project.coverImage?.asset?.url;

  const imageAlt =
    project.coverImage?.alt ||
    project.name;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_35px_90px_rgba(27,63,104,0.15)]"
    >
      <Link
        href={`/projects/${project.slug}`}
      >
        <div className="relative h-[290px] overflow-hidden bg-primary-blue">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width:768px) 100vw,33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#17395f] to-[#071a31]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/65 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary-red">
            {project.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
          {project.name}
        </h3>

        <div className="mt-5 text-sm font-bold text-gray-600">
          <span className="inline-flex items-center gap-2">
            <MapPin
              size={16}
              className="text-primary-red"
            />
            {project.location}
          </span>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-7 inline-flex items-center font-black text-primary-red transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-blue"
        >
          View Project

          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Link>
      </div>
    </motion.article>
  );
}