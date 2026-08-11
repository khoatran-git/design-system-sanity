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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
  ],
}