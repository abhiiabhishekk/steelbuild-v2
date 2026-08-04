"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { coreValues } from "@/data/foundation";

export default function CoreValues() {
  return (
    <section 
      id="core-values"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_36%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Our Values
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            The Principles That Build
            <br />
            Every Steelbuild Project.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Every successful structure begins with strong values. These
            principles guide our people, engineering decisions and customer
            relationships.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_30px_80px_rgba(27,63,104,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-primary-blue">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-gray-600">
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