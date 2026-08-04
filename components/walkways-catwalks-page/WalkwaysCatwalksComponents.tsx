"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
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
    icon: Grid3X3,
    title: "Steel Grating Flooring",
    description:
      "Open steel grating forms the elevated walking surface across industrial walkway and catwalk routes.",
  },
  {
    number: "02",
    icon: Frame,
    title: "Primary Support Beams",
    description:
      "Main structural members support the walkway system and transfer approved loads to the supporting frame.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Secondary Framing",
    description:
      "Intermediate beams and support members distribute loads between the grating floor and primary framing.",
  },
  {
    number: "04",
    icon: Fence,
    title: "Guardrails & Mid Rails",
    description:
      "Perimeter-protection members are coordinated along exposed walkway, platform and catwalk edges.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Toe Boards",
    description:
      "Toe-board elements can be provided along exposed edges according to the approved walkway arrangement.",
  },
  {
    number: "06",
    icon: Footprints,
    title: "Access Connections",
    description:
      "Walkways connect with staircases, platforms, mezzanines and approved industrial working areas.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Support Brackets",
    description:
      "Fabricated brackets and support interfaces connect walkway framing to the approved structural system.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Bracing & Connections",
    description:
      "Bracing members, plates and bolted connections coordinate the complete walkway structure.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Walking Surface",
    text: "Steel grating and approved floor arrangement",
  },
  {
    number: "02",
    title: "Secondary Members",
    text: "Intermediate grating-support framing",
  },
  {
    number: "03",
    title: "Primary Beams",
    text: "Main structural walkway supports",
  },
  {
    number: "04",
    title: "Support Interface",
    text: "Columns, brackets or building connections",
  },
  {
    number: "05",
    title: "Perimeter Protection",
    text: "Guardrails, mid rails and toe boards",
  },
  {
    number: "06",
    title: "Access Integration",
    text: "Staircases, platforms and route connections",
  },
];

export default function WalkwaysCatwalksComponents() {
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
            Walkway & Catwalk Components
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Major Structural Elements of an Industrial Walkway System
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Industrial walkways combine floor grating, support framing,
            structural connections, access systems and perimeter protection
            within one coordinated elevated access structure.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-16 grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Visual */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/products/mezzanine-systems/walkways-catwalks-components.jpg"
                  alt="Major structural components of an industrial walkway and catwalk system"
                  fill
                  sizes="(max-width: 1280px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Structural Walkway System
                  </p>

                  <p className="mt-1 text-sm font-black text-white">
                    Framing, Grating & Edge Protection
                  </p>
                </div>

                <div className="absolute bottom-7 left-5 right-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                    Integrated Structural Components
                  </p>

                  <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] text-white sm:text-2xl md:text-[28px]">
                    Every Member Supports the
                    <span className="block">
                      Complete Elevated Access Route
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Layered System */}

            <div className="relative z-10 mt-5 space-y-3">
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
                  className="rounded-[20px] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 text-xs font-black text-primary-red">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-sm font-black text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs font-medium leading-5 text-white/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Component Grid */}

          <div className="grid gap-5 sm:grid-cols-2">
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
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Walkway Component {item.number}
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

        {/* Closing Note */}

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
            Grating, beams, brackets, supports, access connections, guardrails,
            toe boards, bracing and structural joints are finalized according
            to approved drawings, engineering requirements and site
            conditions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}