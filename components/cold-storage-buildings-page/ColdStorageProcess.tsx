"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  Factory,
  Layers3,
  Ruler,
  ShieldCheck,
  Snowflake,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Study",
    description:
      "Understanding storage usage, building dimensions, access, loading areas, project location and approved operational inputs.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Layout Coordination",
    description:
      "Planning storage zones, structural grid, circulation and openings according to the approved facility layout.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Building System Engineering",
    description:
      "Coordinating the structural frame, insulated envelope supports, openings and approved building details.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Structural Fabrication",
    description:
      "Manufacturing steel members through planned cutting, welding, drilling, surface preparation and finishing processes.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Dispatching components in sequence and installing the structural frame and approved building-envelope systems at site.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Inspection & Handover",
    description:
      "Completing building inspections, closing observations and handing over the approved building scope.",
  },
];

export default function ColdStorageProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Snowflake size={15} />
            Cold Storage Project Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            A Coordinated Building Process From Planning to Handover
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Cold-storage building delivery requires clear coordination between
            approved layouts, structural engineering, fabrication and site
            installation.
          </p>
        </motion.div>

        {/* Desktop alternating timeline */}

        <div className="relative z-10 mx-auto mt-20 hidden max-w-6xl lg:block">
          <div className="absolute bottom-10 left-1/2 top-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary-red via-primary-blue/25 to-primary-red" />

          <div className="space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="relative grid grid-cols-[1fr_110px_1fr] items-center"
                >
                  {/* Left content */}

                  <div className={isLeft ? "pr-8" : ""}>
                    {isLeft && (
                      <div className="group ml-auto max-w-md rounded-[30px] border border-gray-200 bg-white p-7 text-right shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                          Stage {step.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center icon */}

                  <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-[24px] border-[8px] border-[#f7f9fc] bg-primary-blue text-white shadow-[0_18px_50px_rgba(27,63,104,0.16)] transition-all duration-300 hover:bg-primary-red">
                    <Icon size={30} />
                  </div>

                  {/* Right content */}

                  <div className={!isLeft ? "pl-8" : ""}>
                    {!isLeft && (
                      <div className="group max-w-md rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                          Stage {step.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
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
                <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
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

        {/* Scope clarification */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#286295_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Specialist Systems Follow Approved Project Inputs
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Refrigeration, electrical, fire-safety and other specialist
                services must be coordinated according to the approved project
                design and the responsible specialist consultants.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}