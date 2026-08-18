"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CloudRain,
  Droplets,
  PanelsTopLeft,
  Ruler,
  ShieldCheck,
  Sun,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const planningPoints = [
  {
    number: "01",
    icon: Ruler,
    title: "Roof Geometry & Slope",
    description:
      "Roof slope, ridge configuration, eaves and sheet direction are coordinated with the approved building geometry.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Rainwater Drainage",
    description:
      "Water flow, gutters and downpipe locations are planned according to the approved roofing and drainage arrangement.",
  },
  {
    number: "03",
    icon: Wind,
    title: "Ventilation Coordination",
    description:
      "Ridge ventilators, turbo ventilators and roof openings can be integrated where included in the approved scope.",
  },
  {
    number: "04",
    icon: Sun,
    title: "Daylighting Integration",
    description:
      "Translucent roof elements can be coordinated with the roofing layout and operational requirements.",
  },
];

const scopePoints = [
  "Roof-sheet profile selection",
  "Ridge and flashing details",
  "Gutter coordination",
  "Roof-opening integration",
];

export default function RoofingOverview() {
  return (
    <section
      id="roofing-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative pb-24 sm:pb-24 md:pb-16"
          >
            {/* Main Blue Frame */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_38px_100px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/roofing-systems/industrial-roofing-system.jpg"
                    alt="Industrial roofing system installed on a steel building"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 54vw"
                  />

                  {/* Dark Bottom Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information Box */}

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
                      sm:max-w-[300px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Roof Envelope
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.25] text-white sm:text-sm">
                      Coordinated Roofing Layout
                    </p>
                  </div>

                  {/* Bottom Image Text */}

<div
  className="
    absolute
    bottom-3
    left-4
    right-4
    z-10

    min-[390px]:bottom-4

    sm:bottom-5
    sm:left-5
    sm:right-5

    md:bottom-4
  "
>
  <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
    Industrial Roofing System
  </p>

  <h3
    className="
      mt-1.5
      max-w-lg
      text-[18px]
      font-black
      leading-[1.12]
      tracking-[-0.02em]
      text-white

      min-[390px]:text-[19px]

      sm:mt-2
      sm:text-2xl

      md:text-[28px]
    "
  >
    Roof Geometry, Protection and Drainage
    <span className="block">
      Planned as One System
    </span>
  </h3>
</div>
                </div>
              </div>
            </div>

            {/* Floating Roofing Coordination Panel */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                absolute
                -bottom-4
                left-3
                right-3
                z-20

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:-bottom-4
                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-3
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-11
                md:left-8
                md:right-8
                md:rounded-[30px]
                md:p-7
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <CloudRain size={22} className="sm:hidden" />

                  <CloudRain size={26} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Roofing Coordination
                  </p>

                  <h3 className="mt-1.5 text-[17px] font-black leading-[1.2] tracking-[-0.015em] text-primary-blue sm:mt-2 sm:text-xl md:text-2xl">
                    Roofing Developed Around the Complete Building Structure
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
          >
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <PanelsTopLeft size={15} />
              Roofing System Overview
            </span>

            {/* Heading */}

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Roofing Systems for Industrial Steel Buildings
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Industrial roofing is more than sheet installation. Roof
              geometry, drainage, openings, ventilation and accessories must
              work together with the supporting steel structure.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited coordinates roofing systems
              according to the approved building layout, roof slope, sheet
              profile, drainage requirements and project scope.
            </p>

            {/* Planning Rows */}

            <div className="mt-10 space-y-1">
              {planningPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group grid gap-4 border-b border-gray-200 py-6 first:border-t sm:grid-cols-[58px_1fr_auto] sm:items-start"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black leading-tight text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-4xl font-black leading-none text-primary-blue/[0.05]">
                      {item.number}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            {/* Scope List */}

            <div className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {scopePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <BadgeCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-black leading-6 text-primary-blue">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Engineering Note */}

            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary-red bg-white px-6 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                Final roofing selection and detailing depend on approved
                structural, architectural, weather-protection and project-scope
                requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}