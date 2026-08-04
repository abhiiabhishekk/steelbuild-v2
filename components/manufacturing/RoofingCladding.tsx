"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Layers3, ShieldCheck, Warehouse } from "lucide-react";

import Container from "@/components/layout/Container";

type RoofingProduct = {
  title: string;
  badge: string;
  image: string;
  description: string;
  features: string[];
  icon: typeof Warehouse;
};

const products: RoofingProduct[] = [
  {
    title: "Steelbuild Roofing Sheet",
    badge: "Roofing System",
    image: "/images/manufacturing/roofing/roofing-sheet.jpg",
    description:
      "Steelbuild Roofing Sheets are strong, cost-effective profiles developed specifically for industrial roofing applications, offering reliable weather protection and long-term performance.",
    features: [
      "High structural strength",
      "Cost-effective roofing solution",
      "Excellent weather resistance",
      "Suitable for factories, warehouses and PEB structures",
    ],
    icon: Warehouse,
  },
  {
    title: "Standing Seam Roofing System",
    badge: "360° Double Lock",
    image: "/images/manufacturing/roofing/standing-seam.jpg",
    description:
      "Our advanced standing seam system uses a concealed 360° double-lock fastening mechanism that reduces leakage risks at fasteners and side or end laps while providing all-weather protection.",
    features: [
      "Concealed fastening system",
      "360° mechanically locked seam",
      "Reduced leakage risk",
      "Superior all-weather performance",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Steelbuild Cladding Sheet",
    badge: "Wall Cladding",
    image: "/images/manufacturing/roofing/cladding-sheet.jpg",
    description:
      "Steelbuild Cladding Sheets feature concealed fastening and sculptured valley profiles between major ribs, delivering both structural durability and a refined architectural appearance for external walls.",
    features: [
      "Concealed fastener design",
      "Premium architectural finish",
      "Durable external wall protection",
      "Strong and cost-effective profile",
    ],
    icon: Layers3,
  },
  {
    title: "Steelbuild Deck Sheet",
    badge: "Composite Flooring",
    image: "/images/manufacturing/roofing/deck-sheet.jpg",
    description:
      "Steelbuild Deck Sheets are used as permanent shuttering in multi-storey buildings, warehouses, offices, industrial facilities and automobile showrooms, supporting concrete and composite slab construction.",
    features: [
      "Permanent shuttering solution",
      "Supports composite slabs",
      "Faster floor construction",
      "Suitable for multi-storey and industrial buildings",
    ],
    icon: Layers3,
  },
];

export default function RoofingCladding() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-16 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Roofing & Cladding Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Engineered Building Envelope Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            High-performance roofing, cladding and deck sheet systems designed
            for strength, durability, weather protection and architectural
            excellence across industrial and commercial buildings.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="group flex h-full flex-col overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_40px_100px_rgba(27,63,104,0.16)]"
              >
                <div className="relative h-[320px] overflow-hidden bg-primary-blue">
                  <Image
                    src={product.image}
                    alt={`${product.title} by Steelbuild Infra Projects`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-primary-red shadow-lg">
                    {product.badge}
                  </span>

                  <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
                    <Icon size={27} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="text-3xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                    {product.title}
                  </h3>

                  <p className="mt-5 text-base font-medium leading-8 text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-7 border-t border-gray-200 pt-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-primary-red">
                      Key Advantages
                    </p>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm font-semibold leading-6 text-gray-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-red" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-3 text-sm font-black text-primary-red">
  <ShieldCheck size={18} />
  Built for Long-Term Performance
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