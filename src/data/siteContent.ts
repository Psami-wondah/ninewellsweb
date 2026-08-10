export const LINKEDIN_URL = 'https://www.linkedin.com/company/ninewells/'

export const navItems = ['About', 'Expertise', 'Industries', 'People', 'Insights', 'Careers', 'Contact'] as const

export const expertise = [
  ['01', 'Energy, Extractives & Foreign Investment', 'Commercial, regulatory and investment counsel across energy and natural resources.'],
  ['02', 'Dispute Resolution', 'Litigation and arbitration strategy for consequential disputes.'],
  ['03', 'Financial Services & Capital Markets', 'Clear advice for institutions, transactions and evolving markets.'],
  ['04', 'Corporate & Commercial', 'Practical counsel across transactions, governance and day-to-day business.'],
  ['05', 'Telecommunications, Technology & Digital Law', 'Navigating technology, data, intellectual property and digital regulation.'],
] as const

export type ExpertiseName = (typeof expertise)[number][1]

export const expertiseSlugs: Record<ExpertiseName, string> = {
  'Energy, Extractives & Foreign Investment': 'energy-extractives-foreign-investment',
  'Dispute Resolution': 'dispute-resolution',
  'Financial Services & Capital Markets': 'financial-services-capital-markets',
  'Corporate & Commercial': 'corporate-commercial',
  'Telecommunications, Technology & Digital Law': 'telecommunications-technology-digital-law',
}

const capabilityMap: Record<ExpertiseName, string[]> = {
  'Energy, Extractives & Foreign Investment': ['Oil, gas and power', 'Energy projects and transactions', 'Foreign investment', 'Regulatory strategy', 'Project development', 'Energy disputes'],
  'Dispute Resolution': ['Commercial litigation', 'Domestic and international arbitration', 'Mediation and negotiated resolution', 'Regulatory disputes', 'Investment disputes', 'Enforcement strategy'],
  'Financial Services & Capital Markets': ['Banking and finance', 'Capital markets', 'Loan documentation and security', 'Financial regulation', 'Fintech and payments', 'Transaction structuring'],
  'Corporate & Commercial': ['Mergers and acquisitions', 'Commercial contracts', 'Corporate governance', 'Joint ventures', 'Employment advisory', 'Real estate transactions'],
  'Telecommunications, Technology & Digital Law': ['Technology transactions', 'Data protection and privacy', 'Telecommunications regulation', 'Intellectual property', 'Fintech and digital products', 'Cybersecurity governance'],
}

export const expertiseDetails = Object.fromEntries(
  expertise.map(([number, title, description]) => [
    expertiseSlugs[title],
    {
      number,
      title,
      description,
      introduction: `Ninewells combines Nigerian market knowledge, senior judgement and an integrated commercial perspective on ${title.toLowerCase()} matters.`,
      capabilities: capabilityMap[title],
    },
  ]),
) as Record<string, {
  number: string
  title: ExpertiseName
  description: string
  introduction: string
  capabilities: string[]
}>

export const sectors = [
  ['Energy & extractives', 'Oil, gas, power and natural resources'],
  ['Financial services', 'Banks, capital markets and payments'],
  ['Technology & digital economy', 'Telecommunications, data and innovation'],
  ['Infrastructure & real estate', 'Projects, investment and development'],
] as const

export const insightItems = [
  {
    category: 'Firm news',
    date: '05 August 2026',
    title: 'Ninewells recognised for its support of LEICA 2026',
    summary: 'A shared commitment to collaboration, knowledge and innovation in the energy profession.',
    href: LINKEDIN_URL,
  },
  {
    category: 'Energy outlook',
    date: '31 July 2026',
    title: 'Nigeria’s production recovery and the next phase of energy reform',
    summary: 'Abdulmajeed Abolaji discusses investor interest, upstream divestments and host-community participation.',
    href: LINKEDIN_URL,
  },
  {
    category: 'Technology',
    date: '28 July 2026',
    title: 'Building a practice for telecommunications, technology and digital law',
    summary: 'Ninewells announces Esther Gbenro’s arrival as Senior Associate in its specialist digital practice.',
    href: LINKEDIN_URL,
  },
] as const

export const megaMenuContent = {
  expertise: {
    eyebrow: 'Our expertise',
    heading: 'Nigerian insight.\nIntegrated thinking.',
    action: 'View all expertise',
    columns: [
      { label: 'Business & markets', links: ['Corporate & Commercial', 'Financial Services & Capital Markets', 'Telecommunications, Technology & Digital Law'] },
      { label: 'Investment & risk', links: ['Energy, Extractives & Foreign Investment', 'Dispute Resolution'] },
    ],
  },
  industries: {
    eyebrow: 'Industries',
    heading: 'Knowledge of your world.',
    action: 'View all industries',
    columns: [
      { label: 'Core sectors', links: ['Energy & extractives', 'Financial services', 'Technology & digital economy'] },
      { label: 'Connected markets', links: ['Infrastructure & real estate', 'Foreign investment', 'Regulated businesses'] },
    ],
  },
} as const
