"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Globe2,
  ShieldCheck,
  Timer,
  Trophy,
} from "lucide-react";
import Container from "@/components/layout/Container";

const stats = [
  {
    icon: Trophy,
    value: "700+",
    label: "Projects Delivered",
    description: "Successfully executed PEB and industrial steel projects.",
  },
  {
    icon: Factory,
    value: "50,000 MT",
    label: "Annual Capacity",
    description: "Installed manufacturing capacity for steel structures.",
  },
  {
    icon: Globe2,
    value: "20+",
    label: "States Served",
    description: "Reliable project execution across India.",
  },
  {
    icon: Timer,
    value: "15+",
    label: "Years Experience",
    description: "Strong experience in PEB engineering and execution.",
  },
  {
    icon: ShieldCheck,
    value: "ISO",
    label: "9001:2015 Certified",
    description: "Quality management system driven execution.",
  },
  {
    icon: Building2,
    value: "PEB",
    label: "Turnkey Solutions",
    description: "Design, manufacturing, fabrication and installation support.",
  },
];

export default function ProjectsStats() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.05),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_38%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Project Achievements
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Numbers That Reflect
            <br />
            Our Execution Excellence
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Steelbuild Infra Projects Limited delivers reliable Pre-Engineered
            Building solutions with strong manufacturing capacity, experienced
            engineering teams and nationwide execution capability.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_60px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_35px_90px_rgba(27,63,104,0.14)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-500 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={30} />
                </div>

                <p className="mt-8 text-5xl font-black tracking-[-0.05em] text-primary-blue lg:text-6xl">
                  {stat.value}
                </p>

                <h3 className="mt-4 text-xl font-black text-primary-blue">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}