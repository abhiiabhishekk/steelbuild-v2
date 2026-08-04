"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Columns3,
  Footprints,
  Frame,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Columns3,
    title: "Support Columns",
    description:
      "Vertical members positioned according to the approved structural grid, loading and available operational space.",
  },
  {
    number: "02",
    icon: Frame,
    title: "Primary Beams",
    description:
      "Main horizontal members supporting the mezzanine floor and transferring loads to the columns.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Secondary Beams",
    description:
      "Intermediate floor members supporting the deck system and distributing approved floor loads.",
  },
  {
    number: "04",
    icon: PanelsTopLeft,
    title: "Floor Deck System",
    description:
      "The floor-support arrangement is coordinated according to intended usage and approved project requirements.",
  },
  {
    number: "05",
    icon: Footprints,
    title: "Staircase & Access",
    description:
      "Access routes, staircases and openings are coordinated with the mezzanine layout and operational movement.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Guardrails & Edge Protection",
    description:
      "Perimeter protection elements are incorporated according to the approved access and safety requirements.",
  },
];

const structuralSequence = [
  "Floor deck",
  "Secondary beams",
  "Primary beams",
  "Support columns",
];

export default function MezzanineComponents() {
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
            Mezzanine Components
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Structural Components Working as One Mezzanine System
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            A steel mezzanine combines columns, beams, floor-support systems,
            access and perimeter protection within one coordinated structural
            arrangement.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          {/* Structural composition panel */}

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
                <Layers3 size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Structural Composition
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                From Floor Surface to Supporting Columns
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Each structural layer performs a defined function and transfers
                approved loads through the framing system to the supporting
                structure.
              </p>

              {/* Layer diagram */}

              <div className="mt-9 overflow-hidden rounded-[28px] border border-white/10 bg-[#102f55]/70 p-6 md:p-7">
                <div className="space-y-4">
                  {structuralSequence.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                      }}
                      className="relative"
                    >
                      <div
                        className={`flex min-h-[62px] items-center justify-between gap-5 rounded-2xl border border-white/10 px-5 py-4 ${
                          index === 0
                            ? "bg-white text-primary-blue"
                            : "bg-white/[0.08] text-white"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-black ${
                              index === 0
                                ? "text-primary-red"
                                : "text-primary-red"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-black">
                            {item}
                          </span>
                        </div>

                        <div
                          className={`h-2 rounded-full ${
                            index === 0
                              ? "w-24 bg-primary-red"
                              : index === 1
                                ? "w-20 bg-white/35"
                                : index === 2
                                  ? "w-16 bg-white/30"
                                  : "w-12 bg-white/25"
                          }`}
                        />
                      </div>

                      {index < structuralSequence.length - 1 && (
                        <div className="mx-auto h-4 w-[2px] bg-primary-red/70" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <ShieldCheck
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Member sizes, connections and support conditions are
                  determined through the approved structural design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Component list */}

          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            {components.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group border-b border-gray-200 py-7 first:border-t md:first:border-t-0 md:[&:nth-child(2)]:border-t-0"
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
                    Mezzanine Component {item.number}
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

        {/* Coordination note */}

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
            Flooring materials, safety elements and access arrangements are
            finalized according to the approved project scope, intended use and
            responsible engineering inputs.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}