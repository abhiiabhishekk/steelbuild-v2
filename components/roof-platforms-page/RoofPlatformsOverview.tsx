"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewPoints = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Equipment Support",
    description:
      "Structural framing is coordinated to support approved rooftop equipment and associated service requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Safe Maintenance Access",
    description:
      "Platforms provide organized access routes for inspection, servicing and routine maintenance activities.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Project-Based Engineering",
    description:
      "Platform framing, connections, support arrangements and access systems are developed according to approved engineering inputs.",
  },
];

const platformFeatures = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Equipment Support",
    description:
      "Steel framing developed around rooftop equipment requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance Walkways",
    description:
      "Safe movement around rooftop service equipment.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Structural Support",
    description:
      "Columns, beams and connections working together.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Guardrails & Safety",
    description:
      "Perimeter protection coordinated with platform layout.",
  },
];

export default function RoofPlatformsOverview() {
  return (
    <section
      id="roof-platforms-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-12 sm:py-16 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-8 sm:gap-10 lg:gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative xl:pb-16"
          >
            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_38px_100px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/mezzanine-systems/roof-platforms-overview.jpg"
                    alt="Structural roof platform with rooftop equipment support and maintenance walkway"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  {/* Top Label */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
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
                      sm:max-w-[280px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Roof Platform System
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.25] text-white sm:text-sm">
                      Structural Equipment Support
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4

                      sm:bottom-5
                      sm:left-5
                      sm:right-5

                      md:bottom-6
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Roof Platform
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[17px] font-black leading-[1.12] tracking-[-0.02em] text-white min-[390px]:text-[18px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Safe Rooftop Access
                      <span className="block">
                        Built Around Structural Engineering
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Note */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55, delay: 0.18 }}
  className="
    relative
z-20
mx-3
-mt-2
    rounded-[24px]
    border
    border-gray-200
    bg-white
    p-4
    shadow-[0_24px_75px_rgba(27,63,104,0.14)]

    min-[390px]:mx-4
    min-[390px]:p-5

    sm:mt-1
    sm:rounded-[28px]
    sm:p-6

    md:mx-8
    md:rounded-[30px]
    md:p-7

    xl:absolute
    xl:-bottom-5
    xl:left-8
    xl:right-8
    xl:mx-0
    xl:mt-0
  "
>
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
      <Building2 size={22} className="sm:hidden" />
      <Building2 size={25} className="hidden sm:block" />
    </div>

    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
        Engineering Objective
      </p>

      <h3 className="mt-2 text-[17px] font-black leading-[1.2] text-primary-blue min-[390px]:text-[18px] sm:text-xl">
        Designed Around Rooftop Equipment and Safe Access
      </h3>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="pt-4 sm:pt-6 xl:pt-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.28em]">
              <Building2 size={15} />
              Roof Platform Overview
            </span>

            <h2 className="mt-6 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
              Engineered Rooftop Platforms for Safe Equipment Access
            </h2>

            <p className="mt-5 text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Structural roof platforms provide elevated steel working areas
              for supporting rooftop equipment, inspection activities and
              maintenance access.
            </p>

            <p className="mt-4 text-sm font-medium leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
              Every platform is engineered according to the approved equipment
              layout, structural requirements and project conditions.
            </p>

            <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 sm:mt-10">
              {overviewPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group grid grid-cols-[48px_1fr_auto] gap-3 py-5 sm:grid-cols-[58px_1fr_auto] sm:gap-4 sm:py-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={21} className="sm:hidden" />
                      <Icon size={23} className="hidden sm:block" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-black leading-tight text-primary-blue sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-500 sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-3xl font-black leading-none text-primary-blue/[0.05] sm:text-4xl">
                      {item.number}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 border-l-4 border-primary-red bg-white px-4 py-4 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-8 sm:gap-4 sm:px-6 sm:py-5">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-6 text-primary-blue sm:leading-7">
                Final framing, platform layout, equipment support, access
                systems and perimeter protection are coordinated according to
                approved engineering requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}

        <div className="relative z-10 mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-6 xl:mt-20 xl:grid-cols-4">
          {platformFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group overflow-hidden rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={22} className="sm:hidden" />
                  <Icon size={24} className="hidden sm:block" />
                </div>

                <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                  Feature {item.number}
                </p>

                <h3 className="mt-3 text-lg font-black leading-tight text-primary-blue sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-500 sm:leading-7">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}