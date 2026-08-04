"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  CloudRain,
  PanelsTopLeft,
  ShieldCheck,
  Sun,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const roofingHighlights = [
  {
    icon: CloudRain,
    title: "Weather Protection",
    description:
      "Roofing systems are coordinated around roof slope, sheet layout, flashing and drainage requirements.",
  },
  {
    icon: Wind,
    title: "Ventilation Coordination",
    description:
      "Ridge ventilators, turbo ventilators and openings can be planned according to approved project requirements.",
  },
  {
    icon: Sun,
    title: "Daylighting Integration",
    description:
      "Translucent roofing elements can be coordinated with the roof layout where included in the approved scope.",
  },
];

const quickHighlights = [
  {
    icon: PanelsTopLeft,
    title: "Roofing Options",
    text: "Project-specific roof-system selection",
  },
  {
    icon: CloudRain,
    title: "Drainage Planning",
    text: "Slope, gutters and water-flow coordination",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Installation",
    text: "Roofing coordinated with the steel structure",
  },
];

export default function RoofingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-primary-red/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.085] blur-3xl" />

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

          <span className="font-black text-primary-blue">
            Roofing Systems
          </span>
        </motion.div>

        {/* Main hero */}

        <div className="relative z-10 mt-12 grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <PanelsTopLeft size={16} />
              Industrial Roofing Systems
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Protect the Building.
              <span className="block">
                Complete the Structure.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild Infra Projects Limited delivers roofing systems
              coordinated around building geometry, weather protection,
              drainage, ventilation, daylighting and approved project
              requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#roofing-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Explore Roofing Systems

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
                Final roofing materials, profiles, accessories and installation
                details follow the approved project scope and technical
                requirements.
              </p>
            </div>
          </motion.div>

          {/* Right roof composition */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-7 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Roof-System Coordination
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-white">
                    Roofing Planned as Part of the Complete Building
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                  <Building2 size={27} />
                </div>
              </div>

              {/* Simplified roof profile */}

              <div className="relative mt-9 overflow-hidden rounded-[30px] border border-white/12 bg-[#102f55]/70 px-6 py-8 md:px-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="relative z-10">
                  <div className="relative mx-auto h-[190px] max-w-[460px]">
                    {/* Roof slopes */}

                    <div className="absolute left-1/2 top-7 h-[10px] w-[48%] origin-left -translate-x-[2px] -rotate-[13deg] rounded-full bg-white" />

                    <div className="absolute right-1/2 top-7 h-[10px] w-[48%] origin-right translate-x-[2px] rotate-[13deg] rounded-full bg-white" />

                    {/* Ridge */}

                    <div className="absolute left-1/2 top-[18px] h-10 w-10 -translate-x-1/2 rounded-full border-[8px] border-primary-red bg-[#102f55]" />

                    {/* Columns */}

                    <div className="absolute bottom-4 left-[12%] h-[118px] w-[9px] rounded-full bg-white/70" />

                    <div className="absolute bottom-4 right-[12%] h-[118px] w-[9px] rounded-full bg-white/70" />

                    {/* Eave line */}

                    <div className="absolute bottom-4 left-[12%] right-[12%] h-[8px] rounded-full bg-white/25" />

                    {/* Drainage indicators */}

                    <div className="absolute left-[7%] top-[76px] h-11 w-11 rounded-2xl bg-primary-red p-3 text-white">
                      <CloudRain className="h-full w-full" />
                    </div>

                    <div className="absolute right-[7%] top-[76px] h-11 w-11 rounded-2xl bg-primary-red p-3 text-white">
                      <CloudRain className="h-full w-full" />
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Coordinated Roof Geometry
                      </p>

                      <p className="mt-2 text-sm font-black text-white">
                        Ridge, slope, eaves and drainage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}

              <div className="mt-7 space-y-5">
                {roofingHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.2 + index * 0.07,
                      }}
                      className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-red">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="text-base font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium leading-6 text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom highlights */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-14 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          {quickHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group flex min-h-[122px] items-center gap-5 px-7 py-6 transition-colors duration-300 hover:bg-[#f8fafc] ${
                  index < quickHighlights.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">
                    {item.title}
                  </p>

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