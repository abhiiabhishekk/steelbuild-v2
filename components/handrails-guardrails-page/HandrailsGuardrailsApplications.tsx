"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Fence,
  Factory,
  Hammer,
  Layers3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    title: "Industrial Mezzanines",
    description:
      "Guardrails protect exposed mezzanine edges while maintaining safe circulation around elevated storage and production areas.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-1.jpg",
    icon: Layers3,
  },
  {
    title: "Walkways & Catwalks",
    description:
      "Continuous railing systems secure elevated walkways and maintenance catwalks throughout industrial facilities.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-2.jpg",
    icon: Fence,
  },
  {
    title: "Industrial Staircases",
    description:
      "Handrails and landing guardrails provide coordinated edge protection for vertical circulation systems.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-3.jpg",
    icon: ArrowUpRight,
  },
  {
    title: "Roof Platforms",
    description:
      "Roof maintenance platforms integrate engineered guardrails around HVAC equipment and rooftop access zones.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-4.jpg",
    icon: Building2,
  },
  {
    title: "Equipment Platforms",
    description:
      "Industrial machinery platforms use perimeter guardrails for organized maintenance and operational access.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-5.jpg",
    icon: Factory,
  },
  {
    title: "Maintenance Areas",
    description:
      "Elevated maintenance routes remain protected with integrated handrails and guardrails across the complete facility.",
    image:
      "/images/products/mezzanine-systems/guardrail-application-6.jpg",
    icon: Wrench,
  },
];

export default function HandrailsGuardrailsApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <ShieldCheck size={15} />
            Applications
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Industrial Applications of
            <br />
            Handrails & Guardrails
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Engineered railing systems are integrated with elevated industrial
            structures to provide coordinated edge protection, safe movement
            and organized maintenance access.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(27,63,104,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-primary-red backdrop-blur">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary-red">
                    Explore Application
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-[30px] border-l-4 border-primary-red bg-[#f7f9fc] px-8 py-7 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
          <div className="flex items-start gap-4">
            <Hammer className="mt-1 shrink-0 text-primary-red" size={24} />

            <p className="text-sm font-bold leading-7 text-primary-blue">
              Handrails and guardrails are engineered according to approved
              layouts, access routes, structural framing, equipment locations
              and operational requirements to create a complete edge-protection
              system throughout the facility.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}