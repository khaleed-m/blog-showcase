'use client'

import { useState, useEffect } from 'react'

interface BookmarkButtonProps {
  itemId: string
  itemType: 'blog' | 'project'
  className?: string
}

export default function BookmarkButton({ itemId, itemType, className = '' }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.includes(`${itemType}-${itemId}`))
  }, [itemId, itemType])

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)

    const bookmarkKey = `${itemType}-${itemId}`
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter((bookmark: string) => bookmark !== bookmarkKey)
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      setIsBookmarked(false)
    } else {
      const updatedBookmarks = [...bookmarks, bookmarkKey]
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      setIsBookmarked(true)
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`group relative p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${className}`}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <div className={`w-6 h-6 transition-all duration-300 ${isAnimating ? 'animate-bounce' : ''}`}>
        {isBookmarked ? (
          <svg
            className="w-6 h-6 text-yellow-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </div>
      
      {/* Sparkle effect */}
      {isBookmarked && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        </div>
      )}
    </button>
  )
}
