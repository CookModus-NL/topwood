import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { photosByCategory, categoryLabels } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projecten',
  description: 'Portfolio van TOPWOOD: nieuwbouw, renovatie, restauratie en maatwerk interieur — uit Vinkeveen en heel de Randstad.',
}

const categoryOrder: (keyof typeof photosByCategory)[] = ['nieuwbouw', 'renovatie', 'restauratie', 'interieur']

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
            Selectie van recent werk. Voor context per project of vergelijkbare wensen — 
            <Link href="/contact" className="text-sand-300 hover:text-sand-100 ml-1">overleg vrijblijvend</Link>.
          </p>
        </div>
      </section>

      {categoryOrder.map((cat) => {
        const photos = photosByCategory[cat]
        if (!photos?.length) return null
        return (
          <section key={cat} className="py-16 lg:py-20 border-b border-ink-800">
            <div className="container-x">
              <div className="flex items-baseline justify-between mb-8 gap-4">
                <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight text-ink-50">
                  {categoryLabels[cat]}
                </h2>
                <span className="font-display text-[11px] tracking-[0.22em] uppercase text-sand-300 shrink-0">
                  {photos.length} projecten
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {photos.map((p) => (
                  <figure key={p.src} className="group relative aspect-[4/5] overflow-hidden frame-thin bg-ink-900">
                    <Image src={p.src} alt={p.caption} fill
                           sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                           className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[12px] text-sand-300 font-medium">{p.caption}</span>
                    </figcaption>
                  </figure>
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
          <Link href="/contact" className="btn btn-solid mt-10 inline-flex">Aanvraag doen <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  )
}
