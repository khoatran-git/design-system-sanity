export default {
  name: 'guideline',
  title: 'Design Guidelines',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Guideline Title',
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
      title: 'Guideline Content',
      description: 'Rich content for the guideline documentation',
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
    {
      name: 'category',
      title: 'Guideline Category',
      type: 'string',
      options: {
        list: [
          'Design Principles',
          'Accessibility',
          'Content Strategy',
          'Brand Guidelines',
          'UX Patterns',
          'Best Practices',
        ],
      },
    },
    {
      name: 'priority',
      title: 'Priority Level',
      type: 'string',
      options: {
        list: [
          {title: 'High Priority', value: 'high'},
          {title: 'Medium Priority', value: 'medium'},
          {title: 'Low Priority', value: 'low'},
        ],
      },
      initialValue: 'medium',
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
          {title: 'Archived', value: 'archived'},
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
      category: 'category',
    },
    prepare(selection) {
      const {title, subtitle, status, category} = selection
      return {
        title: title,
        subtitle: `${status} • ${category} • ${subtitle}`,
      }
    },
  },
}