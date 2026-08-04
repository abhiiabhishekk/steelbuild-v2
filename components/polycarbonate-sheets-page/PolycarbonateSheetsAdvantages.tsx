"use client";

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

const advantages = [
  {
    number: "01",
    icon: SunMedium,
    title: "Excellent Natural Daylighting",
    description:
      "High light transmission provides bright, evenly distributed natural daylight across industrial buildings while reducing dependence on artificial lighting.",
  },
  {
    number: "02",
    icon: Thermometer,
    title: "Improved Thermal Performance",
    description:
      "Multiwall hollow-cell construction reduces heat transfer while maintaining excellent daylight transmission.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "UV & Weather Resistance",
    description:
      "UV-protected outer surfaces help maintain long-term clarity, durability and weather performance in demanding outdoor environments.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Lightweight Construction",
    description:
      "Polycarbonate sheets offer high strength with significantly lower weight than conventional glazing materials.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Impact Resistance",
    description:
      "Engineered polycarbonate material provides outstanding resistance to accidental impact while maintaining structural integrity.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Reliable Roof Integration",
    description:
      "Compatible with industrial roofing systems through engineered glazing bars, flashings, gaskets and structural supports.",
  },
];

export default function PolycarbonateSheetsAdvantages() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Polycarbonate Sheet Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Maximum Daylighting
            <span className="block">
              With Long-Term Performance
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Multiwall Polycarbonate Sheets combine excellent natural
            daylight transmission, thermal performance, UV protection and
            impact resistance for premium industrial roof daylighting systems.
          </p>
        </motion.div>

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
                  Advantage {item.number}
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
            Final polycarbonate sheet thickness, internal hollow-cell
            configuration, light-transmission level, UV-protection layer,
            glazing-bar arrangement, thermal-expansion allowance, flashing
            details and fastening system are engineered according to approved
            project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}