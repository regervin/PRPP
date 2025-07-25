import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIPrompts = ({ onClose }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const copyToClipboard = (text, promptId) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const promptCategories = [
    {
      id: 'product-reviews',
      title: 'Product Reviews',
      icon: '⭐',
      prompts: [
        {
          id: 'detailed-review',
          title: 'Detailed Product Review',
          difficulty: 'Beginner',
          timeEstimate: '30 mins',
          prompt: `Write a comprehensive product review for [PRODUCT NAME] following this structure:

**Introduction Hook:**
Start with a compelling question or statement that addresses the reader's main concern about this product.

**Quick Summary Box:**
- Overall Rating: [X/5 stars]
- Price: $[XX]
- Best For: [Target audience]
- Pros: [Top 3 benefits]
- Cons: [Top 2 drawbacks]

**What Is [Product Name]?**
Explain what the product is, who makes it, and what problem it solves. Keep this section under 100 words.

**My Testing Experience:**
Detail your personal experience using the product for [time period]. Include:
- First impressions
- Setup/installation process
- Daily usage scenarios
- Any challenges faced

**Performance Analysis:**
Rate and explain performance in key areas:
1. [Key feature 1]: [Rating/10] - [Explanation]
2. [Key feature 2]: [Rating/10] - [Explanation]
3. [Key feature 3]: [Rating/10] - [Explanation]

**Comparison with Alternatives:**
Compare with 2-3 similar products, highlighting where this product excels or falls short.

**Who Should Buy This:**
- Perfect for: [Specific use cases]
- Skip if: [When it's not suitable]

**Final Verdict:**
Summarize your recommendation with a clear yes/no and explain your reasoning.

**Where to Buy:**
Include current pricing, any available discounts, and purchase links.

Remember to be honest, specific, and helpful throughout the review.`
        }
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      icon: '📧',
      prompts: [
        {
          id: 'welcome-email',
          title: 'Welcome Email Sequence',
          difficulty: 'Intermediate',
          timeEstimate: '45 mins',
          prompt: `Create a 5-email welcome sequence for new subscribers interested in [NICHE] product reviews:

**Email 1: Welcome & Expectation Setting**
Subject: Welcome to [Your Brand] - Here's what to expect!

Hi [First Name],

Welcome to the [Your Brand] family! I'm [Your Name], and I'm excited you've joined our community of smart shoppers.

Here's what you can expect:
✅ Honest, unbiased product reviews
✅ Exclusive deals and discounts
✅ Weekly product recommendations
✅ No spam, ever

Over the next few days, I'll share my top [niche] recommendations that have genuinely improved my life.

Tomorrow: My #1 [product type] that saves me [benefit]

Talk soon,
[Your Name]

**Email 2: Personal Story + First Recommendation**
Subject: The [price] [product] that changed my [area of life]

[Share personal story about why you started reviewing products]
[Introduce your top product recommendation]
[Include affiliate link]

**Email 3: Social Proof + Second Recommendation**
Subject: 1,247 people can't be wrong about this [product]

[Share customer testimonials]
[Present second product recommendation]
[Include scarcity or urgency element]

**Email 4: Problem/Solution + Third Recommendation**
Subject: Struggling with [common problem]? This might help

[Address common pain point in your niche]
[Present solution-focused product]
[Include personal results/testimonials]

**Email 5: Community + Call to Action**
Subject: You're officially part of the inner circle

[Thank them for staying engaged]
[Invite them to reply with questions]
[Present your main offer or best product]
[Set expectations for future emails]

Customize each email with your specific niche, products, and personal voice.`
        }
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media',
      icon: '📱',
      prompts: [
        {
          id: 'instagram-review',
          title: 'Instagram Product Review Post',
          difficulty: 'Beginner',
          timeEstimate: '20 mins',
          prompt: `Create an Instagram post reviewing [PRODUCT NAME]:

**Caption Template:**

I've been testing [PRODUCT NAME] for [TIME PERIOD] and here's my honest take... 🧵

**The Good:**
✅ [Benefit 1 - keep it concise]
✅ [Benefit 2]
✅ [Benefit 3]

**The Not-So-Good:**
❌ [Issue 1]
❌ [Issue 2]

**My Rating: [X/5] ⭐**

**Would I buy it again?** [Yes/No + brief reason]

**Price:** $[XX] (swipe for current deals 👆)

**Perfect for:** [Target audience in 1-2 words]

Drop a 💯 if you want more honest reviews like this!

What product should I test next? 👇

---

**Hashtag Strategy:**
#ProductReview #[ProductName] #HonestReview #[ProductCategory] #Review2024 #[YourNiche] #ProductTesting #[BrandName] #Unboxing #ProductComparison

**Story Sequence (5 slides):**
1. "Testing [Product] - Day 1" [Unboxing photo]
2. "First impressions..." [Product in use]
3. "After 1 week..." [Results/changes]
4. "The verdict..." [Final rating]
5. "Get it here 👆" [Swipe up CTA]

**Reel Hook Ideas:**
- "Don't buy [Product] until you see this..."
- "I wasted $[XX] so you don't have to"
- "Is [Product] actually worth the hype?"
- "[Product] after 30 days - honest review"

Remember to use high-quality photos and maintain authenticity in your review.`
        }
      ]
    },
    {
      id: 'youtube',
      title: 'YouTube Scripts',
      icon: '🎥',
      prompts: [
        {
          id: 'youtube-review',
          title: 'YouTube Product Review Script',
          difficulty: 'Advanced',
          timeEstimate: '60 mins',
          prompt: `Create a YouTube product review script for [PRODUCT NAME]:

**Hook (0-15 seconds):**
"Before you spend $[XX] on [Product Name], watch this. I've been using it for [time period] and there are 3 things the company doesn't want you to know..."

[Show product prominently on screen]

**Introduction (15-30 seconds):**
"Hey everyone, [Your Name] here. If you're considering [Product Name], you're in the right place. I bought this with my own money [X] months ago, and today I'm sharing my brutally honest review."

**What You'll Learn (30-45 seconds):**
"Here's what we'll cover:
• My real results after [time period]
• The 3 biggest pros and 2 major cons
• Who should buy this (and who shouldn't)
• Where to get the best deal"

**Product Overview (45-90 seconds):**
[Show product, demonstrate key features]
"So what exactly is [Product Name]? It's designed to [main purpose] and costs $[XX]. The company claims it can [main benefit], but does it actually work?"

**Unboxing/First Impressions (90-150 seconds):**
[Show unboxing process]
"When I first got this, here's what stood out..."
[Highlight packaging, included items, build quality]

**Testing Process (150-300 seconds):**
"I've been testing this for [time period] in [specific scenarios]. Here's what I found..."

**The Good (300-420 seconds):**
"Let me start with what I love:

1. [Benefit 1]: [Specific example with demonstration]
2. [Benefit 2]: [Show in action]
3. [Benefit 3]: [Real results/metrics]"

**The Not-So-Good (420-480 seconds):**
"Now for what could be better:

1. [Issue 1]: [Show the problem]
2. [Issue 2]: [Explain impact]"

**Comparison (480-540 seconds):**
"How does this compare to [competitor 1] and [competitor 2]?"
[Side-by-side comparison]

**Who Should Buy (540-600 seconds):**
"This is perfect if you:
• [Use case 1]
• [Use case 2]
• [Use case 3]

Skip it if you:
• [Scenario 1]
• [Scenario 2]"

**Price & Where to Buy (600-630 seconds):**
"Currently $[XX] on [platform]. I've seen fakes elsewhere, so stick to [official source]. Link in description."

**Final Verdict (630-660 seconds):**
"Bottom line: [Clear recommendation]
Rating: [X/5 stars]
Would I buy it again? [Yes/No and why]"

**Call to Action (660-680 seconds):**
"If this helped, hit like and subscribe for more honest reviews. Questions? Drop them below - I read every comment."

**End Screen (680-700 seconds):**
[Point to subscribe button and related videos]

**Description Template:**
🔗 Get [Product Name]: [AFFILIATE LINK]
⏰ Timestamps:
0:00 - Hook
0:30 - What we'll cover
1:30 - Product overview
[Continue with all timestamps]

💡 More reviews: [Playlist link]
📧 Email list: [Link]

#[ProductName] #Review #[Category]

*Disclosure: This video contains affiliate links.*`
        }
      ]
    }
  ];

  const filteredPrompts = selectedCategory === 'all' 
    ? promptCategories.flatMap(cat => cat.prompts.map(prompt => ({...prompt, category: cat.title, icon: cat.icon})))
    : promptCategories.find(cat => cat.id === selectedCategory)?.prompts.map(prompt => ({...prompt, category: promptCategories.find(c => c.id === selectedCategory).title, icon: promptCategories.find(c => c.id === selectedCategory).icon})) || [];

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
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">🤖 AI Prompt Library</h2>
                <p className="text-orange-100 mt-1">Ready-to-use prompts for content creation</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Prompts
              </button>
              {promptCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Prompts */}
          <div className="p-6">
            <div className="grid gap-6">
              {filteredPrompts.map((prompt) => (
                <div key={prompt.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{prompt.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{prompt.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {prompt.difficulty}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          ⏱️ {prompt.timeEstimate}
                        </span>
                        <span className="text-gray-500">{prompt.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      className={`px-4 py-2 rounded font-medium transition-colors ${
                        copiedPrompt === prompt.id
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                      }`}
                    >
                      {copiedPrompt === prompt.id ? '✓ Copied!' : 'Copy Prompt'}
                    </button>
                  </div>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-gray-50 p-4 rounded border max-h-96 overflow-y-auto">
                    {prompt.prompt}
                  </pre>
                </div>
              ))}
            </div>

            {/* Usage Tips */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-4">💡 How to Use These AI Prompts:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-orange-800">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Customization:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Replace [PLACEHOLDERS] with your specific details</li>
                    <li>• Adapt the tone to match your brand voice</li>
                    <li>• Add your personal experiences and examples</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🚀 Optimization:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Test different variations for better results</li>
                    <li>• Track performance and iterate</li>
                    <li>• Combine prompts for comprehensive content</li>
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

export default AIPrompts;
