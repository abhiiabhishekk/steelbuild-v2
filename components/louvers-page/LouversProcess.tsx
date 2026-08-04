"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  HardHat,
  PackageCheck,
  Settings2,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const process = [
  {
    step: "01",
    title: "Ventilation Requirement Analysis",
    icon: ClipboardCheck,
    description:
      "Review airflow requirements, intake or exhaust duty, free-area ratio and environmental conditions.",
  },
  {
    step: "02",
    title: "Engineering & Louver Design",
    icon: DraftingCompass,
    description:
      "Determine blade profile, frame depth, drainage arrangement, bird mesh and façade integration.",
  },
  {
    step: "03",
    title: "Material Selection",
    icon: Settings2,
    description:
      "Select galvanized steel or aluminium sections, protective coatings and screen materials according to project requirements.",
  },
  {
    step: "04",
    title: "Precision Fabrication",
    icon: Factory,
    description:
      "Manufacture blades, frames and accessories using controlled fabrication processes for dimensional accuracy.",
  },
  {
    step: "05",
    title: "Quality Inspection",
    icon: BadgeCheck,
    description:
      "Inspect blade alignment, frame squareness, coatings, drainage paths and overall assembly quality.",
  },
  {
    step: "06",
    title: "Packaging & Dispatch",
    icon: PackageCheck,
    description:
      "Protect completed louver assemblies for safe transportation and site delivery.",
  },
  {
    step: "07",
    title: "Site Installation",
    icon: HardHat,
    description:
      "Install louvers with approved fasteners, flashings and façade support coordination.",
  },
  {
    step: "08",
    title: "Final Handover",
    icon: Truck,
    description:
      "Verify installation, airflow performance and weather-protection details before project completion.",
  },
];

export default function LouversProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Settings2 size={15} />
            Engineering Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Airflow Analysis
            <span className="block">
              To Final Installation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Every Steelbuild Industrial Louver System follows a structured
            engineering workflow to deliver dependable airflow, weather
            protection and long-term façade performance.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group flex gap-6 rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/20 hover:shadow-[0_28px_70px_rgba(27,63,104,0.12)]"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Step {item.step}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {index !== process.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown
                      className="text-primary-red"
                      size={22}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}