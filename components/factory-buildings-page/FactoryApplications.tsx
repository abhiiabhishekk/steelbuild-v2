"use client";

import { motion } from "framer-motion";
import {
  Car,
  Factory,
  PackageCheck,
  Settings,
  Shirt,
  Utensils,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Settings,
    title: "Engineering & Manufacturing",
    description:
      "Factory buildings planned for machinery, fabrication, assembly, utilities and industrial production workflows.",
  },
  {
    number: "02",
    icon: Car,
    title: "Automobile & Components",
    description:
      "Production facilities designed around assembly lines, component handling, testing and movement requirements.",
  },
  {
    number: "03",
    icon: Utensils,
    title: "Food Processing",
    description:
      "Industrial facilities coordinated for processing, packaging, storage and hygienic operational requirements.",
  },
  {
    number: "04",
    icon: Shirt,
    title: "Textile & Garments",
    description:
      "Factory spaces developed for production lines, material flow, utilities and organized working areas.",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "FMCG & Packaging",
    description:
      "Efficient manufacturing buildings supporting fast production, packaging, storage and dispatch operations.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Specialized Industrial Units",
    description:
      "Customized factory structures developed around unique equipment, process and operational requirements.",
  },
];

export default function FactoryApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={15} />
            Factory Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Factory Buildings Across Diverse Manufacturing Sectors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Factory buildings can be configured around different production
            processes, machinery layouts and operational requirements.
          </p>
        </motion.div>

        {/* Applications grid */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
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
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)] md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-red transition-transform duration-500 group-hover:scale-x-100" />

                <span className="pointer-events-none absolute right-5 top-4 text-[50px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Factory Application {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}