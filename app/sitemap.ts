import type { MetadataRoute } from "next";
import { createClient } from "@sanity/client";

import { PROJECT_SLUGS_QUERY } from "@/sanity/lib/projectQueries";
import { BLOG_SLUGS_QUERY } from "@/sanity/lib/queries";

/* =========================================================
   CONFIGURATION
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

/*
 * Sitemap ko periodically regenerate karne denge.
 *
 * Sanity mein naya Project ya Blog publish hone ke baad
 * sitemap maximum ~60 seconds mein refresh ho sakega.
 */
export const revalidate = 60;

/* =========================================================
   SANITY CLIENT
========================================================= */

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: false,
});

/* =========================================================
   TYPES
========================================================= */

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

type SlugResult = {
  slug?: string | null;
};

/* =========================================================
   STATIC WEBSITE PAGES
========================================================= */

const staticPages: StaticPage[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },

  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/about/awards-recognition",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/about/company-brochure",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    path: "/about/csr-sustainability",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    path: "/about/exhibitions",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/about/leadership",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/about/quality-certifications",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/about/team",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    path: "/about/vision-mission-values",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  /* =======================================================
     PRODUCTS
  ======================================================= */

  {
    path: "/products",
    changeFrequency: "monthly",
    priority: 0.95,
  },

  {
    path: "/products/pre-engineered-buildings",
    changeFrequency: "monthly",
    priority: 0.95,
  },

  {
    path: "/products/industrial-sheds",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/warehouse-buildings",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/factory-buildings",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/commercial-buildings",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/cold-storage-buildings",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/heavy-steel-structures",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/multi-storey-buildings",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* =======================================================
     ROOFING SYSTEMS
  ======================================================= */

  {
    path: "/products/roofing-systems",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/roofing-systems/roofing-sheets",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/roofing-systems/standing-seam-roofing",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/roofing-systems/deck-sheets",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/roofing-systems/ridge-ventilators",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/roofing-systems/turbo-ventilators",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* =======================================================
     CLADDING SYSTEMS
  ======================================================= */

  {
    path: "/products/cladding-systems",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/products/cladding-systems/wall-cladding",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/cladding-systems/sandwich-panels",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/cladding-systems/insulation-systems",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/cladding-systems/louvers",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/cladding-systems/polycarbonate-sheets",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/cladding-systems/sheeting-accessories",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* =======================================================
     MEZZANINE SYSTEMS
  ======================================================= */

  {
    path: "/products/mezzanine-systems",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/products/mezzanine-systems/structural-mezzanine",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/products/mezzanine-systems/industrial-staircases",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/products/mezzanine-systems/handrails-guardrails",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/products/mezzanine-systems/roof-platforms",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  {
    path: "/products/mezzanine-systems/walkways-catwalks",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  /* =======================================================
     MAIN WEBSITE SECTIONS
  ======================================================= */

  {
    path: "/industries",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/manufacturing",
    changeFrequency: "monthly",
    priority: 0.95,
  },

  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.95,
  },

  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.85,
  },

  {
    path: "/careers",
    changeFrequency: "weekly",
    priority: 0.7,
  },

  {
    path: "/careers/apply",
    changeFrequency: "monthly",
    priority: 0.6,
  },

  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },

  {
    path: "/request-a-quote",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  {
    path: "/steelbuild-corporate-profile",
    changeFrequency: "monthly",
    priority: 0.75,
  },

  /* =======================================================
     LEGAL
  ======================================================= */

  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },

  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

/* =========================================================
   GENERATE SITEMAP
========================================================= */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /*
   * Static routes
   */

  const staticRoutes: MetadataRoute.Sitemap =
    staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,

      changeFrequency:
        page.changeFrequency,

      priority:
        page.priority,
    }));

  /*
   * Agar Sanity environment configuration missing ho,
   * sitemap completely fail nahi karega.
   *
   * Static pages phir bhi available rahenge.
   */

  if (!projectId) {
    console.warn(
      "NEXT_PUBLIC_SANITY_PROJECT_ID is missing. Dynamic sitemap URLs were skipped.",
    );

    return staticRoutes;
  }

  try {
    /*
     * Projects aur Blogs parallel fetch honge.
     */

    const [
      projects,
      blogs,
    ] = await Promise.all([
      sanityClient.fetch<SlugResult[]>(
        PROJECT_SLUGS_QUERY,
      ),

      sanityClient.fetch<SlugResult[]>(
        BLOG_SLUGS_QUERY,
      ),
    ]);

    /* =====================================================
       PROJECT ROUTES
    ===================================================== */

    const projectRoutes: MetadataRoute.Sitemap =
      projects
        .filter(
          (
            project,
          ): project is {
            slug: string;
          } =>
            typeof project.slug ===
              "string" &&
            project.slug.trim().length >
              0,
        )
        .map((project) => ({
          url:
            `${siteUrl}/projects/${project.slug}`,

          changeFrequency:
            "monthly",

          priority:
            0.85,
        }));

    /* =====================================================
       BLOG ROUTES
    ===================================================== */

    const blogRoutes: MetadataRoute.Sitemap =
      blogs
        .filter(
          (
            blog,
          ): blog is {
            slug: string;
          } =>
            typeof blog.slug ===
              "string" &&
            blog.slug.trim().length >
              0,
        )
        .map((blog) => ({
          url:
            `${siteUrl}/blog/${blog.slug}`,

          changeFrequency:
            "monthly",

          priority:
            0.8,
        }));

    /* =====================================================
       FINAL SITEMAP
    ===================================================== */

    return [
      ...staticRoutes,
      ...projectRoutes,
      ...blogRoutes,
    ];
  } catch (error) {
    /*
     * Sanity temporarily unavailable ho tab bhi
     * sitemap endpoint 500 nahi karega.
     */

    console.error(
      "Unable to load dynamic sitemap URLs from Sanity:",
      error,
    );

    return staticRoutes;
  }
}