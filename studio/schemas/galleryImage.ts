import { defineField, defineType } from 'sanity'

export const galleryImageSchema = defineType({
  name: 'galleryImage',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '🍕 Food', value: 'food' },
          { title: '🍺 Drinks', value: 'drinks' },
          { title: '🎸 Live Music', value: 'music' },
          { title: '🏠 Venue', value: 'venue' },
          { title: '👥 People', value: 'people' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Números menores aparecen primero',
    }),
  ],
  preview: {
    select: { title: 'alt', subtitle: 'category', media: 'image' },
  },
})
