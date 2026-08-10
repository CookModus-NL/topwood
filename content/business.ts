/**
 * TOPWOOD — bouwbedrijf van Angelo Alings.
 * Premium interieurbouw + renovatie + houtwerk. Vinkeveen (Utrecht).
 */

export const business = {
  name: 'TOPWOOD',
  legalName: 'Bouwbedrijf TOPWOOD',
  ownerFirstName: 'Angelo',
  ownerFullName: 'Angelo Alings',
  tagline: 'Wij maken alles.',
  shortDescription:
    'Premium bouwbedrijf voor nieuwbouw, renovatie, restauratie en maatwerk interieur. Van ruwbouw tot laatste plint, één ploeg door het hele project.',
  longDescription:
    'TOPWOOD is het bouwbedrijf van Angelo Alings. Wij bouwen nieuw, renoveren oud, restaureren monumentaal en werken uit tot in het interieurdetail — inclusief maatwerk boekenkasten, kookeilanden, epoxy bladen en badkamers op maat. Eén ploeg, één planning, één aanspreekpunt — van fundering tot laatste plint.',

  categories: ['Nieuwbouw', 'Renovatie', 'Restauratie', 'Interieur'] as const,

  kvk: '',
  founded: '2020',

  address: {
    street: 'Muijeveld 81',
    postalCode: '3645 KM',
    city: 'Vinkeveen',
    municipality: 'De Ronde Venen',
    province: 'Utrecht',
    country: 'NL',
  },
  visitByAppointmentOnly: true,

  phone: '06 83 56 46 50',
  phoneE164: '+31683564650',
  whatsapp: '+31683564650',
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
    primary: 'Vinkeveen en Randstad',
    cities: [
      'Vinkeveen', 'Mijdrecht', 'Wilnis', 'Abcoude', 'De Ronde Venen',
      'Amsterdam', 'Amstelveen', 'Uithoorn', 'Aalsmeer',
      'Utrecht', 'Woerden', 'Breukelen', 'Loenen aan de Vecht',
      'Hilversum', 'Baarn',
    ],
    province: 'Utrecht',
    country: 'NL',
  },
} as const

export type Business = typeof business
