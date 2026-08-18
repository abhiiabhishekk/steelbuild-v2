"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Droplets,
  Layers3,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Snowflake,
    title: "Thermal Insulation Layer",
    description:
      "PIR, PUF, Rockwool or Glass Wool insulation provides continuous thermal resistance within roof and wall assemblies.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Vapour Barrier",
    description:
      "A coordinated vapour-control layer helps limit moisture migration and reduce condensation within the building envelope.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Thermal Barrier",
    description:
      "Protective internal layers support insulation performance, durability and project-specific fire requirements.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Insulation Spacer System",
    description:
      "Engineered spacers maintain insulation thickness and reduce compression beneath roofing and wall cladding systems.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Insulation Support System",
    description:
      "Support mesh, liner sheets, straps or secondary members securely retain insulation within the roof and wall assemblies.",
  },
  {
    number: "06",
    icon: Thermometer,
    title: "Thermal Break Components",
    description:
      "Thermal-break materials help reduce direct heat transfer through selected metal framing and connection points.",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Joint Sealing System",
    description:
      "Approved tapes, sealants and closures maintain insulation continuity around joints, openings and façade transitions.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Roof & Wall Integration",
    description:
      "The insulation assembly is coordinated independently with roofing sheets, wall cladding, purlins, girts and structural framing.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "External Roofing or Cladding",
    text: "Primary external weather-protection layer",
  },
  {
    number: "02",
    title: "Air or Spacer Zone",
    text: "Maintains insulation depth and system continuity",
  },
  {
    number: "03",
    title: "Insulation Material",
    text: "PIR, PUF, Rockwool or Glass Wool layer",
  },
  {
    number: "04",
    title: "Vapour-Control Layer",
    text: "Helps manage moisture and condensation",
  },
  {
    number: "05",
    title: "Support or Liner System",
    text: "Retains and protects the insulation assembly",
  },
  {
    number: "06",
    title: "Structural Framing",
    text: "Roof purlins, wall girts and steel frame",
  },
];

export default function InsulationSystemsComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Insulation System Components
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Elements of an
            <span className="block">
              Industrial Insulation Assembly
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Insulation materials, vapour-control layers, spacers, support
            systems, thermal breaks and sealed joints work together as a
            separate engineered assembly beneath roofing and behind wall
            cladding.
          </p>
        </motion.div>

        <div className="relative z-10 mt-12 grid gap-12 sm:mt-14 lg:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-10 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-11 md:rounded-[38px] md:p-6 md:pb-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/insulation-systems/insulation-systems-components.jpg"
                    alt="Cutaway view of an industrial roof and wall insulation system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-10

                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[340px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Separate Insulation Assembly
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Thermal, Vapour & Support Layers
                    </p>
                  </div>

                  {/* Bottom Image Content */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-10

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Major Insulation Components
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[18px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[19px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Every Layer Supports
                      <span className="block">
                        Complete Thermal Performance
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* System Layers */}

              <div className="relative z-10 mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {systemLayers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-3.5 backdrop-blur-sm sm:py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] font-medium leading-5 text-white/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coordination Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                relative
                z-20

                -mt-8
                mx-3

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_28px_80px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:-mt-9
                sm:mx-5
                sm:rounded-[28px]
                sm:p-6

                md:-mt-10
                md:mx-8
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)] sm:h-14 sm:w-14">
                  <Layers3 size={21} className="sm:hidden" />
                  <Layers3 size={24} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Insulation Assembly
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Insulation materials, vapour barriers, spacers, support
                    systems, sealants and structural framing work together to
                    deliver thermal efficiency without becoming part of an
                    insulated sandwich panel.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Component Cards */}

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {components.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[24px]
                    border
                    border-gray-200
                    bg-white
                    p-5

                    shadow-[0_18px_55px_rgba(27,63,104,0.07)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-primary-red/25
                    hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]

                    sm:rounded-[28px]
                    sm:p-7
                  "
                >
                  <span className="pointer-events-none absolute right-4 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={22} className="sm:hidden" />
                    <Icon size={24} className="hidden sm:block" />
                  </div>

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Component {item.number}
                  </p>

                  <h3 className="mt-2.5 pr-8 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-gray-500 sm:mt-4 sm:leading-7">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-3.5 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final insulation material, density, thickness, thermal resistance,
            vapour-barrier specification, spacer arrangement, support system,
            sealing method and roof or wall integration are engineered
            according to climate conditions, condensation risk,
            fire-performance requirements, acoustic performance and approved
            project specifications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}