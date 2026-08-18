"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Cog,
  Factory,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    title: "Precision Component Fabrication",
    description:
      "Turbo ventilator components are manufactured using precision metal-forming processes to achieve accurate geometry and dimensional consistency.",
    icon: Cog,
  },
  {
    title: "Quality-Controlled Assembly",
    description:
      "Turbine heads, bearings, shafts and base assemblies are carefully integrated to ensure smooth wind-driven rotation and dependable performance.",
    icon: Factory,
  },
  {
    title: "Performance Verification",
    description:
      "Every ventilator undergoes inspection for dimensional accuracy, bearing movement, structural integrity and overall manufacturing quality.",
    icon: ShieldCheck,
  },
];

export default function TurboVentilatorsManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Factory size={15} />
            Manufacturing Excellence
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px]">
            Precision Manufacturing
            <span className="block">for Reliable Ventilation</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Steelbuild manufactures industrial turbo ventilators using
            precision fabrication, controlled assembly and stringent quality
            inspection to ensure dependable long-term performance.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-12 grid gap-10 sm:mt-14 sm:gap-12 lg:mt-16 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Manufacturing Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-12 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-14 md:rounded-[38px] md:p-6 md:pb-16">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[24px]">
                  <Image
                    src="/images/products/turbo-ventilators/turbo-ventilators-manufacturing.jpg"
                    alt="Industrial turbo ventilator manufacturing facility"
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
                      sm:max-w-[340px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Manufacturing
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Precision Fabrication & Assembly
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
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Engineered Manufacturing
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[19px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[20px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Quality
                      <span className="block">From Every Component</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quality Card */}

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
                md:p-7
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <CheckCircle2 size={22} className="sm:hidden" />

                  <CheckCircle2 size={24} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Controlled Quality
                  </p>

                  <p className="mt-1.5 text-[15px] font-black leading-[1.42] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Every turbine head, shaft, bearing and base assembly is
                    checked for dimensional accuracy, smooth movement and
                    reliable long-term operation.
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
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:text-xs sm:tracking-[0.28em]">
              Manufacturing Process
            </p>

            <h3 className="mt-4 text-[32px] font-black leading-[1.1] tracking-[-0.04em] text-primary-blue sm:text-4xl lg:text-[46px]">
              Built for Smooth Rotation,
              <span className="block">Durability and Performance</span>
            </h3>

            <p className="mt-5 text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              The manufacturing process focuses on accurate turbine geometry,
              balanced assembly, dependable bearing movement and
              corrosion-resistant construction suitable for demanding
              industrial roof conditions.
            </p>

            {/* Manufacturing Steps */}

            <div className="mt-9 space-y-4 sm:mt-10 sm:space-y-5">
              {manufacturingSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
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
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                        <Icon size={22} className="sm:hidden" />

                        <Icon size={24} className="hidden sm:block" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:text-2xl">
                          {item.title}
                        </h4>

                        <p className="mt-2.5 text-sm font-medium leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                          {item.description}
                        </p>
                      </div>
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 overflow-hidden rounded-[28px] bg-primary-blue px-5 py-7 shadow-[0_28px_80px_rgba(27,63,104,0.18)] sm:mt-16 sm:rounded-[34px] sm:px-8 sm:py-9 md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
              <BadgeCheck size={22} className="sm:hidden" />

              <BadgeCheck size={24} className="hidden sm:block" />
            </div>

            <div>
              <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                Manufacturing Quality Supports Reliable Roof Ventilation
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Material selection, turbine geometry, bearing performance,
                balanced rotation, base fabrication and finished-product
                inspection are coordinated according to approved manufacturing
                requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}