"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Layers3,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Thermometer,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Layers3,
    title: "Multiwall Polycarbonate Sheet",
    description:
      "Engineered translucent panel with multiple internal hollow cells for daylight transmission, stiffness and improved thermal performance.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "UV-Protected Outer Surface",
    description:
      "A UV-resistant external layer helps preserve clarity, colour stability and long-term outdoor weather performance.",
  },
  {
    number: "03",
    icon: SunMedium,
    title: "Internal Hollow-Cell Structure",
    description:
      "Continuous internal chambers diffuse natural daylight while reducing direct heat transfer through the roof assembly.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Aluminium Glazing Bars",
    description:
      "Engineered glazing profiles securely connect adjoining sheets while supporting alignment and controlled thermal movement.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "EPDM Gaskets & Seals",
    description:
      "Flexible sealing components provide weather-resistant joints while allowing controlled expansion and contraction.",
  },
  {
    number: "06",
    icon: Thermometer,
    title: "Thermal Expansion Allowance",
    description:
      "Designed clearances and fixing details accommodate polycarbonate movement caused by temperature changes.",
  },
  {
    number: "07",
    icon: Sparkles,
    title: "Flashings & Closures",
    description:
      "Precision-formed flashings, end closures and edge details protect sheet ends and maintain weatherproof roof integration.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Roof Support Integration",
    description:
      "Polycarbonate daylighting assemblies are coordinated with roof purlins, metal roofing sheets and structural steel framing.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "UV-Protected Surface",
    text: "External weather-resistant protective layer",
  },
  {
    number: "02",
    title: "Multiwall Sheet",
    text: "Translucent hollow-cell daylighting panel",
  },
  {
    number: "03",
    title: "Internal Cells",
    text: "Light diffusion and thermal performance",
  },
  {
    number: "04",
    title: "Glazing Bar",
    text: "Connects and supports adjoining sheets",
  },
  {
    number: "05",
    title: "EPDM Seal",
    text: "Weatherproof flexible joint system",
  },
  {
    number: "06",
    title: "Roof Support",
    text: "Purlins, flashings and structural framing",
  },
];

export default function PolycarbonateSheetsComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Polycarbonate Sheet Components
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-primary-blue min-[390px]:text-[38px] sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Major Elements of a
            <span className="block">
              Polycarbonate Daylighting System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Multiwall sheets, UV-protected surfaces, glazing bars, EPDM seals,
            flashings, expansion allowances and structural supports work
            together to deliver controlled daylight and reliable roof
            performance.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================= */}

        <div className="relative z-10 mt-12 grid gap-12 sm:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* =======================================================
              LEFT ENGINEERING PANEL
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[34px] sm:p-5 md:rounded-[38px] md:p-6">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid Pattern */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* ===================================================
                  IMAGE
              =================================================== */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] min-[390px]:aspect-[4/5] sm:rounded-[22px] lg:aspect-[5/4] lg:rounded-[24px]">
                  <Image
                    src="/images/products/polycarbonate-sheets/polycarbonate-sheets-components.jpg"
                    alt="Cutaway view of a multiwall polycarbonate daylighting system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information Box */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-20
                      rounded-[15px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      min-[390px]:right-auto
                      min-[390px]:max-w-[85%]

                      sm:left-5
                      sm:top-5
                      sm:max-w-[84%]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.14em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Engineered Daylighting Assembly
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Multiwall Cells, Glazing Bars & Weather Seals
                    </p>
                  </div>

                  {/* Bottom Heading */}

                  <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.14em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Major Polycarbonate Components
                    </p>

                    <h3 className="mt-1.5 text-[20px] font-black leading-[1.08] tracking-[-0.03em] text-white min-[390px]:text-[22px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Every Element Supports
                      <span className="block">
                        Daylighting and Roof Performance
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* ===================================================
                  SYSTEM LAYERS
              =================================================== */}

              <div className="relative z-10 mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
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
                    className="rounded-[15px] border border-white/10 bg-white/[0.08] px-3 py-3.5 backdrop-blur-sm sm:rounded-[18px] sm:px-4 sm:py-4"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="shrink-0 text-[10px] font-black leading-5 text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[11px] font-black leading-[1.35] text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[9px] font-medium leading-[1.5] text-white/60 sm:text-[11px] sm:leading-5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* =====================================================
                COMPLETE DAYLIGHTING ASSEMBLY CARD
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-4 rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_28px_80px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-5 sm:mx-6 sm:-mt-5 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <Layers3 size={22} className="sm:h-6 sm:w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-[1.35] tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Daylighting Assembly
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.5] tracking-[-0.01em] text-primary-blue min-[390px]:text-sm sm:text-base sm:leading-6">
                    Multiwall polycarbonate sheets, UV-protected surfaces,
                    glazing bars, EPDM gaskets, flashings, thermal-expansion
                    joints and structural roof supports work together to
                    deliver durable daylighting and weather-resistant roof
                    integration.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =======================================================
              RIGHT COMPONENT CARDS
          ======================================================= */}

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
                  className="group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                >
                  {/* Background Number */}

                  <span className="pointer-events-none absolute right-4 top-4 text-[40px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon size={22} className="sm:h-6 sm:w-6" />
                  </div>

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Component {item.number}
                  </p>

                  <h3 className="mt-3 pr-5 text-xl font-black leading-tight tracking-[-0.035em] text-primary-blue sm:pr-0 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] font-medium leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM ENGINEERING NOTE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 flex max-w-5xl items-start gap-3 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:h-6 sm:w-6"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final polycarbonate sheet thickness, internal hollow-cell
            configuration, UV-protection layer, glazing-bar profile, EPDM
            gasket arrangement, thermal-expansion allowance, flashing details,
            fastening system and roof support layout are engineered according
            to daylighting requirements, environmental conditions and approved
            project specifications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}