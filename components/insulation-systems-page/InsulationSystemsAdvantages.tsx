"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Flame,
  Layers3,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Volume2,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Thermometer,
    title: "Improved Thermal Efficiency",
    description:
      "Continuous insulation reduces heat transfer through industrial roof and wall assemblies, helping maintain stable indoor temperatures.",
  },
  {
    number: "02",
    icon: Snowflake,
    title: "Condensation Control",
    description:
      "Proper insulation and vapour-control layers help reduce moisture accumulation within the building envelope.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Building Envelope Protection",
    description:
      "Thermal and moisture-control layers protect roofing, cladding, structural steel and internal building conditions.",
  },
  {
    number: "04",
    icon: Volume2,
    title: "Acoustic Improvement",
    description:
      "Rockwool and Glass Wool insulation options help reduce external noise transmission and improve indoor acoustic comfort.",
  },
  {
    number: "05",
    icon: Flame,
    title: "Fire-Performance Options",
    description:
      "Non-combustible Rockwool insulation can support projects requiring enhanced fire-performance characteristics.",
  },
  {
    number: "06",
    icon: Layers3,
    title: "Flexible System Integration",
    description:
      "Insulation blankets or boards can be coordinated independently with profiled roofing, standing seam systems and wall cladding.",
  },
];

export default function InsulationSystemsAdvantages() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
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
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Insulation System Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Better Thermal Control
            <span className="block">
              for High-Performance Buildings
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Insulation Systems improve energy efficiency,
            condensation control, acoustic comfort and long-term building
            performance through independently engineered roof and wall
            insulation assemblies.
          </p>
        </motion.div>

        {/* Advantage Cards */}

        <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
              >
                <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                  Insulation Advantage {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-white px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
        >
          <BadgeCheck
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Insulation material, thickness, density, thermal resistance,
            vapour-barrier specification, spacer system and support arrangement
            are selected according to climate conditions, condensation risk,
            building use, acoustic requirements, fire-performance criteria and
            approved project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}