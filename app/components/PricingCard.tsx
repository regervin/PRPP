'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  index: number
}

export default function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular, 
  index 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
        popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
            : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
        }`}
      >
        {popular ? 'Start Free Trial' : 'Choose Plan'}
      </motion.button>
    </motion.div>
  )
}
