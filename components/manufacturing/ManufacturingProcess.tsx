"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Box,
  ClipboardCheck,
  Factory,
  Flame,
  Layers3,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    title: "Engineering & Detailing",
    description:
      "Structural requirements are converted into accurate engineering drawings, fabrication details and production-ready documentation.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Material Preparation",
    description:
      "Approved steel plates, coils and structural materials are inspected, identified and prepared for manufacturing.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "CNC Cutting",
    description:
      "High-precision CNC plasma cutting systems process steel components according to approved engineering specifications.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Fabrication & Welding",
    description:
      "Primary framing members are assembled and welded using advanced H-beam welding lines and controlled production processes.",
    icon: Flame,
  },
  {
    number: "05",
    title: "Surface Preparation",
    description:
      "Fabricated members undergo shot blasting and surface cleaning to achieve the required preparation and finish standards.",
    icon: Factory,
  },
  {
    number: "06",
    title: "Painting & Protection",
    description:
      "Protective coatings and approved paint systems are applied to improve durability, corrosion resistance and service life.",
    icon: Paintbrush,
  },
  {
    number: "07",
    title: "QA/QC Inspection",
    description:
      "Dimensions, weld quality, surface finish and production compliance are verified through multi-stage quality inspection.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Packing & Dispatch",
    description:
      "Finished components are marked, packed and dispatched through an organized logistics system for reliable project delivery.",
    icon: Truck,
  },
];

const qualityPoints = [
  "Engineering-controlled manufacturing",
  "Multi-stage quality inspection",
  "Traceable production workflow",
  "Organized packing and dispatch",
];

export default function ManufacturingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background decoration */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-16 h-96 w-96 rounded-full bg-primary-blue/10 blur-[120px]" />

      <Container>
        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={16} />
            Manufacturing Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Engineering to Reliable Project Dispatch
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every Steelbuild component moves through a structured manufacturing
            workflow focused on precision, quality, traceability and timely
            delivery.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative z-10 mt-16">
          {/* Desktop centre line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-red/20 via-primary-blue/20 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isEven ? -45 : 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                  }}
                  className="relative grid items-center gap-6 lg:grid-cols-[1fr_88px_1fr]"
                >
                  {/* Left side */}

                  <div
                    className={`${
                      isEven
                        ? "lg:col-start-1"
                        : "lg:col-start-3 lg:row-start-1"
                    }`}
                  >
                    <div className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_20px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/20 hover:shadow-[0_30px_80px_rgba(27,63,104,0.14)] md:p-8">
                      <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          <Icon size={27} />
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.24em] text-primary-red">
                            Step {step.number}
                          </p>

                          <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.025em] text-primary-blue">
                            {step.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Centre number */}

                  <div className="relative z-10 hidden items-center justify-center lg:col-start-2 lg:row-start-1 lg:flex">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[7px] border-[#f7f9fc] bg-primary-blue text-lg font-black text-white shadow-[0_12px_30px_rgba(27,63,104,0.22)]">
                      {step.number}
                    </div>
                  </div>

                  {/* Empty opposite column */}

                  <div
                    className={`hidden lg:block ${
                      isEven
                        ? "lg:col-start-3 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quality assurance panel */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mt-16 overflow-hidden rounded-[34px] bg-primary-blue px-7 py-10 shadow-[0_30px_90px_rgba(27,63,104,0.2)] md:px-10 lg:px-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#24578d_58%,#12345e_100%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/25">
                <ClipboardCheck size={32} />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
                Quality at Every Stage
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-white md:text-4xl">
                Controlled Manufacturing. Consistent Results.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                Each manufacturing stage is reviewed through defined quality
                checks to maintain dimensional accuracy, welding quality,
                surface finish and delivery readiness.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.06,
                  }}
                  className="flex min-h-[100px] items-center gap-4 rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-red">
                    <BadgeCheck size={23} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black tracking-[0.16em] text-white/40">
                      0{index + 1}
                    </p>

                    <p className="mt-2 text-sm font-black leading-6 text-white">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm font-semibold text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary-red" />
              Quality-Controlled Production
            </span>

            <span className="inline-flex items-center gap-2">
              <Box size={18} className="text-primary-red" />
              Organized Packing
            </span>

            <span className="inline-flex items-center gap-2">
              <Truck size={18} className="text-primary-red" />
              Reliable Dispatch
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}