
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  FileText,
  FolderOpen,
} from "lucide-react";

export type InvestorDocument = {
  _id: string;
  title: string;
  category: string;
  subcategory?: string | null;
  documentType?: string | null;
  financialYear?: string | null;
  documentDate?: string | null;
  fileUrl: string;
};

const sections = [
  {
    id: "announcements",
    title: "Announcements",
    description:
      "Stock exchange intimations, press releases and official announcements.",
    subcategories: [
      {
        id: "intimation-to-stock-exchange",
        title: "Intimation to Stock Exchange",
      },
      {
        id: "press-release",
        title: "Press Release",
      },
    ],
  },
  {
    id: "annual-return-and-reports",
    title: "Annual Return and Reports",
    description:
      "Published annual reports, annual returns and financial information.",
    subcategories: [
      {
        id: "annual-reports",
        title: "Annual Reports",
      },
      {
        id: "annual-returns",
        title: "Annual Returns",
      },
    ],
  },
  {
    id: "board-and-committees",
    title: "Board and Committees",
    description:
      "Board composition, committee information and related documents.",
  },
  {
    id: "corporate-social-responsibility",
    title: "Corporate Social Responsibility",
    description:
      "Published CSR information and related corporate documents.",
  },
  {
    id: "policies-and-code-of-conduct",
    title: "Policies and Code of Conduct",
    description:
      "Corporate policies, governance codes and official guidelines.",
  },
  {
    id: "material-documents",
    title: "Material Documents",
    description:
      "Published material documents and supporting disclosures.",
  },
  {
    id: "material-contracts",
    title: "Material Contracts",
    description:
      "Published material contracts and associated documents.",
  },
  {
    id: "advertisements",
    title: "Advertisements",
    description:
      "Officially published advertisements and public notices.",
  },
  {
    id: "offer-documents",
    title: "Offer Documents",
    description:
      "Published offer documents and applicable IPO-related filings.",
  },
  {
    id: "shareholding-pattern",
    title: "Shareholding Pattern",
    description:
      "Published shareholding information and related filings.",
  },
  {
    id: "group-companies",
    title:
      "Group Companies, Subsidiaries and Associates",
    description:
      "Information about group companies, subsidiaries and associates.",
  },
  {
    id: "investors-grievance",
    title:
      "Investors Grievance Redressal Details",
    description:
      "Investor grievance and redressal-related information.",
  },
  {
    id: "notice-and-meetings",
    title: "Notice and Meetings",
    description:
      "Published notices and information about corporate meetings.",
  },
] as const;

const legacyCategories: Record<string, string[]> = {
  announcements: ["disclosures"],
  "annual-return-and-reports": ["financial-information"],
  "board-and-committees": [
    "board-committees",
    "corporate-governance",
  ],
  "policies-and-code-of-conduct": ["policies"],
  "offer-documents": ["ipo-offer-documents"],
  "shareholding-pattern": ["shareholder-information"],
};

function getSectionDocuments(
  documents: InvestorDocument[],
  sectionId: string,
) {
  const categories = [
    sectionId,
    ...(legacyCategories[sectionId] ?? []),
  ];

  return documents.filter((document) =>
    categories.includes(document.category),
  );
}

function formatDate(value?: string | null) {
  if (!value) return null;

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function DocumentList({
  documents,
}: {
  documents: InvestorDocument[];
}) {
  if (documents.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-7 text-center">
        <FolderOpen
          size={26}
          className="mx-auto text-slate-300"
        />

        <p className="mt-3 text-sm font-semibold text-slate-500">
          No documents published yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {documents.map((document) => (
        <div
          key={document._id}
          className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-[#c21119]/30 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#c21119]">
              <FileText size={21} />
            </div>

            <div className="min-w-0">
              <h4 className="text-sm font-extrabold leading-6 text-[#102b49]">
                {document.title}
              </h4>

              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
                {document.financialYear && (
                  <span>
                    FY {document.financialYear}
                  </span>
                )}

                {document.documentDate && (
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={13} />
                    {formatDate(document.documentDate)}
                  </span>
                )}

                {document.documentType && (
                  <span>{document.documentType}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 pl-14 sm:pl-0">
            <a
              href={document.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-xs font-extrabold text-[#102b49] transition-colors hover:border-[#c21119] hover:text-[#c21119]"
            >
              View PDF
              <ArrowUpRight size={15} />
            </a>

            <a
              href={`${document.fileUrl}?dl=`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#c21119] px-3 py-2.5 text-xs font-extrabold text-white transition-colors hover:bg-[#102b49]"
              aria-label={`Download ${document.title}`}
            >
              <ArrowDownToLine size={16} />
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function InvestorAccordion({
  documents,
}: {
  documents: InvestorDocument[];
}) {
  const [openSection, setOpenSection] =
    useState<string | null>(null);

  const [openSubcategory, setOpenSubcategory] =
    useState<string | null>(null);

  const openFromHash = useCallback(() => {
    const hash = decodeURIComponent(
      window.location.hash.slice(1),
    );

    const section = sections.find(
      (item) => item.id === hash,
    );

    if (section) {
      setOpenSection(section.id);

      window.requestAnimationFrame(() => {
        document
          .getElementById(section.id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    }
  }, []);

  useEffect(() => {
    openFromHash();

    window.addEventListener(
      "hashchange",
      openFromHash,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        openFromHash,
      );
    };
  }, [openFromHash]);

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        const isOpen = openSection === section.id;

        const sectionDocuments = getSectionDocuments(
          documents,
          section.id,
        );

        const subcategories =
          "subcategories" in section
            ? section.subcategories
            : null;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-36 overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-[#c21119]/25 shadow-[0_16px_45px_rgba(16,43,73,0.08)]"
                : "border-slate-200 hover:border-slate-300 hover:shadow-md"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => {
                setOpenSection(
                  isOpen ? null : section.id,
                );

                setOpenSubcategory(null);
              }}
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                  isOpen
                    ? "bg-[#c21119] text-white"
                    : "bg-red-50 text-[#c21119]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-base font-black leading-6 text-[#102b49] sm:text-lg">
                  {section.title}
                </span>

                <span className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                  {section.description}
                </span>
              </span>

              <span className="hidden shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 sm:inline-flex">
                {sectionDocuments.length}{" "}
                {sectionDocuments.length === 1
                  ? "Document"
                  : "Documents"}
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen
                    ? "bg-red-50 text-[#c21119]"
                    : "bg-slate-50 text-[#102b49]"
                }`}
              >
                <ChevronDown
                  size={19}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 bg-[#fbfcfe] px-5 py-6 sm:px-7">
                {subcategories ? (
                  <div className="space-y-3">
                    {subcategories.map((subcategory) => {
                      const matchingDocuments =
                        sectionDocuments.filter(
                          (document) =>
                            document.subcategory ===
                            subcategory.id,
                        );

                      const subOpen =
                        openSubcategory ===
                        subcategory.id;

                      return (
                        <div
                          key={subcategory.id}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                        >
                          <button
                            type="button"
                            aria-expanded={subOpen}
                            onClick={() =>
                              setOpenSubcategory(
                                subOpen
                                  ? null
                                  : subcategory.id,
                              )
                            }
                            className="flex w-full items-center justify-between gap-4 p-4 text-left"
                          >
                            <span className="text-sm font-extrabold text-[#102b49]">
                              {subcategory.title}
                            </span>

                            <span className="flex items-center gap-3">
                              <span className="text-xs font-semibold text-slate-500">
                                {matchingDocuments.length}
                              </span>

                              <ChevronDown
                                size={17}
                                className={`text-[#c21119] transition-transform ${
                                  subOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </span>
                          </button>

                          {subOpen && (
                            <div className="border-t border-slate-100 bg-[#fbfcfe] p-4">
                              <DocumentList
                                documents={
                                  matchingDocuments
                                }
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {sectionDocuments.some(
                      (document) =>
                        !document.subcategory,
                    ) && (
                      <div className="pt-3">
                        <h4 className="mb-3 text-sm font-black text-[#102b49]">
                          Other Published Documents
                        </h4>

                        <DocumentList
                          documents={sectionDocuments.filter(
                            (document) =>
                              !document.subcategory,
                          )}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <DocumentList
                    documents={sectionDocuments}
                  />
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}