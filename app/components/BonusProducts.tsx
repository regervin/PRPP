'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Gift, 
  Mail, 
  FileText, 
  Video, 
  BookOpen, 
  Target,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  X,
  Search,
  BarChart3,
  MessageSquare,
  Globe,
  Smartphone,
  ShoppingCart,
  PenTool,
  Camera,
  Headphones
} from 'lucide-react'

interface BonusProduct {
  id: string
  title: string
  description: string
  value: string
  icon: React.ReactNode
  features: string[]
}

export default function BonusProducts() {
  const [selectedBonus, setSelectedBonus] = useState<BonusProduct | null>(null)

  const bonusProducts: BonusProduct[] = [
    {
      id: 'email-sequences',
      title: 'Email Marketing Sequences',
      description: 'Pre-written email campaigns that convert browsers into buyers',
      value: '$197',
      icon: <Mail className="w-6 h-6" />,
      features: [
        '7-day welcome sequence',
        'Product launch campaigns',
        'Re-engagement sequences',
        'Seasonal promotions',
        'Abandoned cart recovery'
      ]
    },
    {
      id: 'landing-pages',
      title: 'High-Converting Landing Pages',
      description: 'Complete landing page templates optimized for affiliate conversions',
      value: '$297',
      icon: <FileText className="w-6 h-6" />,
      features: [
        'Product review landing pages',
        'Comparison page templates',
        'Bonus stack pages',
        'Squeeze page designs',
        'Thank you page templates'
      ]
    },
    {
      id: 'video-scripts',
      title: 'Video Sales Scripts',
      description: 'Proven video scripts for YouTube reviews and sales videos',
      value: '$147',
      icon: <Video className="w-6 h-6" />,
      features: [
        'YouTube review scripts',
        'VSL templates',
        'Unboxing video scripts',
        'Comparison video outlines',
        'Tutorial video frameworks'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600 font-semibold text-lg">EXCLUSIVE BONUSES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get These <span className="text-purple-600">$2,847 Worth</span> of Bonuses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you get Review Profits Pro today, you'll also receive these powerful bonus tools 
            to supercharge your affiliate marketing success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bonusProducts.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedBonus(bonus)}
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {bonus.value}
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {bonus.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {bonus.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {bonus.description}
              </p>

              <div className="space-y-2">
                {bonus.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {bonus.features.length > 3 && (
                  <div className="text-sm text-purple-600 font-medium">
                    +{bonus.features.length - 3} more features
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Total Bonus Value</h3>
          <div className="text-5xl font-bold mb-4">$2,847</div>
          <p className="text-purple-100 text-lg mb-6">
            All these bonuses are included FREE when you get Review Profits Pro today!
          </p>
          <div className="flex items-center justify-center gap-4 text-purple-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Extra Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
