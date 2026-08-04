"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  HardHat,
  Layers3,
  ShieldCheck,
  Weight,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewFeatures = [
  {
    icon: Weight,
    title: "Heavy Load Performance",
    description:
      "Structural systems engineered to support substantial equipment, operational, floor and environmental loads.",
  },
  {
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Heavy steel members manufactured through controlled cutting, welding, drilling, assembly and finishing processes.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Reliability",
    description:
      "Columns, beams, bracing and connections coordinated for dependable long-term structural performance.",
  },
];

const structuralCapabilities = [
  "Heavy built-up steel columns",
  "Deep structural beams and girders",
  "Heavy-duty industrial platforms",
  "Equipment support structures",
  "Complex bracing systems",
  "Engineered structural connections",
];

export default function HeavySteelOverview() {
  return (
    <section
      id="heavy-steel-overview"
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
              <HardHat size={15} />
              Heavy Steel Structures
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Structural Steel for Demanding Industrial Requirements
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Heavy steel structures are designed for projects where standard
              building systems may not be sufficient to support high loads,
              complex framing arrangements, industrial equipment or
              specialized operational requirements.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited develops coordinated heavy
              structural steel solutions covering engineering, detailing,
              fabrication, quality inspection, dispatch and site execution.
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/heavy-steel-structures/heavy-steel-structure-v2.JPG"
                    alt="Heavy steel structural system engineered for industrial applications"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={false}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/55 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/15 bg-primary-blue/80 p-5 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Heavy Structural Engineering
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                      Built for Strength, Stability and Complex Loads
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating information card */}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-4 -mt-8 rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_24px_75px_rgba(27,63,104,0.13)] md:mx-8 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <Layers3 size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Structural Capability
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight text-primary-blue">
                    Coordinated Heavy Steel Systems
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {structuralCapabilities.map((item) => (
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