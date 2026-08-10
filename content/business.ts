/**
 * TOPWOOD — bouwbedrijf van Angelo Alings.
 * Full-service: nieuwbouw, renovatie, restauratie, interieur.
 *
 * Placeholder gegevens — Angelo/Bart vult definitief in.
 */

export const business = {
  name: 'TOPWOOD',
  legalName: 'Bouwbedrijf TOPWOOD',
  ownerFirstName: 'Angelo',
  ownerFullName: 'Angelo Alings',
  tagline: 'Wij maken alles.',
  shortDescription:
    'Bouwbedrijf TOPWOOD verzorgt nieuwbouw, renovatie, restauratie en interieurbouw. Van fundering tot afwerking, één vaste partij door het hele project.',
  longDescription:
    'TOPWOOD is het bouwbedrijf van Angelo Alings. Wij bouwen nieuw, renoveren oud, restaureren monumentaal en werken uit tot in het interieurdetail. Eén ploeg, één planning, één aanspreekpunt — van slopen en funderen tot maatwerk keukens en trappen.',

  categories: ['Nieuwbouw', 'Renovatie', 'Restauratie', 'Interieur'] as const,

  kvk: '',
  vestigingsnummer: '',
  btw: '',
  founded: '2020',

  address: {
    street: '',
    postalCode: '',
    city: 'Breda',
    municipality: '',
    province: 'Noord-Brabant',
    country: 'NL',
  },
  visitByAppointmentOnly: true,

  phone: '',
  phoneE164: '',
  whatsapp: '',
  email: 'info@topwood.nl',

  url: 'https://topwood.nl',

  openingHours: [
    { day: 'Monday', opens: '07:00', closes: '18:00' },
    { day: 'Tuesday', opens: '07:00', closes: '18:00' },
    { day: 'Wednesday', opens: '07:00', closes: '18:00' },
    { day: 'Thursday', opens: '07:00', closes: '18:00' },
    { day: 'Friday', opens: '07:00', closes: '18:00' },
  ],

  social: {
    instagram: 'https://www.instagram.com/angeloalings/',
    instagramHandle: 'angeloalings',
    facebook: '',
    linkedin: '',
    google: '',
  },

  region: {
    primary: 'West-Brabant',
    cities: ['Breda', 'Etten-Leur', 'Oosterhout', 'Prinsenbeek', 'Ulvenhout', 'Bavel', 'Ginneken', 'Teteringen', 'Zundert', 'Made', 'Roosendaal', 'Rijen'],
    province: 'Noord-Brabant',
    country: 'NL',
  },
} as const

export type Business = typeof business
