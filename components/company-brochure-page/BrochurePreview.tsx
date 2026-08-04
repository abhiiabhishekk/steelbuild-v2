"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  Factory,
  FileText,
  Layers3,
  MapPinned,
  Presentation,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const brochureSections = [
  {
    number: "01",
    icon: Building2,
    title: "Company Overview",
    description:
      "Learn about Steelbuild Infra Projects Limited, our journey, leadership, values and commitment to engineering excellence.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Products & Building Systems",
    description:
      "Explore Pre-Engineered Buildings, steel structures, roofing, cladding, mezzanine systems and industrial building solutions.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Manufacturing Capabilities",
    description:
      "Discover our manufacturing infrastructure, production capabilities, quality systems and annual capacity.",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Projects & Experience",
    description:
      "Review selected industrial, warehousing, manufacturing and infrastructure projects delivered across India.",
  },
  {
    number: "05",
    icon: MapPinned,
    title: "Industries We Serve",
    description:
      "Understand our experience across warehousing, food processing, automobile, pharmaceuticals, logistics and other sectors.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Quality & Commitment",
    description:
      "Learn about our quality systems, certifications, process discipline and commitment to dependable project delivery.",
  },
];

export default function BrochurePreview() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
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
            <BookOpenCheck size={15} />
            Inside the Brochure
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            A Complete Overview of Steelbuild&apos;s Capabilities
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Our company profile brings together essential information about
            Steelbuild&apos;s organization, products, manufacturing strength,
            project experience and industrial building expertise.
          </p>
        </motion.div>

        {/* Main content */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Left document panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_32px_90px_rgba(27,63,104,0.2)] md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-lg shadow-primary-red/20">
                <FileText size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Official Company Profile
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Steelbuild Infra Projects Limited
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Access our official company profile to understand our business,
                engineering approach, manufacturing capabilities, products,
                completed projects and industry presence.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-bold leading-6 text-white/80">
                    Official Steelbuild corporate profile
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-bold leading-6 text-white/80">
                    Product, manufacturing and project information
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-bold leading-6 text-white/80">
                    Suitable for clients, consultants and project partners
                  </p>
                </div>
              </div>

              <Link
                href="/documents/steelbuild-company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
              >
                Open Company Profile

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right content cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {brochureSections.map((item, index) => {
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
                  <span className="absolute right-5 top-4 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Brochure Section {item.number}
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