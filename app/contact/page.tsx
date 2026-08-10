import Link from 'next/link'
import { ArrowUpRight, Mail, Instagram } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met TOPWOOD voor nieuwbouw, renovatie, restauratie of interieurbouw. Gratis en vrijblijvend eerste gesprek.',
}

export default function ContactPage() {
  return (
    <section className="pt-24 lg:pt-32 pb-24">
      <div className="container-x grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-6">
          <div className="eyebrow text-sand-300">Contact</div>
          <h1 className="mt-8 font-display font-bold text-[46px] sm:text-[64px] lg:text-[82px] leading-[0.98] tracking-tight text-ink-50">
            Vertel wat je<br /><span className="text-sand-300">wilt bouwen</span>.
          </h1>
          <p className="mt-8 text-[16.5px] leading-[1.75] text-ink-100 max-w-lg">
            Nieuwbouw, verbouwing, restauratie, interieur — of alles tegelijk. Beschrijf kort
            wat je in gedachten hebt, dan neemt Angelo of iemand uit de ploeg binnen twee dagen
            contact op.
          </p>

          <div className="mt-12 space-y-6">
            {business.email && (
              <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                <div className="frame-thin p-3 group-hover:bg-sand-300 group-hover:text-ink-900 transition-colors">
                  <Mail className="h-5 w-5 text-sand-300 group-hover:text-ink-900" />
                </div>
                <div>
                  <div className="font-display text-[10.5px] tracking-[0.24em] uppercase text-sand-300">Email</div>
                  <div className="text-[15px] text-ink-50 group-hover:text-sand-300">{business.email}</div>
                </div>
              </a>
            )}
            {business.social.instagram && (
              <a href={business.social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="frame-thin p-3 group-hover:bg-sand-300 transition-colors">
                  <Instagram className="h-5 w-5 text-sand-300 group-hover:text-ink-900" />
                </div>
                <div>
                  <div className="font-display text-[10.5px] tracking-[0.24em] uppercase text-sand-300">Instagram</div>
                  <div className="text-[15px] text-ink-50 group-hover:text-sand-300">@{business.social.instagramHandle}</div>
                </div>
              </a>
            )}
          </div>

          <div className="mt-12 frame-thin p-6 bg-ink-900">
            <div className="eyebrow text-sand-300 mb-3">Werkgebied</div>
            <div className="text-[14px] text-ink-100 leading-relaxed">
              {business.region.primary} · {business.region.province}<br/>
              <span className="text-[12px] text-ink-300">
                {business.region.cities.join(' · ')}
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <form className="frame-thin p-8 lg:p-10 bg-ink-900 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Naam" name="naam" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Telefoon" name="telefoon" />
            <Field label="Categorie" name="categorie" placeholder="Nieuwbouw, renovatie, restauratie, interieur…" />
            <Field label="Wat wil je bouwen?" name="bericht" as="textarea" rows={5} required />

            <button type="submit" className="btn btn-solid w-full sm:w-auto">
              Aanvraag versturen <ArrowUpRight className="h-4 w-4"/>
            </button>
            <p className="text-[11px] text-ink-300">Reactie meestal binnen 2 werkdagen.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required = false, placeholder, as, rows }: any) {
  const Tag = as === 'textarea' ? 'textarea' : 'input'
  return (
    <div>
      <label className="block font-display text-[10.5px] tracking-[0.24em] uppercase text-sand-300 mb-2">
        {label}{required && <span className="text-ink-300"> *</span>}
      </label>
      <Tag
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-ink-950 border-2 border-ink-700 focus:border-sand-300 focus:outline-none px-4 py-3 text-[15px] text-ink-50 placeholder:text-ink-500 transition-colors"
      />
    </div>
  )
}
