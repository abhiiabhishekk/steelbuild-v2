import type { LucideIcon } from "lucide-react";

export interface ProductFeature {
  title: string;
}

export interface ProductSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Product {
  id: string;

  slug: string;

  title: string;
  shortTitle: string;

  icon: LucideIcon;

  image: string;

  category: string;

  featured: boolean;

  /*
   * Product ko website par show/hide karne ke liye.
   * Undefined hone par product active maana jayega.
   */
  active?: boolean;

  description: string;

  features: ProductFeature[];

  applications: string[];

  /*
   * Product card button ka text.
   * Example: Explore Solution
   */
  buttonText?: string;

  /*
   * Custom product page URL.
   * Example: /products/pre-engineered-buildings
   */
  learnMoreLink?: string;

  seo: ProductSeo;
}