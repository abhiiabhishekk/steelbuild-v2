
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  FileCheck2,
  FileText,
  Landmark,
  Mail,
  Scale,
  ScrollText,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Investor information, corporate governance, financial information and official disclosures of Steelbuild Infra Projects Limited.",
};

const sections = [
  {
    title: "IPO & Offer Documents",
    description:
      "Official offer documents and IPO-related filings, when available.",
    href: "/investors/ipo-offer-documents",
    icon: FileText,
  },
  {
    title: "Financial Information",
    description:
      "Annual reports, financial statements and other published financial information.",
    href: "/investors/financial-information",
    icon: Building2,
  },
  {
    title: "Corporate Governance",
    description:
      "Governance-related information and official corporate documents.",
    href: "/investors/corporate-governance",
    icon: Scale,
  },
  {
    title: "Investor Disclosures",
    description:
      "Official announcements, disclosures and investor communications.",
    href: "/investors/disclosures",
    icon: FileCheck2,
  },
  {
    title: "Shareholder Information",
    description:
      "Shareholder-related information and applicable investor resources.",
    href: "/investors/shareholder-information",
    icon: Users,
  },
  {
    title: "Policies & Codes",
    description:
      "Published corporate policies, codes and related documents.",
    href: "/investors/policies",
    icon: ScrollText,
  },
  {
    title: "Board & Committees",
    description:
      "Board and committee-related information and documents.",
    href: "/investors/board-committees",
    icon: Landmark,
  },
  {
    title: "Investor Contact",
    description:
      "Contact information for investor-related enquiries.",
    href: "/investors/investor-contact",
    icon: Mail,
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <section className="bg-[#071b34] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:py-28">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e84a50]">
            Steelbuild Infra Projects Limited
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Investor Relations
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            Access published corporate information, financial documents,
            governance materials and official investor disclosures in
            one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c21119]">
            Investor Information
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#071b34]">
            Explore Investor Resources
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Select a category to view officially published information
            and documents.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.href}
                href={section.href}
                className="group flex min-h-[245px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c21119]/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c21119]/10 text-[#c21119]">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <h3 className="mt-7 text-lg font-black text-[#071b34]">
                  {section.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#c21119]">
                  Explore
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}