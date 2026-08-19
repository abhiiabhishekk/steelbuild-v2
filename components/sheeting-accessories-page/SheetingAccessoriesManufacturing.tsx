"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Hammer,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    title: "Precision Sheet-Metal Fabrication",
    description:
      "Coated steel sheets are accurately cut, formed and bent into ridge caps, flashings, trims, closures and custom transition profiles.",
    icon: Layers3,
  },
  {
    title: "Accessory Forming & Assembly",
    description:
      "Press brakes, roll-forming equipment and controlled fabrication processes produce consistent accessory geometry and clean finished edges.",
    icon: Hammer,
  },
  {
    title: "Quality Inspection & Dispatch",
    description:
      "Finished accessories are inspected for dimensions, bend angles, profile accuracy, coating condition and project-specific completeness before packaging.",
    icon: ShieldCheck,
  },
];

export default function SheetingAccessoriesManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 sm:gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* ========================================================= */}
          {/* LEFT VISUAL */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[34px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Gradient Background */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* ===================================================== */}
              {/* IMAGE CARD */}
              {/* ===================================================== */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2.5 sm:rounded-[27px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[19px] sm:aspect-[5/4] sm:rounded-[22px] md:rounded-[24px]">
                  <Image
                    src="/images/products/sheeting-accessories/sheeting-accessories-manufacturing.jpg"
                    alt="Industrial manufacturing of roofing and wall-cladding accessories"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/95 via-primary-blue/10 to-transparent" />

                  {/* ================================================= */}
                  {/* TOP INFORMATION BADGE */}
                  {/* ================================================= */}

                  <div className="absolute left-3 right-3 top-3 rounded-[14px] border border-white/15 bg-primary-blue/95 px-4 py-3 backdrop-blur-md sm:left-5 sm:right-auto sm:top-5 sm:max-w-[84%] sm:rounded-[18px] sm:px-5 sm:py-4">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.17em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.22em]">
                      Accessory Fabrication
                    </p>

                    <p className="mt-1 text-[11px] font-black leading-[1.35] text-white min-[400px]:text-xs sm:text-sm sm:leading-5">
                      Precision Cutting, Forming &amp; Inspection
                    </p>
                  </div>

                  {/* ================================================= */}
                  {/* BOTTOM IMAGE CONTENT */}
                  {/* ================================================= */}

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-5 sm:right-5">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.16em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.2em]">
                      Controlled Manufacturing
                    </p>

                    <h3 className="mt-1.5 max-w-[96%] text-[20px] font-black leading-[1.06] tracking-[-0.035em] text-white min-[400px]:text-[22px] sm:mt-2 sm:text-2xl sm:leading-[1.12] md:text-[28px]">
                      Precision Accessories
                      <span className="block">
                        Consistent Project Quality
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* FLOATING QUALITY CARD */}
            {/* ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative z-20 mx-3 -mt-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_28px_80px_rgba(27,63,104,0.14)] sm:mx-6 sm:-mt-5 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-red text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <BadgeCheck size={21} className="sm:hidden" />

                  <BadgeCheck
                    size={24}
                    className="hidden sm:block"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-4 tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Precision Manufacturing Quality
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.7] text-primary-blue sm:text-sm sm:leading-6 md:text-base">
                    Flashings, trims, ridge caps, closures and custom
                    accessories are manufactured with controlled forming,
                    dimensional accuracy and premium finishing to ensure
                    consistent project quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT CONTENT */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              <Factory size={15} />
              Sheeting Accessories Manufacturing
            </span>

            <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-tight">
              Precision Manufacturing
              <span className="block">
                for Reliable Building Details
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Sheeting Accessories are manufactured through
              precision sheet metal processing, controlled forming,
              dimensional inspection and quality finishing to ensure dependable
              roof and wall integration across every project.
            </p>

            {/* ======================================================= */}
            {/* MANUFACTURING STEPS */}
            {/* ======================================================= */}

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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Icon size={21} className="sm:hidden" />

                        <Icon
                          size={24}
                          className="hidden sm:block"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-6 text-gray-500 sm:mt-3 sm:leading-7">
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

        {/* =========================================================== */}
        {/* BOTTOM ENGINEERING NOTE */}
        {/* =========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 max-w-5xl overflow-hidden rounded-[24px] bg-primary-blue px-5 py-6 shadow-[0_28px_80px_rgba(27,63,104,0.2)] sm:mt-16 sm:rounded-[30px] sm:px-8 sm:py-8 md:px-10"
        >
          {/* Background Gradient */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          {/* Grid */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-red text-white sm:h-14 sm:w-14 sm:rounded-2xl">
              <BadgeCheck size={22} className="sm:hidden" />

              <BadgeCheck
                size={26}
                className="hidden sm:block"
              />
            </div>

            <div>
              <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                Precision Fabrication Ensures Reliable Fitment
              </h3>

              <p className="mt-2 text-[13px] font-medium leading-6 text-white/70 sm:text-sm sm:leading-7">
                Flashing geometry, trim profiles, bend accuracy, material
                thickness, protective coatings, dimensional tolerances and
                finishing quality are maintained according to approved
                fabrication drawings and project specifications.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}