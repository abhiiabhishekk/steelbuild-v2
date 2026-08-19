"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { coreValues } from "@/data/foundation";

export default function CoreValues() {
  return (
    <section
      id="core-values"
      aria-labelledby="core-values-heading"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_36%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.015)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.65,
          }}
          className="relative z-10 mx-auto mb-14 max-w-4xl text-center lg:mb-16"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Our Values
          </span>

          <h2
            id="core-values-heading"
            className="mt-7 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            The Principles Behind
            <span className="block">
              Every Steelbuild Project.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-lg font-medium leading-8 text-gray-600">
            Our values guide every stage of our work—from engineering and
            manufacturing to quality control, project execution and long-term
            customer relationships.
          </p>
        </motion.div>

        {/* Values Grid */}

        <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_70px_rgba(27,63,104,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-[22px] font-black leading-tight tracking-[-0.03em] text-primary-blue">
                  {value.title}
                </h3>

                <p className="mt-3 text-[15px] font-medium leading-7 text-gray-600">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}