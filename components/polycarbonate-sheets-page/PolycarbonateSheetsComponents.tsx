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
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Layers3 size={15} />
            Polycarbonate Sheet Components
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Major Elements of a
            <span className="block">
              Polycarbonate Daylighting System
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Multiwall sheets, UV-protected surfaces, glazing bars, EPDM seals,
            flashings, expansion allowances and structural supports work
            together to deliver controlled daylight and reliable roof
            performance.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/polycarbonate-sheets/polycarbonate-sheets-components.jpg"
                    alt="Cutaway view of a multiwall polycarbonate daylighting system"
                    fill
                    sizes="(max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[84%] rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Engineered Daylighting Assembly
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Multiwall Cells, Glazing Bars & Weather Seals
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Major Polycarbonate Components
                    </p>

                    <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[28px]">
                      Every Element Supports
                      <span className="block">
                        Daylighting and Roof Performance
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* Layer Grid */}

              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
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
                    className="rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 text-xs font-black text-primary-red">
                        {item.number}
                      </span>

                      <div>
                        <p className="text-sm font-black text-white">
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
  className="relative z-20 mx-6 -mt-5 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_28px_80px_rgba(27,63,104,0.14)] md:mx-8"
>
  <div className="flex items-start gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
      <Layers3 size={24} />
    </div>

    <div className="min-w-0">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
        Complete Daylighting Assembly
      </p>

      <p className="mt-2 text-sm font-black leading-6 text-primary-blue md:text-base">
        Multiwall polycarbonate sheets, UV-protected surfaces, glazing bars,
        EPDM gaskets, flashings, thermal-expansion joints and structural roof
        supports work together to deliver durable daylighting and
        weather-resistant roof integration.
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
        className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
      >
        <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
          {item.number}
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
          <Icon size={24} />
        </div>

        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
          Component {item.number}
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

{/* Bottom Engineering Note */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f8fafc] px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
>
  <BadgeCheck
    size={24}
    className="mt-0.5 shrink-0 text-primary-red"
  />

  <p className="text-sm font-bold leading-7 text-primary-blue">
    Final polycarbonate sheet thickness, internal hollow-cell configuration,
    UV-protection layer, glazing-bar profile, EPDM gasket arrangement,
    thermal-expansion allowance, flashing details, fastening system and roof
    support layout are engineered according to daylighting requirements,
    environmental conditions and approved project specifications.
  </p>
</motion.div>

</Container>
</section>
);
}

