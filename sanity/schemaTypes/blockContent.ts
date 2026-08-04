import {defineArrayMember, defineField, defineType} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Article Content',
  type: 'array',

  of: [
  defineArrayMember({
    type: 'block',

    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'Heading 2', value: 'h2'},
      {title: 'Heading 3', value: 'h3'},
      {title: 'Quote', value: 'blockquote'},
    ],

    lists: [
      {title: 'Bullet List', value: 'bullet'},
      {title: 'Numbered List', value: 'number'},
    ],

    marks: {
      decorators: [
        {title: 'Strong', value: 'strong'},
        {title: 'Emphasis', value: 'em'},
        {title: 'Underline', value: 'underline'},
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
                  scheme: ['http', 'https', 'mailto', 'tel'],
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

  defineArrayMember({
    name: 'articleImage',
    title: 'Article Image',
    type: 'image',
    options: {
      hotspot: true,
    },

    fields: [
      defineField({
        name: 'alt',
        title: 'Alternative Text',
        type: 'string',
        validation: (rule) =>
          rule.required().error('Alternative text is required.'),
      }),

      defineField({
        name: 'caption',
        title: 'Image Caption',
        type: 'string',
      }),
    ],
  }),

  defineArrayMember({
    type: 'articleTable',
  }),

  defineArrayMember({
  type: 'articleCallout',
}),

defineArrayMember({
  type: 'articleCta',
}),

  defineArrayMember({
    name: 'divider',
    title: 'Section Divider',
    type: 'object',

    fields: [
      defineField({
        name: 'style',
        title: 'Divider Style',
        type: 'string',
        initialValue: 'default',

        options: {
          list: [
            {
              title: 'Default Divider',
              value: 'default',
            },
          ],
        },
      }),
    ],

    preview: {
      prepare() {
        return {
          title: 'Section Divider',
        }
      },
    },
  }),
],
})