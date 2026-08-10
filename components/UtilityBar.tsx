import { business } from '@/content/business'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export function UtilityBar() {
  return (
    <div className="bg-ink-900 text-ink-200 text-[12px]">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href={`tel:${business.phoneE164}`} className="inline-flex items-center gap-2 hover:text-sand-300 transition-colors">
            <Phone className="h-3.5 w-3.5" /> {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 hover:text-sand-300 transition-colors">
            <Mail className="h-3.5 w-3.5" /> {business.email}
          </a>
          <span className="hidden md:inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> {business.address.street}, {business.address.city}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-sand-300 transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <span className="hidden sm:inline text-ink-400">Werkzaam op afspraak</span>
        </div>
      </div>
    </div>
  )
}
