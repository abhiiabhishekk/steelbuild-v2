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

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Major Components of a
            <span className="block">
              Ridge Ventilation System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Every ridge ventilator consists of precisely engineered weather
            hoods, ventilation openings, flashing systems and structural
            supports working together for continuous passive ventilation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 sm:mt-14 sm:gap-12 lg:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start xl:gap-12">

          {/* Left Engineering Panel */}

<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
  className="relative"
>
  {/* Main Blue Panel */}

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
          src="/images/products/ridge-ventilators/ridge-ventilators-components.jpg"
          alt="Major components of an industrial ridge ventilator"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
          className="object-cover object-[50%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
        />

        {/* Overlay */}

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
            Engineered Roof System
          </p>

          <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
            Continuous Ridge Assembly
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
            System Components
          </p>

          <h3
            className="
              mt-1.5
              max-w-lg
              text-[19px]
              font-black
              leading-[1.12]
              tracking-[-0.025em]
              text-white

              min-[390px]:text-[20px]

              sm:mt-2
              sm:text-2xl

              md:text-[28px]
            "
          >
            Engineered
            <span className="block">
              Continuous Ventilation
            </span>
          </h3>
        </div>
      </div>
    </div>

    {/* System Layers */}

    <div className="relative z-10 mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
      {systemLayers.map((item, index) => (
        <motion.div
          key={item.number}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          className="rounded-[18px] border border-white/10 bg-white/[0.09] px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4"
        >
          <div className="flex items-start gap-3.5 sm:gap-4">
            <span className="mt-0.5 shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
              {item.number}
            </span>

            <div className="min-w-0">
              <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                {item.title}
              </p>

              <p className="mt-1 text-[11px] font-medium leading-5 text-white/60 sm:text-xs">
                {item.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Floating Coordination Card */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55, delay: 0.18 }}
  className="
    relative
    z-20

    -mt-6
    mx-3

    rounded-[24px]
    border
    border-gray-200
    bg-white
    p-4

    shadow-[0_24px_75px_rgba(27,63,104,0.14)]

    min-[390px]:mx-4
    min-[390px]:p-5

    sm:-mt-7
    sm:mx-5
    sm:rounded-[28px]
    sm:p-6

    md:-mt-8
    md:mx-8
    md:p-7

    xl:-mt-3
  "
>
  <div className="flex items-start gap-3.5 sm:gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
      <Wind size={22} className="sm:hidden" />
      <Wind size={24} className="hidden sm:block" />
    </div>

    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
        Ventilation System Coordination
      </p>

      <p className="mt-1.5 text-[15px] font-black leading-[1.42] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
        Weather hoods, ventilation openings, baffles, flashings and
        structural supports work together as one complete ridge
        ventilation system.
      </p>
    </div>
  </div>
</motion.div>
</motion.div>

          {/* Right Component Cards */}

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
        className="
          group
          relative
          overflow-hidden

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

          sm:rounded-[28px]
          sm:p-7
        "
      >
        {/* Background Number */}

        <span className="pointer-events-none absolute right-4 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045] sm:right-5 sm:text-[48px]">
          {item.number}
        </span>

        {/* Icon */}

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
          <Icon size={22} className="sm:hidden" />
          <Icon size={24} className="hidden sm:block" />
        </div>

        {/* Eyebrow */}

        <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
          Ventilator Component {item.number}
        </p>

        {/* Title */}

        <h3 className="mt-2.5 pr-8 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-3 sm:text-2xl sm:tracking-[-0.035em]">
          {item.title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm font-medium leading-6 text-gray-500 sm:mt-4 sm:leading-7">
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