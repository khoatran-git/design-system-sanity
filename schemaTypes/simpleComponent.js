export default {
  name: 'simpleComponent',
  title: 'Component Documentation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Component Name',
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
      title: 'Rich Content',
      type: 'array',
      of: [
        {
          type: 'block',
          // Define which block styles are available
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          // Define which list types are available
          lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Number List', value: 'number'},
          ],
          // Define which marks/decorators are available
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean'
                  }
                ]
              },
            ]
          }
        },
        // Custom block for code examples
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Example',
          fields: [
            {
              name: 'title',
              title: 'Example Title',
              type: 'string',
            },
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              options: {
                list: ['javascript', 'typescript', 'jsx', 'tsx', 'html', 'css', 'scss', 'json'],
              },
              initialValue: 'jsx',
            },
            {
              name: 'code',
              title: 'Code',
              type: 'text',
              rows: 10,
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'language',
            },
          },
        },
        // Custom block for component preview
        {
          type: 'object',
          name: 'componentPreview',
          title: 'Component Preview',
          fields: [
            {
              name: 'title',
              title: 'Preview Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'html',
              title: 'HTML Preview',
              type: 'text',
              rows: 8,
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
        // Custom block for design tokens
        {
          type: 'object',
          name: 'designTokens',
          title: 'Design Tokens',
          fields: [
            {
              name: 'title',
              title: 'Token Category',
              type: 'string',
              initialValue: 'CSS Variables',
            },
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
                    select: {
                      title: 'name',
                      subtitle: 'value',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
        // Image block
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Components',
          'Foundations',
          'Patterns',
          'Resources',
          'Guidelines',
        ],
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'In Review', value: 'review'},
          {title: 'Published', value: 'published'},
          {title: 'Deprecated', value: 'deprecated'},
        ],
      },
      initialValue: 'draft',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection
      return {
        title: title,
        subtitle: `${status} • ${subtitle}`,
      }
    },
  },
}