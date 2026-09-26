
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

type CategoryConfig = {
  title: string;
  description: string;
  documentCategories?: InvestorCategory[];
};

const categories: Record<
  InvestorCategory | "investor-contact",
  CategoryConfig
> = {
  announcements: {
    title: "Announcements",
    description:
      "Stock exchange intimations, press releases and official announcements.",
    documentCategories: ["announcements", "disclosures"],
  },

  "annual-return-and-reports": {
    title: "Annual Return and Reports",
    description:
      "Published annual reports, annual returns and financial information.",
    documentCategories: [
      "annual-return-and-reports",
      "financial-information",
    ],
  },

  "board-and-committees": {
    title: "Board and Committees",
    description:
      "Board composition, committee information and related documents.",
    documentCategories: [
      "board-and-committees",
      "board-committees",
      "corporate-governance",
    ],
  },

  "corporate-social-responsibility": {
    title: "Corporate Social Responsibility",
    description:
      "Published CSR information and related corporate documents.",
  },

  "policies-and-code-of-conduct": {
    title: "Policies and Code of Conduct",
    description:
      "Corporate policies, governance codes and official guidelines.",
    documentCategories: [
      "policies-and-code-of-conduct",
      "policies",
    ],
  },

  "material-documents": {
    title: "Material Documents",
    description:
      "Published material documents and supporting disclosures.",
  },

  "material-contracts": {
    title: "Material Contracts",
    description:
      "Published material contracts and associated documents.",
  },

  advertisements: {
    title: "Advertisements",
    description:
      "Officially published advertisements and public notices.",
  },

  "offer-documents": {
    title: "Offer Documents",
    description:
      "Published offer documents and applicable IPO-related filings.",
    documentCategories: [
      "offer-documents",
      "ipo-offer-documents",
    ],
  },

  "shareholding-pattern": {
    title: "Shareholding Pattern",
    description:
      "Published shareholding information and related filings.",
    documentCategories: [
      "shareholding-pattern",
      "shareholder-information",
    ],
  },

  "group-companies": {
    title: "Group Companies, Subsidiaries and Associates",
    description:
      "Information about group companies, subsidiaries and associates.",
  },

  "investors-grievance": {
    title: "Investors Grievance Redressal Details",
    description:
      "Investor grievance and redressal-related information.",
  },

  "notice-and-meetings": {
    title: "Notice and Meetings",
    description:
      "Published notices and information about corporate meetings.",
  },

  // Existing URLs retained for backward compatibility.

  "ipo-offer-documents": {
    title: "IPO & Offer Documents",
    description:
      "Official IPO and offer-related documents published by Steelbuild Infra Projects Limited.",
    documentCategories: [
      "ipo-offer-documents",
      "offer-documents",
    ],
  },

  "financial-information": {
    title: "Financial Information",
    description:
      "Published annual reports, financial statements and financial information.",
    documentCategories: [
      "financial-information",
      "annual-return-and-reports",
    ],
  },

  "corporate-governance": {
    title: "Corporate Governance",
    description:
      "Official corporate governance documents and information.",
    documentCategories: [
      "corporate-governance",
      "board-and-committees",
      "board-committees",
    ],
  },

  disclosures: {
    title: "Investor Disclosures",
    description:
      "Official investor disclosures, announcements and related documents.",
    documentCategories: [
      "disclosures",
      "announcements",
    ],
  },

  "shareholder-information": {
    title: "Shareholder Information",
    description:
      "Published shareholder-related documents and information.",
    documentCategories: [
      "shareholder-information",
      "shareholding-pattern",
    ],
  },

  policies: {
    title: "Policies & Codes",
    description:
      "Officially published corporate policies and codes.",
    documentCategories: [
      "policies",
      "policies-and-code-of-conduct",
    ],
  },

  "board-committees": {
    title: "Board & Committees",
    description:
      "Published board and committee-related information.",
    documentCategories: [
      "board-committees",
      "board-and-committees",
    ],
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

export const dynamic = "force-dynamic";
export const revalidate = 0;

function getCategoryConfig(
  category: string,
): CategoryConfig | null {
  if (!Object.prototype.hasOwnProperty.call(categories, category)) {
    return null;
  }

  return categories[category as CategorySlug];
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const config = getCategoryConfig(category);

  if (!config) {
    return {
      title: "Investor Relations",
    };
  }

  return {
    title: `${config.title} | Investor Relations`,
    description: config.description,
  };
}

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default async function InvestorCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;
  const config = getCategoryConfig(category);

  if (!config) {
    notFound();
  }

  const documentCategories =
    config.documentCategories ??
    [category as InvestorCategory];

  const documents =
    category === "investor-contact"
      ? []
      : (await getInvestorDocuments()).filter(
          (document) =>
            documentCategories.includes(document.category),
        );

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      {/* HERO */}

      <section className="bg-[#071b34] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:py-20">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 text-sm font-semibold !text-white/70 transition-colors hover:!text-white"
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

      {/* CONTENT */}

      <section className="mx-auto max-w-[1180px] px-6 py-14 lg:py-20">
        {category === "investor-contact" ? (
          <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[#071b34]">
              Investor Enquiries
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Official investor-specific contact details
              will be published here when confirmed.
            </p>

            <p className="mt-6 text-sm text-slate-600">
              For general company enquiries, please visit
              our{" "}
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
              Official documents will appear here once
              they are available and approved for
              publication.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-6 md:px-8">
              <h2 className="text-xl font-black text-[#071b34]">
                Published Documents
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {documents.length}{" "}
                {documents.length === 1
                  ? "document"
                  : "documents"}{" "}
                available
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
                          <span>
                            FY {document.financialYear}
                          </span>
                        )}

                        {document.documentType && (
                          <span>
                            {document.documentType}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    href={document.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#c21119] px-5 py-3 text-sm font-bold text-[#c21119] transition-colors hover:bg-[#c21119] hover:!text-white"
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