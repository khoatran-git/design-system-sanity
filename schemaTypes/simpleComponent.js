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
    
    // TAB 1: OVERVIEW CONTENT
    {
      name: 'overviewContent',
      title: 'Overview Content',
      description: 'Rich content for the Overview tab - main component documentation',
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
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
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
          title: 'Image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required()},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
      ],
    },
    
    // TAB 2: CODE CONTENT
    {
      name: 'codeContent',
      title: 'Code Tab Content',
      description: 'Code examples, usage instructions, and API documentation',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          }
        },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Example',
          fields: [
            {name: 'title', title: 'Example Title', type: 'string'},
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              options: {
                list: ['javascript', 'typescript', 'jsx', 'tsx', 'html', 'css', 'scss', 'json'],
              },
              initialValue: 'jsx',
            },
            {name: 'code', title: 'Code', type: 'text', rows: 10},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
          ],
          preview: {
            select: {title: 'title', language: 'language'},
            prepare({title, language}) {
              return {
                title: title || 'Code Example',
                subtitle: language || 'Code',
              }
            },
          },
        },
        {
          type: 'object',
          name: 'apiReference',
          title: 'API Reference',
          fields: [
            {name: 'title', title: 'API Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {
              name: 'props',
              title: 'Props/Parameters',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Prop Name'},
                    {name: 'type', type: 'string', title: 'Type'},
                    {name: 'required', type: 'boolean', title: 'Required'},
                    {name: 'description', type: 'text', title: 'Description', rows: 2},
                    {name: 'defaultValue', type: 'string', title: 'Default Value'},
                  ],
                  preview: {
                    select: {name: 'name', type: 'type', required: 'required'},
                    prepare({name, type, required}) {
                      return {
                        title: name,
                        subtitle: `${type}${required ? ' (required)' : ''}`,
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {
                title: title || 'API Reference',
                subtitle: 'Component API',
              }
            },
          },
        },
      ],
    },
    
    // TAB 3: WHAT'S NEW CONTENT  
    {
      name: 'whatsNewContent',
      title: 'What\'s New Content',
      description: 'Changelog, updates, version history, and breaking changes',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          }
        },
        {
          type: 'object',
          name: 'changelogEntry',
          title: 'Changelog Entry',
          fields: [
            {name: 'version', title: 'Version', type: 'string', placeholder: 'e.g., v1.2.0'},
            {name: 'date', title: 'Release Date', type: 'date'},
            {
              name: 'type',
              title: 'Change Type',
              type: 'string',
              options: {
                list: [
                  {title: '🚀 New Feature', value: 'feature'},
                  {title: '🐛 Bug Fix', value: 'fix'},
                  {title: '💥 Breaking Change', value: 'breaking'},
                  {title: '✨ Improvement', value: 'improvement'},
                  {title: '📦 Deprecation', value: 'deprecation'},
                  {title: '🔧 Maintenance', value: 'maintenance'},
                ],
              },
            },
            {name: 'description', title: 'Description', type: 'text', rows: 3},
          ],
          preview: {
            select: {version: 'version', type: 'type', description: 'description'},
            prepare({version, type, description}) {
              const typeLabels = {
                feature: '🚀',
                fix: '🐛',
                breaking: '💥',
                improvement: '✨',
                deprecation: '📦',
                maintenance: '🔧'
              }
              return {
                title: `${typeLabels[type] || '📝'} ${version || 'Version Update'}`,
                subtitle: description?.substring(0, 60) || 'No description',
              }
            },
          },
        },
      ],
    },

    // METADATA FIELDS
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