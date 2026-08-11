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
              description: 'Optional title for this code example',
            },
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              options: {
                list: [
                  {title: 'JavaScript', value: 'javascript'},
                  {title: 'TypeScript', value: 'typescript'},
                  {title: 'JSX', value: 'jsx'},
                  {title: 'TSX', value: 'tsx'},
                  {title: 'HTML', value: 'html'},
                  {title: 'CSS', value: 'css'},
                  {title: 'SCSS', value: 'scss'},
                  {title: 'JSON', value: 'json'},
                ],
                layout: 'dropdown',
              },
              initialValue: 'jsx',
            },
            {
              name: 'code',
              title: 'Code',
              type: 'text',
              rows: 10,
              description: 'Enter your code here',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'Optional description explaining this code example',
            },
          ],
          preview: {
            select: {
              title: 'title',
              language: 'language',
              code: 'code',
            },
            prepare({title, language, code}) {
              return {
                title: title || 'Code Example',
                subtitle: language || 'Code',
                media: null,
              }
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
              description: 'Title for this component preview',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'Description of what this preview shows',
            },
            {
              name: 'html',
              title: 'HTML Preview',
              type: 'text',
              rows: 8,
              description: 'HTML code for the component preview',
            },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
            prepare({title, description}) {
              return {
                title: title || 'Component Preview',
                subtitle: description || 'Preview',
                media: null,
              }
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
          title: 'Image',
          options: {
            hotspot: true,
            storeOriginalFilename: false,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for accessibility and SEO',
              validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption displayed below the image',
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