import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
  name: 'the-merc',
  title: 'The Merc — Admin',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('The Merc')
          .items([
            S.listItem()
              .title('📅 Events')
              .schemaType('event')
              .child(
                S.documentTypeList('event')
                  .title('Events')
                  .defaultOrdering([{ field: 'date', direction: 'asc' }])
              ),
            S.listItem()
              .title('🍕 Menu Items')
              .schemaType('menuItem')
              .child(S.documentTypeList('menuItem').title('Menu Items')),
            S.listItem()
              .title('🖼️ Gallery Photos')
              .schemaType('galleryImage')
              .child(
                S.documentTypeList('galleryImage')
                  .title('Gallery Photos')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})
