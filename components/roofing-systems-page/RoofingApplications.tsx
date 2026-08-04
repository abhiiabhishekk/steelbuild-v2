"use client";

import { motion } from "framer-motion";
import {
  Building,
  Building2,
  Factory,
  Landmark,
  Layers3,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Factory,
    title: "Industrial Manufacturing Facilities",
    description:
      "Roofing systems coordinated for production buildings, engineering plants and industrial manufacturing facilities.",
  },
  {
    number: "02",
    icon: Warehouse,
    title: "Warehouse Buildings",
    description:
      "Industrial roofing planned for warehouses, logistics centres and storage facilities according to approved project requirements.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Factory Buildings",
    description:
      "Roof systems coordinated with production layouts, ventilation strategy and complete building-envelope planning.",
  },
  {
    number: "04",
    icon: Building,
    title: "Commercial Steel Buildings",
    description:
      "Roofing solutions developed for commercial developments, retail facilities, offices and showrooms using steel construction.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Multi-Storey Steel Buildings",
    description:
      "Roof systems coordinated with deck sheets, composite floors and structural steel framing.",
  },
  {
    number: "06",
    icon: Landmark,
    title: "Infrastructure & Institutional Projects",
    description:
      "Project-specific roofing coordinated for institutional and infrastructure steel buildings.",
  },
];

const buildingTypes = [
  "Industrial Buildings",
  "Warehouses",
  "Factory Buildings",
  "Commercial Projects",
  "Multi-Storey Buildings",
  "Institutional Structures",
];

export default function RoofingApplications() {
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
            <Building2 size={15} />
            Roofing Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Roofing Systems Across Multiple Building Types
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Roofing systems are coordinated according to building function,
            structural arrangement, roof geometry and approved project
            requirements.
          </p>
        </motion.div>

        {/* Main */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          {/* Left */}

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
                <Warehouse size={28} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Application Areas
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Roofing Systems
                <span className="block">Across Multiple</span>
                <span className="block">Building Types</span>
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Steelbuild roofing systems are coordinated according to
                building function, structural arrangement, roof geometry,
                ventilation strategy and approved project requirements.
              </p>

              <div className="mt-9 space-y-4">
                {buildingTypes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0"
                  >
                    <ShieldCheck
                      size={18}
                      className="mt-1 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <ShieldCheck
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Final roofing configuration varies according to each
                  project's engineering and architectural requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {applications.map((item, index) => {
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
                  className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Application {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[52px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom engineering note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Every Roofing System is Project Specific
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Roof profiles, accessories, drainage, ventilation and
                installation details are developed according to approved
                engineering drawings, project requirements and site conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}