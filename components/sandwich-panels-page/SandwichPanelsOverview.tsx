"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Flame,
  Layers3,
  ShieldCheck,
  Snowflake,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Snowflake,
    title: "High Thermal Efficiency",
    description:
      "Continuous PIR, PUF or Rockwool insulation cores reduce heat transfer and improve indoor temperature control.",
  },
  {
    icon: Layers3,
    title: "Integrated Panel Construction",
    description:
      "Double pre-painted metal skins are permanently bonded to the insulation core as one factory-engineered panel.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Envelope Protection",
    description:
      "Sealed joints, protective skins and engineered flashings provide durable weather-resistant wall and roof systems.",
  },
  {
    icon: Flame,
    title: "Project-Specific Core Options",
    description:
      "Insulation cores are selected according to thermal, acoustic, fire-performance and building-use requirements.",
  },
];

export default function SandwichPanelsOverview() {
  return (
    <section
      id="sandwich-panels-overview"
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 sm:gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Frame */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-9 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-10 md:rounded-[38px] md:p-6 md:pb-11">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/sandwich-panels/sandwich-panels-overview.jpg"
                    alt="Insulated sandwich panel wall and roof system with double metal skins and a continuous insulation core"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
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
                      sm:max-w-[420px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Insulated Panel Construction
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Double Metal Skins + Continuous Insulation Core
                    </p>
                  </div>

                  {/* Bottom Image Content */}

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
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Engineered Building Envelope
                    </p>

                    <h3
                      className="
                        mt-1.5
                        max-w-[540px]

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
                      Thermal Protection
                      <span className="block">
                        Integrated Into Every Panel
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory-Engineered Panel Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="
                relative
                z-20

                -mt-8
                mx-3

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_28px_80px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:-mt-9
                sm:mx-6
                sm:rounded-[28px]
                sm:p-6

                md:-mt-10
                md:mx-8
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)] sm:h-14 sm:w-14">
                  <Layers3 size={21} className="sm:hidden" />

                  <Layers3 size={24} className="hidden sm:block" />
                </div>

                {/* Content */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Factory-Engineered Panel Assembly
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Outer metal skin, insulation core and inner metal skin are
                    permanently integrated into one panel, clearly
                    distinguishing sandwich panels from ordinary single-skin
                    cladding.
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
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              <Layers3 size={15} />
              Sandwich Panel Overview
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-5xl lg:text-[56px]">
              Factory-Engineered
              <span className="block">
                Insulated Building Panels
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Sandwich Panels combine an external metal skin, a
              continuous PIR, PUF or Rockwool insulation core and an internal
              metal skin into one integrated factory-manufactured panel. This
              construction provides thermal insulation, weather protection,
              structural stability and a clean finished surface for walls and
              roofs.
            </p>

            {/* Feature Cards */}

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group

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
                    {/* Icon */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={22} className="sm:hidden" />

                      <Icon size={24} className="hidden sm:block" />
                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-6 sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 text-sm font-medium leading-6 text-gray-500 sm:leading-7">
                      {item.description}
                    </p>
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
          className="
            relative
            z-10

            mx-auto
            mt-12
            flex
            max-w-5xl
            items-start
            gap-3.5

            border-l-4
            border-primary-red
            bg-[#f8fafc]

            px-5
            py-5

            shadow-[0_14px_40px_rgba(27,63,104,0.06)]

            sm:mt-16
            sm:gap-4
            sm:px-7
            sm:py-6

            md:px-9
          "
        >
          <BadgeCheck
            size={21}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final panel thickness, metal-skin specification, PIR, PUF or
            Rockwool core type, joint geometry, fastening system, flashing
            details and supporting wall-girt or roof-purlin layout are
            developed according to thermal, structural, fire-performance and
            project-specific requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}