'use client'

import { useState } from 'react'

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false)
  const [url, setUrl] = useState('')
  const [reviewType, setReviewType] = useState('detailed')
  const [tone, setTone] = useState('professional')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedReview, setGeneratedReview] = useState('')
  const [step, setStep] = useState(1)

  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes product sales pages to extract key features, benefits, and selling points automatically.",
      icon: "⚡"
    },
    {
      title: "Targeted Reviews",
      description: "Generate reviews tailored to specific audiences and niches for maximum conversion potential.",
      icon: "🎯"
    },
    {
      title: "SEO Optimized",
      description: "Reviews are optimized for search engines with relevant keywords and proper structure.",
      icon: "📈"
    },
    {
      title: "Authentic Tone",
      description: "Creates genuine, trustworthy reviews that don't sound robotic or overly promotional.",
      icon: "🛡️"
    },
    {
      title: "Instant Generation",
      description: "Generate comprehensive product reviews in seconds, not hours of manual writing.",
      icon: "⏱️"
    },
    {
      title: "Multiple Formats",
      description: "Choose from various review formats: detailed, quick, comparison, pros/cons, and more.",
      icon: "✨"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners",
      features: [
        "50 reviews per month",
        "Basic AI analysis",
        "3 review formats",
        "Email support",
        "SEO optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "For serious marketers",
      features: [
        "200 reviews per month",
        "Advanced AI analysis",
        "All review formats",
        "Priority support",
        "Advanced SEO tools",
        "Bulk processing",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For agencies & teams",
      features: [
        "Unlimited reviews",
        "Premium AI models",
        "White-label solution",
        "24/7 phone support",
        "API access",
        "Team collaboration",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: false
    }
  ]

  const handleGenerate = async () => {
    if (!url) return
    
    setIsGenerating(true)
    setStep(2)
    
    // Simulate analysis
    setTimeout(() => {
      setStep(3)
      setTimeout(() => {
        setGeneratedReview(`# Premium Wireless Noise-Canceling Headphones Review

## Overview
After extensively testing the Premium Wireless Noise-Canceling Headphones for over two weeks, I can confidently say these headphones deliver on their promise of premium audio quality and comfort. Priced at $299.99, they position themselves in the high-end market segment.

## Key Features That Stand Out

### 🎵 **Exceptional Sound Quality**
The Hi-Res Audio certification isn't just marketing fluff. These headphones reproduce audio with remarkable clarity across all frequencies. The bass is punchy without being overwhelming, mids are crystal clear, and highs are crisp without any harshness.

### 🔇 **Active Noise Cancellation**
The ANC technology is truly impressive. Whether you're on a busy street, in a coffee shop, or on an airplane, these headphones create a peaceful bubble around you.

### 🔋 **Outstanding Battery Life**
The claimed 30-hour battery life is accurate in real-world usage. Even with ANC enabled, I consistently got 28-30 hours of playback.

## Pros and Cons

### ✅ **What I Loved**
- **Comfort**: The premium leather ear cups are incredibly comfortable
- **Build Quality**: Solid construction that feels like it will last for years
- **Sound Isolation**: Perfect for focus work or travel
- **Intuitive Controls**: Easy-to-use touch controls that actually work

### ❌ **Areas for Improvement**
- **Price**: At $299.99, they're definitely an investment
- **Size**: Bulkier than some competitors, less portable
- **Color Options**: Limited to black and silver only

## Final Verdict

**Rating: ⭐⭐⭐⭐⭐ (4.5/5)**

The Premium Wireless Noise-Canceling Headphones justify their premium price with exceptional performance across all key areas. While they're not the cheapest option, the combination of sound quality, comfort, and battery life makes them a worthwhile investment.

**Bottom Line**: If you're looking for headphones that excel in every category and don't mind paying for quality, these are an excellent choice.`)
        setStep(4)
        setIsGenerating(false)
      }, 3000)
    }, 2000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReview)
    alert('Review copied to clipboard!')
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        padding: '16px 20px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              padding: '8px', 
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold'
            }}>
              ⭐
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a202c' }}>
              Review Profits Pro
            </span>
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#pricing" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
            <button className="btn btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Product Review<br />Profits Pro</h1>
        <p>
          Transform any product sales page into compelling, high-converting reviews with our AI-powered review generator. 
          <strong style={{ color: '#667eea' }}> Boost your affiliate commissions today!</strong>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-primary"
            onClick={() => setShowGenerator(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Try Free Demo →
          </button>
          <button className="btn btn-secondary">View Pricing</button>
        </div>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.875rem', color: '#666' }}>
          <span>✅ No credit card required</span>
          <span>✅ Generate 3 reviews free</span>
          <span>✅ Cancel anytime</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-title">
          <h2>Why Choose <span style={{ color: '#667eea' }}>Review Profits Pro?</span></h2>
          <p>Our advanced AI technology analyzes product sales pages and creates authentic, high-converting reviews that drive real results.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#1a202c' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div className="section-title">
          <h2>How It <span style={{ color: '#764ba2' }}>Works</span></h2>
          <p>Generate professional product reviews in just 3 simple steps</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { step: "01", title: "Paste Product URL", description: "Simply paste the sales page URL of any product you want to review", icon: "🎯" },
            { step: "02", title: "AI Analysis", description: "Our AI analyzes the page content, features, benefits, and pricing", icon: "⚡" },
            { step: "03", title: "Get Your Review", description: "Receive a comprehensive, SEO-optimized review ready to publish", icon: "⭐" }
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white', 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#667eea', marginBottom: '8px' }}>
                STEP {item.step}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '12px', color: '#1a202c' }}>
                {item.title}
              </h3>
              <p style={{ color: '#666' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-title">
          <h2>Choose Your <span style={{ color: '#667eea' }}>Plan</span></h2>
          <p>Start free, scale as you grow. All plans include our core AI review generation features.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>
                {plan.name}
              </h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>{plan.description}</p>
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontSize: '3rem', fontWeight: '700', color: '#1a202c' }}>{plan.price}</span>
                <span style={{ color: '#666' }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px', textAlign: 'left' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#10b981' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px' }}>
          Ready to 10X Your Affiliate Revenue?
        </h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Join thousands of successful affiliate marketers who are already using Product Review Profits Pro.
        </p>
        <button 
          className="btn"
          onClick={() => setShowGenerator(true)}
          style={{ 
            background: 'white', 
            color: '#667eea', 
            padding: '16px 32px',
            fontSize: '1.125rem'
          }}
        >
          Start Your Free Trial →
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a202c', color: 'white', padding: '48px 20px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Product Review Profits Pro</h3>
        <p style={{ color: '#a0aec0', marginBottom: '24px' }}>
          The ultimate AI-powered review generator for affiliate marketers
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ paddingTop: '32px', borderTop: '1px solid #2d3748', color: '#a0aec0', fontSize: '0.875rem' }}>
          © 2024 Product Review Profits Pro. All rights reserved.
        </div>
      </footer>

      {/* Review Generator Modal */}
      {showGenerator && (
        <div className="modal" onClick={() => setShowGenerator(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: '24px',
              borderRadius: '12px 12px 0 0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px' }}>AI Review Generator</h2>
                  <p style={{ opacity: 0.9 }}>Transform any product page into a compelling review</p>
                </div>
                <button 
                  onClick={() => setShowGenerator(false)}
                  style={{ 
                    background: 'rgba(255,255,255,0.2)', 
                    border: 'none', 
                    color: 'white', 
                    padding: '8px', 
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Progress Steps */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px', gap: '16px' }}>
                {[1, 2, 3, 4].map((stepNum) => (
                  <div key={stepNum} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      background: step >= stepNum ? 'white' : 'rgba(255,255,255,0.3)',
                      color: step >= stepNum ? '#667eea' : 'white'
                    }}>
                      {step > stepNum ? '✓' : stepNum}
                    </div>
                    {stepNum < 4 && (
                      <div style={{
                        width: '48px',
                        height: '4px',
                        marginLeft: '8px',
                        background: step > stepNum ? 'white' : 'rgba(255,255,255,0.3)',
                        borderRadius: '2px'
                      }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '32px' }}>
              {step === 1 && (
                <div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      Product Sales Page URL
                    </label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com/product-page"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '12px', color: '#374151' }}>
                      Review Type
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                      {[
                        { id: 'detailed', name: 'Detailed Review', desc: 'Comprehensive analysis with pros/cons' },
                        { id: 'quick', name: 'Quick Review', desc: 'Concise overview for busy readers' },
                        { id: 'comparison', name: 'Comparison Review', desc: 'Compare with similar products' },
                        { id: 'buyer-guide', name: 'Buyer\'s Guide', desc: 'Help readers make decisions' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setReviewType(type.id)}
                          style={{
                            padding: '16px',
                            border: `2px solid ${reviewType === type.id ? '#667eea' : '#e5e7eb'}`,
                            borderRadius: '8px',
                            background: reviewType === type.id ? '#f0f4ff' : 'white',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ fontWeight: '500', color: reviewType === type.id ? '#667eea' : '#374151' }}>
                            {type.name}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '4px' }}>
                            {type.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '12px', color: '#374151' }}>
                      Writing Tone
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                      {[
                        { id: 'professional', name: 'Professional', desc: 'Authoritative and trustworthy' },
                        { id: 'casual', name: 'Casual', desc: 'Friendly and conversational' },
                        { id: 'enthusiastic', name: 'Enthusiastic', desc: 'Excited and energetic' },
                        { id: 'critical', name: 'Critical', desc: 'Balanced with honest critique' }
                      ].map((toneOption) => (
                        <button
                          key={toneOption.id}
                          onClick={() => setTone(toneOption.id)}
                          style={{
                            padding: '16px',
                            border: `2px solid ${tone === toneOption.id ? '#764ba2' : '#e5e7eb'}`,
                            borderRadius: '8px',
                            background: tone === toneOption.id ? '#faf5ff' : 'white',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ fontWeight: '500', color: tone === toneOption.id ? '#764ba2' : '#374151' }}>
                            {toneOption.name}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '4px' }}>
                            {toneOption.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={!url}
                    className="btn btn-primary"
                    style={{ 
                      width: '100%', 
                      padding: '16px',
                      opacity: !url ? 0.5 : 1,
                      cursor: !url ? 'not-allowed' : 'pointer'
                    }}
                  >
                    ⚡ Analyze Product Page
                  </button>
                </div>
              )}

              {step === 2 && (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔄</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Analyzing Product Page
                  </h3>
                  <p style={{ color: '#6b7280' }}>Our AI is extracting key information from the sales page...</p>
                  <div style={{ marginTop: '24px', textAlign: 'left', maxWidth: '300px', margin: '24px auto 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
                      <span>✓</span> <span style={{ fontSize: '0.875rem' }}>Page content extracted</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#667eea' }}>
                      <span>🔄</span> <span style={{ fontSize: '0.875rem' }}>Identifying key features...</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
                      <span>⏱️</span> <span style={{ fontSize: '0.875rem' }}>Analyzing pricing and benefits</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔄</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Generating Your Review
                  </h3>
                  <p style={{ color: '#6b7280' }}>Creating a compelling, SEO-optimized review...</p>
                  <div style={{ marginTop: '24px', textAlign: 'left', maxWidth: '300px', margin: '24px auto 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
                      <span>✓</span> <span style={{ fontSize: '0.875rem' }}>Structuring content</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
                      <span>✓</span> <span style={{ fontSize: '0.875rem' }}>Writing introduction</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#667eea' }}>
                      <span>🔄</span> <span style={{ fontSize: '0.875rem' }}>Analyzing pros and cons...</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
                      <span>⏱️</span> <span style={{ fontSize: '0.875rem' }}>Finalizing review</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <div style={{ 
                    background: '#f0fdf4', 
                    border: '1px solid #bbf7d0', 
                    borderRadius: '8px', 
                    padding: '16px', 
                    marginBottom: '24px' 
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803d', marginBottom: '8px' }}>
                      <span>✓</span>
                      <span style={{ fontWeight: '500' }}>Review Generated Successfully!</span>
                    </div>
                    <p style={{ color: '#166534', fontSize: '0.875rem' }}>
                      Your professional product review is ready. Copy it and use it on your website or blog.
                    </p>
                  </div>

                  <div style={{ 
                    background: '#f9fafb', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ fontWeight: '500', color: '#374151' }}>Generated Review</h3>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={copyToClipboard}
                          style={{
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          📋 Copy
                        </button>
                        <button
                          style={{
                            background: '#10b981',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          💾 Download
                        </button>
                      </div>
                    </div>
                    <div style={{ 
                      background: 'white', 
                      borderRadius: '6px', 
                      padding: '16px', 
                      maxHeight: '400px', 
                      overflowY: 'auto',
                      border: '1px solid #e5e7eb',
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {generatedReview}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                      onClick={() => {
                        setStep(1)
                        setGeneratedReview('')
                        setUrl('')
                      }}
                      style={{
                        flex: 1,
                        border: '2px solid #d1d5db',
                        background: 'white',
                        color: '#374151',
                        padding: '12px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Generate Another
                    </button>
                    <button
                      onClick={() => setShowGenerator(false)}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '12px' }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
