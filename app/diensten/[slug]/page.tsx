import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import type { Metadata } from 'next'
import { services, servicesBySlug } from '@/content/services'
import { photosByCategory, categoryLabels, getPhotoNumber } from '@/content/projects'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = servicesBySlug[slug]
  if (!s) return { title: 'Niet gevonden' }
  return { title: s.metaTitle, description: s.metaDescription }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const s = servicesBySlug[slug]
  if (!s) notFound()
  const catPhotos = photosByCategory[s.slug]
  const otherServices = services.filter((x) => x.slug !== s.slug)
  const hero = catPhotos[0]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {hero && (
          <>
            <Image src={hero.src} alt={`Topwood ${s.label} project`} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/90" />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 container-x pb-16 lg:pb-24">
          <div className="eyebrow">{s.label}</div>
          <h1 className="h-hero mt-8 text-ink-50 max-w-4xl">{s.headline}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="eyebrow">Aanpak</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="text-[19px] lg:text-[22px] leading-[1.6] italic font-light text-sand-300 max-w-2xl">
              {s.lead}
            </p>
            <div className="mt-10 space-y-5 text-[16px] lg:text-[17px] leading-[1.8] text-ink-100">
              <p>{s.intro}</p>
              {s.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <Link href="/contact" className="btn pl-0 mt-12"> Vraag een offerte <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-24 border-t border-ink-700/40 bg-ink-900">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="eyebrow">Wat we doen</div>
            <h2 className="h-block mt-6 text-ink-50">
              Alles binnen {s.label.toLowerCase()}.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {s.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] lg:text-[16px] text-ink-100 pb-4 border-b border-ink-700/40">
                  <Check className="h-4 w-4 text-sand-300 mt-1.5 shrink-0" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {catPhotos.length > 1 && (
        <section className="py-24 lg:py-32 border-t border-ink-700/40">
          <div className="container-x">
            <div className="eyebrow mb-8">Recent {s.label.toLowerCase()} werk</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
              {catPhotos.slice(0, 6).map((p) => (
                <div key={p.src} className="group relative aspect-[4/5] overflow-hidden bg-ink-800 zoom-on-hover">
                  <Image src={p.src} alt={`Topwood ${s.label} project ${getPhotoNumber(p)}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-[11px] font-display tracking-[0.24em] uppercase text-sand-300">{s.label} {getPhotoNumber(p)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/projecten" className="btn"> Alle projecten <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-24 border-t border-ink-700/40">
        <div className="container-x">
          <div className="eyebrow mb-8">Andere vakgebieden</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((o, i) => {
              const oPhoto = photosByCategory[o.slug]?.[0]
              return (
                <Link key={o.slug} href={`/diensten/${o.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-ink-800 zoom-on-hover">
                    {oPhoto && (
                      <Image src={oPhoto.src} alt={`Topwood ${o.label} project`} fill sizes="33vw" className="object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="meta text-sand-300 mb-2">0{i + 2}</div>
                      <div className="font-display text-2xl text-ink-50 group-hover:text-sand-300 transition-colors">{o.label}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
