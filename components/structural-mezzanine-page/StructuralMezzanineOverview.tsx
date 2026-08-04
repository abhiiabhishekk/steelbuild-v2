"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Columns3,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewPoints = [
  {
    number: "01",
    icon: Building2,
    title: "Optimized Space Planning",
    description:
      "Creates additional usable floor area within the available building height while supporting operational planning.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Coordinated Structural Framework",
    description:
      "Primary beams, secondary members, support columns and floor systems work together as one integrated structure.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Project-Based Engineering",
    description:
      "Final member sizes, floor systems, connections and support conditions are developed according to approved engineering inputs.",
  },
];

const structuralMembers = [
  {
    number: "01",
    icon: Layers3,
    title: "Primary Beams",
    description:
      "Main load-carrying horizontal structural members.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Secondary Beams",
    description:
      "Intermediate members supporting the floor system.",
  },
  {
    number: "03",
    icon: Columns3,
    title: "Support Columns",
    description:
      "Vertical members transferring structural loads.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Floor System",
    description:
      "Supports operational and usable floor space.",
  },
];

export default function StructuralMezzanineOverview() {
  return (
    <section
      id="structural-mezzanine-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          {/* Left image */}

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
                    src="/images/products/mezzanine-systems/structural-mezzanine-overview.jpg"
                    alt="Structural mezzanine showing steel columns, primary beams, secondary beams and intermediate floor framing"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Intermediate Floor Structure
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Coordinated Steel Framing
                    </p>
                  </div>

                  <div className="absolute bottom-12 left-5 right-5 md:bottom-14">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Structural Mezzanine System
                    </p>

                    <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] text-white sm:text-2xl md:text-[28px]">
                      Additional Floor Area Developed
                      <span className="block">
                        Within the Available Building Height
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating note */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="absolute -bottom-4 left-4 right-4 z-20 rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <Layers3 size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Structural Space Utilization
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
                    Existing Operational Space Can Remain Available Below
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
              <Building2 size={15} />
              Structural Mezzanine Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Intermediate Steel Floor Systems for Better Space Utilization
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Structural mezzanine systems create additional intermediate floor
              space inside industrial, warehouse and commercial buildings
              without expanding the overall building footprint.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              The structural arrangement is coordinated according to the
              approved project layout, intended usage, access requirements and
              engineering inputs.
            </p>

            {/* Open rows */}

            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {overviewPoints.map((item, index) => {
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
                    className="group grid gap-4 py-7 sm:grid-cols-[58px_1fr_auto] sm:items-start"
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

            {/* Engineering note */}

            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary-red bg-white px-6 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                Final framing, floor-support arrangement and connection details
                are developed according to the approved structural design,
                intended usage and site conditions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Structural member cards */}

        <div className="relative z-10 mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {structuralMembers.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
              >
                <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-black leading-tight text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
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