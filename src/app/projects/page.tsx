'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Folder } from 'lucide-react'
import { ProjectCard } from '@/components/ui/Card'
import SearchFilter from '@/components/ui/SearchFilter'
import { Project, FilterOptions } from '@/types'
import projectsData from '@/data/projects.json'

export default function ProjectsPage() {
  const [projects] = useState<Project[]>(projectsData)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  const categories = Array.from(new Set(projects.map(project => project.category)))
  const tags = Array.from(new Set(projects.flatMap(project => project.technologies)))

  const handleFilterChange = (filters: FilterOptions) => {
    const filtered = projects.filter(project => {
      const matchesSearch = !filters.search || 
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase())
      
      const matchesCategory = !filters.category || project.category === filters.category
      
      const matchesTags = filters.tags.length === 0 || 
        filters.tags.some(tag => project.technologies.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })

    setFilteredProjects(filtered)
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
            <Folder className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Projects</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects spanning web development, mobile apps, 
            AI/ML solutions, and more. Each project showcases our technical expertise and creativity.
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
            Showing {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
