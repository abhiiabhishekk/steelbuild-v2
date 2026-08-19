"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ChevronDown,
  CircleHelp,
  FileText,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { requestQuoteFaqs } from "@/data/request-quote-faq";

const notes = [
  {
    icon: FileText,
    title: "Share Available Drawings",
    text:
      "Preliminary architectural or structural information helps technical evaluation.",
  },

  {
    icon: Ruler,
    title: "Provide Dimensions",
    text:
      "Width, length, clear height and area help define the initial building scope.",
  },

  {
    icon: MapPin,
    title: "Confirm Location",
    text:
      "Project location is important for design, logistics and execution planning.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section
      id="request-quote-faq"
      aria-labelledby="request-quote-faq-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.65,
            }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
              <CircleHelp size={15} />

              Frequently Asked Questions
            </span>

            <h2
              id="request-quote-faq-heading"
              className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[56px]"
            >
              Questions Before Requesting a Quote?
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-gray-600">
              Find answers to common questions about project information,
              technical review, drawings, quotation preparation and execution
              support.
            </p>

            {/* Notes */}

            <div className="mt-9 space-y-4">
              {notes.map((item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    key={
                      item.title
                    }
                    className="flex gap-4 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                      <Icon
                        size={22}
                      />
                    </div>

                    <div>
                      <h3 className="font-black text-primary-blue">
                        {
                          item.title
                        }
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                        {
                          item.text
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important note */}

            <div className="mt-6 flex items-start gap-3 rounded-[24px] bg-primary-blue p-6 shadow-[0_24px_65px_rgba(27,63,104,0.18)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-white/75">
                Final quotation terms, technical scope and execution
                responsibilities are confirmed only after project evaluation
                and formal discussion.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              FAQ ACCORDION
          ================================================== */}

          <div className="space-y-4">
            {requestQuoteFaqs.map(
              (faq, index) => {
                const open =
                  openIndex ===
                  index;

                const buttonId =
                  `request-quote-faq-button-${index}`;

                const answerId =
                  `request-quote-faq-answer-${index}`;

                return (
                  <motion.article
                    key={
                      faq.question
                    }
                    initial={{
                      opacity: 0,
                      y: 22,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin:
                        "-60px",
                    }}
                    transition={{
                      duration:
                        0.45,

                      delay:
                        Math.min(
                          index *
                            0.04,
                          0.24,
                        ),
                    }}
                    className={`overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${
                      open
                        ? "border-primary-red/25 shadow-[0_22px_65px_rgba(27,63,104,0.11)]"
                        : "border-gray-200 shadow-[0_12px_35px_rgba(27,63,104,0.05)] hover:border-primary-red/20"
                    }`}
                  >
                    <h3>
                      <button
                        id={
                          buttonId
                        }
                        type="button"
                        onClick={() =>
                          setOpenIndex(
                            (
                              current,
                            ) =>
                              current ===
                              index
                                ? null
                                : index,
                          )
                        }
                        aria-expanded={
                          open
                        }
                        aria-controls={
                          answerId
                        }
                        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-7"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors duration-300 ${
                              open
                                ? "bg-primary-red text-white"
                                : "bg-primary-red/10 text-primary-red"
                            }`}
                          >
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <span className="text-base font-black leading-7 text-primary-blue md:text-lg">
                            {
                              faq.question
                            }
                          </span>
                        </div>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            open
                              ? "rotate-180 bg-primary-red text-white"
                              : "bg-primary-blue/5 text-primary-blue"
                          }`}
                        >
                          <ChevronDown
                            size={
                              19
                            }
                          />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence
                      initial={
                        false
                      }
                    >
                      {open && (
                        <motion.div
                          id={
                            answerId
                          }
                          role="region"
                          aria-labelledby={
                            buttonId
                          }
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height:
                              "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration:
                              0.3,

                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                        >
                          <div className="border-t border-gray-100 px-6 pb-7 pt-5 md:px-7">
                            <p className="pl-[52px] text-sm font-medium leading-7 text-gray-600 md:text-base md:leading-8">
                              {
                                faq.answer
                              }
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
        </div>
      </Container>
    </section>
  );
}