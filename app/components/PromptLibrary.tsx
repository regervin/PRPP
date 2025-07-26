'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Copy, 
  Search, 
  Filter,
  Star,
  Zap,
  Target,
  Mail,
  Video,
  Users,
  TrendingUp,
  X,
  CheckCircle
} from 'lucide-react'

interface Prompt {
  id: string
  title: string
  category: string
  description: string
  prompt: string
  tags: string[]
}

export default function PromptLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)

  const prompts: Prompt[] = [
    {
      id: 'product-review',
      title: 'Comprehensive Product Review',
      category: 'reviews',
      description: 'Generate detailed, authentic product reviews that convert',
      tags: ['affiliate', 'review', 'conversion'],
      prompt: `Write a comprehensive product review for [PRODUCT NAME].

Product Details:
- Product: [PRODUCT NAME]
- Price: [PRICE]
- Target Audience: [DESCRIBE AUDIENCE]
- Key Features: [LIST 3-5 FEATURES]
- Main Benefits: [LIST 3-5 BENEFITS]

Review Structure:
1. Attention-grabbing introduction with personal hook
2. What the product is and who it's for
3. Detailed feature breakdown with real-world examples
4. Honest pros and cons analysis
5. Personal experience or case study
6. Comparison with alternatives
7. Final verdict and recommendation
8. Clear call-to-action with bonus offer

Tone: Conversational, honest, and helpful
Length: 1500-2000 words
Include: SEO keywords naturally throughout`
    },
    {
      id: 'email-sequence',
      title: 'High-Converting Email Sequence',
      category: 'email',
      description: 'Create email campaigns that nurture and convert subscribers',
      tags: ['email', 'sequence', 'nurture'],
      prompt: `Create a 5-email sequence for [PRODUCT NAME].

Product: [PRODUCT NAME]
Audience: [TARGET AUDIENCE]
Main Benefit: [PRIMARY BENEFIT]
Price: [PRICE POINT]

Email 1 - Welcome & Value (Day 1)
Subject: Welcome! Here's your first gift...
- Welcome new subscriber
- Deliver promised lead magnet
- Set expectations for sequence
- Provide immediate value

Email 2 - Problem Agitation (Day 3)
Subject: The hidden cost of [PROBLEM]...
- Identify core problem
- Share relatable story
- Agitate pain points
- Hint at solution

Email 3 - Solution Introduction (Day 5)
Subject: How I solved [PROBLEM] in [TIMEFRAME]
- Introduce your solution
- Share transformation story
- Explain methodology
- Build credibility

Email 4 - Social Proof (Day 7)
Subject: "This changed everything for me..."
- Customer testimonials
- Case studies and results
- Address common objections
- Create urgency

Email 5 - Final Offer (Day 10)
Subject: Last chance - doors close tonight
- Present main offer
- Stack value and bonuses
- Create scarcity
- Strong call-to-action

Include specific subject lines and key talking points for each email.`
    }
  ]

  const categories = [
    { id: 'all', name: 'All Prompts', count: prompts.length },
    { id: 'reviews', name: 'Product Reviews', count: prompts.filter(p => p.category === 'reviews').length },
    { id: 'email', name: 'Email Marketing', count: prompts.filter(p => p.category === 'email').length }
  ]

  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Prompt copied to clipboard!')
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <span className="text-orange-600 font-semibold text-lg">AI PROMPT LIBRARY</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            📚 Professional <span className="text-orange-600">AI Prompts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Copy and paste these proven AI prompts to create high-converting content for your affiliate marketing campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrompts.map((prompt, index) => (
            <div
              key={prompt.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
              onClick={() => setSelectedPrompt(prompt)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  {prompt.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {prompt.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {prompt.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {prompt.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  copyToClipboard(prompt.prompt)
                }}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Prompt
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
