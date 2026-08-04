"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import Container from "@/components/layout/Container";

const recognitionHighlights = [
  {
    icon: Trophy,
    title: "Industry Recognition",
    description:
      "Recognition reflecting Steelbuild’s contribution to industrial construction, engineering and project delivery.",
  },
  {
    icon: BookOpenCheck,
    title: "Media Features",
    description:
      "Coverage and project features highlighting engineering capabilities, manufacturing strength and completed work.",
  },
  {
    icon: Building2,
    title: "Business Milestones",
    description:
      "Important organizational achievements supporting Steelbuild’s growth, capacity and expanding market presence.",
  },
];

export default function AwardsHero() {
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
            Awards &amp; Recognition
          </span>
        </motion.div>

        {/* Main content */}

        <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Sparkles size={16} />
              Awards &amp; Recognition
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Achievements That Reflect
              <span className="block">
                Commitment, Quality and Progress.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild&apos;s recognitions, industry appreciation, media
              features and organizational milestones reflect the trust built
              through engineering excellence and dependable project delivery.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#awards-timeline"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
              >
                Explore Achievements

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="#industry-recognition"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                View Recognition

                <BadgeCheck size={20} />
              </Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-3 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-gray-600">
                Every recognition represents the combined effort of our
                leadership, engineering, manufacturing, project and support
                teams.
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
                  <Award size={27} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Recognized Progress
                  </p>

                  <h2 className="mt-2 text-3xl font-black leading-tight text-white">
                    Milestones Built Through Consistent Performance
                  </h2>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Our achievements represent steady progress across engineering,
                manufacturing, client relationships, project execution and
                organizational development.
              </p>

              <div className="mt-8 space-y-4">
                {recognitionHighlights.map((item, index) => {
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
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
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

              <div className="mt-7 flex items-start gap-3 rounded-[22px] border border-white/10 bg-[#102f55] p-5">
                <Medal
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/75">
                  Recognition strengthens our responsibility to continuously
                  improve quality, capability and customer value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}