'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail('')

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  if (isSubscribed) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-600 dark:text-green-300 text-sm">
          You'll receive our latest updates and insights.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="text-center mb-6">
        <Mail className="w-10 h-10 mx-auto mb-3 opacity-90" />
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100">
          Get the latest blogs, project updates, and tech insights delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {isSubmitting ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-blue-100 text-center">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </form>
    </div>
  )
}
