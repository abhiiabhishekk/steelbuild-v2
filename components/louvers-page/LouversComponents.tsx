"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AirVent,
  BadgeCheck,
  CloudRain,
  Layers3,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Wind,
    title: "Aerodynamic Louver Blades",
    description:
      "Fixed blade profiles are engineered to support controlled airflow while helping restrict direct rain penetration.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Perimeter Frame",
    description:
      "Extruded aluminium or galvanized steel framing supports the blade assembly and integrates the louver with the façade opening.",
  },
  {
    number: "03",
    icon: CloudRain,
    title: "Rain-Resistant Blade Profile",
    description:
      "Engineered blade geometry redirects rainwater while maintaining the required ventilation free area.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Bird Mesh",
    description:
      "Protective mesh positioned behind the blade assembly helps prevent bird entry without blocking airflow.",
  },
  {
    number: "05",
    icon: AirVent,
    title: "Insect Screen",
    description:
      "Fine screening can be added where required to reduce insect entry while preserving ventilation performance.",
  },
  {
    number: "06",
    icon: CloudRain,
    title: "Drainage Channel",
    description:
      "Integrated drainage paths collect and discharge water away from the wall opening and internal building area.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Flashings & Fasteners",
    description:
      "Perimeter flashings, sealants and approved fasteners provide secure and weather-resistant façade integration.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Façade Support Integration",
    description:
      "Louver frames are coordinated with wall girts, structural framing and cladding interfaces for complete system performance.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Louver Blades",
    text: "Primary airflow and rain-control elements",
  },
  {
    number: "02",
    title: "Perimeter Frame",
    text: "Supports the complete louver assembly",
  },
  {
    number: "03",
    title: "Bird Mesh",
    text: "Protective screen against bird entry",
  },
  {
    number: "04",
    title: "Insect Screen",
    text: "Fine mesh for insect-control requirements",
  },
  {
    number: "05",
    title: "Drainage Path",
    text: "Collects and redirects rainwater",
  },
  {
    number: "06",
    title: "Façade Support",
    text: "Wall girts, flashings and structural framing",
  },
];

export default function LouversComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
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
            Industrial Louver Components
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Elements of an
            <span className="block">
              Industrial Ventilation Louver
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Aerodynamic blades, frames, protective screens, drainage paths,
            flashings and structural supports work together to provide
            controlled airflow with reliable weather protection.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="relative z-10 mt-12 grid gap-12 sm:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[38px] sm:p-5 md:p-6">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Area */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[30px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] min-[390px]:aspect-[4/5] sm:rounded-[24px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/louvers/louvers-components.jpg"
                    alt="Cutaway view of industrial ventilation louver components"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-20
                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      min-[390px]:right-auto
                      min-[390px]:max-w-[84%]

                      sm:left-5
                      sm:top-5
                      sm:max-w-[380px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Functional Ventilation Assembly
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Blades, Screens, Drainage & Façade Integration
                    </p>
                  </div>

                  {/* Bottom Image Content */}

                  <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.14em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Major Louver Components
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[20px] font-black leading-[1.08] tracking-[-0.025em] text-white min-[390px]:text-[22px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Every Component Supports
                      <span className="block">
                        Airflow and Weather Protection
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* System Layer Grid */}

              <div className="relative z-10 mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
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
                    className="rounded-[16px] border border-white/10 bg-white/[0.08] px-4 py-3.5 backdrop-blur-sm sm:rounded-[18px] sm:py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[10px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] font-medium leading-[1.55] text-white/60 sm:text-[11px] sm:leading-5">
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
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_28px_80px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-5 sm:mx-6 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <AirVent size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-[1.35] tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Louver Assembly
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.5] tracking-[-0.01em] text-primary-blue min-[390px]:text-sm sm:text-base sm:leading-6">
                    Aerodynamic blades, structural frames, bird mesh, insect
                    screens, drainage channels, flashings and façade supports
                    work together to deliver dependable airflow with effective
                    weather protection.
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
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                >
                  {/* Large Number */}

                  <span className="pointer-events-none absolute right-4 top-3 text-[40px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:top-4 sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={22} />
                  </div>

                  {/* Component Label */}

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Component {item.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2.5 text-xl font-black leading-[1.15] tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-[13px] font-medium leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
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
            className="mt-0.5 shrink-0 text-primary-red sm:h-6 sm:w-6"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final louver dimensions, blade profile, free-area ratio, drainage
            arrangement, bird mesh, insect screen, frame material, flashing
            details, façade support integration and fastening methods are
            engineered according to airflow requirements, weather exposure and
            approved project specifications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}