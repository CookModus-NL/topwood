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
  { src: '/images/werk-01.jpg', category: 'nieuwbouw' },
  { src: '/images/werk-02.jpg', category: 'nieuwbouw' },
  { src: '/images/werk-03.jpg', category: 'nieuwbouw' },
  { src: '/images/werk-04.jpg', category: 'nieuwbouw' },

  // Renovatie (badkamer sloop en ruwbouw, bifold deuren aanbouw)
  { src: '/images/werk-05.jpg', category: 'renovatie' },
  { src: '/images/werk-06.jpg', category: 'renovatie' },
  { src: '/images/werk-07.jpg', category: 'renovatie' },
  { src: '/images/werk-28.jpg', category: 'renovatie' },
  { src: '/images/werk-29.jpg', category: 'renovatie' },

  // Restauratie
  { src: '/images/werk-19.jpg', category: 'restauratie' },

  // Interieur (grootste deel: boekenkasten, TV-wanden, chevron vloeren, epoxy, badkamers)
  { src: '/images/werk-08.jpg', category: 'interieur' },
  { src: '/images/werk-09.jpg', category: 'interieur' },
  { src: '/images/werk-10.jpg', category: 'interieur' },
  { src: '/images/werk-11.jpg', category: 'interieur' },
  { src: '/images/werk-12.jpg', category: 'interieur' },
  { src: '/images/werk-13.jpg', category: 'interieur' },
  { src: '/images/werk-14.jpg', category: 'interieur' },
  { src: '/images/werk-15.jpg', category: 'interieur' },
  { src: '/images/werk-16.jpg', category: 'interieur' },
  { src: '/images/werk-17.jpg', category: 'interieur' },
  { src: '/images/werk-18.jpg', category: 'interieur' },
  { src: '/images/werk-20.jpg', category: 'interieur' },
  { src: '/images/werk-21.jpg', category: 'interieur' },
  { src: '/images/werk-22.jpg', category: 'interieur' },
  { src: '/images/werk-23.jpg', category: 'interieur' },
  { src: '/images/werk-24.jpg', category: 'interieur' },
  { src: '/images/werk-25.jpg', category: 'interieur' },
  { src: '/images/werk-26.jpg', category: 'interieur' },
  { src: '/images/werk-27.jpg', category: 'interieur' },
  { src: '/images/werk-30.jpg', category: 'interieur' },
  { src: '/images/werk-31.jpg', category: 'interieur' },
  { src: '/images/werk-32.jpg', category: 'interieur' },
  { src: '/images/werk-33.jpg', category: 'interieur' },
  { src: '/images/werk-34.jpg', category: 'interieur' },
  { src: '/images/werk-35.jpg', category: 'interieur' },
  { src: '/images/werk-36.jpg', category: 'interieur' },
  { src: '/images/werk-37.jpg', category: 'interieur' },
  { src: '/images/werk-38.jpg', category: 'interieur' },
  { src: '/images/werk-39.jpg', category: 'interieur' },
  { src: '/images/werk-40.jpg', category: 'interieur' },
  { src: '/images/werk-41.jpg', category: 'interieur' },
  { src: '/images/werk-42.jpg', category: 'interieur' },
  { src: '/images/werk-43.jpg', category: 'interieur' },
  { src: '/images/werk-44.jpg', category: 'interieur' },
  { src: '/images/werk-45.jpg', category: 'interieur' },
  { src: '/images/werk-46.jpg', category: 'interieur' },
  { src: '/images/werk-47.jpg', category: 'interieur' },
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
