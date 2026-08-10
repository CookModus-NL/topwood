import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { projects, projectsByCategory } from '@/content/projects'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Projecten',
  description: 'Portfolio van TOPWOOD: nieuwbouw, renovatie, restauratie en interieur projecten uit West-Brabant.',
}

const categoryOrder = ['nieuwbouw', 'renovatie', 'restauratie', 'interieur'] as const

export default function ProjectenPage() {
  return (
    <>
      <section className="pt-24 lg:pt-32 pb-16 border-b border-ink-800">
        <div className="container-x">
          <div className="eyebrow text-sand-300">Portfolio</div>
          <h1 className="mt-8 font-display font-bold text-[46px] sm:text-[72px] lg:text-[100px] leading-[0.95] tracking-tight text-ink-50 max-w-5xl">
            Van tekening<br /><span className="text-sand-300">naar realiteit</span>.
          </h1>
          <p className="mt-8 text-[17px] leading-[1.7] text-ink-200 max-w-2xl">
            Selectie van recent werk. Klik door voor foto&apos;s en context per project. Zoek je iets specifieks?
            <Link href="/contact" className="text-sand-300 hover:text-sand-100 ml-1">Overleg vrijblijvend.</Link>
          </p>
        </div>
      </section>

      {categoryOrder.map((cat) => {
        const list = projectsByCategory[cat]
        if (!list?.length) return null
        const service = services.find((s) => s.slug === cat)!
        return (
          <section key={cat} className="py-16 lg:py-20 border-b border-ink-800">
            <div className="container-x">
              <div className="flex items-baseline justify-between mb-8 gap-4">
                <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight text-ink-50">
                  {service.label}
                </h2>
                <Link href={`/diensten/${cat}`} className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.22em] uppercase text-sand-300 hover:text-sand-100 shrink-0">
                  Over {cat} <ArrowUpRight className="h-3.5 w-3.5"/>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {list.map((p) => (
                  <div key={p.slug} className="frame-thin aspect-[4/5] relative overflow-hidden bg-ink-800 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-900" />
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(212,169,124,0.3) 10px, rgba(212,169,124,0.3) 11px)',
                    }}/>
                    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                      <div className="cat-tag mb-4">{p.category}</div>
                      <div className="font-display font-bold text-xl lg:text-2xl text-sand-300 leading-tight">{p.title}</div>
                      <div className="mt-2 text-[10.5px] font-display tracking-[0.24em] uppercase text-ink-300">
                        {p.location} · {p.year}
                      </div>
                      <div className="mt-3 text-[13px] text-ink-200">{p.short}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-24">
        <div className="container-x text-center">
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-ink-50">
            Volgende project<br /><span className="text-sand-300 italic font-medium">is het jouwe?</span>
          </h2>
          <Link href="/contact" className="btn btn-solid mt-10 inline-flex">
            Aanvraag doen <ArrowUpRight className="h-4 w-4"/>
          </Link>
        </div>
      </section>
    </>
  )
}
