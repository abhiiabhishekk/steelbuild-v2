"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Building2,
  Factory,
  Newspaper,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";

const blogHighlights = [
  {
    icon: BookOpen,
    value: "PEB Knowledge",
    label: "Technical Articles",
  },
  {
    icon: Factory,
    value: "Industry Insights",
    label: "Industrial Trends",
  },
  {
    icon: Building2,
    value: "Project Stories",
    label: "Engineering Experience",
  },
];

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-primary-red/[0.055] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.085] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 flex items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">Blog</span>
        </motion.div>

        {/* Main hero */}

        <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Sparkles size={16} />
              Steelbuild Knowledge Hub
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[74px]">
              Insights That Shape
              <span className="block">Industrial Building Decisions.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Explore expert articles on Pre-Engineered Buildings, industrial
              construction, manufacturing, warehousing, roofing systems,
              engineering practices and project execution.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#latest-articles"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:shadow-[0_24px_55px_rgba(27,63,104,0.2)]"
              >
                Explore Articles

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="#blog-search"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Search Knowledge

                <Search
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-3 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <Newspaper
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-gray-600">
                Technical knowledge, industry updates and practical insights
                developed for manufacturers, developers, architects,
                consultants and project owners.
              </p>
            </div>
          </motion.div>

          {/* Right panel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-7 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                  <BookOpen size={27} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Learn With Steelbuild
                  </p>

                  <h2 className="mt-2 text-3xl font-black leading-tight text-white">
                    Knowledge Built from Experience
                  </h2>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Discover content developed around real engineering,
                manufacturing and project execution experience across diverse
                industrial sectors.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    number: "01",
                    title: "Pre-Engineered Building Knowledge",
                    description:
                      "Understand structural systems, applications, advantages and technical considerations.",
                  },
                  {
                    number: "02",
                    title: "Industrial Sector Insights",
                    description:
                      "Explore building requirements across warehousing, manufacturing, logistics and processing industries.",
                  },
                  {
                    number: "03",
                    title: "Project & Manufacturing Stories",
                    description:
                      "Learn from completed projects, factory capabilities and practical execution experience.",
                  },
                ].map((item, index) => (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.18 + index * 0.07,
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/45 hover:bg-white/[0.12]"
                  >
                    <span className="absolute right-4 top-3 text-3xl font-black leading-none text-white/[0.05]">
                      {item.number}
                    </span>

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Knowledge {item.number}
                    </p>

                    <h3 className="mt-3 text-lg font-black leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-white/60">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>

              <Link
                href="#latest-articles"
                className="group mt-7 inline-flex items-center gap-3 font-black !text-white transition-colors duration-300 hover:!text-primary-red"
              >
                View Latest Articles

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Highlights strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_24px_75px_rgba(27,63,104,0.1)] md:grid-cols-3"
        >
          {blogHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className={`group flex min-h-[122px] items-center gap-5 px-7 py-6 transition-colors duration-300 hover:bg-[#f8fafc] ${
                  index < blogHighlights.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-xl font-black tracking-[-0.03em] text-primary-blue">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-500">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}