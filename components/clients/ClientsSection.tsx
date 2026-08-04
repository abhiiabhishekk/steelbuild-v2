"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";

import Container from "@/components/layout/Container";
import ClientLogosModal from "./ClientLogosModal";
import LogoMarquee from "./LogoMarquee";

export default function ClientsSection() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-primary-red/[0.05] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-primary-blue/[0.07] blur-3xl" />

        <Container>
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-auto mb-16 max-w-4xl text-center lg:mb-20"
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Trusted By Industry Leaders
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Powering India&apos;s Leading
              <span className="block">Industrial Brands.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-gray-600">
              Leading organizations trust Steelbuild Infra Projects Limited for
              dependable Pre-Engineered Building solutions across manufacturing,
              warehousing, logistics, FMCG, automotive, pharmaceutical and
              infrastructure sectors.
            </p>
          </motion.div>

          {/* Logo marquee */}

          <div className="relative z-10">
            <LogoMarquee />
          </div>

          {/* View all clients CTA */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative z-10 mt-12 flex flex-col items-center text-center"
          >
            <button
              type="button"
              onClick={() => setIsClientModalOpen(true)}
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-blue px-8 py-4 font-black text-white shadow-[0_20px_50px_rgba(27,63,104,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:shadow-[0_24px_60px_rgba(194,17,25,0.22)]"
            >
              <Building2 size={20} />

              View All Clients

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <p className="mt-4 text-sm font-semibold text-gray-500">
              Explore the organizations that trust Steelbuild.
            </p>
          </motion.div>
        </Container>
      </section>

      <ClientLogosModal
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      />
    </>
  );
}