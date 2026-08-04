"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import Container from "@/components/layout/Container";

const benefits = [
  "Composite Floor Engineering",
  "Permanent Steel Formwork",
  "Fast Project Execution",
  "High Structural Performance",
];

export default function DeckSheetsCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-24 lg:py-32">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-white">

            <BadgeCheck size={15} />

            Steelbuild Deck Sheets

          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl lg:text-[64px]">

            Engineered Composite
            <br />

            Floor Systems Built
            <br />

            for Performance

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">

            Steelbuild delivers premium deck sheet solutions for industrial,
            commercial and multi-storey buildings with precision engineering,
            controlled manufacturing and reliable structural performance.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">

            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-primary-red"
                />

                <span className="text-sm font-bold text-white">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-9 py-4 font-black !text-white shadow-[0_20px_45px_rgba(194,17,25,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Request a Consultation

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/company-brochure"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-9 py-4 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Download Brochure

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
              <Layers3
                size={34}
                className="mx-auto text-primary-red"
              />

              <h3 className="mt-5 text-xl font-black text-white">
                Composite Deck Floors
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Permanent steel formwork designed for composite floor
                construction and structural efficiency.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
              <Building2
                size={34}
                className="mx-auto text-primary-red"
              />

              <h3 className="mt-5 text-xl font-black text-white">
                Multi-Storey Buildings
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Engineered deck systems for industrial, commercial and office
                developments requiring reliable floor construction.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
              <BadgeCheck
                size={34}
                className="mx-auto text-primary-red"
              />

              <h3 className="mt-5 text-xl font-black text-white">
                Engineered Reliability
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Every deck sheet solution is developed according to approved
                engineering standards and project requirements.
              </p>
            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}