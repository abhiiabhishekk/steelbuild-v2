"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "How can I apply for a position at Steelbuild?",
    answer:
      "You can apply through the Current Openings section or submit your resume using the Resume Submission form for future opportunities.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Yes. Suitable opportunities for fresh graduates and entry-level professionals are available depending on business requirements.",
  },
  {
    question: "Will I receive confirmation after submitting my resume?",
    answer:
      "Yes. Once backend integration is completed, an acknowledgement email will be sent automatically after successful submission.",
  },
  {
    question: "What documents should I keep ready?",
    answer:
      "Latest resume, educational qualifications, experience details, certifications and any relevant project portfolio.",
  },
  {
    question: "Do you hire for manufacturing and site positions?",
    answer:
      "Yes. Opportunities are available across manufacturing, quality, projects, engineering, detailing, sales and corporate functions.",
  },
];

export default function CareersFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <HelpCircle size={15} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Career Related Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Answers to some common questions about careers at Steelbuild.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.06)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-black text-primary-blue">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      open ? "rotate-180 text-primary-red" : "text-primary-blue"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="border-t border-gray-200 px-7 py-6">
                        <p className="leading-8 text-gray-600">
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