import {defineArrayMember, defineField, defineType} from 'sanity'

export const articleTableType = defineType({
  name: 'articleTable',
  title: 'Article Table',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Table Title',
      type: 'string',
      description:
        'Optional heading displayed above the table.',
    }),

    defineField({
      name: 'columns',
      title: 'Table Columns',
      type: 'array',
      description:
        'Add the column headings from left to right.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tableColumn',

          fields: [
            defineField({
              name: 'heading',
              title: 'Column Heading',
              type: 'string',
              validation: (rule) =>
                rule.required().error('Column heading is required.'),
            }),
          ],

          preview: {
            select: {
              title: 'heading',
            },
          },
        }),
      ],
      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(6)
          .error('Add between 2 and 6 table columns.'),
    }),

    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      description:
        'Add one row at a time. Enter cell values in the same order as the columns.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tableRow',

          fields: [
            defineField({
              name: 'cells',
              title: 'Row Cells',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'text',
                  rows: 3,
                }),
              ],
              validation: (rule) =>
                rule.required().min(1).error('Add the row cell values.'),
            }),
          ],

          preview: {
            select: {
              cells: 'cells',
            },

            prepare({cells}) {
              const firstCell =
                Array.isArray(cells) && cells.length > 0
                  ? cells[0]
                  : 'Empty row'

              return {
                title: firstCell,
                subtitle: Array.isArray(cells)
                  ? `${cells.length} cells`
                  : 'No cells',
              }
            },
          },
        }),
      ],
      validation: (rule) =>
        rule.required().min(1).error('Add at least one table row.'),
    }),

    defineField({
      name: 'caption',
      title: 'Table Caption',
      type: 'string',
      description:
        'Optional short explanation displayed below the table.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      columns: 'columns',
      rows: 'rows',
    },

    prepare({title, columns, rows}) {
      const columnCount = Array.isArray(columns)
        ? columns.length
        : 0

      const rowCount = Array.isArray(rows)
        ? rows.length
        : 0

      return {
        title: title || 'Article Table',
        subtitle: `${columnCount} columns • ${rowCount} rows`,
      }
    },
  },
})