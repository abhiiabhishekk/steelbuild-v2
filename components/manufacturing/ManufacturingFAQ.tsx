"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { manufacturingFaqs } from "@/data/manufacturing-faq";

export default function ManufacturingFAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section
      id="manufacturing-faq"
      aria-labelledby="manufacturing-faq-heading"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <HelpCircle size={16} />
            Manufacturing FAQs
          </span>

          <h2
            id="manufacturing-faq-heading"
            className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Learn more about Steelbuild&apos;s manufacturing capabilities,
            quality systems, machinery and project delivery process.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl space-y-4">
          {manufacturingFaqs.map(
            (faq, index) => {
              const isOpen =
                openIndex === index;

              const buttonId =
                `manufacturing-faq-button-${index}`;

              const answerId =
                `manufacturing-faq-answer-${index}`;

              return (
                <motion.article
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_14px_45px_rgba(27,63,104,0.07)]"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          isOpen
                            ? null
                            : index,
                        )
                      }
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                      aria-expanded={
                        isOpen
                      }
                      aria-controls={
                        answerId
                      }
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
                        <ChevronDown
                          size={21}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={
                          buttonId
                        }
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="border-t border-gray-100 px-6 py-6 text-base leading-8 text-gray-600 md:px-8">
                          {
                            faq.answer
                          }
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            },
          )}
        </div>
      </Container>
    </section>
  );
}