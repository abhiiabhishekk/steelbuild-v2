"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Ruler,
  ShieldCheck,
  Warehouse,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewFeatures = [
  {
    icon: Ruler,
    title: "Operationally Planned Layout",
    description:
      "Shed dimensions, bay spacing, clear height and access are coordinated around production, movement and storage requirements.",
  },
  {
    icon: Factory,
    title: "Factory-Fabricated Structure",
    description:
      "Primary and secondary steel members are manufactured through controlled processes for dimensional consistency and faster execution.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Building Envelope",
    description:
      "Roofing, cladding, ventilation and weather-protection systems are coordinated for dependable industrial performance.",
  },
];

const shedCapabilities = [
  "Clear-span structural framing",
  "Single and multi-bay layouts",
  "Customized clear heights",
  "Roof ventilation systems",
  "Natural lighting provisions",
  "Flexible access openings",
];

export default function IndustrialShedsOverview() {
  return (
    <section
      id="industrial-sheds-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <Warehouse size={15} />
              Industrial Shed Solutions
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Purpose-Built Industrial Sheds for Efficient Operations
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Industrial sheds provide efficient covered spaces for
              manufacturing, assembly, storage, fabrication, maintenance and
              processing activities while supporting faster construction and
              flexible operational planning.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited develops industrial shed
              solutions according to building usage, internal movement,
              equipment placement, material flow, ventilation, access and
              future expansion requirements.
            </p>

            <div className="mt-9 space-y-5">
              {overviewFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group flex gap-5 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_26px_70px_rgba(27,63,104,0.13)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black leading-tight text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Right visual panel */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[4/3] sm:rounded-[24px]">
  <Image
    src="/images/products/industrial-sheds/industrial-shed.jpg"
    alt="Industrial steel shed designed for manufacturing and operational use"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
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
      Industrial Building Efficiency
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
      Designed Around Space, Access and Workflow
    </h3>
  </div>
</div>
              </div>
            </div>

            {/* Floating capability card */}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-4 -mt-8 rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_24px_75px_rgba(27,63,104,0.13)] md:mx-8 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <Wind size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Shed Planning Capability
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight text-primary-blue">
                    Coordinated Industrial Building Systems
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {shedCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[62px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-4"
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