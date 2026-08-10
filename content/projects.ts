/**
 * TOPWOOD portfolio. 47 echte project foto's van Angelo's werk.
 * Photo gallery model met alleen categorie-labels. Geen speculatieve namen.
 */

export type Category = 'nieuwbouw' | 'renovatie' | 'restauratie' | 'interieur'

export type PortfolioPhoto = {
  src: string
  category: Category
}

export const portfolioPhotos: PortfolioPhoto[] = [
  // Nieuwbouw (kap opbouwen, houtskelet, gevels)
  { src: '/images/topwood-01.jpg', category: 'nieuwbouw' },
  { src: '/images/topwood-02.jpg', category: 'nieuwbouw' },
  { src: '/images/topwood-03.jpg', category: 'nieuwbouw' },
  { src: '/images/topwood-04.jpg', category: 'nieuwbouw' },

  // Renovatie (badkamer sloop en ruwbouw, bifold deuren aanbouw)
  { src: '/images/topwood-05.jpg', category: 'renovatie' },
  { src: '/images/topwood-06.jpg', category: 'renovatie' },
  { src: '/images/topwood-07.jpg', category: 'renovatie' },
  { src: '/images/topwood-28.jpg', category: 'renovatie' },
  { src: '/images/topwood-29.jpg', category: 'renovatie' },

  // Restauratie
  { src: '/images/topwood-19.jpg', category: 'restauratie' },

  // Interieur (grootste deel: boekenkasten, TV-wanden, chevron vloeren, epoxy, badkamers)
  { src: '/images/topwood-08.jpg', category: 'interieur' },
  { src: '/images/topwood-09.jpg', category: 'interieur' },
  { src: '/images/topwood-10.jpg', category: 'interieur' },
  { src: '/images/topwood-11.jpg', category: 'interieur' },
  { src: '/images/topwood-12.jpg', category: 'interieur' },
  { src: '/images/topwood-13.jpg', category: 'interieur' },
  { src: '/images/topwood-14.jpg', category: 'interieur' },
  { src: '/images/topwood-15.jpg', category: 'interieur' },
  { src: '/images/topwood-16.jpg', category: 'interieur' },
  { src: '/images/topwood-17.jpg', category: 'interieur' },
  { src: '/images/topwood-18.jpg', category: 'interieur' },
  { src: '/images/topwood-20.jpg', category: 'interieur' },
  { src: '/images/topwood-21.jpg', category: 'interieur' },
  { src: '/images/topwood-22.jpg', category: 'interieur' },
  { src: '/images/topwood-23.jpg', category: 'interieur' },
  { src: '/images/topwood-24.jpg', category: 'interieur' },
  { src: '/images/topwood-25.jpg', category: 'interieur' },
  { src: '/images/topwood-26.jpg', category: 'interieur' },
  { src: '/images/topwood-27.jpg', category: 'interieur' },
  { src: '/images/topwood-30.jpg', category: 'interieur' },
  { src: '/images/topwood-31.jpg', category: 'interieur' },
  { src: '/images/topwood-32.jpg', category: 'interieur' },
  { src: '/images/topwood-33.jpg', category: 'interieur' },
  { src: '/images/topwood-34.jpg', category: 'interieur' },
  { src: '/images/topwood-35.jpg', category: 'interieur' },
  { src: '/images/topwood-36.jpg', category: 'interieur' },
  { src: '/images/topwood-37.jpg', category: 'interieur' },
  { src: '/images/topwood-38.jpg', category: 'interieur' },
  { src: '/images/topwood-39.jpg', category: 'interieur' },
  { src: '/images/topwood-40.jpg', category: 'interieur' },
  { src: '/images/topwood-41.jpg', category: 'interieur' },
  { src: '/images/topwood-42.jpg', category: 'interieur' },
  { src: '/images/topwood-43.jpg', category: 'interieur' },
  { src: '/images/topwood-44.jpg', category: 'interieur' },
  { src: '/images/topwood-45.jpg', category: 'interieur' },
  { src: '/images/topwood-46.jpg', category: 'interieur' },
  { src: '/images/topwood-47.jpg', category: 'interieur' },
]

export const photosByCategory = {
  nieuwbouw:   portfolioPhotos.filter((p) => p.category === 'nieuwbouw'),
  renovatie:   portfolioPhotos.filter((p) => p.category === 'renovatie'),
  restauratie: portfolioPhotos.filter((p) => p.category === 'restauratie'),
  interieur:   portfolioPhotos.filter((p) => p.category === 'interieur'),
}

export const categoryLabels: Record<Category, string> = {
  nieuwbouw:   'Nieuwbouw',
  renovatie:   'Renovatie',
  restauratie: 'Restauratie',
  interieur:   'Interieur',
}

export function getPhotoNumber(photo: PortfolioPhoto): string {
  const list = photosByCategory[photo.category]
  const idx = list.indexOf(photo) + 1
  return String(idx).padStart(2, '0')
}

/** Backward compat */
export type Project = { slug: string; title: string; category: Category; image: string; short: string; location: string; year: string }
export const projects: Project[] = []
export const projectsByCategory = photosByCategory
