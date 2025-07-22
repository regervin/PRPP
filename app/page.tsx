'use client'

import { useState } from 'react'
import { 
  Star, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes product sales pages to extract key features, benefits, and selling points automatically."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Reviews",
      description: "Generate reviews tailored to specific audiences and niches for maximum conversion potential."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Reviews are optimized for search engines with relevant keywords and proper structure."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentic Tone",
      description: "Creates genuine, trustworthy reviews that don't sound robotic or overly promotional."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Generation",
      description: "Generate comprehensive product reviews in seconds, not hours of manual writing."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Multiple Formats",
      description: "Choose from various review formats: detailed, quick, comparison, pros/cons, and more."
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16">
            {/* Logo */}
            <div className="flex">
              <div className="p-2 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Review Profits Pro
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
              <a href="#examples" className="text-gray-600 hover:text-blue-600">
                Examples
              </a>
              <a href="#support" className="text-gray-600 hover:text-blue-600">
                Support
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex">
              <button className="text-gray-600 hover:text-blue-600">
                Sign In
              </button>
              <button className="text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col">
                <a href="#features" className="text-gray-600 hover:text-blue-600">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                  Pricing
                </a>
                <a href="#examples" className="text-gray-600 hover:text-blue-600">
                  Examples
                </a>
                <a href="#support" className="text-gray-600 hover:text-blue-600">
                  Support
                </a>
                <div className="flex flex-col pt-4 border-t border-gray-200">
                  <button className="text-gray-600 hover:text-blue-600">
                    Sign In
                  </button>
                  <button className="text-white px-6 py-2 rounded-lg font-medium">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Product Review
              <span className="text-transparent">
                {" "}Profits Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 mx-auto">
              Transform any product sales page into compelling, authentic reviews that convert visitors into buyers using advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowGenerator(true)}
                className="text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl flex gap-2 hover:scale-105"
              >
                Try Free Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Reviews Generated" },
              { number: "2.5x", label: "Average Conversion Boost" },
              { number: "15min", label: "Time Saved Per Review" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-blue-600"> Maximum Results</span>
            </h2>
            <p className="text-xl text-gray-600 mx-auto">
              Everything you need to create high-converting product reviews that drive sales and build trust with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg flex text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="text-blue-600"> Success Plan</span>
            </h2>
            <p className="text-xl text-gray-600 mx-auto">
              Start generating profitable reviews today with our flexible pricing options designed for every level of marketer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                  plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute transform">
                    <div className="text-white px-6 py-2 rounded-full text-sm font-semibold flex gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to 10x Your Review Writing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful affiliate marketers who are already using Product Review Profits Pro to generate more sales.
            </p>
            <button
              onClick={() => setShowGenerator(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl flex gap-2 mx-auto hover:scale-105"
            >
              Start Your Free Trial <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Review Generator Modal */}
      {showGenerator && (
        <ReviewGenerator onClose={() => setShowGenerator(false)} />
      )}
    </div>
  )
}

// Review Generator Component
function ReviewGenerator({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState('')
  const [reviewType, setReviewType] = useState('detailed')
  const [tone, setTone] = useState('professional')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedReview, setGeneratedReview] = useState('')
  const [productData, setProductData] = useState<any>(null)
  const [step, setStep] = useState(1)

  const reviewTypes = [
    { id: 'detailed', name: 'Detailed Review', description: 'Comprehensive analysis with pros/cons' },
    { id: 'quick', name: 'Quick Review', description: 'Concise overview for busy readers' },
    { id: 'comparison', name: 'Comparison Review', description: 'Compare with similar products' },
    { id: 'buyer-guide', name: 'Buyer\'s Guide', description: 'Educational review format' }
  ]

  const toneOptions = [
    { id: 'professional', name: 'Professional', description: 'Authoritative and trustworthy' },
    { id: 'casual', name: 'Casual', description: 'Friendly and conversational' },
    { id: 'enthusiastic', name: 'Enthusiastic', description: 'Excited and energetic' },
    { id: 'skeptical', name: 'Skeptical', description: 'Critical and analytical' }
  ]

  const handleAnalyze = async () => {
    if (!url) return
    
    setIsGenerating(true)
    setStep(2)
    
    // Simulate API call to analyze the product page
    setTimeout(() => {
      setProductData({
        title: "Premium Wireless Noise-Canceling Headphones",
        price: "$299.99",
        rating: 4.5,
        features: [
          "Active Noise Cancellation",
          "30-hour battery life",
          "Premium leather comfort",
          "Hi-Res Audio certified",
          "Quick charge technology"
        ],
        benefits: [
          "Block out distractions completely",
          "All-day listening comfort",
          "Studio-quality sound",
          "Perfect for travel and work"
        ],
        description: "Experience unparalleled audio quality with our premium wireless headphones featuring industry-leading noise cancellation technology."
      })
      setStep(3)
      setIsGenerating(false)
    }, 3000)
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // Simulate review generation
    setTimeout(() => {
      setGeneratedReview(`# ${productData.title} Review: Worth Every Penny?

## Quick Verdict ⭐⭐⭐⭐⭐
After extensive testing, these headphones deliver exceptional value at $299.99. The combination of superior noise cancellation, premium build quality, and outstanding battery life makes them a top choice for audiophiles and frequent travelers.

## What Makes These Headphones Special?

### Outstanding Features
- **Active Noise Cancellation**: Industry-leading technology that blocks 95% of ambient noise
- **30-Hour Battery Life**: Unmatched endurance for long flights and extended use
- **Premium Materials**: Genuine leather ear cups and durable metal construction
- **Hi-Res Audio**: Certified for studio-quality sound reproduction
- **Quick Charge**: 15 minutes charging provides 3 hours of playback

### Real-World Performance
During my 2-week testing period, these headphones consistently impressed. The noise cancellation is remarkably effective - perfect for airplane travel and noisy offices. Sound quality is crisp and balanced across all frequencies.

## Pros & Cons

### ✅ Pros
- Exceptional noise cancellation
- Comfortable for extended wear
- Outstanding battery life
- Premium build quality
- Quick charging capability

### ❌ Cons
- Premium price point
- Slightly heavy for some users
- Limited color options

## Who Should Buy These?
Perfect for:
- Frequent travelers
- Remote workers in noisy environments
- Audiophiles seeking premium quality
- Anyone wanting the best noise cancellation

## Final Recommendation
At $299.99, these headphones represent excellent value for the features provided. The combination of comfort, sound quality, and noise cancellation justifies the investment. **Highly recommended** for anyone serious about audio quality.

**Rating: 4.5/5 stars**`)
      
      setStep(4)
      setIsGenerating(false)
    }, 4000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReview)
  }

  return (
    <div className="fixed inset-0 z-50 flex p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex p-6 border-b border-gray-200">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Review Generator</h2>
              <p className="text-gray-600">Transform any product page into a compelling review</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Sales Page URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/product-page"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter the URL of the product sales page you want to review
                </p>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!url || isGenerating}
                className="w-full text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
              >
                Analyze Product Page
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="py-12">
              <div className="w-12 h-12 border-4 border-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Product Page</h3>
              <p className="text-gray-600">Our AI is extracting key information from the sales page...</p>
            </div>
          )}

          {step === 3 && productData && (
            <div className="space-y-6">
              {/* Product Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Product Detected:</h3>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg flex">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{productData.title}</h4>
                    <p className="text-blue-600 font-semibold">{productData.price}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(productData.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({productData.rating})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Review Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reviewTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setReviewType(type.id)}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        reviewType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{type.name}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Writing Tone</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {toneOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setTone(option.id)}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        tone === option.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg"
              >
                Generate Review
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              {isGenerating ? (
                <div className="py-12">
                  <div className="w-12 h-12 border-4 border-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Review</h3>
                  <p className="text-gray-600">Creating your professional product review...</p>
                </div>
              ) : (
                <>
                  <div className="flex">
                    <h3 className="text-xl font-semibold text-gray-900">Generated Review</h3>
                    <button
                      onClick={copyToClipboard}
                      className="flex gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      Copy Review
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-800">
                      {generatedReview}
                    </pre>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50"
                    >
                      Generate Another
                    </button>
                    <button className="flex-1 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg">
                      Save Review
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
