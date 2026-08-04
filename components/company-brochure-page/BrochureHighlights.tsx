"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Factory,
  FileCheck2,
  Handshake,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const capabilities = [
  {
    icon: Building2,
    number: "01",
    title: "Pre-Engineered Building Expertise",
    description:
      "Comprehensive solutions for industrial buildings, warehouses, factories, logistics facilities and commercial steel structures.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Advanced Manufacturing Capability",
    description:
      "Integrated manufacturing infrastructure supporting quality-controlled production, fabrication and timely project delivery.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality-Focused Execution",
    description:
      "Disciplined engineering, inspection, manufacturing and project execution systems focused on dependable performance.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Customer-Centric Delivery",
    description:
      "Transparent coordination, technical understanding and reliable execution supporting long-term customer relationships.",
  },
];

const brochureUses = [
  {
    icon: BriefcaseBusiness,
    title: "Project Discussions",
    description:
      "Share Steelbuild's capabilities during project planning, technical and commercial discussions.",
  },
  {
    icon: Landmark,
    title: "Consultant Reference",
    description:
      "Provide architects, consultants and EPC partners with a structured company capability overview.",
  },
  {
    icon: UsersRound,
    title: "Business Presentations",
    description:
      "Use the profile for meetings, exhibitions, client presentations and partnership discussions.",
  },
  {
    icon: FileCheck2,
    title: "Vendor Evaluation",
    description:
      "Support vendor registration, supplier evaluation and corporate qualification requirements.",
  },
];

export default function BrochureHighlights() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Capability Highlights
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            A Profile Designed for Business and Project Decisions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            The Steelbuild company profile provides a concise and professional
            overview for clients, consultants, architects, EPC companies,
            industry partners and project stakeholders.
          </p>
        </motion.div>

        {/* Capability cards */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_28px_80px_rgba(27,63,104,0.12)]"
              >
                <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-black leading-tight text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Use cases */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mt-14 isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                  Practical Applications
                </p>

                <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                  Use the Company Profile Across Every Business Stage
                </h3>
              </div>

              <p className="max-w-xl text-sm font-medium leading-7 text-white/65">
                The brochure can support initial introductions, technical
                discussions, vendor registration, exhibitions and formal
                project presentations.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {brochureUses.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/40 hover:bg-white/[0.12]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h4 className="mt-5 text-lg font-black text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}