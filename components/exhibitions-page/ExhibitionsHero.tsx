"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Globe2,
  Presentation,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  {
    icon: Globe2,
    title: "Industry Presence",
    description:
      "Participating in leading industrial exhibitions and engineering expos across India.",
  },
  {
    icon: Presentation,
    title: "Engineering Showcase",
    description:
      "Presenting innovative Pre-Engineered Building solutions, manufacturing capabilities and completed projects.",
  },
  {
    icon: CalendarDays,
    title: "Business Networking",
    description:
      "Building relationships with customers, consultants, architects, EPC companies and industry leaders.",
  },
];

export default function ExhibitionsHero() {
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
          className="relative z-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            About
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">
            Exhibitions
          </span>
        </motion.div>

        {/* Hero */}

        <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Sparkles size={16} />
              Steelbuild at Industry Events
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[74px]">
              Connecting With
              <span className="block">
                Industry Through Exhibitions
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Explore Steelbuild Infra Projects Limited's participation in
              India's leading industrial exhibitions, warehousing expos and
              engineering events where we showcase innovative Pre-Engineered
              Building solutions, manufacturing excellence and project
              capabilities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
  href="#past-exhibitions"
  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
>
  Explore Exhibitions

  <ArrowDown
    size={20}
    className="transition-transform duration-300 group-hover:translate-y-1"
  />
</Link>

              <Link
  href="/contact"
  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
>
  Connect With Our Team

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-3 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <BadgeCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-gray-600">
                Every exhibition strengthens our industry relationships,
                showcases engineering excellence and reinforces our commitment
                to delivering world-class Pre-Engineered Building solutions.
              </p>
            </div>
          </motion.div>

          {/* Right */}

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
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                  <Presentation size={28} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Exhibition Journey
                  </p>

                  <h2 className="mt-2 text-3xl font-black leading-tight text-white">
                    Building Industry Connections
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                From warehousing expos to engineering exhibitions, Steelbuild
                continues to engage with industry professionals, customers and
                business partners while presenting advanced steel building
                solutions.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.18 + index * 0.07,
                      }}
                      className="rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-red">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}