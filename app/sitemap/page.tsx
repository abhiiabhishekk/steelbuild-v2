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

export const metadata: Metadata = {
  title: "Sitemap | Steelbuild Infra Projects Limited",
  description:
    "Explore the Steelbuild Infra Projects Limited website through our complete HTML sitemap.",
  alternates: {
    canonical: "/sitemap",
  },
};

const sitemapGroups = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    icon: Users,
    links: [
      { label: "Company Overview", href: "/about" },
      { label: "Our Journey", href: "/about/our-journey" },
      { label: "Vision, Mission & Values", href: "/about/vision-mission-values" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Team Members", href: "/about/team" },
      {
        label: "Quality & Certifications",
        href: "/about/quality-certifications",
      },
      { label: "Awards & Recognition", href: "/about/awards" },
      { label: "CSR & Sustainability", href: "/about/csr" },
    ],
  },
  {
    title: "Products",
    icon: PackageSearch,
    links: [
      {
        label: "Pre-Engineered Buildings",
        href: "/products/pre-engineered-buildings",
      },
      {
        label: "Multi-Storey Buildings",
        href: "/products/multi-storey-buildings",
      },
      {
        label: "Heavy Steel Structures",
        href: "/products/heavy-steel-structures",
      },
      {
        label: "Factory Buildings",
        href: "/products/factory-buildings",
      },
      {
        label: "Warehouse Buildings",
        href: "/products/warehouse-buildings",
      },
      {
        label: "Cold Storage Buildings",
        href: "/products/cold-storage-buildings",
      },
      {
        label: "Commercial Buildings",
        href: "/products/commercial-buildings",
      },
      {
        label: "Steel Deck Sheets",
        href: "/products/steel-deck-sheets",
      },
      {
        label: "Roofing Systems",
        href: "/products/roofing-systems",
      },
      {
        label: "Cladding Systems",
        href: "/products/cladding-systems",
      },
    ],
  },
  {
    title: "Industries",
    icon: Building2,
    links: [
      { label: "Warehousing & Logistics", href: "/industries/warehousing-logistics" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Automobile", href: "/industries/automobile" },
      { label: "Food Processing", href: "/industries/food-processing" },
      { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
      { label: "Agriculture & Cold Storage", href: "/industries/agriculture" },
    ],
  },
  {
    title: "Resources & Events",
    icon: FolderOpen,
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Exhibitions", href: "/about/exhibitions" },
      { label: "Company Brochure", href: "/about/company-brochure" },
      {
        label: "Corporate Profile",
        href: "/steelbuild-corporate-profile",
      },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    icon: FileText,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-[#f7f9fc]">
      <section className="relative isolate overflow-hidden bg-[#163c69] pb-20 pt-24 text-white lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

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
              overview of our company, products, industries, projects,
              resources and legal pages.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

        <Container>
          <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sitemapGroups.map((group) => {
              const Icon = group.icon;

              return (
                <section
                  key={group.title}
                  className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.12)]"
                >
                  <div className="flex items-center gap-4 border-b border-gray-200 bg-[#f8fafc] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h2 className="text-xl font-black text-primary-blue">
                      {group.title}
                    </h2>
                  </div>

                  <nav className="space-y-1 p-5">
                    {group.links.map((link) => (
                      <Link
                        key={`${group.title}-${link.label}`}
                        href={link.href}
                        className="group/link flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-sm font-bold text-gray-600 transition-all duration-300 hover:bg-primary-blue hover:!text-white"
                      >
                        <span>{link.label}</span>

                        <ArrowRight
                          size={17}
                          className="shrink-0 text-gray-350 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-primary-red"
                        />
                      </Link>
                    ))}
                  </nav>
                </section>
              );
            })}
          </div>

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
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}