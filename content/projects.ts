/**
 * TOPWOOD portfolio — 53 echte project foto's van Angelo's werk.
 * Photo gallery model: elke foto krijgt een categorie en korte caption op
 * basis van wat visueel te zien is. Geen verzonnen project stories.
 */

export type Category = 'nieuwbouw' | 'renovatie' | 'restauratie' | 'interieur'

export type PortfolioPhoto = {
  src: string
  category: Category
  caption: string
}

export const portfolioPhotos: PortfolioPhoto[] = [
  // Nieuwbouw / dakopbouw / houtskelet
  { src: '/images/topwood-04.jpg', category: 'nieuwbouw', caption: 'Kap optrekken in houtskelet' },
  { src: '/images/topwood-05.jpg', category: 'nieuwbouw', caption: 'Ruwbouw met houten balken' },
  { src: '/images/topwood-06.jpg', category: 'nieuwbouw', caption: 'Dakopbouw op bestaand pand' },
  { src: '/images/topwood-07.jpg', category: 'nieuwbouw', caption: 'Volledig houten kap' },
  { src: '/images/topwood-31.jpg', category: 'nieuwbouw', caption: 'Interieur houtskelet met Kingspan' },

  // Zwarte houten gevels (signature)
  { src: '/images/topwood-01.jpg', category: 'nieuwbouw', caption: 'Zwarte houten gevel' },
  { src: '/images/topwood-02.jpg', category: 'nieuwbouw', caption: 'Detail zwart houten gevel' },
  { src: '/images/topwood-03.jpg', category: 'nieuwbouw', caption: 'Zwarte gevel dakopbouw' },
  { src: '/images/topwood-08.jpg', category: 'nieuwbouw', caption: 'Modern kader met kap' },

  // Bifold doors & aanbouw
  { src: '/images/topwood-35.jpg', category: 'renovatie', caption: 'Bifold deuren aanlevering' },
  { src: '/images/topwood-34.jpg', category: 'renovatie', caption: 'Bifold deur richting tuin' },
  { src: '/images/topwood-36.jpg', category: 'renovatie', caption: 'Aanbouw achtergevel' },

  // Renovatie ruwbouw
  { src: '/images/topwood-32.jpg', category: 'renovatie', caption: 'Volledig gestucste ruimte' },
  { src: '/images/topwood-33.jpg', category: 'renovatie', caption: 'Woonruimte casco klaar' },

  // Badkamer sloop → ruwbouw → oplevering
  { src: '/images/topwood-11.jpg', category: 'renovatie', caption: 'Badkamer sloop start' },
  { src: '/images/topwood-12.jpg', category: 'renovatie', caption: 'Badkamer ruwbouw met groene GKB' },
  { src: '/images/topwood-13.jpg', category: 'renovatie', caption: 'Badkamer ruwbouw egaliseren' },

  // Badkamers oplevering
  { src: '/images/topwood-09.jpg', category: 'interieur', caption: 'Zwart tegelwerk badkamer' },
  { src: '/images/topwood-14.jpg', category: 'interieur', caption: 'Luxe badkamer marble & zwart' },

  // Klassiek interieur — chevron vloer, paneelwerk
  { src: '/images/topwood-10.jpg', category: 'interieur', caption: 'Klassieke gang met paneelwerk' },
  { src: '/images/topwood-38.jpg', category: 'interieur', caption: 'Zwarte deuren en herringbone vloer' },
  { src: '/images/topwood-37.jpg', category: 'interieur', caption: 'Woonkamer met chevron eiken' },

  // TV-wand / mediamuur
  { src: '/images/topwood-15.jpg', category: 'interieur', caption: 'TV-wand ruwbouw MDF' },
  { src: '/images/topwood-16.jpg', category: 'interieur', caption: 'TV-wand structuur' },
  { src: '/images/topwood-19.jpg', category: 'interieur', caption: 'TV-wand met openingen' },
  { src: '/images/topwood-20.jpg', category: 'interieur', caption: 'TV-wand zwart afwerken' },
  { src: '/images/topwood-21.jpg', category: 'interieur', caption: 'Angelo aan het schilderen' },
  { src: '/images/topwood-22.jpg', category: 'interieur', caption: 'Verweerde afwerking TV-wand' },
  { src: '/images/topwood-23.jpg', category: 'interieur', caption: 'TV-wand met haard opgeleverd' },

  // Boekenkasten (signature — geframeed met verweerde achterwand)
  { src: '/images/topwood-17.jpg', category: 'interieur', caption: 'Boekenkast ruwbouw MDF' },
  { src: '/images/topwood-18.jpg', category: 'interieur', caption: 'Complete kastenwand grid' },
  { src: '/images/topwood-45.jpg', category: 'interieur', caption: 'Boekenkast met verweerde achterwand' },
  { src: '/images/topwood-49.jpg', category: 'interieur', caption: 'Zwarte kast met houten backpanel' },
  { src: '/images/topwood-50.jpg', category: 'interieur', caption: 'Zwarte kast met kastdeuren' },
  { src: '/images/topwood-51.jpg', category: 'interieur', caption: 'Zwarte kast styled' },
  { src: '/images/topwood-52.jpg', category: 'interieur', caption: 'Radiatorombouw en boekenkast' },

  // Slaapkamer / kledingkast
  { src: '/images/topwood-24.jpg', category: 'interieur', caption: 'Slaapkamer met kastenwand' },

  // Kappen / restauratie
  { src: '/images/topwood-25.jpg', category: 'restauratie', caption: 'Kap uitbouw met houtskelet' },

  // Epoxy tafels (signature product)
  { src: '/images/topwood-26.jpg', category: 'interieur', caption: 'Epoxy tafel in productie' },
  { src: '/images/topwood-27.jpg', category: 'interieur', caption: 'Epoxy giet in mal' },
  { src: '/images/topwood-28.jpg', category: 'interieur', caption: 'Zwarte houten epoxy laag' },
  { src: '/images/topwood-29.jpg', category: 'interieur', caption: 'Epoxy tafelblad detail' },
  { src: '/images/topwood-30.jpg', category: 'interieur', caption: 'Verweerd hout epoxy finish' },

  // Interieur styled
  { src: '/images/topwood-39.jpg', category: 'interieur', caption: 'Keuken met chevron doorloop' },
  { src: '/images/topwood-40.jpg', category: 'interieur', caption: 'Kastje in verweerde achterwand nis' },
  { src: '/images/topwood-41.jpg', category: 'interieur', caption: 'Zwart kubuskast primer' },
  { src: '/images/topwood-42.jpg', category: 'interieur', caption: 'Nieuwe boekenkast in nis' },
  { src: '/images/topwood-43.jpg', category: 'interieur', caption: 'Grote zwarte kastenwand' },
  { src: '/images/topwood-44.jpg', category: 'interieur', caption: 'Boekenkast primer buitenwerk' },
  { src: '/images/topwood-46.jpg', category: 'interieur', caption: 'Complete boekenkast met deuren' },
  { src: '/images/topwood-47.jpg', category: 'interieur', caption: 'Zwarte boekenkast in wit frame' },
  { src: '/images/topwood-48.jpg', category: 'interieur', caption: 'Zwart tegelwerk mancave' },
  { src: '/images/topwood-53.jpg', category: 'interieur', caption: 'Radiatorombouw zwart afgewerkt' },
]

export const photosByCategory = {
  nieuwbouw:    portfolioPhotos.filter((p) => p.category === 'nieuwbouw'),
  renovatie:    portfolioPhotos.filter((p) => p.category === 'renovatie'),
  restauratie:  portfolioPhotos.filter((p) => p.category === 'restauratie'),
  interieur:    portfolioPhotos.filter((p) => p.category === 'interieur'),
}

export const categoryLabels: Record<Category, string> = {
  nieuwbouw:   'Nieuwbouw',
  renovatie:   'Renovatie',
  restauratie: 'Restauratie',
  interieur:   'Interieur',
}

/** Backward compat voor oude projects reference */
export type Project = { slug: string; title: string; category: Category; image: string; short: string; location: string; year: string }
export const projects: Project[] = []
export const projectsByCategory = photosByCategory
