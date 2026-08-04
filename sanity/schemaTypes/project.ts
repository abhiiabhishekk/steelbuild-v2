import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",

  groups: [
    {
      name: "basic",
      title: "Basic Information",
      default: true,
    },
    {
      name: "media",
      title: "Images & Gallery",
    },
    {
      name: "content",
      title: "Project Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Publishing Settings",
    },
  ],

  fields: [
    defineField({
      name: "projectId",
      title: "Project ID",
      type: "string",
      group: "basic",
      description:
        "Internal three-digit project number, for example 001.",
      validation: (rule) =>
        rule
          .required()
          .regex(/^\d{3}$/, {
            name: "three-digit project ID",
          })
          .error(
            "Project ID must contain exactly three digits, for example 001.",
          ),
    }),

    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      group: "basic",
      validation: (rule) =>
        rule
          .required()
          .min(2)
          .error("Project name is required."),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",

      options: {
        source: "name",
        maxLength: 120,
      },

      validation: (rule) =>
        rule
          .required()
          .error("Project slug is required."),
    }),

    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      group: "basic",
      description:
        "Official client or company name.",
    }),

    defineField({
      name: "category",
      title: "Project Category",
      type: "string",
      group: "basic",

      options: {
        list: [
          {
            title: "Industrial",
            value: "Industrial",
          },
          {
            title: "Warehouse",
            value: "Warehouse",
          },
          {
            title: "Factory",
            value: "Factory",
          },
          {
            title: "Food Processing",
            value: "Food Processing",
          },
          {
            title: "Logistics",
            value: "Logistics",
          },
          {
            title: "Infrastructure",
            value: "Infrastructure",
          },
        ],
        layout: "dropdown",
      },

      validation: (rule) =>
        rule
          .required()
          .error("Project category is required."),
    }),

    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      group: "basic",
      initialValue: "Completed",

      options: {
        list: [
          {
            title: "Completed",
            value: "Completed",
          },
          {
            title: "Ongoing",
            value: "Ongoing",
          },
          {
            title: "Upcoming",
            value: "Upcoming",
          },
        ],
        layout: "radio",
      },

      validation: (rule) =>
        rule
          .required()
          .error("Project status is required."),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .error("Project location is required."),
    }),

    defineField({
      name: "area",
      title: "Project Area",
      type: "string",
      group: "basic",
      description:
        "Example: 450000 Sq. ft.",

      validation: (rule) =>
        rule
          .required()
          .error("Project area is required."),
    }),

    defineField({
      name: "tonnage",
      title: "Project Tonnage",
      type: "string",
      group: "basic",
      description: "Example: 2115 MT",

      validation: (rule) =>
        rule
          .required()
          .error("Project tonnage is required."),
    }),

    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
      group: "basic",
      description:
        "Optional date on which the project was completed.",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "media",

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
              .error(
                "Alternative text is required.",
              ),
        }),

        defineField({
          name: "caption",
          title: "Image Caption",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      group: "media",

      of: [
        defineArrayMember({
          name: "projectGalleryImage",
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

              validation: (rule) =>
                rule
                  .required()
                  .error(
                    "Alternative text is required.",
                  ),
            }),

            defineField({
              name: "caption",
              title: "Image Caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 4,
      group: "content",
      description:
        "Used on project cards, overview sections and search results.",

      validation: (rule) =>
        rule.max(400).warning(
          "Keep the short description below 400 characters.",
        ),
    }),

    defineField({
      name: "description",
      title: "Full Project Description",
      type: "blockContent",
      group: "content",
      description:
        "Add the complete project case study, execution details and engineering highlights.",
    }),

    defineField({
      name: "projectHighlights",
      title: "Project Highlights",
      type: "array",
      group: "content",

      of: [
        defineArrayMember({
          type: "string",
        }),
      ],

      description:
        "Add important project achievements or execution highlights.",
    }),

    defineField({
      name: "scopeOfWork",
      title: "Scope of Work",
      type: "array",
      group: "content",

      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      group: "settings",
      initialValue: false,
      description:
        "Show this project in featured project sections.",
    }),

    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      group: "settings",
      initialValue: true,
      description:
        "Inactive projects will not appear on the website.",
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

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",

      validation: (rule) =>
        rule.max(70).warning(
          "SEO titles generally perform best below 70 characters.",
        ),
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 4,
      group: "seo",

      validation: (rule) =>
        rule.max(170).warning(
          "SEO descriptions generally perform best below 170 characters.",
        ),
    }),

    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      group: "seo",

      of: [
        defineArrayMember({
          type: "string",
        }),
      ],

      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "ogImage",
      title: "Social Sharing Image",
      type: "image",
      group: "seo",
      description:
        "Optional Open Graph image. The cover image will be used when this field is empty.",

      options: {
        hotspot: true,
      },
    }),
  ],

  orderings: [
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
      title: "Newest First",
      name: "publishedAtDesc",

      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
      ],
    },

    {
      title: "Project ID",
      name: "projectIdAsc",

      by: [
        {
          field: "projectId",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "name",
      projectId: "projectId",
      category: "category",
      location: "location",
      status: "status",
      media: "coverImage",
    },

    prepare({
      title,
      projectId,
      category,
      location,
      status,
      media,
    }) {
      const details = [
        projectId
          ? `#${projectId}`
          : undefined,
        status,
        category,
        location,
      ].filter(Boolean);

      return {
        title:
          title || "Untitled Project",
        subtitle: details.join(" • "),
        media,
      };
    },
  },
});