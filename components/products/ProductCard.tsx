"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({
  product,
  index,
}: ProductCardProps) {
  const Icon = product.icon;

  /*
   * Priority:
   * 1. Custom learnMoreLink
   * 2. Product slug
   * 3. Products listing page
   */
  const productUrl =
    product.learnMoreLink?.trim() ||
    (product.slug
      ? `/products/${product.slug}`
      : "/products");

  const buttonText =
    product.buttonText?.trim() ||
    "Learn More";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_30px_80px_rgba(27,63,104,0.14)]"
    >
      {/* Product image */}

      <Link
        href={productUrl}
        aria-label={`Explore ${product.title}`}
        className="block"
      >
        <div className="relative h-[260px] overflow-hidden bg-primary-blue">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/75 via-primary-blue/10 to-transparent" />

          <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg">
            <Icon size={28} />
          </div>

          <span className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary-blue shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Product content */}

      <div className="flex flex-1 flex-col p-7">
        <Link
          href={productUrl}
          className="group/title"
        >
          <h3 className="text-2xl font-black tracking-[-0.03em] text-primary-blue transition-colors duration-300 group-hover/title:text-primary-red">
            {product.title}
          </h3>
        </Link>

        <p className="mt-4 text-sm font-medium leading-7 text-gray-600">
          {product.description}
        </p>

        {/* Product features */}

        {product.features.length > 0 && (
          <div className="mt-6 grid gap-3">
            {product.features
              .slice(0, 4)
              .map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-bold leading-6 text-primary-blue">
                    {feature.title}
                  </span>
                </div>
              ))}
          </div>
        )}

        {/* Applications */}

        {product.applications.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {product.applications
              .slice(0, 3)
              .map((application) => (
                <span
                  key={application}
                  className="rounded-full border border-primary-blue/10 bg-primary-blue/5 px-3 py-1.5 text-xs font-bold text-primary-blue"
                >
                  {application}
                </span>
              ))}
          </div>
        )}

        {/* Product link */}

        <div className="mt-auto pt-7">
          <Link
            href={productUrl}
            className="group/button inline-flex items-center gap-2 font-black text-primary-red transition-colors duration-300 hover:text-primary-blue"
          >
            {buttonText}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}