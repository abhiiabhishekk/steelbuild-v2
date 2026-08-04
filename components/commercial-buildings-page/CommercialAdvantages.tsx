"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Clock3,
  Expand,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Expand,
    title: "Flexible Space Planning",
    description:
      "Structural grids can be coordinated around offices, retail areas, circulation and mixed commercial functions.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Systematic Construction",
    description:
      "Factory-manufactured steel components support planned fabrication, delivery and site erection.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Integrated Building Systems",
    description:
      "Floor framing, roofing, cladding and access elements can be coordinated within one structural solution.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Adaptable Future Use",
    description:
      "Commercial spaces can be planned to support future layout changes and evolving operational requirements.",
  },
];

export default function CommercialAdvantages() {
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
            <Building2 size={15} />
            Commercial Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Commercial Buildings Designed for Flexibility and Function
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steel construction supports adaptable layouts, coordinated building
            systems and organized project delivery for modern commercial spaces.
          </p>
        </motion.div>

        {/* Architectural statement */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mt-16 max-w-6xl overflow-hidden rounded-[38px] border border-gray-200 bg-[#f7f9fc] px-8 py-12 shadow-[0_24px_75px_rgba(27,63,104,0.08)] md:px-12 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.34fr_1.66fr] lg:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-primary-blue text-white shadow-[0_20px_55px_rgba(27,63,104,0.18)]">
              <Building2 size={42} />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Architectural Flexibility
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl lg:text-[46px]">
                Structural Planning That Supports the Intended Business Use
              </h3>

              <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-gray-600">
                Commercial buildings perform better when structural planning,
                circulation, access and floor usage are coordinated from the
                beginning of the project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advantages columns */}

        <div className="relative z-10 mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative border-t-2 border-gray-200 pt-7 transition-colors duration-300 hover:border-primary-red"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="text-5xl font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}