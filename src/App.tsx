import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ReviewGenerator from './components/ReviewGenerator'

function App() {
  const [showGenerator, setShowGenerator] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header onShowGenerator={() => setShowGenerator(true)} />
      <Hero onShowGenerator={() => setShowGenerator(true)} />
      <Features />
      <Pricing />
      
      {showGenerator && (
        <ReviewGenerator onClose={() => setShowGenerator(false)} />
      )}
    </div>
  )
}

export default App
