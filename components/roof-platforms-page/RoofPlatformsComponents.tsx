"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Columns3,
  Fence,
  Footprints,
  Frame,
  Grid3X3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Columns3,
    title: "Support Columns",
    description:
      "Vertical members transferring approved platform and equipment loads to the supporting structural system.",
  },
  {
    number: "02",
    icon: Frame,
    title: "Primary Beams",
    description:
      "Main horizontal members supporting the platform framing and transferring loads to the support columns.",
  },
  {
    number: "03",
    icon: Frame,
    title: "Secondary Beams",
    description:
      "Intermediate members supporting the platform floor and distributing approved loads to the primary framing.",
  },
  {
    number: "04",
    icon: Grid3X3,
    title: "Steel Grating Floor",
    description:
      "Open steel flooring providing a practical working surface for equipment access and maintenance activities.",
  },
  {
    number: "05",
    icon: Footprints,
    title: "Staircase & Ladder Access",
    description:
      "Access systems coordinated with platform elevation, available space and approved maintenance requirements.",
  },
  {
    number: "06",
    icon: Fence,
    title: "Guardrails & Toe Boards",
    description:
      "Perimeter-protection elements incorporated around exposed edges, walkways and access points.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Equipment Supports",
    description:
      "Structural supports and mounting arrangements developed around approved rooftop equipment positions.",
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Bracing & Connections",
    description:
      "Bracing, bolted joints and structural connections coordinated to maintain platform stability.",
  },
];

const structuralSequence = [
  {
    number: "01",
    title: "Equipment Zone",
    text: "Approved rooftop equipment arrangement",
  },
  {
    number: "02",
    title: "Platform Floor",
    text: "Working and maintenance surface",
  },
  {
    number: "03",
    title: "Secondary Framing",
    text: "Intermediate floor support",
  },
  {
    number: "04",
    title: "Primary Framing",
    text: "Main structural support members",
  },
  {
    number: "05",
    title: "Support Columns",
    text: "Vertical load-transfer system",
  },
  {
    number: "06",
    title: "Support Interface",
    text: "Connection with approved structure",
  },
];

export default function RoofPlatformsComponents() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Frame size={15} />
            Roof Platform Components
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Structural Components Working as One Roof Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Roof platforms combine structural framing, floor systems, equipment
            supports, access and perimeter protection within one coordinated
            rooftop arrangement.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          {/* Left structural sequence */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Grid3X3 size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Structural Arrangement
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                From Equipment Zone to Supporting Structure
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Each platform layer performs a defined function and transfers
                approved loads through the structural framing to the supporting
                building system.
              </p>

              <div className="mt-9 space-y-3">
                {structuralSequence.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                  >
                    <div
                      className={`flex min-h-[70px] items-center justify-between gap-5 rounded-2xl border px-5 py-4 ${
                        index === 0
                          ? "border-white/20 bg-white text-primary-blue"
                          : "border-white/10 bg-white/[0.08] text-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="pt-0.5 text-xs font-black text-primary-red">
                          {item.number}
                        </span>

                        <div>
                          <p className="text-sm font-black">
                            {item.title}
                          </p>

                          <p
                            className={`mt-1 text-xs font-medium leading-5 ${
                              index === 0
                                ? "text-gray-500"
                                : "text-white/55"
                            }`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`h-2 shrink-0 rounded-full ${
                          index === 0
                            ? "w-20 bg-primary-red"
                            : index === 1
                              ? "w-16 bg-white/35"
                              : index === 2
                                ? "w-14 bg-white/30"
                                : index === 3
                                  ? "w-12 bg-white/25"
                                  : index === 4
                                    ? "w-10 bg-white/20"
                                    : "w-8 bg-white/15"
                        }`}
                      />
                    </div>

                    {index < structuralSequence.length - 1 && (
                      <div className="mx-auto h-3 w-[2px] bg-primary-red/65" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <ShieldCheck
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Platform framing and support interfaces are finalized
                  according to approved structural design and equipment inputs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right component rows */}

          <div className="grid gap-x-8 md:grid-cols-2">
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
                  className="group border-b border-gray-200 py-7 first:border-t md:first:border-t md:[&:nth-child(2)]:border-t"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <span className="text-[46px] font-black leading-none text-primary-blue/[0.05]">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Platform Component {item.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-white px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
        >
          <BadgeCheck
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Floor grating, equipment supports, structural connections,
            staircases, ladders and perimeter-protection elements are finalized
            according to approved drawings, equipment requirements and site
            conditions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}