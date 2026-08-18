"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  Layers3,
  ShieldCheck,
  SquareStack,
  ThermometerSun,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Layers3,
    title: "Standing Seam Panels",
    description:
      "Continuous metal roof panels forming the primary weather-protection surface.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Raised Standing Seams",
    description:
      "Interlocking raised seams joining adjacent roof panels.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Concealed Clips",
    description:
      "Hidden fastening clips securing roof panels to roof purlins.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Roof Purlins",
    description:
      "Secondary structural members supporting the complete roof system.",
  },
  {
    number: "05",
    icon: ThermometerSun,
    title: "Roof Insulation",
    description:
      "Insulation and vapour-control layers coordinated beneath roof panels.",
  },
  {
    number: "06",
    icon: CloudRain,
    title: "Flashings & Ridge",
    description:
      "Engineered ridge caps, flashings and weatherproof roof transitions.",
  },
  {
    number: "07",
    icon: BadgeCheck,
    title: "Rainwater Drainage",
    description:
      "Gutters and downpipes integrated with the roof assembly.",
  },
  {
    number: "08",
    icon: SquareStack,
    title: "Structural Connections",
    description:
      "Steel rafters, beams, purlins and roof interfaces supporting the roofing system.",
  },
];

const engineeringLayers = [
  {
    number: "01",
    title: "Roof Panels",
    text: "Primary weather-protection surface",
  },
  {
    number: "02",
    title: "Standing Seams",
    text: "Continuous panel joints",
  },
  {
    number: "03",
    title: "Concealed Clips",
    text: "Hidden structural fastening",
  },
  {
    number: "04",
    title: "Roof Purlins",
    text: "Secondary roof support",
  },
  {
    number: "05",
    title: "Roof Accessories",
    text: "Flashing, ridge and drainage",
  },
  {
    number: "06",
    title: "Structural Steel",
    text: "Primary roof framework",
  },
];

export default function StandingSeamRoofingComponents() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-12 max-w-4xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Standing Seam Roofing Components
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.04] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Structural Elements
            <span className="block">of a Standing Seam</span>
            <span className="block">Roofing System</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Standing Seam Roofing consists of engineered roof panels,
            concealed fastening clips, structural supports, insulation
            assemblies and roof accessories that operate together as one
            coordinated roofing system.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-40 sm:pb-32 md:pb-24 lg:pb-20 xl:pb-16"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/standing-seam-roofing/standing-seam-roofing-components.jpg"
                    alt="Major structural components of a standing seam roofing system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
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
                      sm:max-w-[320px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Standing Seam Roof Assembly
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Roof Panels, Clips & Structural Integration
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-4
                      right-4
                      z-10

                      min-[390px]:bottom-6

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Major Roofing Components
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[18px] font-black leading-[1.12] tracking-[-0.02em] text-white min-[390px]:text-[19px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Every Component Supports
                      <span className="block">
                        the Complete Roof System
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* Engineering Layers */}

              <div className="relative z-10 mt-4 space-y-3 sm:mt-5">
                {engineeringLayers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm sm:rounded-[20px] sm:px-5"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-0.5 shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] font-medium leading-5 text-white/60 sm:text-xs">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Roof System Coordination Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
  absolute
  -bottom-10
  left-3
  right-3
  z-20

  rounded-[24px]
  border
  border-gray-200
  bg-white
  p-4

  shadow-[0_24px_75px_rgba(27,63,104,0.14)]

  min-[390px]:-bottom-11
  min-[390px]:left-4
  min-[390px]:right-4
  min-[390px]:p-5

  sm:-bottom-8
  sm:rounded-[28px]
  sm:p-6

  md:-bottom-6
  md:left-8
  md:right-8

  lg:-bottom-10
  xl:-bottom-23
"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)] sm:h-14 sm:w-14">
                  <ShieldCheck size={22} className="sm:hidden" />
                  <ShieldCheck size={24} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Roof System Coordination
                  </p>

                  <p className="mt-1.5 text-[16px] font-black leading-[1.35] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Panels, concealed clips, purlins, insulation, flashings and
                    drainage components work together to achieve long-term
                    industrial roof performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Component Cards */}

          <div className="grid gap-5 sm:grid-cols-2">
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
                    p-6
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
                  <span className="pointer-events-none absolute right-5 top-4 text-[44px] font-black leading-none text-primary-blue/[0.045] sm:text-[48px]">
                    {item.number}
                  </span>

                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={23} />
                  </div>

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Roofing Component {item.number}
                  </p>

                  <h3 className="mt-3 text-[22px] font-black leading-tight tracking-[-0.035em] text-primary-blue sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-gray-500 sm:mt-4">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="
            relative
            z-10
            mx-auto
            mt-14
            flex
            max-w-5xl
            items-start
            gap-3.5
            border-l-4
            border-primary-red
            bg-white
            px-5
            py-5
            shadow-[0_14px_40px_rgba(27,63,104,0.06)]

            sm:mt-16
            sm:gap-4
            sm:px-7
            sm:py-6

            md:px-9
          "
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final roof panel profiles, concealed clip spacing, insulation
            systems, flashing details, drainage layouts and structural support
            arrangements are developed according to approved engineering
            drawings, project requirements and environmental conditions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}