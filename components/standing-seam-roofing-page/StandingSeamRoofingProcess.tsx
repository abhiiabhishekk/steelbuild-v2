"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Factory,
  FileText,
  Hammer,
  ShieldCheck,
  CloudRain,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Project Consultation",
    description:
      "Understanding building requirements, roof geometry and overall project objectives.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Engineering & Roof Design",
    description:
      "Roof layout, panel profile, concealed clip arrangement, insulation and drainage coordination.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Structural Coordination",
    description:
      "Integration with primary steel framing, roof purlins and supporting members.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Material Manufacturing",
    description:
      "Precision manufacturing of standing seam roof panels, concealed clips and accessories.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Inspection of roofing components before dispatch to the project site.",
  },
  {
    number: "06",
    icon: Hammer,
    title: "Roof Installation",
    description:
      "Professional installation using engineered concealed-fixing methods.",
  },
  {
    number: "07",
    icon: CloudRain,
    title: "Weatherproof Detailing",
    description:
      "Completion of ridge, flashings, gutters, downpipes and roof interfaces.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Final Inspection & Handover",
    description:
      "Comprehensive inspection, documentation and final project handover.",
  },
];

export default function StandingSeamRoofingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <ClipboardCheck size={15} />
            Standing Seam Roofing Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Engineering
            <br />
            to Installation
            <br />
            A Structured Roofing Delivery Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every standing seam roofing project follows a coordinated
            engineering, fabrication and installation workflow to ensure
            structural compatibility, long-term weather protection and
            high-quality execution.
          </p>
        </motion.div>

        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            {/* Process Timeline */}

<div className="space-y-5">
  {processSteps.map((step, index) => {
    const Icon = step.icon;

    return (
      <motion.article
        key={step.number}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.45,
          delay: index * 0.05,
        }}
        className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
      >
        <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.05]">
          {step.number}
        </span>

        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
            <Icon size={24} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
              Step {step.number}
            </p>

            <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
              {step.title}
            </h3>

            <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
              {step.description}
            </p>
          </div>
        </div>
      </motion.article>
    );
  })}
</div>

{/* Right Panel */}

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65 }}
  className="sticky top-28 h-fit overflow-hidden rounded-[38px] bg-primary-blue p-10 shadow-[0_34px_95px_rgba(27,63,104,0.22)]"
>
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

  <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-primary-red/20 blur-[90px]" />

  <div className="relative z-10">
    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white">
      <Building2 size={30} />
    </div>

    <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
      Roof System Delivery
    </p>

    <h3 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">
      Engineering,
      <br />
      Fabrication &
      <br />
      Installation
      <br />
      Working Together
    </h3>

    <p className="mt-6 text-base leading-8 text-white/75">
      Every stage is coordinated to ensure the completed standing seam
      roofing system performs as one integrated industrial roof assembly.
    </p>

    <div className="mt-10 space-y-4">
      {[
        "Roof Design",
        "Panel Manufacturing",
        "Quality Control",
        "Installation",
        "Final Inspection",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm"
        >
          <BadgeCheck
            size={18}
            className="shrink-0 text-primary-red"
          />

          <span className="text-sm font-bold text-white">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>

</div>

{/* Bottom Note */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto mt-16 max-w-5xl rounded-[28px] border-l-4 border-primary-red bg-white px-8 py-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)]"
>
  <div className="flex items-start gap-4">
    <BadgeCheck
      size={24}
      className="mt-0.5 shrink-0 text-primary-red"
    />

    <p className="text-sm font-bold leading-7 text-primary-blue">
      The final installation sequence, panel arrangement, clip spacing,
      flashings, insulation systems and roof accessories are executed
      according to approved engineering drawings and project
      specifications.
    </p>
  </div>
</motion.div>

</Container>
</section>
);
}
        // </div>


        