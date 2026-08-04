"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Boxes,
  Clock3,
  Layers3,
  ShieldCheck,
  Snowflake,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const flowStages = [
  {
    number: "01",
    icon: Truck,
    title: "Receiving",
    description: "Organized entry and material handling.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Storage",
    description: "Planned internal storage zones.",
  },
  {
    number: "03",
    icon: Snowflake,
    title: "Controlled Operations",
    description: "Coordinated insulated building systems.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Dispatch",
    description: "Efficient outward material movement.",
  },
];

const advantages = [
  {
    number: "01",
    icon: Layers3,
    title: "Coordinated Insulated Envelope",
    description:
      "Roof and wall systems can be integrated with structural framing, openings and building details.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Organized Storage Layout",
    description:
      "Internal spaces can be planned around product handling, storage zones and operational movement.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Systematic Construction",
    description:
      "Factory-manufactured structural components support planned fabrication, delivery and site erection.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliable Building Protection",
    description:
      "Structural and envelope systems are coordinated for dependable long-term building performance.",
  },
];

export default function ColdStorageAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
            Cold Storage Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Building Infrastructure Planned Around Cold-Storage Operations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Effective cold-storage buildings coordinate storage, movement,
            insulated systems and structural performance within one planned
            facility.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          {/* Left cold-chain flow */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#286295_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Snowflake size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Operational Flow
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Storage Performance Depends on Coordinated Movement
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                The building layout should support receiving, internal storage
                and dispatch without unnecessary movement conflicts.
              </p>

              <div className="mt-9">
                {flowStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <motion.div
                      key={stage.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md">
                          <Icon size={24} />
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                            Stage {stage.number}
                          </p>

                          <h4 className="mt-1 text-lg font-black text-white">
                            {stage.title}
                          </h4>

                          <p className="mt-1 text-sm font-medium text-white/60">
                            {stage.description}
                          </p>
                        </div>
                      </div>

                      {index < flowStages.length - 1 && (
                        <div className="ml-[27px] flex h-8 items-center">
                          <ArrowDown
                            size={17}
                            className="text-primary-red"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right advantages */}

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)] md:p-8"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Cold Storage Advantage {item.number}
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
      </Container>
    </section>
  );
}