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
        {
          type: 'text',
          title: 'Code Block',
          rows: 6,
        },
      ],
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'object',
          name: 'specification',
          title: 'Specification',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
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
        {
          type: 'text',
          title: 'Code Block',
          rows: 6,
        },
      ],
    },
    {
      name: 'props',
      title: 'Props/Properties',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'prop',
          title: 'Prop',
          fields: [
            { name: 'propName', type: 'string', title: 'Prop Name' },
            { name: 'type', type: 'string', title: 'Type' },
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'required', type: 'boolean', title: 'Required', initialValue: false },
            { name: 'defaultValue', type: 'string', title: 'Default Value' },
          ],
        },
      ],
    },
    {
      name: 'examples',
      title: 'Usage Examples',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'example',
          title: 'Example',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            {
              name: 'code',
              type: 'text',
              title: 'Code',
              rows: 8,
            },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
      ],
    },
    {
      name: 'relatedComponents',
      title: 'Related Components',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'component' }] }],
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
