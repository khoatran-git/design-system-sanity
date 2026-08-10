// Sanity document types for Group Design System

export interface Component {
  _id: string
  _type: 'component'
  _createdAt: string
  _updatedAt: string
  name: string
  slug: { current: string }
  description?: string
  overview?: any[]
  specifications?: any[]
  documentation?: any[]
  props?: Array<{
    _key: string
    propName: string
    type: string
    description: string
    required: boolean
    defaultValue?: string
  }>
  examples?: Array<{
    _key: string
    title: string
    code: string
    description?: string
  }>
  relatedComponents?: Array<{ _ref: string }>
  status: 'draft' | 'published' | 'deprecated'
  publishedAt?: string
}

export interface Foundation {
  _id: string
  _type: 'foundation'
  _createdAt: string
  _updatedAt: string
  name: string
  slug: { current: string }
  category: string
  description?: string
  content?: any[]
  relatedFoundations?: Array<{ _ref: string }>
  status: 'draft' | 'published'
  publishedAt?: string
}

export interface Resource {
  _id: string
  _type: 'resource'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: { current: string }
  description?: string
  resourceType: 'link' | 'document' | 'tool' | 'guide'
  url?: string
  content?: any[]
  icon?: string
  order?: number
  status: 'draft' | 'published'
}
