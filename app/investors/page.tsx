
import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "next-sanity";
import {
  ArrowDown,
  ArrowUpRight,
  FileCheck2,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import InvestorAccordion, {
  type InvestorDocument,
} from "@/components/investors/InvestorAccordion";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Investor information, corporate governance, financial reports and official disclosures of Steelbuild Infra Projects Limited.",
};

export const revalidate = 60;

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET;

const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2025-01-01",
        useCdn: false,
        perspective: "published",
      })
    : null;

async function getInvestorDocuments(): Promise<
  InvestorDocument[]
> {
  if (!sanityClient) {
    console.error(
      "Sanity project ID or dataset is missing.",
    );

    return [];
  }

  try {
    return await sanityClient.fetch<
      InvestorDocument[]
    >(
      `*[
        _type == "investorDocument" &&
        isPublished == true &&
        defined(file.asset)
      ] | order(displayOrder asc, documentDate desc) {
        _id,
        title,
        category,
        subcategory,
        documentType,
        financialYear,
        documentDate,
        "fileUrl": file.asset->url
      }`,
      {},
      {
        next: {
          revalidate: 60,
        },
      },
    );
  } catch (error) {
    console.error(
      "Failed to load investor documents:",
      error,
    );

    return [];
  }
}

const highlights = [
  {
    title: "Corporate Announcements",
    description:
      "Official announcements and investor communications.",
    href: "#announcements",
    icon: FileCheck2,
  },
  {
    title: "Annual Reports",
    description:
      "Published annual reports and financial information.",
    href: "#annual-return-and-reports",
    icon: FileText,
  },
  {
    title: "Board & Committees",
    description:
      "Board and committee-related information.",
    href: "#board-and-committees",
    icon: Landmark,
  },
  {
    title: "Policies & Governance",
    description:
      "Published corporate policies and governance documents.",
    href: "#policies-and-code-of-conduct",
    icon: ShieldCheck,
  },
];

export default async function InvestorsPage() {
  const documents = await getInvestorDocuments();

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      {/* PREMIUM HERO */}

      <section className="relative isolate overflow-hidden bg-[#102b49] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative mx-auto grid max-w-[1180px] gap-12 px-6 py-20 lg:grid-cols-[1fr_350px] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#c21119]" />

              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c21119]">
                Steelbuild Infra Projects Limited
              </p>
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Investor
              <br />
              Relations
            </h1>

            <div className="mt-7 h-1 w-16 rounded-full bg-[#c21119]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">
              Access published corporate information,
              financial reports, governance materials and
              official investor disclosures in one place.
            </p>

            <a
              href="#investor-resources"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#c21119] px-6 py-4 text-sm font-black text-white shadow-[0_14px_35px_rgba(194,17,25,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#a80e15]"
            >
              Explore Investor Resources

              <ArrowDown
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>

          <div className="hidden rounded-[28px] border border-white/15 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-sm lg:block">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#c21119]">
              Investor Information
            </p>

            <h2 className="mt-5 text-2xl font-black leading-snug">
              Corporate Information & Disclosures
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Explore officially published documents
              organized into dedicated investor categories.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4">
                <p className="text-3xl font-black">
                  13
                </p>

                <p className="mt-2 text-xs font-medium text-white/65">
                  Investor Sections
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4">
                <p className="text-3xl font-black">
                  {documents.length}
                </p>

                <p className="mt-2 text-xs font-medium text-white/65">
                  Published Documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK RESOURCE CARDS */}

      <section className="relative z-10 mx-auto max-w-[1180px] px-6 pt-14 lg:pt-16">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c21119]">
            Investor Information
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#102b49]">
            Explore Investor Resources
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Find corporate announcements, reports,
            governance information and other officially
            published documents.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex min-h-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c21119]/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#c21119]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-black text-[#102b49]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#c21119]">
                  Explore

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* INVESTOR ACCORDION */}

      <section
        id="investor-resources"
        className="scroll-mt-28 mx-auto max-w-[1180px] px-6 py-20 lg:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c21119]">
              Official Documents
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#102b49] sm:text-4xl">
              Investor Information & Disclosures
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Select a section to explore published
              documents. Categories with multiple document
              types include expandable subcategories.
            </p>
          </div>

          <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-[#102b49]">
            13 Investor Sections
          </span>
        </div>

        <InvestorAccordion documents={documents} />
      </section>

      {/* INVESTOR CONTACT CTA */}

      <section className="bg-[#102b49] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-7 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c21119]">
              Investor Relations
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Have an investor-related enquiry?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              Visit our investor contact page for
              relevant contact information.
            </p>
          </div>

          <Link
            href="/investors/investor-contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#c21119] px-6 py-4 text-sm font-black !text-white transition-colors hover:bg-[#a80e15]"
          >
            Investor Contact

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}