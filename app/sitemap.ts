import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

type StaticPage = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

const staticPages: StaticPage[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about/awards-recognition", changeFrequency: "monthly", priority: 0.75 },
  { path: "/about/company-brochure", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/csr-sustainability", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/exhibitions", changeFrequency: "monthly", priority: 0.75 },
  { path: "/about/leadership", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/quality-certifications", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/team", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/vision-mission-values", changeFrequency: "monthly", priority: 0.7 },

  { path: "/products", changeFrequency: "monthly", priority: 0.95 },
  { path: "/products/pre-engineered-buildings", changeFrequency: "monthly", priority: 0.95 },
  { path: "/products/industrial-sheds", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/warehouse-buildings", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/factory-buildings", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/commercial-buildings", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/cold-storage-buildings", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/heavy-steel-structures", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/multi-storey-buildings", changeFrequency: "monthly", priority: 0.9 },

  { path: "/products/roofing-systems", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/roofing-systems/roofing-sheets", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/roofing-systems/standing-seam-roofing", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/roofing-systems/deck-sheets", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/roofing-systems/ridge-ventilators", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/roofing-systems/turbo-ventilators", changeFrequency: "monthly", priority: 0.8 },

  { path: "/products/cladding-systems", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/cladding-systems/wall-cladding", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/cladding-systems/sandwich-panels", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/cladding-systems/insulation-systems", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/cladding-systems/louvers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/cladding-systems/polycarbonate-sheets", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/cladding-systems/sheeting-accessories", changeFrequency: "monthly", priority: 0.8 },

  { path: "/products/mezzanine-systems", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products/mezzanine-systems/structural-mezzanine", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/mezzanine-systems/industrial-staircases", changeFrequency: "monthly", priority: 0.75 },
  { path: "/products/mezzanine-systems/handrails-guardrails", changeFrequency: "monthly", priority: 0.75 },
  { path: "/products/mezzanine-systems/roof-platforms", changeFrequency: "monthly", priority: 0.75 },
  { path: "/products/mezzanine-systems/walkways-catwalks", changeFrequency: "monthly", priority: 0.75 },

  { path: "/industries", changeFrequency: "monthly", priority: 0.9 },
  { path: "/manufacturing", changeFrequency: "monthly", priority: 0.95 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.95 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/careers/apply", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/request-a-quote", changeFrequency: "monthly", priority: 0.85 },
  { path: "/steelbuild-corporate-profile", changeFrequency: "monthly", priority: 0.75 },

  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes];
}
