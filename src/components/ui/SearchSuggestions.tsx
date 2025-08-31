'use client'

import { useState, useEffect } from 'react'

interface SearchSuggestionsProps {
  searchTerm: string
  onSuggestionClick: (suggestion: string) => void
  suggestions: string[]
}

export default function SearchSuggestions({ searchTerm, onSuggestionClick, suggestions }: SearchSuggestionsProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
      setFilteredSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }, [searchTerm, suggestions])

  if (!showSuggestions) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl shadow-xl border border-white/20 dark:border-gray-700/20 z-10 overflow-hidden">
      {filteredSuggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => {
            onSuggestionClick(suggestion)
            setShowSuggestions(false)
          }}
          className="w-full px-4 py-3 text-left hover:bg-white/10 dark:hover:bg-gray-800/10 transition-colors duration-200 flex items-center gap-3 group"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {suggestion}
          </span>
        </button>
      ))}
    </div>
  )
}
