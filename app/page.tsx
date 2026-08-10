import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { portfolioPhotos, photosByCategory } from '@/content/projects'

export default function HomePage() {
  const heroPhoto = portfolioPhotos.find(p => p.src === '/images/topwood-01.jpg') || portfolioPhotos[0]
  const featurePhotos = portfolioPhotos.slice(0, 8)

  return (
    <>
      {/* ═══════════════════════════════ HERO ═══ */}
      <section className="relative min-h-[86vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroPhoto.src} alt={heroPhoto.caption} fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sand-300 hidden lg:block" />

        <div className="container-x relative py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="reveal frame-thick inline-block px-8 py-6 mb-12 bg-ink-950/85 backdrop-blur-sm" style={{ animationDelay: '0.05s' }}>
                <div className="font-display text-[12px] tracking-[0.32em] text-sand-300 text-center">BOUWBEDRIJF</div>
                <div className="font-display font-bold text-[64px] sm:text-[92px] lg:text-[130px] leading-none tracking-[0.14em] text-sand-300 text-center mt-2">
                  TOPWOOD
                </div>
                <div className="font-display text-[13px] lg:text-[15px] tracking-[0.24em] text-sand-300 text-center mt-4">WIJ MAKEN ALLES.</div>
              </div>

              <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-[11px] lg:text-[13px] tracking-[0.28em] uppercase text-ink-200" style={{ animationDelay: '0.15s' }}>
                {business.categories.map((c, i) => (
                  <span key={c} className="flex items-center gap-x-6">{c}{i < business.categories.length - 1 && <span className="text-sand-500">|</span>}</span>
                ))}
              </div>

              <p className="reveal mt-12 text-[17px] lg:text-[19px] leading-[1.75] text-ink-100 max-w-2xl" style={{ animationDelay: '0.25s' }}>
                {business.longDescription}
              </p>

              <div className="reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.35s' }}>
                <Link href="/projecten" className="btn btn-solid">Bekijk het werk <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="btn">Vraag een offerte</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sand-300 hidden lg:block" />
      </section>

      {/* ═══════════════════════════════ 4 CATEGORIES ═══ */}
      <section className="border-y border-ink-800 bg-ink-900">
        <div className="container-x py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-6">
              <div className="eyebrow text-sand-300">Wat we doen</div>
              <h2 className="mt-6 font-display font-bold text-4xl lg:text-6xl leading-[1] tracking-[-0.02em] text-ink-50">
                Vier categorieën.<br /><span className="text-sand-300">Eén vakmanschap.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15.5px] leading-[1.75] text-ink-200">
                Van compleet nieuw huis tot alleen het maatwerk interieur. TOPWOOD is één ploeg met één handschrift door het hele project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {services.map((s) => {
              const Icon = s.icon
              const catPhotos = photosByCategory[s.slug]
              const previewPhoto = catPhotos[0]
              return (
                <Link key={s.slug} href={`/diensten/${s.slug}`}
                  className="group frame-thin bg-ink-950 relative overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="p-6 lg:p-8">
                      <div className="font-display text-[10px] tracking-[0.28em] text-sand-300 mb-3">
                        {String(services.indexOf(s) + 1).padStart(2, '0')} · {s.label.toUpperCase()}
                      </div>
                      <h3 className="font-display font-bold text-xl lg:text-2xl leading-tight text-ink-50 tracking-tight">
                        {s.headline.split('.')[0]}.
                      </h3>
                      <div className="mt-6 text-[11px] font-display tracking-[0.22em] uppercase text-sand-300 flex items-center gap-2">
                        {catPhotos.length} projecten <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden">
                      {previewPhoto && (
                        <Image src={previewPhoto.src} alt={previewPhoto.caption} fill
                               sizes="(max-width: 768px) 50vw, 25vw"
                               className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PORTFOLIO PREVIEW ═══ */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 items-end mb-14">
            <div className="col-span-12 lg:col-span-8">
              <div className="eyebrow text-sand-300">Recent werk</div>
              <h2 className="mt-6 font-display font-bold text-4xl lg:text-6xl leading-[1] tracking-tight text-ink-50">
                Van tekening<br /><span className="text-sand-300">naar realiteit</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-6">
              <Link href="/projecten" className="inline-flex items-center gap-2 font-display text-[11.5px] tracking-[0.24em] uppercase text-sand-300 hover:text-sand-100">
                Alle projecten <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-5">
            {featurePhotos.map((p, i) => {
              const spans = [
                'col-span-12 md:col-span-8 aspect-[16/10]',
                'col-span-12 md:col-span-4 aspect-[4/5]',
                'col-span-6 md:col-span-4 aspect-square',
                'col-span-6 md:col-span-4 aspect-square',
                'col-span-12 md:col-span-4 aspect-[4/5]',
                'col-span-12 md:col-span-8 aspect-[16/10]',
                'col-span-6 md:col-span-6 aspect-[4/3]',
                'col-span-6 md:col-span-6 aspect-[4/3]',
              ]
              return (
                <Link key={p.src} href="/projecten"
                  className={`${spans[i]} relative overflow-hidden bg-ink-800 frame-thin group`}>
                  <Image src={p.src} alt={p.caption} fill sizes="(max-width: 768px) 50vw, 33vw"
                         className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6">
                    <div className="cat-tag mb-2">{p.category}</div>
                    <div className="font-display font-medium text-[15px] text-sand-300 leading-tight">{p.caption}</div>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-sand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ OVER ANGELO ═══ */}
      <section className="bg-sand-300 text-ink-950">
        <div className="container-x py-24 lg:py-32 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow text-ink-900">Wie</div>
            <h2 className="mt-6 font-display font-bold text-4xl lg:text-6xl leading-[1.05] tracking-tight text-ink-950">
              Angelo Alings.<br /><span className="italic font-medium">Bouwer met eigen hand.</span>
            </h2>
            <div className="mt-10 space-y-5 text-[16px] leading-[1.8] text-ink-800 max-w-xl">
              <p>TOPWOOD is de ploeg van Angelo. Van eerste tekening tot laatste plint: één aanspreekpunt, één handschrift, één verantwoordelijke.</p>
              <p>Geen tussenlaag van projectmanagers. Geen wisselende onderaannemers. Wat je ziet is wat je krijgt.</p>
            </div>
            <Link href="/over" className="btn btn-inverse mt-10 inline-flex">Meer over Angelo <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/5] frame-ink overflow-hidden">
              <Image src="/images/topwood-21.jpg" alt="Angelo aan het werk" fill sizes="30vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ═══ */}
      <section className="py-24 lg:py-32 border-t border-ink-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/topwood-23.jpg" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        </div>
        <div className="container-x relative text-center">
          <div className="eyebrow text-sand-300">Beginnen</div>
          <h2 className="mt-6 font-display font-bold text-4xl lg:text-6xl leading-[1] tracking-tight text-ink-50 max-w-4xl mx-auto">
            Nieuwe woning, verbouwing<br />of interieur op maat?<br />
            <span className="text-sand-300 italic font-medium">Bel Angelo direct.</span>
          </h2>
          <p className="mt-8 text-[15px] text-ink-200 max-w-xl mx-auto">
            <a href={`tel:${business.phoneE164}`} className="text-sand-300 hover:text-sand-100 font-display text-2xl tracking-widest">
              {business.phone}
            </a>
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-solid">Aanvraag doen <ArrowUpRight className="h-4 w-4" /></Link>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" className="btn">Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
