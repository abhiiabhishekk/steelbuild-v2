import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

const DEPARTMENTS = [
  {
    title: "Projects Department",
    value: "projects",
  },
  {
    title: "Design & Detailing Department",
    value: "design",
  },
  {
    title: "Customer Service Department",
    value: "csd",
  },
  {
    title: "Sales & Marketing Department",
    value: "sales",
  },
  {
    title: "Production & Dispatch Department",
    value: "production-dispatch",
  },
  {
    title: "Quality Assurance Department",
    value: "quality",
  },
  {
    title: "Safety Department",
    value: "safety",
  },
  {
    title: "Accounts & Finance",
    value: "accounts",
  },
  {
    title: "Corporate Affairs",
    value: "corporate-affairs",
  },
];

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",

  groups: [
    {
      name: "basic",
      title: "Basic Information",
      default: true,
    },
    {
      name: "profile",
      title: "Profile Details",
    },
    {
      name: "contact",
      title: "Contact & Links",
    },
    {
      name: "settings",
      title: "Publishing Settings",
    },
  ],

  fields: [
    defineField({
      name: "employeeId",
      title: "Employee ID",
      type: "string",
      group: "basic",

      description:
        "Internal website reference, for example EMP-001.",

      validation: (rule) =>
        rule
          .required()
          .regex(/^EMP-\d{3,}$/, {
            name: "employee reference",
          })
          .error(
            "Employee ID must use the format EMP-001.",
          ),
    }),

    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      group: "basic",

      description:
        "Example: Mr. Deepak Kumar Singh",

      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(120)
          .error(
            "Team member name is required.",
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
            "Team member slug is required.",
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
          .min(2)
          .max(150)
          .error(
            "Designation is required.",
          ),
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
      group: "basic",

      options: {
        list: DEPARTMENTS,
        layout: "dropdown",
      },

      validation: (rule) =>
        rule
          .required()
          .error(
            "Department is required.",
          ),
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      group: "profile",

      description:
        "Upload a professional portrait. If empty, initials will appear on the website.",

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
      ],
    }),

    defineField({
      name: "bio",
      title: "Short Professional Introduction",
      type: "text",
      rows: 5,
      group: "profile",

      validation: (rule) =>
        rule
          .max(700)
          .warning(
            "Keep the introduction below 700 characters.",
          ),
    }),

    defineField({
      name: "experience",
      title: "Professional Experience",
      type: "string",
      group: "profile",

      description:
        "Example: 18+ Years",

      validation: (rule) =>
        rule
          .max(100)
          .warning(
            "Keep experience information below 100 characters.",
          ),
    }),

    defineField({
      name: "qualification",
      title: "Qualification",
      type: "string",
      group: "profile",

      validation: (rule) =>
        rule
          .max(180)
          .warning(
            "Keep qualification below 180 characters.",
          ),
    }),

    defineField({
      name: "skills",
      title: "Professional Strengths",
      type: "array",
      group: "profile",

      of: [
        defineArrayMember({
          type: "string",

          validation: (rule) =>
            rule
              .max(150)
              .warning(
                "Keep each strength below 150 characters.",
              ),
        }),
      ],

      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",

      description:
        "Optional. Add only when it should be publicly visible.",

      validation: (rule) =>
        rule.email().warning(
          "Please enter a valid email address.",
        ),
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      group: "contact",

      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "joiningDate",
      title: "Joining Date",
      type: "date",
      group: "settings",

      description:
        "Optional internal reference.",
    }),

    defineField({
      name: "departmentHead",
      title: "Department Head",
      type: "boolean",
      group: "settings",
      initialValue: false,

      description:
        "Department heads appear before other team members.",
    }),

    defineField({
      name: "featured",
      title: "Featured Team Member",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),

    defineField({
      name: "active",
      title: "Show on Website",
      type: "boolean",
      group: "settings",
      initialValue: true,

      description:
        "Turn this off when a member leaves or should no longer appear. The record will remain safe in Sanity.",
    }),

    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "settings",

      description:
        "Lower numbers appear before higher numbers inside the department.",

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
      title: "Department & Display Order",
      name: "departmentOrder",

      by: [
        {
          field: "department",
          direction: "asc",
        },
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
      title: "Employee ID",
      name: "employeeIdAsc",

      by: [
        {
          field: "employeeId",
          direction: "asc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "name",
      employeeId: "employeeId",
      designation: "designation",
      department: "department",
      departmentHead: "departmentHead",
      active: "active",
      media: "profileImage",
    },

    prepare({
      title,
      employeeId,
      designation,
      department,
      departmentHead,
      active,
      media,
    }) {
      const details = [
        employeeId,
        designation,
        department,
        departmentHead
          ? "Department Head"
          : undefined,
        active === false
          ? "Hidden"
          : undefined,
      ].filter(Boolean);

      return {
        title:
          title ||
          "Untitled Team Member",

        subtitle:
          details.join(" • "),

        media,
      };
    },
  },
});