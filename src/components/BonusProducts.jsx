import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BonusProducts = ({ onClose }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const copyToClipboard = (text, promptId) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const bonusProducts = [
    {
      id: 1,
      title: "High-Converting Landing Pages",
      description: "Complete templates for product review landing pages",
      value: "$297",
      icon: "🎯",
      prompts: [
        {
          id: "landing-1",
          title: "Product Review Landing Page Template",
          prompt: `# [Product Name] Review: Is It Worth Your Money? (Honest 2024 Review)

## Quick Summary Box
⭐ Overall Rating: [X/5 stars]
💰 Price: $[XX] (Current deal: $[XX])
✅ Best For: [Target audience]
❌ Not For: [Who shouldn't buy]
🔗 [GET IT HERE - AFFILIATE LINK]

---

## What Is [Product Name]?

[Product Name] is a [product category] designed to [main benefit/purpose]. After using it for [time period], here's my complete honest review.

**Key Features:**
• [Feature 1]
• [Feature 2] 
• [Feature 3]

## My Experience: The Good, Bad & Ugly

### ✅ What I Loved:
1. **[Benefit 1]**: [Specific example of how it helped]
2. **[Benefit 2]**: [Specific example]
3. **[Benefit 3]**: [Specific example]

### ❌ What Could Be Better:
1. **[Issue 1]**: [Specific problem you encountered]
2. **[Issue 2]**: [Another issue]

### 📊 Performance Results:
[Include specific metrics, before/after photos, or measurable results]

## Who Should Buy [Product Name]?

**Perfect for you if:**
✅ [Specific use case 1]
✅ [Specific use case 2]
✅ [Specific use case 3]

**Skip it if:**
❌ [When it's not suitable]
❌ [Another scenario to avoid]

## Price & Where to Buy

Current price: $[XX] (normally $[XX])
**Special deal**: [Current promotion]

⚠️ **Important**: Only buy from the official website to avoid counterfeits.

[GET [PRODUCT NAME] HERE - OFFICIAL SITE]

## Final Verdict

[Your final recommendation - would you buy it again? Why or why not?]

**Rating: [X/5 stars]**

---

*Disclosure: This post contains affiliate links. I may earn a commission if you purchase through these links, at no extra cost to you. I only recommend products I personally use and believe in.*`
        }
      ]
    },
    {
      id: 2,
      title: "Video Sales Scripts",
      description: "YouTube review scripts that convert viewers to buyers",
      value: "$147",
      icon: "🎥",
      prompts: [
        {
          id: "video-1",
          title: "YouTube Product Review Script",
          prompt: `# YouTube Product Review Script Template

## Hook (0-15 seconds)
"Before you spend $[XX] on [Product Name], watch this. I've been using it for [time period] and there are 3 things the company doesn't want you to know..."

[Show product prominently]

## Introduction (15-30 seconds)
"Hey everyone, [Your Name] here. If you're considering [Product Name], you're in the right place. I bought this with my own money [X months] ago, and today I'm sharing my brutally honest review."

"By the end of this video, you'll know exactly whether this is worth your hard-earned cash or if you should save your money."

## What You'll Learn (30-45 seconds)
"Here's what we'll cover:
• My real results after [time period]
• The 3 biggest pros and 2 major cons
• Who should buy this (and who shouldn't)
• Where to get the best deal if you decide to buy"

## Product Overview (45-90 seconds)
"So what exactly is [Product Name]?"

[Show product, demonstrate key features]

"It's designed to [main purpose] and costs $[XX]. The company claims it can [main benefit], but does it actually work?"

## My Experience - The Good (90-180 seconds)
"Let me start with what I love about this:

**First: [Benefit 1]**
[Show specific example/demonstration]
"This alone saved me [specific result]"

**Second: [Benefit 2]**
[Show example]
"Here's exactly how this works..."

**Third: [Benefit 3]**
[Demonstrate]

## The Not-So-Good (180-240 seconds)
"Now, let's talk about what could be better:

**Issue #1: [Problem]**
[Explain with example]

**Issue #2: [Problem]**
[Show the issue]

"These aren't deal-breakers for me, but you should know about them."

## Who Should Buy This (240-300 seconds)
"This is perfect for you if:
• [Specific use case]
• [Another use case]
• [Third use case]

But skip it if:
• [When not suitable]
• [Another scenario]

## Price & Where to Buy (300-330 seconds)
"Right now it's $[XX] on the official website. I've seen knockoffs on other sites, so stick to the official store."

"There's currently a [discount/bonus] if you order today."

[Show affiliate link on screen]

## Final Verdict (330-360 seconds)
"Bottom line: [Your recommendation]

I'd rate it [X/5 stars] because [reason].

Would I buy it again? [Yes/No and why]"

## Call to Action (360-380 seconds)
"If you found this helpful, hit that like button and subscribe for more honest reviews."

"The link to [Product Name] is in the description below."

"What questions do you have? Drop them in the comments and I'll answer every single one."

---

## Description Template:
🔗 Get [Product Name]: [AFFILIATE LINK]

In this review, I share my honest experience with [Product Name] after [time period] of use.

⏰ Timestamps:
0:00 - Introduction
0:45 - What is [Product Name]?
1:30 - What I love about it
3:00 - What could be better
4:00 - Who should buy this
5:00 - Price and where to buy
5:30 - Final verdict

💡 More helpful reviews: [Link to playlist]

#[ProductName] #Review #[Category]

*Disclosure: This video contains affiliate links. I may earn a commission if you purchase through these links, at no extra cost to you.*`
        }
      ]
    },
    {
      id: 3,
      title: "Social Media Content Pack",
      description: "Multi-platform content for Instagram, TikTok, and Facebook",
      value: "$97",
      icon: "📱",
      prompts: [
        {
          id: "social-1",
          title: "Instagram Product Review Post",
          prompt: `# Instagram Product Review Post Template

## Caption:
"I've been testing [Product Name] for [time period] and here's my honest take... 🧵

**The Good:**
✅ [Benefit 1 - keep it short]
✅ [Benefit 2]
✅ [Benefit 3]

**The Not-So-Good:**
❌ [Issue 1]
❌ [Issue 2]

**My Rating: [X/5] ⭐**

**Would I recommend it?** [Yes/No + brief reason]

**Price:** $[XX] (link in bio for current deals)

**Perfect for:** [Target audience]

Drop a 💯 if you want more honest reviews like this!

What product should I test next? 👇

---

#ProductReview #[ProductName] #HonestReview #[Category] #Review2024"

## Story Sequence (5 slides):

**Slide 1:** "Testing [Product Name] - Day 1"
[Photo of unboxing]

**Slide 2:** "First impressions..."
[Photo in use + quick thoughts]

**Slide 3:** "After 1 week..."
[Results/changes noticed]

**Slide 4:** "The verdict..."
[Final rating and recommendation]

**Slide 5:** "Get it here 👆"
[Swipe up link or link in bio CTA]

## Reel Script (30 seconds):
**Hook (0-3s):** "Don't buy [Product Name] until you see this..."

**Problem (3-8s):** "I wasted $[XX] so you don't have to"

**Solution (8-20s):** [Quick demo of product working]

**Result (20-25s):** "After [time], here's what happened..."

**CTA (25-30s):** "Link in bio if you want to try it!"

**Text Overlay:**
- "Is [Product Name] worth it?"
- "My honest review"
- "[X/5] stars"
- "Link in bio"

## TikTok Version (60 seconds):
**Hook:** "POV: You're about to waste $[XX] on [Product Name]"

**Build-up:** "But wait... I tested it for [time] so you don't have to"

**Review:** [Quick pros and cons with visual demonstrations]

**Verdict:** "So is it worth it? [Yes/No] - here's why..."

**CTA:** "Link in my bio if you want to grab one!"

**Hashtags:** #ProductReview #[ProductName] #HonestReview #Review #[Category] #FYP #Viral`
        }
      ]
    },
    {
      id: 4,
      title: "SEO Article Templates",
      description: "Search-optimized articles that rank on Google",
      value: "$247",
      icon: "🔍",
      prompts: [
        {
          id: "seo-1",
          title: "Best [Product Category] 2024 - Comparison Article",
          prompt: `# Best [Product Category] 2024: Top [X] Options Reviewed & Compared

## Table of Contents
1. [Quick Comparison Table](#comparison)
2. [Our Top Pick: [Product Name]](#top-pick)
3. [Best Budget Option: [Product Name]](#budget)
4. [Best Premium Option: [Product Name]](#premium)
5. [How We Test [Product Category]](#testing)
6. [Buying Guide](#guide)
7. [FAQ](#faq)

---

## Quick Comparison Table {#comparison}

| Product | Price | Rating | Best For | Pros | Cons |
|---------|-------|--------|----------|------|------|
| [Product 1] | $[XX] | [X/5] | [Use case] | [Key pro] | [Key con] |
| [Product 2] | $[XX] | [X/5] | [Use case] | [Key pro] | [Key con] |
| [Product 3] | $[XX] | [X/5] | [Use case] | [Key pro] | [Key con] |

---

## 🏆 Our Top Pick: [Product Name] {#top-pick}

**Rating: [X/5] stars**
**Price: $[XX]**

[Product Name] takes the top spot because [main reason]. After testing [X] different [product category], this one consistently delivered [key benefit].

### Why We Love It:
✅ **[Benefit 1]**: [Specific example]
✅ **[Benefit 2]**: [Specific example]  
✅ **[Benefit 3]**: [Specific example]

### Minor Drawbacks:
❌ **[Issue 1]**: [Brief explanation]
❌ **[Issue 2]**: [Brief explanation]

### Who Should Buy This:
Perfect for [target audience] who need [specific benefit]. If you're [use case], this is your best bet.

**[GET [PRODUCT NAME] HERE - BEST PRICE]**

---

## 💰 Best Budget Option: [Product Name] {#budget}

**Rating: [X/5] stars**
**Price: $[XX]**

Don't let the low price fool you - [Product Name] punches above its weight. While it lacks some premium features, it nails the basics.

### What You Get:
✅ [Core feature 1]
✅ [Core feature 2]
✅ [Core feature 3]

### What You Don't Get:
❌ [Premium feature 1]
❌ [Premium feature 2]

**Bottom Line**: If you're just starting out or on a tight budget, this delivers solid performance without breaking the bank.

**[GET [PRODUCT NAME] HERE]**

---

## 🌟 Best Premium Option: [Product Name] {#premium}

**Rating: [X/5] stars**
**Price: $[XX]**

For those who want the absolute best, [Product Name] is worth every penny. The build quality, features, and performance are in a league of their own.

### Premium Features:
✅ [Advanced feature 1]
✅ [Advanced feature 2]
✅ [Advanced feature 3]

### Is It Worth The Extra Cost?
If you [specific use case] or need [advanced feature], absolutely. For casual users, our top pick might be better value.

**[GET [PRODUCT NAME] HERE]**

---

## How We Test [Product Category] {#testing}

Our testing process involves:

1. **Real-world use** for minimum [X weeks/months]
2. **Performance benchmarks** using [specific metrics]
3. **Durability testing** including [specific tests]
4. **Value assessment** comparing price vs. features
5. **User feedback** from [X] verified buyers

We buy every product with our own money and never accept payment for reviews.

---

## [Product Category] Buying Guide {#guide}

### Key Features to Consider:

**1. [Feature 1]**
[Explanation of why this matters and what to look for]

**2. [Feature 2]**
[Explanation and buying tips]

**3. [Feature 3]**
[Explanation and recommendations]

### Price Ranges:
- **Budget ($[X]-$[X])**: [What to expect]
- **Mid-range ($[X]-$[X])**: [What to expect]
- **Premium ($[X]+)**: [What to expect]

### Red Flags to Avoid:
❌ [Warning sign 1]
❌ [Warning sign 2]
❌ [Warning sign 3]

---

## Frequently Asked Questions {#faq}

**Q: What's the best [product category] for beginners?**
A: [Answer with specific recommendation]

**Q: How much should I spend on a [product category]?**
A: [Price guidance based on use case]

**Q: [Common question 3]?**
A: [Helpful answer]

**Q: [Common question 4]?**
A: [Helpful answer]

---

## Final Thoughts

After extensive testing, [Product Name] remains our top choice for [X reasons]. However, the best [product category] for you depends on [factors].

**Our Recommendations:**
- **Best Overall**: [Product Name] - [Link]
- **Best Budget**: [Product Name] - [Link]  
- **Best Premium**: [Product Name] - [Link]

*Last updated: [Date]*
*Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.*

---

## SEO Optimization Checklist:
✅ Target keyword in title, H1, and first paragraph
✅ Related keywords throughout content
✅ Internal links to other relevant articles
✅ External links to authoritative sources
✅ Image alt text with target keywords
✅ Meta description under 160 characters
✅ URL slug includes target keyword
✅ Content over 2000 words for comprehensive coverage`
        }
      ]
    },
    {
      id: 5,
      title: "Conversion Optimization Tools",
      description: "CRO strategies to maximize affiliate commissions",
      value: "$197",
      icon: "📈",
      prompts: [
        {
          id: "cro-1",
          title: "High-Converting Call-to-Action Templates",
          prompt: `# High-Converting Call-to-Action Templates

## Urgency-Based CTAs

### Scarcity:
- "Only [X] left in stock - Order now!"
- "Limited time: Save [X]% today only"
- "[X] people bought this in the last 24 hours"
- "Sale ends in [countdown timer]"

### FOMO (Fear of Missing Out):
- "Don't miss out - Join [X] satisfied customers"
- "While supplies last - Get yours before it's gone"
- "This deal won't last long"
- "Others are viewing this right now"

## Benefit-Focused CTAs

### Problem/Solution:
- "Stop [problem] - Get [solution] now"
- "Finally, a [product] that actually works"
- "Say goodbye to [problem] forever"
- "The [product] that changed everything"

### Results-Oriented:
- "Get [specific result] in [timeframe]"
- "Join [X] people who've already [achieved result]"
- "See results in just [timeframe]"
- "Transform your [area] today"

## Risk-Reversal CTAs

### Money-Back Guarantee:
- "Try it risk-free for [X] days"
- "100% money-back guarantee"
- "If you're not satisfied, get your money back"
- "No risk, all reward"

### Free Trial/Sample:
- "Try before you buy"
- "Get your free sample"
- "Start your free trial"
- "Test it yourself - no commitment"

## Social Proof CTAs

### Customer Count:
- "Join [X]+ happy customers"
- "Trusted by [X] people worldwide"
- "[X] customers can't be wrong"
- "See why [X] people love this"

### Reviews/Ratings:
- "See why it's rated [X] stars"
- "Read [X] 5-star reviews"
- "Customers rate this [X]/5"
- "Join thousands of satisfied buyers"

## Action-Oriented CTAs

### Direct Commands:
- "Get yours now"
- "Order today"
- "Buy now and save"
- "Claim your discount"

### Soft Approach:
- "Learn more"
- "See details"
- "Check it out"
- "Discover how"

## Button Color Psychology

### High-Converting Colors:
- **Orange**: Creates urgency, encourages action
- **Red**: Grabs attention, implies urgency
- **Green**: Suggests "go," associated with money/success
- **Blue**: Builds trust, professional appearance

### A/B Testing Framework:

**Test 1: Button Text**
- Version A: "Buy Now"
- Version B: "Get Instant Access"
- Version C: "Claim Your [Product]"

**Test 2: Button Color**
- Version A: Orange button
- Version B: Green button
- Version C: Red button

**Test 3: Urgency Elements**
- Version A: No urgency
- Version B: "Limited time offer"
- Version C: Countdown timer

## CTA Placement Strategy

### Above the Fold:
- Primary CTA in hero section
- Should be visible without scrolling
- Use contrasting colors

### Throughout Content:
- After each major benefit
- Following social proof
- At natural break points

### End of Content:
- Strong closing CTA
- Summarize key benefits
- Final push to action

## Mobile Optimization

### Button Size:
- Minimum 44px height
- Easy thumb navigation
- Plenty of white space

### Text:
- Short, punchy phrases
- Large, readable font
- High contrast colors

## Conversion Tracking

### Metrics to Monitor:
- Click-through rate (CTR)
- Conversion rate
- Revenue per visitor
- Cost per acquisition

### Tools:
- Google Analytics
- Hotjar for heatmaps
- A/B testing platforms
- Affiliate network tracking

## Psychology Triggers

### Loss Aversion:
- "Don't lose out on [benefit]"
- "What you'll miss if you don't act"
- "The cost of doing nothing"

### Authority:
- "As seen on [media outlet]"
- "Recommended by experts"
- "Award-winning [product]"

### Reciprocity:
- "Free bonus when you order"
- "Exclusive gift for subscribers"
- "Special offer just for you"

## Testing Schedule

**Week 1-2**: Test button colors
**Week 3-4**: Test CTA text
**Week 5-6**: Test placement
**Week 7-8**: Test urgency elements

Always test one element at a time for clear results.`
        }
      ]
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">🎁 Bonus Products Collection</h2>
                <p className="text-purple-100 mt-1">Complete marketing toolkit ($1,382 Total Value)</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {bonusProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.value}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      View Prompts →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Product Details */}
            {selectedProduct && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-gray-200 pt-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.icon} {selectedProduct.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕ Close
                  </button>
                </div>

                <div className="space-y-6">
                  {selectedProduct.prompts.map((prompt) => (
                    <div key={prompt.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-gray-900">{prompt.title}</h4>
                        <button
                          onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                          className={`px-4 py-2 rounded font-medium transition-colors ${
                            copiedPrompt === prompt.id
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                          }`}
                        >
                          {copiedPrompt === prompt.id ? '✓ Copied!' : 'Copy Template'}
                        </button>
                      </div>
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-4 rounded border max-h-96 overflow-y-auto">
                        {prompt.prompt}
                      </pre>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Usage Instructions */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-4">🚀 How to Use These Bonus Products:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-purple-800">
                <div>
                  <h4 className="font-semibold mb-2">📝 Templates:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Copy and customize for your niche</li>
                    <li>• Replace placeholders with your details</li>
                    <li>• Test different variations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📊 Optimization:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Track performance metrics</li>
                    <li>• A/B test different approaches</li>
                    <li>• Scale what works best</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BonusProducts;
