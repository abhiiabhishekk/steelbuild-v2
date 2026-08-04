import {defineArrayMember, defineField, defineType} from 'sanity'

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',

  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .max(200)
          .error(
            'FAQ question is required and must be between 10 and 200 characters.',
          ),
    }),

    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',

      of: [
        defineArrayMember({
          type: 'block',

          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
          ],

          lists: [
            {
              title: 'Bullet List',
              value: 'bullet',
            },

            {
              title: 'Numbered List',
              value: 'number',
            },
          ],

          marks: {
            decorators: [
              {
                title: 'Strong',
                value: 'strong',
              },

              {
                title: 'Emphasis',
                value: 'em',
              },
            ],

            annotations: [
              defineField({
                name: 'link',
                title: 'Link',
                type: 'object',

                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',

                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: [
                          'http',
                          'https',
                          'mailto',
                          'tel',
                        ],
                      }),
                  }),

                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in New Tab',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              }),
            ],
          },
        }),
      ],

      validation: (rule) =>
        rule
          .required()
          .min(1)
          .error('FAQ answer is required.'),
    }),
  ],

  preview: {
    select: {
      question: 'question',
    },

    prepare({question}) {
      return {
        title: question || 'Untitled FAQ',
        subtitle: 'Frequently Asked Question',
      }
    },
  },
})