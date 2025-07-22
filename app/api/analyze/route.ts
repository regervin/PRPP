import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the webpage
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    })

    const $ = cheerio.load(response.data)

    // Extract product information
    const productData = {
      title: extractTitle($),
      price: extractPrice($),
      description: extractDescription($),
      features: extractFeatures($),
      benefits: extractBenefits($),
      images: extractImages($),
      rating: extractRating($),
      reviews: extractReviews($)
    }

    return NextResponse.json({ success: true, data: productData })
  } catch (error) {
    console.error('Error analyzing page:', error)
    return NextResponse.json(
      { error: 'Failed to analyze the webpage' },
      { status: 500 }
    )
  }
}

function extractTitle($: cheerio.CheerioAPI): string {
  // Try multiple selectors for product title
  const selectors = [
    'h1',
    '[data-testid="product-title"]',
    '.product-title',
    '.product-name',
    'title'
  ]

  for (const selector of selectors) {
    const title = $(selector).first().text().trim()
    if (title && title.length > 0) {
      return title
    }
  }

  return 'Product Title Not Found'
}

function extractPrice($: cheerio.CheerioAPI): string {
  const selectors = [
    '.price',
    '.product-price',
    '[data-testid="price"]',
    '.cost',
    '.amount'
  ]

  for (const selector of selectors) {
    const price = $(selector).first().text().trim()
    if (price && /\$[\d,]+\.?\d*/.test(price)) {
      return price.match(/\$[\d,]+\.?\d*/)?.[0] || price
    }
  }

  return 'Price Not Found'
}

function extractDescription($: cheerio.CheerioAPI): string {
  const selectors = [
    '.product-description',
    '.description',
    '[data-testid="description"]',
    '.product-details p',
    'meta[name="description"]'
  ]

  for (const selector of selectors) {
    let description = ''
    if (selector.includes('meta')) {
      description = $(selector).attr('content') || ''
    } else {
      description = $(selector).first().text().trim()
    }
    
    if (description && description.length > 50) {
      return description.substring(0, 500) + (description.length > 500 ? '...' : '')
    }
  }

  return 'Description not found'
}

function extractFeatures($: cheerio.CheerioAPI): string[] {
  const features: string[] = []
  
  const selectors = [
    '.features li',
    '.product-features li',
    '.benefits li',
    '.highlights li'
  ]

  for (const selector of selectors) {
    $(selector).each((_, element) => {
      const feature = $(element).text().trim()
      if (feature && feature.length > 0 && feature.length < 200) {
        features.push(feature)
      }
    })
    
    if (features.length > 0) break
  }

  return features.slice(0, 10) // Limit to 10 features
}

function extractBenefits($: cheerio.CheerioAPI): string[] {
  const benefits: string[] = []
  
  const selectors = [
    '.benefits li',
    '.advantages li',
    '.why-choose li',
    '.product-benefits li'
  ]

  for (const selector of selectors) {
    $(selector).each((_, element) => {
      const benefit = $(element).text().trim()
      if (benefit && benefit.length > 0 && benefit.length < 200) {
        benefits.push(benefit)
      }
    })
    
    if (benefits.length > 0) break
  }

  return benefits.slice(0, 8) // Limit to 8 benefits
}

function extractImages($: cheerio.CheerioAPI): string[] {
  const images: string[] = []
  
  $('img').each((_, element) => {
    const src = $(element).attr('src')
    const alt = $(element).attr('alt') || ''
    
    if (src && alt.toLowerCase().includes('product')) {
      images.push(src)
    }
  })

  return images.slice(0, 5) // Limit to 5 images
}

function extractRating($: cheerio.CheerioAPI): number {
  const selectors = [
    '.rating',
    '.stars',
    '[data-testid="rating"]',
    '.review-rating'
  ]

  for (const selector of selectors) {
    const ratingText = $(selector).first().text().trim()
    const ratingMatch = ratingText.match(/(\d+\.?\d*)\s*\/?\s*5?/)
    
    if (ratingMatch) {
      const rating = parseFloat(ratingMatch[1])
      if (rating >= 0 && rating <= 5) {
        return rating
      }
    }
  }

  return 0
}

function extractReviews($: cheerio.CheerioAPI): string[] {
  const reviews: string[] = []
  
  const selectors = [
    '.review-text',
    '.customer-review',
    '.testimonial',
    '.review-content'
  ]

  for (const selector of selectors) {
    $(selector).each((_, element) => {
      const review = $(element).text().trim()
      if (review && review.length > 20 && review.length < 500) {
        reviews.push(review)
      }
    })
    
    if (reviews.length > 0) break
  }

  return reviews.slice(0, 5) // Limit to 5 reviews
}
