import React from 'react';
'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
}

export default function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute transform">
          <div className="text-white px-6 py-2 rounded-full text-sm font-semibold flex gap-2">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">{period}</span>
        </div>
      </div>

      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  )
}
