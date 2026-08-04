"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  BadgeCheck,
  PowerOff,
  ShieldCheck,
  ThermometerSun,
  Wind,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Wind,
    title: "Continuous Passive Ventilation",
    description:
      "Uses the natural stack effect to continuously remove accumulated hot air without mechanical equipment.",
  },
  {
    number: "02",
    icon: PowerOff,
    title: "No Electrical Power",
    description:
      "Operates entirely without motors, electricity or moving mechanical assemblies.",
  },
  {
    number: "03",
    icon: ArrowLeftRight,
    title: "Uniform Roof Ventilation",
    description:
      "Provides continuous ventilation along the full ridge instead of localized extraction points.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Weather Protection",
    description:
      "Integrated baffles and flashing help prevent rain ingress while maintaining airflow.",
  },
  {
    number: "05",
    icon: ThermometerSun,
    title: "Lower Indoor Temperature",
    description:
      "Helps reduce heat build-up beneath industrial roofing systems.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Simple engineered construction offers dependable long-term performance with minimal maintenance.",
  },
];

export default function RidgeVentilatorsAdvantages() {
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
            Passive Ventilation Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Continuous Airflow With
            <span className="block">
              Engineered Roof Ventilation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Ridge Ventilators deliver reliable passive ventilation
            by continuously exhausting hot air through the roof ridge,
            improving indoor comfort while maintaining weather protection and
            energy-efficient operation.
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
                  Ventilation Advantage {item.number}
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
            Final ridge ventilator width, continuous opening size, weather
            baffle configuration, flashing arrangement, insulation interface
            and ventilation capacity are engineered according to roof
            geometry, building volume and approved ventilation requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}