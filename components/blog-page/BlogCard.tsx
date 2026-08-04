"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import type { SanityBlogListItem } from "@/types/sanityBlog";

type BlogCardProps = {
  blog: SanityBlogListItem;
  index: number;
};

export default function BlogCard({
  blog,
  index,
}: BlogCardProps) {
  const formattedDate = blog.publishedAt
    ? new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(blog.publishedAt))
    : "Date not available";

  const thumbnailUrl =
    blog.thumbnail?.asset?.url;

  const thumbnailAlt =
    blog.thumbnail?.alt?.trim() ||
    blog.title;

  const category =
    blog.category || "Steel Buildings";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.52,
        delay: Math.min(
          index * 0.05,
          0.25,
        ),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_32px_85px_rgba(27,63,104,0.14)]"
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block aspect-[1110/594] overflow-hidden bg-primary-blue"
        aria-label={`Read ${blog.title}`}
      >
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={thumbnailAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-all duration-1000 group-hover:scale-[1.06] group-hover:brightness-105"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#17395f] to-[#071a31]"
            aria-hidden="true"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#06172c]/35 via-transparent to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5">
          <span className="inline-flex rounded-full border border-primary-blue/10 bg-primary-blue/[0.045] px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-primary-blue">
            {category}
          </span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-gray-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays
              size={15}
              className="text-primary-red"
            />

            {formattedDate}
          </span>

          <span className="inline-flex items-center gap-2">
            <Clock3
              size={15}
              className="text-primary-red"
            />

            {blog.readingTime}
          </span>
        </div>

        <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
          <Link
            href={`/blog/${blog.slug}`}
            className="transition-colors duration-300 hover:text-primary-red"
          >
            {blog.title}
          </Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-gray-600">
          {blog.excerpt}
        </p>

        <div className="mt-auto pt-7">
          <Link
            href={`/blog/${blog.slug}`}
            className="group/button inline-flex items-center gap-3 font-black !text-primary-red transition-colors duration-300 hover:!text-primary-blue"
          >
            Read Article

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}