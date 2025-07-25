import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ReviewTemplates = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const reviewTemplates = [
    {
      title: "Complete Product Review Template",
      description: "Comprehensive template for in-depth product reviews",
      category: "Full Reviews",
      template: `# [Product Name] Review: Is It Worth Your Money? (Honest 2024 Review)

## Quick Summary
After testing [Product Name] for [time period], here's my honest verdict:
- **Rating:** [X/10]
- **Best For:** [Target audience]
- **Price:** $[price] (worth it? [yes/no])
- **Bottom Line:** [One sentence summary]

## What Is [Product Name]?
[Product Name] is a [product category] designed to help [target audience] achieve [main benefit]. Created by [creator name], this [product type] promises to [main promise].

## My Experience With [Product Name]
I've been using [Product Name] for [time period] and here's what happened:

**Week 1:** [Initial impressions and setup]
**Week 2-4:** [Results and observations]
**Current Status:** [Where you are now]

## The Good (Pros)
✅ **[Benefit 1]:** [Specific example]
✅ **[Benefit 2]:** [Specific example]  
✅ **[Benefit 3]:** [Specific example]
✅ **[Benefit 4]:** [Specific example]

## The Not-So-Good (Cons)
❌ **[Drawback 1]:** [Specific example]
❌ **[Drawback 2]:** [Specific example]
❌ **[Drawback 3]:** [Specific example]

## Who Should Buy [Product Name]?
**Perfect for:**
- [Ideal customer 1]
- [Ideal customer 2]
- [Ideal customer 3]

**NOT recommended for:**
- [Wrong customer 1]
- [Wrong customer 2]

## Pricing & Value
[Product Name] costs $[price] for [what you get].

**Is it worth it?** [Your honest assessment]

**Compared to alternatives:** [Brief comparison]

## Final Verdict
[Your final recommendation with reasoning]

**My Rating: [X/10]**

[Call to action with affiliate link]

---
*Disclaimer: This review contains affiliate links. I may earn a commission if you purchase through my links, at no extra cost to you.*`
    },
    {
      title: "Quick Review Template",
      description: "Short-form review for social media and quick posts",
      category: "Quick Reviews",
      template: `🔍 **[Product Name] Quick Review**

**What it is:** [One sentence description]

**My experience:** [Brief 2-3 sentence summary]

**The Good:**
✅ [Benefit 1]
✅ [Benefit 2]
✅ [Benefit 3]

**The Meh:**
⚠️ [Minor issue 1]
⚠️ [Minor issue 2]

**Bottom line:** [One sentence verdict]

**Rating:** [X/10]
**Price:** $[price]
**Worth it?** [Yes/No + why]

[Link to full review or purchase]

#[ProductName] #Review #[Niche]`
    },
    {
      title: "Comparison Review Template",
      description: "Template for comparing multiple products",
      category: "Comparisons",
      template: `# [Product A] vs [Product B] vs [Product C]: Which Is Best in 2024?

## Quick Comparison Table
| Feature | [Product A] | [Product B] | [Product C] |
|---------|-------------|-------------|-------------|
| Price | $[price] | $[price] | $[price] |
| [Feature 1] | [rating] | [rating] | [rating] |
| [Feature 2] | [rating] | [rating] | [rating] |
| Best For | [audience] | [audience] | [audience] |
| My Rating | [X/10] | [X/10] | [X/10] |

## Detailed Breakdown

### [Product A] - [Tagline]
**Pros:**
- [Benefit 1]
- [Benefit 2]

**Cons:**
- [Drawback 1]
- [Drawback 2]

**Best for:** [Specific use case]

### [Product B] - [Tagline]
**Pros:**
- [Benefit 1]
- [Benefit 2]

**Cons:**
- [Drawback 1]
- [Drawback 2]

**Best for:** [Specific use case]

### [Product C] - [Tagline]
**Pros:**
- [Benefit 1]
- [Benefit 2]

**Cons:**
- [Drawback 1]
- [Drawback 2]

**Best for:** [Specific use case]

## My Recommendation
**Winner:** [Product name]
**Why:** [Reasoning]

**Runner-up:** [Product name] - Great if [specific condition]

[Call to action with links]`
    }
  ]

  const copyTemplate = (template, index) => {
    navigator.clipboard.writeText(template)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">📝 Review Templates</h2>
                <p className="text-blue-100">Proven templates that convert readers into buyers</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 text-2xl"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-6">
              {reviewTemplates.map((template, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{template.title}</h3>
                      <p className="text-gray-600">{template.description}</p>
                      <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {template.category}
                      </span>
                    </div>
                    <button
                      onClick={() => copyTemplate(template.template, index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy Template'}
                    </button>
                  </div>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                      View Full Template
                    </summary>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                        {template.template}
                      </pre>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 How to Use These Templates</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Replace all bracketed placeholders [LIKE THIS] with your specific content</li>
                <li>• Add your personal experiences and honest opinions</li>
                <li>• Include actual screenshots, photos, or videos when possible</li>
                <li>• Always disclose affiliate relationships transparently</li>
                <li>• Customize the tone to match your brand voice</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ReviewTemplates
