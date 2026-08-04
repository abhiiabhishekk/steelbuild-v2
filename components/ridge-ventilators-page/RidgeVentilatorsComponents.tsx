"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
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
    title: "Continuous Ventilation Opening",
    description:
      "Provides uninterrupted airflow along the entire roof ridge for effective passive ventilation.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Weather Hood",
    description:
      "Engineered hood profile protects the ventilation opening from rain while maintaining airflow.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Weather Baffles",
    description:
      "Internal baffles improve airflow while reducing water ingress during adverse weather.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Base Flashing System",
    description:
      "Precision flashings integrate the ridge ventilator with profiled roofing sheets for weather-tight installation.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Structural Support Frame",
    description:
      "Engineered support members securely anchor the ridge ventilator to the roof structure.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Fasteners & Seals",
    description:
      "Approved fasteners and sealing systems ensure durable, leak-resistant roof integration.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Weather Hood",
    text: "Continuous protective roof cover",
  },
  {
    number: "02",
    title: "Ventilation Opening",
    text: "Full-length passive airflow path",
  },
  {
    number: "03",
    title: "Weather Baffles",
    text: "Rain protection with airflow control",
  },
  {
    number: "04",
    title: "Base Flashing",
    text: "Weatherproof roof integration",
  },
  {
    number: "05",
    title: "Roof Support",
    text: "Roof sheets, purlins and rafters",
  },
];

export default function RidgeVentilatorsComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Layers3 size={15} />
            Ridge Ventilator Components
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue lg:text-[58px]">
            Major Components of a
            <span className="block">
              Ridge Ventilation System
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every ridge ventilator consists of precisely engineered weather
            hoods, ventilation openings, flashing systems and structural
            supports working together for continuous passive ventilation.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">

          {/* Left Engineering Panel */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative pb-28"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">

                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">

                  <Image
                    src="/images/products/ridge-ventilators/ridge-ventilators-components.jpg"
                    alt="Major components of an industrial ridge ventilator"
                    fill
                    sizes="(max-width:1280px)100vw,45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">

                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Engineered Roof System
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Continuous Ridge Assembly
                    </p>

                  </div>

                  <div className="absolute bottom-7 left-5 right-5">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      System Components
                    </p>

                    <h3 className="mt-2 text-[28px] font-black leading-[1.12] text-white">
                      Engineered
                      <span className="block">
                        Continuous Ventilation
                      </span>
                    </h3>

                  </div>

                </div>

              </div>

              <div className="relative z-10 mt-5 space-y-3">
                {systemLayers.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[18px] border border-white/10 bg-white/10 px-5 py-4"
                  >
                    <div className="flex items-start gap-4">

                      <span className="text-xs font-black text-primary-red">
                        {item.number}
                      </span>

                      <div>
                        <p className="text-sm font-black text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/65">
                          {item.text}
                        </p>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

                        {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="absolute -bottom-4 left-4 right-4 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Wind size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Ventilation System Coordination
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Weather hoods, ventilation openings, baffles, flashings and
                    structural supports work together as one complete ridge
                    ventilation system.
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
                    Ventilator Component {item.number}
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
            Final weather-hood profile, continuous opening size, baffle
            arrangement, flashing details, fastener spacing, insulation
            interface and structural support configuration are developed
            according to approved engineering drawings and project
            requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}