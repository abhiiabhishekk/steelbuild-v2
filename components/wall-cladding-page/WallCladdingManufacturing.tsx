"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    title: "Precision Roll Forming",
    description:
      "Coated steel coils are accurately roll-formed into engineered wall cladding profiles with consistent dimensions.",
    icon: Layers3,
  },
  {
    title: "Quality Inspection",
    description:
      "Every panel is inspected for profile accuracy, coating quality, dimensional consistency and surface finish.",
    icon: ShieldCheck,
  },
  {
    title: "Packaging & Dispatch",
    description:
      "Finished wall cladding panels are securely packed and prepared for safe transportation and project delivery.",
    icon: Factory,
  },
];

export default function WallCladdingManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 sm:gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Manufacturing Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Frame */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-10 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-4 sm:pb-12 md:rounded-[38px] md:p-6 md:pb-14">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/wall-cladding/wall-cladding-manufacturing.jpg"
                    alt="Industrial wall cladding manufacturing facility"
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
                      sm:max-w-[330px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Manufacturing Excellence
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Precision Roll Forming
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div className="absolute bottom-4 left-4 right-4 z-10 min-[390px]:bottom-5 sm:bottom-6 sm:left-5 sm:right-5 md:bottom-7">
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Industrial Manufacturing
                    </p>

                    <h3 className="mt-1.5 max-w-lg text-[19px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[20px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      High Precision
                      <span className="block">
                        Quality Production
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Card */}

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

                shadow-[0_24px_75px_rgba(27,63,104,0.14)]

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
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <BadgeCheck size={22} className="sm:hidden" />

                  <BadgeCheck size={24} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Controlled Manufacturing Quality
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Profile geometry, coating quality, panel dimensions and
                    finished surface condition are inspected before packing and
                    project dispatch.
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
              <Factory size={15} />
              Wall Cladding Manufacturing
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px]">
              Precision Production
              <span className="block">
                for Reliable Façade Performance
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild manufactures industrial wall cladding panels through
              controlled roll forming, accurate cutting and systematic quality
              inspection to deliver consistent profiles, premium finishes and
              dependable long-term building-envelope performance.
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
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Icon */}

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14">
                        <Icon size={22} className="sm:hidden" />

                        <Icon size={24} className="hidden sm:block" />
                      </div>

                      {/* Content */}

                      <div className="min-w-0">
                        <h3 className="text-[19px] font-black leading-tight tracking-[-0.025em] text-primary-blue sm:text-2xl sm:tracking-[-0.03em]">
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
              <BadgeCheck size={22} className="sm:hidden" />

              <BadgeCheck size={26} className="hidden sm:block" />
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                Manufacturing Accuracy Supports Long-Term Cladding Performance
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-white/70 sm:leading-7">
                Material quality, roll-forming accuracy, profile consistency,
                coating condition, cutting precision and packaging standards
                are controlled according to approved production requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}