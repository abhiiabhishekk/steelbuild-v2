"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Factory,
  Landmark,
  ShieldCheck,
  Snowflake,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    title: "Industrial Warehouses",
    description:
      "Standing seam roofing can be integrated across large warehouse roof areas requiring continuous panels, coordinated drainage and long-term weather protection.",
    image:
      "/images/products/standing-seam-roofing/application-1.jpg",
    icon: Warehouse,
  },
  {
    number: "02",
    title: "Manufacturing Facilities",
    description:
      "Industrial production buildings can use standing seam roof systems coordinated with skylights, ventilation equipment, insulation and structural steel framing.",
    image:
      "/images/products/standing-seam-roofing/application-2.jpg",
    icon: Factory,
  },
  {
    number: "03",
    title: "Logistics & Distribution Centres",
    description:
      "Large logistics buildings benefit from continuous roof geometry, concealed fastening and coordinated rainwater-management systems.",
    image:
      "/images/products/standing-seam-roofing/application-3.jpg",
    icon: Warehouse,
  },
  {
    number: "04",
    title: "Food Processing Facilities",
    description:
      "Standing seam roofing can support insulated industrial roof assemblies for clean and organized food-processing building environments.",
    image:
      "/images/products/standing-seam-roofing/application-4.jpg",
    icon: Building2,
  },
  {
    number: "05",
    title: "Cold Storage Buildings",
    description:
      "Cold-storage facilities can integrate standing seam panels with approved insulation systems, vapour-control layers and coordinated roof details.",
    image:
      "/images/products/standing-seam-roofing/application-5.jpg",
    icon: Snowflake,
  },
  {
    number: "06",
    title: "Commercial & Infrastructure Buildings",
    description:
      "Modern commercial and infrastructure facilities can use standing seam roofing for a clean architectural profile and coordinated roof performance.",
    image:
      "/images/products/standing-seam-roofing/application-6.jpg",
    icon: Landmark,
  },
];

export default function StandingSeamRoofingApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            Standing Seam Roofing Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Standing Seam Roofing Across Diverse Building Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Standing seam roofing systems can be coordinated with industrial,
            warehouse, processing, cold-storage, commercial and infrastructure
            buildings according to approved project requirements.
          </p>
        </motion.div>

        {/* Application Cards */}

        <div className="relative z-10 mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.15)]"
              >
                {/* Image */}

                <div className="relative h-[285px] overflow-hidden bg-primary-blue">
                  <Image
                    src={item.image}
                    alt={`${item.title} with standing seam roofing system`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-primary-blue/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    Application {item.number}
                  </span>

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
                    <Icon size={26} />
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Standing Seam Application
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-primary-red"
                    />

                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary-blue">
                      Coordinated Roofing Solution
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Every Roofing Application Requires Project-Specific Coordination
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Roof geometry, panel profile, clip arrangement, insulation,
                structural supports, skylights, ventilation, flashings and
                drainage details are developed according to approved drawings,
                building usage and site conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}