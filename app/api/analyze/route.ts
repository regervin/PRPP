import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the webpage content
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    })

    const $ = cheerio.load(response.data)

    // Extract product information
    const productInfo = {
      title: extractTitle($),
      description: extractDescription($),
      price: extractPrice($),
      features: extractFeatures($),
      images: extractImages($),
      benefits: extractBenefits($),
      testimonials: extractTestimonials($)
    }

    return NextResponse.json({ productInfo })
  } catch (error) {
    console.error('Error analyzing product page:', error)
    return NextResponse.json(
      { error: 'Failed to analyze product page' },
      { status: 500 }
    )
  }
}

function extractTitle($: cheerio.CheerioAPI): string {
  // Try multiple selectors for title
  const titleSelectors = [
    'h1',
    '.product-title',
    '.title',
    '[data-testid="product-title"]',
    'title'
  ]

  for (const selector of titleSelectors) {
    const title = $(selector).first().text().trim()
    if (title && title.length > 0) {
      return title
    }
  }

  return 'Product Title Not Found'
}

function extractDescription($: cheerio.CheerioAPI): string {
  const descSelectors = [
    '.product-description',
    '.description',
    '[data-testid="product-description"]',
    'meta[name="description"]'
  ]

  for (const selector of descSelectors) {
    let desc = ''
    if (selector.includes('meta')) {
      desc = $(selector).attr('content') || ''
    } else {
      desc = $(selector).first().text().trim()
    }
    
    if (desc && desc.length > 50) {
      return desc.substring(0, 500) + (desc.length > 500 ? '...' : '')
    }
  }

  return 'Product description not found'
}

function extractPrice($: cheerio.CheerioAPI): string {
  const priceSelectors = [
    '.price',
    '.product-price',
    '[data-testid="price"]',
    '.cost',
    '.amount'
  ]

  for (const selector of priceSelectors) {
    const price = $(selector).first().text().trim()
    if (price && /\$[\d,]+\.?\d*/.test(price)) {
      return price.match(/\$[\d,]+\.?\d*/)?.[0] || 'Price not found'
    }
  }

  return 'Price not found'
}

function extractFeatures($: cheerio.CheerioAPI): string[] {
  const features: string[] = []
  
  const featureSelectors = [
    '.features li',
    '.feature-list li',
    '.benefits li',
    '[data-testid="features"] li'
  ]

  for (const selector of featureSelectors) {
    $(selector).each((_, element) => {
      const feature = $(element).text().trim()
      if (feature && feature.length > 5 && feature.length < 200) {
        features.push(feature)
      }
    })
    
    if (features.length > 0) break
  }

  return features.slice(0, 10) // Limit to 10 features
}

function extractImages($: cheerio.CheerioAPI): string[] {
  const images: string[] = []
  
  $('img').each((_, element) => {
    const src = $(element).attr('src')
    const alt = $(element).attr('alt')
    
    if (src && alt && !src.includes('logo') && !src.includes('icon')) {
      // Convert relative URLs to absolute
      const absoluteUrl = src.startsWith('http') ? src : new URL(src, 'https://example.com').href
      images.push(absoluteUrl)
    }
  })

  return images.slice(0, 5) // Limit to 5 images
}

function extractBenefits($: cheerio.CheerioAPI): string[] {
  const benefits: string[] = []
  
  const benefitSelectors = [
    '.benefits li',
    '.benefit-list li',
    '.advantages li',
    '[data-testid="benefits"] li'
  ]

  for (const selector of benefitSelectors) {
    $(selector).each((_, element) => {
      const benefit = $(element).text().trim()
      if (benefit && benefit.length > 10 && benefit.length < 300) {
        benefits.push(benefit)
      }
    })
    
    if (benefits.length > 0) break
  }

  return benefits.slice(0, 8) // Limit to 8 benefits
}

function extractTestimonials($: cheerio.CheerioAPI): Array<{text: string, author?: string}> {
  const testimonials: Array<{text: string, author?: string}> = []
  
  const testimonialSelectors = [
    '.testimonial',
    '.review',
    '.customer-review',
    '[data-testid="testimonial"]'
  ]

  for (const selector of testimonialSelectors) {
    $(selector).each((_, element) => {
      const text = $(element).find('p, .text, .content').first().text().trim()
      const author = $(element).find('.author, .name, .customer').first().text().trim()
      
      if (text && text.length > 20) {
        testimonials.push({
          text: text.substring(0, 300) + (text.length > 300 ? '...' : ''),
          author: author || undefined
        })
      }
    })
    
    if (testimonials.length > 0) break
  }

  return testimonials.slice(0, 3) // Limit to 3 testimonials
}
