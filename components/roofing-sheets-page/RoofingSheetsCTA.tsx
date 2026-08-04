"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const projectInputs = [
  {
    icon: Building2,
    title: "Building & Roof Layout",
    description:
      "Building dimensions, roof slope, ridge arrangement, eave levels, roof openings and skylight requirements.",
  },
  {
    icon: Layers3,
    title: "Roofing Specifications",
    description:
      "Required sheet profile, material thickness, protective coating, insulation and roof-accessory requirements.",
  },
  {
    icon: FileText,
    title: "Project Information",
    description:
      "Structural drawings, project location, environmental conditions, site requirements and expected timeline.",
  },
];

export default function RoofingSheetsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 isolate overflow-hidden rounded-[42px] bg-primary-blue shadow-[0_40px_110px_rgba(27,63,104,0.24)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-primary-red/20 blur-[110px]" />

          <div className="relative z-10 grid gap-12 px-8 py-12 md:px-12 md:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:px-16 lg:py-20">
            {/* Left Content */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <ShieldCheck
                  size={16}
                  className="text-primary-red"
                />
                Roofing Sheet Consultation
              </span>

              <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
                Planning an Industrial
                <span className="block">
                  Roofing Sheet System?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70 md:text-lg">
                Share your building layout, structural information, roofing
                specifications, insulation requirements and project schedule
                with our team for a coordinated technical discussion.
              </p>

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
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/20"
                >
                  Contact Our Team

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right Project Information */}

            <div className="space-y-5">
  {projectInputs.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: index * 0.08,
        }}
        className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-md"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
            <Icon size={24} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
              Project Input
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm font-medium leading-7 text-white/70">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  })}

  <div className="rounded-[26px] border border-primary-red/30 bg-primary-red/10 p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <BadgeCheck size={24} />
      </div>

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Engineering Support
        </p>

        <h3 className="mt-2 text-xl font-black text-white">
          Complete Roofing System Coordination
        </h3>

        <p className="mt-3 text-sm font-medium leading-7 text-white/75">
          Our engineering team coordinates roofing sheets, structural framing,
          insulation systems, flashings, drainage layouts and compatible roof
          accessories to deliver a complete industrial roofing solution.
        </p>
      </div>
    </div>
  </div>
</div>

          </div>

                  </motion.div>
      </Container>
    </section>
  );
}