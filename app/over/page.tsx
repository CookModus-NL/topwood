import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Over Angelo',
  description: 'Angelo Alings, de bouwer achter TOPWOOD. Vinkeveen. Vakmanschap, eigen ploeg, één handschrift van fundering tot afwerking.',
}

export default function OverPage() {
  return (
    <>
      <section className="section-dark py-24 lg:py-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow text-sand-300">Over</div>
            <h1 className="h-hero mt-6 text-ink-50">
              Angelo<br/><span className="text-sand-300">Alings.</span>
            </h1>
            <p className="mt-8 text-[19px] italic text-ink-200 max-w-xl">
              De bouwer achter TOPWOOD. Van fundering tot laatste plint.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-800">
              <Image src="/images/topwood-21.jpg" alt="Angelo aan het werk" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper py-24 lg:py-32">
        <div className="container-narrow space-y-6 text-[17px] leading-[1.8] text-ink-800">
          <p>
            TOPWOOD is niet begonnen als een groot bouwbedrijf met kantoren en projectmanagers.
            Het is begonnen met Angelo, een schroevendraaier en een idee: bouwen wat de klant
            in gedachten heeft, en niks minder.
          </p>
          <p>
            Vandaag is TOPWOOD gegroeid. Een vaste ploeg, vaste installateurs, vaste
            interieurmakers. De aanpak is gelijk gebleven: één aanspreekpunt, één
            verantwoordelijke, één handschrift door het hele project.
          </p>
          <blockquote className="border-l-4 border-sand-300 pl-6 py-4 my-10 font-display text-2xl italic text-ink-900">
            &laquo;Wij zeggen wat we doen, doen wat we zeggen, en gaan pas weg als het klopt.&raquo;
          </blockquote>
          <p>
            Wij bouwen zowel volledig nieuw als verbouwen bestaande woningen. Wij restaureren
            monumentale panden en werken uit tot in het interieurdetail. Inclusief epoxy tafelbladen,
            maatwerk boekenkasten met verweerde achterwanden, complete badkamers in marble en zwart.
          </p>
          <p>
            Werkgebied: {business.address.city} en heel de Randstad. Amsterdam, Utrecht, Amstelveen,
            Woerden en alles daartussen. Voor grote projecten door heel Nederland op aanvraag.
          </p>
        </div>

        <div className="container-narrow mt-16 grid grid-cols-2 gap-6">
          <div className="card">
            <div className="eyebrow mb-2">Sinds</div>
            <div className="font-display text-4xl font-semibold text-ink-900">{business.founded}</div>
          </div>
          <div className="card">
            <div className="eyebrow mb-2">Vestiging</div>
            <div className="font-display text-4xl font-semibold text-ink-900">{business.address.city}</div>
          </div>
        </div>

        <div className="container-narrow mt-16 text-center">
          <Link href="/contact" className="btn btn-primary">Neem contact op <ArrowRight className="h-4 w-4"/></Link>
        </div>
      </section>
    </>
  )
}
