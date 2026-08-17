"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Footprints,
  Frame,
  Route,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewPoints = [
  {
    number: "01",
    icon: Route,
    title: "Coordinated Vertical Movement",
    description:
      "Staircase position, direction and landing levels are planned according to the approved circulation and building layout.",
  },
  {
    number: "02",
    icon: Frame,
    title: "Integrated Structural Support",
    description:
      "Stringers, landing beams, connections and support points are coordinated with the primary steel structure.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Project-Specific Access Design",
    description:
      "Stair geometry, treads, landings, handrails and guardrails are developed according to approved project requirements.",
  },
];

const staircaseFeatures = [
  {
    number: "01",
    icon: Frame,
    title: "Steel Stringers",
    description:
      "Main inclined members supporting the staircase flight.",
  },
  {
    number: "02",
    icon: Footprints,
    title: "Industrial Treads",
    description:
      "Walking surfaces coordinated with the approved staircase arrangement.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Landing Structure",
    description:
      "Intermediate and final landing support systems.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Handrails & Guardrails",
    description:
      "Edge protection along staircase flights and landings.",
  },
];

export default function IndustrialStaircasesOverview() {
  return (
    <section
      id="industrial-staircases-overview"
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
            className="relative pb-14 sm:pb-16 md:pb-16"
          >
            {/* Main Blue Frame */}

            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_38px_100px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              {/* Frame Background */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Wrapper */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[19px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/mezzanine-systems/industrial-staircases-overview.jpg"
                    alt="Industrial steel staircase with stringers, landings, handrails and structural connections inside a PEB building"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
                  />

                  {/* Dark Gradient */}

                  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-primary-blue/90 via-transparent to-transparent" />

                  {/* Top Label */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-20
                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/95
                      px-4
                      py-3
                      shadow-[0_12px_30px_rgba(0,0,0,0.12)]
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
                      Industrial Access Structure
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm">
                      Stair Flights, Landings &amp; Protection
                    </p>
                  </div>

                  {/* Bottom Image Content */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-20

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-10
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Steel Staircase
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-[270px]
                        text-[17px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.02em]
                        text-white

                        min-[390px]:max-w-[290px]
                        min-[390px]:text-[18px]

                        sm:mt-2
                        sm:max-w-lg
                        sm:text-2xl

                        md:text-[28px]
                      "
                    >
                      Vertical Access Developed Around
                      <span className="block">
                        the Approved Building Layout
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Access Planning Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                relative
                z-20
                mx-3
                -mt-3
                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4
                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:mx-5
                sm:-mt-4
                sm:rounded-[28px]
                sm:p-6

                md:mx-8
                md:rounded-[30px]
                md:p-7

                xl:absolute
                xl:-bottom-4
                xl:left-8
                xl:right-8
                xl:mx-0
                xl:mt-0
              "
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <Route size={22} className="sm:hidden" />
                  <Route size={25} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Access Planning
                  </p>

                  <h3 className="mt-1.5 text-[17px] font-black leading-[1.28] text-primary-blue sm:mt-2 sm:text-xl md:text-2xl">
                    Staircase Layout Must Support Clear and Organized Movement
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
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-5 sm:text-[11px] sm:tracking-[0.28em]">
              <Footprints size={15} />
              Industrial Staircase Overview
            </span>

            <h2 className="mt-6 text-[38px] font-black leading-[1.02] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
              Structural Steel Staircases for Industrial Access
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-gray-600 sm:text-lg">
              Industrial steel staircases provide vertical access between
              approved floor levels, mezzanines, equipment platforms and
              maintenance areas within steel buildings.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              The complete staircase arrangement is coordinated with the
              structural framing, circulation requirements, available space and
              approved project scope.
            </p>

            {/* Overview Rows */}

            <div className="mt-9 divide-y divide-gray-200 border-y border-gray-200 sm:mt-10">
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
                    className="
                      group
                      grid
                      grid-cols-[48px_1fr_auto]
                      items-start
                      gap-3
                      py-6

                      sm:grid-cols-[58px_1fr_auto]
                      sm:gap-4
                      sm:py-7
                    "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={21} className="sm:hidden" />
                      <Icon size={23} className="hidden sm:block" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[17px] font-black leading-tight text-primary-blue sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[13px] font-medium leading-6 text-gray-500 sm:text-sm sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-[30px] font-black leading-none text-primary-blue/[0.05] sm:text-4xl">
                      {item.number}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            {/* Engineering Note */}

            <div className="mt-8 flex items-start gap-3 border-l-4 border-primary-red bg-white px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:gap-4 sm:px-6">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-primary-red sm:h-[23px] sm:w-[23px]"
              />

              <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
                Final staircase dimensions, step arrangement, structural
                supports, connections and protection elements are developed
                according to approved drawings and project requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}

        <div className="relative z-10 mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-6 xl:mt-20 xl:grid-cols-4">
          {staircaseFeatures.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
              >
                <span className="pointer-events-none absolute right-5 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:text-[48px]">
                  {item.number}
                </span>

                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-black leading-tight text-primary-blue sm:mt-6 sm:text-xl">
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