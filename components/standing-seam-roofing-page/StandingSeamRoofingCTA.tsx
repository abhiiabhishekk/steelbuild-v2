"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Custom Engineered Roof Design",
  "Leak-Resistant Concealed Fastening",
  "Premium Industrial Roofing",
  "Fast Project Execution",
];

export default function StandingSeamRoofingCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_55%,#113158_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-red/20 blur-[110px]" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <Container>

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="relative z-10"
        ><div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
  {/* Left Content */}

  <div>
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
      <CheckCircle2
        size={16}
        className="text-primary-red"
      />
      Standing Seam Roofing Consultation
    </span>

    <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
      Planning a Premium
      <span className="block">
        Standing Seam Roof?
      </span>
    </h2>

    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70 md:text-lg">
      Share your building layout, roof geometry, structural information,
      insulation requirements and project schedule with our team for a
      coordinated roofing discussion.
    </p>

    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {highlights.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-sm"
        >
          <CheckCircle2
            size={18}
            className="shrink-0 text-primary-red"
          />

          <span className="text-sm font-black leading-6 text-white/85">
            {item}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Link
        href="/request-a-quote"
        className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
      >
        Request a Quote

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="/contact"
        className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
      >
        Contact Our Team

        <Phone size={19} />
      </Link>
    </div>
  </div>

  {/* Right Information Card */}

  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay: 0.1 }}
    className="rounded-[34px] border border-white/15 bg-white/[0.09] p-7 backdrop-blur-md md:p-9"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
      <FileText size={29} />
    </div>

    <p className="mt-7 text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
      Helpful Project Information
    </p>

    <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
      Share the Basics to Begin the Discussion
    </h3>

    <div className="mt-8 space-y-5">
      <div className="border-b border-white/10 pb-5">
        <h4 className="text-lg font-black text-white">
          Building & Roof Layout
        </h4>

        <p className="mt-2 text-sm font-medium leading-7 text-white/60">
          Building dimensions, roof slope, ridge arrangement, eave levels,
          skylights and roof openings.
        </p>
      </div>

      <div className="border-b border-white/10 pb-5">
        <h4 className="text-lg font-black text-white">
          Structural Information
        </h4>

        <p className="mt-2 text-sm font-medium leading-7 text-white/60">
          Roof purlin layout, support spacing, structural drawings and
          approved loading requirements.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-black text-white">
          Roofing Requirements
        </h4>

        <p className="mt-2 text-sm font-medium leading-7 text-white/60">
          Panel profile, insulation system, flashings, gutters, drainage,
          project location and expected timeline.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-[22px] bg-[#102f55] p-5">
      <p className="text-sm font-black leading-7 text-white/80">
        Final roof-panel selection, concealed clip arrangement, insulation,
        accessories and installation detailing are developed according to
        approved engineering inputs and site conditions.
      </p>
    </div>
  </motion.div>
</div>


        </motion.div>
      </Container>
    </section>
  );
}