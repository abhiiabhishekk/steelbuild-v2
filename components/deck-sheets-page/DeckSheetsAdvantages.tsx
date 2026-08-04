"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Building2,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    icon: Clock3,
    title: "Faster Construction",
    description:
      "Deck sheets eliminate conventional shuttering and significantly reduce floor construction time.",
  },
  {
    icon: Layers3,
    title: "Permanent Formwork",
    description:
      "Acts as permanent steel formwork and becomes an integral part of the composite floor.",
  },
  {
    icon: Building2,
    title: "Higher Structural Efficiency",
    description:
      "Composite interaction between steel deck and concrete improves floor performance.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Material Usage",
    description:
      "Optimized slab thickness and reduced temporary formwork requirements improve economy.",
  },
  {
    icon: Workflow,
    title: "Large Clear Spans",
    description:
      "Suitable for commercial, industrial and multi-storey applications requiring wider floor spans.",
  },
  {
    icon: BadgeCheck,
    title: "Long-Term Durability",
    description:
      "Manufactured from premium coated steel for long-lasting structural performance.",
  },
];

export default function DeckSheetsAdvantages() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">

            <BadgeCheck size={15} />

            Deck Sheet Advantages

          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Composite
            <br />
            Deck Sheet Systems
            <br />
            Perform Better
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steel deck sheets provide faster construction, structural
            efficiency and long-term durability while improving overall
            project productivity.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            

            {advantages.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.article
      key={item.title}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
    >
      <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
        <Icon size={24} />
      </div>

      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
        Deck Advantage {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
        {item.title}
      </h3>

      <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
        {item.description}
      </p>
    </motion.article>
  );
})}

</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-white px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
>
  <BadgeCheck
    size={24}
    className="mt-0.5 shrink-0 text-primary-red"
  />

  <p className="text-sm font-bold leading-7 text-primary-blue">
    Final deck-sheet profile, sheet thickness, span arrangement, concrete slab
    depth, reinforcement, shear connection and structural support details are
    developed according to approved engineering drawings, design loads and
    project-specific requirements.
  </p>
</motion.div>

      </Container>
    </section>
  );
}