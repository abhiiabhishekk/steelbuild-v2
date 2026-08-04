"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Frame,
  PanelsTopLeft,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const systems = [
  {
    number: "01",
    icon: Frame,
    title: "Primary Structural Framing",
    description:
      "Main columns and rafters engineered according to building span, clear height, loading and production requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Equipment Support Integration",
    description:
      "Structural members coordinated with machinery positions, maintenance access and operational clearances.",
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Roofing & Cladding",
    description:
      "Roof and wall systems developed for weather protection, durability and suitable internal working conditions.",
  },
  {
    number: "04",
    icon: Wind,
    title: "Ventilation & Daylight",
    description:
      "Louvers, ridge ventilation and translucent panels planned to improve airflow and natural lighting.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Bracing & Stability",
    description:
      "Roof and wall bracing systems designed to maintain structural stability under wind and operational forces.",
  },
];

export default function FactorySystems() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Building2 size={15} />
            Factory Building Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Integrated Systems for Reliable Factory Operations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Factory buildings combine structural framing, equipment
            coordination, building envelope and environmental systems within
            one integrated industrial facility.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
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

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Factory size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Coordinated Factory Infrastructure
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Every Building System Must Support Production
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Structural framing, access, ventilation, roofing and cladding
                are coordinated according to production flow, machinery,
                utilities and operational safety.
              </p>

              <div className="mt-10 border-t border-white/15 pt-7">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    size={25}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-black leading-7 text-white/80">
                    Factory systems are developed as one coordinated solution,
                    not as separate building components.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {systems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]"
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Factory System {item.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}