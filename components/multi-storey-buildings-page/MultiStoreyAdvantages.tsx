"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Clock3,
  Expand,
  Factory,
  Layers3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Layers3,
    title: "Maximum Space Utilization",
    description:
      "Multiple functional floors help increase usable built-up area within a limited project footprint.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Faster Construction",
    description:
      "Factory-fabricated steel components reduce wet construction activities and support quicker project completion.",
  },
  {
    number: "03",
    icon: Expand,
    title: "Flexible Floor Planning",
    description:
      "Structural grids can be coordinated around offices, production areas, storage, utilities and circulation requirements.",
  },
  {
    number: "04",
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Columns, beams and floor members are manufactured under controlled processes for dimensional accuracy.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Structural Reliability",
    description:
      "Steel framing systems are engineered to support vertical, lateral and operational loads across multiple levels.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Future Expansion",
    description:
      "Buildings can be planned for additional floors, extensions and changing operational requirements.",
  },
];

const keyBenefits = [
  "Optimized structural grid",
  "Reduced construction time",
  "Efficient vertical development",
  "Integrated floor systems",
  "Flexible service planning",
  "Long-term operational value",
];

export default function MultiStoreyAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Building2 size={15} />
            Key Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Choose Multi-Storey Steel Buildings?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Multi-storey steel construction combines efficient land use,
            structural flexibility, controlled fabrication and faster project
            execution within one integrated building system.
          </p>
        </motion.div>

        {/* Advantage cards */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
              >
                <span className="absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={26} />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Advantage {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom panel */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mt-14 isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Steelbuild Advantage
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Vertical Construction Designed Around Operational Needs
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Every multi-storey steel building is developed according to
                floor usage, structural loading, access, equipment, utilities,
                circulation and future expansion requirements.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {keyBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                >
                  <BadgeCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-black leading-6 text-white/80">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}