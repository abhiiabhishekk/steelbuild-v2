"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  PanelsTopLeft,
  Ruler,
  ShieldCheck,
  SquareStack,
} from "lucide-react";

import Container from "@/components/layout/Container";

const coordinationPoints = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Wall Profile Selection",
    description:
      "Cladding profiles are selected according to building use, architectural intent and approved project requirements.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Façade Layout Coordination",
    description:
      "Sheet orientation, wall dimensions, panel joints and elevation layouts are coordinated with the steel structure.",
  },
  {
    number: "03",
    icon: SquareStack,
    title: "Openings & Edge Details",
    description:
      "Doors, windows, corners, parapets and wall openings are coordinated with suitable trims and flashing details.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Building Envelope Integration",
    description:
      "Wall cladding, roofing interfaces and structural supports are planned as part of one coordinated building envelope.",
  },
];

const scopePoints = [
  "Wall-sheet profile",
  "Panel orientation",
  "Corner and edge trims",
  "Opening coordination",
];

export default function CladdingOverview() {
  return (
    <section
      id="cladding-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-32"
    >
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-12 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-12 shadow-[0_38px_100px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-14 md:rounded-[40px] md:p-6 md:pb-16">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/cladding-systems/industrial-wall-cladding.jpg"
                    alt="Industrial steel building with coordinated exterior wall cladding"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
                    className="object-cover object-[48%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

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
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Exterior Façade
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Coordinated Wall-Cladding Layout
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-4
                      right-4
                      z-10

                      sm:bottom-7
                      sm:left-5
                      sm:right-5

                      md:bottom-10
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Industrial Building Envelope
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-lg

                        text-[18px]
                        font-black
                        leading-[1.13]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[28px]
                      "
                    >
                      Wall Protection and Architectural
                      <span className="block">
                        Appearance in One System
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Façade Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                relative
                z-20

                -mt-8
                mx-3

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:-mt-9
                sm:mx-5
                sm:rounded-[28px]
                sm:p-6

                md:-mt-10
                md:mx-8
                md:rounded-[30px]
                md:p-7
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <Building2 size={22} className="sm:hidden" />

                  <Building2 size={26} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Façade Coordination
                  </p>

                  <h3 className="mt-1.5 text-[18px] font-black leading-[1.3] tracking-[-0.02em] text-primary-blue sm:mt-2 sm:text-xl md:text-2xl">
                    Cladding Integrated With the Complete Steel Building
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

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:text-[11px] sm:tracking-[0.28em]">
              <PanelsTopLeft size={15} />
              Cladding System Overview
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
              Engineered Wall Cladding for Industrial Steel Buildings
            </h2>

            {/* Description */}

            <p className="mt-5 text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Wall cladding forms the exterior skin of a steel building and
              contributes to façade protection, architectural appearance and
              completion of the building envelope.
            </p>

            <p className="mt-4 text-sm font-medium leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
              Steelbuild Infra Projects Limited coordinates cladding profiles,
              wall layouts, openings, trims and interfaces according to the
              approved structural and architectural requirements.
            </p>

            {/* Coordination Rows */}

            <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 sm:mt-10">
              {coordinationPoints.map((item, index) => {
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
                    className="
                      group
                      relative
                      grid
                      gap-4
                      py-5

                      sm:grid-cols-[58px_1fr_auto]
                      sm:items-start
                      sm:py-6
                    "
                  >
                    {/* Icon */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={21} className="sm:hidden" />

                      <Icon size={23} className="hidden sm:block" />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">
                      <h3 className="pr-10 text-[19px] font-black leading-tight tracking-[-0.025em] text-primary-blue sm:pr-0 sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-500 sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    {/* Number */}

                    <span className="absolute right-1 top-5 text-[34px] font-black leading-none text-primary-blue/[0.05] sm:relative sm:right-auto sm:top-auto sm:text-4xl">
                      {item.number}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            {/* Scope */}

            <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-x-5">
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

            <div className="mt-7 flex items-start gap-3.5 border-l-4 border-primary-red bg-white px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-8 sm:gap-4 sm:px-6">
              <Layers3
                size={21}
                className="mt-0.5 shrink-0 text-primary-red sm:hidden"
              />

              <Layers3
                size={23}
                className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                Final cladding profiles, trims, fasteners and installation
                details are determined according to approved drawings,
                manufacturer requirements and site conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}