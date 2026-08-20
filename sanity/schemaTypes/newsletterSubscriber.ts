import { defineField, defineType } from "sanity";

export const newsletterSubscriber = defineType({
  name: "newsletterSubscriber",
  title: "Newsletter Subscribers",
  type: "document",

  fields: [
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .email()
          .error("Please enter a valid email address."),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "active",

      options: {
        list: [
          {
            title: "Active",
            value: "active",
          },
          {
            title: "Unsubscribed",
            value: "unsubscribed",
          },
        ],
        layout: "radio",
      },

      validation: (Rule) =>
        Rule.required(),
    }),

    defineField({
      name: "source",
      title: "Subscription Source",
      type: "string",
      initialValue: "Blog Newsletter",
      readOnly: true,
    }),

    defineField({
      name: "subscribedAt",
      title: "Subscribed At",
      type: "datetime",
      readOnly: true,
    }),

    defineField({
  name: "unsubscribedAt",
  title: "Unsubscribed At",
  type: "datetime",
  readOnly: true,
}),

    defineField({
      name: "consent",
      title: "Newsletter Consent",
      type: "boolean",
      initialValue: true,
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: "email",
      subtitle: "status",
    },
  },

  orderings: [
    {
      title: "Newest Subscribers",
      name: "subscribedAtDesc",
      by: [
        {
          field: "subscribedAt",
          direction: "desc",
        },
      ],
    },
  ],
});