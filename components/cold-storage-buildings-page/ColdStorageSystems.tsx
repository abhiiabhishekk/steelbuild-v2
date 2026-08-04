"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Frame,
  Layers3,
  ShieldCheck,
  Snowflake,
  Warehouse,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systems = [
  {
    number: "01",
    icon: Frame,
    title: "Structural Steel Frame",
    description:
      "Primary columns, rafters and supporting members engineered according to building dimensions, loading and project requirements.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Insulated Roof System",
    description:
      "Roof systems coordinated with structural framing, panel support, drainage and approved insulation requirements.",
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Insulated Wall System",
    description:
      "External and internal wall panels coordinated around storage zones, structural supports and building openings.",
  },
  {
    number: "04",
    icon: DoorOpen,
    title: "Access & Loading Openings",
    description:
      "Doors, loading access and operational openings planned according to material movement and approved project layout.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Weather & Building Protection",
    description:
      "Flashings, trims, sealing details and drainage provisions coordinated to support reliable building-envelope performance.",
  },
];

const buildingLayers = [
  {
    label: "External Protection",
    text: "Roofing, cladding, flashings and drainage",
  },
  {
    label: "Insulated Envelope",
    text: "Coordinated roof and wall panel systems",
  },
  {
    label: "Structural Framework",
    text: "Columns, rafters and supporting steel members",
  },
  {
    label: "Operational Openings",
    text: "Access, loading and service requirements",
  },
];

export default function ColdStorageSystems() {
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
            Cold Storage Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Integrated Structural and Insulated Building Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Cold-storage buildings require careful coordination between the
            structural frame, insulated envelope, openings and weather
            protection details.
          </p>
        </motion.div>

        {/* Main composition */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          {/* Left layered building panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#286295_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Snowflake size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Building Layer Coordination
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Every Layer Must Work as One Building Envelope
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                The structural frame, insulated panels, openings and weather
                protection details are coordinated according to the approved
                building configuration.
              </p>

              <div className="mt-9 space-y-4">
                {buildingLayers.map((layer, index) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.08] px-5 py-5 backdrop-blur-md"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-primary-red" />

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Layer {String(index + 1).padStart(2, "0")}
                    </p>

                    <h4 className="mt-2 text-lg font-black text-white">
                      {layer.label}
                    </h4>

                    <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                      {layer.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <Wind
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Building services and refrigeration requirements must be
                  coordinated separately according to the approved project
                  design and specialist inputs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right system rows */}

          <div className="space-y-5">
            {systems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)] md:p-8"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Building System {item.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}