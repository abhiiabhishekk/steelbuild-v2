"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Columns3,
  Factory,
  Frame,
  Layers3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const structuralSystems = [
  {
    number: "01",
    icon: Columns3,
    title: "Heavy Steel Columns",
    description:
      "Built-up or rolled steel columns engineered to transfer substantial vertical, lateral and equipment-related loads to the foundation system.",
  },
  {
    number: "02",
    icon: Frame,
    title: "Plate Girders & Main Beams",
    description:
      "Deep structural beams and fabricated plate girders designed for large spans, heavy loads and demanding industrial configurations.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Industrial Platforms",
    description:
      "Heavy-duty elevated platforms developed for machinery, process equipment, maintenance access and operational requirements.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Equipment Support Structures",
    description:
      "Dedicated structural framing engineered around equipment loads, vibration considerations, access and service requirements.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Bracing & Stability Systems",
    description:
      "Vertical, horizontal and roof bracing systems coordinated to provide structural stability under wind and operational forces.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Engineered Connections",
    description:
      "Bolted and welded connection systems developed according to member forces, erection requirements and fabrication feasibility.",
  },
];

const systemComponents = [
  "Heavy built-up steel columns",
  "Deep plate girders",
  "Main structural beams",
  "Secondary support beams",
  "Equipment support frames",
  "Industrial working platforms",
  "Maintenance access structures",
  "Heavy-duty staircases",
  "Vertical bracing systems",
  "Horizontal bracing systems",
  "Base plates and stiffeners",
  "Anchor bolt assemblies",
  "Bolted structural connections",
  "Welded structural connections",
];

export default function HeavySteelSystems() {
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
            <Building2 size={15} />
            Structural Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Integrated Systems for Heavy Structural Steel Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Heavy steel structures combine high-capacity columns, deep beams,
            equipment-support framing, industrial platforms, bracing and
            engineered connections into one coordinated structural system.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left system panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_32px_90px_rgba(27,63,104,0.2)] md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.26)]">
                <Factory size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Complete Heavy Steel Framework
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Designed as One Coordinated Load-Bearing System
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Every structural member is coordinated according to loading,
                span, equipment layout, access, stability, fabrication and
                erection requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {systemComponents.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[64px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-primary-red/25 bg-[#102f55] p-5">
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Structural framing, connection details and stability systems
                  are coordinated according to project-specific load and
                  execution requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {structuralSystems.map((item, index) => {
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
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Structural Element {item.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
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
      </Container>
    </section>
  );
}