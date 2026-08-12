import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'q8ijpuq2',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  apiVersion: '2024-01-01',
})

// Read patterns data from JSON file
const patternsData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'patterns-data.json'), 'utf8')
)

async function createPatternDocuments() {
  console.log('Starting migration of Pattern documents...')
  
  for (const doc of patternsData) {
    try {
      // Generate unique keys for all objects that need them
      const processContent = (content) => {
        return content.map((item, index) => {
          if (!item._key) {
            item._key = `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`
          }
          
          // Process nested children arrays
          if (item.children) {
            item.children = item.children.map((child, childIndex) => {
              if (!child._key) {
                child._key = `${Date.now()}-child-${childIndex}-${Math.random().toString(36).substr(2, 9)}`
              }
              return child
            })
          }
          
          return item
        })
      }
      
      const document = {
        _type: doc._type,
        title: doc.title,
        slug: doc.slug,
        description: doc.description,
        content: processContent(doc.content),
        patternType: doc.patternType,
        complexity: doc.complexity,
        order: doc.order,
        status: doc.status,
      }
      
      const result = await client.create(document)
      console.log(`✅ Created: ${doc.title} (ID: ${result._id})`)
    } catch (error) {
      console.error(`❌ Failed to create ${doc.title}:`, error.message)
      console.error('Error details:', error)
    }
  }
  
  console.log('Pattern migration completed!')
}

// Run the migration
createPatternDocuments().catch(console.error)