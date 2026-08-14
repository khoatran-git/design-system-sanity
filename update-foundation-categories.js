import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'q8ijpuq2',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Category mapping: current category -> new category
const categoryMapping = {
  'Principles': 'Philosophy',
  'Governance': 'Philosophy', // If this exists, move to Philosophy 
  'Design tokens': 'Design',
  'Typography': 'Design',
  'Colours': 'Design',
  'Elevation': 'Design',
  'Motion': 'Design',
  'Usability': 'Design',
  'Accessibility': 'Design',
  'UX Writing': 'Design'
}

async function updateFoundationCategories() {
  console.log('Starting foundation category reorganization...')
  
  try {
    // Fetch all foundation documents
    const foundations = await client.fetch(`*[_type == "foundation"]`)
    console.log(`Found ${foundations.length} foundation documents`)
    
    for (const foundation of foundations) {
      const currentCategory = foundation.category
      const newCategory = categoryMapping[currentCategory]
      
      if (newCategory && newCategory !== currentCategory) {
        try {
          await client
            .patch(foundation._id)
            .set({ category: newCategory })
            .commit()
          
          console.log(`✅ Updated "${foundation.title}": ${currentCategory} → ${newCategory}`)
        } catch (error) {
          console.error(`❌ Failed to update "${foundation.title}":`, error.message)
        }
      } else if (newCategory === currentCategory) {
        console.log(`⚪ "${foundation.title}" already in correct category: ${currentCategory}`)
      } else {
        console.log(`⚠️  "${foundation.title}" has unmapped category: ${currentCategory}`)
      }
    }
    
    // Check if we need to create a "Model" document
    const modelDoc = foundations.find(f => f.slug?.current === 'model')
    if (!modelDoc) {
      console.log('\n📝 Creating "Model" foundation document...')
      try {
        const modelDocument = {
          _type: 'foundation',
          title: 'Model',
          slug: {
            _type: 'slug',
            current: 'model',
          },
          description: 'The foundational model and framework that guides our design system approach',
          category: 'Philosophy',
          order: 0, // Place before Principles
          status: 'published',
          content: [],
        }
        
        const result = await client.create(modelDocument)
        console.log(`✅ Created "Model" document (ID: ${result._id})`)
      } catch (error) {
        console.error('❌ Failed to create Model document:', error.message)
      }
    }
    
    console.log('\n📊 Final category summary:')
    console.log('Philosophy: Model, Principles')
    console.log('Design: Design tokens, Typography, Colours, Elevation, Motion, Usability, Accessibility, UX Writing')
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
  
  console.log('\nFoundation category reorganization completed!')
}

// Run the migration
updateFoundationCategories().catch(console.error)