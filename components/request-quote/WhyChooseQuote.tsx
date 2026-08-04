"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Factory,
  Gauge,
  Handshake,
  Headphones,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    icon: Wrench,
    number: "01",
    title: "Engineering Expertise",
    description:
      "Project-specific structural engineering developed according to building usage, operational workflow and technical requirements.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Modern Manufacturing",
    description:
      "Controlled fabrication supported by advanced machinery, experienced teams and structured quality inspection.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Customized Solutions",
    description:
      "Every building system is planned around dimensions, loading, equipment, future expansion and project-specific priorities.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Pan-India Execution",
    description:
      "Integrated manufacturing, dispatch and project execution support for industrial developments across India.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance",
    description:
      "Multiple quality checkpoints are maintained throughout engineering, manufacturing, inspection and project execution.",
  },
  {
    icon: Handshake,
    number: "06",
    title: "Dedicated Support",
    description:
      "Engineering, commercial and project teams remain connected throughout the complete project lifecycle.",
  },
];

export default function WhyChooseQuote() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
            <BadgeCheck size={15} />
            Why Steelbuild
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Leading Industries Choose Steelbuild
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            From engineering consultation to manufacturing and project
            execution, Steelbuild delivers complete Pre-Engineered Building
            solutions tailored to each project&apos;s technical requirements.
          </p>
        </motion.div>

        {/* Advantage cards */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.52,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)]"
              >
                <div className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Advantage {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-14 overflow-hidden rounded-[34px] bg-primary-blue px-7 py-10 shadow-[0_30px_90px_rgba(27,63,104,0.2)] md:px-10 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary-red">
                <Headphones size={27} />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                  Technical Assistance
                </p>

                <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                  Need Help Defining Your Project Requirement?
                </h3>

                <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-white/70">
                  Our engineering and commercial teams can help you understand
                  the information required before quotation and technical
                  evaluation.
                </p>
              </div>
            </div>

            <Link
              href="tel:+918130199427"
              className="group inline-flex min-h-[58px] min-w-[230px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Talk to Our Experts

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}