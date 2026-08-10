import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Instagram } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met TOPWOOD voor nieuwbouw, renovatie, restauratie of interieurbouw. Vinkeveen · 06 83 56 46 50.',
}

export default function ContactPage() {
  return (
    <>
      <section className="section-dark py-24 lg:py-32">
        <div className="container-x">
          <div className="eyebrow text-sand-300">Contact</div>
          <h1 className="h-hero mt-6 text-ink-50 max-w-4xl">
            Vertel wat je<br/><span className="text-sand-300">wilt bouwen.</span>
          </h1>
          <p className="mt-8 text-[17px] text-ink-300 max-w-2xl">
            Nieuwbouw, verbouwing, restauratie, interieur. Of alles tegelijk. Beschrijf kort wat je in gedachten hebt, dan neemt Angelo binnen twee dagen contact op.
          </p>
        </div>
      </section>

      <section className="section-paper py-24 lg:py-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact cards */}
          <div className="lg:col-span-5 space-y-4">
            <a href={`tel:${business.phoneE164}`} className="card group flex items-center gap-4 !py-5">
              <div className="h-10 w-10 rounded-full bg-sand-100 flex items-center justify-center shrink-0"><Phone className="h-4 w-4 text-sand-600" strokeWidth={1.8}/></div>
              <div>
                <div className="eyebrow">Bel direct</div>
                <div className="font-display text-lg font-semibold text-ink-900 group-hover:text-sand-400">{business.phone}</div>
              </div>
            </a>
            <a href={`https://wa.me/${business.whatsapp?.replace('+','')}`} target="_blank" rel="noreferrer" className="card group flex items-center gap-4 !py-5">
              <div className="h-10 w-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0"><MessageCircle className="h-4 w-4 text-[#25D366]" strokeWidth={1.8}/></div>
              <div>
                <div className="eyebrow">WhatsApp</div>
                <div className="font-display text-lg font-semibold text-ink-900 group-hover:text-sand-400">Chat met Angelo</div>
              </div>
            </a>
            <a href={`mailto:${business.email}`} className="card group flex items-center gap-4 !py-5">
              <div className="h-10 w-10 rounded-full bg-sand-100 flex items-center justify-center shrink-0"><Mail className="h-4 w-4 text-sand-600" strokeWidth={1.8}/></div>
              <div>
                <div className="eyebrow">Email</div>
                <div className="font-display text-[15px] text-ink-900 group-hover:text-sand-400 break-all">{business.email}</div>
              </div>
            </a>
            <div className="card flex items-center gap-4 !py-5">
              <div className="h-10 w-10 rounded-full bg-sand-100 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-sand-600" strokeWidth={1.8}/></div>
              <div>
                <div className="eyebrow">Vestiging</div>
                <div className="font-display text-[15px] text-ink-900">{business.address.street}, {business.address.postalCode} {business.address.city}</div>
                <div className="mt-1 text-[12px] text-ink-500">Op afspraak</div>
              </div>
            </div>
            {business.social.instagram && (
              <a href={business.social.instagram} target="_blank" rel="noreferrer" className="card group flex items-center gap-4 !py-5">
                <div className="h-10 w-10 rounded-full bg-sand-100 flex items-center justify-center shrink-0"><Instagram className="h-4 w-4 text-sand-600" strokeWidth={1.8}/></div>
                <div>
                  <div className="eyebrow">Instagram</div>
                  <div className="font-display text-[15px] text-ink-900 group-hover:text-sand-400">@{business.social.instagramHandle}</div>
                </div>
              </a>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form className="card space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Naam" name="naam" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Telefoon" name="telefoon" />
              <Field label="Categorie" name="categorie" placeholder="Nieuwbouw, renovatie, restauratie, interieur…" />
              <Field label="Wat wil je bouwen?" name="bericht" as="textarea" rows={5} required />
              <button type="submit" className="btn btn-primary">Aanvraag versturen <ArrowRight className="h-4 w-4"/></button>
              <p className="text-[12px] text-ink-500">Reactie meestal binnen 2 werkdagen.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section-sand py-14">
        <div className="container-x text-center">
          <div className="eyebrow">Werkgebied vanuit {business.address.city}</div>
          <div className="mt-4 text-[13.5px] text-ink-700 max-w-2xl mx-auto">
            {business.region.cities.join(' · ')}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', required = false, placeholder, as, rows }: any) {
  const Tag = as === 'textarea' ? 'textarea' : 'input'
  return (
    <div>
      <label className="block font-display text-[11px] tracking-[0.2em] uppercase text-ink-500 mb-2">
        {label}{required && <span className="text-ink-400"> *</span>}
      </label>
      <Tag
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-paper border border-ink-200 rounded-lg focus:border-sand-400 focus:ring-2 focus:ring-sand-100 focus:outline-none px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors"
      />
    </div>
  )
}
