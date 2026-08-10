import { LINKEDIN_URL } from './siteContent'

export type Person = {
  slug: string
  name: string
  position: string
  role: string
  location: string
  expertise: string[]
  industries: string[]
  bio: string
  background: string[]
  experience: string
  sourceUrl: string
  sourceLabel: string
}

export const people: Person[] = [
  {
    slug: 'bayo-adaralegbe',
    name: 'Prof. Bayo Adaralegbe',
    position: 'Lead Partner',
    role: 'Energy, Extractives & Foreign Investment',
    location: 'Lagos',
    expertise: ['Energy, Extractives & Foreign Investment', 'Dispute Resolution'],
    industries: ['Energy & extractives', 'Infrastructure & real estate'],
    bio: 'Bayo is the Lead Partner of Ninewells and an energy, international investment and dispute-resolution lawyer.',
    background: [
      'His work spans petroleum law and policy, energy transactions, foreign investment and the resolution of complex commercial disputes.',
      'Public biographies note postgraduate research in petroleum law and policy and international investment law at the University of Dundee’s Centre for Energy, Petroleum and Mineral Law and Policy.',
    ],
    experience: 'He has contributed to major Nigerian energy and investment matters, including work connected with petroleum-sector reform, complex transactions and dispute settlement.',
    sourceUrl: LINKEDIN_URL,
    sourceLabel: 'Ninewells company profile',
  },
  {
    slug: 'adejoke-odocha',
    name: 'Adejoke Odocha',
    position: 'Partner',
    role: 'Corporate & Commercial',
    location: 'Lagos',
    expertise: ['Corporate & Commercial', 'Financial Services & Capital Markets'],
    industries: ['Infrastructure & real estate', 'Financial services'],
    bio: 'Adejoke is a Corporate & Commercial Partner with experience advising businesses on transactions, governance and complex commercial arrangements.',
    background: [
      'Before joining Ninewells, she served as General Counsel at Rendeavour West Africa and worked in the legal departments of Schlumberger and Atlantic Energy.',
      'Her publicly announced experience includes regulatory compliance, commercial negotiations and drafting, loan documentation and perfection, employment, real estate and strategic legal advice.',
    ],
    experience: 'Adejoke brings in-house and private-practice perspective to commercial transactions and the legal questions that sit close to business operations.',
    sourceUrl: 'https://ng.linkedin.com/in/adejoke-odocha-0212ab2',
    sourceLabel: 'Public LinkedIn profile',
  },
  {
    slug: 'abdulmajeed-abolaji',
    name: 'Abdulmajeed Abolaji',
    position: 'Managing Associate',
    role: 'Energy, Extractives & Foreign Investment',
    location: 'Lagos',
    expertise: ['Energy, Extractives & Foreign Investment', 'Financial Services & Capital Markets'],
    industries: ['Energy & extractives', 'Financial services'],
    bio: 'Abdulmajeed advises on energy, extractives, foreign investment and financial-services matters.',
    background: [
      'He joined Ninewells from Dentons ACAS-Law, where his work covered the Energy and Financial Services practices.',
      'His public profile describes experience across oil, gas, power and financial-services transactions, alongside writing on Nigerian electricity regulation.',
    ],
    experience: 'His work connects transaction structuring with an informed view of Nigeria’s evolving oil, gas, power and electricity-regulation landscape.',
    sourceUrl: 'https://ng.linkedin.com/in/abdulmajeed-abolaji-a51974162',
    sourceLabel: 'Public LinkedIn profile',
  },
  {
    slug: 'esther-gbenro',
    name: 'Esther Gbenro',
    position: 'Senior Associate',
    role: 'Telecommunications, Technology & Digital Law',
    location: 'Lagos',
    expertise: ['Telecommunications, Technology & Digital Law', 'Corporate & Commercial'],
    industries: ['Technology & digital economy', 'Financial services'],
    bio: 'Esther heads the firm’s Telecommunications, Technology & Digital Law practice.',
    background: [
      'She joined Ninewells from Aluko & Oyebode and advises at the intersection of technology, regulation, data and intellectual property.',
      'Her public profile records first-class honours from the Nigerian Law School and WIPO certifications in copyright, patent information and intellectual property.',
    ],
    experience: 'Her recent analysis examines how Nigerian data-localisation requirements could shape investment in data centres, cybersecurity and the wider digital economy.',
    sourceUrl: 'https://ng.linkedin.com/in/esther-ajayi-gbenro',
    sourceLabel: 'Public LinkedIn profile',
  },
]
