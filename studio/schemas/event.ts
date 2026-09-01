import { defineField, defineType } from 'sanity'

export const eventSchema = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'artist',
      title: 'Artist / Event Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Live Music', value: 'live-music' },
          { title: 'Trivia Night', value: 'trivia' },
          { title: 'Special Event', value: 'special' },
          { title: 'Community', value: 'community' },
        ],
        layout: 'radio',
      },
      initialValue: 'live-music',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'Formato 24h — ejemplo: 20:00 = 8pm',
    }),
    defineField({
      name: 'endTime',
      title: 'End Time (optional)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Event Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket URL (optional)',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'artist', subtitle: 'date', media: 'image' },
  },
})
