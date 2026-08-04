"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  Globe2,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const stats = [
  {
    value: "700+",
    label: "Completed Projects",
    icon: Building2,
  },
  {
    value: "500+",
    label: "Happy Clients",
    icon: UsersRound,
  },
  {
    value: "50,000 MT",
    label: "Annual Capacity",
    icon: Factory,
  },
  {
    value: "Pan India",
    label: "Project Execution",
    icon: Globe2,
  },
];

export default function ProjectsHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-24 lg:pb-28 lg:pt-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.017)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.017)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-primary-red/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-44 bottom-16 h-[460px] w-[460px] rounded-full bg-primary-blue/[0.07] blur-3xl" />

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

          <span className="font-black text-primary-blue">Projects</span>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mt-12 max-w-5xl"
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={16} />
            Completed Projects
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[76px]">
            Engineering Excellence
            <span className="block">Delivered Across India</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-medium leading-9 text-gray-600">
            Explore Steelbuild&apos;s portfolio of Pre-Engineered Building
            projects delivered across manufacturing, warehousing, logistics,
            food processing, industrial and infrastructure sectors.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#projects-portfolio"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
            >
              Explore Projects

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
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
        </motion.div>

        {/* Project visual */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="relative z-10 mt-6 lg:mt-8"
        >
          <div className="relative isolate min-h-[610px] overflow-hidden rounded-[34px] border border-gray-200 bg-primary-blue shadow-[0_38px_100px_rgba(27,63,104,0.18)] md:min-h-[660px] min-h-[560px] lg:min-h-[620px]">
            <motion.div
              initial={{ scale: 1 }}
              animate={
                prefersReducedMotion
                  ? { scale: 1 }
                  : { scale: [1, 1.035] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 26,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
              }
              className="absolute inset-0"
            >
              <Image
                src="/images/banners/projects-banner-v3.jpg"
                alt="Completed industrial Pre-Engineered Building projects by Steelbuild Infra Projects"
                fill
                priority
                fetchPriority="high"
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Subtle overlays */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06172c]/55 via-[#06172c]/10 to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06172c]/18 via-transparent to-transparent" />

            {/* Portfolio badge */}

            <div className="absolute left-6 top-6 z-20 md:left-9 md:top-9">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#071a31]/35 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-xl backdrop-blur-xl">
                <BadgeCheck size={15} className="text-primary-red" />
                Industrial Project Portfolio
              </span>
            </div>

            {/* Statistics strip */}

            <div className="absolute inset-x-0 bottom-0 z-30 border-t border-white/[0.07] bg-[#071f3b]/82 backdrop-blur-2xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + index * 0.07,
                      }}
                      className={`group flex min-h-[122px] items-center gap-5 px-6 py-6 transition-colors duration-300 hover:bg-white/[0.045] md:px-8 ${
                        index !== stats.length - 1
                          ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r sm:border-white/[0.07]"
                          : ""
                      } ${
                        index === 1
                          ? "sm:border-r-0 lg:border-r lg:border-white/[0.07]"
                          : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="whitespace-nowrap text-2xl font-black tracking-[-0.035em] text-white md:text-3xl">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-sm font-bold text-white/55">
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}