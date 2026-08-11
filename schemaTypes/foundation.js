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
          { title: 'Principles', value: 'principles' },
          { title: 'Governance', value: 'governance' },
          { title: 'Design Tokens', value: 'design-tokens' },
          { title: 'Typography', value: 'typography' },
          { title: 'Colours', value: 'colours' },
          { title: 'Elevation', value: 'elevation' },
          { title: 'Motion', value: 'motion' },
          { title: 'Usability', value: 'usability' },
          { title: 'Accessibility', value: 'accessibility' },
          { title: 'UX Writing', value: 'ux-writing' },
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
        {
          type: 'text',
          title: 'Code Block',
          rows: 6,
        },
        {
          type: 'object',
          name: 'colorPalette',
          title: 'Color Palette',
          fields: [
            {
              name: 'colors',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', type: 'string' },
                    { name: 'hex', type: 'string' },
                    { name: 'rgb', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'relatedFoundations',
      title: 'Related Foundations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'foundation' }] }],
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
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
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
