"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type IndustryCardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  href: string;
  index: number;
};

export default function IndustryCard({
  image,
  title,
  category,
  description,
  href,
  index,
}: IndustryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      className="group relative h-[410px] overflow-hidden rounded-[30px] border border-primary-blue/10 bg-primary-blue shadow-[0_22px_55px_rgba(27,63,104,0.16)] transition-all duration-700 hover:-translate-y-2 hover:border-primary-red/30 hover:shadow-[0_42px_95px_rgba(27,63,104,0.28)] lg:h-[450px]"
    >
      {/* Industry image */}

      <Image
        src={image}
        alt={`${title} Pre-Engineered Building solutions by Steelbuild Infra Projects Limited`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Image overlays */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06172c]/95 via-[#07172a]/38 to-[#07172a]/5" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07172a]/20 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-primary-blue/0 transition-colors duration-700 group-hover:bg-primary-blue/10" />

      {/* Border highlight */}

      <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/0 transition-colors duration-500 group-hover:border-white/15" />

      {/* Card content */}

      <div className="absolute inset-0 flex flex-col p-7 lg:p-8">
        <div className="mt-auto flex min-h-[230px] flex-col justify-end">
          {/* Category badge */}

          <span className="inline-flex w-fit rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
            {category}
          </span>

          {/* Industry name */}

          <h3 className="mt-5 text-[2rem] font-black leading-tight tracking-[-0.035em] text-white lg:text-[2.2rem]">
            {title}
          </h3>

          {/* Description */}

          <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-white/75">
            {description}
          </p>

          {/* CTA */}

          <Link
            href={href}
            aria-label={`Explore ${title} industry solutions`}
            className="group/link mt-6 inline-flex w-fit items-center gap-2.5 font-black !text-white transition-colors duration-300 hover:!text-primary-red"
          >
            Explore Solutions

            <ArrowUpRight
              size={18}
              className="transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-primary-red"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}