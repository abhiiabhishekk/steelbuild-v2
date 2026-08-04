"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Cog,
  Factory,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    icon: Cog,
    title: "Precision Sheet-Metal Fabrication",
    description:
      "Weather hoods, baffles, support curbs and flashing sections are produced using controlled cutting, bending and forming processes.",
  },
  {
    icon: Wrench,
    title: "Controlled Component Assembly",
    description:
      "Fabricated sections are aligned and assembled to maintain continuous geometry, structural stability and weather protection.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Finished sections are checked for dimensions, profile accuracy, material finish, joint quality and installation readiness.",
  },
];

export default function RidgeVentilatorsManufacturing() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={15} />
            Ridge Ventilator Manufacturing
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Precision Fabrication for
            <span className="block">
              Continuous Roof Ventilation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild manufactures ridge ventilator sections using controlled
            sheet-metal fabrication, accurate forming and quality-focused
            assembly to support reliable ventilation and long-term roof
            performance.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Manufacturing Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative pb-24"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/ridge-ventilators/ridge-ventilators-manufacturing.jpg"
                    alt="Continuous ridge ventilator manufacturing inside a modern sheet-metal fabrication facility"
                    fill
                    sizes="(max-width: 1280px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[82%] rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Sheet-Metal Fabrication
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Ridge Ventilator Production & Assembly
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Engineered Manufacturing
                    </p>

                    <h3 className="mt-2 text-[28px] font-black leading-[1.12] text-white">
                      Precision in Every
                      <span className="block">
                        Fabricated Section
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
                  <BadgeCheck size={24} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Quality Manufacturing
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Every fabricated ridge ventilator section is inspected for
                    dimensional accuracy, structural integrity, profile
                    consistency and installation readiness.
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
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              Manufacturing Process
            </p>

            <h3 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue">
              Precision Manufacturing
              <span className="block">
                From Fabrication to Inspection
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every ridge ventilator system is manufactured through controlled
              sheet-metal processing, precision forming and systematic quality
              inspection to ensure reliable long-term roof performance.
            </p>

            <div className="mt-10 space-y-5">
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
                    className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h4 className="text-2xl font-black tracking-[-0.03em] text-primary-blue">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
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

        {/* Bottom Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-16 overflow-hidden rounded-[34px] bg-primary-blue px-8 py-9 shadow-[0_28px_80px_rgba(27,63,104,0.18)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <BadgeCheck size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Precision Manufacturing Ensures Reliable Roof Ventilation
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Fabrication accuracy, profile consistency, flashing quality,
                support-member alignment and final inspection collectively
                ensure dependable passive roof ventilation performance.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}