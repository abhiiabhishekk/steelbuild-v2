"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Columns3,
  DoorOpen,
  Frame,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Warehouse,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systemLayers = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Roofing System",
    description:
      "Roof sheets, ridge elements, flashings, insulation and drainage provisions coordinated for weather protection.",
    items: [
      "Roof sheeting",
      "Ridge cap",
      "Flashing details",
      "Insulation options",
    ],
  },
  {
    number: "02",
    icon: Frame,
    title: "Primary Structural Frame",
    description:
      "Main columns and rafters engineered according to building width, clear height, loading and bay spacing.",
    items: [
      "Built-up columns",
      "Steel rafters",
      "Moment connections",
      "Base assemblies",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Secondary Framing",
    description:
      "Purlins, girts, eave members and supporting steel systems transferring envelope loads to the primary frame.",
    items: [
      "Roof purlins",
      "Wall girts",
      "Eave struts",
      "Sag rods",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Bracing & Stability",
    description:
      "Roof and wall bracing systems maintaining structural alignment and stability under wind and operational forces.",
    items: [
      "Roof bracing",
      "Wall bracing",
      "Tie members",
      "Stability systems",
    ],
  },
  {
    number: "05",
    icon: PanelsTopLeft,
    title: "Wall Cladding System",
    description:
      "External wall panels, trims, corner details and weather-sealing elements forming the building envelope.",
    items: [
      "Wall cladding",
      "Corner trims",
      "Base flashing",
      "Weather seals",
    ],
  },
  {
    number: "06",
    icon: DoorOpen,
    title: "Access & Openings",
    description:
      "Industrial doors, personnel access, louvers and custom openings coordinated with structural and operational requirements.",
    items: [
      "Rolling shutters",
      "Personnel doors",
      "Ventilation louvers",
      "Service openings",
    ],
  },
];

const shedComponents = [
  "Primary steel columns",
  "Built-up roof rafters",
  "Roof purlins",
  "Wall girts",
  "Eave struts",
  "Roof bracing",
  "Vertical bracing",
  "Sag rods and tie rods",
  "Roof sheeting",
  "Wall cladding",
  "Ridge and flashing details",
  "Doors and ventilation openings",
];

export default function IndustrialShedsSystems() {
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
            <Building2 size={15} />
            Shed Anatomy
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Integrated Building Systems Within an Industrial Shed
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            An industrial shed performs as one coordinated system where
            structural framing, stability, roofing, cladding, ventilation and
            access elements work together.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
          {/* Left anatomy panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Warehouse size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Complete Building Envelope
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Every Component Supports Structural and Operational Performance
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Shed systems are coordinated according to span, height,
                loading, weather exposure, ventilation, access and internal
                operational requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                {shedComponents.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[64px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-primary-red/25 bg-[#102f55] p-5">
                <Columns3
                  size={23}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Primary and secondary steel members are coordinated with the
                  building envelope and all required access openings.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right layered systems */}

          <div className="relative">
            <div className="pointer-events-none absolute bottom-8 left-[35px] top-8 hidden w-[2px] bg-gradient-to-b from-primary-red via-primary-blue/25 to-primary-red md:block" />

            <div className="space-y-5">
              {systemLayers.map((system, index) => {
                const Icon = system.icon;

                return (
                  <motion.article
                    key={system.title}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="relative md:pl-24"
                  >
                    {/* Timeline icon */}

                    <div className="absolute left-0 top-7 z-10 hidden h-[70px] w-[70px] items-center justify-center rounded-[22px] border-4 border-[#f7f9fc] bg-primary-red text-white shadow-[0_14px_34px_rgba(194,17,25,0.25)] md:flex">
                      <Icon size={28} />
                    </div>

                    <div className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]">
                      <span className="pointer-events-none absolute right-5 top-3 text-[58px] font-black leading-none text-primary-blue/[0.04]">
                        {system.number}
                      </span>

                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] md:hidden">
                            <Icon size={25} />
                          </div>

                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                              Shed System {system.number}
                            </p>

                            <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue md:text-3xl">
                              {system.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                          {system.description}
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                          {system.items.map((item) => (
                            <div
                              key={item}
                              className="flex min-h-[58px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 transition-colors duration-300 group-hover:bg-white"
                            >
                              <BadgeCheck
                                size={16}
                                className="mt-0.5 shrink-0 text-primary-red"
                              />

                              <span className="text-xs font-black leading-5 text-primary-blue">
                                {item}
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
        </div>

        {/* Bottom system strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Frame size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Structural Framework
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Primary and secondary steel systems
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <PanelsTopLeft size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Building Envelope
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Roofing, cladding and weather protection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-7 py-6">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Wind size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Operational Comfort
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Ventilation, daylight and access planning
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}