"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Factory,
  Frame,
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
    title: "Requirement Assessment",
    description:
      "Reviewing rooftop equipment, service clearances, access needs, platform location and available support conditions.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Platform Layout Planning",
    description:
      "Coordinating platform dimensions, equipment positions, maintenance zones, walkways and access points.",
  },
  {
    number: "03",
    icon: Frame,
    title: "Structural Engineering",
    description:
      "Developing columns, beams, bracing, support interfaces and structural connections according to approved inputs.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Manufacturing structural members, grating, guardrails and access elements through planned fabrication processes.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Delivering platform components in sequence and installing the framing, access and perimeter-protection systems.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Inspection & Handover",
    description:
      "Reviewing alignment, connections, access provisions and the approved installation scope before handover.",
  },
];

export default function RoofPlatformsProcess() {
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
            <Wrench size={15} />
            Roof Platform Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Rooftop Planning to Final Platform Handover
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Roof-platform delivery combines equipment coordination, structural
            engineering, fabrication and site installation within one planned
            project workflow.
          </p>
        </motion.div>

        {/* Desktop process */}

        <div className="relative z-10 mt-20 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-[44px] h-[2px] bg-gradient-to-r from-primary-red via-primary-blue/30 to-primary-red" />

          <div className="grid grid-cols-6 gap-5">
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
                    delay: index * 0.07,
                  }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-[26px] border-[8px] border-[#f7f9fc] bg-primary-blue text-white shadow-[0_18px_50px_rgba(27,63,104,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red">
                    <Icon size={31} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Stage {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-[36px] z-20 text-primary-red"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Tablet and mobile */}

        <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2 lg:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_26px_70px_rgba(27,63,104,0.13)]"
              >
                <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {step.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue text-white transition-colors duration-300 group-hover:bg-primary-red">
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
              </motion.article>
            );
          })}
        </div>

        {/* Closing note */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Approved Equipment and Structural Inputs Guide Every Stage
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Final platform dimensions, member sizes, support interfaces,
                access systems and perimeter-protection details are developed
                according to approved drawings, equipment requirements and site
                conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}