export default {
  name: 'style',
  title: 'Styles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Style Title',
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
      title: 'Style Content',
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
        // CSS/Design Token examples
        {
          type: 'object',
          name: 'cssExample',
          title: 'CSS Example',
          fields: [
            {name: 'title', title: 'Example Title', type: 'string', initialValue: 'CSS Example'},
            {name: 'css', title: 'CSS Code', type: 'text', rows: 8},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {
                title: title || 'CSS Example',
                subtitle: 'Stylesheet',
              }
            },
          },
        },
        // Design token reference
        {
          type: 'object',
          name: 'designToken',
          title: 'Design Token',
          fields: [
            {name: 'tokenName', title: 'Token Name', type: 'string'},
            {name: 'tokenValue', title: 'Token Value', type: 'string'},
            {name: 'tokenType', title: 'Token Type', type: 'string', options: {
              list: ['Color', 'Typography', 'Spacing', 'Border', 'Shadow', 'Animation', 'Breakpoint', 'Z-index']
            }},
            {name: 'description', title: 'Usage Description', type: 'text', rows: 2},
            {name: 'cssProperty', title: 'CSS Property', type: 'string'},
          ],
          preview: {
            select: {tokenName: 'tokenName', tokenValue: 'tokenValue', tokenType: 'tokenType'},
            prepare({tokenName, tokenValue, tokenType}) {
              return {
                title: tokenName || 'Design Token',
                subtitle: `${tokenType || 'Token'}: ${tokenValue || 'Value'}`,
              }
            },
          },
        },
        // Color palette
        {
          type: 'object',
          name: 'colorPalette',
          title: 'Color Palette',
          fields: [
            {name: 'paletteName', title: 'Palette Name', type: 'string'},
            {
              name: 'colors',
              title: 'Colors',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Color Name'},
                    {name: 'hex', type: 'string', title: 'Hex Value', placeholder: '#000000'},
                    {name: 'rgb', type: 'string', title: 'RGB Value', placeholder: 'rgb(0, 0, 0)'},
                    {name: 'usage', type: 'text', title: 'Usage Notes', rows: 2},
                  ],
                  preview: {
                    select: {name: 'name', hex: 'hex'},
                    prepare({name, hex}) {
                      return {
                        title: name || 'Color',
                        subtitle: hex || 'No hex value',
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {paletteName: 'paletteName'},
            prepare({paletteName}) {
              return {
                title: paletteName || 'Color Palette',
                subtitle: 'Color System',
              }
            },
          },
        },
      ],
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
      status: 'status',
    },
    prepare({title, status}) {
      return {
        title: title,
        subtitle: `${status} • Style`,
      }
    },
  },
}