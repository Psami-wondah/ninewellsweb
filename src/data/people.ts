import abdulmajeedImage from '../assets/Abdulmajeed.webp'
import adebimpeImage from '../assets/Adebimpe.webp'
import adejokeImage from '../assets/Adejoke.webp'
import bayoImage from '../assets/Bayo-Adaralegbe.webp'
import estherImage from '../assets/Esther-Gbenro-pic.webp'
import financialServicesImage from '../assets/expertise-financial-services.webp'
import { LINKEDIN_URL } from './siteContent'

export type Person = {
  slug: string
  name: string
  position: string
  title?: string
  role: string
  teamType: 'Lawyer' | 'Business services'
  mobile: string
  email: string
  image: string
  imageAlt?: string
  imagePosition?: string
  expertise: string[]
  bio: string
  background: string[]
  representativeWorks: string[]
  academicQualifications: string[]
  professionalQualifications: string[]
  honours: string[]
  careerHighlights: string[]
  memberships: string[]
  sourceUrl: string
  sourceLabel: string
}

export const people: Person[] = [
  {
    slug: 'bayo-adaralegbe',
    name: 'Bayo Adaralegbe',
    position: 'Lead Partner',
    title: 'Ph.D, C.Arb, FEI, FCIS · Adjunct Professor, University of Ibadan',
    role: 'Energy, Extractives, Foreign Investments & Disputes',
    teamType: 'Lawyer',
    mobile: '0803 719 3050',
    email: 'badaralegbe@ninewellslegal.com',
    image: bayoImage,
    imagePosition: 'center 28%',
    expertise: ['Energy', 'Extractives', 'Foreign Investments', 'Disputes', 'Corporate & Commercial'],
    bio: 'Bayo Adaralegbe is the Lead Partner at Ninewells Law Practice and has been a member of the Nigerian Bar for almost forty years.',
    background: [
      'He was until recently Group Head of the Energy and Extractives Group at Babalakin & Co, where he led advisory work in oil, gas and power and was actively involved in complex commercial litigation and domestic and international commercial arbitration, both as arbitrator and counsel.',
      'Bayo is also a governance practitioner. Earlier in his career, he served as Company Secretary and Legal Adviser in a bank.',
    ],
    representativeWorks: [
      'Advised the National Assembly on an earlier version of the Petroleum Industry Act.',
      'Advised the House of Representatives Committee on Local Content on proposed amendments to the Nigerian Oil & Gas Industry Content Development Act.',
      'Advised the Nigerian Content Monitoring Board on the legal framework for the Nigerian Content Fund.',
      'Drafted contracts for the Nigerian Midstream and Downstream Petroleum Regulatory Authority.',
      'Advised China Petroleum & Chemical Corporation (SINOPEC) on its proposed acquisition of a major upstream asset in Nigeria.',
      'Advised Seplat Energy PLC on aspects of its acquisition of ExxonMobil.',
      'Represented Addax Petroleum Development Nigeria Limited in a complex arbitration arising from a crude-handling agreement between two producing companies.',
      'Represented Nigeria LNG Limited in a dispute against the Nigerian Senate at the Federal High Court.',
      'Represented TotalEnergies in a dispute against the House of Representatives at the Federal High Court.',
      'Represented Jumia Nigeria in a data-protection dispute at the Federal High Court.',
      'Represented clients across every tier of the Nigerian courts, from the State High Court, Federal High Court and National Industrial Court to the Supreme Court.',
      'Acted as expert witness on Nigerian petroleum and contract law in an investor-state treaty arbitration before an ICSID arbitral panel in France.',
      'Acted as expert witness in litigation under the Alien Tort Claims Act in the Federal District Court in Chicago, United States, and before the Commercial Court in England.',
      'Appeared before the House of Representatives Committee on Gas in relation to bilateral investment treaties concluded by Nigeria.',
    ],
    academicQualifications: [
      'Ph.D. focused on investor-state treaty arbitration, Centre for Energy, Petroleum and Mineral Law & Policy, University of Dundee, Scotland, United Kingdom.',
      'LL.M. in Petroleum Law & Policy with Distinction, Centre for Energy, Petroleum and Mineral Law & Policy, University of Dundee, Scotland, United Kingdom.',
      'LL.B. (Hons.), University of Ife, now Obafemi Awolowo University, Nigeria.',
    ],
    professionalQualifications: [
      'Certificate of Call to Bar, Council of Legal Education.',
      'Chartered Arbitrator and Fellow, Chartered Institute of Arbitrators, United Kingdom.',
      'Chartered Secretary and Fellow, Chartered Institute of Chartered Secretaries and Administrators, United Kingdom.',
      'Fellow, Energy Institute, United Kingdom.',
    ],
    honours: [
      'Senior Advocate of Nigeria (Designate).',
      'Appointed Adjunct Professor of Energy and International Investment Law, University of Ibadan—the first Nigerian legal practitioner appointed by a first-generation Nigerian university on the strength of article publications and professional practice.',
      'Awarded a full scholarship by a United States oil corporation for his Ph.D. programme at the University of Dundee.',
      'Awarded Distinction for his LL.M. in Petroleum Law and Policy.',
      'Elected Fellow of the Energy Institute, United Kingdom—the first Nigerian legal practitioner to receive the honour.',
    ],
    careerHighlights: [
      'His review of the Supreme Court judgment in City Engineering v Federal Housing Authority, published in Arbitration International, contributed to reforms reflected in the Arbitration and Mediation Act 2023 and Arbitration Law 2009.',
      'Elected to the Governing Council of the Institute of Chartered Secretaries and Administrators, 2025 to date.',
      'Federal Government representative on the Governing Council of the University of Lagos, 2017–2021.',
      'Consistently recognised as an expert in his practice areas by international ranking bodies.',
      'Published approximately 20 scholarly articles in peer-reviewed, high-impact international journals, several cited in major international textbooks.',
      'Serves on the editorial boards of international and Nigerian journals.',
    ],
    memberships: [
      'International Bar Association',
      'International Law Association',
      'Association of International Energy Negotiators (AIEN)',
      'Energy Institute, United Kingdom',
      'Institute for Energy Law, United States',
      'Society of Petroleum Engineers',
      'Nigerian Association of Petroleum Explorationists',
      'Nigerian Gas Association',
      'Nigerian Bar Association',
      'Chartered Institute of Arbitrators, United Kingdom',
      'Institute of Chartered Secretaries and Administrators, United Kingdom',
    ],
    sourceUrl: LINKEDIN_URL,
    sourceLabel: 'Ninewells on LinkedIn',
  },
  {
    slug: 'adejoke-odocha',
    name: 'Adejoke Odocha',
    position: 'Partner',
    role: 'Corporate & Commercial',
    teamType: 'Lawyer',
    mobile: '0803 592 3409',
    email: 'adejoke.odocha@ninewellslegal.com',
    image: adejokeImage,
    imagePosition: 'center 24%',
    expertise: ['Corporate & Commercial'],
    bio: 'Adejoke Odocha is a Partner in the Corporate & Commercial Practice Group of Ninewells and a commercially astute business lawyer with more than 20 years of experience.',
    background: [
      'She advises multinational corporations, financial institutions, investors, private-equity sponsors, government agencies and indigenous businesses on complex corporate transactions, strategic investments, regulatory compliance, governance and cross-border commercial matters across Africa.',
      'Her practice combines top-tier private-practice expertise with extensive in-house legal leadership. Before joining Ninewells, she worked at Templars and served as legal counsel to Rendeavour, Africa’s largest new-city developer, Atlantic Energy and Schlumberger. This breadth of experience enables her to align legal strategy with clients’ broader commercial objectives.',
      'Beyond transactional work, Adejoke is a recognised voice on entrepreneurship, gender inclusion and access to finance, supporting fundraising strategy, investment-readiness assessments and ESG alignment for early-stage and growth businesses.',
    ],
    representativeWorks: [
      'Advised on major urban-development projects including Alaro City in the Lekki Free Zone, the Jigna Project in Abuja and Appolonia City in Accra.',
      'Structured a US$300 million private-equity fund for Travant Capital Partners.',
      'Led legal structuring on a US$25 million cross-border loan facility.',
      'Acted as Solicitor to the Issue on a ₦1 billion IPO.',
      'Advised on the acquisition of a Nigerian competitor for Siegwerk.',
    ],
    academicQualifications: [
      'LL.M. in International Business Law, London School of Economics and Political Science.',
      'Bachelor of Laws (LL.B.), University of Warwick.',
    ],
    professionalQualifications: ['Certificate of Call to Bar, Council of Legal Education.'],
    honours: ['Ranked in the Legal 500 GC Powerlist Africa.'],
    careerHighlights: [
      'Legal Counsel, West Africa, Rendeavour.',
      'Attorney, Schlumberger.',
      'Legal Adviser, Atlantic Energy.',
      'Independent General Counsel, Grace Lake Partners Limited.',
    ],
    memberships: ['Nigerian Bar Association'],
    sourceUrl: 'https://ng.linkedin.com/in/adejoke-odocha-0212ab2',
    sourceLabel: 'LinkedIn profile',
  },
  {
    slug: 'abdulmajeed-abolaji',
    name: 'Abdulmajeed Abolaji',
    position: 'Managing Associate',
    role: 'Energy, Extractives & Foreign Investments',
    teamType: 'Lawyer',
    mobile: '0803 196 3519',
    email: 'abdulmajeed.abolaji@ninewellslegal.com',
    image: abdulmajeedImage,
    imagePosition: 'center 18%',
    expertise: ['Energy', 'Extractives', 'Financial Services', 'Foreign Investments'],
    bio: 'Abdulmajeed Abolaji is a Managing Associate in the Energy, Extractives and Foreign Investments Practice Group of Ninewells.',
    background: [
      'He is an energy and finance lawyer with extensive experience advising on complex, high-value transactions in Nigeria’s oil, gas, power and broader financial sectors. His market-facing practice focuses on energy-asset acquisitions, structured and project finance and regulatory advisory work.',
      'Before joining Ninewells, Abdulmajeed worked at Dentons ACAS-Law. His work spans the transaction lifecycle, from early-stage structuring and due diligence through negotiation, financing, regulatory approvals and completion. He also brings experience from reputable top-tier law firms and leading capital-market operators.',
    ],
    representativeWorks: [
      'Advised West Power and Gas Limited on the divestment of its 60% shareholding in Eko Electricity Distribution Plc to Transgrid Enerco Limited.',
      'Advised Chappal Energies Mauritius Limited and Project Odinmin Investments Limited on the acquisition of Equinor AS’s 100% shareholding in Equinor Nigeria Energy Company Limited, now Chappal Energies Offshore Limited.',
      'Advised Chappal Energies and Telema Energies Nigeria Limited on the acquisition of TotalEnergies EP Nigeria Limited’s 10% non-operating interest in 18 onshore and shallow-water Oil Mining Leases in the Niger Delta, including three gas-producing OMLs.',
      'Advised a syndicate of lenders financing Seplat Energy Plc’s acquisition of Mobil Producing Nigeria Unlimited’s assets.',
      'Advised national project sponsors and a Bahamas-registered orphan SPV on a US$2 billion multi-jurisdictional syndicated financing for the expansion and development of natural-gas pipeline networks across Nigeria.',
      'Advised Chappal Investment Limited on senior and junior reserve-based lending facilities totalling US$450 million to refinance acquisition bridge finance and support oil operations and field development.',
      'Advised an indigenous upstream asset holder on a financial and technical services arrangement involving a minimum US$360 million investment over the life of the asset, including funding for a gas-processing plant.',
    ],
    academicQualifications: ['Bachelor of Laws (LL.B.), University of Ilorin, Nigeria.'],
    professionalQualifications: ['Certificate of Call to Bar, Council of Legal Education.'],
    honours: [
      'Director-General’s Prize for attaining First Class, Nigerian Law School.',
      'Legal 500: acknowledged as exceptional, skilled and knowledgeable in M&A and energy infrastructure, 2026.',
      'IFLR1000 Global Rankings Rising Star for Projects: Energy and Project Finance, 2025.',
      'Quoted as a Nigerian oil-and-gas expert by Global Business Reports, 2025 and 2026.',
      'Cited as an expert in energy and project finance by African Energy Reports, 2025 and 2026.',
    ],
    careerHighlights: ['Dentons ACAS-Law', 'CardinalStone Partners', 'AELEX Partners', 'Pinheiro LP'],
    memberships: [
      'International Bar Association',
      'Association of International Energy Negotiators; former Young Negotiators Representative of the AIEN African Committee',
      'Nigerian Bar Association Section on Business Law; member of the Energy Committee',
      'Nigerian Bar Association',
      'Compliance Institute, Nigeria',
    ],
    sourceUrl: 'https://ng.linkedin.com/in/abdulmajeed-abolaji-a51974162',
    sourceLabel: 'LinkedIn profile',
  },
  {
    slug: 'amanda-opara',
    name: 'Amanda Opara',
    position: 'Managing Associate',
    role: 'Financial Services & Capital Markets',
    teamType: 'Lawyer',
    mobile: '0703 064 7714',
    email: 'amanda.opara@ninewellslegal.com',
    image: financialServicesImage,
    imageAlt: 'Financial services and capital markets at Ninewells',
    imagePosition: 'center',
    expertise: ['Financial Services', 'Capital Markets'],
    bio: 'Amanda Opara is a Managing Associate in Financial Services & Capital Markets. She focuses on lending and project finance and has led Nigerian counsel workstreams on cross-border financings from structuring through signing, closing and post-closing perfection.',
    background: [
      'A highly accomplished banking and finance lawyer, Amanda advises international and domestic banks, multilateral development banks, export credit agencies and corporates on complex financing transactions across Africa, spanning bilateral and syndicated lending, project finance, trade finance, leveraged acquisition financing and cross-border restructurings.',
      'Before joining Ninewells, she was part of the Banking and Finance Practice Group at G. Elias, where she advised on high-profile loan and capital-market transactions.',
    ],
    representativeWorks: [
      'Led the Nigerian counsel workstream for Afreximbank on a $300 million cross-border trade finance facility to Access Holdings Plc.',
      'Led the Nigerian counsel workstream for the Export-Import Bank of China on a $300 million facility to Africa Finance Corporation.',
      'Led the Nigerian counsel workstream for BUA Group on a $200 million Afreximbank financing for a greenfield petrochemical project.',
      'Led the Nigerian counsel workstream for China Development Bank on an RMB800 million bilateral facility to Stanbic IBTC Bank.',
      'Advised Titan Trust Bank on its acquisition of Union Bank of Nigeria, including a related $300 million leveraged acquisition financing and subsequent merger.',
      'Advised BUA Group on Africa Finance Corporation’s $200 million financing for a sustainable sugar and ethanol project.',
      'Advised Smile Telecoms Holdings on the cross-border restructuring of multi-lender indebtedness, including a circa $64 million refinancing.',
      'Acted for security trustees on an IFC-led $500 million syndicated facility to BUA Cement Plc.',
      'Advised Afreximbank on $152 million multicurrency credit facilities financing the African Medical Centre of Excellence.',
      'Advised syndicate lenders on a $3.3 billion syndicated pre-export financing for the Nigerian National Petroleum Company Ltd (NNPC).',
      'Advised a global bank, as lead arranger and security agent, on a $271 million syndicated pre-export financing.',
      'Advised a leading Nigerian bank on a $75 million facility to a major indigenous oil exploration and production company.',
      'Advised on BUA Cement Plc’s ₦200 billion debt programme and ₦100 billion bond issuance — then the largest corporate bond issuance in the Nigerian debt capital market.',
      'Advised MTN Nigeria Communications Plc on its ₦478.2 billion equity programme and Series 1 offer for sale of shares.',
      'Acted as solicitor to the issue on Fidson Healthcare Plc’s ₦25 billion commercial paper programme.',
    ],
    academicQualifications: [
      'MSc in Law and Finance, University of Oxford.',
      'Nigerian Bar Qualification Academic Training, Nigerian Law School.',
      'Bachelor of Laws (LL.B.), University of Nigeria.',
    ],
    professionalQualifications: ['Certificate of Call to Bar, Council of Legal Education.'],
    honours: [
      'IFLR1000 — Rising Star in Banking (twice).',
      'Legal 500 — recognised for Banking, Finance & Capital Markets (twice).',
      'Nigerian Legal Awards — 40 Under 40 (2024).',
      'Nigerian Law School Director-General’s Award for Outstanding Academic Performance.',
      'Mastercard Foundation Scholar and Africa Oxford Initiative Scholar, University of Oxford.',
    ],
    careerHighlights: [
      'Operations and Impact Administration Fellow, African Venture Philanthropy Alliance (AVPA).',
      'Research Fellow, Oxford Community Action.',
      'One of six lawyers selected for the Presidential Enabling Business Environment Council Finance Working Group, advising on federal investment-climate reforms.',
    ],
    memberships: [
      'Nigerian Bar Association (NBA).',
      'Nigerian Bar Association Section on Business Law (NBA-SBL).',
    ],
    sourceUrl: LINKEDIN_URL,
    sourceLabel: 'Ninewells on LinkedIn',
  },
  {
    slug: 'esther-gbenro',
    name: 'Esther Gbenro',
    position: 'Senior Associate',
    role: 'Telecommunications, Technology & Digital Law',
    teamType: 'Lawyer',
    mobile: '0703 127 0781',
    email: 'esther.gbenro@ninewellslegal.com',
    image: estherImage,
    imagePosition: 'center 22%',
    expertise: ['Telecommunications, Technology & Digital Law'],
    bio: 'Esther Gbenro is a Senior Associate in the Telecommunications, Technology & Digital Law Practice at Ninewells.',
    background: [
      'She advises multinational corporations, technology companies, financial institutions, public institutions, startups and local businesses on legal and regulatory issues arising from the digital economy. Her work includes technology transactions, commercial contracts, regulatory compliance, digital-business operations, cross-border transactions and intellectual-property protection.',
      'Before joining Ninewells, Esther was part of the Corporate Commercial and Intellectual Property Practice at Aluko & Oyebode. She also gained dispute-resolution experience at Legal Answers LLP, representing clients in commercial litigation, arbitration and corporate-advisory matters.',
    ],
    representativeWorks: [
      'Advised a global digital platform on the legal terms governing a major international sporting promotional campaign.',
      'Advised an international client on AI-generated voice technologies, including copyright, privacy and AI-governance implications.',
      'Conducted regulatory risk assessments for a multinational technology company’s expansion into Nigeria.',
      'Represented an international software company in a software-piracy enforcement action.',
      'Advised an international client on domain-name infringement and online brand protection.',
      'Managed multinational intellectual-property portfolios across the United States, United Kingdom, European Union, ARIPO and OAPI jurisdictions.',
      'Led trademark enforcement, anti-counterfeiting initiatives and online marketplace takedowns.',
      'Delivered intellectual-property enforcement training for regulatory agencies and customs officials.',
      'Advised a foreign company on Nigerian agency, distribution and market-entry structures.',
      'Represented clients before the Corporate Affairs Commission in business-name and trademark disputes.',
    ],
    academicQualifications: ['Bachelor of Laws (LL.B.), Ekiti State University.'],
    professionalQualifications: [
      'Certificate of Call to Bar, Council of Legal Education.',
      'Certified Data Protection Officer.',
    ],
    honours: [
      'Director-General’s Prize for attaining First Class and eighth overall best graduating student, Nigerian Law School.',
      'Award of Excellence, Ekiti State Government.',
      'Best Graduating Student, Arts, Command Secondary School, Suleja.',
    ],
    careerHighlights: [],
    memberships: [
      'Nigerian Bar Association',
      'Nigerian Bar Association Section on Business Law; member of the Technology, Intellectual Property, Sport, Entertainment and Media Committees',
      'Intellectual Property Law Advocacy Network; Assistant General Secretary 2023–2025 and Social Secretary 2025–2026',
    ],
    sourceUrl: 'https://ng.linkedin.com/in/esther-ajayi-gbenro',
    sourceLabel: 'LinkedIn profile',
  },
  {
    slug: 'adebimpe-fajemisin',
    name: 'Adebimpe Fajemisin',
    position: 'Chief Operating Officer',
    role: 'Business Operations',
    teamType: 'Business services',
    mobile: '0805 652 7337',
    email: 'adebimpe.fajemisin@ninewellslegal.com',
    image: adebimpeImage,
    imagePosition: 'center 18%',
    expertise: [],
    bio: 'Adebimpe’s academic background, training and experience give her the skill set to keep Ninewells organised so its lawyers can deliver immediate legal solutions to clients, applying cutting-edge technology, the best available legal resources and a cost-effective approach.',
    background: [
      'She keeps Ninewells organised so its lawyers can deliver immediate legal solutions to clients, applying cutting-edge technology, the best available legal resources and a cost-effective approach.',
      'Before joining Ninewells, Adebimpe worked with Olaniwun Ajayi and Templars.',
    ],
    representativeWorks: [],
    academicQualifications: [
      'Diploma in Accounting and Payroll Administration, ABM College, Calgary, Canada.',
      'Master of Business Administration (MBA) in Accounting, University of Lagos.',
      'Bachelor of Science (B.Sc.) in Banking and Finance, Covenant University.',
      'ICAN qualification in progress.',
    ],
    professionalQualifications: ['Certified Data Protection Officer.'],
    honours: [],
    careerHighlights: ['Olaniwun Ajayi', 'Templars'],
    memberships: ['Association of Law Firm Administrators Nigeria'],
    sourceUrl: LINKEDIN_URL,
    sourceLabel: 'Ninewells on LinkedIn',
  },
]
