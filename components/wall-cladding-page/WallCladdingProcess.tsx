"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  SearchCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    title: "Project Requirement Analysis",
    description:
      "Review building dimensions, façade requirements, environmental conditions and project specifications.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Engineering & System Design",
    description:
      "Develop wall-cladding layouts, panel profiles, flashings, wall-girt arrangement and coating specifications.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    description:
      "Roll-form wall cladding panels with accurate profile geometry, protective coatings and dimensional consistency.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Verify profile dimensions, coating quality, panel straightness and fabrication accuracy before dispatch.",
    icon: SearchCheck,
  },
  {
    number: "05",
    title: "Professional Installation",
    description:
      "Install cladding panels, flashings, fasteners and accessories following approved engineering drawings.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Final Inspection & Handover",
    description:
      "Complete façade inspection, weatherproof detailing verification and final project handover.",
    icon: BadgeCheck,
  },
];

export default function WallCladdingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Engineering Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Engineering Design
            <span className="block">
              to Final Installation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild follows a structured engineering workflow to ensure
            every wall cladding system delivers long-term weather protection,
            structural reliability and premium architectural appearance.
          </p>

        </motion.div>

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline */}

          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-primary-red/10 lg:block" />

                    <div className="space-y-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative grid gap-5 lg:grid-cols-[56px_1fr] lg:items-start"
                >
                  {/* Timeline Icon */}

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#f8fafc] bg-primary-blue text-white shadow-[0_12px_32px_rgba(27,63,104,0.16)] transition-all duration-300 hover:bg-primary-red">
                    <Icon size={23} />
                  </div>

                  {/* Process Card */}

                  <div className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                          Process Step {item.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                          {item.title}
                        </h3>
                      </div>

                      <span className="pointer-events-none text-[52px] font-black leading-none text-primary-blue/[0.045]">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Engineering Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <BadgeCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Approved Engineering Inputs Guide Every Stage
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Panel profile, coating system, wall-girt spacing, flashing
                details, fastening arrangement and installation sequence are
                finalized according to approved drawings, building use and
                site conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}