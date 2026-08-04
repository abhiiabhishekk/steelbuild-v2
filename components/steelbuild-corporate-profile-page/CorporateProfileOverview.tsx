"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Handshake,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";

const strengths = [
  {
    number: "01",
    icon: Building2,
    title: "Integrated PEB Solutions",
    description:
      "Engineering, manufacturing, supply and execution of modern Pre-Engineered Buildings and industrial steel structures.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Manufacturing Capability",
    description:
      "Advanced manufacturing infrastructure supporting controlled fabrication, quality and dependable project delivery.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality-Driven Processes",
    description:
      "Disciplined engineering, inspection and manufacturing systems focused on structural reliability and performance.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Extensive Project Presence",
    description:
      "Industrial building execution experience across major Indian states and selected international markets.",
  },
  {
    number: "05",
    icon: Users,
    title: "Experienced Team",
    description:
      "A multidisciplinary team supporting design, detailing, production, project management and customer coordination.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Long-Term Commitment",
    description:
      "Customer-focused coordination, transparent communication and dependable execution throughout every project stage.",
  },
];

export default function CorporateProfileOverview() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Corporate Overview
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Engineering Capability Built Around Commitment and Quality
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Infra Projects Limited delivers comprehensive industrial
            building solutions supported by engineering expertise,
            manufacturing strength, execution discipline and a
            customer-focused approach.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)] md:p-8"
              >
                <span className="absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-7 text-xl font-black leading-tight text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
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