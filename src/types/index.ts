export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  category: string
  image: string
  featured: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  date: string
}

export interface FilterOptions {
  category: string
  tags: string[]
  search: string
}
