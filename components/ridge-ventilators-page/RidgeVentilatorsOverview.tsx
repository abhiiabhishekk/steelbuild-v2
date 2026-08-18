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
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-[130px] sm:gap-24 md:gap-20 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-14">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-24 sm:pb-24 md:pb-20"
          >
            {/* Main Blue Frame */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px]">
                  <Image
                    src="/images/products/ridge-ventilators/ridge-ventilators-overview.jpg"
                    alt="Continuous ridge ventilator integrated with industrial metal roofing"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-[48%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
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
                      z-10

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
                      sm:max-w-[330px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Continuous Ridge Ventilation
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Passive Roof Air Extraction
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-10

                      min-[390px]:bottom-5

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Ventilation
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-[520px]

                        text-[18px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[28px]
                      "
                    >
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
              className="
                absolute
                -bottom-26
                left-3
                right-3
                z-20

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-5
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-10
                md:left-8
                md:right-8
                md:p-7
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <Wind size={22} className="sm:hidden" />

                  <Wind size={24} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Passive Ventilation Technology
                  </p>

                  <p className="mt-1.5 text-[15px] font-black leading-[1.42] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
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
  viewport={{ once: true, margin: "-90px" }}
  transition={{ duration: 0.65 }}
  className="relative z-10"
>
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em] text-primary-red sm:tracking-[0.28em]">
              <BadgeCheck size={15} />
              Ridge Ventilator Overview
            </span>

            {/* Heading */}

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[56px]">
              Continuous Ridge
              <span className="block">
                Ventilation for
              </span>
              <span className="block">
                Industrial Buildings
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600 sm:mt-7">
              Steelbuild Ridge Ventilators provide a continuous passive
              ventilation opening along the roof ridge, allowing accumulated
              hot air to escape naturally while maintaining coordinated
              weather protection across the roofing system.
            </p>

            {/* Feature Cards */}

            <div className="mt-9 space-y-4 sm:mt-10 sm:space-y-5">
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
                    className="
                      group
                      flex
                      items-start
                      gap-4

                      rounded-[24px]
                      border
                      border-gray-200
                      bg-white
                      p-5

                      shadow-[0_18px_55px_rgba(27,63,104,0.07)]

                      transition-all
                      duration-500

                      hover:-translate-y-1
                      hover:border-primary-red/25
                      hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]

                      sm:gap-5
                      sm:rounded-[28px]
                      sm:p-7
                    "
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={22} className="sm:hidden" />

                      <Icon size={24} className="hidden sm:block" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[19px] font-black leading-tight tracking-[-0.025em] text-primary-blue sm:text-2xl sm:tracking-[-0.03em]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-500 sm:mt-3 sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final ridge ventilator width, opening size, weather baffle, support
            curb, flashing arrangement and ventilation capacity are selected
            according to roof geometry, building volume, indoor heat load and
            approved engineering requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}