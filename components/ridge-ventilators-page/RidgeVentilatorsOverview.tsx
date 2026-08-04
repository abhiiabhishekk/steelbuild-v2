"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  ThermometerSun,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Wind,
    title: "Continuous Natural Ventilation",
    description:
      "Provides uninterrupted passive airflow along the full roof ridge without moving mechanical parts.",
  },
  {
    icon: ThermometerSun,
    title: "Efficient Heat Extraction",
    description:
      "Allows accumulated hot air to escape naturally, improving indoor thermal comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Weather-Protected Design",
    description:
      "Engineered ridge construction minimizes rain ingress while maintaining continuous ventilation.",
  },
];

export default function RidgeVentilatorsOverview() {
  return (
    <section
      id="ridge-ventilators-overview"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <div className="grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative pb-24"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">

                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">

                  <Image
                    src="/images/products/ridge-ventilators/ridge-ventilators-overview.jpg"
                    alt="Continuous ridge ventilator integrated with industrial metal roofing"
                    fill
                    sizes="(max-width:1280px)100vw,45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">

                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Continuous Ridge Ventilation
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Passive Roof Air Extraction
                    </p>

                  </div>

                  <div className="absolute bottom-7 left-5 right-5">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Engineered Ventilation
                    </p>

                    <h3 className="mt-2 text-[28px] font-black leading-[1.12] text-white">
                      Continuous Airflow
                      <span className="block">
                        Across Industrial Roofs
                      </span>
                    </h3>

                  </div>

                </div>

              </div>
            </div>

                        {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Wind size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Passive Ventilation Technology
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Continuous ridge ventilation uses the natural upward
                    movement of hot air to improve airflow across large
                    industrial buildings without rotary equipment or
                    electrical power.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              <BadgeCheck size={15} />
              Ridge Ventilator Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue lg:text-[56px]">
              Continuous Ridge
              <span className="block">
                Ventilation for
              </span>
              <span className="block">
                Industrial Buildings
              </span>
            </h2>

            <p className="mt-7 text-lg font-medium leading-8 text-gray-600">
              Steelbuild Ridge Ventilators provide a continuous passive
              ventilation opening along the roof ridge, allowing accumulated
              hot air to escape naturally while maintaining coordinated
              weather protection across the roofing system.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex items-start gap-5 rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}

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
            Final ridge ventilator width, opening size, weather baffle,
            support curb, flashing arrangement and ventilation capacity are
            selected according to roof geometry, building volume, indoor heat
            load and approved engineering requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}