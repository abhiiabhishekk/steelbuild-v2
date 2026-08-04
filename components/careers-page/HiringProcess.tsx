"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  MessageSquareText,
  UserCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const hiringSteps = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Explore Opportunities",
    description:
      "Review current openings and identify the role that best matches your experience, skills and career interests.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Application Review",
    description:
      "Our team reviews your profile, relevant experience, technical knowledge and suitability for the selected position.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Discussion & Assessment",
    description:
      "Shortlisted candidates may be invited for technical, functional or managerial discussions depending on the role.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Selection & Onboarding",
    description:
      "Selected candidates receive role details, joining requirements and onboarding guidance from the HR team.",
  },
];

export default function HiringProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <BadgeCheck size={15} />
            Hiring Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            A Clear and Professional Selection Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Our hiring process is designed to understand your experience,
            capabilities and suitability while keeping every stage clear and
            structured.
          </p>
        </motion.div>

        <div className="relative z-10 mt-20">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-[2px] bg-gradient-to-r from-primary-red via-primary-blue/25 to-primary-red lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {hiringSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-primary-blue text-white shadow-[0_18px_55px_rgba(27,63,104,0.16)] transition-all duration-300 hover:scale-110 hover:bg-primary-red">
                    <Icon size={33} />
                  </div>

                  <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                    Step {step.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-7 text-gray-500">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-20 max-w-5xl overflow-hidden rounded-[32px] bg-primary-blue p-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-primary-red/20 blur-[85px]" />

          <div className="relative z-10 flex items-start gap-4">
            <CheckCircle2
              size={28}
              className="mt-0.5 shrink-0 text-primary-red"
            />

            <div>
              <h3 className="text-2xl font-black text-white">
                Selection Depends on Role Requirements
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-white/70 md:text-base md:leading-8">
                Interview stages, assessments and timelines may vary according
                to the position, department, experience level and business
                requirement.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}