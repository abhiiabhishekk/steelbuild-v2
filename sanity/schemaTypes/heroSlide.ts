import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Homepage Hero Slides",
  type: "document",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Explore Our Projects",
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "/projects",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Talk to Our Experts",
    }),

    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "/contact",
    }),

    defineField({
      name: "order",
      title: "Slide Order",
      type: "number",
      description:
        "Enter 1 for first slide, 2 for second slide, etc.",
      validation: (Rule) =>
        Rule.required().integer().min(1),
    }),

    defineField({
      name: "isActive",
      title: "Show This Slide",
      type: "boolean",
      description:
        "Turn this off to temporarily hide the slide from the website.",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
      media: "image",
      order: "order",
      isActive: "isActive",
    },

    prepare({
      title,
      subtitle,
      media,
      order,
      isActive,
    }) {
      return {
        title: `${order ?? "—"}. ${title ?? "Untitled Slide"}`,
        subtitle: `${isActive === false ? "Hidden • " : ""}${subtitle ?? ""}`,
        media,
      };
    },
  },

  orderings: [
    {
      title: "Slide Order",
      name: "slideOrder",
      by: [
        {
          field: "order",
          direction: "asc",
        },
      ],
    },
  ],
});