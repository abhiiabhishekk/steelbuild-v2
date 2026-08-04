import {defineArrayMember, defineField, defineType} from 'sanity'

export const articleCalloutType = defineType({
  name: 'articleCallout',
  title: 'Article Callout',
  type: 'object',

  fields: [
    defineField({
      name: 'variant',
      title: 'Callout Type',
      type: 'string',
      initialValue: 'information',
      options: {
        layout: 'radio',
        list: [
          {
            title: 'Information',
            value: 'information',
          },
          {
            title: 'Key Insight',
            value: 'insight',
          },
          {
            title: 'Important',
            value: 'important',
          },
          {
            title: 'Warning',
            value: 'warning',
          },
        ],
      },
      validation: (rule) =>
        rule.required().error('Select a callout type.'),
    }),

    defineField({
      name: 'title',
      title: 'Callout Title',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .max(100)
          .error(
            'Callout title is required and must be between 3 and 100 characters.',
          ),
    }),

    defineField({
      name: 'content',
      title: 'Callout Content',
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
          .error('Callout content is required.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      variant: 'variant',
    },

    prepare({title, variant}) {
      const labels: Record<string, string> = {
        information: 'Information',
        insight: 'Key Insight',
        important: 'Important',
        warning: 'Warning',
      }

      return {
        title: title || 'Untitled Callout',
        subtitle: labels[variant] || 'Article Callout',
      }
    },
  },
})