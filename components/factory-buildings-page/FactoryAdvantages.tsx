"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Expand,
  Factory,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Workflow,
    title: "Efficient Production Flow",
    description:
      "Factory layouts can be coordinated around process sequence, machinery, material movement and working zones.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Faster Construction",
    description:
      "Factory-fabricated steel components support systematic erection and reduce prolonged site construction activity.",
  },
  {
    number: "03",
    icon: Expand,
    title: "Flexible Structural Planning",
    description:
      "Clear spans, bay spacing, heights and access can be customized according to operational requirements.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Future Expansion",
    description:
      "Factory buildings can be planned for additional bays, production lines and changing manufacturing needs.",
  },
];

export default function FactoryAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={15} />
            Factory Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Factory Buildings Designed for Operational Efficiency
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steel construction supports faster execution, flexible layouts and
            future-ready manufacturing infrastructure.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-stretch">
          {/* Left feature panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Workflow size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Operational Planning
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                The Building Must Support the Manufacturing Process
              </h3>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                A factory performs better when its structural layout is aligned
                with machinery, production flow, material movement, utilities
                and maintenance access.
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-start gap-4 border-t border-white/15 pt-7">
                  <ShieldCheck
                    size={25}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-black leading-7 text-white/80">
                    Factory planning begins with operational requirements—not
                    only the building dimensions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right advantage cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)] md:p-8"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Factory Advantage {item.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}