import {
  Building2,
  Warehouse,
  Factory,
  Snowflake,
  Plane,
  Building,
  Layers3,
  PanelsTopLeft,
  Wrench,
  Truck,
  Store,
  Hammer,
} from "lucide-react";

import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "pre-engineered-buildings",
    title: "Pre-Engineered Buildings",
    shortTitle: "PEB",
    icon: Building2,
    image: "/images/products/pre-engineered-building.jpg",
    category: "PEB",
    featured: true,
    buttonText: "Explore Solution",
learnMoreLink: "/products/pre-engineered-buildings",

    description:
      "Custom engineered Pre-Engineered Building solutions designed for industrial, commercial and infrastructure projects with superior strength, faster construction and long service life.",

    features: [
      { title: "Fast Construction" },
      { title: "Cost Effective" },
      { title: "High Durability" },
      { title: "Custom Design" },
    ],

    applications: [
      "Factories",
      "Warehouses",
      "Industrial Plants",
      "Commercial Buildings",
    ],

    seo: {
      title: "Pre Engineered Building Manufacturer in India",
      description:
        "Steelbuild Infra Projects manufactures premium Pre-Engineered Buildings for industrial and commercial applications.",
      keywords: [
        "pre engineered buildings",
        "peb manufacturer",
        "peb company",
      ],
    },
  },

  {
    id: "2",
    slug: "warehouse-buildings",
    title: "Warehouse Buildings",
    shortTitle: "Warehouse",
    icon: Warehouse,
    image: "/images/products/warehouse.jpg",
    category: "Warehouse",
    featured: true,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Modern warehouse buildings engineered for logistics, e-commerce, distribution centers and industrial storage facilities.",

    features: [
      { title: "Large Clear Span" },
      { title: "High Load Capacity" },
      { title: "Future Expansion" },
      { title: "Energy Efficient" },
    ],

    applications: [
      "Logistics",
      "E-Commerce",
      "Storage",
      "Distribution Centers",
    ],

    seo: {
      title: "Warehouse Building Manufacturer",
      description:
        "Premium warehouse building manufacturer offering customized steel warehouse solutions.",
      keywords: [
        "warehouse buildings",
        "warehouse manufacturer",
        "warehouse shed",
      ],
    },
  },

  {
    id: "3",
    slug: "industrial-buildings",
    title: "Industrial Buildings",
    shortTitle: "Industrial",
    icon: Factory,
    image: "/images/products/industrial-building.jpg",
    category: "Industrial",
    featured: true,
    buttonText: "Explore Solution",
    learnMoreLink: "/products/industrial-buildings",

    description:
      "Heavy-duty industrial buildings designed for manufacturing plants, engineering facilities and production units.",

    features: [
      { title: "Heavy Crane Support" },
      { title: "Long Span Design" },
      { title: "Robust Structure" },
      { title: "Premium Finish" },
    ],

    applications: [
      "Manufacturing",
      "Engineering",
      "Automobile",
      "Steel Plants",
    ],

    seo: {
      title: "Industrial Steel Building Manufacturer",
      description:
        "Industrial steel building manufacturer delivering customized industrial infrastructure solutions.",
      keywords: [
        "industrial building",
        "factory building",
        "industrial shed",
      ],
    },
  },

  {
    id: "4",
    slug: "factory-buildings",
    title: "Factory Buildings",
    shortTitle: "Factory",
    icon: Hammer,
    image: "/images/products/factory-building.jpg",
    category: "Industrial",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Efficient factory buildings engineered for modern manufacturing operations with optimized layouts.",

    features: [
      { title: "Optimized Layout" },
      { title: "High Strength" },
      { title: "Fast Installation" },
      { title: "Flexible Expansion" },
    ],

    applications: [
      "Manufacturing",
      "FMCG",
      "Food Processing",
      "Textile",
    ],

    seo: {
      title: "Factory Building Manufacturer",
      description: "Factory building solutions using advanced PEB technology.",
      keywords: ["factory building", "factory shed"],
    },
  },

  {
    id: "5",
    slug: "cold-storage-buildings",
    title: "Cold Storage Buildings",
    shortTitle: "Cold Storage",
    icon: Snowflake,
    image: "/images/products/cold-storage.jpg",
    category: "Industrial",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Temperature-controlled steel structures for food, pharmaceuticals and cold chain logistics.",

    features: [
      { title: "Insulated Panels" },
      { title: "Energy Efficient" },
      { title: "Hygienic Design" },
      { title: "Long Life" },
    ],

    applications: [
      "Food",
      "Pharma",
      "Agriculture",
      "Cold Chain",
    ],

    seo: {
      title: "Cold Storage Building Manufacturer",
      description: "PEB cold storage buildings for temperature-sensitive industries.",
      keywords: ["cold storage building", "cold warehouse"],
    },
  },

  {
    id: "6",
    slug: "aircraft-hangars",
    title: "Aircraft Hangars",
    shortTitle: "Hangars",
    icon: Plane,
    image: "/images/products/aircraft-hangar.jpg",
    category: "Infrastructure",
    featured: false,
    active: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Long-span steel aircraft hangars engineered for aviation infrastructure projects.",

    features: [
      { title: "Wide Span" },
      { title: "High Clearance" },
      { title: "Heavy Wind Resistance" },
      { title: "Durable Structure" },
    ],

    applications: [
      "Airports",
      "Defense",
      "Private Aviation",
    ],

    seo: {
      title: "Aircraft Hangar Manufacturer",
      description: "PEB aircraft hangars with long-span engineering.",
      keywords: ["aircraft hangar", "aviation building"],
    },
  },

  {
    id: "7",
    slug: "multi-storey-buildings",
    title: "Multi Storey Steel Buildings",
    shortTitle: "Multi Storey",
    icon: Building,
    image: "/images/products/multi-storey-building-v2.jpg",
    category: "Commercial",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Steel multi-storey commercial and industrial buildings for modern infrastructure.",

    features: [
      { title: "Space Optimization" },
      { title: "Fast Construction" },
      { title: "Modern Design" },
      { title: "Flexible Interiors" },
    ],

    applications: [
      "Commercial",
      "Industrial",
      "Institutional",
    ],

    seo: {
      title: "Multi Storey Steel Building",
      description: "Modern multi-storey steel buildings.",
      keywords: ["multi storey steel building"],
    },
  },

  {
    id: "8",
    slug: "mezzanine-floor-systems",
    title: "Mezzanine Floor Systems",
    shortTitle: "Mezzanine",
    icon: Layers3,
    image: "/images/products/mezzanine-floor.jpg",
    category: "Industrial",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Steel mezzanine floor systems for maximizing usable industrial space.",

    features: [
      { title: "Additional Floor Space" },
      { title: "Heavy Duty" },
      { title: "Quick Installation" },
      { title: "Expandable" },
    ],

    applications: [
      "Warehouse",
      "Factory",
      "Storage",
    ],

    seo: {
      title: "Steel Mezzanine Floor",
      description: "Heavy-duty mezzanine floor systems.",
      keywords: ["mezzanine floor"],
    },
  },

  {
    id: "9",
    slug: "roof-wall-cladding",
    title: "Roof & Wall Cladding",
    shortTitle: "Cladding",
    icon: PanelsTopLeft,
    image: "/images/products/cladding.jpg",
    category: "PEB",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Premium roofing and wall cladding systems for superior protection and aesthetics.",

    features: [
      { title: "Weather Resistant" },
      { title: "Insulated Options" },
      { title: "Long Life" },
      { title: "Premium Finish" },
    ],

    applications: [
      "Industrial",
      "Commercial",
      "Warehouse",
    ],

    seo: {
      title: "Roof Wall Cladding Manufacturer",
      description: "Steel roofing and wall cladding solutions.",
      keywords: ["roof cladding", "wall cladding"],
    },
  },

  {
    id: "10",
    slug: "structural-steel-fabrication",
    title: "Structural Steel Fabrication",
    shortTitle: "Structural Steel",
    icon: Wrench,
    image: "/images/products/structural-steel.jpg",
    category: "Infrastructure",
    featured: false,
    buttonText: "Explore Solution",
learnMoreLink: "/products/warehouse-buildings",

    description:
      "Precision fabricated structural steel for industrial and infrastructure projects.",

    features: [
      { title: "Precision Fabrication" },
      { title: "Quality Welding" },
      { title: "Heavy Sections" },
      { title: "Timely Delivery" },
    ],

    applications: [
      "Infrastructure",
      "Industrial",
      "Commercial",
    ],

    seo: {
      title: "Structural Steel Fabrication Company",
      description: "Structural steel fabrication solutions.",
      keywords: ["structural steel fabrication"],
    },
  },
];