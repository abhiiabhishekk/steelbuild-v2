"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AirVent,
  BadgeCheck,
  CloudRain,
  ShieldCheck,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Wind,
    title: "Controlled Airflow",
    description:
      "Fixed aerodynamic louver blades provide reliable natural air intake and exhaust while maintaining consistent airflow through industrial wall openings.",
  },
  {
    icon: CloudRain,
    title: "Weather Resistance",
    description:
      "Rain-resistant blade profiles and integrated drainage paths help minimize water penetration during adverse weather conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Building Protection",
    description:
      "Bird mesh, insect screens and protective blade geometry help reduce the entry of birds, insects and airborne debris.",
  },
  {
    icon: AirVent,
    title: "Integrated Ventilation",
    description:
      "Industrial ventilation louvers are engineered as functional airflow systems integrated within the building façade rather than decorative architectural elements.",
  },
];

export default function LouversOverview() {
  return (
    <section
      id="louvers-overview"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Visual */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[38px] sm:p-5 md:p-6">
              {/* Background Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[30px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] min-[390px]:aspect-[4/5] sm:rounded-[24px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/louvers/louvers-overview-v3.jpg"
                    alt="Industrial ventilation louvers integrated into wall cladding"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information Box */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-20
                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      min-[390px]:right-auto
                      min-[390px]:max-w-[82%]

                      sm:left-5
                      sm:top-5
                      sm:max-w-[360px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Ventilation
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Weather Louvers
                    </p>
                  </div>

                  {/* Bottom Image Content */}

                  <div className="absolute bottom-4 left-4 right-4 z-20 min-[390px]:bottom-5 sm:bottom-7 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Engineered Airflow
                    </p>

                    <h3 className="mt-1.5 max-w-[500px] text-[20px] font-black leading-[1.08] tracking-[-0.025em] text-white min-[390px]:text-[22px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Reliable Ventilation
                      <span className="block">
                        With Weather Protection
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
                -mt-5
                mx-3
                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4
                shadow-[0_28px_80px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:mx-6
                sm:rounded-[28px]
                sm:p-6

                md:mx-8
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <AirVent size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-[1.35] tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Functional Ventilation Assembly
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.5] tracking-[-0.01em] text-primary-blue min-[390px]:text-sm sm:text-base sm:leading-6">
                    Louver blades, perimeter frames, drainage paths, bird mesh,
                    insect screens and façade flashings work together to
                    provide controlled airflow while helping restrict rain and
                    debris entry.
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
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              <AirVent size={15} />
              Industrial Louver Overview
            </span>

            <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px]">
              Functional Ventilation
              <span className="block">
                Integrated Into the Building Façade
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Industrial Louvers are engineered ventilation
              openings integrated within wall cladding systems. Their fixed
              blade geometry supports natural or mechanical airflow while
              helping limit rain, birds, insects and airborne debris from
              entering the building.
            </p>

            {/* Feature Cards */}

            <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
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
                    className="group rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-6 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
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
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-3.5 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:h-6 sm:w-6"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final louver size, blade profile, free-area requirement, frame
            depth, drainage arrangement, screen type, material specification
            and façade-support details are developed according to airflow,
            weather exposure, equipment ventilation and project-specific
            requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}