"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const roofingTypes = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Standing Seam Roofing",
    subtitle: "Concealed Fastener Roofing",
    description:
  "Steelbuild standing seam roofing uses concealed fastening and a mechanically formed 360° double-lock seam for approved industrial roofing applications.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Roofing Sheets",
    subtitle: "Primary Roof Covering",
    description:
  "Profiled steel roofing sheets provide the primary roof covering for factories, warehouses, industrial facilities and Pre-Engineered Buildings.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Deck Sheets",
    subtitle: "Composite Floor Support",
    description:
  "Steel deck sheets serve as permanent shuttering and support concrete or composite floor construction in multi-storey and industrial buildings.",
  },
  {
    number: "04",
    icon: Wind,
    title: "Ridge Ventilators",
    subtitle: "Natural Roof Ventilation",
    description:
      "Continuous ridge ventilators allow warm air to escape naturally through the roof ridge where specified.",
  },
  {
    number: "05",
    icon: Wind,
    title: "Turbo Ventilators",
    subtitle: "Wind-Driven Ventilation",
    description:
      "Roof-mounted turbo ventilators assist natural air movement using wind energy without electrical power.",
  },
];

const productList = [
  "Standing Seam Roofing",
  "Roofing Sheets",
  "Deck Sheets",
  "Ridge Ventilators",
  "Turbo Ventilators",
];

export default function RoofingTypes() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
            <PanelsTopLeft size={15} />
            Roofing Product Options
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Roofing Solutions Developed Around Project Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Infra Projects Limited provides roofing solutions
            according to approved project specifications, structural
            requirements and intended building application.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          {/* Left feature panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <PanelsTopLeft size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Roofing Products
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Integrated as One Building System
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Roof panels, deck systems, ventilators and accessories are
                coordinated according to structural design, drainage and
                approved project requirements.
              </p>

              <div className="mt-9 space-y-4">
                {productList.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <BadgeCheck
                      size={18}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black text-white/80">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <ShieldCheck
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Product selection depends on the approved roof geometry,
                  building use, structural support and project scope.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right product rows */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {roofingTypes.map((item, index) => {
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
                  className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[50px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Building2 size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Roofing Products Selected for the Approved Building Scope
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Every roofing product is selected according to the approved
                project scope, engineering requirements and intended building
                application.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}