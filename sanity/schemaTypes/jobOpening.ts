import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export const jobOpeningType = defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",

  groups: [
    {
      name: "basic",
      title: "Job Information",
      default: true,
    },
    {
      name: "requirements",
      title: "Requirements",
    },
    {
      name: "settings",
      title: "Publishing Settings",
    },
  ],

  fields: [
    defineField({
      name: "jobId",
      title: "Job ID",
      type: "string",
      group: "basic",
      description:
        "Unique internal reference, for example JOB-001.",

      validation: (rule) =>
        rule
          .required()
          .regex(/^JOB-\d{3,}$/, {
            name: "job reference",
          })
          .error(
            "Job ID must use the format JOB-001.",
          ),
    }),

    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(160)
          .error("Job title is required."),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",

      options: {
        source: "title",
        maxLength: 120,
      },

      validation: (rule) =>
        rule
          .required()
          .error("Job slug is required."),
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
      group: "basic",

      options: {
        list: [
          {
            title: "Design & Engineering",
            value: "Design & Engineering",
          },
          {
            title: "Design & Detailing",
            value: "Design & Detailing",
          },
          {
            title: "Manufacturing",
            value: "Manufacturing",
          },
          {
            title: "Quality Assurance",
            value: "Quality Assurance",
          },
          {
            title: "Project Execution",
            value: "Project Execution",
          },
          {
            title: "Sales & Marketing",
            value: "Sales & Marketing",
          },
          {
            title: "Commercial",
            value: "Commercial",
          },
          {
            title: "Finance & Accounts",
            value: "Finance & Accounts",
          },
          {
            title: "Human Resources",
            value: "Human Resources",
          },
          {
            title: "Information Technology",
            value: "Information Technology",
          },
          {
            title: "Corporate Functions",
            value: "Corporate Functions",
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
          .error("Department is required."),
    }),

    defineField({
      name: "location",
      title: "Job Location",
      type: "string",
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .max(160)
          .error("Job location is required."),
    }),

    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      group: "basic",
      initialValue: "Full-Time",

      options: {
        list: [
          {
            title: "Full-Time",
            value: "Full-Time",
          },
          {
            title: "Part-Time",
            value: "Part-Time",
          },
          {
            title: "Contract",
            value: "Contract",
          },
          {
            title: "Internship",
            value: "Internship",
          },
          {
            title: "Trainee",
            value: "Trainee",
          },
        ],
        layout: "dropdown",
      },

      validation: (rule) =>
        rule
          .required()
          .error("Employment type is required."),
    }),

    defineField({
      name: "experience",
      title: "Experience Required",
      type: "string",
      group: "basic",
      description:
        "Example: 3–6 Years or Fresher.",

      validation: (rule) =>
        rule
          .required()
          .max(100)
          .error(
            "Experience requirement is required.",
          ),
    }),

    defineField({
      name: "description",
      title: "Short Job Description",
      type: "text",
      rows: 5,
      group: "basic",

      validation: (rule) =>
        rule
          .required()
          .max(600)
          .error(
            "Job description is required and should remain below 600 characters.",
          ),
    }),

    defineField({
      name: "skills",
      title: "Preferred Skills",
      type: "array",
      group: "requirements",

      of: [
        defineArrayMember({
          type: "string",
        }),
      ],

      options: {
        layout: "tags",
      },

      validation: (rule) =>
        rule
          .min(1)
          .error(
            "Add at least one preferred skill.",
          ),
    }),

    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      group: "requirements",

      of: [
        defineArrayMember({
          type: "string",
        }),
      ],

      description:
        "Optional detailed responsibilities for internal reference or future job detail pages.",
    }),

    defineField({
      name: "qualification",
      title: "Preferred Qualification",
      type: "string",
      group: "requirements",
    }),

    defineField({
      name: "status",
      title: "Opening Status",
      type: "string",
      group: "settings",
      initialValue: "Open",

      options: {
        list: [
          {
            title: "Open",
            value: "Open",
          },
          {
            title: "Closed",
            value: "Closed",
          },
        ],
        layout: "radio",
      },

      validation: (rule) =>
        rule
          .required()
          .error("Opening status is required."),
    }),

    defineField({
      name: "active",
      title: "Show on Website",
      type: "boolean",
      group: "settings",
      initialValue: true,
      description:
        "Turn this off to hide the opening without deleting it.",
    }),

    defineField({
      name: "featured",
      title: "Featured Opening",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "settings",
      description:
        "Lower numbers appear first.",

      validation: (rule) =>
        rule
          .integer()
          .min(0)
          .warning(
            "Display order should be zero or a positive number.",
          ),
    }),

    defineField({
      name: "postedAt",
      title: "Posted Date",
      type: "datetime",
      group: "settings",
      initialValue: () =>
        new Date().toISOString(),
    }),

    defineField({
      name: "closingDate",
      title: "Application Closing Date",
      type: "date",
      group: "settings",
      description:
        "Optional. The opening can also be closed manually using Opening Status.",
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
      name: "postedAtDesc",

      by: [
        {
          field: "postedAt",
          direction: "desc",
        },
      ],
    },

    {
      title: "Job ID",
      name: "jobIdAsc",

      by: [
        {
          field: "jobId",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      jobId: "jobId",
      department: "department",
      location: "location",
      status: "status",
      active: "active",
    },

    prepare({
      title,
      jobId,
      department,
      location,
      status,
      active,
    }) {
      const details = [
        jobId,
        status,
        active === false
          ? "Hidden"
          : undefined,
        department,
        location,
      ].filter(Boolean);

      return {
        title:
          title || "Untitled Job Opening",
        subtitle: details.join(" • "),
      };
    },
  },
});