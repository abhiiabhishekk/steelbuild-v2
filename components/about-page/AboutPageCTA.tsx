"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPageCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-20 text-white">
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary-red/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Let's Build Together
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.04em] lg:text-[64px]">
            Ready To Build Your Next
            <span className="block">
              Industrial Landmark?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
            Partner with Steelbuild Infra Projects Limited for premium
            Pre-Engineered Building solutions designed with engineering
            excellence, speed and long-term reliability.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-xl bg-primary-red px-10 py-5 font-bold text-white shadow-xl shadow-primary-red/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a50f16]"
            >
              Contact Us
            </Link>

            <Link
              href="/projects"
              className="rounded-xl border border-white/20 bg-white/10 px-10 py-5 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-primary-blue"
            >
              View Projects
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}