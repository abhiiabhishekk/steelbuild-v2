"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Layers3,
  ShieldCheck,
  Snowflake,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const planningConsiderations = [
  {
    number: "01",
    icon: Snowflake,
    title: "Storage Zones",
    description:
      "Internal areas planned around product handling, storage workflow and operational separation.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Insulated Envelope",
    description:
      "Roof and wall systems coordinated with the structural frame and access openings.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Material Movement",
    description:
      "Loading, unloading and internal circulation planned around daily operations.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Building Protection",
    description:
      "Structural and envelope systems developed for reliable long-term use.",
  },
];

const capabilityPoints = [
  "Storage-oriented layout",
  "Insulated wall coordination",
  "Roof system integration",
  "Access and loading planning",
];

export default function ColdStorageOverview() {
  return (
    <section
      id="cold-storage-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <Snowflake size={15} />
              Cold Storage Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Cold Storage Buildings Planned Around Controlled Operations
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Cold storage buildings require careful coordination between the
              structural frame, insulated envelope, storage zones, access and
              daily material movement.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited develops the building structure
              according to approved project requirements, site conditions and
              operational planning.
            </p>

            <div className="mt-10 grid gap-x-7 gap-y-8 sm:grid-cols-2">
              {planningConsiderations.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group border-t border-gray-200 pt-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <span className="text-4xl font-black leading-none text-primary-blue/[0.05]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-black leading-tight text-primary-blue">
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

          {/* Right visual */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[26px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.20)] sm:rounded-[32px] sm:p-4 md:rounded-[38px] md:p-6 md:shadow-[0_38px_100px_rgba(27,63,104,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#286295_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-2 sm:rounded-[26px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
  <Image
    src="/images/products/cold-storage-buildings/cold-storage-building.jpg"
    alt="Cold storage building with insulated wall and roof systems"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-primary-blue/10 to-transparent" />

  <div
    className="
      absolute
      bottom-3 left-3 right-3
      rounded-[18px]
      border border-white/15
      bg-primary-blue/90
      px-4 py-4
      backdrop-blur-md

      min-[390px]:bottom-4
      min-[390px]:left-4
      min-[390px]:right-4
      min-[390px]:px-5

      sm:bottom-5
      sm:left-5
      sm:right-5
      sm:rounded-[22px]
      sm:px-5
      sm:py-4

      md:px-6
      md:py-5
    "
  >
    <p
      className="
        text-[8px]
        font-black
        uppercase
        leading-[1.45]
        tracking-[0.18em]
        text-primary-red

        min-[360px]:text-[9px]
        min-[390px]:tracking-[0.20em]

        sm:text-[10px]
        sm:tracking-[0.22em]
      "
    >
      Insulated Building Infrastructure
    </p>

    <h3
      className="
        mt-2
        max-w-full
        text-[18px]
        font-black
        leading-[1.18]
        tracking-[-0.02em]
        text-white

        min-[360px]:text-[19px]
        min-[390px]:text-[20px]

        sm:text-[22px]
        sm:leading-tight

        md:text-2xl
      "
    >
      Structure and Envelope Coordinated as One System
    </h3>
  </div>
</div>
              </div>
            </div>

            {/* Floating capability panel */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_24px_75px_rgba(27,63,104,0.13)] min-[390px]:mx-4 min-[390px]:p-6 sm:-mt-7 sm:rounded-[28px] md:mx-8 md:-mt-8 md:rounded-[30px] md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
  <Boxes size={23} className="sm:h-[26px] sm:w-[26px]" />
</div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Building Coordination
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-[1.2] text-primary-blue sm:text-2xl sm:leading-tight">
  Planned Around Storage and Movement
</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {capabilityPoints.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[56px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 sm:min-h-[60px] sm:py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-primary-blue">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}