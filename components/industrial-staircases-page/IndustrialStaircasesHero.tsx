"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Footprints,
  Frame,
  Route,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const staircaseHighlights = [
  {
    icon: Footprints,
    title: "Vertical Access",
    text: "Planned movement between approved industrial floor levels",
  },
  {
    icon: Frame,
    title: "Structural Integration",
    text: "Stair framing coordinated with the supporting steel structure",
  },
  {
    icon: ShieldCheck,
    title: "Edge Protection",
    text: "Handrails, guardrails and landings included within the approved scope",
  },
];

const staircaseElements = [
  {
    number: "01",
    title: "Steel Stringers",
    text: "Main inclined structural staircase members",
  },
  {
    number: "02",
    title: "Treads & Risers",
    text: "Coordinated walking surface and step arrangement",
  },
  {
    number: "03",
    title: "Intermediate Landings",
    text: "Resting and directional transition areas",
  },
  {
    number: "04",
    title: "Handrails & Guardrails",
    text: "Perimeter protection along stairs and landings",
  },
];

export default function IndustrialStaircasesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-12 h-[440px] w-[440px] rounded-full bg-primary-red/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-primary-blue/[0.08] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/products"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Products
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/products/mezzanine-systems"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Mezzanine Systems
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">
            Industrial Staircases
          </span>
        </motion.div>

        {/* Main Hero */}

        <div className="relative z-10 mt-12 grid gap-14 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Footprints size={16} />
              Industrial Steel Staircases
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Engineered Access.
              <span className="block">Reliable Movement.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild Infra Projects Limited develops structural steel
              staircases for industrial buildings, mezzanine levels, equipment
              platforms and maintenance areas according to approved layouts,
              access requirements and engineering inputs.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#industrial-staircases-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Explore Industrial Staircases

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.07)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.22)]">
                <BadgeCheck size={21} />
              </div>

              <p className="pt-0.5 text-sm font-bold leading-7 text-gray-600">
                Final staircase geometry, stringers, treads, landings,
                connections and protection systems are developed according to
                approved drawings and project requirements.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative pb-16 sm:pb-20 xl:pb-24"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_38px_100px_rgba(27,63,104,0.23)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              {/* Blue Gradient Frame */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[19px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/mezzanine-systems/industrial-staircases.jpg"
                    alt="Industrial structural steel staircase with landings, handrails and guardrails inside a PEB building"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-primary-blue/90 via-primary-blue/5 to-transparent" />

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
                      bg-[#234f7e]/95
                      px-4
                      py-3
                      shadow-[0_12px_30px_rgba(0,0,0,0.14)]
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[310px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="relative z-10 text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Access System
                    </p>

                    <p className="relative z-10 mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm">
                      Staircase, Landings &amp; Edge Protection
                    </p>
                  </div>

                  {/* Bottom Image Heading */}

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

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Steel Staircase
                    </p>

                    <h2
                      className="
                        mt-1.5
                        max-w-[260px]
                        text-[17px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.02em]
                        text-white

                        min-[390px]:max-w-[285px]
                        min-[390px]:text-[18px]

                        sm:mt-2
                        sm:max-w-lg
                        sm:text-2xl

                        md:text-[30px]
                      "
                    >
                      Vertical Access Coordinated With
                      <span className="block">
                        the Complete Steel Structure
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Staircase Elements */}

              <div className="relative z-10 mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                {staircaseElements.map((item) => (
                  <div
                    key={item.number}
                    className="
                      min-h-[94px]
                      rounded-[18px]
                      border
                      border-white/10
                      bg-white/[0.08]
                      px-4
                      py-4
                      backdrop-blur-sm

                      sm:min-h-[104px]
                      sm:rounded-[20px]
                      sm:px-5
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 pr-2 text-[10px] font-medium leading-[1.5] text-white/60 sm:pr-3 sm:text-[11px] sm:leading-[1.45]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Coordination Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
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
                shadow-[0_20px_60px_rgba(27,63,104,0.13)]

                min-[390px]:mx-4

                sm:mx-5
                sm:-mt-4
                sm:rounded-[28px]
                sm:p-5

                xl:absolute
                xl:-bottom-6
                xl:left-9
                xl:right-9
                xl:mx-0
                xl:mt-0
                xl:p-6
              "
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <Route size={23} className="sm:hidden" />
                  <Route size={25} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Access Coordination
                  </p>

                  <p className="mt-1.5 text-[15px] font-black leading-[1.45] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Staircase position, direction and landing levels must align
                    with the approved building and movement layout.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Highlights */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] sm:mt-16 sm:rounded-[30px] md:grid-cols-3"
        >
          {staircaseHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group flex min-h-[112px] items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#f8fafc] sm:min-h-[122px] sm:gap-5 sm:px-7 sm:py-6 ${
                  index < staircaseHighlights.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-[52px] sm:w-[52px]">
                  <Icon size={23} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">{item.title}</p>

                  <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}