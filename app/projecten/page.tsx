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
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 border-b border-ink-700/40">
        <div className="container-x">
          <div className="eyebrow">Portfolio · {portfolioPhotos.length} projecten</div>
          <h1 className="h-hero mt-8 text-ink-50 max-w-5xl">
            Werk<br /><span className="italic font-light text-sand-300">in beeld.</span>
          </h1>
          <p className="mt-10 text-[17px] leading-[1.7] text-ink-100 max-w-xl">
            Selectie van recent werk uit Vinkeveen en heel de Randstad. Van houtskelet dakopbouw tot maatwerk boekenkast, van complete badkamer tot chevron parket.
          </p>
        </div>
      </section>

      {categoryOrder.map((cat) => {
        const photos = photosByCategory[cat]
        if (!photos?.length) return null
        return (
          <section key={cat} className="py-20 lg:py-28 border-b border-ink-700/40">
            <div className="container-x">
              <div className="grid grid-cols-12 gap-8 mb-12 lg:mb-16 items-baseline">
                <div className="col-span-12 lg:col-span-6">
                  <div className="eyebrow">{String(categoryOrder.indexOf(cat) + 1).padStart(2, '0')} · {photos.length} projecten</div>
                  <h2 className="h-section mt-6 text-ink-50">{categoryLabels[cat]}</h2>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-8">
                  <Link href={`/diensten/${cat}`} className="btn pl-0">Over {cat} <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                {photos.map((p) => (
                  <figure key={p.src} className="group relative aspect-[4/5] overflow-hidden bg-ink-800 zoom-on-hover">
                    <Image src={p.src} alt={`Topwood ${categoryLabels[p.category]} project ${getPhotoNumber(p)}`} fill
                           sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                           className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 lg:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-display text-[11px] tracking-[0.24em] uppercase text-sand-300">{categoryLabels[p.category]} {getPhotoNumber(p)}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-32 lg:py-48">
        <div className="container-x text-center">
          <div className="eyebrow">Contact</div>
          <h2 className="h-section mt-6 text-ink-50 max-w-3xl mx-auto">
            Volgend project?<br /><span className="italic font-light text-sand-300">Bel Angelo direct.</span>
          </h2>
          <div className="mt-10">
            <Link href="/contact" className="btn">Aanvraag doen <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
