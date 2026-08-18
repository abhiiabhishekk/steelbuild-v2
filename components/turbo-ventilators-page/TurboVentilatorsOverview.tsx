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
    title: "Wind-Powered Operation",
    description:
      "Rotary turbine heads spin naturally using available wind energy without external power.",
  },
  {
    icon: ThermometerSun,
    title: "Continuous Heat Removal",
    description:
      "Helps exhaust accumulated hot air and maintain healthier indoor working conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial Durability",
    description:
      "Manufactured using corrosion-resistant aluminium or stainless steel for long service life.",
  },
];

export default function TurboVentilatorsOverview() {
  return (
    <section
      id="turbo-ventilators-overview"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Image */}

<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
  className="relative xl:pb-24"
>
  {/* Main Blue Panel */}

  <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
    {/* Gradient */}

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

    {/* Engineering Grid */}

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

    {/* Red Glow */}

    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

    {/* Image Frame */}

    <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
      <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px]">
        <Image
          src="/images/products/turbo-ventilators/turbo-ventilators-overview.jpg"
          alt="Industrial turbo ventilators integrated with a modern profiled metal roofing system"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
          className="object-cover object-[50%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
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
            Wind-Driven Roof Ventilation
          </p>

          <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
            Industrial Turbo Ventilator Integration
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
            Natural Air Extraction
          </p>

          <h3
            className="
              mt-1.5
              max-w-lg

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
            Continuous Ventilation

            <span className="block">
              Without Electrical Power
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
      relative
      z-20

      -mt-7
      mx-3

      rounded-[24px]
      border
      border-gray-200
      bg-white
      p-4

      shadow-[0_24px_75px_rgba(27,63,104,0.14)]

      min-[390px]:mx-4
      min-[390px]:p-5

      sm:-mt-8
      sm:mx-5
      sm:rounded-[28px]
      sm:p-6

      md:-mt-10
      md:mx-8

      xl:absolute
      xl:-bottom-6
      xl:left-8
      xl:right-8
      xl:mx-0
      xl:mt-0
    "
  >
    <div className="flex items-start gap-3.5 sm:gap-4">
      {/* Icon */}

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
        <Wind size={22} className="sm:hidden" />

        <Wind size={24} className="hidden sm:block" />
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
          Passive Ventilation Technology
        </p>

        <p className="mt-1.5 text-[15px] font-black leading-[1.42] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
          Industrial turbo ventilators rotate naturally using wind energy to
          extract trapped hot air and improve continuous airflow throughout
          large industrial facilities.
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              <BadgeCheck size={15} />
              Turbo Ventilator Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Wind-Driven
              <span className="block">
                Industrial Roof
              </span>
              <span className="block">
                Ventilation
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-gray-600">
              Steelbuild Turbo Ventilators are engineered roof-mounted rotary
              ventilators that use natural wind energy to continuously remove
              hot air, humidity and stale air from industrial buildings. Their
              passive operation improves indoor comfort, reduces heat build-up
              and supports energy-efficient ventilation without requiring
              electrical power.
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
            Final turbo ventilator quantity, spacing, turbine diameter, roof
            penetration, base flashing and ventilation capacity are selected
            according to building volume, indoor heat load, roof geometry and
            approved project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}