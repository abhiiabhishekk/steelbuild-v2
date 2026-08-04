"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  {
    icon: Warehouse,
    value: "Multi-Sector",
    label: "Industrial Building Expertise",
  },
  {
    icon: Factory,
    value: "Customized",
    label: "Sector-Specific Engineering",
  },
  {
    icon: Gauge,
    value: "Fast-Track",
    label: "Design and Construction",
  },
  {
    icon: ShieldCheck,
    value: "Reliable",
    label: "Quality and Performance",
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Purpose-Built Structures",
    description:
      "Building systems planned around operational requirements, workflows, storage needs and long-term business growth.",
  },
  {
    icon: Layers3,
    title: "Flexible Building Systems",
    description:
      "Scalable Pre-Engineered Building solutions supporting future expansion, mezzanines, cranes and specialized equipment.",
  },
  {
    icon: BadgeCheck,
    title: "Industry-Focused Engineering",
    description:
      "Structural design, roofing, cladding, ventilation and insulation solutions selected according to each sector.",
  },
];

export default function IndustriesOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Sector-Focused Engineering
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Engineered Around the Needs of Every Industry
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every industry has different operational, structural and
            environmental requirements. Steelbuild develops customized
            Pre-Engineered Building solutions that align engineering
            performance with each client&apos;s workflow, capacity and future
            expansion plans.
          </p>
        </motion.div>

        {/* Highlights */}

        <div className="relative z-10 mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group rounded-[26px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_30px_75px_rgba(27,63,104,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={27} />
                </div>

                <p className="mt-5 text-2xl font-black text-primary-blue">
                  {item.value}
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-gray-500">
                  {item.label}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Main overview card */}

        <div className="relative z-10 mt-16 grid overflow-hidden rounded-[38px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.11)] lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden bg-primary-blue p-8 md:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-red/20 blur-[90px]" />

            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-red">
                Steelbuild Industry Solutions
              </p>

              <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[48px]">
                One Engineering Partner for Diverse Building Requirements
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/75">
                From high-capacity warehouses and manufacturing plants to
                showrooms, institutional buildings and specialized
                infrastructure, our engineering teams develop structures that
                support productivity, safety and reliable long-term
                performance.
              </p>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-sm font-black leading-7 text-white">
                  Our capabilities are not limited to completed sectors. We can
                  design and deliver technically feasible PEB solutions for a
                  wide range of upcoming industrial, commercial and
                  infrastructure applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right capabilities */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="p-8 md:p-12 lg:p-14"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              Our Approach
            </p>

            <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
              Solutions Designed for Operational Performance
            </h3>

            <div className="mt-8 space-y-5">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.08,
                    }}
                    className="group flex gap-5 rounded-[24px] border border-gray-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/20 hover:bg-white hover:shadow-[0_18px_55px_rgba(27,63,104,0.08)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-primary-blue">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}