"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Factory,
  FileSearch,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Assessment",
    description:
      "We study the industry application, operational workflow, capacity, building dimensions, specialized equipment and future expansion plans.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Engineering Evaluation",
    description:
      "Structural loading, span, clear height, crane requirements, insulation, ventilation and functional planning are technically evaluated.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Customized PEB Design",
    description:
      "A project-specific building system is developed to optimize structural performance, material efficiency and operational usability.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Controlled Manufacturing",
    description:
      "Primary and secondary members, roofing, cladding and accessories are manufactured under controlled fabrication and QA/QC processes.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery & Execution",
    description:
      "Components are packed, dispatched and coordinated for organized site erection, inspection and reliable project completion.",
  },
];

export default function IndustryProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <ShieldCheck size={15} />
            Our Industry Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Industry Requirement to Reliable Project Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every project follows a structured engineering and execution
            process to ensure that the final building system supports
            operational efficiency, safety, durability and future growth.
          </p>
        </motion.div>

        {/* Process cards */}

        <div className="relative z-10 mt-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)]"
                >
                  {/* Number */}

                  <div className="absolute right-5 top-4 text-[54px] font-black leading-none text-primary-blue/[0.045]">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Step {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 text-primary-red xl:hidden">
                      <ArrowRight size={17} />

                      <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                        Next Stage
                      </span>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>

          {/* Desktop connecting line */}

          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[72px] hidden h-px bg-gradient-to-r from-transparent via-primary-red/25 to-transparent xl:block" />
        </div>

        {/* Bottom execution panel */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-14 overflow-hidden rounded-[34px] bg-primary-blue px-7 py-10 shadow-[0_30px_90px_rgba(27,63,104,0.2)] md:px-10 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                Integrated Project Execution
              </p>

              <h3 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                One Coordinated Process Across Engineering, Manufacturing and
                Delivery
              </h3>

              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
                Steelbuild&apos;s coordinated project approach helps maintain
                technical consistency, manufacturing quality and reliable
                execution throughout the complete project lifecycle.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex min-h-[58px] min-w-[245px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Start Your Project

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}