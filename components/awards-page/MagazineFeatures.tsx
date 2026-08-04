"use client";

import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Star } from "lucide-react";

import Container from "@/components/layout/Container";

const magazines = [
  {
    title: "SSMB Magazine",
    issue: "Industry Feature",
    description:
      "Steelbuild Infra Projects' engineering excellence and completed industrial projects were featured in SSMB Magazine.",
    year: "2025",
  },
  {
    title: "Industrial Recognition",
    issue: "Engineering Excellence",
    description:
      "Recognition highlighting quality manufacturing, project execution and customer-focused engineering solutions.",
    year: "2026",
  },
];

export default function MagazineFeatures() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Newspaper size={15} />
            Media Presence
          </span>

          <h2 className="mt-6 text-4xl font-black text-primary-blue md:text-5xl">
            Featured Across Industry Publications
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our work continues to receive appreciation from industry magazines
            and engineering platforms that recognize excellence in steel
            construction.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {magazines.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Newspaper size={30} />
                </div>

                <span className="rounded-full bg-primary-blue/10 px-4 py-2 text-sm font-bold text-primary-blue">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black text-primary-blue">
                {item.title}
              </h3>

              <p className="mt-2 font-semibold text-primary-red">
                {item.issue}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t pt-6">
                <div className="flex items-center gap-2">
                  <Star className="text-primary-red" size={18} />
                  <span className="font-semibold text-primary-blue">
                    Industry Recognition
                  </span>
                </div>

                <ExternalLink className="text-primary-red" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}