"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Factory,
  MapPinned,
} from "lucide-react";

const capabilities = [
  "Integrated PEB Engineering",
  "Precision Steel Manufacturing",
  "Pan-India Project Execution",
  "Quality-Controlled Delivery",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
    },
  },
};

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-steelbuild-heading"
      className="relative isolate overflow-hidden bg-[#051b32] text-white"
    >
      {/* =====================================================
          BRAND WATERMARK
      ====================================================== */}

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="/images/about/about-hero-brand-watermark-v2.png"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-center opacity-[0.78]"
        />
      </div>

      {/* =====================================================
          CORE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,23,43,0.99)_0%,rgba(5,27,50,0.97)_43%,rgba(5,28,52,0.68)_68%,rgba(5,28,52,0.18)_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(194,17,25,0.14),transparent_28%),radial-gradient(circle_at_80%_34%,rgba(27,63,104,0.10),transparent_36%)]" />

      {/* =====================================================
          ENGINEERING GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:76px_76px]" />

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-red/80 to-transparent" />

      {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}

      <div className="pointer-events-none absolute right-[12%] top-[18%] hidden h-px w-40 bg-gradient-to-r from-primary-red/70 to-transparent xl:block" />

      <div className="pointer-events-none absolute right-[20%] top-[18%] hidden h-2.5 w-2.5 rounded-full bg-primary-red shadow-[0_0_24px_rgba(194,17,25,0.9)] xl:block" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-12 pt-10 lg:pb-14 lg:pt-12">
        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <motion.nav
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-sm font-bold text-white/55"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span
            aria-hidden="true"
            className="text-white/25"
          >
            /
          </span>

          <span
            aria-current="page"
            className="text-white"
          >
            About Steelbuild
          </span>
        </motion.nav>

        {/* =====================================================
            MAIN HERO GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 py-6 xl:grid-cols-[1.12fr_0.88fr]"
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="max-w-[820px]">
            {/* About badge */}

            <motion.div
              variants={itemVariants}
              className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 backdrop-blur-md sm:px-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-red text-white">
                <Factory size={17} />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white sm:text-[11px] sm:tracking-[0.29em]">
                About Steelbuild Infra Projects Limited
              </span>
            </motion.div>

            {/* Tagline */}

            <motion.p
              variants={itemVariants}
              className="mt-7 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red"
            >
              Driven by Commitment and Quality
            </motion.p>

            {/* =================================================
                PRIMARY SEO H1
            ================================================== */}

            <motion.h1
              id="about-steelbuild-heading"
              variants={itemVariants}
              className="mt-4 max-w-[790px] text-[42px] font-black leading-[1.01] tracking-[-0.055em] text-white sm:text-[52px] lg:text-[60px]"
            >
              Pre-Engineered Building
              <span className="block">
                Engineering Excellence
              </span>

              <span className="block">
                for India&apos;s{" "}
                <span className="text-primary-red">
                  Industrial Growth.
                </span>
              </span>
            </motion.h1>

            {/* =================================================
                SEO / GEO DESCRIPTION
            ================================================== */}

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[720px] text-base font-medium leading-8 text-white/72 sm:text-lg"
            >
              Steelbuild Infra Projects Limited is a Pre-Engineered Building
              and structural steel solutions company delivering engineered
              warehouses, factory buildings, industrial sheds, heavy steel
              structures and large-scale industrial infrastructure through
              integrated engineering, precision manufacturing and dependable
              project execution across India.
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#company-story"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue hover:shadow-[0_24px_58px_rgba(255,255,255,0.14)]"
              >
                Explore Our Journey

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/[0.07] px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:!text-primary-blue"
              >
                View Our Projects

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* =================================================
                TRUST STRIP
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="mt-7 flex max-w-[780px] flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                <BadgeCheck
                  size={18}
                  className="text-primary-red"
                />

                <span className="text-xs font-black text-white/80">
                  ISO 9001:2015 Certified
                </span>
              </div>

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-2.5">
                <Factory
                  size={18}
                  className="text-primary-red"
                />

                <span className="text-xs font-black text-white/80">
                  PEB & Steel Manufacturing
                </span>
              </div>

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-2.5">
                <MapPinned
                  size={18}
                  className="text-primary-red"
                />

                <span className="text-xs font-black text-white/80">
                  Pan-India Project Execution
                </span>
              </div>
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT GLASS PANEL
          ==================================================== */}

          <motion.div
            variants={itemVariants}
            className="hidden self-center justify-end xl:flex xl:-translate-y-2"
          >
            <aside
              aria-label="Steelbuild engineering capabilities"
              className="relative w-full max-w-[390px] overflow-hidden rounded-[30px] border border-white/14 bg-[#0b3158]/42 p-8 shadow-[0_26px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              {/* Panel gradients */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_40%,rgba(194,17,25,0.07)_100%)]" />

              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-primary-red/10" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />

              <div className="relative z-10">
                {/* Eyebrow */}

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-red">
                  Industrial Engineering Partner
                </p>

                {/* Heading */}

                <h2 className="mt-5 text-[29px] font-black leading-[1.2] tracking-[-0.04em] text-white">
                  Building Industrial
                  <span className="block">
                    Infrastructure
                  </span>

                  <span className="block">
                    With Precision,
                  </span>

                  <span className="block text-primary-red">
                    Scale & Reliability.
                  </span>
                </h2>

                <div className="mt-6 h-[2px] w-20 bg-primary-red" />

                {/* =================================================
                    CAPABILITIES
                ================================================== */}

                <div className="mt-7 space-y-4">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary-red/20 bg-primary-red/[0.09] text-primary-red">
                        <Check
                          size={16}
                          strokeWidth={3}
                        />
                      </span>

                      <span className="text-sm font-black text-white/82">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    COMPANY FACTS
                ================================================== */}

                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        Established
                      </p>

                      <p className="mt-2 text-xl font-black text-white">
                        2020
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        Core Focus
                      </p>

                      <p className="mt-2 text-xl font-black text-white">
                        PEB & Steel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}