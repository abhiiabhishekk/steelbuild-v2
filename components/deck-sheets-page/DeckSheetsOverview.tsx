"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    title: "Permanent Formwork",
    description:
      "Acts as permanent shuttering during concrete casting, eliminating conventional temporary formwork.",
    icon: Layers3,
  },
  {
    title: "Composite Floor System",
    description:
      "Works together with reinforced concrete to improve floor strength and structural efficiency.",
    icon: Building2,
  },
  {
    title: "Long-Term Performance",
    description:
      "Manufactured from high-quality coated steel for durability, corrosion resistance and long service life.",
    icon: ShieldCheck,
  },
];

export default function DeckSheetsOverview() {
  return (
    <section
      id="deck-sheets-overview"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-28 sm:pb-28 md:pb-24 xl:pb-20"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px]">
                  <Image
                    src="/images/products/deck-sheets/deck-sheets-overview.jpg"
                    alt="Steel Deck Sheet Composite Floor System"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-[48%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information Box */}

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
                      sm:max-w-[330px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Composite Floor Technology
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Steel Deck + Reinforced Concrete
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
                      Engineered Floor System
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-[520px]

                        text-[18px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[28px]
                      "
                    >
                      Faster Construction
                      <span className="block">
                        Higher Structural Efficiency
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Structural Floor Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="
                absolute
                -bottom-12
                left-3
                right-3
                z-20

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:-bottom-8
                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-6
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-5
                md:left-8
                md:right-8

                xl:-bottom-15
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <BadgeCheck size={22} className="sm:hidden" />
                  <BadgeCheck size={24} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Structural Floor System
                  </p>

                  <p className="mt-1.5 text-[15px] font-black leading-[1.38] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Steel deck sheets remain as a permanent part of the
                    structure while working compositely with reinforced
                    concrete to create efficient floor systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-primary-red sm:text-xs sm:tracking-[0.28em]">
              <Layers3 size={15} />
              Deck Sheet Overview
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-[38px] font-black leading-[1.02] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-5xl lg:text-[56px]">
              Composite Steel Deck
              <span className="block">
                Floor Systems
              </span>
            </h2>

            {/* Intro */}

            <p className="mt-6 text-base font-medium leading-8 text-gray-600 sm:mt-7 sm:text-lg">
              Steelbuild Deck Sheets provide an efficient composite floor
              solution for commercial, industrial and multi-storey buildings.
              The profiled steel deck acts as permanent formwork during
              construction and contributes to the structural performance of the
              completed floor.
            </p>

            {/* Feature Cards */}

            <div className="mt-9 space-y-4 sm:mt-10 sm:space-y-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/20 hover:shadow-[0_24px_70px_rgba(27,63,104,0.12)] sm:rounded-[26px] sm:p-6"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[19px] font-black leading-tight tracking-[-0.025em] text-primary-blue sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-7 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Engineering Note */}

            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary-red bg-[#f7f9fc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.05)] sm:px-6">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                Deck-sheet profile, slab depth, reinforcement, supporting steel
                and connection details are finalized according to approved
                structural drawings and project requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}