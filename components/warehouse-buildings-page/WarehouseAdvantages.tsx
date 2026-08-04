"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Clock3,
  Expand,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const flowStages = [
  {
    number: "01",
    icon: Truck,
    title: "Inbound",
    text: "Vehicle arrival and unloading",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Receiving",
    text: "Material verification and sorting",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Storage",
    text: "Racking, stacking and inventory",
  },
  {
    number: "04",
    icon: Truck,
    title: "Dispatch",
    text: "Order movement and loading",
  },
];

const advantages = [
  {
    number: "01",
    icon: Boxes,
    title: "Higher Storage Efficiency",
    description:
      "Clear internal space and optimized height improve pallet positions, racking capacity and overall inventory utilization.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Faster Material Movement",
    description:
      "Vehicle access, loading areas and internal circulation can be planned to reduce movement conflicts and handling delays.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Quicker Construction",
    description:
      "Factory-manufactured structural systems support systematic erection and faster warehouse readiness.",
  },
  {
    number: "04",
    icon: Expand,
    title: "Expansion Flexibility",
    description:
      "Warehouse buildings can be planned for future bays, extended length, additional docks and higher storage requirements.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Reliable Goods Protection",
    description:
      "Roofing, cladding, drainage and ventilation systems help protect stored products and daily operations.",
  },
];

const planningBenefits = [
  "Racking-compatible column grid",
  "High clear-height utilization",
  "Dedicated loading zones",
  "Organized vehicle circulation",
  "Future dock expansion",
  "Flexible internal zoning",
];

export default function WarehouseAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Warehouse size={15} />
            Warehouse Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Designed to Improve Storage, Movement and Daily Operations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            A well-planned warehouse connects receiving, storage, order
            movement and dispatch within one coordinated operational layout.
          </p>
        </motion.div>

        {/* Main warehouse flow layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          {/* Left warehouse flow panel */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
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
                <Boxes size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Operational Flow
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Warehouse Performance Starts With Movement Planning
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Storage efficiency depends on how smoothly goods move from
                vehicle arrival through receiving, inventory placement and
                final dispatch.
              </p>

              {/* Flow stages */}

              <div className="mt-9 space-y-4">
                {flowStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <motion.div
                      key={stage.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className="group relative"
                    >
                      <div className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:border-primary-red/40 hover:bg-white/[0.12]">
                        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                          <Icon size={23} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                              Stage {stage.number}
                            </span>

                            <span className="h-px flex-1 bg-white/10" />
                          </div>

                          <h4 className="mt-2 text-lg font-black text-white">
                            {stage.title}
                          </h4>

                          <p className="mt-1 text-sm font-medium text-white/60">
                            {stage.text}
                          </p>
                        </div>
                      </div>

                      {index < flowStages.length - 1 && (
                        <div className="mx-auto flex h-8 w-8 rotate-90 items-center justify-center text-primary-red">
                          <ArrowRight size={18} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {planningBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[64px] items-start gap-3 rounded-2xl border border-white/10 bg-[#102f55] px-4 py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right advantages stack */}

          <div className="grid gap-5">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_80px_rgba(27,63,104,0.13)]"
                >
                  <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-primary-red transition-transform duration-500 group-hover:scale-y-100" />

                  <span className="pointer-events-none absolute right-5 top-4 text-[54px] font-black leading-none text-primary-blue/[0.04]">
                    {item.number}
                  </span>

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Warehouse Advantage {item.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom efficiency strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Boxes size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Better Storage Density
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                More usable inventory capacity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Truck size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Smoother Logistics Flow
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Coordinated loading and dispatch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-7 py-6">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Expand size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Growth-Ready Planning
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Future bays and dock expansion
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}