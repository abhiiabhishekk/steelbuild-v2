"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "What is a Pre-Engineered Building (PEB)?",
    answer:
      "A Pre-Engineered Building is a steel structure designed, fabricated and manufactured in a factory, then assembled at site. PEB structures are widely used for warehouses, factories, industrial buildings, logistics parks and commercial steel buildings.",
  },
  {
    question: "What are the advantages of PEB structures?",
    answer:
      "PEB structures offer faster construction, cost efficiency, high durability, large clear spans, design flexibility, low maintenance and future expansion possibilities.",
  },
  {
    question: "Which industries use Pre-Engineered Buildings?",
    answer:
      "PEB buildings are used in manufacturing, warehousing, logistics, automobile, food processing, pharmaceuticals, FMCG, engineering, infrastructure and commercial sectors.",
  },
  {
    question: "Can PEB buildings be customized?",
    answer:
      "Yes. Steelbuild Infra Projects designs customized PEB solutions based on span, height, load requirements, crane requirements, roofing, cladding, insulation, ventilation and future expansion needs.",
  },
  {
    question: "Are PEB buildings suitable for warehouses and factories?",
    answer:
      "Yes. PEB technology is highly suitable for warehouse buildings, factory buildings, industrial sheds, logistics facilities and production plants because it enables large spaces, faster delivery and efficient structural performance.",
  },
  {
    question: "What quality standards does Steelbuild follow?",
    answer:
      "Steelbuild Infra Projects follows strong quality inspection systems and ISO 9001:2015 certified quality management practices to ensure reliable manufacturing and project execution.",
  },
  {
    question: "What is the manufacturing capacity of Steelbuild?",
    answer:
      "Steelbuild Infra Projects has an installed annual manufacturing capacity of 50,000 MT, supported by advanced manufacturing facilities and modern steel fabrication systems.",
  },
  {
    question: "Why choose Steelbuild Infra Projects for PEB solutions?",
    answer:
      "Steelbuild combines engineering expertise, advanced manufacturing, quality control, timely execution and customer-focused delivery to provide reliable Pre-Engineered Building solutions across India.",
  },
];

export default function ProductsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.05),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_38%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Products FAQ
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Everything You Need to Know
            <br />
            About PEB Solutions
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Answers to common questions about Pre-Engineered Buildings,
            warehouse buildings, factory buildings and industrial steel
            structures.
          </p>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_16px_50px_rgba(27,63,104,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <span className="text-lg font-black text-primary-blue lg:text-xl">
                    {faq.question}
                  </span>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="border-t border-gray-100 px-7 pb-7 pt-5">
                        <p className="text-base leading-8 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}