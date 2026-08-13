export const LINKEDIN_URL = 'https://www.linkedin.com/company/ninewells/'

export const navItems = ['About', 'Expertise', 'Industries', 'People', 'Insights', 'Contact'] as const

export const practiceAreas = [
  {
    number: '01',
    slug: 'energy',
    title: 'Energy',
    description: 'Advice across the energy value chain, from operations and regulation to projects, finance and disputes.',
    introduction: 'The energy sector is undergoing significant transformation. We advise clients across the energy value chain through the different stages of their operations.',
    overview: 'Our work covers regulatory compliance, project development, financing, commercial transactions, dispute resolution and the acquisition or divestment of interests.',
    capabilities: ['Upstream, midstream and downstream oil & gas', 'Renewable energy and power projects', 'Project finance', 'Licensing and regulatory compliance', 'ESG and carbon initiatives', 'Energy disputes'],
  },
  {
    number: '02',
    slug: 'extractives',
    title: 'Extractives',
    description: 'Legal and commercial guidance for mining and natural-resources projects throughout their lifecycle.',
    introduction: 'We advise mining and natural-resources companies throughout the project lifecycle, from licensing to exploration, production and closure.',
    overview: 'Our multidisciplinary approach connects project development, environmental obligations, commercial structures and fiscal considerations.',
    capabilities: ['Mining licences', 'Project development', 'Environmental compliance', 'Joint ventures', 'Royalties and taxation'],
  },
  {
    number: '03',
    slug: 'foreign-investments',
    title: 'Foreign Investments',
    description: 'Market-entry, investment-protection and regulatory advice for international businesses investing in Nigeria.',
    introduction: 'We help multinational companies and foreign investors establish and operate businesses in Nigeria, repatriate profits and protect their investments.',
    overview: 'Our advice helps clients manage expropriation risk and structure dispute resolution through arbitration while addressing regulatory compliance, immigration, technology transfer and taxation.',
    capabilities: ['Business establishment and market entry', 'Investment protection', 'Profit repatriation', 'Arbitration strategy', 'Regulatory compliance', 'Immigration', 'Technology transfer', 'Taxation'],
  },
  {
    number: '04',
    slug: 'financial-services',
    title: 'Financial Services',
    description: 'Regulatory and transactional advice for banks, fintechs and other financial institutions.',
    introduction: 'We advise banks, fintechs and other financial institutions on the regulatory and transactional matters that shape their businesses.',
    overview: 'We combine financial-sector knowledge with practical structuring advice for institutions, products, transactions and private clients.',
    capabilities: ['Banking & finance', 'Loan structuring', 'Insurance', 'Private wealth'],
  },
  {
    number: '05',
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    description: 'Commercially focused solutions that support growth, manage risk and enable strategic transactions.',
    introduction: 'We advise businesses at every stage of their lifecycle, from formation and governance to complex cross-border investments, restructurings and commercial agreements.',
    overview: 'Our team provides practical, business-oriented counsel tailored to each client’s industry, operating realities and commercial objectives.',
    capabilities: ['Mergers & acquisitions', 'Regulatory compliance', 'Consumer protection & competition', 'Governance & company secretarial services', 'Real estate & infrastructure', 'Employment & immigration'],
  },
  {
    number: '06',
    slug: 'capital-markets',
    title: 'Capital Markets',
    description: 'Advice on equity and debt offerings, investment structures and securities regulation.',
    introduction: 'We advise issuers, investors and financial institutions on equity and debt offerings and securities regulation.',
    overview: 'Our capital-markets work connects transaction execution, fundraising objectives and the regulatory requirements governing Nigerian securities.',
    capabilities: ['Initial public offerings', 'Bonds', 'Private equity', 'Funds', 'Securities compliance'],
  },
  {
    number: '07',
    slug: 'disputes',
    title: 'Disputes',
    description: 'Strategic representation before courts and arbitral tribunals in high-value disputes.',
    introduction: 'We represent clients before Nigerian courts and arbitral tribunals in high-value, complex and commercially consequential disputes.',
    overview: 'Our lawyers act across every tier of the Nigerian courts and in domestic, international commercial and investor-state treaty arbitration, both as counsel and as members of arbitral tribunals.',
    capabilities: ['Commercial litigation', 'All tiers of Nigerian courts', 'Domestic arbitration', 'International commercial arbitration', 'Investor-state treaty arbitration', 'Arbitral tribunal appointments'],
  },
  {
    number: '08',
    slug: 'telecommunications-technology-digital-law',
    title: 'Telecommunications, Technology & Digital Law',
    description: 'Legal and regulatory guidance for technology-driven businesses operating in the digital economy.',
    introduction: 'We advise technology-driven businesses on innovation, transactions, intellectual property and regulatory compliance.',
    overview: 'Our practice supports established companies, financial institutions and emerging businesses as technology reshapes products, markets, risk and regulation.',
    capabilities: ['Telecommunications', 'Technology', 'Fintech', 'Artificial intelligence', 'E-commerce', 'Data protection and privacy', 'Betting & gaming', 'Cybersecurity', 'Blockchain', 'Intellectual property'],
  },
] as const

export type ExpertiseName = (typeof practiceAreas)[number]['title']

export const expertise = practiceAreas.map(({ number, title, description }) => [number, title, description] as const)

export const expertiseSlugs = Object.fromEntries(practiceAreas.map(({ title, slug }) => [title, slug])) as Record<ExpertiseName, string>

const canonicalExpertiseDetails = Object.fromEntries(practiceAreas.map((practice) => [practice.slug, practice])) as Record<string, (typeof practiceAreas)[number]>

export const expertiseDetails = {
  ...canonicalExpertiseDetails,
  'energy-extractives-foreign-investment': canonicalExpertiseDetails.energy,
  'dispute-resolution': canonicalExpertiseDetails.disputes,
  'financial-services-capital-markets': canonicalExpertiseDetails['financial-services'],
} as Record<string, (typeof practiceAreas)[number]>

export const sectors = [
  ['Energy, oil & gas', 'Operators, investors and projects across the energy value chain'],
  ['Mining & natural resources', 'Licensing, development, production and closure'],
  ['Financial services', 'Banks, fintechs, capital markets, insurance and private wealth'],
  ['Technology & digital economy', 'Telecommunications, data, platforms and innovation'],
  ['Infrastructure & real estate', 'Projects, development, investment and commercial assets'],
  ['Regulated businesses', 'Governance, compliance and public-sector engagement'],
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
    action: 'Explore our practices',
    columns: [
      { label: 'Markets & transactions', links: ['Corporate & Commercial', 'Financial Services', 'Capital Markets', 'Foreign Investments'] },
      { label: 'Projects, risk & innovation', links: ['Energy', 'Extractives', 'Disputes', 'Telecommunications, Technology & Digital Law'] },
    ],
  },
  industries: {
    eyebrow: 'Industries',
    heading: 'Knowledge of your world.',
    action: 'Explore our industries',
    columns: [
      { label: 'Core sectors', links: ['Energy, oil & gas', 'Mining & natural resources', 'Financial services'] },
      { label: 'Connected markets', links: ['Technology & digital economy', 'Infrastructure & real estate', 'Regulated businesses'] },
    ],
  },
} as const
