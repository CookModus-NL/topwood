import type { Metadata, Viewport } from 'next'
import './globals.css'
import { business } from '@/content/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const viewport: Viewport = { themeColor: '#0A0A0A' }

const TITLE = 'TOPWOOD · Bouwbedrijf voor nieuwbouw, renovatie, restauratie en interieur'
const DESC = business.longDescription

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: TITLE, template: '%s · TOPWOOD' },
  description: DESC,
  keywords: [
    'bouwbedrijf', 'bouwbedrijf West-Brabant', 'bouwbedrijf Breda',
    'nieuwbouw Breda', 'renovatie Breda', 'restauratie Breda', 'interieurbouw Breda',
    'aannemer Breda', 'aannemer West-Brabant', 'aannemer Noord-Brabant',
    'verbouwing Breda', 'uitbouw Breda', 'dakopbouw Breda',
    'TOPWOOD', 'Angelo Alings', 'bouwbedrijf TOPWOOD',
  ],
  authors: [{ name: business.ownerFullName }],
  creator: business.name,
  publisher: business.name,
  applicationName: business.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: TITLE,
    description: DESC,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
  alternates: { canonical: business.url, languages: { 'nl-NL': business.url } },
  category: 'business',
  other: {
    'geo.region': 'NL-NB',
    'geo.placename': business.address.city,
    'DC.language': 'nl',
    'DC.publisher': business.name,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    alternateName: business.legalName,
    description: business.longDescription,
    slogan: business.tagline,
    url: business.url,
    logo: `${business.url}/logo/topwood-tan-on-dark.svg`,
    email: business.email,
    telephone: business.phoneE164 || undefined,
    foundingDate: business.founded,
    knowsLanguage: ['nl-NL'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    areaServed: business.region.cities.map((c) => ({ '@type': 'City', name: c })),
    priceRange: '€€€',
    currenciesAccepted: 'EUR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: business.categories.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c },
      })),
    },
    sameAs: [business.social.instagram, business.social.facebook, business.social.linkedin].filter(Boolean),
    founder: {
      '@type': 'Person',
      name: business.ownerFullName,
      alternateName: business.ownerFirstName,
    },
  }

  return (
    <html lang="nl-NL">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </head>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
