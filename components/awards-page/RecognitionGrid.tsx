"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Building2,
  Factory,
  Globe2,
  Newspaper,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import Container from "@/components/layout/Container";

const recognitions = [
  {
    icon: Newspaper,
    number: "01",
    title: "SSMB Magazine Feature",
    category: "Industry Media Recognition",
    description:
      "Steelbuild's project capabilities, engineering quality and industrial construction expertise received recognition through industry media coverage.",
  },
  {
    icon: Trophy,
    number: "02",
    title: "MES Builders Association Appreciation",
    category: "Industry Appreciation",
    description:
      "Recognition reflecting Steelbuild's professional contribution, dependable execution and participation within the industrial construction ecosystem.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Nepal Buildcon Participation",
    category: "International Industry Presence",
    description:
      "Participation in a major building and construction exhibition strengthening Steelbuild's visibility across regional and international markets.",
  },
  {
    icon: Building2,
    number: "04",
    title: "700+ Completed Projects",
    category: "Project Delivery Milestone",
    description:
      "A growing portfolio of completed industrial buildings, warehouses, factories and infrastructure projects across multiple sectors.",
  },
  {
    icon: Factory,
    number: "05",
    title: "50,000 MT Annual Capacity",
    category: "Manufacturing Milestone",
    description:
      "Expanded manufacturing capability supporting high-volume production, project scalability and dependable delivery schedules.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "500+ Happy Clients",
    category: "Customer Trust",
    description:
      "Long-term relationships built through engineering support, transparent communication, quality manufacturing and reliable execution.",
  },
];

export default function RecognitionGrid() {
  return (
    <section
      id="industry-recognition"
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Award size={15} />
            Industry Recognition
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Recognition Built Through Consistent Performance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Our milestones reflect the combined strength of engineering,
            manufacturing, customer relationships and dependable project
            execution.
          </p>
        </motion.div>

        {/* Recognition cards */}

        <div className="relative z-10 mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {recognitions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative isolate overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)] md:p-8"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-blue/[0.04] blur-2xl transition-all duration-500 group-hover:bg-primary-red/[0.07]" />

                <span className="absolute right-6 top-5 text-5xl font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <BadgeCheck
                      size={18}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-xs font-black uppercase tracking-[0.12em] text-primary-blue">
                      Steelbuild Achievement
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 flex flex-col items-start justify-between gap-6 rounded-[30px] bg-primary-blue p-8 shadow-[0_24px_75px_rgba(27,63,104,0.18)] md:flex-row md:items-center md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Trophy size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Every Milestone Strengthens Our Responsibility
              </h3>

              <p className="mt-2 max-w-3xl text-sm font-medium leading-7 text-white/65">
                Recognition encourages us to continuously improve engineering
                quality, manufacturing capability and customer value.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}