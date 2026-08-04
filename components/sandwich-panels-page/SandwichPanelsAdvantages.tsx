"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Flame,
  Layers3,
  ShieldCheck,
  Snowflake,
  Volume2,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Snowflake,
    title: "Excellent Thermal Insulation",
    description:
      "Continuous PIR, PUF or Rockwool cores significantly reduce heat transfer, improving energy efficiency and indoor comfort.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Superior Weather Protection",
    description:
      "Engineered joints, durable metal skins and precision flashings create a reliable weather-resistant building envelope.",
  },
  {
    number: "03",
    icon: Flame,
    title: "Fire Performance Options",
    description:
      "Rockwool core sandwich panels provide enhanced fire performance for projects requiring higher fire resistance.",
  },
  {
    number: "04",
    icon: Volume2,
    title: "Acoustic Performance",
    description:
      "Insulated panel construction helps reduce external noise transmission and improves interior acoustic comfort.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Factory-Engineered Construction",
    description:
      "Outer metal skin, insulation core and inner metal skin are permanently bonded to create one integrated structural panel.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Fast Installation & Low Maintenance",
    description:
      "Large prefabricated insulated panels enable faster installation while providing long-term durability with minimal maintenance.",
  },
];

export default function SandwichPanelsAdvantages() {
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
            Sandwich Panel Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Engineered Performance
            <span className="block">
              Beyond Conventional Cladding
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Unlike conventional single-skin metal cladding, Steelbuild
            Sandwich Panels integrate double metal skins with high-performance
            insulation cores to deliver thermal, acoustic and weather
            performance within one engineered building system.
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
            Panel thickness, insulation-core type (PIR, PUF or Rockwool),
            metal-skin specification, coating system and joint configuration
            are selected according to thermal, acoustic, structural and
            fire-performance requirements for each project.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}