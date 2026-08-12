export default {
  name: 'pattern',
  title: 'Patterns',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Pattern Title',
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
      title: 'Pattern Content',
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
        // Code example block for patterns
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Example',
          fields: [
            {name: 'title', title: 'Code Title', type: 'string', initialValue: 'Example'},
            {name: 'language', title: 'Language', type: 'string', initialValue: 'javascript', options: {
              list: ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'html', 'json']
            }},
            {name: 'code', title: 'Code', type: 'text', rows: 10},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
          ],
          preview: {
            select: {title: 'title', subtitle: 'language'},
            prepare({title, subtitle}) {
              return {
                title: title || 'Code Example',
                subtitle: subtitle || 'Code Block',
              }
            },
          },
        },
        // UI Pattern block for visual examples
        {
          type: 'object',
          name: 'uiPattern',
          title: 'UI Pattern Example',
          fields: [
            {name: 'title', title: 'Pattern Name', type: 'string'},
            {name: 'description', title: 'Pattern Description', type: 'text', rows: 3},
            {name: 'image', title: 'Pattern Screenshot', type: 'image', options: {hotspot: true}},
            {name: 'dosList', title: 'Do\'s', type: 'array', of: [{type: 'string'}]},
            {name: 'dontsList', title: 'Don\'ts', type: 'array', of: [{type: 'string'}]},
          ],
          preview: {
            select: {title: 'title', media: 'image'},
            prepare({title, media}) {
              return {
                title: title || 'UI Pattern',
                subtitle: 'Pattern Example',
                media,
              }
            },
          },
        },
      ],
    },
    {
      name: 'patternType',
      title: 'Pattern Type',
      type: 'string',
      options: {
        list: [
          'Authentication',
          'Forms',
          'Navigation',
          'E-commerce',
          'Data Display',
          'Feedback',
          'Layout',
          'Content',
        ],
      },
    },
    {
      name: 'complexity',
      title: 'Complexity Level',
      type: 'string',
      options: {
        list: [
          {title: 'Simple', value: 'simple'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
      },
      initialValue: 'simple',
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
    {
      title: 'Pattern Type',
      name: 'typeAsc',
      by: [{field: 'patternType', direction: 'asc'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'patternType',
      status: 'status',
      complexity: 'complexity',
    },
    prepare({title, subtitle, status, complexity}) {
      return {
        title: title,
        subtitle: `${status} • ${subtitle} • ${complexity}`,
      }
    },
  },
}