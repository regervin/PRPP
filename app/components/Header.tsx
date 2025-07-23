'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Star, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          {/* Logo */}
          <div className="flex">
            <div className="p-2 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent">
              Review Profits Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              How It Works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 flex gap-2">
              <Zap className="w-4 h-4" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                Pricing
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                How It Works
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 font-medium mb-3 block">
                  Sign In
                </button>
                <button className="text-white px-6 py-2 rounded-lg font-medium w-full flex gap-2">
                  <Zap className="w-4 h-4" />
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
