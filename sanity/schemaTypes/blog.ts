import {
  defineField,
  defineType,
} from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "media",
      title: "Media",
    },
    {
      name: "organization",
      title: "Organization",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "newsletter",
      title: "Newsletter",
    },
  ],

  fields: [
    /* =====================================================
       CONTENT
    ===================================================== */

    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
      group: "content",
      description:
        "Main article title displayed on the blog page and article detail page.",

      validation: (rule) =>
        rule
          .required()
          .min(10)
          .max(120)
          .error(
            "Blog title is required and must be between 10 and 120 characters.",
          ),
    }),

    defineField({
      name: "slug",
      title: "Blog Slug",
      type: "slug",
      group: "content",
      description:
        "This will be used in the article URL. Preserve existing slugs during migration.",

      options: {
        source: "title",
        maxLength: 96,
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Blog slug is required.",
          ),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 4,
      group: "content",
      description:
        "Used in blog cards, the article overview box and search results.",

      validation: (rule) =>
        rule
          .required()
          .max(300)
          .error(
            "Short description is required and must remain within 300 characters.",
          ),
    }),

    defineField({
      name: "content",
      title: "Article Content",
      type: "blockContent",
      group: "content",
      description:
        "Write the complete article here using headings, paragraphs, lists, links, images and section dividers.",
    }),

    defineField({
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      group: "content",
      description:
        "Add structured questions and answers for the article. These can be displayed as an FAQ section and used for FAQ structured data.",

      of: [
        {
          type: "faqItem",
        },
      ],

      validation: (rule) =>
        rule
          .unique()
          .max(20)
          .warning(
            "Avoid adding more than 20 FAQs to one article.",
          ),
    }),

    /* =====================================================
       MEDIA
    ===================================================== */

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "media",
      description:
        "Main thumbnail and hero image used across the blog listing and article page.",

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
              .error(
                "Featured image alternative text is required.",
              ),
        }),

        defineField({
          name: "caption",
          title: "Image Caption",
          type: "string",
        }),
      ],
    }),

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    defineField({
      name: "category",
      title: "Blog Category",
      type: "reference",
      group: "organization",

      to: [
        {
          type: "category",
        },
      ],

      options: {
        filter:
          "isActive != false",
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Select a blog category.",
          ),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "organization",

      to: [
        {
          type: "author",
        },
      ],

      validation: (rule) =>
        rule
          .required()
          .error(
            "Select an article author.",
          ),
    }),

    defineField({
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      group: "organization",
      description:
        "Public article date displayed on the website.",

      initialValue: () =>
        new Date().toISOString(),

      validation: (rule) =>
        rule
          .required()
          .error(
            "Publish date is required.",
          ),
    }),

    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "number",
      group: "organization",
      description:
        "Enter the estimated reading time in minutes, for example 6.",

      validation: (rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .max(120)
          .error(
            "Enter reading time between 1 and 120 minutes.",
          ),
    }),

    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      group: "organization",
      description:
        "Enable this to make the article eligible for the featured article section.",

      initialValue: false,
    }),

    defineField({
      name: "tags",
      title: "Article Tags",
      type: "array",
      group: "organization",
      description:
        "Used for related topics, website search and internal content organization.",

      of: [
        {
          type: "string",
        },
      ],

      options: {
        layout: "tags",
      },

      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(30)
          .error(
            "Add between 1 and 30 article tags.",
          ),
    }),

    defineField({
      name: "relatedArticles",
      title:
        "Manually Selected Related Articles",
      type: "array",
      group: "organization",
      description:
        "Optional. Leave blank to automatically select related articles by category.",

      of: [
        {
          type: "reference",

          to: [
            {
              type: "blog",
            },
          ],

          options: {
            disableNew: true,
          },
        },
      ],

      validation: (rule) =>
        rule
          .unique()
          .max(3)
          .warning(
            "Select a maximum of 3 related articles.",
          ),
    }),

    /* =====================================================
       SEO
    ===================================================== */

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description:
        "Search-engine title. Leave blank to use the blog title.",

      validation: (rule) =>
        rule
          .max(60)
          .warning(
            "SEO titles are usually best kept within 60 characters.",
          ),
    }),

    defineField({
      name: "seoDescription",
      title:
        "SEO Meta Description",
      type: "text",
      rows: 3,
      group: "seo",
      description:
        "Search-result description. Leave blank to use the short description.",

      validation: (rule) =>
        rule
          .max(160)
          .warning(
            "Meta descriptions are usually best kept within 160 characters.",
          ),
    }),

    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      group: "seo",
      description:
        "Preserve the keywords currently defined in data/blogs.ts.",

      of: [
        {
          type: "string",
        },
      ],

      options: {
        layout: "tags",
      },

      validation: (rule) =>
        rule
          .unique()
          .max(40)
          .warning(
            "Avoid adding more than 40 SEO keywords.",
          ),
    }),

    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "seo",
      description:
        "Optional. Leave blank when the article canonical URL is its own website URL.",

      validation: (rule) =>
        rule.uri({
          scheme: [
            "http",
            "https",
          ],
        }),
    }),

    defineField({
      name: "openGraphImage",
      title:
        "Social Sharing Image",
      type: "image",
      group: "seo",
      description:
        "Optional custom image for LinkedIn, Facebook and other social platforms. The featured image will be used when left blank.",

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title:
            "Alternative Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "noIndex",
      title:
        "Hide from Search Engines",
      type: "boolean",
      group: "seo",
      description:
        "Keep disabled for normal public articles. Enable only when the article should not be indexed.",

      initialValue: false,
    }),

    /* =====================================================
       NEWSLETTER
    ===================================================== */

    defineField({
      name:
        "sendNewsletterNotification",
      title:
        "Send Newsletter Notification",
      type: "boolean",
      group: "newsletter",
      description:
        "Enable this only when this article should be announced to Steelbuild Insights subscribers.",

      initialValue: false,
    }),

    defineField({
      name: "newsletterTitle",
      title: "Newsletter Title",
      type: "string",
      group: "newsletter",
      description:
        "Optional custom email heading. If empty, the blog title will be used.",

      validation: (rule) =>
        rule
          .max(120)
          .warning(
            "Keep the newsletter title within 120 characters.",
          ),
    }),

    defineField({
      name: "newsletterSummary",
      title:
        "Newsletter Summary",
      type: "text",
      rows: 4,
      group: "newsletter",
      description:
        "Optional short summary for the newsletter email. If empty, the article short description will be used.",

      validation: (rule) =>
        rule
          .max(400)
          .warning(
            "Keep the newsletter summary within 400 characters.",
          ),
    }),

    defineField({
      name:
        "newsletterNotificationSent",
      title:
        "Newsletter Notification Sent",
      type: "boolean",
      group: "newsletter",
      initialValue: false,
      readOnly: true,
      description:
        "Automatically marked after the blog announcement email has been successfully delivered to all eligible subscribers.",
    }),

    defineField({
      name:
        "newsletterNotificationSentAt",
      title:
        "Newsletter Notification Sent At",
      type: "datetime",
      group: "newsletter",
      readOnly: true,
    }),
  ],

  /* =======================================================
     PREVIEW
  ======================================================= */

  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      category:
        "category.title",
      publishedAt:
        "publishedAt",
      featured:
        "featured",
    },

    prepare({
      title,
      media,
      category,
      publishedAt,
      featured,
    }) {
      const formattedDate =
        publishedAt
          ? new Intl.DateTimeFormat(
              "en-IN",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              },
            ).format(
              new Date(
                publishedAt,
              ),
            )
          : "No publish date";

      return {
        title:
          title ||
          "Untitled Blog",

        media,

        subtitle: [
          featured
            ? "Featured"
            : null,

          category ||
            "No category",

          formattedDate,
        ]
          .filter(Boolean)
          .join(" • "),
      };
    },
  },

  /* =======================================================
     ORDERING
  ======================================================= */

  orderings: [
    {
      title:
        "Publish Date, Newest First",

      name:
        "publishedAtDesc",

      by: [
        {
          field:
            "publishedAt",

          direction:
            "desc",
        },
      ],
    },

    {
      title:
        "Blog Title A–Z",

      name: "titleAsc",

      by: [
        {
          field: "title",

          direction:
            "asc",
        },
      ],
    },
  ],
});