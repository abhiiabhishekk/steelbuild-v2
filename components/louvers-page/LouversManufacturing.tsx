"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AirVent,
  BadgeCheck,
  Factory,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    title: "Blade Forming & Fabrication",
    description:
      "Aluminium or galvanized steel sections are precision formed into engineered louver blades with consistent geometry and drainage characteristics.",
    icon: Layers3,
  },
  {
    title: "Frame & Screen Assembly",
    description:
      "Perimeter frames, blades, bird mesh, insect screens and drainage components are assembled according to approved fabrication details.",
    icon: AirVent,
  },
  {
    title: "Quality Inspection & Dispatch",
    description:
      "Completed louver assemblies are inspected for blade alignment, frame accuracy, surface finish, drainage paths and overall fabrication quality.",
    icon: ShieldCheck,
  },
];

export default function LouversManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[38px] sm:p-5 md:p-6">
              {/* Gradient Background */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Grid Pattern */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Wrapper */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[30px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] min-[390px]:aspect-[4/5] sm:rounded-[24px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/louvers/louvers-manufacturing-v2.jpg"
                    alt="Industrial ventilation louver manufacturing and fabrication facility"
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
                      min-[390px]:max-w-[84%]

                      sm:left-5
                      sm:top-5
                      sm:max-w-[390px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Industrial Louver Fabrication
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Blades, Frames, Screens & Drainage Assembly
                    </p>
                  </div>

                  {/* Bottom Content */}

                  <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.14em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Precision Manufacturing
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[20px] font-black leading-[1.08] tracking-[-0.025em] text-white min-[390px]:text-[22px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Controlled Fabrication
                      <span className="block">
                        Reliable Ventilation Quality
                      </span>
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
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_28px_80px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-5 sm:mx-6 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <BadgeCheck size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-[1.35] tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Controlled Fabrication Quality
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.5] tracking-[-0.01em] text-primary-blue min-[390px]:text-sm sm:text-base sm:leading-6">
                    Blade geometry, frame dimensions, screen installation,
                    drainage paths, coating condition and overall assembly
                    quality are inspected before packaging and project
                    dispatch.
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
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              <Factory size={15} />
              Industrial Louver Manufacturing
            </span>

            <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px]">
              Precision Fabrication
              <span className="block">
                for Reliable Airflow Performance
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Industrial Louvers are manufactured through controlled
              blade forming, frame fabrication, screen assembly, drainage
              integration and systematic inspection to deliver consistent
              airflow, weather protection and long-term façade performance.
            </p>

            {/* Manufacturing Cards */}

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {manufacturingSteps.map((item, index) => {
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
                    className="group rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-black leading-[1.15] tracking-[-0.03em] text-primary-blue sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2.5 text-[13px] font-medium leading-6 text-gray-500 sm:mt-3 sm:text-sm sm:leading-7">
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

        {/* Bottom Manufacturing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[26px] bg-primary-blue px-5 py-6 shadow-[0_28px_80px_rgba(27,63,104,0.2)] sm:mt-16 sm:rounded-[30px] sm:px-8 sm:py-8 md:px-10"
        >
          {/* Gradient */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          {/* Grid */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
              <BadgeCheck size={24} />
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                Manufacturing Accuracy Supports Reliable Ventilation
              </h3>

              <p className="mt-2 text-[13px] font-medium leading-6 text-white/70 sm:text-sm sm:leading-7">
                Blade profile, frame squareness, screen fitment, drainage
                continuity, fastening quality, coating condition and packaging
                standards are controlled according to approved fabrication and
                project requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}