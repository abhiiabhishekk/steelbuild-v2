"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  Mail,
} from "lucide-react";

import Container from "@/components/layout/Container";

const brochurePath =
  "/documents/steelbuild-company-profile.pdf";

export default function BrochureCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#163c69] py-24 text-white lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-white/[0.06] blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
            <FileText
              size={16}
              className="text-white"
            />
            Company Profile
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
            Ready to Learn More About
            <span className="block">
              Steelbuild Infra Projects Limited?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-9 text-white/75">
            Download our official Company Profile to explore our
            Pre-Engineered Building expertise, manufacturing capabilities,
            completed projects and engineering excellence.
          </p>

          {/* Buttons */}

          <div className="relative z-20 mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-9 py-4 text-base font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80e15] hover:!text-white"
            >
              View Company Profile

              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={brochurePath}
              download
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-9 py-4 text-base font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
            >
              Download PDF

              <Download
                size={20}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Contact page card */}

          <Link
            href="/contact"
            className="group relative z-20 mt-16 flex flex-col items-center justify-between gap-7 rounded-[30px] border border-white/15 bg-white/[0.1] p-8 !text-white shadow-[0_18px_60px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/50 hover:bg-white/[0.14] hover:!text-white md:flex-row md:p-10 md:text-left"
          >
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_30px_rgba(194,17,25,0.28)] transition-transform duration-300 group-hover:scale-105">
                <Mail
                  size={29}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-200">
                  Project Enquiries
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Visit Our Contact Page
                </h3>

                <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-white/75">
                  Connect with our team for project consultation, quotations,
                  technical discussions and business enquiries.
                </p>
              </div>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:border-primary-red group-hover:bg-primary-red">
              <ArrowUpRight
                size={23}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}