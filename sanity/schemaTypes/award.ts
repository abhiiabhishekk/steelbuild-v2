import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

import BulkImageArrayInput from "../components/BulkImageArrayInput";

export const awardType = defineType({
  name: "award",
  title: "Award & Recognition",
  type: "document",

  groups: [
    {
      name: "basic",
      title: "Award Information",
      default: true,
    },
    {
      name: "media",
      title: "Images & Gallery",
    },
    {
      name: "content",
      title: "Award Content",
    },
    {
      name: "settings",
      title: "Publishing Settings",
    },
  ],

  fields: [
    defineField({
      name: "awardId",
      title: "Award ID",
      type: "string",
      group: "basic",

      description:
        "Internal reference, for example AWD-001.",

      validation: (rule) =>
        rule
          .required()
          .regex(/^AWD-\d{3,}$/, {
            name: "award reference",
          })
          .error(
            "Award ID must use the format AWD-001.",
          ),
    }),

    defineField({
      name: "title",
      title: "Award Title",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(220)
          .error(
            "Award title is required.",
          ),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",

      options: {
        source: "title",
        maxLength: 160,
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Award slug is required.",
          ),
    }),

    defineField({
      name: "organization",
      title: "Awarding Organization",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .max(180)
          .error(
            "Awarding organization is required.",
          ),
    }),

    defineField({
      name: "eventName",
      title: "Award Event / Ceremony",
      type: "string",
      group: "basic",

      description:
        "Example: Builders Excellence Awards",

      validation: (rule) =>
        rule
          .max(220)
          .warning(
            "Keep the event name below 220 characters.",
          ),
    }),

    defineField({
      name: "awardDate",
      title: "Award Date",
      type: "date",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .error(
            "Award date is required.",
          ),
    }),

    defineField({
      name: "yearLabel",
      title: "Display Year",
      type: "string",
      group: "basic",

      description:
        "Example: 2025",

      validation: (rule) =>
        rule
          .required()
          .regex(/^\d{4}$/, {
            name: "four-digit year",
          })
          .error(
            "Display year must contain four digits, for example 2025.",
          ),
    }),

    defineField({
      name: "category",
      title: "Recognition Category",
      type: "string",
      group: "basic",

      initialValue:
        "Industry Recognition",

      options: {
        list: [
          {
            title:
              "Industry Recognition",
            value:
              "Industry Recognition",
          },
          {
            title:
              "Engineering Excellence",
            value:
              "Engineering Excellence",
          },
          {
            title:
              "Supplier Excellence",
            value:
              "Supplier Excellence",
          },
          {
            title:
              "Sustainability Recognition",
            value:
              "Sustainability Recognition",
          },
          {
            title:
              "Business Excellence",
            value:
              "Business Excellence",
          },
          {
            title:
              "Client Appreciation",
            value:
              "Client Appreciation",
          },
          {
            title:
              "Association Appreciation",
            value:
              "Association Appreciation",
          },
          {
            title:
              "Media Recognition",
            value:
              "Media Recognition",
          },
          {
            title: "Other",
            value: "Other",
          },
        ],
        layout: "dropdown",
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Recognition category is required.",
          ),
    }),

    defineField({
      name: "location",
      title: "Award Location",
      type: "string",
      group: "basic",

      description:
        "Optional city, venue or event location.",

      validation: (rule) =>
        rule
          .max(180)
          .warning(
            "Keep the location below 180 characters.",
          ),
    }),

    defineField({
      name: "shortDescription",
      title: "Award Description",
      type: "text",
      rows: 6,
      group: "content",

      validation: (rule) =>
        rule
          .required()
          .max(1000)
          .error(
            "Award description is required and must remain below 1000 characters.",
          ),
    }),

    defineField({
      name: "highlights",
      title: "Recognition Highlights",
      type: "array",
      group: "content",

      of: [
        defineArrayMember({
          type: "string",

          validation: (rule) =>
            rule
              .max(180)
              .warning(
                "Keep each highlight below 180 characters.",
              ),
        }),
      ],

      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "mainImage",
      title: "Main Award Image",
      type: "image",
      group: "media",

      description:
        "Primary photograph displayed on the Awards & Recognition page.",

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",

          validation: (rule) =>
            rule
              .required()
              .max(180)
              .error(
                "Alternative text is required for the main award image.",
              ),
        }),

        defineField({
          name: "caption",
          title: "Image Caption",
          type: "string",

          validation: (rule) =>
            rule
              .max(250)
              .warning(
                "Keep the image caption below 250 characters.",
              ),
        }),
      ],

      validation: (rule) =>
        rule
          .required()
          .error(
            "Main award image is required.",
          ),
    }),

    defineField({
      name: "certificateImage",
      title: "Certificate / Trophy Image",
      type: "image",
      group: "media",

      description:
        "Optional certificate, trophy or recognition document image.",

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",

          validation: (rule) =>
            rule
              .max(180)
              .warning(
                "Keep alternative text below 180 characters.",
              ),
        }),

        defineField({
          name: "caption",
          title: "Image Caption",
          type: "string",

          validation: (rule) =>
            rule
              .max(250)
              .warning(
                "Keep the caption below 250 characters.",
              ),
        }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Award Ceremony Gallery",
      type: "array",
      group: "media",

      description:
        "Use Upload Multiple Images to add several award ceremony photographs together.",

      components: {
        input: BulkImageArrayInput,
      },

      of: [
        defineArrayMember({
          name: "awardGalleryImage",
          title: "Award Gallery Image",
          type: "image",

          options: {
            hotspot: true,
          },

          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",

              description:
                "Optional. The award title will be used automatically when this field is empty.",

              validation: (rule) =>
                rule
                  .max(180)
                  .warning(
                    "Keep alternative text below 180 characters.",
                  ),
            }),

            defineField({
              name: "caption",
              title: "Image Caption",
              type: "string",

              validation: (rule) =>
                rule
                  .max(250)
                  .warning(
                    "Keep the image caption below 250 characters.",
                  ),
            }),
          ],
        }),
      ],

      options: {
        sortable: true,
      },

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "For website performance, keep the gallery below 100 images.",
          ),
    }),

    defineField({
      name: "featured",
      title: "Featured Award",
      type: "boolean",
      group: "settings",
      initialValue: true,

      description:
        "Featured awards appear in the main awards showcase.",
    }),

    defineField({
      name: "active",
      title: "Show on Website",
      type: "boolean",
      group: "settings",
      initialValue: true,

      description:
        "Turn this off to hide the award without deleting it.",
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "settings",

      description:
        "Lower numbers appear before higher numbers.",

      validation: (rule) =>
        rule
          .integer()
          .min(0)
          .warning(
            "Display order should be zero or a positive number.",
          ),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      group: "settings",

      initialValue: () =>
        new Date().toISOString(),
    }),
  ],

  orderings: [
    {
      title:
        "Award Date – Newest First",
      name: "awardDateDesc",

      by: [
        {
          field: "awardDate",
          direction: "desc",
        },
      ],
    },

    {
      title: "Display Order",
      name: "displayOrderAsc",

      by: [
        {
          field: "displayOrder",
          direction: "asc",
        },
      ],
    },

    {
      title: "Award ID",
      name: "awardIdAsc",

      by: [
        {
          field: "awardId",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      awardId: "awardId",
      organization: "organization",
      year: "yearLabel",
      category: "category",
      active: "active",
      media: "mainImage",
    },

    prepare({
      title,
      awardId,
      organization,
      year,
      category,
      active,
      media,
    }) {
      const details = [
        awardId,
        year,
        organization,
        category,
        active === false
          ? "Hidden"
          : undefined,
      ].filter(Boolean);

      return {
        title:
          title ||
          "Untitled Award",

        subtitle:
          details.join(" • "),

        media,
      };
    },
  },
});