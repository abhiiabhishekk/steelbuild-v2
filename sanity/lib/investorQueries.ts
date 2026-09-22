
import { groq } from "next-sanity";
import { client } from "./client";

export type InvestorCategory =
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
  documentType?: string;
  financialYear?: string;
  documentDate?: string;
  fileUrl: string;
};

const investorDocumentsQuery = groq`
  *[
    _type == "investorDocument" &&
    isPublished == true &&
    defined(file.asset->url)
  ]
  | order(displayOrder asc, documentDate desc) {
    _id,
    title,
    category,
    documentType,
    financialYear,
    documentDate,
    "fileUrl": file.asset->url
  }
`;

export async function getInvestorDocuments(): Promise<InvestorDocument[]> {
  return client.fetch(
    investorDocumentsQuery,
    {},
    { next: { revalidate: 60 } }
  );
}