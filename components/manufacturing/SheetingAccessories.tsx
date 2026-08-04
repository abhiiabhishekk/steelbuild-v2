"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Layers3, Waves } from "lucide-react";
import Container from "@/components/layout/Container";

const accessories = [
  {
    title: "Down Take Pipe",
    image: "/images/manufacturing/accessories/down-take-pipe.jpg",
    icon: Droplets,
    description:
      "Steelbuild Down Take Pipes efficiently carry rainwater from roof gutters to drainage systems or storage tanks. Their optimized profile reduces splashing and supports effective rainwater management.",
  },
  {
    title: "Ridge Cap",
    image: "/images/manufacturing/accessories/ridge-cap.jpg",
    icon: Layers3,
    description:
      "Ridge Caps provide complete protection at roof intersections by covering the ridge and overlapping the adjoining roofing sheets, helping prevent water ingress while maintaining a clean architectural finish.",
  },
  {
    title: "Gutter System",
    image: "/images/manufacturing/accessories/gutter-system.jpg",
    icon: Waves,
    description:
      "Steelbuild Gutters are engineered for efficient collection and drainage of rainwater from industrial roofing systems, protecting building facades and supporting long-term structural durability.",
  },
];

export default function SheetingAccessories() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Sheeting Accessories
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Complete Roof Drainage & Protection Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Precision-engineered sheeting accessories that enhance roof
            performance, improve water management and provide long-lasting
            protection for industrial and commercial buildings.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-3">
          {accessories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.16)]"
              >
                <div className="relative h-[290px] overflow-hidden bg-primary-blue">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
                    <Icon size={27} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-3xl font-black tracking-[-0.03em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-base leading-8 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gray-200" />

        <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-primary-red">
          Engineered for Performance
        </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}