import {
  defineArrayMember,
  defineField,
  defineType,
} from 'sanity'

export const articleCtaType = defineType({
  name: 'articleCta',
  title: 'Article CTA',
  type: 'object',

  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Small Label',
      type: 'string',
      description:
        'Optional short label displayed above the CTA heading, for example Project Assistance.',
      validation: (rule) =>
        rule
          .max(60)
          .warning(
            'Keep the small label within 60 characters.',
          ),
    }),

    defineField({
      name: 'title',
      title: 'CTA Heading',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(5)
          .max(120)
          .error(
            'CTA heading is required and must be between 5 and 120 characters.',
          ),
    }),

    defineField({
      name: 'description',
      title: 'CTA Description',
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

          lists: [],

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
          .error('CTA description is required.'),
    }),

    defineField({
      name: 'buttonLabel',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Request a Quote',

      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(40)
          .error(
            'Button text is required and must remain within 40 characters.',
          ),
    }),

    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
      initialValue: '/request-a-quote',

      validation: (rule) =>
        rule
          .required()
          .uri({
            allowRelative: true,
            scheme: [
              'http',
              'https',
              'mailto',
              'tel',
            ],
          })
          .error('Enter a valid button URL.'),
    }),

    defineField({
      name: 'openInNewTab',
      title: 'Open Button in New Tab',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'style',
      title: 'CTA Style',
      type: 'string',
      initialValue: 'primary',

      options: {
        layout: 'radio',

        list: [
          {
            title: 'Primary',
            value: 'primary',
          },
          {
            title: 'Compact',
            value: 'compact',
          },
        ],
      },

      validation: (rule) =>
        rule.required().error('Select a CTA style.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      buttonLabel: 'buttonLabel',
      style: 'style',
    },

    prepare({
      title,
      buttonLabel,
      style,
    }) {
      return {
        title: title || 'Untitled Article CTA',
        subtitle: [
          style === 'compact'
            ? 'Compact CTA'
            : 'Primary CTA',
          buttonLabel || 'No button text',
        ].join(' • '),
      }
    },
  },
})