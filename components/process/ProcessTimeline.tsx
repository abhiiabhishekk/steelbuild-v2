"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand project requirements, site conditions, business goals and technical expectations.",
  },
  {
    number: "02",
    title: "Engineering & Design",
    description:
      "Our design team prepares optimized PEB solutions with precision detailing and structural efficiency.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Steel components are fabricated using modern machinery, strict quality checks and controlled processes.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Finished materials are packed, organized and delivered to site with planned logistics coordination.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Experienced erection teams execute installation with safety, accuracy and schedule discipline.",
  },
  {
    number: "06",
    title: "Handover",
    description:
      "The completed structure is inspected, reviewed and handed over with dependable project support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-36">
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/8 blur-3xl" />
      <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
            Our Process
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            From Concept to Completion, We Build with Precision.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            A structured execution process ensures every Steelbuild project is
            delivered with clarity, quality and confidence.
          </p>
        </motion.div>

        <div className="relative z-10 mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} index={index} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}