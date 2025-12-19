import React from 'react'
import './styles.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Myers Driving Academy | Ohio Driver Education',
    template: '%s | Myers Driving Academy',
  },
  description:
    'Family-owned Ohio driver education since 1996. State-certified instructors, flexible online & in-person classes. Trusted by parents for 29 years.',
  keywords: [
    'Ohio driving school',
    'Plymouth Ohio drivers ed',
    'teen driver education',
    'behind the wheel training',
    'Ohio driving academy',
    'driver training Ohio',
  ],
  authors: [{ name: 'Myers Driving Academy' }],
  creator: 'Myers Driving Academy',
  publisher: 'Myers Driving Academy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Myers Driving Academy',
    title: 'Myers Driving Academy | Ohio Driver Education',
    description:
      'Family-owned Ohio driver education since 1996. State-certified instructors, flexible online & in-person classes.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Myers Driving Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myers Driving Academy | Ohio Driver Education',
    description:
      'Family-owned Ohio driver education since 1996. State-certified instructors, flexible online & in-person classes.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when available:
    // google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Myers Driving Academy',
  description: 'Family-owned Ohio driver education serving teens since 1996',
  url: siteUrl,
  telephone: '(419) XXX-XXXX',
  email: 'info@myersdrivingacademy.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'PO BOX 254',
    addressLocality: 'Plymouth',
    addressRegion: 'OH',
    postalCode: '44865',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Ohio',
  },
  priceRange: '$$',
  foundingDate: '1996',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
