/**
 * TOPWOOD portfolio — placeholder tot Angelo's foto's zijn aangeleverd.
 * Hint: haal foto's uit @angeloalings Instagram (zie DEPLOY notes).
 */

export type Project = {
  slug: string
  title: string
  category: 'nieuwbouw' | 'renovatie' | 'restauratie' | 'interieur'
  location: string
  year: string
  image: string
  short: string
}

// Placeholder projecten — vervangen zodra echte foto's er zijn
export const projects: Project[] = [
  { slug: 'nieuwbouw-villa-breda', title: 'Nieuwbouw villa', category: 'nieuwbouw', location: 'Breda', year: '2025', image: '/images/placeholder-1.jpg', short: 'Vrijstaande villa, sleutelklaar opgeleverd' },
  { slug: 'renovatie-jaren30-ginneken', title: 'Renovatie jaren-30 woning', category: 'renovatie', location: 'Ginneken', year: '2024', image: '/images/placeholder-2.jpg', short: 'Volledige uitbouw + herindeling' },
  { slug: 'restauratie-boerderij-zundert', title: 'Restauratie boerderij', category: 'restauratie', location: 'Zundert', year: '2024', image: '/images/placeholder-3.jpg', short: 'Karakteristieke boerderij, monumentenstatus' },
  { slug: 'interieur-keuken-loft', title: 'Interieur keuken loft', category: 'interieur', location: 'Breda', year: '2025', image: '/images/placeholder-4.jpg', short: 'Maatwerk keuken met kookeiland' },
  { slug: 'nieuwbouw-2-onder-1-kap', title: 'Nieuwbouw 2-onder-1-kap', category: 'nieuwbouw', location: 'Prinsenbeek', year: '2024', image: '/images/placeholder-5.jpg', short: 'Twee woningen naast elkaar opgeleverd' },
  { slug: 'renovatie-uitbouw-tuinkant', title: 'Uitbouw en dakopbouw', category: 'renovatie', location: 'Breda-Zuid', year: '2025', image: '/images/placeholder-6.jpg', short: 'Extra leefruimte richting de tuin' },
]

export const projectsByCategory = {
  nieuwbouw: projects.filter((p) => p.category === 'nieuwbouw'),
  renovatie: projects.filter((p) => p.category === 'renovatie'),
  restauratie: projects.filter((p) => p.category === 'restauratie'),
  interieur: projects.filter((p) => p.category === 'interieur'),
}
