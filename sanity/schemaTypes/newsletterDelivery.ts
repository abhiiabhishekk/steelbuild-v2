import {
  defineField,
  defineType,
} from "sanity";

export const newsletterDeliveryType =
  defineType({
    name: "newsletterDelivery",

    title:
      "Newsletter Delivery",

    type: "document",

    fields: [
      defineField({
        name: "contentType",
        title: "Content Type",
        type: "string",

        options: {
          list: [
            {
              title: "Project",
              value: "project",
            },

            {
              title: "Blog",
              value: "blog",
            },

            {
              title: "Exhibition",
              value: "exhibition",
            },
          ],
        },

        readOnly: true,
      }),

      defineField({
        name: "contentId",
        title: "Content ID",
        type: "string",
        readOnly: true,
      }),

      defineField({
        name: "subscriberId",
        title: "Subscriber ID",
        type: "string",
        readOnly: true,
      }),

      defineField({
        name: "email",
        title: "Recipient Email",
        type: "string",
        readOnly: true,
      }),

      defineField({
        name: "sentAt",
        title: "Sent At",
        type: "datetime",
        readOnly: true,
      }),
    ],

    preview: {
      select: {
        email: "email",
        contentType:
          "contentType",
        sentAt:
          "sentAt",
      },

      prepare({
        email,
        contentType,
        sentAt,
      }) {
        return {
          title:
            email ||
            "Newsletter Delivery",

          subtitle: [
            contentType,
            sentAt,
          ]
            .filter(Boolean)
            .join(" • "),
        };
      },
    },
  });