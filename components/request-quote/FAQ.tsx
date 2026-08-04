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

const faqs = [
  {
    question: "How long does it take to receive a quotation?",
    answer:
      "The response time depends on the completeness and technical complexity of the submitted requirement. Our team first reviews the project location, dimensions, building usage, loading requirements, roofing system and execution scope before proceeding with technical discussion and quotation preparation.",
  },
  {
    question: "What information is required for a PEB quotation?",
    answer:
      "Useful information includes project location, industry, building usage, approximate area, width, length, clear height, crane requirement, mezzanine requirement, roofing preference, timeline and available drawings. A quotation can still begin with partial information, but more complete inputs help improve accuracy.",
  },
  {
    question: "Can I request a quote without finalized drawings?",
    answer:
      "Yes. You may submit the available project information even when final drawings are not ready. Our team can discuss the preliminary requirement and advise what additional technical inputs may be required for further evaluation.",
  },
  {
    question: "Can I upload architectural or structural drawings?",
    answer:
      "Yes. You can upload supporting drawings and project files through the quotation form. Supported formats include PDF, DWG, DXF, ZIP, RAR, JPG and PNG, subject to the file-size limit shown on the form.",
  },
  {
    question: "Does Steelbuild execute projects across India?",
    answer:
      "Yes. Steelbuild supports projects across India through integrated engineering, manufacturing, dispatch and project execution capabilities. Final execution planning depends on location, scope, schedule and site conditions.",
  },
  {
    question: "Do you provide design and engineering support?",
    answer:
      "Yes. Steelbuild provides project-specific Pre-Engineered Building engineering based on dimensions, loading, building usage, equipment, operational workflow, environmental conditions and applicable design requirements.",
  },
  {
    question: "Can you provide roofing and cladding as part of the project?",
    answer:
      "Yes. Roofing and cladding systems can be included as part of the project scope. Available solutions may include single-skin roofing, standing seam systems, sandwich panels, wall cladding, deck sheets and related building accessories.",
  },
  {
    question: "Do you provide erection and installation support?",
    answer:
      "Project execution and erection support may be included depending on the agreed project scope. The quotation and technical proposal will clarify the responsibilities related to manufacturing, supply, erection, installation and final execution.",
  },
  {
    question: "Is there a minimum project size for requesting a quotation?",
    answer:
      "Project feasibility is reviewed according to scope, location, structure, technical requirements and commercial considerations. You may submit your requirement and our team will evaluate whether it is suitable for Steelbuild's PEB capabilities.",
  },
  {
    question: "Will the submitted information remain confidential?",
    answer:
      "Submitted project information is used for requirement evaluation, technical discussion and quotation purposes. Sensitive drawings or documents should only be shared through authorized Steelbuild communication channels.",
  },
];

const notes = [
  {
    icon: FileText,
    title: "Share Available Drawings",
    text: "Preliminary architectural or structural information helps technical evaluation.",
  },
  {
    icon: Ruler,
    title: "Provide Dimensions",
    text: "Width, length, clear height and area help define the initial building scope.",
  },
  {
    icon: MapPin,
    title: "Confirm Location",
    text: "Project location is important for design, logistics and execution planning.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
              <CircleHelp size={15} />
              Frequently Asked Questions
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[56px]">
              Questions Before Requesting a Quote?
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-gray-600">
              Find answers to common questions about project information,
              technical review, drawings, quotation preparation and execution
              support.
            </p>

            <div className="mt-9 space-y-4">
              {notes.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-black text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

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

          {/* Accordion */}

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.04, 0.24),
                  }}
                  className={`overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${
                    open
                      ? "border-primary-red/25 shadow-[0_22px_65px_rgba(27,63,104,0.11)]"
                      : "border-gray-200 shadow-[0_12px_35px_rgba(27,63,104,0.05)] hover:border-primary-red/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    aria-expanded={open}
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
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-base font-black leading-7 text-primary-blue md:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-180 bg-primary-red text-white"
                          : "bg-primary-blue/5 text-primary-blue"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="border-t border-gray-100 px-6 pb-7 pt-5 md:px-7">
                          <p className="pl-[52px] text-sm font-medium leading-7 text-gray-600 md:text-base md:leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}