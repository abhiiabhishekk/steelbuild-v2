"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
  Store,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Building2,
    title: "Office Buildings",
    description:
      "Commercial steel buildings coordinated around workspaces, circulation, access and approved service requirements.",
    featured: true,
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Retail Spaces",
    description:
      "Flexible structures for shops, retail centres and customer-facing commercial areas.",
    featured: false,
  },
  {
    number: "03",
    icon: Store,
    title: "Showrooms",
    description:
      "Open and adaptable spaces planned around product display, visitor movement and supporting functions.",
    featured: false,
  },
  {
    number: "04",
    icon: Landmark,
    title: "Business Centres",
    description:
      "Multi-functional buildings for offices, meeting areas, administration and commercial operations.",
    featured: false,
  },
  {
    number: "05",
    icon: Hotel,
    title: "Hospitality Buildings",
    description:
      "Structural building systems coordinated with approved hospitality layouts and access requirements.",
    featured: false,
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Institutional Facilities",
    description:
      "Steel buildings for training, education and institutional functions according to approved project layouts.",
    featured: false,
  },
];

export default function CommercialApplications() {
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
            <Building2 size={15} />
            Commercial Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Commercial Steel Buildings for Modern Business Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Commercial steel buildings can support office, retail,
            institutional and mixed-use requirements through flexible
            structural planning.
          </p>
        </motion.div>

        {/* Main composition */}

        <div className="relative z-10 mt-16 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Featured application */}

          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                  <Building2 size={29} />
                </div>

                <span className="text-[72px] font-black leading-none text-white/[0.06]">
                  01
                </span>
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Featured Commercial Use
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Office Buildings Planned Around People and Productivity
              </h3>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Office buildings require coordinated floor layouts,
                circulation, access, structural grids and future space
                flexibility within one organized commercial facility.
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-start gap-4 border-t border-white/15 pt-7">
                  <HeartPulse
                    size={24}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-black leading-7 text-white/80">
                    Final building configuration follows the approved
                    architectural layout and project-specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Supporting applications */}

          <div className="grid gap-5 sm:grid-cols-2">
            {applications.slice(1).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Commercial Application {item.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}