import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Hammer, Building2, Landmark, Sofa, MessageCircle, MapPin, Users, Shield } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { portfolioPhotos, photosByCategory, categoryLabels, getPhotoNumber } from '@/content/projects'

export default function HomePage() {
  const gridPreview = portfolioPhotos.slice(0, 8)

  return (
    <>
      {/* ═══════════════════════════ HERO — zwart canvas, geen foto ═══ */}
      <section className="section-dark relative overflow-hidden">
        {/* Subtiel accent (geen foto) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212,169,124,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,169,124,0.12), transparent 50%)',
        }} />
        <div className="container-x relative py-24 lg:py-40 text-center">
          <div className="reveal max-w-4xl mx-auto">
            <div className="eyebrow text-sand-300">Bouwbedrijf · Vinkeveen · Sinds {business.founded}</div>
            <h1 className="h-hero mt-8 text-ink-50">
              Van fundering tot laatste plint.<br/>
              <span className="text-sand-300 font-medium">Eén ploeg. Eén handschrift.</span>
            </h1>
            <p className="mt-8 text-[16.5px] lg:text-[18px] leading-[1.65] text-ink-200 max-w-2xl mx-auto">
              TOPWOOD is het bouwbedrijf van Angelo Alings. Nieuwbouw, renovatie, restauratie en maatwerk interieur door heel de Randstad.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">Vraag een offerte <ArrowRight className="h-4 w-4"/></Link>
              <Link href="/projecten" className="btn btn-outline-light">Bekijk het werk</Link>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[12.5px] text-ink-300">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sand-300"/> Eén aanspreekpunt</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sand-300"/> Vaste ploeg</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sand-300"/> Vinkeveen &amp; Randstad</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ USPs (paper) ═══ */}
      <section className="section-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow">Waarom TOPWOOD</div>
            <h2 className="h-section mt-6 text-ink-900">
              Vier redenen waarom klanten voor ons kiezen.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users,    title: 'Eigen ploeg',           body: 'Vaste vakmensen. Wat je bespreekt is wat je krijgt.' },
              { icon: Shield,   title: 'Eén verantwoordelijke', body: 'Van fundering tot afwerking. Geen wisselende onderaannemers.' },
              { icon: MapPin,   title: 'Vinkeveen & Randstad',  body: 'Utrecht, Amsterdam en alles daartussen.' },
              { icon: Hammer,   title: 'Van bouw tot interieur',body: 'Metselwerk én maatwerk kastenwand. Alles onder één dak.' },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="card">
                  <div className="h-11 w-11 rounded-full bg-sand-100 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-sand-600" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-900">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-ink-500">{f.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ DIENSTEN (donker, cards met kleine preview) ═══ */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow text-sand-300">Wat we doen</div>
            <h2 className="h-section mt-6 text-ink-50">
              Vier vakgebieden.<br/><span className="text-sand-300">Eén werkwijze.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              const preview = photosByCategory[s.slug][0]
              return (
                <Link key={s.slug} href={`/diensten/${s.slug}`}
                  className="card-dark card group block overflow-hidden !p-0">
                  {preview && (
                    <div className="relative aspect-[4/3] overflow-hidden zoom-parent">
                      <Image src={preview.src} alt={`Topwood ${s.label} project`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover zoom" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-full bg-ink-700 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-sand-300" strokeWidth={1.8} />
                      </div>
                      <ArrowRight className="h-4 w-4 text-ink-400 group-hover:text-sand-300 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-ink-50">{s.label}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-300">{s.lead}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PORTFOLIO GRID (paper) ═══ */}
      <section className="section-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow">Recent werk</div>
              <h2 className="h-section mt-6 text-ink-900">
                Selectie uit de portfolio.
              </h2>
            </div>
            <Link href="/projecten" className="btn btn-outline">Alle projecten <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {gridPreview.map((p) => (
              <Link key={p.src} href="/projecten" className="group block zoom-parent">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 rounded-lg">
                  <Image src={p.src} alt={`Topwood ${p.category} project ${getPhotoNumber(p)}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover zoom" />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <span className="font-display text-[11px] tracking-[0.22em] uppercase text-ink-500 group-hover:text-sand-400 transition-colors">
                    {categoryLabels[p.category]}
                  </span>
                  <span className="font-display text-[11px] tracking-[0.14em] text-ink-400">{getPhotoNumber(p)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ OVER ANGELO (sand achtergrond, foto naast tekst) ═══ */}
      <section className="section-sand py-24 lg:py-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg zoom-parent bg-ink-100">
            <Image src="/images/topwood-15.jpg" alt="Angelo aan het werk" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover zoom" />
          </div>
          <div>
            <div className="eyebrow">De bouwer</div>
            <h2 className="h-section mt-6 text-ink-900">
              Angelo Alings.<br/>
              <span className="text-sand-400 font-medium">Eén handschrift.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-700 max-w-lg">
              <p>
                TOPWOOD is de eigen ploeg van Angelo Alings. Wat je bespreekt is wat je krijgt. Geen tussenlaag van projectmanagers, geen wisselende onderaannemers.
              </p>
              <p>
                Van houtskelet dakopbouw tot maatwerk boekenkast, van complete badkamer tot chevron parket. Elke lijn getrokken met dezelfde precisie.
              </p>
            </div>
            <Link href="/over" className="btn btn-dark mt-10">Meer over Angelo <ArrowRight className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA (donker) ═══ */}
      <section className="section-dark py-24 lg:py-32 text-center">
        <div className="container-x">
          <div className="eyebrow text-sand-300">Beginnen</div>
          <h2 className="h-hero mt-6 text-ink-50 max-w-4xl mx-auto">
            Nieuwe woning, verbouwing<br/>of maatwerk interieur?
          </h2>
          <p className="mt-6 text-[16px] text-ink-300 max-w-xl mx-auto">
            Vrijblijvend eerste gesprek op locatie of via video.
          </p>
          <div className="mt-10">
            <a href={`tel:${business.phoneE164}`} className="font-display font-semibold text-2xl lg:text-4xl tracking-wide text-sand-300 hover:text-sand-100 transition-colors">
              {business.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Aanvraag doen <ArrowRight className="h-4 w-4"/></Link>
            <a href={`https://wa.me/${business.whatsapp?.replace('+','')}`} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              WhatsApp <MessageCircle className="h-4 w-4"/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
