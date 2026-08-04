"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function ProductsIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Complete PEB Product Portfolio
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Engineered Solutions for
            <br />
            Every Industry
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
            Steelbuild Infra Projects Limited offers a comprehensive range of
            Pre-Engineered Building (PEB) solutions designed to meet the
            evolving requirements of industrial, commercial, warehousing,
            logistics and infrastructure sectors. Every structure is engineered
            for maximum strength, faster installation, cost efficiency and
            long-term durability.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}