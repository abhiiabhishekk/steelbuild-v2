"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ClientLogosModal from "./ClientLogosModal";
import LogoMarquee from "./LogoMarquee";

const sectors = [
  "Manufacturing",
  "Warehousing",
  "Logistics",
  "Automotive",
  "FMCG",
  "Industrial Infrastructure",
];

export default function ClientsSection() {
  const [isClientModalOpen, setIsClientModalOpen] =
    useState(false);

  return (
    <>
      <section
        aria-labelledby="clients-section-heading"
        className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32"
      >
        {/* Background grid */}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-primary-red/[0.05] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-primary-blue/[0.07] blur-3xl" />

        <Container>
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 38,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10 mx-auto mb-16 max-w-4xl text-center lg:mb-20"
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Trusted by Industrial Organizations
            </p>

            <h2
              id="clients-section-heading"
              className="mt-6 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]"
            >
              Trusted for Pre-Engineered
              <span className="block">
                Building & Steel Solutions.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-gray-600">
              Organizations across India trust Steelbuild Infra Projects
              Limited for Pre-Engineered Buildings, structural steel systems,
              warehouses, factories and industrial building solutions backed
              by engineering, manufacturing and dependable project execution.
            </p>

            {/* Sector tags */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-primary-blue/10 bg-white px-4 py-2 text-xs font-black text-primary-blue shadow-[0_8px_24px_rgba(27,63,104,0.05)]"
                >
                  {sector}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Client logos */}

          <div
            className="relative z-10"
            aria-label="Organizations served by Steelbuild Infra Projects Limited"
          >
            <LogoMarquee />
          </div>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="relative z-10 mt-14 flex flex-col items-center text-center"
          >
            <button
              type="button"
              onClick={() =>
                setIsClientModalOpen(true)
              }
              aria-label="View clients of Steelbuild Infra Projects Limited"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-blue px-8 py-4 font-black !text-white shadow-[0_20px_50px_rgba(27,63,104,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white hover:shadow-[0_24px_60px_rgba(194,17,25,0.22)]"
            >
              <Building2
                size={20}
                aria-hidden="true"
              />

              View Our Clients

              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-gray-500">
              Explore organizations that have worked with Steelbuild across
              industrial and infrastructure projects.
            </p>
          </motion.div>
        </Container>
      </section>

      <ClientLogosModal
        isOpen={isClientModalOpen}
        onClose={() =>
          setIsClientModalOpen(false)
        }
      />
    </>
  );
}