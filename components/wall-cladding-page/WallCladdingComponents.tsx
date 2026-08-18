"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
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
    title: "Profiled Cladding Panels",
    description:
      "Precision roll-formed metal panels creating the primary external wall surface of the building.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Wall Girts",
    description:
      "Secondary steel members supporting the cladding panels and transferring façade loads to the main structure.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Panel Joint System",
    description:
      "Engineered side-lap and end-joint arrangements maintaining alignment, weather resistance and façade continuity.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Fasteners & Sealing Washers",
    description:
      "Approved fixing systems securing cladding panels to wall girts while maintaining weather protection.",
  },
  {
    number: "05",
    icon: SquareStack,
    title: "Corner & Edge Flashings",
    description:
      "Precision-formed trims protecting external corners, wall edges and architectural transitions.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Base Flashing",
    description:
      "Lower-wall flashing protecting the cladding system from water ingress and ground-level exposure.",
  },
  {
    number: "07",
    icon: Building2,
    title: "Door & Window Flashings",
    description:
      "Engineered head, sill and jamb details maintaining weather protection around façade openings.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Insulation & Vapour Control",
    description:
      "Thermal insulation and vapour-control layers coordinated behind the cladding where required.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Cladding Panels",
    text: "Primary external wall surface",
  },
  {
    number: "02",
    title: "Panel Joints",
    text: "Continuous sealed façade connections",
  },
  {
    number: "03",
    title: "Fastening System",
    text: "Panel-to-girt structural attachment",
  },
  {
    number: "04",
    title: "Wall Girts",
    text: "Secondary façade support members",
  },
  {
    number: "05",
    title: "Flashings & Trims",
    text: "Weatherproof façade transitions",
  },
  {
    number: "06",
    title: "Primary Structure",
    text: "Steel columns and main framing",
  },
];

export default function WallCladdingComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Wall Cladding Components
          </span>

          <h2 className="mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Elements of an
            <span className="block">
              Industrial Wall Cladding System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Profiled panels, wall girts, fasteners, flashings, sealed joints
            and insulation layers work together as one coordinated industrial
            building-envelope system.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-12 grid gap-10 sm:mt-14 sm:gap-12 lg:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Blue Main Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-12 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-14 md:rounded-[38px] md:p-6 md:pb-16">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/wall-cladding/wall-cladding-components.jpg"
                    alt="Major structural components of an industrial wall cladding system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information Card */}

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
                      sm:max-w-[360px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Building Envelope
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Cladding Panels, Flashings & Structural Integration
                    </p>
                  </div>

                  {/* Bottom Image Content */}

                  <div className="absolute bottom-4 left-4 right-4 z-10 min-[390px]:bottom-5 sm:bottom-6 sm:left-5 sm:right-5 md:bottom-7">
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Major Façade Components
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[18px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[19px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Every Element Supports
                      <span className="block">
                        the Complete Building Envelope
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* System Layers */}

              <div className="relative z-10 mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3">
                {systemLayers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-3.5 backdrop-blur-sm sm:py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] font-medium leading-5 text-white/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Complete Cladding Assembly Card */}

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
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <Layers3 size={22} className="sm:hidden" />

                  <Layers3 size={24} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Cladding Assembly
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Cladding panels, wall girts, flashings, fasteners and
                    insulation integrate into one engineered façade system
                    delivering weather protection and long-term durability.
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
                  {/* Background Number */}

                  <span className="pointer-events-none absolute right-4 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={22} className="sm:hidden" />

                    <Icon size={24} className="hidden sm:block" />
                  </div>

                  {/* Label */}

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Component {item.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2.5 pr-7 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:tracking-[-0.035em]">
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

        {/* Bottom Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-3.5 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Panel profile, coating specification, fastening arrangement and
            flashing geometry are engineered together with insulation
            interfaces and wall-girt spacing according to structural loading,
            environmental conditions and approved project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}