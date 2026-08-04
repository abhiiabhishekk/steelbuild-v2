import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export const leadershipMemberType =
  defineType({
    name: "leadershipMember",
    title: "Leadership Member",
    type: "document",

    groups: [
      {
        name: "basic",
        title: "Basic Information",
        default: true,
      },
      {
        name: "media",
        title: "Profile Image",
      },
      {
        name: "message",
        title: "Leadership Message",
      },
      {
        name: "settings",
        title: "Publishing Settings",
      },
    ],

    fields: [
      defineField({
        name: "leaderId",
        title: "Leader ID",
        type: "string",
        group: "basic",

        description:
          "Internal reference, for example LDR-001.",

        validation: (rule) =>
          rule
            .required()
            .regex(/^LDR-\d{3,}$/, {
              name: "leadership reference",
            })
            .error(
              "Leader ID must use the format LDR-001.",
            ),
      }),

      defineField({
        name: "name",
        title: "Full Name",
        type: "string",
        group: "basic",

        description:
          "Example: Mr. Varun Arora",

        validation: (rule) =>
          rule
            .required()
            .min(2)
            .max(120)
            .error(
              "Leadership member name is required.",
            ),
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
            .error(
              "Leadership member slug is required.",
            ),
      }),

      defineField({
        name: "designation",
        title: "Designation",
        type: "string",
        group: "basic",

        validation: (rule) =>
          rule
            .required()
            .max(150)
            .error(
              "Designation is required.",
            ),
      }),

      defineField({
        name: "shortDescription",
        title: "Leadership Introduction",
        type: "text",
        rows: 5,
        group: "basic",

        validation: (rule) =>
          rule
            .required()
            .max(900)
            .error(
              "Leadership introduction is required and must remain below 900 characters.",
            ),
      }),

      defineField({
        name: "strengths",
        title: "Leadership Strengths",
        type: "array",
        group: "basic",

        of: [
          defineArrayMember({
            type: "string",

            validation: (rule) =>
              rule
                .max(150)
                .warning(
                  "Keep each leadership strength below 150 characters.",
                ),
          }),
        ],

        options: {
          layout: "tags",
        },

        validation: (rule) =>
          rule
            .min(1)
            .error(
              "Add at least one leadership strength.",
            ),
      }),

      defineField({
        name: "profileImage",
        title: "Profile Image",
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
                .max(180)
                .error(
                  "Alternative text is required.",
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

        validation: (rule) =>
          rule
            .required()
            .error(
              "Leadership profile image is required.",
            ),
      }),

      defineField({
        name: "imagePosition",
        title: "Image Position",
        type: "string",
        group: "media",
        initialValue: "50% 28%",

        description:
          "CSS object position. Example: 50% 28%.",

        validation: (rule) =>
          rule
            .required()
            .max(50)
            .error(
              "Image position is required.",
            ),
      }),

      defineField({
        name: "messageEyebrow",
        title: "Message Eyebrow",
        type: "string",
        group: "message",

        description:
          "Example: Vision, Trust and Customer Commitment",

        validation: (rule) =>
          rule
            .required()
            .max(180)
            .error(
              "Message eyebrow is required.",
            ),
      }),

      defineField({
        name: "quote",
        title: "Leadership Quote",
        type: "text",
        rows: 3,
        group: "message",

        validation: (rule) =>
          rule
            .required()
            .max(400)
            .error(
              "Leadership quote is required.",
            ),
      }),

      defineField({
        name: "message",
        title: "Director Message",
        type: "array",
        group: "message",

        description:
          "Add every paragraph as a separate item.",

        of: [
          defineArrayMember({
            name: "messageParagraph",
            title: "Message Paragraph",
            type: "text",
            rows: 5,

            validation: (rule) =>
              rule
                .required()
                .max(1800)
                .error(
                  "Message paragraph cannot be empty.",
                ),
          }),
        ],

        validation: (rule) =>
          rule
            .required()
            .min(1)
            .error(
              "Add at least one message paragraph.",
            ),
      }),

      defineField({
        name: "signatureName",
        title: "Signature Name",
        type: "string",
        group: "message",

        description:
          "Example: Varun Arora",

        validation: (rule) =>
          rule
            .required()
            .max(120)
            .error(
              "Signature name is required.",
            ),
      }),

      defineField({
        name: "linkedin",
        title: "LinkedIn URL",
        type: "url",
        group: "basic",

        validation: (rule) =>
          rule.uri({
            scheme: ["http", "https"],
          }),
      }),

      defineField({
        name: "active",
        title: "Show on Website",
        type: "boolean",
        group: "settings",
        initialValue: true,

        description:
          "Turn this off to hide the leadership member without deleting the record.",
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
            .required()
            .integer()
            .min(0)
            .error(
              "Display order must be zero or a positive number.",
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
        title: "Name",
        name: "nameAsc",

        by: [
          {
            field: "name",
            direction: "asc",
          },
        ],
      },

      {
        title: "Leader ID",
        name: "leaderIdAsc",

        by: [
          {
            field: "leaderId",
            direction: "asc",
          },
        ],
      },
    ],

    preview: {
      select: {
        title: "name",
        leaderId: "leaderId",
        designation: "designation",
        active: "active",
        media: "profileImage",
      },

      prepare({
        title,
        leaderId,
        designation,
        active,
        media,
      }) {
        const details = [
          leaderId,
          designation,
          active === false
            ? "Hidden"
            : undefined,
        ].filter(Boolean);

        return {
          title:
            title ||
            "Untitled Leadership Member",

          subtitle:
            details.join(" • "),

          media,
        };
      },
    },
  });