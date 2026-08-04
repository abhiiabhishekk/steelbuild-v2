"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  HardHat,
  Network,
  Warehouse,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Factory,
    title: "Production Lines",
    image:
      "/images/products/mezzanine-systems/walkway-application-1.jpg",
    description:
      "Elevated walkways provide organized movement around production machinery, processing equipment and operational work zones.",
  },
  {
    number: "02",
    icon: HardHat,
    title: "Equipment Maintenance",
    image:
      "/images/products/mezzanine-systems/walkway-application-2.jpg",
    description:
      "Catwalk systems provide convenient access to elevated equipment for routine inspection, servicing and maintenance activities.",
  },
  {
    number: "03",
    icon: Network,
    title: "Pipe & Utility Networks",
    image:
      "/images/products/mezzanine-systems/walkway-application-3.jpg",
    description:
      "Walkways can be integrated above pipe racks, cable trays and utility corridors for efficient access to service systems.",
  },
  {
    number: "04",
    icon: Warehouse,
    title: "Warehouse Operations",
    image:
      "/images/products/mezzanine-systems/walkway-application-4.jpg",
    description:
      "Elevated access routes connect mezzanines, storage areas and operational zones within warehouse facilities.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Process Plants",
    image:
      "/images/products/mezzanine-systems/walkway-application-5.jpg",
    description:
      "Multi-level catwalk systems support circulation around process equipment, vessels and industrial platforms.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Industrial Service Areas",
    image:
      "/images/products/mezzanine-systems/walkway-application-6.jpg",
    description:
      "Steel walkways provide access to mechanical, electrical, HVAC and utility systems throughout industrial facilities.",
  },
];

export default function WalkwaysCatwalksApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Walkway Applications
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Industrial Applications of Walkways & Catwalks
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Industrial steel walkways and catwalks create organized elevated
            access routes for maintenance, production, utility services and
            operational movement across modern Pre-Engineered Buildings.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_38px_95px_rgba(27,63,104,0.15)]"
              >
                <div className="relative h-[285px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:1024px)100vw,33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
                    <Icon size={26} />
                  </div>

                  <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-[0.2em] text-primary-red">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-black text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-base leading-8 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-gray-200 pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-red">
                      Industrial Application
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}