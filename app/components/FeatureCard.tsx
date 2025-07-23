import React from 'react';
'use client'

import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 rounded-2xl p-8 hover:shadow-2xl"
    >
      <div className="text-white w-16 h-16 rounded-2xl flex mb-6 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
