import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight, ArrowDown } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { portfolioPhotos, photosByCategory, categoryLabels } from '@/content/projects'

export default function HomePage() {
  // Hero: klassieke gang met paneelwerk (heel premium beeld)
  const heroPhoto = portfolioPhotos.find(p => p.src === '/images/topwood-23.jpg') || portfolioPhotos[0]

  // Featured projecten: uitgekozen sterke beelden
  const featured = [
    portfolioPhotos.find(p => p.src === '/images/topwood-23.jpg'), // TV-wand met haard opgeleverd
    portfolioPhotos.find(p => p.src === '/images/topwood-14.jpg'), // Luxe badkamer
    portfolioPhotos.find(p => p.src === '/images/topwood-45.jpg'), // Boekenkast verweerd
    portfolioPhotos.find(p => p.src === '/images/topwood-01.jpg'), // Zwarte gevel
    portfolioPhotos.find(p => p.src === '/images/topwood-38.jpg'), // Chevron eiken vloer
  ].filter(Boolean)

  return (
    <>
      {/* ═══════════════════════════════ HERO — full-bleed foto ═══ */}
      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <Image
          src={heroPhoto!.src}
          alt={heroPhoto!.caption}
          fill priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950/90" />

        {/* Hero content — minimaal, klein linksboven & rechtsonder */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="container-x pt-32 lg:pt-40">
            <div className="reveal max-w-4xl">
              <div className="eyebrow">Bouwbedrijf · Vinkeveen · Sinds {business.founded}</div>
              <h1 className="h-hero mt-8 text-ink-50">
                Wij maken<br />
                <span className="italic font-light">alles.</span>
              </h1>
            </div>
          </div>

          <div className="container-x pb-16">
            <div className="grid grid-cols-12 gap-8 items-end">
              <div className="col-span-12 lg:col-span-6 reveal-slow">
                <p className="text-[16px] lg:text-[18px] leading-[1.7] text-ink-100 max-w-md">
                  {business.longDescription}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row gap-4 lg:justify-end reveal-slow">
                <Link href="/projecten" className="btn">Bekijk het werk <ArrowRight className="h-3.5 w-3.5" /></Link>
                <Link href="/contact" className="btn">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ink-300 animate-pulse">
          <ArrowDown className="h-4 w-4" />
        </div>
      </section>

      {/* ═══════════════════════════════ INTRO — grote statement ═══ */}
      <section className="py-32 lg:py-48 border-b border-ink-700/40">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-4">
            <div className="eyebrow">Introductie</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="h-section text-ink-50">
              Van fundering tot laatste plint.<br />
              <span className="italic font-light text-sand-300">Één handschrift door het hele project.</span>
            </h2>
            <p className="mt-12 text-[17px] lg:text-[19px] leading-[1.75] text-ink-100 max-w-2xl">
              Angelo Alings bouwt en verbouwt vanuit Vinkeveen door heel de Randstad — nieuwbouw, renovatie, restauratie en maatwerk interieur. Één ploeg, één planning, één aanspreekpunt. Geen wisselende onderaannemers, geen tussenlaag van projectmanagers.
            </p>
            <div className="mt-10">
              <Link href="/over" className="btn pl-0">Meer over Angelo <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SELECTED WORK — grote beelden ═══ */}
      <section>
        {featured.map((p, i) => (
          <Link key={p!.src} href="/projecten" className="group block relative">
            <div className="relative w-full h-[70vh] min-h-[500px] lg:h-[85vh] overflow-hidden zoom-on-hover bg-ink-800">
              <Image
                src={p!.src}
                alt={p!.caption}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
            <div className="container-x">
              <div className="grid grid-cols-12 gap-4 -mt-32 lg:-mt-40 relative">
                <div className="col-span-12 lg:col-span-8">
                  <div className="meta text-sand-300 mb-4">
                    {String(i + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')} · {categoryLabels[p!.category]}
                  </div>
                  <h3 className="h-section text-ink-50 max-w-3xl">
                    {p!.caption}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:pt-10 flex lg:justify-end items-end">
                  <span className="inline-flex items-center gap-3 font-display text-[11.5px] tracking-[0.24em] uppercase text-sand-300 group-hover:text-sand-100 transition-colors">
                    Meer werk <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="h-32 lg:h-40" />
          </Link>
        ))}
      </section>

      {/* ═══════════════════════════════ 4 CATEGORIES — full bleed foto's per categorie ═══ */}
      <section className="border-t border-ink-700/40 py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-6">
              <div className="eyebrow">Diensten</div>
              <h2 className="h-section mt-8 text-ink-50">
                Vier vakgebieden.<br /><span className="italic font-light text-sand-300">Eén werkwijze.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
            {services.map((s, i) => {
              const catPhotos = photosByCategory[s.slug]
              const preview = catPhotos[0]
              return (
                <Link key={s.slug} href={`/diensten/${s.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-800 zoom-on-hover">
                    {preview && (
                      <Image src={preview.src} alt={preview.caption} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <div>
                      <div className="meta text-sand-300">{String(i + 1).padStart(2, '0')} — {s.label}</div>
                      <h3 className="h-block mt-3 text-ink-50 group-hover:text-sand-300 transition-colors">{s.headline.split('.')[0]}.</h3>
                    </div>
                    <span className="text-ink-300 group-hover:text-sand-300 transition-colors">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-ink-200 max-w-md">{s.lead}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ OVER ANGELO ═══ */}
      <section className="border-t border-ink-700/40 py-24 lg:py-32">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
              <Image src="/images/topwood-21.jpg" alt="Angelo aan het werk" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <div className="eyebrow">Wie</div>
            <h2 className="h-section mt-8 text-ink-50">
              Angelo Alings.<br /><span className="italic font-light">De bouwer</span>.
            </h2>
            <div className="mt-10 space-y-6 text-[16px] lg:text-[17px] leading-[1.8] text-ink-100 max-w-lg">
              <p>
                TOPWOOD is de eigen ploeg van Angelo Alings — een bouwbedrijf zonder tussenlaag, zonder verrassingen. Wat je bespreekt is wat je krijgt.
              </p>
              <p>
                Van houtskelet dakopbouw tot maatwerk boekenkast, van complete badkamer tot chevron parket. Elke lijn getrokken met dezelfde precisie.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/over" className="btn pl-0">Het verhaal <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ═══ */}
      <section className="relative overflow-hidden border-t border-ink-700/40">
        <div className="absolute inset-0">
          <Image src="/images/topwood-45.jpg" alt="" fill className="object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        </div>
        <div className="container-x relative py-32 lg:py-48 text-center">
          <div className="eyebrow">Contact</div>
          <h2 className="h-hero mt-8 text-ink-50 max-w-5xl mx-auto">
            Volgend project<br /><span className="italic font-light text-sand-300">is het jouwe?</span>
          </h2>
          <div className="mt-12">
            <a href={`tel:${business.phoneE164}`} className="font-display text-2xl lg:text-3xl tracking-[0.16em] text-sand-300 hover:text-sand-100">
              {business.phone}
            </a>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            <Link href="/contact" className="btn">Aanvraag doen <ArrowRight className="h-3.5 w-3.5" /></Link>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" className="btn">Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
