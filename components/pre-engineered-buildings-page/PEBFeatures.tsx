"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Factory,
  Layers3,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Clock3,
    title: "Faster Construction",
    description:
      "Factory-fabricated components reduce on-site activities and support faster project execution.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description:
      "Steel members are manufactured under controlled conditions for dimensional consistency.",
  },
  {
    icon: Ruler,
    title: "Optimized Steel Design",
    description:
      "Efficient structural engineering minimizes unnecessary material while maintaining performance.",
  },
  {
    icon: Layers3,
    title: "Expandable Buildings",
    description:
      "Future expansion can be planned more efficiently without major structural redesign.",
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description:
      "Building components are packed and dispatched according to erection sequence.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Quality coated structural components support long-term durability and reduced maintenance.",
  },
];

export default function PEBFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
            <ShieldCheck size={15} />
            Key Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl">
            Why Choose
            <span className="block">
              Pre-Engineered Buildings?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild's Pre-Engineered Buildings combine engineering,
            manufacturing and project execution into one integrated solution,
            delivering speed, quality and long-term value.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_50px_rgba(27,63,104,.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/30 hover:shadow-[0_28px_70px_rgba(27,63,104,.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_15px_30px_rgba(194,17,25,.25)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-primary-blue">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-primary-red font-bold">
                  <BadgeCheck size={18} />
                  Steelbuild Advantage
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[34px] bg-primary-blue p-10 text-white shadow-[0_30px_80px_rgba(27,63,104,.18)]"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-300">
                Steelbuild Quality
              </span>

              <h3 className="mt-5 text-4xl font-black leading-tight">
                Driven By Commitment
                <span className="block">
                  and Quality
                </span>
              </h3>
            </div>

            <p className="text-lg leading-9 text-white/80">
              Every Steelbuild Pre-Engineered Building is developed with
              attention to structural performance, manufacturing quality,
              project coordination and customer requirements to ensure
              dependable industrial infrastructure solutions.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}