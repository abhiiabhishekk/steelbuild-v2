"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Frame,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Footprints,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systems = [
  {
    number: "01",
    icon: Frame,
    title: "Primary Structural Frame",
    description:
      "Columns, beams and main framing members designed according to building height, span, loading and approved layout requirements.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Floor Framing Systems",
    description:
      "Intermediate beams and floor-support systems coordinated around commercial usage, circulation and approved loading conditions.",
  },
  {
    number: "03",
    icon: Footprints,
    title: "Access & Vertical Circulation",
    description:
      "Staircases, access zones and structural openings coordinated with the approved architectural and functional layout.",
  },
  {
    number: "04",
    icon: PanelsTopLeft,
    title: "Roofing & External Cladding",
    description:
      "Roof and wall-envelope systems coordinated with the steel frame, façade requirements and weather-protection details.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Bracing & Structural Stability",
    description:
      "Vertical and horizontal stability systems developed according to structural analysis and project-specific requirements.",
  },
];

const systemSummary = [
  "Structural framing",
  "Floor systems",
  "Vertical circulation",
  "Building envelope",
  "Stability systems",
];

export default function CommercialSystems() {
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
            <Building2 size={15} />
            Commercial Building Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Coordinated Structural Systems for Commercial Buildings
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Commercial steel buildings combine structural framing, floor
            systems, circulation and external-envelope elements within one
            coordinated building solution.
          </p>
        </motion.div>

        {/* Architectural system band */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mt-16 isolate overflow-hidden rounded-[38px] bg-primary-blue px-8 py-10 shadow-[0_32px_90px_rgba(27,63,104,0.2)] md:px-10 lg:px-14 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

          <div className="relative z-10 grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Integrated Building Framework
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Structure, Floors and Envelope Planned Together
              </h3>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/70">
                Each system is coordinated according to the approved
                architectural layout, structural requirements and intended
                commercial use.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {systemSummary.map((item, index) => (
                <div
                  key={item}
                  className={`flex min-h-[62px] items-center gap-3 border-b border-white/10 py-3 ${
                    index === systemSummary.length - 1
                      ? "sm:col-span-2 sm:max-w-[50%]"
                      : ""
                  }`}
                >
                  <span className="text-sm font-black text-primary-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-black text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Alternating system rows */}

        <div className="relative z-10 mx-auto mt-14 max-w-6xl">
          <div className="space-y-5">
            {systems.map((item, index) => {
              const Icon = item.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: reverse ? 30 : -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`group grid gap-6 rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-8 ${
                    reverse ? "md:grid-cols-[auto_1fr_auto]" : ""
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white ${
                      reverse ? "md:order-3" : ""
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <div
                    className={
                      reverse
                        ? "md:order-2 md:text-right"
                        : "md:order-2"
                    }
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Commercial System {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue md:text-3xl">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500 ${
                        reverse ? "md:ml-auto" : ""
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <span
                    className={`text-[58px] font-black leading-none text-primary-blue/[0.05] ${
                      reverse ? "md:order-1" : "md:order-3"
                    }`}
                  >
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Scope note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-white px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
        >
          <DoorOpen
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Architectural finishes, building services and specialist systems
            are coordinated according to the approved project scope and
            responsible consultant inputs.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}