"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.08),transparent_38%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Contact Us
          </span>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-[-0.05em] text-primary-blue md:text-6xl lg:text-[76px]">
            Let&apos;s Build Your
            <span className="block text-primary-blue">Next PEB Project</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Connect with Steelbuild Infra Projects Limited for Pre-Engineered
            Buildings, warehouses, factory buildings, industrial sheds and
            customized steel infrastructure solutions across India.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}