// Manual pattern creation script
// You can copy these objects and create them manually in Sanity Studio

const patterns = [
  {
    _type: 'pattern',
    title: 'Sign up',
    slug: { current: 'sign-up' },
    description: 'User registration and account creation patterns with best practices for onboarding new users effectively.',
    patternType: 'Authentication',
    complexity: 'simple',
    order: 1,
    status: 'published',
    content: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Overview' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ 
          _type: 'span', 
          text: 'The sign-up pattern is crucial for user acquisition and first impressions. A well-designed registration flow reduces friction, builds trust, and sets the foundation for a positive user experience.' 
        }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Key Principles' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Minimize required fields - only ask for essential information' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Provide clear validation feedback in real-time' }]
      }
    ]
  },
  {
    _type: 'pattern',
    title: 'Login',
    slug: { current: 'login' },
    description: 'User authentication patterns including standard login, social authentication, and password recovery flows.',
    patternType: 'Authentication',
    complexity: 'intermediate',
    order: 2,
    status: 'published',
    content: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Overview' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ 
          _type: 'span', 
          text: 'Login patterns should balance security with usability. Users need to authenticate quickly and securely while maintaining trust in your platform.' 
        }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Best Practices' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Support both email and username login options' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Provide clear error messages without revealing security details' }]
      }
    ]
  },
  {
    _type: 'pattern',
    title: 'Payment',
    slug: { current: 'payment' },
    description: 'Secure payment flow patterns including form design, validation, and confirmation states for e-commerce transactions.',
    patternType: 'E-commerce',
    complexity: 'advanced',
    order: 3,
    status: 'published',
    content: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Overview' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ 
          _type: 'span', 
          text: 'Payment patterns must prioritize security, clarity, and trust. Users need confidence in the process while completing transactions efficiently.' 
        }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Security & Trust Factors' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Display security badges and SSL certificates prominently' }]
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'Use clear progress indicators for multi-step checkout' }]
      }
    ]
  }
]

console.log('Pattern documents to create manually:')
console.log('=====================================')
patterns.forEach((pattern, index) => {
  console.log(`\n${index + 1}. ${pattern.title}`)
  console.log(`   Type: ${pattern.patternType}`)
  console.log(`   Complexity: ${pattern.complexity}`)
  console.log(`   Slug: ${pattern.slug.current}`)
  console.log(`   Description: ${pattern.description}`)
})

console.log('\n\nInstructions:')
console.log('1. Go to your Sanity Studio')
console.log('2. Look for "Patterns" in the document types')
console.log('3. If you don\'t see it, redeploy Sanity Studio')
console.log('4. Create each pattern document manually using the info above')