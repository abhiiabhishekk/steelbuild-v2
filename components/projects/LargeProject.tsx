"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type LargeProjectProps = {
  image: string;
  category: string;
  title: string;
  location: string;
  area: string;
};

export default function LargeProject({
  image,
  category,
  title,
  location,
  area,
}: LargeProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-[2rem] bg-primary-blue shadow-2xl"
    >
      <div className="relative h-[560px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06182d]/95 via-[#06182d]/45 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-primary-red px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
            {category}
          </span>

          <h3 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
            {title}
          </h3>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-white/80">
            <span>{location}</span>
            <span>•</span>
            <span>{area}</span>
          </div>

          <Link
            href="/projects"
            className="mt-8 inline-flex font-bold text-white transition group-hover:translate-x-2"
          >
            View Project →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}