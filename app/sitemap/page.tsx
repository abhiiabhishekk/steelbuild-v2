import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  FileText,
  FolderOpen,
  Home,
  MapPinned,
  PackageSearch,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/sitemap`;

/* =========================================================
   HTML SITEMAP SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Sitemap | Steelbuild Infra Projects Limited",
  },

  description:
    "Explore the Steelbuild Infra Projects Limited website sitemap covering company information, PEB products, projects, manufacturing, industries, resources, careers, contact and legal pages.",

  alternates: {
    canonical:
      "/sitemap",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Website Sitemap | Steelbuild Infra Projects Limited",

    description:
      "Navigate Steelbuild Infra Projects Limited through our structured sitemap covering company, products, projects, manufacturing, industries, resources and legal pages.",
  },

  twitter: {
    card:
      "summary",

    title:
      "Website Sitemap | Steelbuild Infra Projects Limited",

    description:
      "Explore the Steelbuild Infra Projects Limited website through our complete HTML sitemap.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

/* =========================================================
   SITEMAP GROUPS
========================================================= */

const sitemapGroups = [
  {
    title:
      "Main Pages",

    icon:
      Home,

    links: [
      {
        label:
          "Home",

        href:
          "/",
      },

      {
        label:
          "About Steelbuild",

        href:
          "/about",
      },

      {
        label:
          "Products",

        href:
          "/products",
      },

      {
        label:
          "Projects",

        href:
          "/projects",
      },

      {
        label:
          "Manufacturing",

        href:
          "/manufacturing",
      },

      {
        label:
          "Industries",

        href:
          "/industries",
      },

      {
        label:
          "Contact",

        href:
          "/contact",
      },

      {
        label:
          "Request a Quote",

        href:
          "/request-a-quote",
      },
    ],
  },

  {
    title:
      "Company",

    icon:
      Users,

    links: [
      {
        label:
          "Company Overview",

        href:
          "/about",
      },

      {
        label:
          "Vision, Mission & Values",

        href:
          "/about/vision-mission-values",
      },

      {
        label:
          "Leadership",

        href:
          "/about/leadership",
      },

      {
        label:
          "Team Members",

        href:
          "/about/team",
      },

      {
        label:
          "Quality & Certifications",

        href:
          "/about/quality-certifications",
      },

      {
        label:
          "Awards & Recognition",

        href:
          "/about/awards-recognition",
      },

      {
        label:
          "CSR & Sustainability",

        href:
          "/about/csr-sustainability",
      },

      {
        label:
          "Exhibitions",

        href:
          "/about/exhibitions",
      },

      {
        label:
          "Company Brochure",

        href:
          "/about/company-brochure",
      },

      {
        label:
          "Corporate Profile",

        href:
          "/steelbuild-corporate-profile",
      },
    ],
  },

  {
    title:
      "PEB & Steel Buildings",

    icon:
      Building2,

    links: [
      {
        label:
          "Pre-Engineered Buildings",

        href:
          "/products/pre-engineered-buildings",
      },

      {
        label:
          "Industrial Sheds",

        href:
          "/products/industrial-sheds",
      },

      {
        label:
          "Warehouse Buildings",

        href:
          "/products/warehouse-buildings",
      },

      {
        label:
          "Factory Buildings",

        href:
          "/products/factory-buildings",
      },

      {
        label:
          "Commercial Buildings",

        href:
          "/products/commercial-buildings",
      },

      {
        label:
          "Cold Storage Buildings",

        href:
          "/products/cold-storage-buildings",
      },

      {
        label:
          "Heavy Steel Structures",

        href:
          "/products/heavy-steel-structures",
      },

      {
        label:
          "Multi-Storey Buildings",

        href:
          "/products/multi-storey-buildings",
      },
    ],
  },

  {
    title:
      "Roofing Systems",

    icon:
      PackageSearch,

    links: [
      {
        label:
          "Roofing Systems",

        href:
          "/products/roofing-systems",
      },

      {
        label:
          "Roofing Sheets",

        href:
          "/products/roofing-systems/roofing-sheets",
      },

      {
        label:
          "Standing Seam Roofing",

        href:
          "/products/roofing-systems/standing-seam-roofing",
      },

      {
        label:
          "Deck Sheets",

        href:
          "/products/roofing-systems/deck-sheets",
      },

      {
        label:
          "Ridge Ventilators",

        href:
          "/products/roofing-systems/ridge-ventilators",
      },

      {
        label:
          "Turbo Ventilators",

        href:
          "/products/roofing-systems/turbo-ventilators",
      },
    ],
  },

  {
    title:
      "Cladding Systems",

    icon:
      PackageSearch,

    links: [
      {
        label:
          "Cladding Systems",

        href:
          "/products/cladding-systems",
      },

      {
        label:
          "Wall Cladding",

        href:
          "/products/cladding-systems/wall-cladding",
      },

      {
        label:
          "Sandwich Panels",

        href:
          "/products/cladding-systems/sandwich-panels",
      },

      {
        label:
          "Insulation Systems",

        href:
          "/products/cladding-systems/insulation-systems",
      },

      {
        label:
          "Louvers",

        href:
          "/products/cladding-systems/louvers",
      },

      {
        label:
          "Polycarbonate Sheets",

        href:
          "/products/cladding-systems/polycarbonate-sheets",
      },

      {
        label:
          "Sheeting Accessories",

        href:
          "/products/cladding-systems/sheeting-accessories",
      },
    ],
  },

  {
    title:
      "Mezzanine Systems",

    icon:
      Building2,

    links: [
      {
        label:
          "Mezzanine Systems",

        href:
          "/products/mezzanine-systems",
      },

      {
        label:
          "Structural Mezzanine",

        href:
          "/products/mezzanine-systems/structural-mezzanine",
      },

      {
        label:
          "Industrial Staircases",

        href:
          "/products/mezzanine-systems/industrial-staircases",
      },

      {
        label:
          "Walkways & Catwalks",

        href:
          "/products/mezzanine-systems/walkways-catwalks",
      },

      {
        label:
          "Handrails & Guardrails",

        href:
          "/products/mezzanine-systems/handrails-guardrails",
      },

      {
        label:
          "Roof Platforms",

        href:
          "/products/mezzanine-systems/roof-platforms",
      },
    ],
  },

  {
    title:
      "Resources & Careers",

    icon:
      FolderOpen,

    links: [
      {
        label:
          "Blog",

        href:
          "/blog",
      },

      {
        label:
          "Projects",

        href:
          "/projects",
      },

      {
        label:
          "Industries We Serve",

        href:
          "/industries",
      },

      {
        label:
          "Exhibitions",

        href:
          "/about/exhibitions",
      },

      {
        label:
          "Company Brochure",

        href:
          "/about/company-brochure",
      },

      {
        label:
          "Corporate Profile & Film",

        href:
          "/steelbuild-corporate-profile",
      },

      {
        label:
          "Careers",

        href:
          "/careers",
      },

      {
        label:
          "Apply for Jobs",

        href:
          "/careers/apply",
      },
    ],
  },

  {
    title:
      "Legal & Contact",

    icon:
      FileText,

    links: [
      {
        label:
          "Contact Us",

        href:
          "/contact",
      },

      {
        label:
          "Request a Quote",

        href:
          "/request-a-quote",
      },

      {
        label:
          "Privacy Policy",

        href:
          "/privacy-policy",
      },

      {
        label:
          "Terms & Conditions",

        href:
          "/terms-and-conditions",
      },

      {
        label:
          "Website Sitemap",

        href:
          "/sitemap",
      },
    ],
  },
] as const;

/* =========================================================
   FLATTENED SITEMAP LINKS
========================================================= */

const allSitemapLinks =
  sitemapGroups.flatMap(
    (group) =>
      group.links.map(
        (link) => ({
          group:
            group.title,

          label:
            link.label,

          href:
            link.href,
        }),
      ),
  );

/* =========================================================
   REMOVE DUPLICATE URLS FOR SCHEMA
========================================================= */

const uniqueSitemapLinks =
  Array.from(
    new Map(
      allSitemapLinks.map(
        (link) => [
          link.href,
          link,
        ],
      ),
    ).values(),
  );

/* =========================================================
   SITEMAP PAGE
========================================================= */

export default function SitemapPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Website Sitemap | Steelbuild Infra Projects Limited",

    headline:
      "Steelbuild Infra Projects Limited Website Sitemap",

    description:
      "A structured overview of Steelbuild Infra Projects Limited website pages covering company information, Pre-Engineered Building products, projects, manufacturing, industries, resources, careers and legal information.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    mainEntity: {
      "@id":
        `${pageUrl}/#sitemap-list`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     SITEMAP ITEM LIST SCHEMA
  ======================================================= */

  const sitemapListSchema = {
    "@type":
      "ItemList",

    "@id":
      `${pageUrl}/#sitemap-list`,

    name:
      "Steelbuild Infra Projects Limited Website Pages",

    numberOfItems:
      uniqueSitemapLinks.length,

    itemListElement:
      uniqueSitemapLinks.map(
        (link, index) => ({
          "@type":
            "ListItem",

          position:
            index + 1,

          name:
            link.label,

          url:
            link.href === "/"
              ? siteUrl
              : `${siteUrl}${link.href}`,
        }),
      ),
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type":
      "BreadcrumbList",

    "@id":
      `${pageUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name:
          "Home",

        item:
          siteUrl,
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Sitemap",

        item:
          pageUrl,
      },
    ],
  };

  /* =======================================================
     STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      webPageSchema,
      sitemapListSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <JsonLd
        data={
          structuredData
        }
      />

      {/* ===================================================
          PAGE
      =================================================== */}

      <main className="bg-[#f7f9fc]">

        {/* =================================================
            HERO
        ================================================== */}

        <section className="relative isolate overflow-hidden bg-[#163c69] pb-20 pt-24 text-white lg:pb-24 lg:pt-28">
          {/* Engineering Grid */}

          <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",

                backgroundSize:
                  "70px 70px",
              }}
            />
          </div>

          {/* Background Glow */}

          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/15 blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/[0.07] blur-[120px]" />

          <Container>
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
                <MapPinned
                  size={16}
                  className="text-primary-red"
                />

                Website Navigation
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl lg:text-[72px]">
                Website Sitemap
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-9 text-white/75">
                Explore Steelbuild Infra Projects Limited through a structured
                overview of our company, Pre-Engineered Building solutions,
                projects, manufacturing capabilities, industries, resources
                and legal pages.
              </p>
            </div>
          </Container>
        </section>

        {/* =================================================
            SITEMAP GROUPS
        ================================================== */}

        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

          <Container>
            <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sitemapGroups.map(
                (group) => {
                  const Icon =
                    group.icon;

                  return (
                    <section
                      key={
                        group.title
                      }
                      aria-labelledby={`sitemap-${group.title
                        .toLowerCase()
                        .replace(
                          /[^a-z0-9]+/g,
                          "-",
                        )}`}
                      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.12)]"
                    >
                      {/* Header */}

                      <div className="flex items-center gap-4 border-b border-gray-200 bg-[#f8fafc] p-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          <Icon
                            size={
                              24
                            }
                          />
                        </div>

                        <h2
                          id={`sitemap-${group.title
                            .toLowerCase()
                            .replace(
                              /[^a-z0-9]+/g,
                              "-",
                            )}`}
                          className="text-xl font-black text-primary-blue"
                        >
                          {
                            group.title
                          }
                        </h2>
                      </div>

                      {/* Links */}

                      <nav
                        aria-label={
                          group.title
                        }
                        className="space-y-1 p-5"
                      >
                        {group.links.map(
                          (link) => (
                            <Link
                              key={`${group.title}-${link.label}`}
                              href={
                                link.href
                              }
                              className="group/link flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-sm font-bold text-gray-600 transition-all duration-300 hover:bg-primary-blue hover:!text-white"
                            >
                              <span>
                                {
                                  link.label
                                }
                              </span>

                              <ArrowRight
                                size={
                                  17
                                }
                                className="shrink-0 text-gray-400 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-primary-red"
                              />
                            </Link>
                          ),
                        )}
                      </nav>
                    </section>
                  );
                },
              )}
            </div>

            {/* =============================================
                CONTACT CTA
            ============================================= */}

            <div className="relative z-10 mt-10 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-primary-blue p-8 text-center shadow-[0_24px_70px_rgba(27,63,104,0.18)] md:flex-row md:text-left">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-200">
                  Unable to Find Something?
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                  Contact Our Team for Assistance
                </h2>

                <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                  We can help you find company, product, project or technical
                  information.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black !text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
              >
                Contact Us

                <ArrowRight
                  size={18}
                />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}