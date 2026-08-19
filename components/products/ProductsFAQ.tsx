"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Minus,
  Plus,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { productsFaqs } from "@/data/products-faq";

export default function ProductsFAQ() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  return (
    <section
      id="products-faq"
      aria-labelledby="products-faq-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.05),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_38%)]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Products FAQ
          </span>

          <h2
            id="products-faq-heading"
            className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            Everything You Need to Know
            <span className="block">
              About PEB Solutions
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Answers to common questions about Pre-Engineered Buildings,
            warehouse buildings, factory buildings and industrial steel
            structures.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="relative z-10 mx-auto max-w-5xl space-y-5">
          {productsFaqs.map(
            (faq, index) => {
              const isOpen =
                activeIndex === index;

              const answerId =
                `product-faq-answer-${index}`;

              const buttonId =
                `product-faq-button-${index}`;

              return (
                <motion.article
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_16px_50px_rgba(27,63,104,0.06)] transition-all duration-300 hover:border-primary-red/20 hover:shadow-[0_20px_60px_rgba(27,63,104,0.09)]"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setActiveIndex(
                          isOpen
                            ? null
                            : index,
                        )
                      }
                      className="group flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    >
                      <span className="text-lg font-black leading-7 text-primary-blue transition-colors duration-300 group-hover:text-primary-red lg:text-xl">
                        {faq.question}
                      </span>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        {isOpen ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence
                    initial={false}
                  >
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
                          duration: 0.28,
                        }}
                      >
                        <div className="border-t border-gray-100 px-7 pb-7 pt-5">
                          <p className="text-base font-medium leading-8 text-gray-600">
                            {faq.answer}
                          </p>
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