"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    title: "Weather Protection",
    description:
      "Engineered wall cladding protects industrial buildings from rain, wind and harsh environmental conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Architectural Appearance",
    description:
      "Premium panel profiles and coordinated façade detailing enhance the visual identity of modern steel buildings.",
    icon: Building2,
  },
  {
    title: "Long Service Life",
    description:
      "Manufactured from high-quality coated steel for corrosion resistance, durability and low maintenance.",
    icon: BadgeCheck,
  },
];

export default function WallCladdingOverview() {
  return (
    <section
      id="wall-cladding-overview"
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-14">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-12 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-14 md:rounded-[38px] md:p-6 md:pb-16">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/wall-cladding/wall-cladding-overview.jpg"
                    alt="Industrial Wall Cladding System"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-105"
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
                      Building Envelope
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Industrial Wall Cladding
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div className="absolute bottom-4 left-4 right-4 z-10 min-[390px]:bottom-5 sm:bottom-6 sm:left-5 sm:right-5 md:bottom-7">
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Cladding
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[19px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[20px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Durable Protection
                      <span className="block">Premium Appearance</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordination Card */}

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
                sm:mx-5
                sm:rounded-[28px]
                sm:p-6

                md:-mt-10
                md:mx-8
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)] sm:h-14 sm:w-14">
                  <Layers3 size={22} className="sm:hidden" />

                  <Layers3 size={24} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Façade System
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Cladding panels, sealed joints, flashings and supporting
                    wall girts work together to create a durable and
                    coordinated industrial building envelope.
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

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:text-xs sm:tracking-[0.28em]">
              <Layers3 size={15} />
              Wall Cladding Overview
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px]">
              Engineered Industrial
              <span className="block">Wall Cladding Systems</span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Wall Cladding Systems form the external building
              envelope of modern industrial and commercial steel buildings.
              The system combines profiled metal panels, flashings, sealed
              joints and structural supports to deliver weather protection,
              architectural appearance and long-term façade performance.
            </p>

            {/* Feature Cards */}

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
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

        {/* Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-3.5 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="max-w-4xl text-sm font-bold leading-7 text-primary-blue">
            Final cladding profile, panel thickness, coating system, joint
            arrangement and flashing details are coordinated with fastener
            spacing, insulation interfaces and wall-girt support layouts
            according to approved engineering drawings and project-specific
            requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}