"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  ShieldCheck,
  Truck,
  Ruler,
  BadgeCheck,
} from "lucide-react";
import Container from "@/components/layout/Container";

const advantages = [
  {
    icon: Factory,
    title: "Advanced Manufacturing Facilities",
    description: "Modern production setup for precision-engineered steel buildings.",
  },
  {
    icon: Settings,
    title: "Automated Machinery",
    description: "CNC-based systems, automated welding and fabrication support.",
  },
  {
    icon: Ruler,
    title: "In-House Engineering",
    description: "Dedicated design team for optimized PEB structural solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    description: "Inspection-driven manufacturing process for consistent quality.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems aligned with international standards.",
  },
  {
    icon: Truck,
    title: "Timely Dispatch",
    description: "Efficient production planning and logistics for faster delivery.",
  },
];

const process = [
  "Design",
  "Fabrication",
  "Welding",
  "Surface Treatment",
  "Quality Check",
  "Dispatch",
];

export default function ManufacturingAdvantage() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-gray-100 bg-white p-2 shadow-[0_40px_100px_rgba(27,63,104,0.16)]">
              <div className="relative h-[540px] overflow-hidden rounded-[30px]">
                <Image
                  src="/images/about/manufacturing.jpg"
                  alt="Steelbuild Infra Projects advanced PEB manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/55 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 rounded-[26px] bg-primary-blue px-8 py-7 text-white shadow-[0_25px_60px_rgba(27,63,104,0.35)]">
              <p className="text-5xl font-black leading-none">50,000 MT</p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/75">
                Annual Capacity
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
              Manufacturing Advantage
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
              Built with Precision.
              <br />
              Delivered with Confidence.
            </h2>

            <p className="mt-7 text-lg leading-9 text-gray-600">
              Steelbuild Infra Projects Limited combines advanced machinery,
              in-house engineering, quality systems and strong project execution
              capabilities to deliver reliable Pre-Engineered Building solutions
              for demanding industrial requirements.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="group rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_22px_60px_rgba(27,63,104,0.10)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 rounded-[32px] border border-gray-200 bg-[#f7f9fc] p-8 shadow-[0_20px_70px_rgba(27,63,104,0.07)]">
          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <p className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue text-sm font-black text-white">
                  {index + 1}
                </p>

                <h3 className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-primary-blue">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}