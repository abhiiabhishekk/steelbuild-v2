"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type IndustryDetailCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: LucideIcon;
  index: number;
  featured?: boolean;
  fullWidth?: boolean;
};

export default function IndustryDetailCard({
  title,
  description,
  image,
  category,
  icon: Icon,
  index,
  featured = false,
  fullWidth = false,
}: IndustryDetailCardProps) {
  const contactHref = `/contact?industry=${encodeURIComponent(title)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.58,
        delay: Math.min(index * 0.05, 0.3),
      }}
      className={`group relative isolate overflow-hidden rounded-[30px] border border-gray-200 bg-primary-blue shadow-[0_22px_65px_rgba(27,63,104,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/30 hover:shadow-[0_38px_95px_rgba(27,63,104,0.2)] ${
        fullWidth
          ? "min-h-[430px] md:col-span-2 lg:col-span-3 lg:min-h-[470px]"
          : featured
            ? "min-h-[500px] md:col-span-2 lg:col-span-2 lg:min-h-[540px]"
            : "min-h-[430px]"
      }`}
    >
      <Image
        src={image}
        alt={`${title} Pre-Engineered Building solution by Steelbuild Infra Projects`}
        fill
        sizes={
          fullWidth
            ? "(max-width: 1024px) 100vw, 100vw"
            : featured
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-1000 group-hover:scale-[1.07]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071a31] via-[#071a31]/42 to-transparent" />

      <div className="absolute inset-0 bg-primary-blue/0 transition-colors duration-500 group-hover:bg-primary-blue/10" />

      {/* Top content */}

      <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
        <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md">
          {category}
        </span>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:rotate-3 group-hover:bg-primary-red">
          <Icon size={23} />
        </div>
      </div>

      {/* Bottom content */}

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div
          className={`transition-transform duration-500 ${
            fullWidth
              ? "max-w-3xl"
              : featured
                ? "max-w-2xl"
                : ""
          }`}
        >
          <h3
            className={`font-black leading-tight tracking-[-0.035em] text-white ${
              fullWidth
                ? "text-3xl md:text-4xl"
                : featured
                  ? "text-3xl md:text-4xl lg:text-[44px]"
                  : "text-2xl md:text-[28px]"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-4 font-medium text-white/75 ${
              fullWidth
                ? "max-w-2xl text-base leading-8"
                : featured
                  ? "max-w-xl text-base leading-8"
                  : "text-sm leading-7"
            }`}
          >
            {description}
          </p>

          <Link
            href={contactHref}
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black !text-white backdrop-blur-md transition-all duration-300 hover:border-primary-red hover:bg-primary-red hover:!text-white"
          >
            Discuss Your Requirement

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}