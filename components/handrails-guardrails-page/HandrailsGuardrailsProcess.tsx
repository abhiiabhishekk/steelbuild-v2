"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Blocks,
  ClipboardCheck,
  Factory,
  Map,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Requirement Review",
    description:
      "Reviewing elevated areas, exposed edges, access routes, platform layouts and approved project requirements.",
  },
  {
    number: "02",
    icon: Map,
    title: "Railing Layout Planning",
    description:
      "Planning railing continuity around platforms, stair openings, walkways, gates, corners and access transitions.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Engineering Development",
    description:
      "Developing rail heights, post spacing, member arrangement and structural support details from approved inputs.",
  },
  {
    number: "04",
    icon: Blocks,
    title: "Detailed Steel Modelling",
    description:
      "Preparing coordinated fabrication details for top rails, mid rails, posts, toe boards, gates and connections.",
  },
  {
    number: "05",
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Manufacturing railing members, posts, brackets, base plates and connection elements through planned fabrication processes.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Surface Preparation",
    description:
      "Preparing steel surfaces and applying the approved protective coating or finishing system.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Installation & Alignment",
    description:
      "Installing posts, rails, toe boards, gates and structural connections according to approved drawings.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Inspection & Completion",
    description:
      "Reviewing railing continuity, alignment, access openings and the approved installation scope before completion.",
  },
];

export default function HandrailsGuardrailsProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Wrench size={15} />
            Railing System Development Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Edge-Protection Planning to Final Installation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Industrial handrails and guardrails are developed through a
            coordinated process covering layout planning, engineering,
            fabrication, finishing and final installation.
          </p>
        </motion.div>

        {/* Desktop Timeline */}

        <div className="relative z-10 mx-auto mt-20 hidden max-w-6xl lg:block">
          <div className="absolute bottom-10 left-1/2 top-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary-red via-primary-blue/25 to-primary-red" />

          <div className="space-y-7">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -34 : 34,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className="relative grid grid-cols-[1fr_112px_1fr] items-center"
                >
                  <div className={isLeft ? "pr-8" : ""}>
                    {isLeft && (
                      <div className="ml-auto max-w-[440px] rounded-[28px] border border-gray-200 bg-white p-7 text-right shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                          Process Stage {step.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[26px] border-[8px] border-[#f7f9fc] bg-primary-blue text-white shadow-[0_18px_50px_rgba(27,63,104,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red">
                      <Icon size={31} />
                    </div>

                    <span className="mt-2 text-xs font-black text-primary-red">
                      {step.number}
                    </span>
                  </div>

                  <div className={!isLeft ? "pl-8" : ""}>
                    {!isLeft && (
                      <div className="max-w-[440px] rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                          Process Stage {step.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
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

        {/* Mobile & Tablet */}

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
                  delay: index * 0.04,
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

        {/* Closing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <BadgeCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Approved Edge-Protection Inputs Guide Every Stage
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Final rail heights, post spacing, gates, toe boards,
                connections and support details are developed according to
                approved drawings, project requirements and site conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}