"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Factory,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const reasons = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Continuous Learning",
    description:
      "Build practical knowledge through exposure to engineering, manufacturing, quality systems, project execution and real industrial requirements.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Technical Development",
    description:
      "Strengthen functional expertise by working with experienced professionals, modern systems and project-specific engineering challenges.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Collaborative Teams",
    description:
      "Work across departments including design, detailing, production, quality, projects, sales, commercial and corporate functions.",
  },
  {
    icon: Target,
    number: "04",
    title: "Meaningful Responsibility",
    description:
      "Take ownership of real tasks and contribute directly to the successful delivery of industrial building projects.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality-Driven Culture",
    description:
      "Grow within an organization that values commitment, transparency, safety, process discipline and continuous improvement.",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Innovation & Improvement",
    description:
      "Contribute ideas that improve engineering efficiency, manufacturing quality, execution planning and customer experience.",
  },
];

const culturePoints = [
  "Respectful and professional work environment",
  "Cross-functional project exposure",
  "Learning through real responsibility",
  "Performance-oriented growth opportunities",
];

export default function WhyWorkWithUs() {
  return (
    <section
    id="why-join-us"
    className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
>
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <HeartHandshake size={15} />
            Why Work With Us
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Build Experience That Creates Real Industrial Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild offers opportunities to learn, contribute and grow
            through practical involvement in engineering, manufacturing,
            project execution and business operations.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Left culture panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_32px_90px_rgba(27,63,104,0.2)] md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#225286_50%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                <Handshake size={27} />
              </div>

              <p className="mt-7 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Our Work Culture
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                A Workplace Built on Responsibility, Learning and Teamwork
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                We encourage people to take ownership, communicate clearly,
                learn continuously and contribute toward shared project goals.
              </p>

              <div className="mt-8 space-y-3">
                {culturePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <p className="text-sm font-bold leading-6 text-white/80">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-white/10 bg-[#0b2b50]/70 px-5 py-4">
                <Factory
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-bold leading-7 text-white/72">
                  Team members gain exposure to projects moving from design and
                  manufacturing through dispatch, erection and final delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((item, index) => {
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
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                >
                  <div className="absolute right-5 top-4 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Opportunity {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}