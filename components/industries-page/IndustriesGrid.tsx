"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Check,
  Church,
  CircleParking,
  Cpu,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Landmark,
  Layers3,
  Plane,
  PlugZap,
  Refrigerator,
  Rocket,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Store,
  Tractor,
  Truck,
  UtensilsCrossed,
  Warehouse,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";
import IndustryDetailCard from "./IndustryDetailCard";

const coreIndustries = [
  {
    title: "Warehousing",
    category: "Storage Infrastructure",
    image: "/images/industries/cards/warehouse.jpg",
    icon: Warehouse,
    description:
      "Large-span, column-free warehouse buildings designed for efficient storage, material handling and future capacity expansion.",
    featured: true,
  },
  {
    title: "Manufacturing",
    category: "Industrial Production",
    image: "/images/industries/cards/manufacturing-v2.jpg",
    icon: Factory,
    description:
      "Purpose-built manufacturing facilities engineered around production workflows, machinery, cranes, utilities and operational safety.",
    featured: false,
  },
  {
    title: "Logistics",
    category: "Distribution Infrastructure",
    image: "/images/industries/cards/logistics.jpg",
    icon: Truck,
    description:
      "High-performance logistics facilities supporting loading bays, rapid vehicle movement, inventory operations and organized dispatch.",
    featured: false,
  },
  {
    title: "Automobile",
    category: "Automotive Facilities",
    image: "/images/industries/cards/automobile.jpg",
    icon: Car,
    description:
      "Engineered automobile plants, workshops and support buildings planned for assembly, maintenance, storage and process integration.",
    featured: false,
  },
  {
    title: "Food Processing",
    category: "Process Industry",
    image: "/images/industries/cards/food-processing.jpg",
    icon: UtensilsCrossed,
    description:
      "Hygienic, operationally efficient building systems supporting food production, packaging, storage and controlled workflows.",
    featured: false,
  },
  {
    title: "Pharmaceutical",
    category: "Specialized Manufacturing",
    image: "/images/industries/cards/pharmaceutical.jpg",
    icon: HeartHandshake,
    description:
      "Flexible industrial facilities designed to support controlled environments, utilities, process equipment and quality-focused operations.",
    featured: false,
  },
  {
    title: "FMCG",
    category: "Consumer Goods",
    image: "/images/industries/cards/fmcg.jpg",
    icon: ShoppingBag,
    description:
      "Scalable facilities for high-volume production, packaging, warehousing and efficient distribution of consumer products.",
    featured: false,
  },
  {
    title: "Textile",
    category: "Textile Industry",
    image: "/images/industries/cards/textile.jpg",
    icon: Shirt,
    description:
      "Wide-span textile manufacturing structures planned for machinery layouts, ventilation, material flow and production efficiency.",
    featured: false,
  },
  {
    title: "Electronics",
    category: "Technology Manufacturing",
    image: "/images/industries/cards/electronics.jpg",
    icon: Cpu,
    description:
      "Modern building systems supporting electronics manufacturing, assembly, component storage and controlled production requirements.",
    featured: false,
  },
  {
    title: "Cold Storage",
    category: "Temperature-Controlled",
    image: "/images/industries/cards/cold-storage.jpg",
    icon: Refrigerator,
    description:
      "Insulated building envelopes and flexible structural systems developed for cold-chain, food storage and temperature-controlled facilities.",
    featured: false,
  },
  {
    title: "Factories",
    category: "Industrial Buildings",
    image: "/images/industries/cards/factory.jpg",
    icon: Layers3,
    description:
      "Durable and expandable factory buildings integrating production floors, utilities, ventilation and supporting infrastructure.",
    featured: false,
  },
  {
  title: "Infrastructure & Construction",
  category: "Infrastructure Solutions",
  image: "/images/industries/cards/infrastructure-v2.jpg",
  icon: HardHat,
  description:
    "Engineered steel building solutions for workshops, project support facilities, transit infrastructure and specialized applications.",
  featured: false,
  fullWidth: true,
},
];

const additionalApplications = [
  {
    title: "Agriculture",
    icon: Tractor,
  },
  {
    title: "Retail & Commercial Spaces",
    icon: Store,
  },
  {
    title: "Residential Buildings",
    icon: Building2,
  },
  {
    title: "Power & Energy",
    icon: PlugZap,
  },
  {
    title: "Institutional Buildings",
    icon: Landmark,
  },
  {
    title: "Government Projects",
    icon: Landmark,
  },
  {
    title: "Showrooms",
    icon: Store,
  },
  {
    title: "Workshops",
    icon: Wrench,
  },
  {
    title: "Supermarkets",
    icon: ShoppingCart,
  },
  {
    title: "Shopping Malls",
    icon: ShoppingBag,
  },
  {
    title: "Sports Stadiums",
    icon: Rocket,
  },
  {
    title: "Banquet Halls",
    icon: Church,
  },
  {
    title: "Car Parking",
    icon: CircleParking,
  },
  {
    title: "Auditoriums",
    icon: Church,
  },
  {
    title: "Metro Stations",
    icon: Landmark,
  },
  {
    title: "Airport Hangars",
    icon: Plane,
  },
  {
    title: "Community Buildings",
    icon: HeartHandshake,
  },
  {
    title: "Colleges",
    icon: GraduationCap,
  },
  {
    title: "Office Buildings",
    icon: Building2,
  },
  {
    title: "Shipyards",
    icon: Ship,
  },
  {
    title: "Ports",
    icon: Ship,
  },
  {
    title: "Petrol Pumps",
    icon: Fuel,
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <Factory size={15} />
            Industries We Build For
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Sector-Specific Building Solutions Engineered for Performance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild develops customized Pre-Engineered Building solutions
            according to each industry&apos;s workflow, structural loading,
            equipment, storage, safety and future expansion requirements.
          </p>
        </motion.div>

        {/* Core industries */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreIndustries.map((industry, index) => (
            <IndustryDetailCard
              key={industry.title}
              {...industry}
              index={index}
            />
          ))}
        </div>

        {/* Additional applications */}

        <div className="relative z-10 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex rounded-full bg-primary-blue/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-blue">
              Additional Applications
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.035em] text-primary-blue md:text-4xl lg:text-[48px]">
              Flexible PEB Solutions for Specialized Building Requirements
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-gray-600">
              Subject to engineering evaluation and project requirements,
              Steelbuild can develop technically suitable building systems for
              a broad range of commercial, institutional and infrastructure
              applications.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {additionalApplications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.035, 0.28),
                  }}
                  className="group flex min-h-[116px] items-center gap-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_22px_55px_rgba(27,63,104,0.11)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <p className="text-base font-black leading-6 text-primary-blue">
                      {item.title}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <Check size={14} className="text-primary-red" />

                      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">
                        Custom Engineering
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mx-auto mt-12 max-w-4xl rounded-[24px] border border-primary-blue/10 bg-primary-blue px-6 py-5 text-center shadow-[0_18px_55px_rgba(27,63,104,0.13)]"
        >
          <p className="text-sm font-bold leading-7 text-white/80">
            The industries and applications shown represent Steelbuild&apos;s
            engineering capabilities. Final building configuration is
            determined through technical evaluation, project scope and
            applicable design requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}