"use client";

import { motion } from "framer-motion";
import {
  Zap,
  IndianRupee,
  ShieldCheck,
  Leaf,
  DraftingCompass,
  Settings,
} from "lucide-react";
import Container from "@/components/layout/Container";

const benefits = [
  {
    icon: Zap,
    title: "Faster Construction",
    description:
      "Pre-engineered steel structures reduce construction timelines with factory-made components and faster on-site assembly.",
  },
  {
    icon: IndianRupee,
    title: "Cost Efficient",
    description:
      "Optimized engineering, reduced material wastage and faster execution help deliver better value for industrial projects.",
  },
  {
    icon: ShieldCheck,
    title: "High Strength & Durability",
    description:
      "Robust steel systems are engineered for long service life, structural stability and reliable performance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description:
      "Steel buildings support efficient construction, recyclability and responsible infrastructure development.",
  },
  {
    icon: DraftingCompass,
    title: "Customized Engineering",
    description:
      "Every building is designed around project requirements, site conditions, industry use and future expansion needs.",
  },
  {
    icon: Settings,
    title: "Low Maintenance",
    description:
      "Premium materials, precision fabrication and quality systems ensure dependable performance with lower maintenance.",
  },
];

export default function ProductBenefits() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Product Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Why Choose Steelbuild
            <br />
            PEB Solutions?
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Our Pre-Engineered Building solutions are designed to deliver speed,
            strength, flexibility and long-term value for industrial,
            warehousing and infrastructure projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.12)]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-blue/5 blur-3xl transition duration-500 group-hover:bg-primary-red/10" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-primary-blue">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}