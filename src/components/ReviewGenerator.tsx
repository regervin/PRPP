import React, { useState } from 'react'

interface ReviewGeneratorProps {
  onClose: () => void
}

export default function ReviewGenerator({ onClose }: ReviewGeneratorProps) {
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
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Review Generator</h2>
              <p className="text-gray-600">Transform any product page into a compelling review</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex">
            {[
              { num: 1, label: 'Input URL' },
              { num: 2, label: 'Analyze Page' },
              { num: 3, label: 'Configure' },
              { num: 4, label: 'Generate' }
            ].map(({ num, label }) => (
              <div key={num} className="flex">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > num ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    num
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step >= num ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {label}
                </span>
                {num < 4 && <div className="w-8 bg-gray-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Sales Page URL
                </label>
                <div className="relative">
                  <svg className="absolute left-3 transform text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com/product-page"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
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
            <div className="space-y-6 animate-slide-up">
              {/* Product Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Product Detected:</h3>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg flex">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{productData.title}</h4>
                    <p className="text-blue-600 font-semibold">{productData.price}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(productData.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
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
            <div className="space-y-6 animate-slide-up">
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
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
