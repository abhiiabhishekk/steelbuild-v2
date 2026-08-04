"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  ScanLine,
} from "lucide-react";

import Container from "@/components/layout/Container";

const qualityChecks = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Incoming Material Inspection",
    description:
      "Steel plates, coils and structural materials are verified against approved specifications before entering production.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Dimensional Accuracy",
    description:
      "Fabricated components are checked for dimensions, alignment, tolerances and production accuracy.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Welding Inspection",
    description:
      "Weld quality, continuity and workmanship are reviewed through controlled inspection procedures.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Surface Preparation",
    description:
      "Shot-blasted and prepared surfaces are inspected before applying approved protective coating systems.",
  },
  {
    number: "05",
    icon: FileCheck2,
    title: "Final Quality Audit",
    description:
      "Finished structural members undergo final checks for fabrication quality, coating and project compliance.",
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "Dispatch Verification",
    description:
      "Marking, packing, documentation and dispatch readiness are verified before material leaves the facility.",
  },
];

const standards = [
  {
    icon: Award,
    value: "ISO 9001:2015",
    label: "Certified Quality Management System",
  },
  {
    icon: BadgeCheck,
    value: "Multi-Stage",
    label: "Inspection Throughout Production",
  },
  {
    icon: ShieldCheck,
    value: "Strict QA/QC",
    label: "Controlled Manufacturing Procedures",
  },
];

export default function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-[120px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <ShieldCheck size={16} />
            Quality & Certifications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Manufacturing Backed by Controlled Quality Standards
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every Steelbuild component is manufactured, inspected, documented
            and prepared for dispatch through a structured quality assurance
            process focused on consistency, compliance and reliability.
          </p>
        </motion.div>

        {/* Top quality standards */}

        <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-3">
          {standards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_32px_85px_rgba(27,63,104,0.14)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={30} />
                </div>

                <p className="mt-6 text-2xl font-black leading-tight text-primary-blue">
                  {item.value}
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">
                  {item.label}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Main quality block */}

        <div className="relative z-10 mt-16 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Left panel */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[34px] bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#24578d_55%,#12345e_100%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/25">
                <Award size={32} />
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
                Certified Quality Systems
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Quality Is Built Into Every Manufacturing Stage
              </h3>

              <p className="mt-6 text-base leading-8 text-white/70">
                Our quality systems support material verification, fabrication
                control, dimensional checks, welding inspection, surface
                preparation and final dispatch verification.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                {[
                  "Approved material verification",
                  "Production-stage inspection",
                  "Dimensional and welding checks",
                  "Final dispatch documentation",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-sm font-bold leading-7 text-white/80"
                  >
                    <BadgeCheck
                      size={19}
                      className="mt-1 shrink-0 text-primary-red"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quality cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {qualityChecks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group rounded-[26px] border border-gray-200 bg-[#f8fafc] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_22px_65px_rgba(27,63,104,0.11)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-black tracking-[0.18em] text-primary-red/40">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-black leading-tight tracking-[-0.025em] text-primary-blue">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-600">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-gray-200 bg-[#f8fafc] px-7 py-8 text-center md:flex-row md:text-left lg:px-10"
        >
          <div className="flex max-w-3xl items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <ClipboardCheck size={27} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-primary-red">
                Steelbuild Quality Commitment
              </p>

              <p className="mt-3 text-lg font-black leading-8 text-primary-blue">
                Every structural member is manufactured, inspected and
                dispatched under controlled quality procedures.
              </p>
            </div>
          </div>

          <div className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary-blue px-6 py-3 text-sm font-black text-white">
            <BadgeCheck size={19} className="text-primary-red" />
            Quality-Controlled Production
          </div>
        </motion.div>
      </Container>
    </section>
  );
}