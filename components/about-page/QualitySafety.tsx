"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { qualityData } from "@/data/quality";
import QualityCard from "./QualityCard";

export default function QualitySafety() {
  return (
    <section 
      id="quality-safety"
      className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-44 top-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-red/5 blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Quality & Safety
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-6xl">
            Building Excellence
            <br />
            Through Quality.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Every structure we manufacture reflects our commitment to quality,
            safety, engineering precision and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {qualityData.map((item, index) => (
            <QualityCard
              key={item.title}
              index={index}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}