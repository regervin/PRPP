import React from 'react';
import './globals.css'

export const metadata = {
  title: 'Product Review Profits Pro',
  description: 'AI-powered product review generator for affiliate marketers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
