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
      <section className="pt-40 lg:pt-48 pb-24 border-b border-ink-700/40">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">Over</div>
            <h1 className="h-hero mt-8 text-ink-50">
              Angelo<br />
              <span className="italic font-light text-sand-300">Alings.</span>
            </h1>
            <p className="mt-10 text-[19px] lg:text-[22px] leading-[1.5] italic font-light text-ink-100 max-w-xl">
              De bouwer achter TOPWOOD. Van fundering tot laatste plint. Één handschrift.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
              <Image src="/images/topwood-21.jpg" alt="Angelo aan het werk" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-narrow">
          <div className="space-y-8 text-[17px] leading-[1.85] text-ink-100">
            <p>
              TOPWOOD is niet begonnen als een groot bouwbedrijf met kantoren en projectmanagers.
              Het is begonnen met Angelo, een schroevendraaier en een idee: bouwen wat de klant
              in gedachten heeft, en niks minder.
            </p>
            <p>
              Vandaag is TOPWOOD gegroeid. Een vaste ploeg, vaste installateurs, vaste
              interieurmakers. Maar de aanpak is gelijk gebleven: één aanspreekpunt, één
              verantwoordelijke, één handschrift door het hele project.
            </p>
            <p className="h-block text-sand-300 italic font-light py-8">
              &laquo;Wij zeggen wat we doen, doen wat we zeggen, en gaan pas weg als het klopt.&raquo;
            </p>
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

          <div className="mt-16 grid grid-cols-2 gap-6">
            <div className="border-t border-sand-300 pt-6">
              <div className="meta text-sand-300">Sinds</div>
              <div className="font-display text-4xl text-ink-50 mt-2">{business.founded}</div>
            </div>
            <div className="border-t border-sand-300 pt-6">
              <div className="meta text-sand-300">Vestiging</div>
              <div className="font-display text-4xl text-ink-50 mt-2">{business.address.city}</div>
            </div>
          </div>

          <div className="mt-16">
            <Link href="/contact" className="btn pl-0">Neem contact op <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
