"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  Factory,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const process = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "Understanding project objectives, dimensions, operational requirements, design loads and site conditions.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Engineering & Design",
    description:
      "Developing optimized structural systems, GA drawings and engineering calculations.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Precision fabrication of structural members, secondary framing and accessories under quality-controlled processes.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Inspection & Quality",
    description:
      "Comprehensive quality inspections throughout fabrication and finishing before dispatch.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery",
    description:
      "Coordinated logistics and dispatch planning for efficient transportation to project sites.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Site Erection",
    description:
      "Professional installation and project coordination to achieve timely building completion.",
  },
];

export default function PEBProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
            <ShieldCheck size={15} />
            Project Workflow
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl">
            Our Pre-Engineered Building
            <span className="block">
              Project Execution Process
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every Steelbuild project follows a structured engineering,
            manufacturing and execution workflow to ensure consistency,
            quality and timely delivery.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Vertical line */}

          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-primary-red via-primary-blue to-primary-red lg:block" />

          <div className="space-y-8">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative lg:pl-24"
                >
                  {/* Timeline dot */}

                  <div className="absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-primary-red text-white shadow-[0_15px_35px_rgba(194,17,25,.3)] lg:flex">
                    <Icon size={22} />
                  </div>

                  <div className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,.15)]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white lg:hidden">
                          <Icon size={28} />
                        </div>

                        <div>
                          <span className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                            Stage {item.number}
                          </span>

                          <h3 className="mt-2 text-3xl font-black text-primary-blue">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-6xl font-black text-primary-blue/5">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-primary-red to-[#991018] p-10 text-white shadow-[0_30px_80px_rgba(194,17,25,.25)]"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/80">
                Complete Turnkey Solution
              </span>

              <h3 className="mt-5 text-4xl font-black leading-tight">
                From Engineering
                <span className="block">
                  To Project Completion
                </span>
              </h3>
            </div>

            <p className="text-lg leading-9 text-white/90">
              Steelbuild integrates design, detailing, manufacturing,
              logistics and project execution into one coordinated workflow,
              delivering dependable Pre-Engineered Building solutions for
              industrial infrastructure across India.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}