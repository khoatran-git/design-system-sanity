export default {
  name: 'foundation',
  title: 'Foundations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Foundation Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Foundation Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Number List', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {name: 'href', type: 'url', title: 'URL'},
                  {name: 'blank', type: 'boolean', title: 'Open in new tab'}
                ]
              },
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required()},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
        // Design token block for foundations
        {
          type: 'object',
          name: 'designTokens',
          title: 'Design Tokens',
          fields: [
            {name: 'title', title: 'Token Category', type: 'string', initialValue: 'CSS Variables'},
            {
              name: 'tokens',
              title: 'Tokens',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Variable Name'},
                    {name: 'value', type: 'string', title: 'Value'},
                    {name: 'description', type: 'string', title: 'Description'},
                  ],
                  preview: {
                    select: {title: 'name', subtitle: 'value'},
                  },
                },
              ],
            },
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {
                title: title || 'Design Tokens',
                subtitle: 'Token Collection',
              }
            },
          },
        },
      ],
    },
    {
      name: 'category',
      title: 'Foundation Category',
      type: 'string',
      options: {
        list: [
          'Philosophy',
          'Design',
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
        ],
      },
      initialValue: 'draft',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      status: 'status',
    },
    prepare({title, subtitle, status}) {
      return {
        title: title,
        subtitle: `${status} • ${subtitle}`,
      }
    },
  },
}