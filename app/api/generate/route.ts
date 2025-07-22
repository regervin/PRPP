import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { productData, reviewType, tone } = await request.json()

    if (!productData) {
      return NextResponse.json({ error: 'Product data is required' }, { status: 400 })
    }

    // Generate review based on the product data and preferences
    const review = generateReview(productData, reviewType, tone)

    return NextResponse.json({ success: true, review })
  } catch (error) {
    console.error('Error generating review:', error)
    return NextResponse.json(
      { error: 'Failed to generate review' },
      { status: 500 }
    )
  }
}

function generateReview(productData: any, reviewType: string, tone: string): string {
  const { title, price, description, features, benefits, rating } = productData

  // Generate star rating display
  const starRating = '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '⭐' : '')
  
  // Tone-specific phrases
  const toneMap = {
    professional: {
      intro: "After thorough evaluation and testing,",
      verdict: "Based on comprehensive analysis,",
      recommendation: "I recommend this product for"
    },
    casual: {
      intro: "So I've been using this for a while now, and",
      verdict: "Here's the bottom line:",
      recommendation: "This is perfect if you're"
    },
    enthusiastic: {
      intro: "I'm absolutely thrilled to share my experience with",
      verdict: "I can't contain my excitement -",
      recommendation: "You absolutely NEED this if you're"
    },
    skeptical: {
      intro: "I approached this product with healthy skepticism, but",
      verdict: "After rigorous testing and analysis,",
      recommendation: "Despite my initial reservations, this works well for"
    }
  }

  const phrases = toneMap[tone as keyof typeof toneMap] || toneMap.professional

  // Review type templates
  switch (reviewType) {
    case 'detailed':
      return generateDetailedReview(productData, phrases, starRating)
    case 'quick':
      return generateQuickReview(productData, phrases, starRating)
    case 'comparison':
      return generateComparisonReview(productData, phrases, starRating)
    case 'buyer-guide':
      return generateBuyerGuideReview(productData, phrases, starRating)
    default:
      return generateDetailedReview(productData, phrases, starRating)
  }
}

function generateDetailedReview(productData: any, phrases: any, starRating: string): string {
  const { title, price, description, features, benefits, rating } = productData

  return `# ${title} Review: Is It Worth Your Money?

## Quick Verdict ${starRating}
${phrases.intro} this product delivers exceptional value at ${price}. ${description}

## What Makes This Product Stand Out?

### Key Features
${features.map((feature: string) => `- **${feature}**: Premium quality that exceeds expectations`).join('\n')}

### Real-World Benefits
${benefits.map((benefit: string) => `- ${benefit}`).join('\n')}

## Detailed Analysis

### Performance
During extensive testing, this product consistently performed above expectations. The build quality is solid, and the attention to detail is evident in every aspect.

### Value for Money
At ${price}, this represents excellent value considering the features and quality provided. When compared to similar products in the market, it offers superior performance at a competitive price point.

## Pros & Cons

### ✅ Pros
${features.slice(0, 5).map((feature: string) => `- ${feature}`).join('\n')}

### ❌ Cons
- Premium pricing may not suit all budgets
- Learning curve for advanced features
- Limited availability in some regions

## Who Should Buy This?
This product is ideal for:
- Users seeking premium quality and performance
- Those who value long-term durability
- Anyone looking for excellent customer support
- People who appreciate innovative design

## Final Recommendation
${phrases.verdict} this product earns a strong recommendation. The combination of quality, features, and value makes it a standout choice in its category.

**Overall Rating: ${rating}/5 stars**

*Disclosure: This review is based on thorough testing and analysis. Your experience may vary.*`
}

function generateQuickReview(productData: any, phrases: any, starRating: string): string {
  const { title, price, features, rating } = productData

  return `# ${title} - Quick Review ${starRating}

## The Bottom Line
${phrases.intro} this is a solid choice at ${price}. Great quality, reliable performance, and worth the investment.

## Key Highlights
${features.slice(0, 4).map((feature: string) => `• ${feature}`).join('\n')}

## Should You Buy It?
**Yes, if you want:** Quality, reliability, and good value
**Skip if you need:** Budget option or basic features only

**Rating: ${rating}/5** - Recommended for most users.`
}

function generateComparisonReview(productData: any, phrases: any, starRating: string): string {
  const { title, price, features, rating } = productData

  return `# ${title} vs. The Competition ${starRating}

## How It Stacks Up
${phrases.intro} this product outperforms most competitors in its price range (${price}).

## Competitive Advantages
${features.slice(0, 5).map((feature: string) => `✓ **${feature}** - Better than most alternatives`).join('\n')}

## vs. Similar Products
- **Quality**: Superior build and materials
- **Features**: More comprehensive feature set
- **Value**: Better price-to-performance ratio
- **Support**: Excellent customer service

## The Verdict
${phrases.verdict} this beats the competition in most key areas. While slightly more expensive than basic alternatives, the extra cost is justified by superior quality and features.

**Winner in its category - ${rating}/5 stars**`
}

function generateBuyerGuideReview(productData: any, phrases: any, starRating: string): string {
  const { title, price, features, benefits, rating } = productData

  return `# ${title} Buyer's Guide ${starRating}

## What You Need to Know Before Buying

### Product Overview
${phrases.intro} this product offers excellent value at ${price}. Here's everything you need to make an informed decision.

### Key Considerations

#### Features That Matter
${features.slice(0, 6).map((feature: string) => `- **${feature}**: Essential for optimal performance`).join('\n')}

#### Benefits You'll Experience
${benefits.slice(0, 4).map((benefit: string) => `- ${benefit}`).join('\n')}

### Buying Decision Framework

#### Buy This If:
- You prioritize quality over price
- You need reliable, long-term performance
- You value comprehensive features
- You want excellent customer support

#### Consider Alternatives If:
- Budget is your primary concern
- You only need basic functionality
- You prefer simpler products

### Investment Analysis
At ${price}, this represents:
- **Good Value**: Quality justifies the price
- **Long-term Savings**: Durability reduces replacement costs
- **Performance**: Superior results vs. cheaper alternatives

## Final Buying Recommendation
${phrases.recommendation} quality, performance, and reliability. This product delivers on its promises and provides excellent long-term value.

**Buyer Confidence Rating: ${rating}/5 stars**`
}
