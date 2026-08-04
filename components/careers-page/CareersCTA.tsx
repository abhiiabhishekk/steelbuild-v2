"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-red text-white shadow-xl">
            <BriefcaseBusiness size={36} />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Build Your Career With Steelbuild
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Join a team committed to engineering excellence, innovation,
            manufacturing quality and professional growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
  <Link
    href="#open-positions"
    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
  >
    Explore Openings

    <ArrowUpRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>

  <Link
    href="#submit-resume"
    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-primary-blue px-8 py-4 font-black !text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
  >
    Submit Resume

    <ArrowUpRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>
</div>
        </motion.div>
      </Container>
    </section>
  );
}