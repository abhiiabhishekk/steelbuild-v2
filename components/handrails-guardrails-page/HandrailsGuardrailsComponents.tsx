"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Fence,
  Frame,
  Minus,
  ShieldCheck,
  Square,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Fence,
    title: "Top Rails",
    description:
      "Continuous upper members forming the primary handrail and edge-protection line.",
  },
  {
    number: "02",
    icon: Minus,
    title: "Mid Rails",
    description:
      "Intermediate horizontal members positioned between the top rail and floor level.",
  },
  {
    number: "03",
    icon: Frame,
    title: "Vertical Posts",
    description:
      "Structural posts supporting the rail system and transferring forces to the supporting structure.",
  },
  {
    number: "04",
    icon: Square,
    title: "Toe Boards",
    description:
      "Lower edge members incorporated along approved exposed platform and walkway edges.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Base Plates",
    description:
      "Fabricated steel plates connecting railing posts to platforms, beams or structural supports.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Connection Details",
    description:
      "Bolted or welded joints coordinating posts, rails, brackets and supporting steelwork.",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Access Gates",
    description:
      "Controlled openings integrated into railing systems where access is required.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Corner & End Details",
    description:
      "End returns, corners and transitions coordinated with the complete railing layout.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Top Protection Line",
    text: "Continuous upper rail arrangement",
  },
  {
    number: "02",
    title: "Intermediate Protection",
    text: "Mid-rail members between posts",
  },
  {
    number: "03",
    title: "Vertical Support",
    text: "Posts transferring loads to the structure",
  },
  {
    number: "04",
    title: "Lower Edge Protection",
    text: "Toe boards where included in scope",
  },
  {
    number: "05",
    title: "Structural Interface",
    text: "Base plates, brackets and support details",
  },
  {
    number: "06",
    title: "Access Integration",
    text: "Gates, openings, corners and transitions",
  },
];

export default function HandrailsGuardrailsComponents() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Fence size={14} className="shrink-0 sm:size-[15px]" />
            Handrail & Guardrail Components
          </span>

          <h2 className="mx-auto mt-5 max-w-[340px] text-[34px] font-black leading-[1.03] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:max-w-none sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Structural Elements of a Railing System
          </h2>

          <p className="mx-auto mt-5 max-w-[340px] text-[15px] font-medium leading-7 text-gray-600 sm:mt-6 sm:max-w-3xl sm:text-lg sm:leading-8">
            Industrial railing systems combine rails, posts, toe boards,
            connections, support interfaces and access openings into one
            coordinated edge-protection arrangement.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-10 grid gap-10 sm:mt-14 sm:gap-12 lg:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Visual */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.19)] sm:rounded-[34px] sm:p-4 md:rounded-[38px] md:p-6 md:shadow-[0_34px_95px_rgba(27,63,104,0.22)]"
          >
            {/* Blue Gradient */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            {/* Grid */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            {/* Glow */}

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            {/* Image Frame */}

            <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:rounded-[24px]">
                <Image
                  src="/images/products/mezzanine-systems/handrails-guardrails-components.jpg"
                  alt="Major structural components of industrial handrails and guardrails"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/5 to-transparent" />

                {/* Top Information */}

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
                    sm:max-w-[320px]
                    sm:rounded-[18px]
                    sm:px-5
                    sm:py-4
                  "
                >
                  <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                    Industrial Railing System
                  </p>

                  <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm">
                    Rails, Posts & Structural Connections
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
                  <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.14em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                    Integrated Protection Components
                  </p>

                  <h3 className="mt-1.5 max-w-lg text-[19px] font-black leading-[1.1] tracking-[-0.025em] text-white min-[390px]:text-[20px] sm:mt-2 sm:text-2xl md:text-[28px]">
                    Every Member Supports the
                    <span className="block">
                      Complete Edge-Protection System
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* System Layers */}

            <div className="relative z-10 mt-3 space-y-2 sm:mt-4 sm:space-y-3 md:mt-5">
              {systemLayers.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="rounded-[17px] border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm sm:rounded-[20px] sm:px-5 sm:py-4"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="mt-0.5 shrink-0 text-[10px] font-black text-primary-red sm:text-xs">
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium leading-4 text-white/55 sm:mt-1 sm:text-xs sm:leading-5">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Component Grid */}

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
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                >
                  {/* Large Number */}

                  <span className="pointer-events-none absolute right-4 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon size={21} className="sm:hidden" />
                    <Icon size={24} className="hidden sm:block" />
                  </div>

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Railing Component {item.number}
                  </p>

                  <h3 className="mt-2 text-[21px] font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] font-medium leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-10 flex max-w-5xl items-start gap-3 border-l-4 border-primary-red bg-white px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-14 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Top rails, mid rails, posts, toe boards, base plates, gates,
            corners and connection details are finalized according to approved
            drawings, engineering requirements and site conditions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}