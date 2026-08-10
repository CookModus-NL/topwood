import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { portfolioPhotos, photosByCategory, categoryLabels, getPhotoNumber } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Werk',
  description: 'Portfolio van TOPWOOD: nieuwbouw, renovatie, restauratie en maatwerk interieur uit Vinkeveen en heel de Randstad.',
}

const categoryOrder: (keyof typeof photosByCategory)[] = ['interieur', 'renovatie', 'nieuwbouw', 'restauratie']

export default function ProjectenPage() {
  return (
    <>
      <section className="section-dark py-24 lg:py-32">
        <div className="container-x">
          <div className="eyebrow text-sand-300">Portfolio · {portfolioPhotos.length} projecten</div>
          <h1 className="h-hero mt-6 text-ink-50 max-w-3xl">
            Selectie van recent werk.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-300 max-w-xl">
            Van houtskelet dakopbouw tot maatwerk boekenkast, van complete badkamer tot chevron parket.
          </p>
        </div>
      </section>

      {categoryOrder.map((cat) => {
        const photos = photosByCategory[cat]
        if (!photos?.length) return null
        return (
          <section key={cat} className="section-paper py-20 lg:py-28 border-b border-ink-100 last:border-none">
            <div className="container-x">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <div className="eyebrow">{photos.length} projecten</div>
                  <h2 className="h-section mt-4 text-ink-900">{categoryLabels[cat]}</h2>
                </div>
                <Link href={`/diensten/${cat}`} className="btn btn-outline">Over {cat} <ArrowRight className="h-4 w-4"/></Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {photos.map((p) => (
                  <div key={p.src} className="group zoom-parent">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-100">
                      <Image src={p.src} alt={`Topwood ${categoryLabels[p.category]} project ${getPhotoNumber(p)}`} fill
                             sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                             className="object-cover zoom" />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                      <span className="font-display text-[11px] tracking-[0.22em] uppercase text-ink-500 group-hover:text-sand-400 transition-colors">{categoryLabels[p.category]}</span>
                      <span className="font-display text-[11px] tracking-[0.14em] text-ink-400">{getPhotoNumber(p)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="section-dark py-24 lg:py-32 text-center">
        <div className="container-x">
          <h2 className="h-section text-ink-50 max-w-3xl mx-auto">
            Volgend project<br/><span className="text-sand-300">is het jouwe?</span>
          </h2>
          <Link href="/contact" className="btn btn-primary mt-10 inline-flex">Aanvraag doen <ArrowRight className="h-4 w-4"/></Link>
        </div>
      </section>
    </>
  )
}
