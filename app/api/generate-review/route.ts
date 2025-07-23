import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { productInfo, reviewType, tone } = await request.json()

    if (!productInfo) {
      return NextResponse.json({ error: 'Product information is required' }, { status: 400 })
    }

    // Generate review based on the extracted product information
    const review = generateReview(productInfo, reviewType, tone)

    return NextResponse.json({ review })
  } catch (error) {
    console.error('Error generating review:', error)
    return NextResponse.json(
      { error: 'Failed to generate review' },
      { status: 500 }
    )
  }
}

function generateReview(productInfo: any, reviewType: string, tone: string): string {
  const { title, description, price, features, benefits } = productInfo

  // Generate different review structures based on type
  switch (reviewType) {
    case 'detailed':
      return generateDetailedReview(productInfo, tone)
    case 'quick':
      return generateQuickReview(productInfo, tone)
    case 'comparison':
      return generateComparisonReview(productInfo, tone)
    case 'buyer-guide':
      return generateBuyerGuideReview(productInfo, tone)
    default:
      return generateDetailedReview(productInfo, tone)
  }
}

function generateDetailedReview(productInfo: any, tone: string): string {
  const { title, description, price, features, benefits } = productInfo
  
  const toneAdjustments = getToneAdjustments(tone)
  
  return `# ${title} Review: ${toneAdjustments.headline}

## ${toneAdjustments.overviewTitle}

${toneAdjustments.intro} After ${toneAdjustments.testingPeriod} with the ${title}, I'm ${toneAdjustments.sentiment} to share my comprehensive review. ${price ? `Priced at ${price}, ` : ''}this product ${toneAdjustments.positioning} in its market segment.

## Key Features That ${toneAdjustments.standoutVerb}

${features && features.length > 0 ? features.map((feature: string, index: number) => 
  `### ${getFeatureIcon(index)} **${feature}**
${generateFeatureDescription(feature, tone)}`
).join('\n\n') : 'Features information not available from the source page.'}

## What ${toneAdjustments.experienceVerb}

### ✅ **${toneAdjustments.prosTitle}**
${generateProsSection(features, benefits, tone)}

### ❌ **${toneAdjustments.consTitle}**
${generateConsSection(tone)}

## Who Should ${toneAdjustments.buyVerb} This?

This product is ${toneAdjustments.idealFor}:
- **Professionals** who need reliable performance
- **Enthusiasts** seeking quality and features
- **Budget-conscious buyers** looking for value
- **Beginners** who want ease of use

## ${toneAdjustments.verdictTitle}

**Rating: ⭐⭐⭐⭐⭐ (4.5/5)**

${toneAdjustments.conclusion} The ${title} ${toneAdjustments.finalThoughts} ${price ? `While the ${price} price point might seem steep, ` : ''}the combination of features and performance ${toneAdjustments.valueStatement}.

**Bottom Line**: ${toneAdjustments.bottomLine}

---

*${toneAdjustments.disclaimer}*`
}

function generateQuickReview(productInfo: any, tone: string): string {
  const { title, price, features } = productInfo
  const toneAdjustments = getToneAdjustments(tone)
  
  return `# ${title} - Quick Review

## ${toneAdjustments.quickSummary}

${toneAdjustments.quickIntro} ${price ? `At ${price}, ` : ''}this product offers solid value for most users.

## Key Highlights
${features && features.length > 0 ? features.slice(0, 5).map((feature: string) => `• ${feature}`).join('\n') : '• Quality construction and design\n• User-friendly interface\n• Good value for money'}

## Quick Verdict
**Rating: ⭐⭐⭐⭐ (4/5)**

${toneAdjustments.quickConclusion} ${title} is ${toneAdjustments.quickRecommendation}.

${toneAdjustments.quickBottomLine}`
}

function generateComparisonReview(productInfo: any, tone: string): string {
  const { title, price, features } = productInfo
  const toneAdjustments = getToneAdjustments(tone)
  
  return `# ${title} vs Competitors: Comprehensive Comparison

## How Does ${title} Stack Up?

${toneAdjustments.comparisonIntro} I've compared the ${title} against its main competitors to help you make an informed decision.

## Feature Comparison

| Feature | ${title} | Competitor A | Competitor B |
|---------|----------|--------------|--------------|
${features && features.length > 0 ? features.slice(0, 5).map((feature: string) => 
  `| ${feature} | ✅ Excellent | ⚠️ Good | ❌ Limited |`
).join('\n') : '| Quality | ✅ Excellent | ⚠️ Good | ❌ Limited |\n| Features | ✅ Comprehensive | ⚠️ Basic | ❌ Minimal |'}

## Price Comparison
${price ? `- **${title}**: ${price}` : '- **' + title + '**: Competitive pricing'}
- **Competitor A**: 15% more expensive
- **Competitor B**: 20% less, but fewer features

## ${toneAdjustments.comparisonVerdict}

${toneAdjustments.comparisonConclusion} ${title} ${toneAdjustments.comparisonRecommendation}.`
}

function generateBuyerGuideReview(productInfo: any, tone: string): string {
  const { title, price, features } = productInfo
  const toneAdjustments = getToneAdjustments(tone)
  
  return `# ${title} Buyer's Guide: Everything You Need to Know

## Should You Buy the ${title}?

${toneAdjustments.guideIntro} This comprehensive buyer's guide will help you determine if the ${title} is right for your needs.

## What to Consider Before Buying

### 1. Your Budget
${price ? `The ${title} is priced at ${price}, positioning it in the mid-to-premium range.` : 'Consider your budget range for this type of product.'}

### 2. Your Use Case
${generateUseCaseSection(features)}

### 3. Alternatives to Consider
${generateAlternativesSection(tone)}

## Decision Framework

**Buy if you:**
- Need reliable, quality performance
- Value comprehensive features
- Want long-term durability

**Skip if you:**
- Have a very tight budget
- Need only basic functionality
- Prefer different brand ecosystem

## ${toneAdjustments.guideConclusion}

${toneAdjustments.guideFinalThoughts} ${title} ${toneAdjustments.guideRecommendation}.`
}

function getToneAdjustments(tone: string) {
  switch (tone) {
    case 'professional':
      return {
        headline: 'A Comprehensive Analysis',
        overviewTitle: 'Professional Assessment',
        intro: 'In this detailed review,',
        testingPeriod: 'extensive testing and evaluation',
        sentiment: 'pleased',
        positioning: 'positions itself competitively',
        standoutVerb: 'Distinguish This Product',
        experienceVerb: 'I Discovered',
        prosTitle: 'Strengths',
        consTitle: 'Areas for Improvement',
        buyVerb: 'Consider',
        idealFor: 'particularly well-suited for',
        verdictTitle: 'Final Assessment',
        conclusion: 'Based on thorough evaluation,',
        finalThoughts: 'demonstrates solid engineering and thoughtful design.',
        valueStatement: 'justifies the investment for serious users',
        bottomLine: 'A reliable choice for professionals and enthusiasts who prioritize quality and performance.',
        disclaimer: 'This review is based on extensive testing and objective analysis.',
        quickSummary: 'Professional Quick Take',
        quickIntro: 'After thorough evaluation,',
        quickConclusion: 'From a professional standpoint,',
        quickRecommendation: 'a solid choice for discerning users',
        quickBottomLine: 'Recommended for professional use.',
        comparisonIntro: 'Through systematic comparison,',
        comparisonVerdict: 'Competitive Analysis',
        comparisonConclusion: 'Based on comprehensive comparison,',
        comparisonRecommendation: 'offers the best balance of features and value',
        guideIntro: 'As an industry professional,',
        guideConclusion: 'Professional Recommendation',
        guideFinalThoughts: 'From a professional perspective,',
        guideRecommendation: 'represents a sound investment for serious users'
      }
    case 'casual':
      return {
        headline: 'My Honest Take',
        overviewTitle: 'What I Really Think',
        intro: 'Hey there!',
        testingPeriod: 'spending some quality time',
        sentiment: 'excited',
        positioning: 'fits nicely',
        standoutVerb: 'Really Impressed Me',
        experienceVerb: 'I Loved (and Didn\'t Love)',
        prosTitle: 'What I Loved',
        consTitle: 'What Could Be Better',
        buyVerb: 'Think About Getting',
        idealFor: 'perfect for',
        verdictTitle: 'My Final Thoughts',
        conclusion: 'Honestly,',
        finalThoughts: 'really surprised me in the best way.',
        valueStatement: 'is totally worth it',
        bottomLine: 'If you\'re looking for something reliable and well-made, this is it!',
        disclaimer: 'Just my honest opinion based on real-world use!',
        quickSummary: 'Quick & Honest',
        quickIntro: 'Real talk -',
        quickConclusion: 'Bottom line,',
        quickRecommendation: 'definitely worth checking out',
        quickBottomLine: 'Would recommend to friends!',
        comparisonIntro: 'I\'ve tried a bunch of similar products, and',
        comparisonVerdict: 'How It Stacks Up',
        comparisonConclusion: 'After trying them all,',
        comparisonRecommendation: 'is my top pick',
        guideIntro: 'Thinking about getting one? Let me help!',
        guideConclusion: 'My Recommendation',
        guideFinalThoughts: 'If you ask me,',
        guideRecommendation: 'is a great choice for most people'
      }
    case 'enthusiastic':
      return {
        headline: 'This is AMAZING!',
        overviewTitle: 'Why I\'m So Excited About This',
        intro: 'I\'m absolutely thrilled to share',
        testingPeriod: 'an incredible journey',
        sentiment: 'blown away and can\'t wait',
        positioning: 'absolutely dominates',
        standoutVerb: 'Absolutely Blew Me Away',
        experienceVerb: 'What Made Me Fall in Love',
        prosTitle: 'What Makes This INCREDIBLE',
        consTitle: 'Minor Nitpicks (But Still Love It!)',
        buyVerb: 'Absolutely Need',
        idealFor: 'absolutely perfect for',
        verdictTitle: 'Why This is a GAME-CHANGER',
        conclusion: 'I\'m genuinely excited to say',
        finalThoughts: 'has completely exceeded my expectations!',
        valueStatement: 'is an absolute steal',
        bottomLine: 'This is hands-down one of the best purchases you can make!',
        disclaimer: 'I\'m genuinely excited about this product - this review reflects my authentic enthusiasm!',
        quickSummary: 'Quick Excitement!',
        quickIntro: 'OMG, this is fantastic!',
        quickConclusion: 'I\'m so impressed -',
        quickRecommendation: 'absolutely MUST have this',
        quickBottomLine: 'Buy it NOW - you won\'t regret it!',
        comparisonIntro: 'After trying everything out there,',
        comparisonVerdict: 'The Clear Winner!',
        comparisonConclusion: 'There\'s no contest -',
        comparisonRecommendation: 'absolutely crushes the competition',
        guideIntro: 'Get ready to be amazed!',
        guideConclusion: 'My Enthusiastic Recommendation',
        guideFinalThoughts: 'I can\'t recommend this enough -',
        guideRecommendation: 'will absolutely transform your experience'
      }
    case 'critical':
      return {
        headline: 'An Unbiased Critical Review',
        overviewTitle: 'The Complete Picture',
        intro: 'In this balanced assessment,',
        testingPeriod: 'rigorous testing and critical evaluation',
        sentiment: 'committed to providing',
        positioning: 'attempts to compete',
        standoutVerb: 'Warrant Attention',
        experienceVerb: 'The Reality Check',
        prosTitle: 'Genuine Strengths',
        consTitle: 'Significant Limitations',
        buyVerb: 'Carefully Consider',
        idealFor: 'might work for',
        verdictTitle: 'Critical Assessment',
        conclusion: 'After careful consideration,',
        finalThoughts: 'has both merits and notable shortcomings.',
        valueStatement: 'may justify the cost for some users',
        bottomLine: 'A decent option with reservations - consider alternatives before deciding.',
        disclaimer: 'This review presents an honest, critical assessment based on thorough testing.',
        quickSummary: 'Critical Quick Take',
        quickIntro: 'Being completely honest,',
        quickConclusion: 'The reality is,',
        quickRecommendation: 'has potential but significant limitations',
        quickBottomLine: 'Proceed with realistic expectations.',
        comparisonIntro: 'When critically compared to alternatives,',
        comparisonVerdict: 'Honest Comparison',
        comparisonConclusion: 'In all fairness,',
        comparisonRecommendation: 'holds its own but isn\'t clearly superior',
        guideIntro: 'Before you buy, consider these critical factors:',
        guideConclusion: 'Critical Buying Advice',
        guideFinalThoughts: 'With realistic expectations,',
        guideRecommendation: 'could work, but explore alternatives first'
      }
    default:
      return getToneAdjustments('professional')
  }
}

function getFeatureIcon(index: number): string {
  const icons = ['🎵', '🔇', '🔋', '⚡', '🎧', '📱', '💎', '🚀', '🛡️', '⭐']
  return icons[index % icons.length]
}

function generateFeatureDescription(feature: string, tone: string): string {
  const descriptions = {
    professional: `This feature demonstrates thoughtful engineering and provides tangible benefits for users seeking reliable performance.`,
    casual: `I really love this feature - it makes such a difference in day-to-day use!`,
    enthusiastic: `This feature is absolutely incredible and completely changes the game!`,
    critical: `While this feature works as advertised, there are some limitations to consider.`
  }
  
  return descriptions[tone as keyof typeof descriptions] || descriptions.professional
}

function generateProsSection(features: string[], benefits: string[], tone: string): string {
  const defaultPros = [
    'Solid build quality and attention to detail',
    'Intuitive user experience and interface',
    'Good value proposition for the price point',
    'Reliable performance in real-world conditions'
  ]
  
  const pros = features && features.length > 0 
    ? features.slice(0, 4).map(f => `${f} works exceptionally well`)
    : defaultPros
  
  return pros.map(pro => `- **${pro}**`).join('\n')
}

function generateConsSection(tone: string): string {
  const cons = {
    professional: [
      'Premium pricing may limit accessibility',
      'Learning curve for advanced features',
      'Limited customization options'
    ],
    casual: [
      'A bit pricey for some budgets',
      'Takes a little time to get used to',
      'Wish it had more color options'
    ],
    enthusiastic: [
      'Price might be steep for some (but worth it!)',
      'So many features, might be overwhelming at first',
      'Wish they made even more versions!'
    ],
    critical: [
      'Overpriced compared to alternatives',
      'Steep learning curve with poor documentation',
      'Limited features for the price point'
    ]
  }
  
  const selectedCons = cons[tone as keyof typeof cons] || cons.professional
  return selectedCons.map(con => `- **${con}**`).join('\n')
}

function generateUseCaseSection(features: string[]): string {
  return `Consider your primary use case:
- **Daily Use**: ${features && features.length > 0 ? features[0] : 'Core functionality'} makes it suitable for regular use
- **Professional Work**: Advanced features support professional requirements
- **Casual Use**: User-friendly design works well for occasional use`
}

function generateAlternativesSection(tone: string): string {
  const alternatives = {
    professional: 'Consider established competitors with proven track records and comprehensive support ecosystems.',
    casual: 'There are some other good options out there, but this one really stands out for most people.',
    enthusiastic: 'While there are alternatives, nothing comes close to this amazing product!',
    critical: 'Several alternatives offer better value propositions and fewer compromises.'
  }
  
  return alternatives[tone as keyof typeof alternatives] || alternatives.professional
}
