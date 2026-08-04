"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "What is Steelbuild's annual manufacturing capacity?",
    answer:
      "Steelbuild Infra Projects operates three integrated manufacturing units with a combined annual capacity of approximately 50,000 MT for Pre-Engineered Buildings and structural steel systems.",
  },
  {
    question: "Where are Steelbuild's manufacturing facilities located?",
    answer:
      "Our manufacturing facilities are located at Katwal and Halalpur in Sonipat, Haryana. These units support primary framing, secondary members, roofing, cladding, fabrication, quality inspection, packing and dispatch.",
  },
  {
    question: "What machinery is used in Steelbuild's manufacturing process?",
    answer:
      "Our facilities use CNC multi-torch plasma cutting systems, heavy-duty H-beam welding lines, automatic shot blasting machines, C and Z punching lines, roll-forming machines, press brakes and down-take pipe roll-forming systems.",
  },
  {
    question: "How does Steelbuild maintain manufacturing quality?",
    answer:
      "Quality is controlled through incoming material inspection, dimensional checks, welding inspection, surface preparation verification, final quality audits and dispatch-stage documentation.",
  },
  {
    question: "Does Steelbuild manufacture roofing and cladding systems?",
    answer:
      "Yes. Steelbuild manufactures roofing sheets, standing seam roofing systems, cladding sheets, deck sheets, secondary members and related sheeting accessories.",
  },
  {
    question: "Can Steelbuild handle large-scale industrial projects?",
    answer:
      "Yes. Our multi-unit infrastructure, high-capacity machinery and organized production systems allow us to support large factories, warehouses, logistics parks and industrial building projects.",
  },
  {
    question: "What insulation solutions are available?",
    answer:
      "Steelbuild offers air bubble insulation, glass wool and rock wool systems for thermal performance, acoustic control and fire resistance.",
  },
  {
    question: "Does Steelbuild support pan-India delivery?",
    answer:
      "Yes. Finished components are marked, packed and dispatched through an organized logistics system for project delivery across India.",
  },
];

export default function ManufacturingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <HelpCircle size={16} />
            Manufacturing FAQs
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Learn more about Steelbuild&apos;s manufacturing capabilities,
            quality systems, machinery and project delivery process.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_14px_45px_rgba(27,63,104,0.07)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-black leading-7 text-primary-blue md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary-red text-white"
                        : "bg-primary-red/10 text-primary-red"
                    }`}
                  >
                    <ChevronDown size={21} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 px-6 py-6 text-base leading-8 text-gray-600 md:px-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}