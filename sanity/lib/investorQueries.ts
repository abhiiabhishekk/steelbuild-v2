
import { groq } from "next-sanity";
import { serverClient } from "./client";

export type InvestorCategory =
  | "announcements"
  | "annual-return-and-reports"
  | "board-and-committees"
  | "corporate-social-responsibility"
  | "policies-and-code-of-conduct"
  | "material-documents"
  | "material-contracts"
  | "advertisements"
  | "offer-documents"
  | "shareholding-pattern"
  | "group-companies"
  | "investors-grievance"
  | "notice-and-meetings"
  | "ipo-offer-documents"
  | "financial-information"
  | "corporate-governance"
  | "disclosures"
  | "shareholder-information"
  | "policies"
  | "board-committees";

export type InvestorDocument = {
  _id: string;
  title: string;
  category: InvestorCategory;
  subcategory?: string;
  documentType?: string;
  financialYear?: string;
  documentDate?: string;
  displayOrder?: number;
  fileUrl: string;
};

const investorDocumentsQuery = groq`
  *[
    _type == "investorDocument" &&
    isPublished == true &&
    defined(file.asset)
  ]
  | order(displayOrder asc, documentDate desc) {
    _id,
    title,
    category,
    subcategory,
    documentType,
    financialYear,
    documentDate,
    displayOrder,
    "fileUrl": file.asset->url
  }
`;

export async function getInvestorDocuments(): Promise<
  InvestorDocument[]
> {
  const documents =
    await serverClient.fetch<InvestorDocument[]>(
      investorDocumentsQuery,
      {},
      {
        cache: "no-store",
      }
    );

  return documents.filter(
    (document) => Boolean(document.fileUrl)
  );
}