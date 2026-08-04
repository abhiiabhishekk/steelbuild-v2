"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Counter from "./Counter";
import FactoryImage from "./FactoryImage";
import { SITE } from "@/constants/site";

const counters = [
  {
    value: SITE.stats.projects,
    label: "Projects Delivered",
    description: "Successfully delivered across Pan India.",
  },
  {
    value: SITE.stats.capacity,
    label: "Annual Capacity",
    description: "Advanced manufacturing strength for large-scale projects.",
  },
  {
    value: SITE.stats.units,
    label: "Manufacturing Units",
    description: "Strategically located facilities in Sonipat.",
  },
  {
    value: SITE.stats.reach,
    label: "Execution",
    description: "Serving industrial infrastructure needs across India.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#fbfcfe] to-white" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary-red/10 blur-3xl" />
      <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Building India&apos;s Industrial Future
            </p>

            <h2 className="mt-6 max-w-[640px] text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]">
              Trusted PEB & Steel Structure Partner for Industrial Growth.
            </h2>

            <p className="mt-7 max-w-[540px] text-lg leading-8 text-gray-600">
              Steelbuild Infra Projects Limited is an ISO 9001:2015 certified
              Pre-Engineered Building company delivering premium warehouses,
              industrial sheds, factories and turnkey steel infrastructure
              solutions across India.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-primary-blue px-8 py-4 font-bold !text-white shadow-xl shadow-primary-blue/20 transition duration-300 hover:-translate-y-1 hover:bg-[#143252] hover:!text-white"
              >
                Know Our Story
              </Link>

              <Link
                href="/request-a-quote"
                className="rounded-xl border border-gray-200 px-8 py-4 font-bold text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <FactoryImage />
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((item, index) => (
            <Counter
              key={item.label}
              index={index}
              value={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}