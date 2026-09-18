export const company = {
  name: 'Ninewells Law Practice',
  shortName: 'Ninewells',
  organisationType: 'Fully integrated, multidisciplinary law firm organised as a partnership',
  description: 'Ninewells is a fully integrated, multidisciplinary law firm organised as a partnership — a structure that reflects our collaborative approach to legal practice and client service.',
  about: [
    'Ninewells is a fully integrated, multidisciplinary law firm organised as a partnership — a structure that reflects our collaborative approach to legal practice and client service. Beyond commercial awareness, industry knowledge and legal insight, we take the time to understand each client’s business, competitive environment, regulatory obligations and risk appetite so we can effectively advance their interests.',
    'Our interconnected practice areas allow us to handle complex, multidimensional mandates within a single law firm. Nigeria’s legal and commercial landscape is dynamic, competitive and increasingly shaped by global forces reshaping industries and markets.',
    'We have built a strong, highly qualified, resourceful and motivated team of experienced lawyers and business-support executives drawn from leading law firms in Nigeria. They apply their combined expertise to deliver comprehensive, precise and commercially astute solutions.',
    'With an extensive legal library combined with cutting-edge technology, Ninewells upholds the highest standards of professional values, regulatory compliance and service excellence.',
  ],
  professionalBodies: '15+',
  professionalBodiesDescription: 'Our lawyers belong to no fewer than 15 local and international professional bodies relevant to our areas of practice, prioritise continuous professional development and hold certifications for their specialised work.',
  certifications: [
    ['FRC', 'Financial Reporting Council of Nigeria'],
    ['SCUML', 'Special Control Unit against Money Laundering'],
    ['NDPC', 'Nigeria Data Protection Commission'],
    ['NSITF', 'Nigeria Social Insurance Trust Fund'],
    ['ISO', 'International Organization for Standardization'],
    ['PII', 'Professional Indemnity Insurance'],
  ] as const,
  contact: {
    email: 'enquiries@ninewellslegal.com',
    phones: ['09111002210', '09165904000'],
    chiefOperatingOfficerPhone: '08056527337',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/ninewells/',
    instagram: 'https://www.instagram.com/ninewellslp/',
    instagramHandle: '@ninewellslp',
  },
  offices: [
    {
      city: 'Lagos',
      area: 'Victoria Island',
      address: 'Construction House (Second Floor), 18 Adeyemo Alakija Street, Victoria Island, Lagos.',
      description: "Our Lagos office sits at the heart of Nigeria's commercial and financial district, close to the businesses, investors and institutions that drive the country's economy.",
      mapUrl: 'https://maps.google.com/?q=Construction+House+18+Adeyemo+Alakija+Victoria+Island+Lagos',
    },
    {
      city: 'Abuja',
      area: 'Maitama',
      address: '16 Aso Gardens Estate, River Trent Street, Off Thames Street, Ministers Hills, Maitama, Abuja.',
      description: "Our Abuja office keeps us close to federal regulators, government agencies and policymakers shaping Nigeria's legal and business environment.",
      mapUrl: 'https://maps.google.com/?q=16+Aso+Garden+Estate+River+Trent+Street+Off+Thames+Street+Ministers+Hills+Maitama+Abuja',
    },
  ],
} as const
