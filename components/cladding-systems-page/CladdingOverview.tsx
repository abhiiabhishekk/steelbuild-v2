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
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
          {/* Left visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative pb-20 md:pb-16"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/cladding-systems/industrial-wall-cladding.jpg"
                    alt="Industrial steel building with coordinated exterior wall cladding"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Exterior Façade
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Coordinated Wall-Cladding Layout
                    </p>
                  </div>

                  <div className="absolute bottom-12 left-5 right-5 md:bottom-14">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Industrial Building Envelope
                    </p>

                    <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] text-white sm:text-2xl md:text-[28px]">
                      Wall Protection and Architectural
                      <span className="block">
                        Appearance in One System
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating panel */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="absolute -bottom-4 left-4 right-4 z-20 rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <Building2 size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Façade Coordination
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
                    Cladding Integrated With the Complete Steel Building
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <PanelsTopLeft size={15} />
              Cladding System Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Wall Cladding for Industrial Steel Buildings
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Wall cladding forms the exterior skin of a steel building and
              contributes to façade protection, architectural appearance and
              completion of the building envelope.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited coordinates cladding profiles,
              wall layouts, openings, trims and interfaces according to the
              approved structural and architectural requirements.
            </p>

            {/* Open rows */}

            <div className="mt-10 space-y-1">
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

            {/* Scope */}

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

            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary-red bg-white px-6 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <Layers3
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
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