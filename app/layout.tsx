import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import { business } from '@/data/business'
import { socials } from '@/data/socials'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://themercsd.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Merc | Gastropub & Coffee Bar | Flandreau, SD',
    template: '%s | The Merc — Flandreau, SD',
  },
  description:
    'The Merc in Flandreau, South Dakota — your neighborhood gastropub, coffee bar, and live music venue. Award-winning pizza, craft beers, cocktails, and Dakota Joe Coffee. Events every week.',
  keywords: [
    'The Merc Flandreau',
    'restaurants Flandreau SD',
    'pizza Flandreau',
    'coffee Flandreau',
    'live music Flandreau',
    'bar Flandreau South Dakota',
    'gastropub Flandreau',
    'events Flandreau',
    'Dakota Joe Coffee',
    'craft beer South Dakota',
    'Flandreau SD dining',
    'liquor store Flandreau',
  ],
  authors: [{ name: 'The Merc' }],
  creator: 'The Merc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'The Merc',
    title: 'The Merc | Gastropub, Coffee & Live Music | Flandreau, SD',
    description:
      'Award-winning pizza, craft beers, cocktails, Dakota Joe Coffee, and live music in Flandreau, South Dakota.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Merc — Flandreau, South Dakota',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Merc | Gastropub & Coffee Bar | Flandreau, SD',
    description:
      'Award-winning pizza, craft beers, cocktails, Dakota Joe Coffee, and live music in Flandreau, South Dakota.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

// JSON-LD structured data for Local Business / Restaurant
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'BarOrPub', 'LocalBusiness'],
  name: business.name,
  description: business.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US',
  },
  telephone: business.contact.phone,
  url: siteUrl,
  sameAs: [
    socials.facebook.url,
    socials.instagram.url,
    socials.tiktok.url,
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '07:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '07:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '20:00',
    },
  ],
  servesCuisine: ['American', 'Pizza', 'Burgers'],
  priceRange: '$$',
  hasMap: business.address.googleMapsUrl,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-merc-dark text-merc-cream antialiased">
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
