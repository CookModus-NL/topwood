import Link from 'next/link'
import Image from 'next/image'
import { business } from '@/content/business'

export function Footer() {
  return (
    <footer className="section-dark mt-24">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Topwood home" className="inline-block">
            <Image src="/logo/topwood-banner.jpg" alt="Topwood Bouwbedrijf" width={320} height={147} className="h-16 w-auto" />
          </Link>
          <p className="mt-8 text-[14.5px] leading-[1.75] text-ink-200 max-w-md">
            {business.shortDescription}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-sand-300 mb-5">Site</div>
          <ul className="space-y-2.5 text-[14px] text-ink-100">
            <li><Link href="/projecten" className="hover:text-sand-300">Werk</Link></li>
            <li><Link href="/diensten/nieuwbouw"   className="hover:text-sand-300">Nieuwbouw</Link></li>
            <li><Link href="/diensten/renovatie"   className="hover:text-sand-300">Renovatie</Link></li>
            <li><Link href="/diensten/restauratie" className="hover:text-sand-300">Restauratie</Link></li>
            <li><Link href="/diensten/interieur"   className="hover:text-sand-300">Interieur</Link></li>
            <li className="pt-3"><Link href="/over"    className="hover:text-sand-300">Over Angelo</Link></li>
            <li><Link href="/contact" className="hover:text-sand-300">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-sand-300 mb-5">Contact</div>
          <ul className="space-y-2.5 text-[14px] text-ink-50">
            <li><a href={`tel:${business.phoneE164}`} className="font-display text-lg tracking-widest hover:text-sand-300">{business.phone}</a></li>
            <li>{business.address.street}, {business.address.postalCode} {business.address.city}</li>
            {business.email && <li><a href={`mailto:${business.email}`} className="hover:text-sand-300">{business.email}</a></li>}
            {business.social.instagram && (
              <li><a href={business.social.instagram} target="_blank" rel="noreferrer" className="hover:text-sand-300">Instagram · @{business.social.instagramHandle}</a></li>
            )}
          </ul>
          <div className="eyebrow text-sand-300 mt-8 mb-3">Werkgebied</div>
          <div className="text-[12.5px] text-ink-300 leading-relaxed">
            {business.region.cities.slice(0, 8).join(' · ')}
          </div>
        </div>
      </div>

      <hr className="hairline" />
      <div className="container-x py-6 flex flex-col sm:flex-row justify-between gap-3 text-[10.5px] font-display tracking-[0.24em] uppercase text-ink-400">
        <span>© {new Date().getFullYear()} · TOPWOOD</span>
        <span>Wij maken alles.</span>
      </div>
    </footer>
  )
}
