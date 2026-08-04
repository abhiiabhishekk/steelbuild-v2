"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectHeroCardProps = {
  image: string;
  category: string;
  title: string;
  location: string;
  area: string;
  year: string;
};

export default function ProjectHeroCard({
  image,
  category,
  title,
  location,
  area,
  year,
}: ProjectHeroCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-[34px] bg-primary-blue shadow-[0_30px_80px_rgba(27,63,104,0.22)]"
    >
      <div className="relative h-[540px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06182d]/88 via-[#06182d]/48 to-[#06182d]/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182d]/88 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl p-8 lg:p-12">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex rounded-full bg-primary-red px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-red-900/25">
                Completed
              </span>

              <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
                {category}
              </span>
            </div>

            <h3 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white lg:text-[52px]">
              {title}
            </h3>

            <div className="mt-8 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/12 p-5 text-white/85 backdrop-blur-xl sm:grid-cols-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Location
                </p>
                <p className="mt-1 font-bold">{location}</p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Scope
                </p>
                <p className="mt-1 font-bold">{area}</p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Year
                </p>
                <p className="mt-1 font-bold">{year}</p>
              </div>
            </div>

            <Link
  href="/projects"
  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-black !text-primary-blue shadow-[0_20px_50px_rgba(255,255,255,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
>
              View Case Study
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}