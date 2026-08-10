import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met TOPWOOD voor nieuwbouw, renovatie, restauratie of interieurbouw. Vinkeveen · 06 83 56 46 50.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 lg:pt-48 pb-24">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">Contact</div>
            <h1 className="h-hero mt-8 text-ink-50">
              Vertel wat je<br /><span className="italic font-light text-sand-300">wilt bouwen.</span>
            </h1>
            <p className="mt-10 text-[17px] leading-[1.75] text-ink-100 max-w-lg">
              Nieuwbouw, verbouwing, restauratie, interieur. Of alles tegelijk. Beschrijf kort wat je in gedachten hebt, dan neemt Angelo binnen twee dagen contact op.
            </p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-t border-sand-300 pt-6">
                <div className="meta text-sand-300 mb-2">Direct bellen</div>
                <a href={`tel:${business.phoneE164}`} className="font-display text-2xl lg:text-3xl tracking-[0.12em] text-ink-50 hover:text-sand-300 transition-colors block">
                  {business.phone}
                </a>
              </div>
              {business.email && (
                <div className="border-t border-sand-300 pt-6">
                  <div className="meta text-sand-300 mb-2">Email</div>
                  <a href={`mailto:${business.email}`} className="text-[16px] text-ink-50 hover:text-sand-300 link-line">{business.email}</a>
                </div>
              )}
              <div className="border-t border-sand-300 pt-6">
                <div className="meta text-sand-300 mb-2">Vestiging</div>
                <div className="text-[16px] text-ink-50 leading-relaxed">
                  {business.address.street}<br/>
                  {business.address.postalCode} {business.address.city}
                </div>
                <div className="mt-2 text-[13px] text-ink-300">Op afspraak</div>
              </div>
              <div className="border-t border-sand-300 pt-6">
                <div className="meta text-sand-300 mb-2">Instagram</div>
                {business.social.instagram && (
                  <a href={business.social.instagram} target="_blank" rel="noreferrer" className="text-[16px] text-ink-50 hover:text-sand-300 link-line">
                    @{business.social.instagramHandle}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
              <Image src="/images/topwood-23.jpg" alt="Recent werk" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>

            <form className="mt-8 space-y-5">
              <Field label="Naam" name="naam" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Telefoon" name="telefoon" />
              <Field label="Categorie" name="categorie" placeholder="Nieuwbouw, renovatie, restauratie, interieur…" />
              <Field label="Wat wil je bouwen?" name="bericht" as="textarea" rows={5} required />
              <button type="submit" className="btn w-full sm:w-auto pl-0">Aanvraag versturen <ArrowRight className="h-3.5 w-3.5"/></button>
              <p className="text-[11px] text-ink-300">Reactie meestal binnen 2 werkdagen.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-ink-700/40">
        <div className="container-x text-center">
          <div className="text-[12.5px] font-display tracking-[0.28em] uppercase text-ink-300">
            Werkgebied vanuit {business.address.city}
          </div>
          <div className="mt-4 text-[13.5px] text-ink-200 max-w-2xl mx-auto">
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
      <label className="block font-display text-[10.5px] tracking-[0.24em] uppercase text-sand-300 mb-2">
        {label}{required && <span className="text-ink-500"> *</span>}
      </label>
      <Tag
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-ink-700 focus:border-sand-300 focus:outline-none px-0 py-3 text-[15px] text-ink-50 placeholder:text-ink-500 transition-colors"
      />
    </div>
  )
}
