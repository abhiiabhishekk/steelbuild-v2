"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { blogs } from "@/data/blogs";

export default function FeaturedArticle() {
  const featuredBlog =
    blogs.find((blog) => blog.featured) ?? blogs[0];

  if (!featuredBlog) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(featuredBlog.publishedAt));

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <BookOpen size={15} />
            Featured Article
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Featured Insights from Steelbuild
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Explore an in-depth article selected from our latest engineering,
            construction and industrial knowledge resources.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72 }}
          className="group relative z-10 mt-16 overflow-hidden rounded-[38px] border border-gray-200 bg-white shadow-[0_34px_95px_rgba(27,63,104,0.14)]"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="relative min-h-[360px] overflow-hidden bg-primary-blue md:min-h-[500px] lg:min-h-[620px]"
              aria-label={`Read ${featuredBlog.title}`}
            >
              <Image
                src={featuredBlog.thumbnail}
                alt={featuredBlog.title}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06172c]/55 via-transparent to-transparent" />

              <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#071a31]/40 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-lg backdrop-blur-xl md:left-8 md:top-8">
                {featuredBlog.category}
              </span>
            </Link>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                Steelbuild Knowledge Hub
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl lg:text-[48px]">
                {featuredBlog.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={17} className="text-primary-red" />
                  {formattedDate}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock3 size={17} className="text-primary-red" />
                  {featuredBlog.readingTime}
                </span>
              </div>

              <p className="mt-6 text-base font-medium leading-8 text-gray-600">
                {featuredBlog.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {(featuredBlog.tags ?? [])
  .slice(0, 4)
  .map((tag: string) => (
    <span
      key={tag}
      className="rounded-full border border-primary-blue/10 bg-primary-blue/[0.03] px-3 py-2 text-xs font-black text-primary-blue"
    >
      {tag}
    </span>
  ))}
              </div>

              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group/button mt-9 inline-flex min-h-[58px] w-fit items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
              >
                Read Featured Article

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}