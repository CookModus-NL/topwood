/**
 * TOPWOOD diensten. Vier hoofdcategorieen:
 * Nieuwbouw · Renovatie · Restauratie · Interieur
 */

import type { LucideIcon } from 'lucide-react'
import { Building2, Hammer, Landmark, Sofa } from 'lucide-react'

export type Service = {
  slug: 'nieuwbouw' | 'renovatie' | 'restauratie' | 'interieur'
  label: string
  headline: string
  lead: string
  intro: string
  paragraphs: string[]
  scope: string[]
  icon: LucideIcon
  hero: string
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'nieuwbouw',
    label: 'Nieuwbouw',
    headline: 'Van bouwtekening tot sleutel op de deur.',
    lead: 'Uitgesproken architectuur, strak vakmanschap, één aanspreekpunt.',
    intro:
      'Nieuwbouw met TOPWOOD betekent dat je met een architect of ontwerp binnenkomt en met een sleutelklaar huis buitenloopt. Wij coordineren alles: fundering, ruwbouw, installaties, afbouw en oplevering.',
    paragraphs: [
      'Wij werken zowel aan particuliere villa\'s als aan projecten met meerdere woningen. Elk project heeft zijn eigen planning, budgetstructuur en oplevermoment. Helder communicatief van start tot bezichtiging.',
      'De onderaannemers zijn vaste partners waar wij al jaren mee werken: installateurs, elektriciens, stukadoors. Wij kennen hun kwaliteit, weten wat we kunnen verwachten en dragen zelf de eindverantwoordelijkheid.',
    ],
    scope: [
      'Grondwerk, fundering en heiwerk',
      'Ruwbouw metselwerk of houtskeletbouw',
      'Dakconstructie, dakbedekking, isolatie',
      'Installatie elektra, water, verwarming en ventilatie',
      'Stucwerk, tegelwerk, timmerwerk',
      'Complete opleveringspaperwork',
    ],
    icon: Building2,
    hero: '/images/hero-nieuwbouw.jpg',
    metaTitle: 'Nieuwbouw · TOPWOOD',
    metaDescription: 'Nieuwbouw door bouwbedrijf TOPWOOD. Van bouwtekening tot sleutel op de deur, één aanspreekpunt voor het hele project. Werkgebied West-Brabant.',
  },
  {
    slug: 'renovatie',
    label: 'Renovatie',
    headline: 'De bestaande woning, opnieuw ingedeeld en afgewerkt.',
    lead: 'Muur weg, uitbouw erbij, kap eraf, plafond eruit. Wij pakken het aan.',
    intro:
      'Een renovatie verandert hoe je woont. Wij openen of verplaatsen dragende constructies, bouwen uit, isoleren opnieuw, vernieuwen installaties en werken alles af naar wens.',
    paragraphs: [
      'Vaak beginnen we met de vraag: wat wil je bereiken? Meer licht in de woonkamer, een aparte werkkamer, een keuken die opent naar de tuin. Wij vertalen dat naar constructie, planning en budget.',
      'Renovatie kent zijn eigen risico\'s: bestaande installaties die achter muren zitten, oude vloeren die verzakt zijn. Wij inventariseren eerst voor we aan het uitvoerend werk beginnen. Voorkomt verrassingen halverwege.',
    ],
    scope: [
      'Dragende muren openen of verwijderen met staal- of houtconstructies',
      'Aanbouw en uitbouw op begane grond of verdieping',
      'Kap optrekken, dakkapel plaatsen, zolder inrichten',
      'Complete vervanging van sanitair, keukens, vloeren',
      'Isolatie en energetische maatregelen',
      'Herindeling met nieuwe wanden en deuren',
    ],
    icon: Hammer,
    hero: '/images/hero-renovatie.jpg',
    metaTitle: 'Renovatie · TOPWOOD',
    metaDescription: 'Renovatie van uw woning door TOPWOOD. Uitbouw, doorbraak, dakkapel, complete verbouwing. Een ploeg, een planning, een aanspreekpunt.',
  },
  {
    slug: 'restauratie',
    label: 'Restauratie',
    headline: 'Karakter behouden. Kwaliteit teruggebracht.',
    lead: 'Voor monumentale panden en woningen met een verhaal.',
    intro:
      'Restauratie vraagt om vakmanschap dat verder gaat dan bouwtechniek. Materialen matchen op leeftijd, detaillering respecteren, en werken volgens richtlijnen voor gemeentelijke of rijksmonumenten.',
    paragraphs: [
      'Wij werken aan grachtenpanden, boerderijen, herenhuizen en jaren-30 woningen waar de originele stijl behouden moet blijven. Van pleisterprofielen tot houten kozijnen, van gietijzeren bouten tot pannenlijsten.',
      'Voor monumenten stemmen we vooraf af met de gemeente en Monumentenzorg. Vergunningtrajecten, subsidiemogelijkheden en verplichte werkwijzen. Wij loodsen je erdoorheen.',
    ],
    scope: [
      'Restauratie van gepleisterde gevels en profielen',
      'Reproductie van originele kozijnen en ramen',
      'Herstel van dakconstructies en historische kappen',
      'Vervanging balklagen met authentieke materialen',
      'Coordinatie met gemeente en Monumentenzorg',
      'Subsidieaanvragen ondersteuning',
    ],
    icon: Landmark,
    hero: '/images/hero-restauratie.jpg',
    metaTitle: 'Restauratie · TOPWOOD',
    metaDescription: 'Restauratie van monumenten en karakteristieke panden. TOPWOOD werkt volgens richtlijnen van Monumentenzorg met behoud van originele detaillering.',
  },
  {
    slug: 'interieur',
    label: 'Interieur',
    headline: 'De laatste laag die het huis af maakt.',
    lead: 'Maatwerk keukens, kasten, trappen en afbouw.',
    intro:
      'Interieur maakt het verschil tussen een huis dat af is en een huis dat klopt. TOPWOOD verzorgt het complete interieurwerk. Van maatwerk keukens en kledingkasten tot houten trappen, wandpanelen en inbouwmeubels.',
    paragraphs: [
      'Wij tekenen samen met jou het interieur uit, produceren in de eigen werkplaats of via vertrouwde vakmensen, en monteren ter plaatse. Alles in een handschrift. Geen verschillen in stijl of kwaliteit tussen ruimtes.',
      'Voor projecten waar we ook de bouw doen, is het interieurwerk vaak al meegenomen in het ontwerp. Voor losse interieuropdrachten in bestaande woningen kunnen we ook aan de slag.',
    ],
    scope: [
      'Maatwerk keukens (ontwerp, productie, montage)',
      'Kledingkasten, inloopkasten, boekenkasten',
      'Houten trappen op maat (open, dicht, met bordes)',
      'Wandpanelen, akoestische lattenwanden',
      'Deuren, kozijnen en afwerking',
      'TV-meubels en zwevende ombouw',
    ],
    icon: Sofa,
    hero: '/images/hero-interieur.jpg',
    metaTitle: 'Interieur · TOPWOOD',
    metaDescription: 'Maatwerk interieur van TOPWOOD: keukens, kasten, trappen en inbouwmeubels op maat gemaakt. In eigen werkplaats geproduceerd.',
  },
]

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
