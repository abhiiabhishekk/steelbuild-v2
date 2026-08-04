"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  {
    icon: Layers3,
    title: "Efficient Vertical Space",
    description:
      "Multiple usable floors developed within a compact project footprint.",
  },
  {
    icon: Ruler,
    title: "Engineered Structural Grid",
    description:
      "Columns, beams and floor systems coordinated around operational requirements.",
  },
  {
    icon: Factory,
    title: "Controlled Steel Fabrication",
    description:
      "Structural members manufactured through disciplined production processes.",
  },
];

export default function MultiStoreyHero() {
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
            href="/products"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Products
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">
            Multi-Storey Buildings
          </span>
        </motion.div>

        {/* Main hero */}

        <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Sparkles size={16} />
              Multi-Storey Steel Building Solutions
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Build Higher.
              <span className="block">
                Use Space Smarter.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild Infra Projects Limited delivers engineered
              multi-storey steel buildings designed for efficient space
              utilization, faster construction, structural performance and
              flexible industrial or commercial use.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#multi-storey-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Explore Solutions

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.07)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.22)]">
                <BadgeCheck size={21} />
              </div>

              <p className="pt-0.5 text-sm font-bold leading-7 text-gray-600">
                Integrated structural engineering, fabrication and project
                execution for multi-level steel building requirements.
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
                  <Building2 size={27} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Vertical Steel Construction
                  </p>

                  <h2 className="mt-2 text-3xl font-black leading-tight text-white">
                    Structured for Multi-Level Performance
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Multi-storey buildings combine structural steel framing,
                floor systems, access systems and building envelopes into one
                coordinated vertical building solution.
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
                      className="group rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/45 hover:bg-white/[0.12]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.2)] transition-transform duration-300 group-hover:scale-105">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm font-medium leading-7 text-white/65">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-[22px] border border-white/10 bg-[#102f55] p-5">
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Suitable for industrial, manufacturing, commercial,
                  warehousing and mixed-use building requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quick highlights */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-14 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 p-6 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
              <Building2 size={22} />
            </div>

            <div>
              <p className="text-sm font-black text-primary-blue">
                Multi-Level Layout
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Optimized vertical space utilization
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 p-6 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
              <Warehouse size={22} />
            </div>

            <div>
              <p className="text-sm font-black text-primary-blue">
                Flexible Applications
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Industrial and commercial usage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-sm font-black text-primary-blue">
                Coordinated Delivery
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Design, fabrication and execution
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}