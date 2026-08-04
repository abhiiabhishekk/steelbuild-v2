"use client";

import { motion } from "framer-motion";

import {
  Building2,
  Factory,
  IndianRupee,
  MapPinned,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/layout/Container";
import StatCard from "./StatCard";

const stats = [
  {
    icon: Building2,
    value: 700,
    suffix: "+",
    label: "Projects Delivered",
    description:
      "Successfully completed industrial, logistics and PEB projects across India.",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    description:
      "Delivering engineering excellence with innovation and customer trust.",
  },
  {
    icon: Factory,
    value: 50000,
    suffix: " MT",
    label: "Manufacturing Capacity",
    description:
      "Installed annual manufacturing capacity at world-class facilities.",
  },
  {
    icon: IndianRupee,
    value: 340,
    suffix: " Cr",
    label: "Annual Turnover",
    description:
      "A strong financial milestone reflecting sustainable business growth.",
  },
  {
    icon: ShieldCheck,
    value: 0,
    customValue: "ISO 9001:2015",
    label: "Certified Company",
    description:
      "Maintaining globally recognized quality management standards.",
  },
  {
    icon: MapPinned,
    value: 0,
    customValue: "Pan India",
    label: "Execution Network",
    description:
      "Serving clients nationwide with timely delivery and engineering support.",
  },
];

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">

      {/* Background Decoration */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.05),transparent_35%)]" />

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary-red/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-blue/5 blur-[150px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Our Achievements
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Numbers That Reflect
            <br />
            Engineering Excellence
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Every milestone reflects our commitment towards innovation,
            manufacturing excellence, quality, customer satisfaction and
            delivering world-class Pre-Engineered Building solutions.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}