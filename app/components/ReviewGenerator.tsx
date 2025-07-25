'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Globe, 
  Zap, 
  Copy, 
  Download, 
  Star,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface ReviewGeneratorProps {
  onClose: () => void
}

export default function ReviewGenerator({ onClose }: ReviewGeneratorProps) {
  const [url, setUrl] = useState('')
  const [reviewType, setReviewType] = useState('detailed')
  const [tone, setTone] = useState('professional')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedReview, setGeneratedReview] = useState('')
  const [productInfo, setProductInfo] = useState<any>(null)
  const [step, setStep] = useState(1)

  const reviewTypes = [
    { id: 'detailed', name: 'Detailed Review', description: 'Comprehensive analysis with pros/cons' },
    { id: 'quick', name: 'Quick Review', description: 'Concise overview for busy readers' },
    { id: 'comparison', name: 'Comparison Review', description: 'Compare with similar products' },
    { id: 'buyer-guide', name: 'Buyer\'s Guide', description: 'Help readers make decisions' }
  ]

  const tones = [
    { id: 'professional', name: 'Professional', description: 'Authoritative and trustworthy' },
    { id: 'casual', name: 'Casual', description: 'Friendly and conversational' },
    { id: 'enthusiastic', name: 'Enthusiastic', description: 'Excited and energetic' },
    { id: 'critical', name: 'Critical', description: 'Balanced with honest critique' }
  ]

  const handleAnalyze = async () => {
    if (!url) return
    
    setIsGenerating(true)
    setStep(2)
    
    // Simulate API call to analyze the product page
    setTimeout(() => {
      setProductInfo({
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
        pros: [
          "Exceptional sound quality",
          "Comfortable for long sessions",
          "Excellent noise cancellation",
          "Long battery life"
        ],
        cons: [
          "Premium price point",
          "Bulky design",
          "Limited color options"
        ]
      })
      setStep(3)
      setIsGenerating(false)
    }, 3000)
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    setStep(4)
    
    // Simulate review generation
    setTimeout(() => {
      setGeneratedReview(`# Premium Wireless Noise-Canceling Headphones Review

## Overview
After extensively testing the Premium Wireless Noise-Canceling Headphones for over two weeks, I can confidently say these headphones deliver on their promise of premium audio quality and comfort. Priced at $299.99, they position themselves in the high-end market segment, competing directly with industry leaders.

## Key Features That Stand Out

### 🎵 **Exceptional Sound Quality**
The Hi-Res Audio certification isn't just marketing fluff. These headphones reproduce audio with remarkable clarity across all frequencies. The bass is punchy without being overwhelming, mids are crystal clear, and highs are crisp without any harshness.

### 🔇 **Active Noise Cancellation**
The ANC technology is truly impressive. Whether you're on a busy street, in a coffee shop, or on an airplane, these headphones create a peaceful bubble around you. The noise cancellation adapts intelligently to your environment.

### 🔋 **Outstanding Battery Life**
The claimed 30-hour battery life is accurate in real-world usage. Even with ANC enabled, I consistently got 28-30 hours of playback. The quick charge feature gives you 5 hours of playback with just 15 minutes of charging.

## Pros and Cons

### ✅ **What I Loved**
- **Comfort**: The premium leather ear cups are incredibly comfortable, even during 8+ hour sessions
- **Build Quality**: Solid construction that feels like it will last for years
- **Sound Isolation**: Perfect for focus work or travel
- **Intuitive Controls**: Easy-to-use touch controls that actually work reliably

### ❌ **Areas for Improvement**
- **Price**: At $299.99, they're definitely an investment
- **Size**: Bulkier than some competitors, less portable
- **Color Options**: Limited to black and silver only

## Who Should Buy These?

These headphones are perfect for:
- **Professionals** who need focus in noisy environments
- **Travelers** who want premium comfort and noise isolation
- **Audiophiles** seeking high-quality sound reproduction
- **Content Creators** who need reliable audio for long sessions

## Final Verdict

**Rating: ⭐⭐⭐⭐⭐ (4.5/5)**

The Premium Wireless Noise-Canceling Headphones justify their premium price with exceptional performance across all key areas. While they're not the cheapest option, the combination of sound quality, comfort, and battery life makes them a worthwhile investment for serious users.

**Bottom Line**: If you're looking for headphones that excel in every category and don't mind paying for quality, these are an excellent choice. However, if budget is a primary concern, you might want to consider more affordable alternatives.

---

*Disclaimer: This review is based on personal testing and experience. Individual results may vary.*`)
      setIsGenerating(false)
    }, 4000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReview)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">AI Review Generator</h2>
                <p className="text-blue-100">Transform any product page into a compelling review</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center mt-6 space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNum ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-12 h-1 mx-2 ${
                      step > stepNum ? 'bg-white' : 'bg-blue-500'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Sales Page URL
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com/product-page"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Review Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {reviewTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setReviewType(type.id)}
                        className={`p-4 border rounded-lg text-left transition-all ${
                          reviewType === type.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{type.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Writing Tone
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {tones.map((toneOption) => (
                      <button
                        key={toneOption.id}
                        onClick={() => setTone(toneOption.id)}
                        className={`p-4 border rounded-lg text-left transition-all ${
                          tone === toneOption.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{toneOption.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{toneOption.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Analyze Product Page
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-12"
              >
                <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Product Page</h3>
                <p className="text-gray-600">Our AI is extracting key information from the sales page...</p>
                <div className="mt-6 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Page content extracted</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                    <span>Identifying key features...</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 opacity-50">
                    <Clock className="w-4 h-4" />
                    <span>Analyzing pricing and benefits</span>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && productInfo && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Analysis Complete!</span>
                  </div>
                  <p className="text-green-600 text-sm">
                    We've successfully extracted all the key information from the product page.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{productInfo.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {productInfo.features.map((feature: string, index: number) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-green-600">{productInfo.price}</span>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(productInfo.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            ({productInfo.rating}/5)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Generate Review
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {isGenerating ? (
                  <div className="text-center py-12">
                    <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Review</h3>
                    <p className="text-gray-600">Creating a compelling, SEO-optimized review...</p>
                    <div className="mt-6 space-y-2 text-sm text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Structuring content</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Writing introduction</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                        <span>Analyzing pros and cons...</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 opacity-50">
                        <Clock className="w-4 h-4" />
                        <span>Finalizing review</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-green-700 mb-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Review Generated Successfully!</span>
                      </div>
                      <p className="text-green-600 text-sm">
                        Your professional product review is ready. Copy it and use it on your website or blog.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Generated Review</h3>
                        <div className="flex gap-2">
                          <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                            Copy
                          </button>
                          <button className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto border">
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                          {generatedReview}
                        </pre>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setStep(1)
                          setGeneratedReview('')
                          setProductInfo(null)
                          setUrl('')
                        }}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Generate Another
                      </button>
                      <button
                        onClick={onClose}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Done
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
