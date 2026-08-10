import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Over Angelo',
  description: 'Angelo Alings — de bouwer achter TOPWOOD. Vakmanschap, eigen ploeg, één handschrift van fundering tot afwerking.',
}

export default function OverPage() {
  return (
    <>
      <section className="pt-24 lg:pt-32 pb-16 border-b border-ink-800 bg-sand-300 text-ink-950">
        <div className="container-x grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow text-ink-900">Over</div>
            <h1 className="mt-8 font-display font-bold text-[46px] sm:text-[72px] lg:text-[100px] leading-[0.95] tracking-tight text-ink-950">
              Angelo Alings.
            </h1>
            <p className="mt-6 font-display text-[20px] lg:text-[26px] italic text-ink-800 max-w-xl">
              Bouwer met eigen hand. Eén handschrift van fundering tot laatste plint.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="aspect-[4/5] frame-ink bg-ink-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display text-[10px] tracking-[0.3em] text-sand-300 mb-3">FOTO ANGELO</div>
                <div className="font-display text-sand-100 text-sm italic">volgt zodra aangeleverd</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-[17px] leading-[1.85] text-ink-100">
            <p>
              TOPWOOD is niet begonnen als een groot bouwbedrijf met kantoren en projectmanagers.
              Het is begonnen met Angelo, een schroevendraaier en een idee: bouwen wat de klant
              in gedachten heeft, en niks minder.
            </p>
            <p>
              Vandaag is TOPWOOD gegroeid — een vaste ploeg, vaste installateurs, vaste
              interieurmakers. Maar de aanpak is gelijk gebleven: één aanspreekpunt, één
              verantwoordelijke, één handschrift door het hele project.
            </p>
            <p>
              Wij bouwen zowel volledig nieuw als verbouwen bestaande woningen. Wij restaureren
              monumentale panden en werken uit tot in het interieurdetail. Wat we doen heet
              &laquo;wij maken alles&raquo; omdat dat letterlijk klopt — nieuwbouw, renovatie,
              restauratie en interieur zijn geen aparte diensten waar we tussen switchen. Ze
              horen bij elkaar. Een keuken hoort in een huis. Een huis hoort in een straat.
              Elk vak is een deel van het geheel.
            </p>
            <p className="font-display text-2xl italic text-sand-300 pl-6 border-l-2 border-sand-300 my-10">
              Wij zeggen wat we doen, doen wat we zeggen, en gaan pas weg als het klopt.
            </p>
            <p>
              Werkt vanuit {business.address.city} in heel {business.region.primary} en de rest
              van {business.region.province}. Voor grote projecten door heel Nederland op aanvraag.
            </p>
          </div>
          <Link href="/contact" className="btn btn-solid mt-14 inline-flex">
            Neem contact op <ArrowUpRight className="h-4 w-4"/>
          </Link>
        </div>
      </section>
    </>
  )
}
