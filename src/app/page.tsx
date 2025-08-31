'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ui/ThemeToggle'
import SearchSuggestions from '@/components/ui/SearchSuggestions'
import BookmarkButton from '@/components/ui/BookmarkButton'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton'
import SocialShare from '@/components/ui/SocialShare'

// Simple data for demonstration
const blogsData = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create performant and scalable web applications using Next.js, TypeScript, and modern development practices.",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "TypeScript"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Machine Learning in Web Development",
    excerpt: "Exploring how AI and ML are transforming the web development landscape with practical examples.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Machine Learning", "AI", "JavaScript"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "3",
    title: "Modern CSS Techniques for Better UX",
    excerpt: "Discover advanced CSS features and techniques that can significantly improve user experience and interface design.",
    author: "Mike Rodriguez",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["CSS", "UI/UX", "Web Design"],
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: false
  }
]

const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and robust backend",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    featured: true,
    status: "completed"
  },
  {
    id: "2",
    title: "AI-Powered Task Manager",
    description: "Smart task management app with AI-driven priority suggestions",
    technologies: ["React Native", "Node.js", "TensorFlow.js"],
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    featured: true,
    status: "completed"
  },
  {
    id: "3",
    title: "Real-time Chat Application",
    description: "Scalable chat app with video calling and file sharing",
    technologies: ["React", "Node.js", "Socket.io"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
    featured: false,
    status: "completed"
  }
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'blogs' | 'projects'>('all')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(false)

  // Search suggestions data
  const searchSuggestions = [
    'Next.js', 'React', 'TypeScript', 'Machine Learning', 'AI', 'Web Development',
    'Mobile Apps', 'UI/UX', 'CSS', 'JavaScript', 'Node.js', 'E-Commerce',
    'Task Manager', 'Chat Application', 'Real-time', 'Scalable Applications'
  ]

  useEffect(() => {
    // Simulate loading state on initial load
    setIsLoading(true)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(loadingTimer)
    }
  }, [])

  const filteredBlogs = blogsData.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || blog.category === selectedCategory)
  )

  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || project.category === selectedCategory)
  )

  const categories = Array.from(new Set([
    ...blogsData.map(blog => blog.category),
    ...projectsData.map(project => project.category)
  ]))

  const featuredBlogs = blogsData.filter(blog => blog.featured)
  const featuredProjects = projectsData.filter(project => project.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="fixed pointer-events-none z-40 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 16, 
          top: mousePosition.y - 16,
          transform: `scale(${scrollProgress + 0.5})` 
        }}
      ></div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl floating-element"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl floating-element"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl floating-element"></div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 200px 200px'
          }}></div>
        </div>

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-slate-900/50 dark:via-purple-900/30 dark:to-blue-900/50"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-8 shadow-lg hover-glow animate-bounce-in">
              <span className="relative w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3">
                <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse-ring"></span>
              </span>
              ✨ Welcome to our showcase
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text-accent block animate-bounce-in">
                Creative
              </span>
              <span className="gradient-text-primary block mt-2 animate-slide-in-blur">
                Blog & Projects
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-200 font-light">
              Discover innovative ideas, cutting-edge projects, and insightful articles that inspire creativity and drive innovation in the digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animate-delay-400">
              <button
                onClick={() => {
                  const element = document.getElementById('content')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-modern group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Content
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
              
              <Link 
                href="/about"
                className="glass-card group px-10 py-5 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105 magnetic-hover"
              >
                <span className="flex items-center justify-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up animate-delay-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{blogsData.length}+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{projectsData.length}+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-purple-50/80 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-purple-900/80 backdrop-blur-sm" id="content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
              Explore Our Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through our collection of innovative projects and insightful articles
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles and projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg glass-card rounded-2xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              {/* Search Suggestions */}
              <SearchSuggestions
                searchTerm={searchTerm}
                onSuggestionClick={setSearchTerm}
                suggestions={searchSuggestions}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex glass-card rounded-2xl p-2 shadow-xl">
              {[
                { key: 'all', label: 'All Work', count: blogsData.length + projectsData.length, icon: '🎯' },
                { key: 'projects', label: 'Projects', count: projectsData.length, icon: '🚀' },
                { key: 'blogs', label: 'Articles', count: blogsData.length, icon: '📝' }
              ].map(({ key, label, count, icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as 'all' | 'blogs' | 'projects')}
                  className={`group relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:scale-102'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span>{label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeTab === key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {count}
                    </span>
                  </span>
                  {activeTab === key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 glass-card rounded-xl text-gray-900 dark:text-white focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer font-medium border-0"
              >
                <option value="">🏷️ All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'Web Development' ? '💻' : 
                     category === 'AI/ML' ? '🤖' : 
                     category === 'Mobile Development' ? '📱' : 
                     category === 'Data Science' ? '📊' : '🔧'} {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display Blogs */}
            {(activeTab === 'all' || activeTab === 'blogs') && filteredBlogs.map((blog, index) => (
              <Link 
                key={`blog-${blog.id}`} 
                href={`/blogs/${blog.id}`}
                className="group block"
              >
                <article className={`card-premium rounded-3xl overflow-hidden magnetic-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white shadow-lg">
                        Article
                      </span>
                    </div>
                    
                    {/* Featured Badge & Bookmark */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {blog.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white shadow-lg">
                          ⭐
                        </span>
                      )}
                      <BookmarkButton itemId={blog.id} itemType="blog" />
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{blog.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{blog.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{blog.readTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <SocialShare title={blog.title} />
                        <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{blog.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}

            {/* Display Projects */}
            {(activeTab === 'all' || activeTab === 'projects') && filteredProjects.map((project, index) => (
              <Link 
                key={`project-${project.id}`} 
                href={`/projects/${project.id}`}
                className="group block"
              >
                <article className={`card-premium rounded-3xl overflow-hidden magnetic-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500 text-white shadow-lg">
                        Project
                      </span>
                    </div>
                    
                    {/* Status & Featured Badges & Bookmark */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold shadow-lg capitalize ${
                        project.status === 'completed' ? 'bg-green-500 text-white' :
                        project.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white shadow-lg">
                          ⭐
                        </span>
                      )}
                      <BookmarkButton itemId={project.id} itemType="project" />
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <SocialShare title={project.title} />
                        <div className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
            </div>
          )}

          {/* No Results */}
          {((activeTab === 'all' && filteredBlogs.length === 0 && filteredProjects.length === 0) ||
            (activeTab === 'blogs' && filteredBlogs.length === 0) ||
            (activeTab === 'projects' && filteredProjects.length === 0)) && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No results found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any content matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                    setActiveTab('all')
                  }}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Interactive Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>
    </div>
  )
}
