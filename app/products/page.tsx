import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";
import ProductsIntro from "@/components/products/ProductsIntro";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductBenefits from "@/components/products/ProductBenefits";
import ProductApplications from "@/components/products/ProductApplications";
import ManufacturingAdvantage from "@/components/products/ManufacturingAdvantage";
import FeaturedProjects from "@/components/products/FeaturedProjects";
import ProductsFAQ from "@/components/products/ProductsFAQ";

export const metadata: Metadata = {
  title:
    "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",
  description:
    "Explore Steelbuild Infra Projects' PEB products including warehouses, factory buildings, industrial buildings, cold storage buildings, mezzanine floors, roof cladding and structural steel solutions.",
  keywords: [
    "PEB products",
    "Pre Engineered Buildings",
    "PEB company in India",
    "Warehouse building manufacturer",
    "Factory building manufacturer",
    "Industrial building manufacturer",
    "Steel structure manufacturer",
    "Roof cladding systems",
    "Mezzanine floor systems",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title:
      "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",
    description:
      "Premium Pre-Engineered Building solutions for warehouses, factories, industrial buildings and steel infrastructure.",
    url: "https://steelbuildinfra.com/products",
    siteName: "Steelbuild Infra Projects",
    images: [
      {
        url: "/images/products/pre-engineered-building.jpg",
        width: 1200,
        height: 630,
        alt: "Steelbuild Pre-Engineered Building Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PEB Products & Pre-Engineered Building Solutions | Steelbuild Infra Projects",
    description:
      "Explore Steelbuild's premium PEB products and industrial steel building solutions.",
    images: ["/images/products/pre-engineered-building.jpg"],
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsIntro />
      <ProductsGrid />
      <ProductBenefits />
      <ProductApplications />
      <ManufacturingAdvantage />
      <FeaturedProjects />
      <ProductsFAQ />
    </>
  );
}