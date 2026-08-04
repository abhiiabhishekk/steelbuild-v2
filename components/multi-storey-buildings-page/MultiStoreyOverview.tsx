"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Layers3,
 ShieldCheck,
  Factory,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Layers3,
    title: "Multi-Level Planning",
    description:
      "Optimized floor layouts with efficient circulation and maximum space utilization.",
  },
  {
    icon: Factory,
    title: "Steel Structural System",
    description:
      "Engineered columns, beams and floor framing designed for long-term performance.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Construction",
    description:
      "Factory-manufactured steel components ensure quality, speed and consistency.",
  },
];

export default function MultiStoreyOverview() {
  return (
    <section
      id="multi-storey-overview"
      className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              <Building2 size={15} />
              Multi Storey Buildings
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl">
              Engineered Multi-Level Steel Buildings for Modern Infrastructure
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Multi-storey steel buildings provide maximum utilization of land,
              faster construction, flexible floor layouts and superior structural
              performance. They are widely used for manufacturing facilities,
              warehouses, office buildings, commercial complexes and institutional
              infrastructure.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(27,63,104,0.12)]">

              <div className="relative aspect-[4/3]">

                <Image
                  src="/images/products/multi-storey-buildings/multi-storey-building-v2.jpg"
                  alt="Multi Storey Steel Building"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-primary-blue px-8 py-6 text-white shadow-2xl">

              <div className="text-4xl font-black">
                Multi-Level
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                Smart Steel Construction
                <ArrowRight size={16} />
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}