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
            className="relative pb-6 sm:pb-8 md:pb-10"
          >
            <div className="relative isolate overflow-hidden rounded-[26px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.20)] sm:rounded-[32px] sm:p-4 md:rounded-[40px] md:p-6 md:shadow-[0_38px_100px_rgba(27,63,104,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-2 sm:rounded-[26px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
  <Image
    src="/images/products/mezzanine-systems/structural-mezzanine-overview.jpg"
    alt="Structural mezzanine showing steel columns, primary beams, secondary beams and intermediate floor framing"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

  {/* Top label */}

  <div
    className="
      absolute
      left-3 top-3
      w-[calc(100%-24px)]
      max-w-[250px]
      rounded-[16px]
      border border-white/15
      bg-primary-blue/90
      px-4 py-3
      backdrop-blur-md

      min-[390px]:left-4
      min-[390px]:top-4

      sm:left-5
      sm:top-5
      sm:max-w-[300px]
      sm:rounded-[18px]
      sm:px-5
      sm:py-4
    "
  >
    <p className="text-[8px] font-black uppercase leading-[1.4] tracking-[0.18em] text-primary-red min-[360px]:text-[9px] sm:tracking-[0.22em]">
      Intermediate Floor Structure
    </p>

    <p className="mt-1 text-[13px] font-black leading-[1.25] text-white sm:text-sm">
      Coordinated Steel Framing
    </p>
  </div>

  {/* Bottom statement */}

  <div
    className="
      absolute
      bottom-3 left-4 right-4

      sm:bottom-5
      sm:left-5
      sm:right-5

      md:bottom-4
      lg:bottom-5
    "
  >
    <p
      className="
        text-[8px]
        font-black
        uppercase
        leading-[1.45]
        tracking-[0.17em]
        text-primary-red

        min-[360px]:text-[9px]

        sm:text-[10px]
        sm:tracking-[0.20em]
      "
    >
      Structural Mezzanine System
    </p>

    <h3
      className="
        mt-2
        max-w-full
        text-[17px]
        font-black
        leading-[1.14]
        tracking-[-0.02em]
        text-white

        min-[360px]:text-[18px]
        min-[390px]:text-[19px]

        sm:max-w-lg
        sm:text-2xl
        sm:leading-[1.12]

        md:text-[28px]
      "
    >
      <span className="block">Additional Floor Area Developed</span>
      <span className="block">Within the Available Building Height</span>
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
              className="relative z-20 mx-3 -mt-3 rounded-[24px] border border-gray-200 bg-white p-4 min-[390px]:p-5 sm:p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-6 sm:-mt-5 sm:rounded-[28px] md:mx-8 md:-mt-6 md:rounded-[30px] md:p-7"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
  <Layers3 size={23} className="sm:h-[26px] sm:w-[26px]" />
</div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Structural Space Utilization
                  </p>

                  <h3 className="mt-2 text-[16px] font-black leading-[1.2] tracking-[-0.015em] text-primary-blue min-[360px]:text-[17px] min-[390px]:text-[18px] sm:text-xl md:text-2xl">
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
                    className="group grid grid-cols-[50px_1fr_auto] items-start gap-3 py-5 sm:grid-cols-[58px_1fr_auto] sm:gap-4 sm:py-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black leading-tight text-primary-blue sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
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

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
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