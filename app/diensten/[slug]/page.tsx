import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Metadata } from 'next'
import { services, servicesBySlug } from '@/content/services'
import { projectsByCategory } from '@/content/projects'

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
  const Icon = s.icon
  const relatedProjects = projectsByCategory[s.slug] || []
  const otherServices = services.filter((x) => x.slug !== s.slug)

  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 border-b border-ink-800">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="eyebrow text-sand-300 flex items-center gap-3">
                <Icon className="h-4 w-4" strokeWidth={2} />
                {s.label.toUpperCase()}
              </div>
              <h1 className="mt-8 font-display font-bold text-[42px] sm:text-[64px] lg:text-[88px] leading-[0.98] tracking-tight text-ink-50">
                {s.headline}
              </h1>
              <p className="mt-6 font-display text-[18px] lg:text-[22px] italic text-sand-300 max-w-2xl">
                {s.lead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[17px] leading-[1.85] text-ink-100">{s.intro}</p>
            <div className="mt-6 space-y-6 text-[15.5px] leading-[1.85] text-ink-200">
              {s.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <Link href="/contact" className="btn btn-solid mt-10 inline-flex">
              Vraag een offerte <ArrowUpRight className="h-4 w-4"/>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="frame-thin p-8 bg-ink-900">
              <div className="eyebrow text-sand-300 mb-6">Wat we doen</div>
              <ul className="space-y-3">
                {s.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-100">
                    <Check className="h-4 w-4 text-sand-300 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-ink-800">
          <div className="container-x">
            <div className="eyebrow text-sand-300">Recent {s.label.toLowerCase()} werk</div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedProjects.slice(0, 3).map((p) => (
                <Link key={p.slug} href="/projecten" className="group frame-thin aspect-[4/5] relative overflow-hidden bg-ink-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-900" />
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(212,169,124,0.3) 10px, rgba(212,169,124,0.3) 11px)',
                  }} />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="font-display font-bold text-lg text-sand-300">{p.title}</div>
                    <div className="mt-1 text-[10.5px] font-display tracking-[0.24em] uppercase text-ink-300">
                      {p.location} · {p.year}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other categories */}
      <section className="py-16 border-t border-ink-800 bg-ink-900">
        <div className="container-x">
          <div className="eyebrow text-sand-300 mb-8">Andere diensten</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((o) => {
              const OIcon = o.icon
              return (
                <Link key={o.slug} href={`/diensten/${o.slug}`}
                  className="group frame-thin p-6 bg-ink-950 hover:bg-sand-300 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <OIcon className="h-6 w-6 text-sand-300 group-hover:text-ink-900" strokeWidth={1.5}/>
                    <ArrowUpRight className="h-4 w-4 text-sand-300 group-hover:text-ink-900 opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </div>
                  <div className="mt-4 font-display font-bold text-xl text-ink-50 group-hover:text-ink-950">
                    {o.label}
                  </div>
                  <div className="mt-2 text-[13px] text-ink-300 group-hover:text-ink-900 leading-relaxed">
                    {o.lead}
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
