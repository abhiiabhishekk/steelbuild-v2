import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Blog Category',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: 'Example: PEB Insights, Steel Construction or Industry News.',
      validation: (rule) =>
        rule.required().min(2).max(80).error('Category name is required.'),
    }),

    defineField({
      name: 'slug',
      title: 'Category Slug',
      type: 'slug',
      description: 'This will be used in the category page URL.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Category slug is required.'),
    }),

    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'text',
      rows: 4,
      description:
        'A short introduction explaining what kind of articles belong to this category.',
      validation: (rule) =>
        rule
          .max(300)
          .warning('Keep the category description within 300 characters.'),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'Optional custom title for search engines. Leave blank to use the category name.',
      validation: (rule) =>
        rule.max(60).warning('SEO titles are usually best kept within 60 characters.'),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description:
        'Optional description for search results. Leave blank to use the category description.',
      validation: (rule) =>
        rule
          .max(160)
          .warning('Meta descriptions are usually best kept within 160 characters.'),
    }),

    defineField({
      name: 'isActive',
      title: 'Active Category',
      type: 'boolean',
      description:
        'Disable this when the category should no longer be available for new blog posts.',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },

    prepare({title, isActive}) {
      return {
        title: title || 'Untitled Category',
        subtitle: isActive === false ? 'Inactive category' : 'Active category',
      }
    },
  },

  orderings: [
    {
      title: 'Category Name A–Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})