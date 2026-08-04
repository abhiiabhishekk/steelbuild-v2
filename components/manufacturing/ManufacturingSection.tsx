"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import ManufacturingCard from "./ManufacturingCard";
import { SITE } from "@/constants/site";

const items = [
  {
    image: "/images/manufacturing/unit-1.jpg",
    title: "Unit 1 – Katwal, Sonipat",
    description:
      "A strategically located manufacturing unit supporting large-scale PEB and structural steel production.",
  },
  {
    image: "/images/manufacturing/unit-2.jpg",
    title: "Unit 2 & 3 – Halalpur, Sonipat",
    description:
      "Advanced facilities designed to support high-volume production, fabrication and timely project execution.",
  },
  {
    image: "/images/manufacturing/machinery.jpg",
    title: "Advanced Machinery & Quality Control",
    description:
      "Modern equipment, skilled teams and strict quality systems ensure precision, durability and consistency.",
  },
];

export default function ManufacturingSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-36">
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />
      <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-primary-red/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Manufacturing Excellence
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]">
              Built with Capacity, Precision and Control.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-lg leading-8 text-gray-600"
          >
            Steelbuild operates multiple manufacturing facilities with an annual
            capacity of {SITE.stats.capacity}, enabling reliable delivery of
            large-scale Pre-Engineered Buildings and steel structures across
            India.
          </motion.p>
        </div>

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => (
            <ManufacturingCard key={item.title} index={index} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mt-14 text-center"
        >
          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-3 rounded-xl bg-primary-blue px-8 py-4 font-black !text-white shadow-xl shadow-primary-blue/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
          >
            Explore Our Manufacturing
            <span>→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}