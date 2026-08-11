export default {
  name: 'resource',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Resource Title',
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
      title: 'Resource Content',
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
        // Download/link resource block
        {
          type: 'object',
          name: 'downloadResource',
          title: 'Download Resource',
          fields: [
            {name: 'title', title: 'Resource Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
            {name: 'downloadUrl', title: 'Download URL', type: 'url'},
            {name: 'fileType', title: 'File Type', type: 'string', placeholder: 'e.g., PDF, Sketch, Figma'},
            {name: 'fileSize', title: 'File Size', type: 'string', placeholder: 'e.g., 2.5 MB'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'fileType'},
            prepare({title, subtitle}) {
              return {
                title: title || 'Download Resource',
                subtitle: subtitle || 'Resource',
              }
            },
          },
        },
      ],
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          'Downloads',
          'Tools',
          'Templates',
          'Guidelines',
          'Documentation',
          'External Links',
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
      subtitle: 'resourceType',
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