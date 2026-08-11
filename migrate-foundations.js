import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'q8ijpuq2',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  apiVersion: '2024-01-01',
})

// Foundation documents matching Next.js sidebar
const foundationDocuments = [
  {
    title: 'Principles',
    slug: 'principles',
    category: 'Principles',
    description: 'Core design principles that guide our design system',
    order: 1,
  },
  {
    title: 'Governance',
    slug: 'governance', 
    category: 'Governance',
    description: 'Guidelines for maintaining and evolving the design system',
    order: 2,
  },
  {
    title: 'Design tokens',
    slug: 'design-tokens',
    category: 'Design tokens',
    description: 'Foundational design decisions expressed as code',
    order: 3,
  },
  {
    title: 'Typography',
    slug: 'typography',
    category: 'Typography', 
    description: 'Type scales, font families, and text styling guidelines',
    order: 4,
  },
  {
    title: 'Colours',
    slug: 'colours',
    category: 'Colours',
    description: 'Color palette, usage guidelines, and accessibility standards',
    order: 5,
  },
  {
    title: 'Elevation',
    slug: 'elevation',
    category: 'Elevation',
    description: 'Shadow and depth guidelines for layered interfaces',
    order: 6,
  },
  {
    title: 'Motion',
    slug: 'motion',
    category: 'Motion',
    description: 'Animation principles, timing, and interaction guidelines',
    order: 7,
  },
  {
    title: 'Usability',
    slug: 'usability',
    category: 'Usability',
    description: 'User experience principles and interaction patterns',
    order: 8,
  },
  {
    title: 'Accessibility',
    slug: 'accessibility',
    category: 'Accessibility',
    description: 'Guidelines for creating inclusive and accessible experiences',
    order: 9,
  },
  {
    title: 'UX Writing',
    slug: 'ux-writing',
    category: 'UX Writing',
    description: 'Content strategy, voice, tone, and writing guidelines',
    order: 10,
  },
]

async function createFoundationDocuments() {
  console.log('Starting migration of Foundation documents...')
  
  for (const doc of foundationDocuments) {
    try {
      const document = {
        _type: 'foundation',
        title: doc.title,
        slug: {
          _type: 'slug',
          current: doc.slug,
        },
        description: doc.description,
        category: doc.category,
        order: doc.order,
        status: 'published',
        content: [], // Empty content as requested
      }
      
      const result = await client.create(document)
      console.log(`✅ Created: ${doc.title} (ID: ${result._id})`)
    } catch (error) {
      console.error(`❌ Failed to create ${doc.title}:`, error.message)
    }
  }
  
  console.log('Migration completed!')
}

// Run the migration
createFoundationDocuments().catch(console.error)