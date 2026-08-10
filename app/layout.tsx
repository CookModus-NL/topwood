import type { Metadata, Viewport } from 'next'
import './globals.css'
import { business } from '@/content/business'
import { UtilityBar } from '@/components/UtilityBar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsappFloat } from '@/components/WhatsappFloat'

export const viewport: Viewport = { themeColor: '#0A0A0A' }

const TITLE = 'TOPWOOD · Bouwbedrijf voor nieuwbouw, renovatie, restauratie en interieur'
const DESC = business.longDescription

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: TITLE, template: '%s · TOPWOOD' },
  description: DESC,
  keywords: [
    'bouwbedrijf', 'bouwbedrijf Vinkeveen', 'bouwbedrijf Utrecht',
    'nieuwbouw Vinkeveen', 'renovatie Vinkeveen', 'restauratie Vinkeveen',
    'interieurbouw Utrecht', 'aannemer Vinkeveen', 'aannemer De Ronde Venen',
    'verbouwing Utrecht', 'uitbouw Randstad', 'dakopbouw Randstad',
    'TOPWOOD', 'Angelo Alings',
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
    images: [{ url: `${business.url}/logo/topwood-banner.jpg`, width: 2048, height: 943, alt: 'TOPWOOD Bouwbedrijf' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
  alternates: { canonical: business.url, languages: { 'nl-NL': business.url } },
  category: 'business',
  other: { 'geo.region': 'NL-UT', 'geo.placename': business.address.city },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    description: business.longDescription,
    url: business.url,
    logo: `${business.url}/logo/topwood-banner.jpg`,
    email: business.email,
    telephone: business.phoneE164,
    foundingDate: business.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    areaServed: business.region.cities.map((c) => ({ '@type': 'City', name: c })),
    priceRange: '€€€',
    sameAs: [business.social.instagram].filter(Boolean),
    founder: { '@type': 'Person', name: business.ownerFullName },
  }

  return (
    <html lang="nl-NL">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      </head>
      <body className="min-h-screen">
        <UtilityBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  )
}
