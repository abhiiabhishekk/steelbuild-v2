"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Factory,
  FileCheck2,
  PhoneCall,
} from "lucide-react";

import Container from "@/components/layout/Container";

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Your Requirement",
    description:
      "Share your project details, location, dimensions and technical requirements through our quotation form.",
  },
  {
    step: "02",
    icon: FileCheck2,
    title: "Engineering Review",
    description:
      "Our engineering team reviews your project requirements and evaluates the most suitable PEB solution.",
  },
  {
    step: "03",
    icon: PhoneCall,
    title: "Technical Discussion",
    description:
      "Our experts connect with you to clarify project scope, specifications and execution requirements.",
  },
  {
    step: "04",
    icon: Factory,
    title: "Proposal & Quotation",
    description:
      "Receive a customized technical proposal and commercial quotation tailored to your project.",
  },
];

export default function QuoteProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
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
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto min-w-0 max-w-4xl text-center"
        >
          <span className="inline-flex max-w-full rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Our Process
          </span>

          <h2 className="mt-7 break-words text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Inquiry to Project Proposal
          </h2>

          <p className="mx-auto mt-6 max-w-3xl break-words text-lg leading-8 text-gray-600">
            Every project follows a structured engineering workflow to ensure
            accurate technical evaluation and a customized quotation.
          </p>
        </motion.div>

        <div className="relative mt-20 min-w-0">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-[2px] bg-gradient-to-r from-primary-red via-primary-blue/30 to-primary-red lg:block" />

          <div className="grid min-w-0 gap-8 lg:grid-cols-4">
            {process.map(
              (item, index) => {
                const Icon =
                  item.icon;

                return (
                  <motion.div
                    key={item.step}
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
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.08,
                    }}
                    className="relative min-w-0 text-center"
                  >
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#f7f9fc] bg-primary-blue text-white shadow-[0_18px_55px_rgba(27,63,104,0.15)] transition-all duration-300 hover:scale-110 hover:bg-primary-red">
                      <Icon size={34} />
                    </div>

                    <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                      Step {item.step}
                    </p>

                    <h3 className="mt-3 break-words text-2xl font-black leading-tight text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-xs break-words text-sm leading-7 text-gray-500">
                      {
                        item.description
                      }
                    </p>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-20 min-w-0 max-w-5xl rounded-[30px] border border-primary-blue/10 bg-white p-8 text-center shadow-[0_20px_60px_rgba(27,63,104,0.08)]"
        >
          <p className="break-words text-base font-medium leading-8 text-gray-600">
            Every quotation is prepared after understanding your project
            requirements. This helps us recommend the most suitable
            Pre-Engineered Building solution for your application.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}