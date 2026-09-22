
import { defineField, defineType } from "sanity";
import { FileText } from "lucide-react";

export const investorDocument = defineType({
  name: "investorDocument",
  title: "Investor Documents",
  type: "document",
  icon: FileText,

  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Document Category",
      type: "string",
      options: {
        list: [
          { title: "IPO & Offer Documents", value: "ipo-offer-documents" },
          { title: "Financial Information", value: "financial-information" },
          { title: "Corporate Governance", value: "corporate-governance" },
          { title: "Investor Disclosures", value: "disclosures" },
          { title: "Shareholder Information", value: "shareholder-information" },
          { title: "Policies & Codes", value: "policies" },
          { title: "Board & Committees", value: "board-committees" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "documentType",
      title: "Document Type",
      type: "string",
      description: "For example: DRHP, RHP, Annual Report or Board Meeting Outcome.",
    }),

    defineField({
      name: "financialYear",
      title: "Financial Year",
      type: "string",
      description: "For example: 2025-26. Leave blank if not applicable.",
    }),

    defineField({
      name: "documentDate",
      title: "Document Date",
      type: "date",
      options: {
        dateFormat: "DD MMM YYYY",
      },
    }),

    defineField({
      name: "file",
      title: "PDF Document",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 100,
    }),

    defineField({
      name: "isPublished",
      title: "Show on Website",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});