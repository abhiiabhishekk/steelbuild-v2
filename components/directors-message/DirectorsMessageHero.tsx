"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  MessageSquareQuote,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function DirectorsMessageHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-44 top-16 h-[440px] w-[440px] rounded-full bg-primary-red/[0.055] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.09] blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.29em] text-primary-red">
              <MessageSquareQuote size={16} />
              Directors&apos; Message
            </span>

            <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Leadership With Vision,
              <span className="block">
                Integrity and Commitment
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-9 text-gray-600">
              Our Directors share the principles, commitments and operating
              values guiding Steelbuild&apos;s continued growth and project
              delivery.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#directors-message"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.27)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
              >
                Read Directors&apos; Messages

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/about/leadership"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Meet Our Leadership
                <UsersRound size={20} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-black text-primary-blue">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-primary-red" />
                Customer Trust
              </span>

              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-primary-red" />
                Manufacturing Excellence
              </span>

              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-primary-red" />
                Quality Commitment
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}