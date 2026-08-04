"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Building2,
  Factory,
  Play,
} from "lucide-react";

import Container from "@/components/layout/Container";

const profileHighlights = [
  {
    icon: Building2,
    title: "Pre-Engineered Buildings",
    description: "Integrated industrial building solutions",
  },
  {
    icon: Factory,
    title: "Manufacturing Strength",
    description: "50,000 MT annual production capacity",
  },
  {
    icon: BookOpen,
    title: "Corporate Brochure",
    description: "Complete company and capability profile",
  },
];

export default function CorporateProfileHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#153b68] pb-24 pt-28 text-white lg:pb-28 lg:pt-32">
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />
      </div>

      {/* Background glows */}

      <div className="pointer-events-none absolute -left-48 top-12 h-[500px] w-[500px] rounded-full bg-primary-red/20 blur-[125px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-[#397bd8]/20 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#153b68]/40 via-transparent to-[#0c2d50]/80" />

      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
              <Building2
                size={16}
                className="text-primary-red"
              />
              Steelbuild Corporate Profile
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-6xl lg:text-[76px]">
              Discover the Strength
              <span className="block text-white">
                Behind Steelbuild.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-9 text-white/75 md:text-xl">
              Explore Steelbuild Infra Projects Limited through our corporate
              film and official company brochure, presenting our engineering
              expertise, manufacturing capabilities, project experience and
              commitment to quality.
            </p>

            <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#corporate-video"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-base font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80e15] hover:!text-white"
              >
                <Play
                  size={20}
                  className="fill-current"
                />

                Watch Corporate Film
              </a>

              <a
                href="#corporate-brochure"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
              >
                Explore Company Brochure

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mx-auto mt-16 grid max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.09] shadow-[0_28px_85px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-3"
          >
            {profileHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group flex min-h-[165px] items-center gap-5 p-7 transition-colors duration-300 hover:bg-white/[0.07] md:p-8 ${
                    index < profileHighlights.length - 1
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_30px_rgba(194,17,25,0.28)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={27} />
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-white">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium leading-6 text-white/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-black text-white/70 transition-colors duration-300 hover:text-white"
            >
              Connect with our engineering team

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}