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
  name: 'fresh-start',
  title: 'Fresh Studio',
  projectId,
  dataset,
  
  // Disable CDN for immediate updates
  useCdn: false,
  
  // Configure plugins for content management
  plugins: [
    structureTool({
      // Define default document structure matching Next.js sidebar
      structure: (S) =>
        S.list()
          .title('Design System')
          .items([
            S.documentTypeListItem('getStarted').title('Get Started'),
            S.documentTypeListItem('foundation').title('Foundations'),
            S.documentTypeListItem('style').title('Styles'),
            S.documentTypeListItem('simpleComponent').title('Components'),
            S.documentTypeListItem('pattern').title('Patterns'),
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
  
  // Disable problematic features that can cause modal issues
  beta: {
    // Disable optimistic updates that can cause race conditions
    enableOptimisticUpdates: false,
  },
})
