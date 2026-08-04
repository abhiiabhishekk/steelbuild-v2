import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

import BulkImageArrayInput from "../components/BulkImageArrayInput";

export const exhibitionType = defineType({
  name: "exhibition",
  title: "Exhibition",
  type: "document",

  groups: [
    {
      name: "basic",
      title: "Basic Information",
      default: true,
    },
    {
      name: "media",
      title: "Images & Video",
    },
    {
      name: "content",
      title: "Exhibition Content",
    },
    {
      name: "settings",
      title: "Publishing Settings",
    },
  ],

  fields: [
    defineField({
      name: "exhibitionId",
      title: "Exhibition ID",
      type: "string",
      group: "basic",

      description:
        "Internal reference, for example EXH-001.",

      validation: (rule) =>
        rule
          .required()
          .regex(/^EXH-\d{3,}$/, {
            name: "exhibition reference",
          })
          .error(
            "Exhibition ID must use the format EXH-001.",
          ),
    }),

    defineField({
      name: "title",
      title: "Exhibition Name",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(180)
          .error(
            "Exhibition name is required.",
          ),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",

      options: {
        source: "title",
        maxLength: 140,
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Exhibition slug is required.",
          ),
    }),

    defineField({
      name: "status",
      title: "Event Status",
      type: "string",
      group: "basic",
      initialValue: "completed",

      options: {
        list: [
          {
            title: "Upcoming",
            value: "upcoming",
          },
          {
            title: "Ongoing",
            value: "ongoing",
          },
          {
            title: "Completed",
            value: "completed",
          },
        ],
        layout: "radio",
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Event status is required.",
          ),
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .error(
            "Exhibition start date is required.",
          ),
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      group: "basic",

      description:
        "Leave blank for a single-day event.",

      validation: (rule) =>
        rule.custom(
          (
            endDate:
              | string
              | undefined,
            context,
          ) => {
            const startDate =
              context.document
                ?.startDate;

            if (
              endDate &&
              typeof startDate ===
                "string" &&
              endDate < startDate
            ) {
              return "End date cannot be earlier than start date.";
            }

            return true;
          },
        ),
    }),

    defineField({
      name: "dateLabel",
      title: "Display Date",
      type: "string",
      group: "basic",

      description:
        "Example: 25–27 June 2026",

      validation: (rule) =>
        rule
          .required()
          .max(100)
          .error(
            "Display date is required.",
          ),
    }),

    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      group: "basic",

      description:
        "Example: Yashobhoomi, IICC",

      validation: (rule) =>
        rule
          .required()
          .max(180)
          .error(
            "Exhibition venue is required.",
          ),
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .max(100)
          .error(
            "City is required.",
          ),
    }),

    defineField({
      name: "state",
      title: "State",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "Keep the state name below 100 characters.",
          ),
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
      group: "basic",
      initialValue: "India",

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "Keep the country name below 100 characters.",
          ),
    }),

    defineField({
      name: "hallNumber",
      title: "Hall Number",
      type: "string",
      group: "basic",

      description:
        "Example: Hall 1",

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "Keep the hall information below 100 characters.",
          ),
    }),

    defineField({
      name: "stallNumber",
      title: "Stall Number",
      type: "string",
      group: "basic",

      description:
        "Example: Stall A-49",

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "Keep the stall information below 100 characters.",
          ),
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 5,
      group: "content",

      validation: (rule) =>
        rule
          .required()
          .max(700)
          .error(
            "Short description is required and must remain below 700 characters.",
          ),
    }),

    defineField({
      name: "highlights",
      title: "Exhibition Highlights",
      type: "array",
      group: "content",

      description:
        "Add key exhibition highlights, activities or achievements.",

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
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "media",

      description:
        "Main image used to represent this exhibition.",

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",

          description:
            "Describe the image for accessibility and search engines.",

          validation: (rule) =>
            rule
              .required()
              .max(180)
              .error(
                "Alternative text is required for the cover image.",
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
            "Cover image is required.",
          ),
    }),

    defineField({
      name: "gallery",
      title: "Exhibition Gallery",
      type: "array",
      group: "media",

      description:
        "Use the Upload Multiple Images button below the gallery to upload several exhibition photographs together.",

      components: {
        input:
          BulkImageArrayInput,
      },

      of: [
        defineArrayMember({
          name: "exhibitionGalleryImage",
          title: "Gallery Image",
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
                "Optional. If empty, the website will automatically use the exhibition title as alternative text.",

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

              description:
                "Optional caption displayed with the enlarged gallery image.",

              validation: (rule) =>
                rule
                  .max(250)
                  .warning(
                    "Keep the image caption below 250 characters.",
                  ),
            }),
          ],

          preview: {
            select: {
              media: "asset",
              alt: "alt",
              caption:
                "caption",
            },

            prepare({
              media,
              alt,
              caption,
            }) {
              return {
                title:
                  alt ||
                  caption ||
                  "Exhibition Gallery Image",

                subtitle:
                  caption ||
                  (alt
                    ? "Gallery image"
                    : "Automatic alternative text will be used"),

                media,
              };
            },
          },
        }),
      ],

      options: {
        sortable: true,
      },

      validation: (rule) =>
        rule
          .min(1)
          .error(
            "Add at least one exhibition gallery image.",
          )
          .max(100)
          .warning(
            "For website performance, keep one exhibition gallery below 100 images.",
          ),
    }),

    defineField({
      name: "youtubeVideoId",
      title: "YouTube Video ID",
      type: "string",
      group: "media",

      description:
        "Enter only the YouTube video ID, for example BKX8oNpTSZ8. Do not enter the complete YouTube URL.",

      validation: (rule) =>
        rule
          .max(50)
          .warning(
            "Please check that only the YouTube video ID has been entered.",
          ),
    }),

    defineField({
      name: "eventWebsiteUrl",
      title: "Exhibition Website URL",
      type: "url",
      group: "content",

      description:
        "Optional official website or event information URL.",

      validation: (rule) =>
        rule.uri({
          scheme: [
            "http",
            "https",
          ],
        }),
    }),

    defineField({
      name: "featured",
      title: "Featured Exhibition",
      type: "boolean",
      group: "settings",
      initialValue: false,

      description:
        "Enable this to highlight the exhibition in featured sections.",
    }),

    defineField({
      name: "active",
      title: "Show on Website",
      type: "boolean",
      group: "settings",
      initialValue: true,

      description:
        "Turn this off to hide the exhibition without deleting its record.",
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
        "Event Date – Newest First",

      name: "startDateDesc",

      by: [
        {
          field: "startDate",
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
      title: "Exhibition ID",

      name: "exhibitionIdAsc",

      by: [
        {
          field: "exhibitionId",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",

      exhibitionId:
        "exhibitionId",

      status: "status",

      dateLabel:
        "dateLabel",

      city: "city",

      active: "active",

      media: "coverImage",
    },

    prepare({
      title,
      exhibitionId,
      status,
      dateLabel,
      city,
      active,
      media,
    }) {
      const details = [
        exhibitionId,

        status
          ? status
              .charAt(0)
              .toUpperCase() +
            status.slice(1)
          : undefined,

        active === false
          ? "Hidden"
          : undefined,

        dateLabel,

        city,
      ].filter(Boolean);

      return {
        title:
          title ||
          "Untitled Exhibition",

        subtitle:
          details.join(" • "),

        media,
      };
    },
  },
});