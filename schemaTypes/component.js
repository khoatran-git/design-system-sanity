export default {
  name: 'component',
  title: 'Component',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Component Name',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'overview',
      title: 'Overview Content',
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
      name: 'documentation',
      title: 'Documentation',
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
      name: 'codeExample',
      title: 'Code Example',
      type: 'text',
      rows: 10,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['draft', 'published', 'deprecated'],
      },
      initialValue: 'draft',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
}