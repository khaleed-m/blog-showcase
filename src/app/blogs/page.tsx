'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { BlogCard } from '@/components/ui/Card'
import SearchFilter from '@/components/ui/SearchFilter'
import { BlogPost, FilterOptions } from '@/types'
import blogsData from '@/data/blogs.json'

export default function BlogsPage() {
  const [blogs] = useState<BlogPost[]>(blogsData)
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(blogs)

  const categories = Array.from(new Set(blogs.map(blog => blog.category)))
  const tags = Array.from(new Set(blogs.flatMap(blog => blog.tags)))

  const handleFilterChange = (filters: FilterOptions) => {
    const filtered = blogs.filter(blog => {
      const matchesSearch = !filters.search || 
        blog.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(filters.search.toLowerCase()) ||
        blog.author.toLowerCase().includes(filters.search.toLowerCase())
      
      const matchesCategory = !filters.category || blog.category === filters.category
      
      const matchesTags = filters.tags.length === 0 || 
        filters.tags.some(tag => blog.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })

    setFilteredBlogs(filtered)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Tech Blogs</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive deep into technical articles, tutorials, and insights from our team. 
            Stay updated with the latest trends and best practices in technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <SearchFilter
          onFilterChange={handleFilterChange}
          categories={categories}
          tags={tags}
        />

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredBlogs.length} of {blogs.length} blog{blogs.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No blogs found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
