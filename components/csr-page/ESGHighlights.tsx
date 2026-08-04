"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  HandHeart,
  Leaf,
  Recycle,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const esgPillars = [
  {
    id: "environmental",
    number: "01",
    icon: Leaf,
    eyebrow: "Environmental",
    title: "Responsible Use of Resources",
    description:
      "Operational discipline focused on improving resource efficiency, reducing avoidable waste and supporting responsible manufacturing practices.",
    points: [
      "Efficient material utilization",
      "Process waste reduction",
      "Responsible energy use",
      "Continuous operational improvement",
    ],
  },
  {
    id: "social",
    number: "02",
    icon: HandHeart,
    eyebrow: "Social",
    title: "People, Safety and Community",
    description:
      "A people-focused approach supporting workplace safety, employee development, respectful collaboration and community participation.",
    points: [
      "Employee health and safety",
      "Professional learning and growth",
      "Inclusive workplace practices",
      "Community-focused participation",
    ],
  },
  {
    id: "governance",
    number: "03",
    icon: Scale,
    eyebrow: "Governance",
    title: "Accountability and Ethical Conduct",
    description:
      "Transparent decision-making, clearly defined responsibilities and disciplined systems supporting responsible organizational growth.",
    points: [
      "Transparent business practices",
      "Defined quality responsibilities",
      "Compliance-focused operations",
      "Accountable leadership systems",
    ],
  },
];

const responsiblePractices = [
  {
    icon: Factory,
    title: "Controlled Manufacturing",
    description:
      "Disciplined fabrication, inspection and quality-control processes.",
  },
  {
    icon: UsersRound,
    title: "Workforce Responsibility",
    description:
      "Safe, respectful and professionally supportive work practices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Governance",
    description:
      "Defined systems supporting compliance, traceability and accountability.",
  },
  {
    icon: Recycle,
    title: "Continuous Improvement",
    description:
      "Ongoing evaluation of processes, efficiency and resource utilization.",
  },
];

export default function ESGHighlights() {
  return (
    <section
      id="esg-highlights"
      className="relative scroll-mt-32 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Building2 size={15} />
            ESG Framework
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Responsible Growth Across Every Business Pillar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Our sustainability approach connects environmental awareness,
            people responsibility and accountable governance with practical
            industrial operations.
          </p>
        </motion.div>

        {/* ESG pillars */}

        <div className="relative z-10 mt-16 grid gap-7 xl:grid-cols-3">
          {esgPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative isolate overflow-hidden rounded-[34px] border border-gray-200 bg-white p-8 shadow-[0_20px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_32px_90px_rgba(27,63,104,0.14)]"
              >
                <span className="absolute right-6 top-5 text-[62px] font-black leading-none text-primary-blue/[0.045]">
                  {pillar.number}
                </span>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                    {pillar.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 text-sm font-medium leading-7 text-gray-600">
                    {pillar.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-gray-200 pt-6">
                    {pillar.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3.5"
                      >
                        <BadgeCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-primary-red"
                        />

                        <span className="text-sm font-black leading-6 text-primary-blue">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Responsible practices */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 overflow-hidden rounded-[34px] bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.22)] md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                  Practical Responsibility
                </p>

                <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                  Sustainability Supported Through Everyday Operations
                </h3>
              </div>

              <p className="max-w-xl text-sm font-medium leading-7 text-white/65">
                Responsible progress depends on clear systems, disciplined
                execution and continuous improvement across every function.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {responsiblePractices.map((item, index) => {
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