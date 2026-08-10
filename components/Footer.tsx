import Link from 'next/link'
import { business } from '@/content/business'

export function Footer() {
  return (
    <footer className="mt-32 border-t-2 border-sand-300/25 bg-ink-950">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Big framed brand */}
        <div className="md:col-span-6">
          <div className="frame-thick inline-block px-8 py-6">
            <div className="font-display text-[11px] tracking-[0.32em] text-sand-300 text-center">
              BOUWBEDRIJF
            </div>
            <div className="font-display font-bold text-[52px] lg:text-[72px] leading-none tracking-[0.14em] text-sand-300 text-center mt-2">
              TOPWOOD
            </div>
            <div className="font-display text-[13px] tracking-[0.24em] text-sand-300 text-center mt-3">
              WIJ MAKEN ALLES.
            </div>
          </div>
          <div className="mt-5 font-display text-[10.5px] tracking-[0.24em] uppercase text-ink-300">
            {business.categories.join(' · ')}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <div className="eyebrow text-sand-300 mb-4">Site</div>
          <ul className="space-y-2.5 text-[14px] text-ink-100">
            <li><Link href="/diensten/nieuwbouw"   className="hover:text-sand-300">Nieuwbouw</Link></li>
            <li><Link href="/diensten/renovatie"   className="hover:text-sand-300">Renovatie</Link></li>
            <li><Link href="/diensten/restauratie" className="hover:text-sand-300">Restauratie</Link></li>
            <li><Link href="/diensten/interieur"   className="hover:text-sand-300">Interieur</Link></li>
            <li className="pt-3"><Link href="/projecten" className="hover:text-sand-300">Projecten</Link></li>
            <li><Link href="/over"                 className="hover:text-sand-300">Over Angelo</Link></li>
            <li><Link href="/contact"              className="hover:text-sand-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Region */}
        <div className="md:col-span-3">
          <div className="eyebrow text-sand-300 mb-4">Contact</div>
          <ul className="space-y-2 text-[14px] text-ink-100">
            {business.email && <li><a href={`mailto:${business.email}`} className="hover:text-sand-300">{business.email}</a></li>}
            {business.phone && <li><a href={`tel:${business.phoneE164 || business.phone}`} className="hover:text-sand-300">{business.phone}</a></li>}
            {business.social.instagram && (
              <li><a href={business.social.instagram} target="_blank" rel="noreferrer" className="hover:text-sand-300">
                Instagram @{business.social.instagramHandle}
              </a></li>
            )}
          </ul>
          <div className="eyebrow text-sand-300 mt-8 mb-4">Werkgebied</div>
          <div className="text-[13px] text-ink-100 leading-relaxed">
            {business.region.primary} · {business.region.province}
            <div className="text-[11.5px] text-ink-300 mt-2">
              {business.region.cities.slice(0, 6).join(' · ')} …
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x py-6 flex flex-col sm:flex-row justify-between gap-3 text-[10.5px] font-display tracking-[0.24em] uppercase text-ink-300">
          <span>© {new Date().getFullYear()} · Bouwbedrijf TOPWOOD</span>
          <span>Wij maken alles.</span>
        </div>
      </div>
    </footer>
  )
}
