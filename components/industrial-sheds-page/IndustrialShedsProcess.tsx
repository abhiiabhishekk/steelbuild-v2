"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Factory,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Study",
    description:
      "Understanding building usage, production flow, storage needs, access, clear height, equipment and project timeline.",
    points: [
      "Operational requirements",
      "Site information",
      "Future expansion",
    ],
  },
  {
    number: "02",
    icon: Ruler,
    title: "Layout Planning",
    description:
      "Developing the building footprint, bay spacing, clear-span arrangement, column grid and movement planning.",
    points: [
      "Building dimensions",
      "Column spacing",
      "Access layout",
    ],
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Structural Engineering",
    description:
      "Designing primary frames, secondary members, bracing, connections and building-envelope support systems.",
    points: [
      "Structural analysis",
      "Member design",
      "Connection planning",
    ],
  },
  {
    number: "04",
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Manufacturing columns, rafters, purlins, girts and accessories through planned production processes.",
    points: [
      "Precision cutting",
      "Controlled welding",
      "Component marking",
    ],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Verification",
    description:
      "Inspecting materials, dimensions, fabrication, welding, surface preparation and finishing before dispatch.",
    points: [
      "Material checks",
      "Dimensional inspection",
      "Fabrication quality",
    ],
  },
  {
    number: "06",
    icon: Truck,
    title: "Dispatch Planning",
    description:
      "Packing and dispatching structural components according to site priorities and the planned erection sequence.",
    points: [
      "Safe packing",
      "Dispatch sequence",
      "Site coordination",
    ],
  },
  {
    number: "07",
    icon: Wrench,
    title: "Site Erection",
    description:
      "Installing structural frames, bracing, roofing, cladding, ventilation and access elements at the project site.",
    points: [
      "Frame erection",
      "Envelope installation",
      "Safety coordination",
    ],
  },
  {
    number: "08",
    icon: CheckCircle2,
    title: "Final Handover",
    description:
      "Completing inspections, closing observations and handing over the industrial shed after final verification.",
    points: [
      "Final inspection",
      "Quality closure",
      "Project handover",
    ],
  },
];

const processStrengths = [
  "Operationally aligned planning",
  "Coordinated structural engineering",
  "Controlled factory fabrication",
  "Sequence-based dispatch",
  "Safety-focused site erection",
  "Structured project handover",
];

export default function IndustrialShedsProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
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
            <ClipboardList size={15} />
            Project Delivery Flow
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Operational Planning to Final Industrial Shed Handover
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Every industrial shed moves through a coordinated sequence
            connecting planning, engineering, manufacturing, logistics and
            site execution.
          </p>
        </motion.div>

        {/* Horizontal desktop flow */}

        <div className="relative z-10 mt-16">
          <div className="hidden xl:block">
            <div className="grid grid-cols-4 gap-5">
              {processSteps.slice(0, 4).map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group relative"
                  >
                    {index < 3 && (
                      <div className="pointer-events-none absolute -right-4 top-[34px] z-20 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#f7f9fc] bg-primary-blue text-white">
                        <ArrowRight size={15} />
                      </div>
                    )}

                    <div className="relative h-full overflow-hidden rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary-red/25 group-hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)]">
                      <span className="pointer-events-none absolute right-4 top-3 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                        {step.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                        <Icon size={25} />
                      </div>

                      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Stage {step.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                        {step.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5"
                          >
                            <BadgeCheck
                              size={16}
                              className="mt-0.5 shrink-0 text-primary-red"
                            />

                            <span className="text-xs font-black leading-5 text-primary-blue">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="my-7 flex justify-center">
              <div className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full border-4 border-[#f7f9fc] bg-primary-red text-white shadow-[0_14px_34px_rgba(194,17,25,0.24)]">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {[...processSteps.slice(4)].reverse().map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group relative"
                  >
                    {index < 3 && (
                      <div className="pointer-events-none absolute -right-4 top-[34px] z-20 flex h-8 w-8 rotate-180 items-center justify-center rounded-full border-4 border-[#f7f9fc] bg-primary-blue text-white">
                        <ArrowRight size={15} />
                      </div>
                    )}

                    <div className="relative h-full overflow-hidden rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary-red/25 group-hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)]">
                      <span className="pointer-events-none absolute right-4 top-3 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                        {step.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                        <Icon size={25} />
                      </div>

                      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Stage {step.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                        {step.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5"
                          >
                            <BadgeCheck
                              size={16}
                              className="mt-0.5 shrink-0 text-primary-red"
                            />

                            <span className="text-xs font-black leading-5 text-primary-blue">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Tablet and mobile flow */}

          <div className="grid gap-5 md:grid-cols-2 xl:hidden">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                    {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                    <Icon size={25} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Process Stage {step.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {step.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex min-h-[60px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5"
                      >
                        <BadgeCheck
                          size={16}
                          className="mt-0.5 shrink-0 text-primary-red"
                        />

                        <span className="text-xs font-black leading-5 text-primary-blue">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Integrated process panel */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-16 isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <PackageCheck size={29} />
              </div>

              <p className="mt-7 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Integrated Shed Delivery
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                One Coordinated Flow From Layout Planning to Handover
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Steelbuild connects design decisions, production planning,
                quality verification, dispatch and erection through one
                structured project-delivery workflow.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {processStrengths.map((strength) => (
                <div
                  key={strength}
                  className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                >
                  <BadgeCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-black leading-6 text-white/80">
                    {strength}
                  </span>
                </div>
              ))}

              <div className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-primary-red/25 bg-[#102f55] px-4 py-4 sm:col-span-2">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <span className="text-sm font-black leading-6 text-white/85">
                  Driven by Commitment and Quality
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}