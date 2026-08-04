import {defineField, defineType} from 'sanity'

export const articleCodeType = defineType({
  name: 'articleCode',
  title: 'Code Block',
  type: 'object',

  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'text',

      options: {
        list: [
          {title: 'Plain Text', value: 'text'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'JSON', value: 'json'},
          {title: 'Bash', value: 'bash'},
        ],
      },

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',

      rows: 15,

      validation: (rule) =>
        rule.required().error('Code is required.'),
    }),
  ],

  preview: {
    select: {
      language: 'language',
    },

    prepare({language}) {
      return {
        title: 'Code Block',
        subtitle: language || 'text',
      }
    },
  },
})