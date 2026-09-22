
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  FileText,
} from "lucide-react";

import {
  getInvestorDocuments,
  type InvestorCategory,
} from "@/sanity/lib/investorQueries";

const categories: Record<
  InvestorCategory | "investor-contact",
  { title: string; description: string }
> = {
  "ipo-offer-documents": {
    title: "IPO & Offer Documents",
    description:
      "Official IPO and offer-related documents published by Steelbuild Infra Projects Limited.",
  },
  "financial-information": {
    title: "Financial Information",
    description:
      "Published annual reports, financial statements and financial information.",
  },
  "corporate-governance": {
    title: "Corporate Governance",
    description:
      "Official corporate governance documents and information.",
  },
  disclosures: {
    title: "Investor Disclosures",
    description:
      "Official investor disclosures, announcements and related documents.",
  },
  "shareholder-information": {
    title: "Shareholder Information",
    description:
      "Published shareholder-related documents and information.",
  },
  policies: {
    title: "Policies & Codes",
    description:
      "Officially published corporate policies and codes.",
  },
  "board-committees": {
    title: "Board & Committees",
    description:
      "Published board and committee-related information.",
  },
  "investor-contact": {
    title: "Investor Contact",
    description:
      "Contact Steelbuild Infra Projects Limited for investor-related enquiries.",
  },
};

type CategorySlug = keyof typeof categories;

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const config = categories[category as CategorySlug];

  if (!config) {
    return { title: "Investor Relations" };
  }

  return {
    title: `${config.title} | Investor Relations`,
    description: config.description,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function InvestorCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;
  const config = categories[category as CategorySlug];

  if (!config) notFound();

  const documents =
    category === "investor-contact"
      ? []
      : (await getInvestorDocuments()).filter(
          (document) => document.category === category
        );

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <section className="bg-[#071b34] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:py-20">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            Investor Relations
          </Link>

          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            {config.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
            {config.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-14 lg:py-20">
        {category === "investor-contact" ? (
          <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[#071b34]">
              Investor Enquiries
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Official investor-specific contact details will be
              published here when confirmed.
            </p>

            <p className="mt-6 text-sm text-slate-600">
              For general company enquiries, please visit our{" "}
              <Link
                href="/contact"
                className="font-bold text-[#c21119] underline underline-offset-4"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        ) : documents.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <FileText size={29} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-[#071b34]">
              No documents published yet
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Official documents will appear here once they are
              available and approved for publication.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-6 md:px-8">
              <h2 className="text-xl font-black text-[#071b34]">
                Published Documents
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {documents.length} document
                {documents.length === 1 ? "" : "s"} available
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {documents.map((document) => (
                <div
                  key={document._id}
                  className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:px-8"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c21119]/10 text-[#c21119]">
                      <FileText size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-[#071b34]">
                        {document.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        {document.documentDate && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {formatDate(document.documentDate)}
                          </span>
                        )}

                        {document.financialYear && (
                          <span>FY {document.financialYear}</span>
                        )}

                        {document.documentType && (
                          <span>{document.documentType}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    href={document.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#c21119] px-5 py-3 text-sm font-bold text-[#c21119] transition-colors hover:bg-[#c21119] hover:text-white"
                  >
                    View PDF
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}