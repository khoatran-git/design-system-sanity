import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'q8ijpuq2'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID environment variable')
}

if (!dataset) {
  throw new Error('Missing SANITY_STUDIO_DATASET environment variable')
}

export default defineConfig({
  name: 'default',
  title: 'Group Design System v2',
  projectId,
  dataset,
  
  // Enable real-time updates and optimistic UI
  useCdn: false,
  
  // Configure plugins for content management
  plugins: [
    structureTool({
      // Define default document structure
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('component').title('Components'),
            S.documentTypeListItem('foundation').title('Foundations'),
            S.documentTypeListItem('resource').title('Resources'),
          ]),
    }),
    visionTool(),
  ],
  
  // Define schema types
  schema: {
    types: schemaTypes,
  },

  // Configure document actions
  document: {
    actions: (prev) => prev,
  },
})
