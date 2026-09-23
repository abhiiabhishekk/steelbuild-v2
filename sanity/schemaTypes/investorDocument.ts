
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
          { title: "Announcements", value: "announcements" },
          {
            title: "Annual Return and Reports",
            value: "annual-return-and-reports",
          },
          {
            title: "Board and Committees",
            value: "board-and-committees",
          },
          {
            title: "Corporate Social Responsibility",
            value: "corporate-social-responsibility",
          },
          {
            title: "Policies and Code of Conduct",
            value: "policies-and-code-of-conduct",
          },
          {
            title: "Material Documents",
            value: "material-documents",
          },
          {
            title: "Material Contracts",
            value: "material-contracts",
          },
          {
            title: "Advertisements",
            value: "advertisements",
          },
          {
            title: "Offer Documents",
            value: "offer-documents",
          },
          {
            title: "Shareholding Pattern",
            value: "shareholding-pattern",
          },
          {
            title: "Group Companies, Subsidiaries and Associates",
            value: "group-companies",
          },
          {
            title: "Investors Grievance Redressal Details",
            value: "investors-grievance",
          },
          {
            title: "Notice and Meetings",
            value: "notice-and-meetings",
          },

          // Existing categories retained for compatibility.
          {
            title: "Legacy — IPO & Offer Documents",
            value: "ipo-offer-documents",
          },
          {
            title: "Legacy — Financial Information",
            value: "financial-information",
          },
          {
            title: "Legacy — Corporate Governance",
            value: "corporate-governance",
          },
          {
            title: "Legacy — Investor Disclosures",
            value: "disclosures",
          },
          {
            title: "Legacy — Shareholder Information",
            value: "shareholder-information",
          },
          {
            title: "Legacy — Policies & Codes",
            value: "policies",
          },
          {
            title: "Legacy — Board & Committees",
            value: "board-committees",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subcategory",
      title: "Document Subcategory",
      type: "string",
      description:
        "Select a subcategory where applicable. For other sections, leave blank.",
      options: {
        list: [
          {
            title: "Intimation to Stock Exchange",
            value: "intimation-to-stock-exchange",
          },
          {
            title: "Press Release",
            value: "press-release",
          },
          {
            title: "Annual Reports",
            value: "annual-reports",
          },
          {
            title: "Annual Returns",
            value: "annual-returns",
          },
        ],
      },
      hidden: ({ document }) =>
        ![
          "announcements",
          "annual-return-and-reports",
        ].includes(String(document?.category ?? "")),
    }),

    defineField({
      name: "documentType",
      title: "Document Type",
      type: "string",
      description:
        "For example: DRHP, RHP, Annual Report or Board Meeting Outcome.",
    }),

    defineField({
      name: "financialYear",
      title: "Financial Year",
      type: "string",
      description: "For example: 2025-26.",
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
      category: "category",
      subcategory: "subcategory",
      year: "financialYear",
    },
    prepare({ title, category, subcategory, year }) {
      return {
        title,
        subtitle: [category, subcategory, year]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});