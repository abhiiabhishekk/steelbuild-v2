"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { productApplications } from "@/data/productApplications";

const stats = [
  {
    value: "700+",
    label: "Projects Delivered",
    note: "Across India",
  },
  {
    value: "50,000 MT",
    label: "Annual Capacity",
    note: "Installed production",
  },
  {
    value: "20+",
    label: "States Served",
    note: "PAN India reach",
  },
  {
    value: "15+",
    label: "Years Experience",
    note: "Industry expertise",
  },
];

export default function ProductApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,63,104,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(194,17,25,0.06),transparent_36%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Product Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Industries We Build For
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Steelbuild Infra Projects delivers high-performance Pre-Engineered
            Building solutions across industrial, commercial, warehousing and
            infrastructure sectors.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productApplications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group flex min-h-[250px] flex-col rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_50px_rgba(27,63,104,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-xl font-black tracking-[-0.03em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="relative z-10 mt-16 grid overflow-hidden rounded-[32px] bg-primary-blue shadow-[0_30px_90px_rgba(27,63,104,0.18)] md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-b border-white/10 p-8 text-center last:border-b-0 md:border-r md:last:border-r-0 xl:border-b-0"
            >
              <p className="text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-white/75">
                {stat.label}
              </p>

              <p className="mt-2 text-sm text-white/55">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}