export default {
  name: 'foundation',
  title: 'Foundation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Foundation Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Typography', value: 'typography' },
          { title: 'Colors', value: 'colors' },
          { title: 'Spacing', value: 'spacing' },
          { title: 'Layout', value: 'layout' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['draft', 'published'],
      },
      initialValue: 'draft',
    },
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.category,
      }
    },
  },
}