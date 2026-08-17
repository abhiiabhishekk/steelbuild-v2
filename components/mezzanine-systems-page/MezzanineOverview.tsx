"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Columns3,
  Layers3,
  Ruler,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const planningPoints = [
  {
    number: "01",
    icon: Layers3,
    title: "Additional Floor Level",
    description:
      "An intermediate level creates usable space within the available building height.",
  },
  {
    number: "02",
    icon: Columns3,
    title: "Structural Grid Planning",
    description:
      "Column positions and beam layouts are coordinated around the intended use and available floor area.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Project-Specific Loading",
    description:
      "Structural members are developed according to approved loading, layout and service requirements.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Access & Safety Coordination",
    description:
      "Staircases, openings, handrails and movement areas are coordinated within the approved project scope.",
  },
];

const overviewPoints = [
  "Primary support columns",
  "Main and secondary beams",
  "Floor deck coordination",
  "Staircase and access planning",
];

export default function MezzanineOverview() {
  return (
    <section
      id="mezzanine-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
          {/* Left visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative pb-20 sm:pb-16 md:pb-12"
          >
            <div className="relative isolate overflow-hidden rounded-[26px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.20)] sm:rounded-[32px] sm:p-4 md:rounded-[40px] md:p-6 md:shadow-[0_38px_100px_rgba(27,63,104,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
  <Image
    src="/images/products/mezzanine-systems/mezzanine-system.jpg"
    alt="Engineered steel mezzanine system inside an industrial building"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/10 to-transparent" />

  {/* Upper level label */}

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
      min-[390px]:right-4
      min-[390px]:top-4

      sm:left-5
      sm:right-auto
      sm:top-5
      sm:max-w-[260px]
      sm:rounded-[18px]
      sm:px-5
      sm:py-4
    "
  >
    <p className="text-[8px] font-black uppercase leading-[1.4] tracking-[0.18em] text-primary-red min-[360px]:text-[9px] sm:text-[9px] sm:tracking-[0.22em]">
      Upper Level
    </p>

    <p className="mt-1 text-[13px] font-black leading-[1.25] text-white sm:text-sm">
      Additional Usable Space
    </p>
  </div>

  {/* Main image statement */}

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
      Engineered Mezzanine Structure
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
  <span className="block">Vertical Space Converted</span>
  <span className="block">Into Functional Floor Area</span>
</h3>
  </div>
</div>
              </div>
            </div>

            {/* Floating structural panel */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-3 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_24px_75px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-6 sm:-mt-7 sm:rounded-[28px] md:mx-8 md:-mt-8 md:rounded-[30px] md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
  <Warehouse size={23} className="sm:h-[26px] sm:w-[26px]" />
</div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Space Utilization
                  </p>

                  <h3 className="mt-2 text-[18px] font-black leading-[1.18] text-primary-blue min-[390px]:text-[19px] sm:text-xl md:text-2xl">
  Existing Space Retained Below the New Level
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
              <Layers3 size={15} />
              Mezzanine System Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Intermediate Floors for Better Space Utilization
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              A steel mezzanine creates an additional usable floor between the
              existing ground level and roof without requiring a completely
              separate building.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited develops mezzanine framing
              according to the approved usage, loading, clearances, structural
              grid and access requirements.
            </p>

            {/* Open planning points */}

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
                    className="group grid grid-cols-[52px_1fr_auto] items-start gap-3 border-b border-gray-200 py-5 first:border-t sm:grid-cols-[58px_1fr_auto] sm:gap-4 sm:py-6"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
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

            {/* Compact scope list */}

            <div className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {overviewPoints.map((point) => (
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
              <Boxes
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                The final mezzanine arrangement must be based on approved
                loading, use, structural connections and site conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}