"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Consultation",
    description:
      "Understanding structural usage, loading conditions, equipment requirements, project location, access constraints and expected timelines.",
    points: [
      "Project objectives",
      "Load requirements",
      "Site conditions",
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Structural Planning",
    description:
      "Developing the preliminary structural arrangement, framing grid, equipment zones, access systems and load-transfer strategy.",
    points: [
      "Framing layout",
      "Equipment coordination",
      "Access planning",
    ],
  },
  {
    number: "03",
    icon: Ruler,
    title: "Engineering & Detailing",
    description:
      "Performing structural analysis and preparing coordinated engineering, fabrication and erection drawings for all major steel members.",
    points: [
      "Structural analysis",
      "Connection design",
      "Detailed drawings",
    ],
  },
  {
    number: "04",
    icon: Factory,
    title: "Heavy Steel Fabrication",
    description:
      "Manufacturing built-up columns, plate girders, beams, bracing and connection components through controlled fabrication processes.",
    points: [
      "Precision cutting",
      "Controlled welding",
      "Member assembly",
    ],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Verifying material traceability, dimensions, welding quality, member alignment, surface preparation and finishing before dispatch.",
    points: [
      "Material verification",
      "Welding inspection",
      "Dimensional checks",
    ],
  },
  {
    number: "06",
    icon: Truck,
    title: "Packing & Dispatch",
    description:
      "Organizing heavy structural components according to erection sequence and coordinating safe transportation to the project site.",
    points: [
      "Erection sequencing",
      "Safe packing",
      "Logistics planning",
    ],
  },
  {
    number: "07",
    icon: Wrench,
    title: "Site Erection",
    description:
      "Executing column, girder, platform, bracing and connection installation through planned lifting, alignment and erection procedures.",
    points: [
      "Heavy lifting",
      "Structural alignment",
      "Connection installation",
    ],
  },
  {
    number: "08",
    icon: CheckCircle2,
    title: "Final Inspection & Handover",
    description:
      "Completing structural checks, closing project observations and handing over the heavy steel structure after final verification.",
    points: [
      "Final inspection",
      "Quality closure",
      "Project handover",
    ],
  },
];

const deliveryStrengths = [
  "Coordinated structural engineering",
  "Heavy-duty steel fabrication",
  "Multi-stage quality inspection",
  "Planned lifting and erection",
  "Integrated project coordination",
];

export default function HeavySteelProcess() {
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
            Project Execution
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Our End-to-End Heavy Steel Structure Delivery Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Every heavy steel structure is engineered, fabricated, inspected
            and erected through a structured execution process focused on
            coordination, precision, safety and dependable delivery.
          </p>
        </motion.div>

        {/* Process timeline */}

        <div className="relative z-10 mt-16">
          <div className="pointer-events-none absolute bottom-10 left-[31px] top-10 hidden w-[2px] bg-gradient-to-b from-primary-red via-primary-blue to-primary-red lg:block" />

          <div className="space-y-7">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative lg:pl-24"
                >
                  {/* Desktop timeline icon */}

                  <div className="absolute left-0 top-8 z-10 hidden h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#f7f9fc] bg-primary-red text-white shadow-[0_14px_34px_rgba(194,17,25,0.28)] lg:flex">
                    <Icon size={26} />
                  </div>

                  <div className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)] md:p-8">
                    <span className="pointer-events-none absolute right-6 top-4 text-[64px] font-black leading-none text-primary-blue/[0.04]">
                      {step.number}
                    </span>

                    <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      {/* Step content */}

                      <div>
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] lg:hidden">
                            <Icon size={25} />
                          </div>

                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                              Process Stage {step.number}
                            </p>

                            <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue md:text-3xl">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-gray-600">
                          {step.description}
                        </p>
                      </div>

                      {/* Step points */}

                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-4 transition-colors duration-300 group-hover:bg-white"
                          >
                            <BadgeCheck
                              size={17}
                              className="mt-0.5 shrink-0 text-primary-red"
                            />

                            <span className="text-sm font-black leading-6 text-primary-blue">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Delivery strengths */}

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
                Integrated Delivery
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                From Load Requirements to Final Structural Handover
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Steelbuild coordinates structural engineering, fabrication,
                quality, logistics and erection through one integrated
                heavy-steel project delivery system.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliveryStrengths.map((strength) => (
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

              <div className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-primary-red/25 bg-[#102f55] px-4 py-4">
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