"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  Layers3,
  ShieldCheck,
  SquareStack,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Layers3,
    title: "Profiled Roofing Sheets",
    description:
      "Formed metal roof panels creating the primary weather-protection surface.",
  },
  {
    number: "02",
    icon: SquareStack,
    title: "Trapezoidal Ribs",
    description:
      "Profiled ribs improving sheet stiffness, drainage and structural performance.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Self-Drilling Fasteners",
    description:
      "Engineered fasteners with sealing washers fixing roof sheets to supporting purlins.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Side-Lap Connections",
    description:
      "Overlapping sheet edges coordinated to maintain roof continuity and weather protection.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Roof Purlins",
    description:
      "Secondary structural members supporting roofing sheets across the roof span.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Insulation Assembly",
    description:
      "Thermal insulation and vapour-control layers installed beneath the roofing sheets.",
  },
  {
    number: "07",
    icon: CloudRain,
    title: "Ridge, Flashings & Drainage",
    description:
      "Ridge caps, flashings, gutters and downpipes completing the weather-protection system.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Structural Steel Support",
    description:
      "Primary rafters, columns, bracing and secondary framing supporting the complete roof assembly.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Roofing Sheets",
    text: "Primary weather-protection surface",
  },
  {
    number: "02",
    title: "Profiled Ribs",
    text: "Sheet stiffness and drainage geometry",
  },
  {
    number: "03",
    title: "Fastening System",
    text: "Self-drilling fasteners and sealing washers",
  },
  {
    number: "04",
    title: "Roof Purlins",
    text: "Secondary structural support",
  },
  {
    number: "05",
    title: "Roof Accessories",
    text: "Ridge, flashings and drainage",
  },
  {
    number: "06",
    title: "Primary Steel",
    text: "Rafters, columns and bracing",
  },
];

export default function RoofingSheetsComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Roofing Sheet Components
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-primary-blue sm:mt-7 md:text-5xl lg:text-[58px]">
            Major Structural Elements
            <span className="block">
              of a Profiled Roofing
            </span>
            <span className="block">
              Sheet System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Profiled roofing sheets, fasteners, structural supports,
            insulation, flashings and drainage components work together as one
            coordinated industrial roofing assembly.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-12 grid gap-12 sm:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-32 sm:pb-32 md:pb-28"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px]">
                  <Image
                    src="/images/products/roofing-sheets/roofing-sheets-components.jpg"
                    alt="Major structural components of an industrial roofing sheet system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-[50%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
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
                      sm:max-w-[330px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Profiled Roof Assembly
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Sheets, Fasteners & Structural Integration
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
                      Major Roofing Components
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-lg

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
                      Every Component Supports
                      <span className="block">
                        the Complete Roof Assembly
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* System Layers */}

              <div className="relative z-10 mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {systemLayers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="
                      rounded-[18px]
                      border
                      border-white/10
                      bg-white/[0.08]
                      px-4
                      py-3.5
                      backdrop-blur-sm

                      sm:rounded-[20px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-0.5 shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] font-medium leading-[1.5] text-white/60 sm:text-xs sm:leading-5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Coordination Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
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
                md:p-7
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <ShieldCheck
                    size={22}
                    className="sm:hidden"
                  />

                  <ShieldCheck
                    size={24}
                    className="hidden sm:block"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Roof System Coordination
                  </p>

                  <p className="mt-1.5 text-[16px] font-black leading-[1.35] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Roofing sheets, fasteners, purlins, insulation, flashings
                    and drainage details work together as one complete system.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Component Cards */}

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {components.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-gray-200
                    bg-white
                    p-5
                    shadow-[0_18px_55px_rgba(27,63,104,0.07)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-primary-red/25
                    hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]

                    sm:rounded-[28px]
                    sm:p-7
                  "
                >
                  {/* Number Watermark */}

                  <span className="pointer-events-none absolute right-4 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                    <Icon
                      size={22}
                      className="sm:hidden"
                    />

                    <Icon
                      size={24}
                      className="hidden sm:block"
                    />
                  </div>

                  {/* Eyebrow */}

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Roofing Component {item.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2.5 pr-5 text-xl font-black leading-[1.15] tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:leading-tight sm:tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm font-medium leading-6 text-gray-500 sm:mt-4 sm:leading-7">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="
            relative
            z-10
            mx-auto
            mt-14
            flex
            max-w-5xl
            items-start
            gap-4
            border-l-4
            border-primary-red
            bg-[#f7f9fc]
            px-5
            py-5
            shadow-[0_14px_40px_rgba(27,63,104,0.06)]

            sm:px-7
            sm:py-6

            md:mt-20
            md:px-9
          "
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:h-6 sm:w-6"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final roofing-sheet profiles, side-lap arrangements, fastener
            spacing, sealing washers, insulation systems, flashings, drainage
            layouts and structural support conditions are developed according
            to approved engineering drawings, environmental exposure and
            project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}