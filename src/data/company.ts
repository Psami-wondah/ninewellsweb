export const company = {
  name: 'Ninewells Law Practice',
  shortName: 'Ninewells',
  organisationType: 'Fully integrated, multidisciplinary law firm organised as a partnership',
  description: 'Ninewells is a fully integrated, multidisciplinary law firm organised as a partnership, reflecting a collaborative approach to legal practice and client service.',
  about: [
    'At the core of our practice is an uncompromising commitment to our clients’ expectations. Beyond our commercial awareness, industry knowledge and legal insight, we take time to understand each client’s business, competitive environment, regulatory obligations and risk appetite so we can effectively advance their interests.',
    'Our interconnected practice areas enable us to handle complex, multidimensional mandates within a single firm. We recognise that Nigeria’s legal and commercial landscape is dynamic, competitive, nuanced and increasingly shaped by global forces transforming industries and markets.',
    'In response, we have built a strong, highly qualified, resourceful and motivated team of experienced lawyers and business-support executives drawn from leading Nigerian law firms. They apply their combined expertise to deliver comprehensive, precise and commercially astute solutions.',
    'With an excellent library and cutting-edge technology, we are committed to upholding the highest standards of professional values, regulatory compliance and service excellence.',
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
  offices: [
    {
      city: 'Lagos',
      area: 'Victoria Island',
      address: 'Construction House, 18 Adeyemo Alakija, Victoria Island, Lagos 101241',
      description: 'At the heart of Nigeria’s commercial and financial district, close to clients, industry stakeholders and key decision-makers.',
      mapUrl: 'https://maps.google.com/?q=Construction+House+18+Adeyemo+Alakija+Victoria+Island+Lagos',
    },
    {
      city: 'Abuja',
      area: 'Federal Capital Territory',
      address: 'Abuja, Nigeria',
      description: 'Close to the country’s regulatory agencies and key public-sector institutions.',
      mapUrl: 'https://maps.google.com/?q=Abuja+Nigeria',
    },
  ],
} as const
