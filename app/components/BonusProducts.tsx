'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Gift, 
  Mail, 
  FileText, 
  Video, 
  BookOpen, 
  Target,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  X,
  Search,
  BarChart3,
  MessageSquare,
  Globe,
  Smartphone,
  ShoppingCart,
  PenTool,
  Camera,
  Headphones
} from 'lucide-react'

interface BonusProduct {
  id: string
  title: string
  description: string
  value: string
  icon: React.ReactNode
  features: string[]
  prompt: string
}

export default function BonusProducts() {
  const [selectedBonus, setSelectedBonus] = useState<BonusProduct | null>(null)

  const bonusProducts: BonusProduct[] = [
    {
      id: 'email-sequences',
      title: 'Email Marketing Sequences',
      description: 'Pre-written email campaigns that convert browsers into buyers',
      value: '$197',
      icon: <Mail className="w-6 h-6" />,
      features: [
        '7-day welcome sequence',
        'Product launch campaigns',
        'Re-engagement sequences',
        'Seasonal promotions',
        'Abandoned cart recovery'
      ],
      prompt: `Create a high-converting email marketing sequence for [PRODUCT NAME]. 

Target Audience: [DESCRIBE YOUR AUDIENCE]
Product Price: [PRICE]
Main Benefits: [LIST 3-5 KEY BENEFITS]
Tone: [Professional/Casual/Enthusiastic]

Generate a 7-email sequence that includes:
1. Welcome email with immediate value
2. Problem agitation email
3. Solution introduction email
4. Social proof and testimonials
5. Objection handling email
6. Urgency and scarcity email
7. Final call-to-action email

Each email should be 150-300 words with compelling subject lines and clear CTAs.`
    },
    {
      id: 'landing-pages',
      title: 'High-Converting Landing Pages',
      description: 'Complete landing page templates optimized for affiliate conversions',
      value: '$297',
      icon: <FileText className="w-6 h-6" />,
      features: [
        'Product review landing pages',
        'Comparison page templates',
        'Bonus stack pages',
        'Squeeze page designs',
        'Thank you page templates'
      ],
      prompt: `Create a high-converting landing page for [PRODUCT NAME] affiliate promotion.

Product Details:
- Name: [PRODUCT NAME]
- Price: [PRICE]
- Main Benefits: [LIST BENEFITS]
- Target Audience: [DESCRIBE AUDIENCE]
- Your Bonus Offer: [DESCRIBE YOUR BONUS]

Include these sections:
1. Attention-grabbing headline
2. Problem identification
3. Solution presentation
4. Benefits overview
5. Social proof section
6. Bonus stack presentation
7. Urgency/scarcity element
8. Strong call-to-action
9. FAQ section
10. Footer with disclaimers

Write compelling copy for each section with persuasive language and clear value propositions.`
    },
    {
      id: 'video-scripts',
      title: 'Video Sales Scripts',
      description: 'Proven video scripts for YouTube reviews and sales videos',
      value: '$147',
      icon: <Video className="w-6 h-6" />,
      features: [
        'YouTube review scripts',
        'VSL templates',
        'Unboxing video scripts',
        'Comparison video outlines',
        'Tutorial video frameworks'
      ],
      prompt: `Create a compelling video sales script for [PRODUCT NAME] review.

Video Type: [YouTube Review/VSL/Unboxing/Comparison]
Duration: [5-10 minutes/10-15 minutes/15+ minutes]
Product: [PRODUCT NAME]
Key Features: [LIST FEATURES]
Target Audience: [DESCRIBE AUDIENCE]

Script Structure:
1. Hook (0-15 seconds) - Grab attention immediately
2. Introduction (15-45 seconds) - Introduce yourself and credibility
3. Problem/Pain Point (45-90 seconds) - What problem does this solve?
4. Solution Overview (90-180 seconds) - Introduce the product
5. Detailed Review (3-8 minutes) - Features, benefits, demonstration
6. Pros and Cons (1-2 minutes) - Honest assessment
7. Who It's For (30-60 seconds) - Target audience
8. Call to Action (30-60 seconds) - Clear next steps
9. Outro (15-30 seconds) - Subscribe/follow

Include specific talking points, transitions, and on-screen text suggestions.`
    },
    {
      id: 'social-media',
      title: 'Social Media Content Pack',
      description: 'Ready-to-post content for all major social platforms',
      value: '$97',
      icon: <Users className="w-6 h-6" />,
      features: [
        'Instagram post templates',
        'Facebook ad copy',
        'Twitter thread templates',
        'LinkedIn article outlines',
        'TikTok video ideas'
      ],
      prompt: `Generate social media content for [PRODUCT NAME] promotion across multiple platforms.

Product: [PRODUCT NAME]
Target Audience: [DESCRIBE AUDIENCE]
Key Message: [MAIN SELLING POINT]
Campaign Duration: [1 week/2 weeks/1 month]

Create content for:

INSTAGRAM (5 posts):
1. Carousel post highlighting key features
2. Story template with swipe-up CTA
3. Reel script showcasing product benefits
4. User-generated content template
5. Behind-the-scenes post

FACEBOOK (3 posts + 2 ads):
1. Long-form value post
2. Video post script
3. Community engagement post
4. Conversion-focused ad copy
5. Retargeting ad copy

TWITTER (5 tweets + 1 thread):
1. Product announcement tweet
2. Benefit-focused tweet
3. Social proof tweet
4. Question/engagement tweet
5. CTA tweet
6. Educational thread (5-7 tweets)

Include hashtags, optimal posting times, and engagement strategies for each platform.`
    },
    {
      id: 'seo-articles',
      title: 'SEO Article Templates',
      description: 'Search-optimized article templates that rank and convert',
      value: '$247',
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        'Product comparison articles',
        'Best of lists',
        'How-to guides',
        'Problem-solution articles',
        'Buyer\'s guide templates'
      ],
      prompt: `Create an SEO-optimized article template for [PRODUCT CATEGORY] reviews.

Primary Keyword: [MAIN KEYWORD]
Secondary Keywords: [LIST 3-5 RELATED KEYWORDS]
Target Audience: [DESCRIBE AUDIENCE]
Article Type: [Comparison/Best Of/How-To/Buyer's Guide]
Word Count Target: [1500-2000/2000-3000/3000+ words]

Article Structure:
1. SEO Title (60 characters max)
2. Meta Description (155 characters max)
3. Introduction (150-200 words)
   - Hook with problem/question
   - Brief overview of what's covered
   - Promise of value
4. Table of Contents
5. Main Content Sections (5-8 sections)
   - H2 and H3 headings with keywords
   - Detailed information with examples
   - Internal linking opportunities
6. Comparison Table/Chart
7. FAQ Section (5-10 questions)
8. Conclusion with CTA
9. Author Bio Box

Include:
- Keyword density guidelines
- Internal linking suggestions
- Image alt text recommendations
- Schema markup opportunities
- Featured snippet optimization tips`
    },
    {
      id: 'conversion-tools',
      title: 'Conversion Optimization Tools',
      description: 'Advanced tools and templates to maximize your conversion rates',
      value: '$197',
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        'A/B testing templates',
        'Conversion tracking setup',
        'Heatmap analysis guides',
        'CRO checklists',
        'Performance dashboards'
      ],
      prompt: `Create a comprehensive conversion optimization strategy for [PRODUCT NAME] affiliate campaign.

Current Performance:
- Traffic: [MONTHLY VISITORS]
- Conversion Rate: [CURRENT %]
- Average Order Value: [AMOUNT]
- Traffic Sources: [LIST MAIN SOURCES]

Optimization Areas:
1. Landing Page Optimization
   - Headline variations to test
   - CTA button improvements
   - Form optimization
   - Trust signal placement

2. Email Sequence Optimization
   - Subject line A/B tests
   - Send time optimization
   - Content personalization
   - Segmentation strategies

3. Traffic Optimization
   - SEO improvements
   - Paid ad optimization
   - Social media enhancement
   - Referral program setup

4. Conversion Tracking Setup
   - Google Analytics goals
   - Facebook Pixel events
   - Email marketing metrics
   - ROI calculation methods

Provide specific action items, testing timelines, and success metrics for each area.`
    },
    {
      id: 'affiliate-funnels',
      title: 'Complete Affiliate Funnels',
      description: 'End-to-end sales funnels that maximize affiliate commissions',
      value: '$397',
      icon: <Target className="w-6 h-6" />,
      features: [
        'Multi-step funnel blueprints',
        'Upsell and downsell sequences',
        'Lead magnet funnels',
        'Webinar funnel templates',
        'Retargeting campaigns'
      ],
      prompt: `Design a complete affiliate marketing funnel for [PRODUCT NAME].

Funnel Objective: [Lead Generation/Direct Sales/Webinar Registration]
Target Audience: [DESCRIBE AUDIENCE]
Traffic Source: [Paid Ads/SEO/Social Media/Email]
Budget: [Low/Medium/High]

Funnel Structure:

STAGE 1 - AWARENESS (Top of Funnel)
- Traffic Source: [SPECIFY SOURCE]
- Landing Page: [DESCRIBE PURPOSE]
- Lead Magnet: [FREE OFFER TO CAPTURE LEADS]
- Content: [BLOG POSTS/VIDEOS/SOCIAL CONTENT]

STAGE 2 - INTEREST (Middle of Funnel)
- Email Sequence: [NUMBER OF EMAILS]
- Content Delivery: [HOW YOU DELIVER VALUE]
- Nurture Strategy: [HOW YOU BUILD TRUST]
- Social Proof: [TESTIMONIALS/CASE STUDIES]

STAGE 3 - CONSIDERATION (Bottom of Funnel)
- Sales Page: [MAIN OFFER PRESENTATION]
- Objection Handling: [ADDRESS COMMON CONCERNS]
- Urgency/Scarcity: [CREATE URGENCY]
- Bonus Stack: [YOUR EXCLUSIVE BONUSES]

STAGE 4 - CONVERSION
- Checkout Process: [OPTIMIZE FOR CONVERSIONS]
- Upsells: [ADDITIONAL OFFERS]
- Downsells: [LOWER-PRICED ALTERNATIVES]
- Thank You Page: [POST-PURCHASE EXPERIENCE]

STAGE 5 - RETENTION
- Follow-up Sequence: [POST-PURCHASE EMAILS]
- Customer Support: [HELP AND RESOURCES]
- Referral Program: [ENCOURAGE SHARING]
- Future Offers: [RELATED PRODUCTS]

Include specific copy, design recommendations, and conversion optimization tips for each stage.`
    },
    {
      id: 'podcast-scripts',
      title: 'Podcast Interview Scripts',
      description: 'Professional scripts for podcast appearances and interviews',
      value: '$127',
      icon: <Headphones className="w-6 h-6" />,
      features: [
        'Guest interview templates',
        'Host introduction scripts',
        'Product mention frameworks',
        'Story-telling templates',
        'Call-to-action scripts'
      ],
      prompt: `Create podcast interview scripts for promoting [PRODUCT NAME].

Podcast Details:
- Show Name: [PODCAST NAME]
- Host: [HOST NAME]
- Audience: [DESCRIBE LISTENER BASE]
- Episode Length: [30/45/60 minutes]
- Your Role: [Guest/Co-host/Sponsor]

GUEST INTERVIEW SCRIPT:

Pre-Interview Preparation:
- Key talking points about [PRODUCT NAME]
- Personal stories and experiences
- Statistics and data points
- Audience-relevant examples

Introduction (2-3 minutes):
- Personal background and expertise
- How you discovered [PRODUCT NAME]
- Why you're passionate about this topic
- What listeners will learn

Main Content (20-40 minutes):
1. Problem Identification
   - What problem does [PRODUCT NAME] solve?
   - Personal story about facing this problem
   - Industry statistics and trends

2. Solution Deep Dive
   - How [PRODUCT NAME] works
   - Key features and benefits
   - Real-world results and case studies

3. Implementation Tips
   - How to get started
   - Common mistakes to avoid
   - Best practices for success

4. Success Stories
   - Customer testimonials
   - Your personal results
   - Transformation examples

Call-to-Action (2-3 minutes):
- Special offer for podcast listeners
- Where to learn more
- How to connect with you
- Next steps for interested listeners

NATURAL PRODUCT MENTIONS:
- Weave product mentions into stories
- Use specific examples and results
- Address common objections naturally
- Provide value before pitching

Include conversation starters, transition phrases, and ways to handle difficult questions.`
    },
    {
      id: 'webinar-templates',
      title: 'High-Converting Webinar Templates',
      description: 'Complete webinar frameworks that sell products effectively',
      value: '$347',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'Webinar slide templates',
        'Registration page copy',
        'Follow-up sequences',
        'Q&A frameworks',
        'Replay strategies'
      ],
      prompt: `Create a high-converting webinar template for [PRODUCT NAME].

Webinar Details:
- Title: [COMPELLING WEBINAR TITLE]
- Duration: [45/60/90 minutes]
- Target Audience: [DESCRIBE ATTENDEES]
- Main Promise: [WHAT THEY'LL LEARN/ACHIEVE]
- Product Price: [PRICE POINT]

WEBINAR STRUCTURE:

Pre-Webinar (Registration & Promotion):
- Registration page headline and copy
- Email sequence to registered attendees
- Social media promotion posts
- Reminder email templates

Opening (5-10 minutes):
- Welcome and introductions
- Agenda overview
- Credibility establishment
- Audience engagement question

Content Delivery (25-35 minutes):
Section 1: Problem Identification (8-10 minutes)
- Industry statistics and trends
- Common pain points
- Cost of inaction
- Personal story or case study

Section 2: Solution Framework (10-15 minutes)
- Introduce your methodology
- 3-5 key principles or steps
- Success stories and examples
- Build anticipation for the offer

Section 3: Implementation Strategy (7-10 minutes)
- How to get started
- Common obstacles and solutions
- Timeline for results
- Tools and resources needed

Transition to Offer (5 minutes):
- Recap key points
- Address the "how" question
- Introduce [PRODUCT NAME] as the solution
- Build urgency and scarcity

Product Presentation (10-15 minutes):
- What [PRODUCT NAME] includes
- Unique features and benefits
- Pricing and payment options
- Bonuses and guarantees
- Limited-time offer details

Q&A Session (10-15 minutes):
- Pre-planned questions and answers
- Objection handling
- Additional value delivery
- Final call-to-action

Closing (3-5 minutes):
- Recap the offer
- Final urgency reminder
- Thank attendees
- Next steps

POST-WEBINAR FOLLOW-UP:
- Immediate thank you email
- Replay access and deadline
- Special offer for non-attendees
- Segmentation based on attendance

Include specific slides, talking points, and conversion optimization strategies.`
    },
    {
      id: 'mobile-marketing',
      title: 'Mobile Marketing Mastery',
      description: 'Mobile-optimized campaigns and SMS marketing templates',
      value: '$177',
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        'SMS marketing campaigns',
        'Mobile app promotion',
        'Push notification templates',
        'Mobile-first landing pages',
        'Location-based marketing'
      ],
      prompt: `Create a mobile marketing campaign for [PRODUCT NAME].

Campaign Objective: [App Downloads/Product Sales/Lead Generation]
Target Audience: [MOBILE USER DEMOGRAPHICS]
Primary Platform: [iOS/Android/Both]
Budget: [DAILY/MONTHLY BUDGET]

MOBILE CAMPAIGN STRATEGY:

SMS Marketing Campaign:
1. Welcome Series (3 messages)
   - Welcome message with immediate value
   - Product introduction with benefits
   - Special mobile-only offer

2. Promotional Series (5 messages)
   - Feature highlight messages
   - Social proof and testimonials
   - Limited-time offers
   - Abandoned cart recovery
   - Re-engagement campaign

3. Retention Series (4 messages)
   - Usage tips and tricks
   - Customer success stories
   - Loyalty program invites
   - Referral opportunities

Mobile App Promotion:
- App store optimization (ASO)
- In-app purchase strategies
- Push notification campaigns
- User onboarding sequences
- Retention and engagement tactics

Mobile-First Landing Pages:
- Thumb-friendly design elements
- Fast-loading mobile pages
- Simplified forms and CTAs
- Mobile payment integration
- Location-based personalization

Social Media Mobile Strategy:
- Instagram Stories campaigns
- TikTok video scripts
- Snapchat ad templates
- Mobile-optimized Facebook ads
- YouTube Shorts content

Location-Based Marketing:
- Geofencing campaigns
- Local business partnerships
- Event-based promotions
- Weather-triggered messages
- Time-sensitive offers

MOBILE OPTIMIZATION CHECKLIST:
- Page load speed under 3 seconds
- Touch-friendly buttons and links
- Readable fonts without zooming
- Simplified navigation
- Mobile payment options
- One-click social sharing

Include specific copy, design guidelines, and performance metrics for each component.`
    },
    {
      id: 'ecommerce-optimization',
      title: 'E-commerce Conversion Toolkit',
      description: 'Complete toolkit for optimizing online store conversions',
      value: '$267',
      icon: <ShoppingCart className="w-6 h-6" />,
      features: [
        'Product page optimization',
        'Cart abandonment recovery',
        'Checkout optimization',
        'Customer review systems',
        'Upsell/cross-sell strategies'
      ],
      prompt: `Create an e-commerce optimization strategy for [PRODUCT NAME] sales.

Store Details:
- Platform: [Shopify/WooCommerce/Custom]
- Monthly Visitors: [NUMBER]
- Current Conversion Rate: [PERCENTAGE]
- Average Order Value: [AMOUNT]
- Main Traffic Sources: [LIST SOURCES]

OPTIMIZATION AREAS:

Product Page Optimization:
1. Headlines and Descriptions
   - Benefit-focused headlines
   - Feature-to-benefit translations
   - SEO-optimized descriptions
   - Emotional trigger words

2. Visual Elements
   - High-quality product images
   - 360-degree view options
   - Video demonstrations
   - Lifestyle photography

3. Social Proof
   - Customer review integration
   - Rating and testimonial display
   - User-generated content
   - Trust badges and certifications

4. Pricing Strategy
   - Psychological pricing tactics
   - Comparison with competitors
   - Bundle and package deals
   - Limited-time offers

Shopping Cart Optimization:
1. Cart Design
   - Clear product information
   - Easy quantity adjustments
   - Shipping cost transparency
   - Security assurances

2. Abandonment Recovery
   - Exit-intent popups
   - Email recovery sequences
   - SMS reminders
   - Retargeting campaigns

Checkout Process:
1. Streamlined Flow
   - Single-page checkout
   - Guest checkout option
   - Multiple payment methods
   - Mobile optimization

2. Trust Building
   - Security badges
   - Money-back guarantees
   - Customer testimonials
   - Contact information

Post-Purchase Optimization:
1. Order Confirmation
   - Thank you page optimization
   - Upsell opportunities
   - Social sharing incentives
   - Referral program introduction

2. Follow-up Campaigns
   - Delivery tracking updates
   - Product usage tips
   - Review request sequences
   - Repeat purchase incentives

Customer Retention:
1. Loyalty Programs
   - Points-based systems
   - Tier-based rewards
   - Exclusive member benefits
   - Birthday and anniversary offers

2. Email Marketing
   - Welcome series for new customers
   - Product recommendation engines
   - Win-back campaigns
   - Seasonal promotions

Include specific implementation steps, A/B testing recommendations, and success metrics for each area.`
    },
    {
      id: 'content-creation',
      title: 'Content Creation Accelerator',
      description: 'Templates and frameworks for creating engaging content at scale',
      value: '$187',
      icon: <PenTool className="w-6 h-6" />,
      features: [
        'Blog post templates',
        'Content calendar frameworks',
        'Headline formulas',
        'Storytelling templates',
        'Content repurposing guides'
      ],
      prompt: `Create a content creation system for promoting [PRODUCT NAME].

Content Goals:
- Primary Objective: [Brand Awareness/Lead Generation/Sales]
- Target Audience: [DESCRIBE AUDIENCE]
- Content Pillars: [3-5 MAIN TOPICS]
- Publishing Frequency: [DAILY/WEEKLY/BI-WEEKLY]
- Platforms: [BLOG/SOCIAL/VIDEO/PODCAST]

CONTENT FRAMEWORK:

Blog Content Strategy:
1. Educational Content (40%)
   - How-to guides and tutorials
   - Industry insights and trends
   - Problem-solving articles
   - Best practices and tips

2. Promotional Content (20%)
   - Product features and benefits
   - Case studies and success stories
   - Customer testimonials
   - Behind-the-scenes content

3. Entertaining Content (25%)
   - Industry humor and memes
   - Personal stories and experiences
   - Interactive content and polls
   - Trending topic commentary

4. Inspirational Content (15%)
   - Success stories and transformations
   - Motivational quotes and messages
   - Industry leader interviews
   - Vision and mission content

Content Templates:

BLOG POST TEMPLATE:
1. Attention-Grabbing Headline
   - Use power words and numbers
   - Promise specific benefits
   - Create curiosity gaps

2. Compelling Introduction
   - Hook with a story or statistic
   - Identify the problem
   - Promise a solution

3. Value-Packed Body
   - Use subheadings for scannability
   - Include actionable tips
   - Add relevant examples
   - Incorporate visuals

4. Strong Conclusion
   - Summarize key points
   - Include clear call-to-action
   - Encourage engagement

SOCIAL MEDIA TEMPLATES:

Instagram Posts:
- Educational carousels
- Behind-the-scenes stories
- User-generated content
- Product showcases
- Inspirational quotes

Facebook Posts:
- Long-form value posts
- Community questions
- Live video announcements
- Event promotions
- Customer spotlights

LinkedIn Articles:
- Industry thought leadership
- Professional insights
- Business case studies
- Career advice
- Company updates

Content Calendar Framework:
- Monthly theme planning
- Weekly content buckets
- Daily posting schedules
- Seasonal campaign integration
- Performance tracking metrics

Content Repurposing Strategy:
1. Blog Post → Multiple Formats
   - Social media posts
   - Email newsletter content
   - Podcast episode topics
   - Video script outlines
   - Infographic concepts

2. Video Content → Written Formats
   - Blog post transcriptions
   - Social media captions
   - Email sequences
   - Podcast show notes
   - Quote graphics

Include specific examples, templates, and optimization tips for each content type.`
    },
    {
      id: 'influencer-outreach',
      title: 'Influencer Partnership Playbook',
      description: 'Complete system for finding and partnering with influencers',
      value: '$227',
      icon: <Camera className="w-6 h-6" />,
      features: [
        'Influencer research templates',
        'Outreach email scripts',
        'Partnership agreements',
        'Campaign brief templates',
        'Performance tracking tools'
      ],
      prompt: `Create an influencer marketing campaign for [PRODUCT NAME].

Campaign Details:
- Product: [PRODUCT NAME]
- Target Audience: [DEMOGRAPHICS AND INTERESTS]
- Campaign Budget: [TOTAL BUDGET]
- Campaign Duration: [TIMEFRAME]
- Primary Goal: [AWARENESS/SALES/ENGAGEMENT]

INFLUENCER STRATEGY:

Influencer Identification:
1. Micro-Influencers (1K-100K followers)
   - Higher engagement rates
   - More affordable partnerships
   - Niche audience alignment
   - Authentic recommendations

2. Macro-Influencers (100K-1M followers)
   - Broader reach potential
   - Professional content creation
   - Established audience trust
   - Brand partnership experience

3. Nano-Influencers (1K-10K followers)
   - Highly engaged communities
   - Cost-effective partnerships
   - Local market influence
   - Authentic peer recommendations

Research Criteria:
- Audience demographics match
- Engagement rate above 3%
- Content quality and consistency
- Brand alignment and values
- Previous partnership success

Outreach Templates:

INITIAL CONTACT EMAIL:
Subject: Partnership Opportunity with [YOUR BRAND]

Hi [INFLUENCER NAME],

I've been following your content on [PLATFORM] and love how you [SPECIFIC COMPLIMENT ABOUT THEIR CONTENT].

I'm reaching out because I think [PRODUCT NAME] would be a perfect fit for your audience. [BRIEF PRODUCT DESCRIPTION AND WHY IT MATCHES THEIR CONTENT].

We're looking for authentic creators to partner with, and I'd love to send you [PRODUCT NAME] to try out with no strings attached. If you love it as much as we think you will, we can discuss a potential partnership.

Would you be interested in learning more?

Best regards,
[YOUR NAME]

PARTNERSHIP PROPOSAL:
Campaign Brief Template:
- Campaign objectives and KPIs
- Content requirements and guidelines
- Posting schedule and deadlines
- Compensation structure
- Usage rights and exclusivity
- Performance bonuses
- Brand guidelines and messaging

Content Guidelines:
1. Authentic Integration
   - Natural product placement
   - Personal experience sharing
   - Honest opinions and reviews
   - Lifestyle integration

2. Platform-Specific Content
   - Instagram: Stories + Feed posts
   - TikTok: Trending audio integration
   - YouTube: Dedicated review videos
   - Blog: In-depth written reviews

3. Call-to-Action Requirements
   - Discount code promotion
   - Link in bio direction
   - Swipe-up or link stickers
   - Comment engagement prompts

Performance Tracking:
- Reach and impressions
- Engagement rates and comments
- Click-through rates
- Conversion tracking
- Brand mention sentiment
- Follower growth impact

Campaign Management:
1. Pre-Campaign
   - Influencer vetting and selection
   - Contract negotiation and signing
   - Product shipping and briefing
   - Content calendar coordination

2. During Campaign
   - Content approval process
   - Performance monitoring
   - Real-time optimization
   - Community management support

3. Post-Campaign
   - Performance analysis and reporting
   - Relationship maintenance
   - Content repurposing rights
   - Future partnership planning

Include specific outreach scripts, contract templates, and ROI calculation methods.`
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600 font-semibold text-lg">EXCLUSIVE BONUSES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get These <span className="text-purple-600">$2,847 Worth</span> of Bonuses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you get Review Profits Pro today, you'll also receive these powerful bonus tools 
            to supercharge your affiliate marketing success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bonusProducts.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedBonus(bonus)}
            >
              {/* Value Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {bonus.value}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {bonus.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {bonus.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {bonus.description}
              </p>

              {/* Features Preview */}
              <div className="space-y-2">
                {bonus.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {bonus.features.length > 3 && (
                  <div className="text-sm text-purple-600 font-medium">
                    +{bonus.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Total Bonus Value</h3>
          <div className="text-5xl font-bold mb-4">$2,847</div>
          <p className="text-purple-100 text-lg mb-6">
            All these bonuses are included FREE when you get Review Profits Pro today!
          </p>
          <div className="flex items-center justify-center gap-4 text-purple-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Extra Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Lifetime Updates</span>
            </div>
          </div>
        </motion.div>

        {/* Bonus Detail Modal */}
        {selectedBonus && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {selectedBonus.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedBonus.title}</h3>
                      <p className="text-purple-100">{selectedBonus.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBonus(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
                    <div className="space-y-3">
                      {selectedBonus.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prompt Template */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">AI Prompt Template</h4>
                    <div className="bg-gray-50 rounded-lg p-4 border">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                        {selectedBonus.prompt}
                      </pre>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(selectedBonus.prompt)}
                      className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      Copy Prompt
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
