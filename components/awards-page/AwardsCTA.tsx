"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

export default function AwardsCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#12355d_0%,#1b3f68_45%,#27548a_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary-red/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[140px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-red text-white shadow-2xl shadow-primary-red/30">
            <Award size={38} />
          </div>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Engineering Excellence
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
            Recognition Inspires Us.
            <br />
            Commitment Defines Us.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-8 text-white/75">
            Every award, appreciation and successful project reflects the trust
            placed in Steelbuild Infra Projects. We continue building stronger
            industrial infrastructure through quality, engineering precision and
            dependable execution.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
  <Link
    href="/projects"
    className="group inline-flex items-center gap-3 rounded-2xl bg-primary-red px-8 py-5 text-base font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:!text-white"
  >
    Explore Our Projects

    <ArrowRight
      size={20}
      className="text-white transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  <Link
    href="/contact"
    className="group inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-5 text-base font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20 hover:!text-white"
  >
    Contact Our Team

    <Phone
      size={20}
      className="text-white transition-transform duration-300 group-hover:rotate-6"
    />
  </Link>
</div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <h3 className="text-4xl font-black text-white">700+</h3>
              <p className="mt-2 text-sm font-semibold text-white/70">
                Completed Projects
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <h3 className="text-4xl font-black text-white">500+</h3>
              <p className="mt-2 text-sm font-semibold text-white/70">
                Happy Clients
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <h3 className="text-4xl font-black text-white">50,000 MT</h3>
              <p className="mt-2 text-sm font-semibold text-white/70">
                Annual Manufacturing Capacity
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}