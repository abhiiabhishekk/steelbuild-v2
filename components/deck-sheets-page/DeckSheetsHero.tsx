"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Composite Floor Construction",
  "High Load Carrying Capacity",
  "Faster Construction",
  "Permanent Formwork",
];

const deckElements = [
  {
    number: "01",
    title: "Profiled Deck Sheets",
    text: "Permanent steel formwork for floor slabs",
  },
  {
    number: "02",
    title: "Composite Concrete Slab",
    text: "Reinforced concrete integrated with steel deck",
  },
  {
    number: "03",
    title: "Structural Floor Beams",
    text: "Primary and secondary supporting members",
  },
  {
    number: "04",
    title: "Shear Connection",
    text: "Composite interaction where technically required",
  },
];

export default function DeckSheetsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="grid gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
              <Layers3 size={15} />
              Steel Deck Sheets
            </span>

            <h1 className="mt-7 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-primary-blue sm:mt-8 sm:text-5xl lg:text-[72px]">
              Composite
              <span className="block">Deck Sheet</span>
              <span className="block">Systems</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
              Steelbuild Deck Sheets provide permanent formwork for reinforced
              concrete slabs, enabling faster construction, improved structural
              performance and efficient composite floor systems for multi-storey
              buildings.
            </p>

            {/* Highlight Pills */}

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-4 py-2.5 text-[12px] font-black leading-5 text-primary-blue sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue sm:min-h-[58px] sm:px-8"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/10 bg-white px-6 py-4 font-black !text-primary-blue shadow-[0_12px_30px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8"
              >
                Contact Our Experts

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Left Cards */}

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px] sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red sm:h-14 sm:w-14">
                  <Building2 size={24} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Multi-Storey Buildings
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Permanent steel formwork engineered for composite floor
                  construction in commercial and industrial buildings.
                </p>
              </div>

              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px] sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red sm:h-14 sm:w-14">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Composite Floor System
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Works together with reinforced concrete slabs to improve
                  structural efficiency, construction speed and floor
                  performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative pb-28 sm:pb-28 md:pb-24 xl:pb-20"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_38px_100px_rgba(27,63,104,0.23)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/deck-sheets/deck-sheets-hero.jpg"
                    alt="Steel deck sheet composite floor system integrated with a modern multi-storey steel building"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 50vw"
                    className="object-cover object-[48%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-10

                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[360px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Composite Floor Construction
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Steel Deck Sheet & Structural Floor System
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-10

                      min-[390px]:bottom-5

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Deck System
                    </p>

                    <h2
                      className="
                        mt-1.5
                        max-w-[560px]

                        text-[18px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[30px]
                      "
                    >
                      Composite Floors Designed for
                      <span className="block">
                        Strength, Speed and Efficiency
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System Elements */}

              <div className="relative z-10 mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                {deckElements.map((item) => (
                  <div
                    key={item.number}
                    className="min-h-[94px] rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm sm:min-h-[104px] sm:rounded-[20px] sm:px-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-xs font-black text-primary-red">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 pr-2 text-[10px] font-medium leading-[1.5] text-white/60 sm:text-[11px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Information Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="
                absolute
                -bottom-7
                left-3
                right-3
                z-20

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.15)]

                min-[390px]:-bottom-8
                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-6
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-5
                md:left-9
                md:right-9

                xl:-bottom-13
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <BadgeCheck size={22} className="sm:hidden" />
                  <BadgeCheck size={25} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Composite Floor Performance
                  </p>

                  <p className="mt-1.5 text-[16px] font-black leading-[1.35] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Deck sheets, floor beams, reinforcement and concrete work
                    together as one coordinated structural floor assembly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}