'use client'

import { useState } from 'react'
import Header from './components/Header'
import FeatureCard from './components/FeatureCard'
import PricingCard from './components/PricingCard'
import ReviewGenerator from './components/ReviewGenerator'
import BonusProducts from './components/BonusProducts'
import PromptLibrary from './components/PromptLibrary'
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Gift,
  Mail,
  BookOpen
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false)
  const [showEmailGenerator, setShowEmailGenerator] = useState(false)

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes product sales pages to extract key features, benefits, and selling points automatically."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Reviews",
      description: "Generate reviews tailored to specific audiences and niches for maximum conversion potential."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Reviews are optimized for search engines with relevant keywords and proper structure."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentic Tone",
      description: "Creates genuine, trustworthy reviews that don't sound robotic or overly promotional."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Generation",
      description: "Generate comprehensive product reviews in seconds, not hours of manual writing."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
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
        "SEO optimization",
        "Basic prompt library"
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
        "Custom templates",
        "Full prompt library",
        "Email sequences",
        "Social media templates"
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
        "Analytics dashboard",
        "All bonus products",
        "Custom prompt creation",
        "Priority feature requests"
      ],
      popular: false
    }
  ]

  const generateEmailSequence = () => {
    const emailSequence = `EMAIL 1 - Subject: 🎧 Discover the Sound Revolution You've Been Waiting For

Hi [First Name],

Have you ever put on a pair of headphones and felt like you were transported into the recording studio with your favorite artist?

That's exactly what happened to me when I first tried the Premium Wireless Headphones.

I'm [Your Name], and I've been testing audio equipment for over 5 years. I've tried everything from $50 budget headphones to $500+ audiophile gear, and I can honestly say these headphones have completely changed my perspective on what wireless audio can be.

Here's what caught my attention immediately:

✓ Crystal-clear sound that rivals wired studio headphones
✓ Noise cancellation so good, I forgot I was on a busy street
✓ 30-hour battery life (yes, you read that right!)
✓ Comfort that lets me wear them all day without fatigue

Over the next few days, I'm going to share my complete, unbiased review of these headphones.

Best regards,
[Your Name]

---

EMAIL 2 - Subject: The $299 Question: Are These Headphones Worth It?

Hi [First Name],

Yesterday, my friend Sarah asked me a direct question: "Are $299 headphones really worth it when I can get wireless headphones for $50?"

It's a fair question, and one I asked myself before testing these Premium Wireless Headphones.

Here's my honest breakdown:

**What You Get for $299:**
• Hi-Res Audio certification (studio-quality sound)
• Advanced noise cancellation technology
• 30-hour battery life with quick charge
• Premium materials (leather ear cups, aluminum frame)
• 2-year warranty with excellent customer support

**What You Get for $50:**
• Basic wireless connectivity
• 6-8 hour battery life
• Plastic construction
• No noise cancellation
• Limited warranty

The math is simple: If you use headphones for 2+ hours daily, the premium option costs about $0.41 per day over 2 years. That's less than a cup of coffee.

Tomorrow, I'll share the one feature that completely surprised me.

Best,
[Your Name]

---

EMAIL 3 - Subject: 🎁 Last Chance: My Exclusive Reader Bonus

Hi [First Name],

This is my final email about the Premium Wireless Headphones, and I have something special for you.

Over the past week, I've shared my complete, honest review of these headphones. From the incredible sound quality to the life-changing noise cancellation, you've heard it all.

But I know that even with all the benefits, $299 is a significant investment.

That's why I reached out to the company and secured an exclusive deal for my readers:

🎁 **EXCLUSIVE READER BONUS:**
- $50 off your purchase (normally $299, now $249)
- Free premium carrying case ($39 value)
- Extended 3-year warranty (normally 2 years)
- Free shipping and returns

**Total Value: $128 in savings and bonuses**

This deal expires at midnight tonight and is only available through my special link.

Ready to upgrade your audio experience?

[CLAIM YOUR EXCLUSIVE DEAL HERE - Expires Tonight]

Best regards,
[Your Name]`

    return emailSequence
  }

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
    alert('Content copied to clipboard!')
  }

  const scrollToBonusProducts = () => {
    const bonusSection = document.querySelector('#bonus-products')
    if (bonusSection) {
      bonusSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPromptLibrary = () => {
    const promptSection = document.querySelector('#prompt-library')
    if (promptSection) {
      promptSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Trusted by 10,000+ Affiliate Marketers</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Product Review<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Profits Pro
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform any product sales page into compelling, high-converting reviews with our AI-powered review generator. 
                <strong className="text-blue-600"> Boost your affiliate commissions by 300%!</strong>
              </p>
            </motion.div>

            {/* BUTTONS ROW 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
            >
              <button 
                onClick={() => setShowGenerator(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Try Free Demo →
              </button>
              <button 
                onClick={() => setShowEmailGenerator(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                📧 Email Sequences
              </button>
            </motion.div>

            {/* BUTTONS ROW 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button 
                onClick={scrollToBonusProducts}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                🎁 $1,382 Bonus Pack
              </button>
              <button 
                onClick={scrollToPromptLibrary}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                📚 AI Prompt Library
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo Video
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Generate 3 reviews free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Review Profits Pro?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology analyzes product sales pages and creates authentic, 
              high-converting reviews that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It <span className="text-purple-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate professional product reviews in just 3 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Paste Product URL",
                description: "Simply paste the sales page URL of any product you want to review",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our AI analyzes the page content, features, benefits, and pricing",
                icon: <Zap className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Get Your Review", 
                description: "Receive a comprehensive, SEO-optimized review ready to publish",
                icon: <Star className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="text-blue-600 font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Products Section */}
      <div id="bonus-products">
        <BonusProducts />
      </div>

      {/* Prompt Library Section */}
      <div id="prompt-library">
        <PromptLibrary />
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-blue-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, scale as you grow. All plans include our core AI review generation features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to 10X Your Affiliate Revenue?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful affiliate marketers who are already using 
              Product Review Profits Pro to generate high-converting reviews.
            </p>
            <button 
              onClick={() => setShowGenerator(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Star className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Product Review Profits Pro</span>
            </div>
            <p className="text-gray-400 mb-8">
              The ultimate AI-powered review generator for affiliate marketers
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Product Review Profits Pro. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Review Generator Modal */}
      {showGenerator && (
        <ReviewGenerator onClose={() => setShowGenerator(false)} />
      )}

      {/* Email Generator Modal */}
      {showEmailGenerator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">📧 Email Sequence Generator</h2>
                    <p className="text-green-100">Create high-converting email campaigns for your products</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowEmailGenerator(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Email Sequence Generated Successfully!</span>
                </div>
                <p className="text-green-600 text-sm">
                  Your 3-email campaign is ready. Copy the content and use it in your email marketing platform.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Generated Email Sequence (3 Emails)</h3>
                  <button
                    onClick={() => copyToClipboard(generateEmailSequence())}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    📧 Copy All
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto border">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                    {generateEmailSequence()}
                  </pre>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowEmailGenerator(false)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
