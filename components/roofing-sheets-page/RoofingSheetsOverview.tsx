"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Weather Protection",
    description:
      "Engineered roof profiles provide reliable protection against rain, wind and changing environmental conditions.",
  },
  {
    icon: Building2,
    title: "Structural Performance",
    description:
      "Designed to work efficiently with roof purlins and primary steel framing for long-span industrial buildings.",
  },
  {
    icon: CloudRain,
    title: "Efficient Water Drainage",
    description:
      "Profile geometry and roof accessories help ensure controlled rainwater drainage.",
  },
];

export default function RoofingSheetsOverview() {
  return (
    <section
      id="roofing-sheets-overview"
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <BadgeCheck size={15} />
            Roofing Sheet Overview
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-primary-blue sm:mt-7 md:text-5xl lg:text-[58px]">
            Reliable Roofing
            <span className="block">Engineered for Modern</span>
            <span className="block">Industrial Buildings</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Steelbuild Roofing Sheets are engineered to deliver dependable
            weather protection, structural stability and long-term performance
            for industrial, commercial and warehouse applications.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[1fr_1fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-28 sm:pb-28 md:pb-24 lg:pb-20"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 md:rounded-[38px] md:p-6">
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
                    src="/images/products/roofing-sheets/roofing-sheets-overview.jpg"
                    alt="Industrial roofing sheet system installed on a modern steel building"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 50vw"
                    className="object-cover object-[48%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
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
                      sm:max-w-[320px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Roofing System
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.25] text-white sm:text-sm sm:leading-5">
                      Profiled Metal Roofing Sheets
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
                      Weather Protection
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

                        md:text-[30px]
                      "
                    >
                      Engineered Roofing
                      <span className="block">
                        Built for Long-Term Performance
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Performance Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                absolute
                -bottom-10
                left-3
                right-3
                z-20

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

                min-[390px]:-bottom-9
                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-7
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-5
                md:left-8
                md:right-8

                lg:-bottom-4
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <ShieldCheck
                    size={22}
                    className="sm:hidden"
                  />

                  <ShieldCheck
                    size={24}
                    className="hidden sm:block"
                  />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Reliable Roofing Performance
                  </p>

                  <p className="mt-1.5 text-[16px] font-black leading-[1.35] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Roofing sheets, fasteners, flashings, drainage and
                    structural supports operate together as one coordinated
                    roofing system.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Benefit Cards */}

          <div className="space-y-4 sm:space-y-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
                    hover:border-primary-red/20
                    hover:shadow-[0_28px_75px_rgba(27,63,104,0.11)]

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
                      <h3 className="text-xl font-black leading-tight tracking-[-0.025em] text-primary-blue sm:text-2xl sm:tracking-[-0.03em]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="
            relative
            z-10
            mx-auto
            mt-14
            flex
            max-w-5xl
            items-start
            gap-4
            border-l-4
            border-primary-red
            bg-[#f8fafc]
            px-5
            py-5
            shadow-[0_16px_42px_rgba(27,63,104,0.06)]

            sm:px-7
            sm:py-6

            md:mt-16
            md:px-8
            md:py-7
          "
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:h-6 sm:w-6"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final roofing sheet profile selection, coating specification, sheet
            thickness, fastener arrangement, insulation system and drainage
            details are coordinated according to approved engineering drawings
            and project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}