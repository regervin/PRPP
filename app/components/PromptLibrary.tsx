'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Copy, 
  Filter, 
  BookOpen, 
  Zap, 
  Target,
  Mail,
  Video,
  FileText,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

interface Prompt {
  id: string
  title: string
  category: string
  description: string
  prompt: string
  tags: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
}

export default function PromptLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)

  const categories = ['All', 'Reviews', 'Email Marketing', 'Social Media', 'SEO', 'Video Scripts', 'Landing Pages']

  const prompts: Prompt[] = [
    {
      id: 'product-review-detailed',
      title: 'Detailed Product Review',
      category: 'Reviews',
      description: 'Generate comprehensive product reviews with pros, cons, and recommendations',
      tags: ['review', 'detailed', 'analysis', 'conversion'],
      difficulty: 'Beginner',
      estimatedTime: '5-10 minutes',
      prompt: `Create a detailed product review for [PRODUCT NAME].

Product Information:
- Product Name: [PRODUCT NAME]
- Price: [PRICE]
- Category: [CATEGORY]
- Target Audience: [AUDIENCE]
- Key Features: [LIST 5-7 FEATURES]
- Your Experience: [BRIEF EXPERIENCE DESCRIPTION]

Review Structure:
1. Compelling headline that includes the product name
2. Introduction (100-150 words)
   - Hook the reader with a relatable problem or question
   - Brief overview of your experience with the product
   - What readers will learn from this review

3. Product Overview (150-200 words)
   - What the product is and what it does
   - Who it's designed for
   - Price point and value proposition

4. Key Features Analysis (300-400 words)
   - Break down 5-7 main features
   - Explain how each feature benefits the user
   - Include specific examples or use cases

5. Pros and Cons (200-250 words)
   - List 4-6 genuine pros with explanations
   - List 2-4 honest cons or limitations
   - Be balanced and authentic

6. Who Should Buy This Product (100-150 words)
   - Ideal customer profile
   - Use cases where it excels
   - Situations where it might not be suitable

7. Final Verdict (100-150 words)
   - Overall rating out of 5 stars
   - Summary of key points
   - Clear recommendation

8. Call to Action
   - Direct link to product
   - Any bonuses or special offers
   - Urgency or scarcity if applicable

Tone: [Professional/Casual/Enthusiastic] - maintain authenticity and trustworthiness throughout.`
    },
    {
      id: 'email-welcome-sequence',
      title: 'Welcome Email Sequence',
      category: 'Email Marketing',
      description: 'Create a 5-email welcome sequence that builds trust and drives conversions',
      tags: ['email', 'sequence', 'welcome', 'nurture'],
      difficulty: 'Intermediate',
      estimatedTime: '15-20 minutes',
      prompt: `Create a 5-email welcome sequence for new subscribers interested in [PRODUCT/NICHE].

Subscriber Profile:
- Interest: [MAIN INTEREST/PROBLEM]
- Experience Level: [Beginner/Intermediate/Advanced]
- Main Goal: [WHAT THEY WANT TO ACHIEVE]
- Pain Points: [LIST 3-5 PAIN POINTS]

EMAIL 1 - Welcome & Immediate Value (Send immediately)
Subject Line: [Create 3 options]
- Thank them for subscribing
- Set expectations for what's coming
- Deliver immediate value (tip, resource, or insight)
- Introduce yourself briefly
- Word count: 150-200 words

EMAIL 2 - Your Story & Credibility (Send 1 day later)
Subject Line: [Create 3 options]
- Share your relevant background/story
- Explain why you're passionate about helping them
- Include social proof or credentials
- Ask a question to encourage replies
- Word count: 200-250 words

EMAIL 3 - Major Value Delivery (Send 3 days later)
Subject Line: [Create 3 options]
- Provide substantial free value (guide, checklist, tutorial)
- Address one of their main pain points
- No sales pitch, pure value
- Encourage engagement/sharing
- Word count: 250-300 words

EMAIL 4 - Social Proof & Case Study (Send 5 days later)
Subject Line: [Create 3 options]
- Share a success story or case study
- Include specific results and numbers
- Make it relatable to their situation
- Soft introduction of your solution
- Word count: 200-250 words

EMAIL 5 - Soft Pitch & Special Offer (Send 7 days later)
Subject Line: [Create 3 options]
- Introduce your main product/service
- Explain how it solves their problems
- Include special subscriber-only bonus or discount
- Clear call-to-action
- Create urgency (limited time/quantity)
- Word count: 250-300 words

For each email, include:
- 3 subject line options
- Preview text
- Main content
- Clear call-to-action
- P.S. line when appropriate`
    },
    {
      id: 'youtube-review-script',
      title: 'YouTube Review Video Script',
      category: 'Video Scripts',
      description: 'Complete script for engaging YouTube product review videos',
      tags: ['youtube', 'video', 'script', 'review'],
      difficulty: 'Intermediate',
      estimatedTime: '10-15 minutes',
      prompt: `Create a YouTube video script for reviewing [PRODUCT NAME].

Video Details:
- Product: [PRODUCT NAME]
- Target Length: [8-12 minutes/12-15 minutes/15+ minutes]
- Audience: [DESCRIBE TARGET AUDIENCE]
- Your Channel Focus: [YOUR NICHE]
- Key Selling Points: [LIST 3-5 MAIN BENEFITS]

Script Structure:

HOOK (0-15 seconds)
- Attention-grabbing opening statement
- Tease the main benefit or result
- Create curiosity gap
- Example: "In the next 12 minutes, I'm going to show you exactly why [product] could be the game-changer you've been looking for..."

INTRODUCTION (15-45 seconds)
- Brief self-introduction
- Channel credibility/expertise
- What viewers will learn
- Subscribe reminder
- Example: "Hey everyone, I'm [name], and on this channel, I review [niche] products to help you make better buying decisions..."

PROBLEM/CONTEXT (45-90 seconds)
- Identify the problem this product solves
- Make it relatable to your audience
- Build up the need for a solution
- Example: "If you're like me and struggle with [problem], you know how frustrating it can be when..."

PRODUCT INTRODUCTION (90-180 seconds)
- Introduce the product
- Show the product (unboxing if applicable)
- First impressions
- Price point and positioning
- Example: "Today I'm reviewing [product], which claims to [main benefit]. At $[price], it's positioned as..."

DETAILED REVIEW (3-8 minutes)
Break this into 3-5 key sections:
1. Feature 1 - Demonstration and explanation
2. Feature 2 - Real-world testing
3. Feature 3 - Comparison with alternatives
4. Performance results
5. User experience

For each section, include:
- Clear explanation
- Visual demonstration
- Your honest opinion
- Specific examples

PROS AND CONS (1-2 minutes)
- 4-6 genuine pros with explanations
- 2-4 honest cons or limitations
- Be balanced and trustworthy

WHO IT'S FOR (30-60 seconds)
- Ideal customer profile
- Who should buy it
- Who should skip it

FINAL VERDICT (30-60 seconds)
- Overall rating
- Summary of key points
- Clear recommendation

CALL TO ACTION (30-60 seconds)
- Link to product (with disclosure)
- Any bonuses you're offering
- Subscribe and notification bell
- Comment engagement question

Include throughout:
- Natural transition phrases
- Engagement hooks ("But here's what surprised me...")
- Visual cues for editing
- Disclosure statements
- Timestamps for key sections`
    },
    {
      id: 'comparison-article',
      title: 'Product Comparison Article',
      category: 'SEO',
      description: 'SEO-optimized comparison articles that rank and convert',
      tags: ['comparison', 'seo', 'article', 'ranking'],
      difficulty: 'Advanced',
      estimatedTime: '20-30 minutes',
      prompt: `Create an SEO-optimized comparison article for [PRODUCT A] vs [PRODUCT B] vs [PRODUCT C].

SEO Information:
- Primary Keyword: [MAIN KEYWORD]
- Secondary Keywords: [LIST 5-7 RELATED KEYWORDS]
- Target Word Count: [2000-3000 words]
- Target Audience: [DESCRIBE AUDIENCE]
- Search Intent: [Informational/Commercial/Transactional]

Products to Compare:
1. [PRODUCT A] - $[PRICE] - [BRIEF DESCRIPTION]
2. [PRODUCT B] - $[PRICE] - [BRIEF DESCRIPTION]  
3. [PRODUCT C] - $[PRICE] - [BRIEF DESCRIPTION]

Article Structure:

1. SEO Title (60 characters max)
- Include primary keyword
- Make it compelling and clickable
- Example format: "[Product A] vs [Product B] vs [Product C]: Which is Best in 2024?"

2. Meta Description (155 characters max)
- Include primary keyword
- Mention key comparison points
- Include a call to action

3. Introduction (200-300 words)
- Hook with a relatable problem or question
- Briefly introduce the products being compared
- Explain why this comparison matters
- Preview what readers will learn
- Include primary keyword naturally

4. Quick Comparison Table
- Side-by-side feature comparison
- Price comparison
- Rating comparison
- Key differentiators

5. Individual Product Reviews (400-500 words each)
For each product, include:
- Overview and positioning
- Key features and benefits
- Pros and cons
- Who it's best for
- Pricing and value

6. Head-to-Head Comparisons (300-400 words each)
- [Product A] vs [Product B]
- [Product A] vs [Product C]
- [Product B] vs [Product C]
Focus on key differentiators and use cases

7. Detailed Feature Comparison (400-500 words)
- Performance comparison
- Ease of use
- Customer support
- Value for money
- Long-term reliability

8. Pricing Analysis (200-300 words)
- Cost breakdown
- Value proposition of each
- Hidden costs or fees
- Money-back guarantees

9. User Reviews and Testimonials (200-300 words)
- Aggregate review scores
- Common praise and complaints
- Real user experiences

10. FAQ Section (300-400 words)
- 8-10 common questions
- Include long-tail keywords
- Provide comprehensive answers

11. Final Verdict and Recommendations (300-400 words)
- Clear winner for different use cases
- Summary of key findings
- Specific recommendations based on needs/budget

12. Conclusion (150-200 words)
- Recap main points
- Final recommendation
- Call to action

SEO Optimization:
- Include primary keyword in H1, first paragraph, and conclusion
- Use secondary keywords in H2 and H3 headings
- Include related keywords naturally throughout
- Add internal links to related content
- Suggest external authority links
- Include image alt text recommendations
- Add schema markup suggestions`
    },
    {
      id: 'social-media-campaign',
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Multi-platform social media campaign for product promotion',
      tags: ['social media', 'campaign', 'multi-platform', 'engagement'],
      difficulty: 'Intermediate',
      estimatedTime: '15-25 minutes',
      prompt: `Create a 2-week social media campaign for [PRODUCT NAME] across multiple platforms.

Campaign Details:
- Product: [PRODUCT NAME]
- Campaign Goal: [Awareness/Traffic/Sales/Engagement]
- Target Audience: [DESCRIBE AUDIENCE]
- Budget Level: [Low/Medium/High]
- Key Message: [MAIN SELLING POINT]
- Campaign Hashtag: [#CAMPAIGNHASHTAG]

WEEK 1 - AWARENESS & EDUCATION

INSTAGRAM (7 posts):
Day 1 - Teaser Post
- Caption: [Write engaging teaser]
- Visual: [Describe image/video concept]
- Hashtags: [List 20-30 relevant hashtags]

Day 2 - Problem/Solution Carousel
- Caption: [Address pain point and introduce solution]
- Slides: [Describe 5-slide carousel concept]
- CTA: [Specific call-to-action]

Day 3 - Behind-the-Scenes Story
- Caption: [Personal story or process]
- Visual: [Story concept]
- Engagement: [Question for comments]

Day 4 - Educational Reel
- Script: [30-60 second educational content]
- Hook: [Attention-grabbing opening]
- Value: [Key takeaway]

Day 5 - User-Generated Content
- Caption: [Encourage sharing]
- Contest/Challenge: [Describe participation method]
- Prize: [What they can win]

Day 6 - Feature Highlight
- Caption: [Focus on one key feature]
- Visual: [Demonstration concept]
- Benefits: [How it helps users]

Day 7 - Week Recap
- Caption: [Summarize week's content]
- CTA: [Drive to link in bio]

FACEBOOK (5 posts + 2 ads):
Day 1 - Long-form Value Post (300-500 words)
Day 3 - Video Post (2-3 minutes)
Day 5 - Community Question
Day 6 - Link Post with Article
Day 7 - Live Video Announcement

Ad 1 - Awareness Campaign
- Objective: [Reach/Traffic/Engagement]
- Audience: [Detailed targeting]
- Creative: [Ad concept]
- Copy: [Ad text]

Ad 2 - Retargeting Campaign
- Objective: [Conversions]
- Audience: [Website visitors/engagers]
- Creative: [Conversion-focused concept]
- Copy: [Sales-focused text]

TWITTER (10 tweets + 1 thread):
- Mix of educational, promotional, and engaging content
- Include relevant trending hashtags
- Engage with industry conversations
- Share quick tips and insights

LINKEDIN (3 posts):
- Professional angle on the product
- Industry insights
- Thought leadership content

WEEK 2 - CONVERSION & SALES

[Repeat structure with conversion-focused content]
- Social proof and testimonials
- Limited-time offers
- Urgency and scarcity
- Direct sales content
- Retargeting campaigns

For each post, include:
- Optimal posting times
- Engagement strategies
- Hashtag recommendations
- Visual concepts
- Performance tracking metrics
- Cross-platform promotion ideas`
    },
    {
      id: 'landing-page-copy',
      title: 'High-Converting Landing Page',
      category: 'Landing Pages',
      description: 'Complete landing page copy that converts visitors into customers',
      tags: ['landing page', 'conversion', 'copywriting', 'sales'],
      difficulty: 'Advanced',
      estimatedTime: '25-35 minutes',
      prompt: `Create high-converting landing page copy for [PRODUCT NAME].

Product Information:
- Product: [PRODUCT NAME]
- Price: [PRICE]
- Target Audience: [DESCRIBE AUDIENCE]
- Main Benefit: [PRIMARY BENEFIT]
- Key Features: [LIST 5-7 FEATURES]
- Guarantee: [MONEY-BACK GUARANTEE TERMS]
- Bonuses: [LIST ANY BONUSES]
- Urgency Element: [LIMITED TIME/QUANTITY/BONUS]

Landing Page Structure:

1. HEADLINE (Above the fold)
- Primary headline (10-15 words max)
- Secondary headline/subheadline
- Focus on the main benefit/transformation
- Create curiosity and urgency

2. HERO SECTION
- Compelling hero image/video description
- Trust indicators (testimonials, logos, badges)
- Primary CTA button text and color
- Risk-free guarantee mention

3. PROBLEM AGITATION (150-200 words)
- Identify the main problem your audience faces
- Agitate the pain points
- Make it personal and relatable
- Build emotional connection

4. SOLUTION INTRODUCTION (100-150 words)
- Introduce your product as the solution
- Bridge from problem to solution
- Create hope and possibility
- Tease the benefits to come

5. BENEFITS SECTION (300-400 words)
Transform features into benefits:
- Feature 1 → Benefit (What it means for them)
- Feature 2 → Benefit (How it improves their life)
- Feature 3 → Benefit (Why it matters)
- Feature 4 → Benefit (The transformation)
- Feature 5 → Benefit (The outcome)

Use bullet points or numbered lists for easy scanning.

6. SOCIAL PROOF SECTION (200-300 words)
- Customer testimonials (3-5 detailed testimonials)
- Success stories with specific results
- Trust badges and certifications
- Media mentions or awards
- Number of satisfied customers

7. HOW IT WORKS (150-200 words)
- Simple 3-step process
- Remove complexity and objections
- Show how easy it is to get results
- Include timeline expectations

8. ABOUT THE CREATOR (100-150 words)
- Your credibility and expertise
- Why you created this product
- Your mission to help them
- Personal connection

9. PRICING AND OFFER (200-250 words)
- Clear pricing presentation
- Value stack (show total value)
- Payment options
- Money-back guarantee details
- Bonus inclusions
- Savings/discount highlight

10. URGENCY AND SCARCITY (100-150 words)
- Limited time offer
- Bonus expiration
- Limited quantity
- Price increase warning
- Countdown timer copy

11. FAQ SECTION (300-400 words)
Address 8-10 common objections:
- How long does it take to see results?
- What if it doesn't work for me?
- Is this suitable for beginners?
- How is this different from competitors?
- What's included in the price?
- Is there ongoing support?
- What's the refund policy?
- Are there any hidden costs?

12. FINAL CTA SECTION (150-200 words)
- Recap the main benefits
- Restate the guarantee
- Create final urgency
- Multiple CTA buttons
- Risk reversal statements

13. FOOTER
- Contact information
- Legal disclaimers
- Privacy policy link
- Terms of service link

CTA BUTTONS (Create 5 variations):
1. [Primary CTA text]
2. [Alternative CTA text]
3. [Urgency-focused CTA]
4. [Benefit-focused CTA]
5. [Risk-free CTA]

MOBILE OPTIMIZATION NOTES:
- Shorter paragraphs for mobile
- Larger button sizes
- Simplified navigation
- Fast-loading elements

Include specific recommendations for:
- Color psychology
- Font choices
- Image placement
- Trust signal positioning
- CTA button placement and frequency`
    }
  ]

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const copyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Reviews': <BookOpen className="w-5 h-5" />,
      'Email Marketing': <Mail className="w-5 h-5" />,
      'Social Media': <Users className="w-5 h-5" />,
      'SEO': <TrendingUp className="w-5 h-5" />,
      'Video Scripts': <Video className="w-5 h-5" />,
      'Landing Pages': <FileText className="w-5 h-5" />
    }
    return icons[category] || <Target className="w-5 h-5" />
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    }
    return colors[difficulty as keyof typeof colors] || colors.Beginner
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Prompt <span className="text-blue-600">Library</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-use AI prompts for every aspect of your affiliate marketing business. 
            Copy, customize, and start generating high-converting content today.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {getCategoryIcon(prompt.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{prompt.title}</h3>
                    <p className="text-sm text-gray-500">{prompt.category}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(prompt.difficulty)}`}>
                  {prompt.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">{prompt.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {prompt.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Time Estimate */}
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <Target className="w-4 h-4" />
                <span>{prompt.estimatedTime}</span>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyPrompt(prompt.prompt, prompt.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                {copiedPrompt === prompt.id ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Prompt
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No prompts found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </section>
  )
}
