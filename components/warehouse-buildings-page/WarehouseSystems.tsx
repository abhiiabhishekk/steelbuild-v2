"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Building2,
  Columns3,
  DoorOpen,
  Frame,
  PanelsTopLeft,
  ShieldCheck,
  Truck,
  Warehouse,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systemLayers = [
  {
    number: "01",
    icon: Frame,
    title: "Primary Structural Frame",
    description:
      "Main steel columns and rafters engineered according to warehouse width, clear height, loading and bay spacing.",
    items: [
      "Built-up columns",
      "Main rafters",
      "Moment connections",
      "Base assemblies",
    ],
  },
  {
    number: "02",
    icon: Columns3,
    title: "Secondary Framing",
    description:
      "Purlins, girts, eave members and supporting steel systems transferring roof and wall loads to the main frame.",
    items: [
      "Roof purlins",
      "Wall girts",
      "Eave struts",
      "Sag rods",
    ],
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Roofing & Cladding",
    description:
      "Roof sheets, wall panels, trims, flashings and sealing details forming the warehouse building envelope.",
    items: [
      "Roof sheeting",
      "Wall cladding",
      "Ridge cap",
      "Weather seals",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Bracing & Stability",
    description:
      "Roof and wall bracing systems maintaining structural stability under wind and operational forces.",
    items: [
      "Roof bracing",
      "Wall bracing",
      "Tie members",
      "Stability systems",
    ],
  },
];

const operationalSystems = [
  {
    icon: Boxes,
    title: "Storage & Racking Zones",
    description:
      "Internal clear space and column positions coordinated around inventory, racks and material-handling paths.",
  },
  {
    icon: Truck,
    title: "Loading & Dispatch Areas",
    description:
      "Vehicle access, loading bays and dock positions coordinated around daily logistics operations.",
  },
  {
    icon: DoorOpen,
    title: "Access Openings",
    description:
      "Rolling shutters, dock doors, personnel access and service openings planned around warehouse usage.",
  },
  {
    icon: Wind,
    title: "Ventilation & Daylight",
    description:
      "Louvers, roof ventilation and translucent panels incorporated for internal comfort and visibility.",
  },
];

const completeSystem = [
  "Primary steel columns",
  "Built-up roof rafters",
  "Roof purlins",
  "Wall girts",
  "Eave struts",
  "Roof bracing",
  "Vertical bracing",
  "Roof sheeting",
  "Wall cladding",
  "Dock and access openings",
  "Ventilation systems",
  "Drainage and flashing details",
];

export default function WarehouseSystems() {
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
            <Warehouse size={15} />
            Warehouse Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Integrated Structural and Operational Warehouse Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            A warehouse building combines structural framing, building
            envelope, storage planning, loading access and environmental
            systems into one coordinated facility.
          </p>
        </motion.div>

        {/* Main systems composition */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          {/* Left complete system panel */}

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
                <Building2 size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Complete Warehouse Framework
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                One Building System Supporting Storage and Logistics
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Structural members, envelope systems and operational openings
                are coordinated according to warehouse usage, storage height,
                loading requirements and daily movement.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                {completeSystem.map((item) => (
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
                <ShieldCheck
                  size={23}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Structural framing and access systems are coordinated to
                  protect storage capacity and maintain uninterrupted logistics
                  movement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right layered systems */}

          <div className="grid gap-6">
            {/* Structural layers */}

            <div className="grid gap-5 md:grid-cols-2">
              {systemLayers.map((system, index) => {
                const Icon = system.icon;

                return (
                  <motion.article
                    key={system.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
                  >
                    <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                      {system.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      System Layer {system.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                      {system.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                      {system.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {system.items.map((item) => (
                        <div
                          key={item}
                          className="flex min-h-[56px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5"
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
                  </motion.article>
                );
              })}
            </div>

            {/* Operational modules */}

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[34px] border border-gray-200 bg-white p-7 shadow-[0_24px_75px_rgba(27,63,104,0.1)] md:p-8"
            >
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-red">
                  Operational Systems
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue">
                  Warehouse Systems Beyond the Structural Frame
                </h3>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {operationalSystems.map((system, index) => {
                  const Icon = system.icon;

                  return (
                    <motion.div
                      key={system.title}
                      initial={{ opacity: 0, x: 22 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      className="group flex gap-4 rounded-[24px] border border-gray-200 bg-[#f8fafc] p-5 transition-all duration-300 hover:border-primary-red/25 hover:bg-white"
                    >
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-primary-blue">
                          {system.title}
                        </h4>

                        <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                          {system.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}