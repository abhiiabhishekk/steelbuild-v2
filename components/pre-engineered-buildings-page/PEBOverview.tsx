"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  Layers3,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systemStages = [
  {
    number: "01",
    icon: Ruler,
    title: "Engineering & Design",
    description:
      "Building geometry, structural loads, functional requirements and project conditions are evaluated to develop an optimized structural system.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Primary and secondary steel members are fabricated through planned manufacturing processes with dimensional and quality checks.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Coordinated Dispatch",
    description:
      "Building components are organized, packed and dispatched according to erection sequence and project-site requirements.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Site Erection",
    description:
      "Pre-fabricated components are assembled at site through coordinated erection practices, reducing conventional construction activity.",
  },
];

const coreElements = [
  "Primary structural framing",
  "Secondary structural members",
  "Roofing and wall cladding systems",
  "Bracing and stability systems",
  "Mezzanine and platform integration",
  "Doors, ventilators and building accessories",
];

export default function PEBOverview() {
  return (
    <section
      id="peb-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Layers3 size={15} />
            Understanding PEB
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            A Complete Building System Engineered Before Construction
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            A Pre-Engineered Building is a coordinated structural system in
            which major building components are designed, fabricated and
            prepared before arriving at the project site.
          </p>
        </motion.div>

        {/* Main overview */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left panel */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
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
                <Building2 size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Integrated Structural Solution
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Designed as One Coordinated Building System
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Unlike fragmented construction methods, a PEB is developed
                through coordinated structural design, manufacturing planning,
                component integration and erection requirements.
              </p>

              <div className="mt-8 space-y-3">
                {coreElements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <p className="text-sm font-bold leading-6 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-primary-red/25 bg-primary-red/10 p-5">
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/85">
                  Every component is developed to work together as part of one
                  integrated structural solution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right process stages */}

          <div className="grid gap-5 md:grid-cols-2">
            {systemStages.map((item, index) => {
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
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.13)]"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    PEB Stage {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
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

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mt-12 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:flex-row md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                Steelbuild Approach
              </p>

              <h3 className="mt-2 text-2xl font-black text-primary-blue">
                Engineering, Manufacturing and Delivery Working Together
              </h3>

              <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-600">
                Steelbuild manages Pre-Engineered Buildings through
                coordinated technical, manufacturing and project teams,
                supporting accuracy, speed and dependable execution.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}