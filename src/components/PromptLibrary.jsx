import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PromptLibrary = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [copiedPrompt, setCopiedPrompt] = useState(null)

  const promptCategories = [
    { id: 'all', name: 'All Prompts', icon: '🤖' },
    { id: 'reviews', name: 'Product Reviews', icon: '📝' },
    { id: 'email', name: 'Email Marketing', icon: '📧' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'seo', name: 'SEO Content', icon: '🔍' },
    { id: 'video', name: 'Video Scripts', icon: '🎥' }
  ]

  const aiPrompts = [
    {
      id: 1,
      title: "Detailed Product Review Generator",
      category: "reviews",
      difficulty: "Beginner",
      timeEstimate: "15 minutes",
      description: "Generate comprehensive product reviews with pros, cons, and recommendations",
      prompt: `Write a detailed product review for [PRODUCT NAME] in the [NICHE] category. 

Structure the review as follows:
1. Compelling headline with the product name
2. Quick summary box with rating, price, and verdict
3. Personal introduction explaining why you're reviewing this
4. What the product is and who makes it
5. Detailed breakdown of features and benefits
6. Honest pros and cons based on real usage
7. Who should and shouldn't buy this product
8. Comparison with 2-3 alternatives
9. Final recommendation with clear reasoning
10. Call-to-action with next steps

Requirements:
- Write in a conversational, trustworthy tone
- Include specific examples and use cases
- Be honest about limitations
- Use bullet points and subheadings for readability
- Aim for 1500-2000 words
- Include a clear affiliate disclosure

Product details to include:
- Product name: [PRODUCT NAME]
- Category: [NICHE]
- Price: [PRICE]
- Main benefit: [PRIMARY BENEFIT]
- Target audience: [TARGET AUDIENCE]`
    },
    {
      id: 2,
      title: "Email Welcome Series Creator",
      category: "email",
      difficulty: "Intermediate",
      timeEstimate: "30 minutes",
      description: "Create a 5-email welcome sequence for new subscribers",
      prompt: `Create a 5-email welcome series for new subscribers interested in [NICHE/TOPIC].

Email 1 - Welcome & Expectation Setting (Send immediately)
Subject: Welcome! Here's what happens next...
- Thank them for subscribing
- Set expectations for what they'll receive
- Share a quick personal story
- Provide immediate value (tip, resource, or insight)
- Tease what's coming in the next email

Email 2 - Your Story & Credibility (Send 1 day later)
Subject: How I went from [BEFORE STATE] to [AFTER STATE]
- Share your background and journey
- Explain why you're qualified to help
- Include a relatable struggle or failure
- Show the transformation you achieved
- Connect it to how you can help them

Email 3 - Common Mistake (Send 3 days later)
Subject: The #1 mistake I see everyone make with [TOPIC]
- Identify a common problem in your niche
- Explain why this mistake is costly
- Share a story of someone who made this mistake
- Provide the solution or better approach
- Soft introduction of your main product/service

Email 4 - Quick Win (Send 5 days later)
Subject: Try this 5-minute [TOPIC] hack
- Provide an actionable tip they can implement immediately
- Make it simple and specific
- Explain the science or reasoning behind it
- Ask them to reply with their results
- Build engagement and community

Email 5 - Main Offer (Send 7 days later)
Subject: Ready to take this to the next level?
- Recap the value you've provided so far
- Introduce your main product/service naturally
- Explain how it solves their biggest problem
- Include social proof or testimonials
- Create urgency with limited-time bonus or discount
- Clear call-to-action

Customize for:
- Niche/Topic: [NICHE/TOPIC]
- Target audience: [TARGET AUDIENCE]
- Your background: [YOUR STORY]
- Main product/service: [MAIN OFFER]
- Tone: [TONE - friendly, professional, casual, etc.]`
    },
    {
      id: 3,
      title: "YouTube Review Script Writer",
      category: "video",
      difficulty: "Intermediate",
      timeEstimate: "25 minutes",
      description: "Create engaging YouTube video scripts for product reviews",
      prompt: `Write a YouTube video script for reviewing [PRODUCT NAME]. The video should be 8-12 minutes long and optimized for engagement and conversions.

Script Structure:

HOOK (0-15 seconds):
- Start with a compelling question or bold statement
- Preview the main verdict or surprising finding
- Create curiosity gap to keep viewers watching

INTRODUCTION (15-45 seconds):
- Quick personal introduction
- What you'll cover in the video
- Ask viewers to like and subscribe
- Set expectations for honest review

PRODUCT OVERVIEW (45 seconds - 2 minutes):
- What the product is and who makes it
- Main claims and promises
- Price and where to get it
- Why you decided to test it

UNBOXING/FIRST IMPRESSIONS (2-3 minutes):
- Show the product packaging
- First impressions and build quality
- What's included in the package
- Initial setup process

DETAILED TESTING (3-8 minutes):
- Demonstrate the product in action
- Test key features and claims
- Show real results or outcomes
- Compare with your expectations

PROS AND CONS (8-10 minutes):
- Honest breakdown of what works well
- Areas where it falls short
- Comparison with similar products
- Value for money assessment

FINAL VERDICT (10-11 minutes):
- Overall rating out of 10
- Who should buy this product
- Who should avoid it
- Your personal recommendation

CALL TO ACTION (11-12 minutes):
- Link to product in description
- Mention any bonuses or discounts
- Ask for likes, comments, and subscriptions
- Suggest related videos

Video Details:
- Product: [PRODUCT NAME]
- Category: [PRODUCT CATEGORY]
- Target audience: [TARGET AUDIENCE]
- Your experience level: [BEGINNER/INTERMEDIATE/EXPERT]
- Tone: [CONVERSATIONAL/PROFESSIONAL/ENTHUSIASTIC]

Include natural transitions, engagement hooks throughout, and clear affiliate disclosures.`
    },
    {
      id: 4,
      title: "Instagram Story Series Planner",
      category: "social",
      difficulty: "Beginner",
      timeEstimate: "20 minutes",
      description: "Plan a week-long Instagram story series for product promotion",
      prompt: `Create a 7-day Instagram Story series to authentically promote [PRODUCT NAME] to my [TARGET AUDIENCE] audience.

Day 1 - Problem Introduction
- Share the pain point or challenge
- Make it relatable to your audience
- Use polls or questions to engage
- Tease that you found a solution

Day 2 - Discovery Story
- Tell how you discovered the product
- Share your initial skepticism or excitement
- Show the moment you decided to try it
- Build anticipation for results

Day 3 - Unboxing/First Look
- Show the product arriving or unboxing
- First impressions and reactions
- Highlight key features visually
- Use "swipe up" or link sticker

Day 4 - Testing Phase
- Document yourself using the product
- Show the process or experience
- Share immediate thoughts or feelings
- Ask followers about their experiences

Day 5 - Results Reveal
- Share the outcomes or results
- Be specific with before/after if applicable
- Include metrics or measurable changes
- Address any surprises (good or bad)

Day 6 - Comparison & Context
- Compare with other solutions you've tried
- Explain why this one is different
- Share who it's perfect for
- Mention any limitations honestly

Day 7 - Final Recommendation
- Give your overall verdict
- Share your affiliate link with disclosure
- Offer to answer questions in DMs
- Thank followers for following along

Story Elements to Include:
- Interactive stickers (polls, questions, quizzes)
- Behind-the-scenes content
- User-generated content if available
- Clear call-to-actions
- Authentic personal touches

Customize for:
- Product: [PRODUCT NAME]
- Your niche: [NICHE]
- Target audience: [TARGET AUDIENCE]
- Your Instagram handle: [HANDLE]
- Tone: [CASUAL/PROFESSIONAL/FUN]`
    },
    {
      id: 5,
      title: "SEO Blog Post Optimizer",
      category: "seo",
      difficulty: "Advanced",
      timeEstimate: "45 minutes",
      description: "Create SEO-optimized blog posts that rank and convert",
      prompt: `Write an SEO-optimized blog post targeting the keyword "[TARGET KEYWORD]" with the goal of ranking on Google's first page and converting readers into affiliate sales.

SEO Requirements:
- Primary keyword: [TARGET KEYWORD]
- Target word count: 2000-2500 words
- Include 3-5 related secondary keywords
- Optimize for featured snippets
- Include internal and external links

Article Structure:

Title Tag (60 characters max):
- Include primary keyword
- Make it compelling and click-worthy
- Consider search intent

Meta Description (155 characters max):
- Summarize the article value
- Include primary keyword
- Add a call-to-action

H1 Heading:
- Match or closely match the title
- Include primary keyword naturally

Introduction (150-200 words):
- Hook with a question, statistic, or bold statement
- Include primary keyword in first 100 words
- Preview what the article will cover
- Address search intent immediately

Main Content Sections:
H2: [Secondary keyword variation]
- 300-400 words per section
- Include related keywords naturally
- Provide actionable, valuable information
- Use bullet points and numbered lists

H2: [Another secondary keyword]
- Answer common questions
- Include examples and case studies
- Add personal experience or expert quotes

H2: Product Recommendations
- Naturally introduce affiliate products
- Focus on solving reader problems
- Include honest pros and cons
- Use comparison tables if helpful

FAQ Section:
- Answer 5-7 common questions
- Target long-tail keywords
- Optimize for voice search
- Include schema markup suggestions

Conclusion:
- Summarize key points
- Include primary keyword once more
- Strong call-to-action for affiliate products
- Encourage engagement (comments, shares)

Technical SEO Elements:
- Suggest image alt text
- Recommend internal linking opportunities
- Include external authority links
- Optimize for Core Web Vitals

Content Details:
- Target keyword: [TARGET KEYWORD]
- Secondary keywords: [LIST 3-5 RELATED KEYWORDS]
- Target audience: [AUDIENCE DESCRIPTION]
- Search intent: [INFORMATIONAL/COMMERCIAL/TRANSACTIONAL]
- Affiliate products to mention: [PRODUCT LIST]`
    },
    {
      id: 6,
      title: "Social Proof Email Generator",
      category: "email",
      difficulty: "Beginner",
      timeEstimate: "15 minutes",
      description: "Create emails that leverage testimonials and social proof",
      prompt: `Write an email that uses social proof to promote [PRODUCT NAME] to my email list.

Email Structure:

Subject Line Options (create 3):
- Focus on social proof element
- Create curiosity about results
- Mention specific numbers or outcomes

Opening Hook:
- Start with a customer success story
- Use specific, believable details
- Make it relatable to your audience

Social Proof Elements to Include:
- Customer testimonials (create 2-3 realistic examples)
- Usage statistics ("Over X people have...")
- Expert endorsements or mentions
- Media coverage or awards
- Before/after transformations
- Community feedback or reviews

Story Structure:
1. Introduce a customer similar to your reader
2. Describe their problem or challenge
3. Explain how they found your recommended product
4. Detail their experience using it
5. Share their specific results or transformation
6. Connect it back to your reader's situation

Call-to-Action:
- Natural transition from the story
- Explain why you recommend this product
- Include your affiliate link with disclosure
- Create urgency with limited-time offer
- Provide risk reversal (guarantee, trial, etc.)

Closing:
- Encourage replies with their own experiences
- Remind them of the main benefit
- Sign off personally

Email Specifications:
- Product: [PRODUCT NAME]
- Target audience: [AUDIENCE DESCRIPTION]
- Main benefit: [PRIMARY BENEFIT]
- Price point: [PRICE RANGE]
- Your relationship to product: [HOW YOU DISCOVERED IT]
- Tone: [CONVERSATIONAL/PROFESSIONAL/ENTHUSIASTIC]

Make the testimonials feel authentic and include specific details that make them believable. Avoid over-the-top claims and focus on realistic, relatable outcomes.`
    }
  ]

  const filteredPrompts = selectedCategory === 'all' 
    ? aiPrompts 
    : aiPrompts.filter(prompt => prompt.category === selectedCategory)

  const copyPrompt = (prompt, index) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(index)
    setTimeout(() => setCopiedPrompt(null), 2000)
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
          className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">🤖 AI Prompt Library</h2>
                <p className="text-orange-100">Ready-to-use prompts for ChatGPT, Claude, and other AI tools</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-orange-200 text-2xl"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {promptCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            {/* Prompts Grid */}
            <div className="grid gap-6">
              {filteredPrompts.map((prompt, index) => (
                <div key={prompt.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                      <p className="text-gray-600 mb-3">{prompt.description}</p>
                      <div className="flex gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {prompt.difficulty}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          ⏱️ {prompt.timeEstimate}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyPrompt(prompt.prompt, index)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors ml-4"
                    >
                      {copiedPrompt === index ? 'Copied!' : 'Copy Prompt'}
                    </button>
                  </div>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-700 font-medium">
                      View Full Prompt
                    </summary>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                        {prompt.prompt}
                      </pre>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 How to Use These AI Prompts</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Copy any prompt and paste it into ChatGPT, Claude, or your preferred AI tool</li>
                <li>• Replace all bracketed placeholders [LIKE THIS] with your specific details</li>
                <li>• Customize the output to match your brand voice and style</li>
                <li>• Start with beginner prompts if you're new to AI content creation</li>
                <li>• Combine multiple prompts for comprehensive marketing campaigns</li>
                <li>• Always review and edit AI-generated content before publishing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PromptLibrary
