"use client";

import Container from "@/components/layout/Container";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const activeProducts = products.filter((product) => product.active !== false);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {activeProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}