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
  const Icon = s.icon

  return (
    <>
      <section className="section-dark py-24 lg:py-32">
        <div className="container-x">
          <Link href="/projecten" className="inline-flex items-center gap-2 text-[12px] font-display tracking-[0.22em] uppercase text-ink-300 hover:text-sand-300 transition-colors mb-8">
            &larr; Alle projecten
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-ink-800 flex items-center justify-center">
              <Icon className="h-5 w-5 text-sand-300" strokeWidth={1.8}/>
            </div>
            <div className="eyebrow text-sand-300">{s.label}</div>
          </div>
          <h1 className="h-hero text-ink-50 max-w-4xl">{s.headline}</h1>
          <p className="mt-8 text-[18px] italic text-sand-300 max-w-2xl">{s.lead}</p>
        </div>
      </section>

      <section className="section-paper py-24 lg:py-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-[17px] leading-[1.8] text-ink-800">{s.intro}</p>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-700">
              {s.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <Link href="/contact" className="btn btn-primary mt-10 inline-flex">Vraag een offerte <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="lg:col-span-5">
            <div className="card">
              <div className="eyebrow mb-6">Wat we doen</div>
              <ul className="space-y-3">
                {s.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-800 border-b border-ink-100 pb-3 last:border-none last:pb-0">
                    <Check className="h-4 w-4 text-sand-400 mt-1 shrink-0" strokeWidth={2}/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {catPhotos.length > 0 && (
        <section className="section-sand py-24 lg:py-32">
          <div className="container-x">
            <div className="mb-10">
              <div className="eyebrow">Recent {s.label.toLowerCase()} werk</div>
              <h2 className="h-section mt-4 text-ink-900">{catPhotos.length} projecten uit de portfolio.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
              {catPhotos.slice(0, 6).map((p) => (
                <div key={p.src} className="group zoom-parent">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-100">
                    <Image src={p.src} alt={`Topwood ${s.label} project ${getPhotoNumber(p)}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover zoom" />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="font-display text-[11px] tracking-[0.22em] uppercase text-ink-500 group-hover:text-sand-400">{s.label}</span>
                    <span className="font-display text-[11px] text-ink-400">{getPhotoNumber(p)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/projecten" className="btn btn-outline">Alle projecten <ArrowRight className="h-4 w-4"/></Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-paper py-24">
        <div className="container-x">
          <div className="eyebrow mb-6">Andere vakgebieden</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((o) => {
              const oPhoto = photosByCategory[o.slug]?.[0]
              const OIcon = o.icon
              return (
                <Link key={o.slug} href={`/diensten/${o.slug}`} className="card group !p-0 overflow-hidden block">
                  {oPhoto && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 zoom-parent">
                      <Image src={oPhoto.src} alt={`Topwood ${o.label} project`} fill sizes="33vw" className="object-cover zoom" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-9 w-9 rounded-full bg-sand-100 flex items-center justify-center">
                        <OIcon className="h-4 w-4 text-sand-600" strokeWidth={1.8}/>
                      </div>
                      <ArrowRight className="h-4 w-4 text-ink-400 group-hover:text-sand-400 group-hover:translate-x-1 transition-all"/>
                    </div>
                    <div className="font-display font-semibold text-lg text-ink-900">{o.label}</div>
                    <div className="mt-2 text-[13px] text-ink-500">{o.lead}</div>
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
