import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "photo",
      subtitle: "designation",
    },
  },
});