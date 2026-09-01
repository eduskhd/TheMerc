import { defineField, defineType } from 'sanity'

export const menuItemSchema = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Menu Section',
      type: 'string',
      options: {
        list: [
          { title: '🍕 Pizza', value: 'pizza' },
          { title: '🍔 Burgers', value: 'burgers' },
          { title: '🍟 Good Eats', value: 'good-eats' },
          { title: '☕ Coffee', value: 'coffee' },
          { title: '🍺 Drinks', value: 'drinks' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Ejemplo: $12 o $10/$14',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['gluten-free', 'vegetarian', 'vegan', 'spicy', 'new', 'popular'],
        layout: 'checkbox',
      },
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'note',
      title: 'Note (optional)',
      type: 'string',
    }),
    defineField({
      name: 'available',
      title: 'Available on Menu',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'section', media: 'image' },
  },
})
