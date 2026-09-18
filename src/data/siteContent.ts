import expertiseCapitalMarketsImage from "../assets/expertise-capital-markets.webp";
import expertiseCorporateCommercialImage from "../assets/expertise-corporate-commercial.webp";
import expertiseDisputesImage from "../assets/expertise-disputes.webp";
import expertiseEnergyImage from "../assets/expertise-energy.webp";
import expertiseExtractivesImage from "../assets/expertise-extractives.webp";
import expertiseFinancialServicesImage from "../assets/expertise-financial-services.webp";
import expertiseForeignInvestmentsImage from "../assets/expertise-foreign-investments.webp";
import expertiseTechnologyImage from "../assets/expertise-technology.webp";
import insightBayoLeadPartner from "../assets/insight-bayo-lead-partner.jpg";
import insightEnergyOutlook from "../assets/insight-energy-outlook.jpg";
import insightJambVisit from "../assets/insight-jamb-visit.jpg";
import insightLeica2026 from "../assets/insight-leica-2026.jpg";
import insightVirtualAssets from "../assets/insight-virtual-assets.jpg";

export const LINKEDIN_URL = "https://www.linkedin.com/company/ninewells/";

export const navItems = [
  "About",
  "Technology",
  "Expertise",
  "People",
  "Intelligence",
  "Contact",
] as const;

export const practiceAreas = [
  {
    number: "01",
    slug: "energy",
    title: "Energy",
    description:
      "Full-value-chain advice across regulation, projects, financing, transactions, acquisitions, divestments and disputes.",
    introduction:
      "The energy sector is undergoing significant transformation. We advise clients across the full energy value chain through the different stages of their operations.",
    overview:
      "Our work covers regulatory compliance, project development, financing, commercial transactions, acquisitions and divestments of interests, and dispute resolution.",
    featureImage: expertiseEnergyImage,
    featureImageAlt: "Industrial storage tanks beside the Ijora cityscape in Lagos",
    featureImageLocation: "Ijora · Lagos",
    featureImageCreator: "Vitalis Nwenyi",
    featureImageSourceUrl:
      "https://unsplash.com/photos/large-industrial-tanks-sit-near-a-cityscape-I1VGlHw7OAc",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Upstream, Midstream and Downstream Oil & Gas",
      "Renewable Energy and Power Projects",
      "Project Finance",
      "Licensing and Regulatory Compliance",
      "ESG and Carbon Initiatives",
      "Energy Disputes",
    ],
    industries: [
      [
        "Oil & Gas",
        "Upstream, midstream and downstream operators, projects and transactions",
      ],
      [
        "Power & Utilities",
        "Generation, transmission, distribution and energy services",
      ],
      ["Renewable Energy", "Solar, wind and other energy-transition projects"],
      ["Energy Infrastructure", "Pipelines, facilities and supporting assets"],
    ],
  },
  {
    number: "02",
    slug: "extractives",
    title: "Extractives",
    description:
      "Legal and commercial guidance for mining and natural-resources projects from licensing and exploration through production and closure.",
    introduction:
      "We advise mining and natural-resources companies throughout the project lifecycle, from licensing to exploration, production and closure.",
    overview:
      "Our multidisciplinary approach connects project development, environmental obligations, commercial structures and fiscal considerations.",
    featureImage: expertiseExtractivesImage,
    featureImageAlt: "Black-and-white industrial facility in Ewekoro, Nigeria",
    featureImageLocation: "Ewekoro · Ogun State",
    featureImageCreator: "Abiodun Odu",
    featureImageSourceUrl:
      "https://unsplash.com/photos/a-black-and-white-photo-of-a-factory-uWZ9umiDADw",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Mining Licences",
      "Project Development",
      "Environmental Compliance",
      "Joint Ventures",
      "Royalties and Taxation",
    ],
    industries: [
      ["Mining & Minerals", "Licensing, exploration, production and closure"],
      ["Natural Resources", "Resource development and commercial arrangements"],
      [
        "Energy & Utilities",
        "Projects connected to power, fuels and infrastructure",
      ],
      ["Regulated Businesses", "Public-sector engagement and compliance"],
    ],
  },
  {
    number: "03",
    slug: "foreign-investments",
    title: "Foreign Investments",
    description:
      "Market-entry, investment-protection and regulatory advice for international businesses investing and operating in Nigeria.",
    introduction:
      "We help multinational companies and foreign investors establish and operate businesses in Nigeria, repatriate profits and protect their investments.",
    overview:
      "Our advice covers investment protection, repatriation, expropriation risk, arbitration, regulatory compliance, immigration, technology transfer and taxation.",
    featureImage: expertiseForeignInvestmentsImage,
    featureImageAlt:
      "Aerial view of Lagos Lagoon, a bridge and the Victoria Island skyline",
    featureImageLocation: "Victoria Island · Lagos",
    featureImageCreator: "Malik Buraimoh",
    featureImageSourceUrl:
      "https://unsplash.com/photos/boats-navigate-a-wide-river-beside-a-modern-city-bridge-EMjpo0YjHPw",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Business Establishment and Market Entry",
      "Investment Protection",
      "Profit Repatriation",
      "Arbitration Strategy",
      "Regulatory Compliance",
      "Immigration",
      "Technology Transfer",
      "Taxation",
    ],
    industries: [
      [
        "Energy & Natural Resources",
        "Cross-border investments, acquisitions and project development",
      ],
      [
        "Financial Services & Fintech",
        "Market entry, investment structures and regulatory permissions",
      ],
      [
        "Technology & Digital Economy",
        "International growth, technology transfer and operating models",
      ],
      [
        "Infrastructure & Real Estate",
        "Development, investment and strategic partnerships",
      ],
      [
        "Regulated and Public-Sector Markets",
        "Government engagement, approvals and investment protection",
      ],
    ],
  },
  {
    number: "04",
    slug: "financial-services",
    title: "Financial Services",
    description:
      "Regulatory and transactional advice for banks, fintechs and financial institutions across Banking & Finance, Loan Structuring, Insurance and Private Wealth.",
    introduction:
      "We advise banks, fintechs and other financial institutions on the regulatory and transactional matters that shape their businesses.",
    overview:
      "We combine financial-sector knowledge with practical structuring advice for institutions, products, transactions and private clients.",
    featureImage: expertiseFinancialServicesImage,
    featureImageAlt: "Central Bank of Nigeria building in Abuja",
    featureImageLocation: "Abuja · Nigeria",
    featureImageCreator: "Gabriel Ogulu",
    featureImageSourceUrl:
      "https://unsplash.com/photos/a-large-building-of-the-central-bank-of-nigeria-xRAewjeW0_I",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Banking & Finance",
      "Loan Structuring",
      "Insurance",
      "Private Wealth",
      "Private Equity",
    ],
    industries: [
      [
        "Banks & Financial Institutions",
        "Regulatory, transactional and financing matters",
      ],
      [
        "Fintech & Digital Finance",
        "Products, platforms, payments and innovation",
      ],
      [
        "Insurance & Pensions",
        "Regulatory compliance, transactions and governance",
      ],
      [
        "Capital Markets & Investment Funds",
        "Fundraising, securities and investment structures",
      ],
      [
        "Private Wealth",
        "Structures and advice for private clients and family offices",
      ],
    ],
  },
  {
    number: "05",
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    description:
      "Commercially focused solutions that support growth, manage risk and enable strategic transactions.",
    introduction:
      "We advise businesses at every stage of their lifecycle, from formation and governance to complex cross-border investments, restructurings and commercial agreements.",
    overview:
      "Our team provides practical, business-oriented counsel across M&A, compliance, competition and consumer protection, governance, real estate, infrastructure, employment and immigration.",
    featureImage: expertiseCorporateCommercialImage,
    featureImageAlt: "Geometric office building photographed in Lagos",
    featureImageLocation: "Lagos · Nigeria",
    featureImageCreator: "Francis Odeyemi",
    featureImageSourceUrl:
      "https://unsplash.com/photos/grayscale-photo-of-high-rise-building-NfL07rKmJbU",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Mergers & Acquisitions",
      "Regulatory Compliance",
      "Consumer Protection & Competition",
      "Governance & Company Secretarial Services",
      "Real Estate & Infrastructure",
      "Employment & Immigration",
    ],
    industries: [
      [
        "Infrastructure & Real Estate",
        "Development, investment, construction and commercial assets",
      ],
      [
        "Financial Services",
        "Institutions, investors, products and strategic transactions",
      ],
      [
        "Technology & Digital Economy",
        "Platforms, innovation, data and commercial agreements",
      ],
      [
        "Consumer & Commercial Businesses",
        "Growth, operations, governance and risk management",
      ],
      [
        "Regulated Businesses",
        "Compliance, licensing and public-sector engagement",
      ],
    ],
  },
  {
    number: "06",
    slug: "capital-markets",
    title: "Capital Markets",
    description:
      "Advice on equity and debt offerings, IPOs, private equity, funds and securities regulation.",
    introduction:
      "We advise issuers, investors and financial institutions on equity and debt offerings and securities regulation.",
    overview:
      "Our capital-markets work connects transaction execution, fundraising objectives, investment structures and the regulatory requirements governing Nigerian securities.",
    featureImage: expertiseCapitalMarketsImage,
    featureImageAlt: "Civic Towers and the Lagos skyline under a blue sky",
    featureImageLocation: "Lekki · Lagos",
    featureImageCreator: "Nupo Deyon Daniel",
    featureImageSourceUrl:
      "https://unsplash.com/photos/city-skyline-under-blue-sky-during-daytime-9ySEZ-ugtJA",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Initial Public Offerings",
      "Bonds",
      "Private Equity",
      "Funds",
      "Securities Compliance",
    ],
    industries: [
      [
        "Financial Institutions & Funds",
        "Issuers, investors, banks and investment managers",
      ],
      [
        "Energy & Natural Resources",
        "Fundraising, acquisitions and project investment",
      ],
      [
        "Infrastructure & Real Assets",
        "Development, ownership and long-term investment structures",
      ],
      [
        "Technology & High-Growth Businesses",
        "Growth capital, strategic investment and securities compliance",
      ],
    ],
  },
  {
    number: "07",
    slug: "disputes",
    title: "Disputes",
    description:
      "Strategic representation before courts and arbitral tribunals in high-value disputes.",
    introduction:
      "We represent clients before Nigerian courts and arbitral tribunals in high-value, complex and commercially consequential disputes.",
    overview:
      "Our lawyers act across every tier of the Nigerian courts and in domestic arbitration, international commercial arbitration and investor-state treaty arbitration, both as counsel and as members of arbitral tribunals.",
    featureImage: expertiseDisputesImage,
    featureImageAlt: "Federal High Court headquarters in Abuja",
    featureImageLocation: "Abuja · Nigeria",
    featureImageCreator: "Jummy001",
    featureImageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Federal_high_court_headquarters_Abuja.jpg",
    featureImageLicense: "CC BY-SA 4.0",
    featureImageLicenseUrl:
      "https://creativecommons.org/licenses/by-sa/4.0/",
    capabilities: [
      "Commercial Litigation",
      "All Tiers of Nigerian Courts",
      "Domestic Arbitration",
      "International Commercial Arbitration",
      "Investor-State Treaty Arbitration",
      "Arbitral Tribunal Appointments",
    ],
    industries: [
      [
        "Energy & Natural Resources",
        "Commercial, regulatory, project and investment disputes",
      ],
      [
        "Financial Services",
        "Banking, financing, investment and governance disputes",
      ],
      [
        "Technology & Digital Businesses",
        "Contracts, data, intellectual property and platform disputes",
      ],
      [
        "Infrastructure & Real Estate",
        "Projects, development, construction and asset disputes",
      ],
      [
        "Regulated and Public-Sector Markets",
        "Public law, procurement and stakeholder disputes",
      ],
    ],
  },
  {
    number: "08",
    slug: "telecommunications-technology-digital-law",
    title: "Telecommunications, Technology & Digital Law",
    description:
      "Legal and regulatory guidance for telecommunications operators, technology-driven businesses and digital platforms operating in Nigeria’s digital economy.",
    introduction:
      "We advise telecommunications operators, ISPs, fintechs, digital platforms and other technology-driven businesses on the legal issues shaping Nigeria’s connected economy.",
    overview:
      "Our work covers NCC licensing and spectrum matters, data protection, cybersecurity, technology transactions, SaaS agreements, telecom interconnection, platform liability, digital-economy regulation, blockchain and intellectual property.",
    featureImage: expertiseTechnologyImage,
    featureImageAlt: "Telecommunications tower against the sky in Ibadan",
    featureImageLocation: "Ibadan · Nigeria",
    featureImageCreator: "Rémy Ajenifuja",
    featureImageSourceUrl:
      "https://unsplash.com/photos/black-and-white-tower-under-white-sky-FM5KPa1FUaA",
    featureImageLicense: "Unsplash",
    featureImageLicenseUrl: "https://unsplash.com/license",
    capabilities: [
      "Telecommunications",
      "Technology",
      "Fintech",
      "E-commerce",
      "Data Protection and Privacy",
      "Betting & Gaming",
      "Cybersecurity",
      "Blockchain",
      "Intellectual Property",
      "Technology Transactions and SaaS Agreements",
      "Platform Liability and Interconnection Disputes",
    ],
    industries: [
      [
        "Technology & Platforms",
        "Digital products, software, data and innovation",
      ],
      [
        "Telecommunications",
        "Networks, infrastructure, licensing and regulation",
      ],
      [
        "Fintech & Digital Finance",
        "Payments, financial products and technology-enabled services",
      ],
      [
        "E-commerce & Consumer Businesses",
        "Platforms, marketplaces, advertising and commercial operations",
      ],
      [
        "Sports, Media & Entertainment",
        "Rights, content, sponsorships and digital distribution",
      ],
    ],
  },
] as const;

export type ExpertiseName = (typeof practiceAreas)[number]["title"];

export const expertise = practiceAreas.map(
  ({ number, title, description }) => [number, title, description] as const,
);

export const expertiseSlugs = Object.fromEntries(
  practiceAreas.map(({ title, slug }) => [title, slug]),
) as Record<ExpertiseName, string>;

const canonicalExpertiseDetails = Object.fromEntries(
  practiceAreas.map((practice) => [practice.slug, practice]),
) as Record<string, (typeof practiceAreas)[number]>;

export const expertiseDetails = {
  ...canonicalExpertiseDetails,
  "energy-extractives-foreign-investment": canonicalExpertiseDetails.energy,
  "dispute-resolution": canonicalExpertiseDetails.disputes,
  "financial-services-capital-markets":
    canonicalExpertiseDetails["financial-services"],
} as Record<string, (typeof practiceAreas)[number]>;

export const insightGroups = [
  {
    category: "Update",
    title: "Updates",
    description:
      "Firm news, appointments, events and other recent developments.",
  },
  {
    category: "Alert",
    title: "Alerts",
    description:
      "Timely intelligence on legal, regulatory and policy changes affecting business.",
  },
  {
    category: "Article",
    title: "Articles",
    description:
      "Perspectives and analysis from our lawyers on legal and commercial issues.",
  },
] as const;

export const insightItems = [
  {
    slug: "jamb-registrar-visit-digital-reform-priorities",
    category: "Update",
    date: "14 August 2026",
    dateTime: "2026-08-14",
    title: "JAMB Registrar outlines reform priorities during Ninewells visit",
    summary:
      "Professor Segun Aina discussed technology-led admissions, examination integrity and candidate support during a courtesy visit to Ninewells.",
    author: "Ninewells Law Practice",
    readTime: "2 min read",
    image: insightJambVisit,
    imageAlt:
      "The Ninewells team with JAMB Registrar Professor Segun Aina during his Lagos office visit",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-jamb-education-activity-7494053517540773888-aJWg",
    lede: "The newly appointed Registrar of the Joint Admissions and Matriculation Board, Professor Segun Aina, visited Ninewells’ Lagos office to share his priorities for the institution’s next chapter.",
    sections: [
      {
        id: "reform-agenda",
        heading: "A reform agenda built around trust and technology",
        paragraphs: [
          "Professor Aina described an agenda focused on institutional integrity, digital transformation and a more effective experience for candidates. The discussion considered how technology and operational discipline can support confidence in Nigeria’s admissions system.",
        ],
        points: [
          "A zero-tolerance approach to examination malpractice and certificate forgery.",
          "Greater use of advanced technology and digital systems in admissions.",
          "More streamlined candidate support and complaint resolution.",
        ],
      },
      {
        id: "institutional-progress",
        heading: "A shared interest in institutional progress",
        paragraphs: [
          "The visit created an opportunity for Ninewells and JAMB’s leadership to exchange views on private-sector engagement, innovation and the practical work required to sustain public-institution reform.",
          "Ninewells congratulated Professor Aina on his appointment and expressed its support for a successful tenure defined by innovation and measurable impact.",
        ],
      },
    ],
  },
  {
    slug: "professor-bayo-adaralegbe-lead-partner",
    category: "Update",
    date: "12 August 2026",
    dateTime: "2026-08-12",
    title: "Professor Bayo Adaralegbe announced as Lead Partner",
    summary:
      "Ninewells welcomes an energy, investment and disputes practitioner with almost four decades of private-practice and governance experience.",
    author: "Ninewells Law Practice",
    readTime: "3 min read",
    image: insightBayoLeadPartner,
    imageAlt:
      "Ninewells Lead Partner announcement featuring Professor Bayo Adaralegbe",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-is-very-excited-to-announce-professor-activity-7493277804881608704-Dp1d",
    lede: "Ninewells has announced Professor Bayo Adaralegbe as Lead Partner, bringing almost forty years of experience across energy, extractives, foreign investment, disputes and corporate governance.",
    sections: [
      {
        id: "sector-experience",
        heading: "Deep sector and disputes experience",
        paragraphs: [
          "Professor Adaralegbe’s career combines long-standing private practice with six years as company secretary and legal adviser in a bank. His work spans regulatory advice, asset transactions, contract negotiation, litigation and domestic and international arbitration.",
          "His public-sector experience includes work for the National Assembly, the Nigerian Content Monitoring and Development Board and the Nigerian Midstream and Downstream Petroleum Regulatory Authority.",
        ],
        points: [
          "Energy, extractives and foreign-investment advice.",
          "Complex litigation and commercial arbitration.",
          "Upstream asset acquisitions and divestments.",
          "Corporate governance and company-secretarial work.",
        ],
      },
      {
        id: "practice-and-scholarship",
        heading: "Practice informed by scholarship",
        paragraphs: [
          "Alongside practice, Professor Adaralegbe has published extensively in peer-reviewed international journals and serves as Adjunct Professor of Energy and International Investment Law at the University of Ibadan.",
          "His work has also included expert evidence on Nigerian law before courts in the United States and England and before an ICSID tribunal in France.",
        ],
      },
      {
        id: "next-phase",
        heading: "Leadership for the firm’s next phase",
        paragraphs: [
          "The appointment strengthens Ninewells’ senior leadership as the firm develops its integrated offering for clients operating in complex Nigerian and cross-border markets.",
        ],
      },
    ],
  },
  {
    slug: "taxing-virtual-assets-nigeria-nrs-guidelines-2026",
    category: "Alert",
    date: "10 August 2026",
    dateTime: "2026-08-10",
    title:
      "Taxing virtual assets in Nigeria: reviewing the NRS 2026 guidelines",
    summary:
      "Esther Gbenro and Babatunde Badejo consider how Nigeria’s latest guidance approaches the taxation of a rapidly evolving asset class.",
    author: "Esther Gbenro and Babatunde Badejo",
    readTime: "3 min read",
    image: insightVirtualAssets,
    imageAlt:
      "Ninewells illustration for Taxing Virtual Assets in Nigeria and the NRS Guidelines of 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-taxlaw-virtualassets-activity-7492571478081748993-L_I4",
    lede: "As Nigeria’s digital-asset ecosystem develops, the tax treatment of virtual assets is becoming increasingly important for investors, businesses and the wider market.",
    sections: [
      {
        id: "why-it-matters",
        heading: "Why the tax question matters",
        paragraphs: [
          "Virtual assets sit at the intersection of technology, finance and regulation. Changes in their tax treatment can affect investment decisions, operating models, transaction structures and compliance planning.",
          "For market participants, the practical question is not only whether a transaction is taxable, but how new guidance interacts with an asset class that continues to change quickly.",
        ],
      },
      {
        id: "guidelines-review",
        heading: "A review of the 2026 guidelines",
        paragraphs: [
          "In their contribution, Senior Associate Esther Gbenro and Associate Babatunde Badejo examine the Nigeria Revenue Service’s 2026 guidelines and the framework they introduce for virtual assets.",
          "Their analysis is directed at the legal and commercial significance of the guidance for investors, businesses and participants in Nigeria’s digital-asset market.",
        ],
      },
      {
        id: "read-the-analysis",
        heading: "Continue with the original analysis",
        paragraphs: [
          "Ninewells published the contribution through its LinkedIn page. Use the source link below to view the original post and accompanying materials.",
        ],
      },
    ],
  },
  {
    slug: "ninewells-leica-2026-appreciation-award",
    category: "Update",
    date: "05 August 2026",
    dateTime: "2026-08-05",
    title: "Ninewells recognised for its support of LEICA 2026",
    summary:
      "The firm received an Appreciation Award for supporting a platform focused on knowledge, innovation and the energy profession.",
    author: "Ninewells Law Practice",
    readTime: "2 min read",
    image: insightLeica2026,
    imageAlt:
      "Ninewells appreciation award announcement for the Lawyers in Energy International Conference 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-leica2026-lawyersinenergy-activity-7490736160282066945-s_ef",
    lede: "Ninewells received an Appreciation Award from the Lawyers in Energy International Conference 2026 in recognition of the firm’s support for the conference.",
    sections: [
      {
        id: "recognition",
        heading: "Recognition for sustained support",
        paragraphs: [
          "The award reflects Ninewells’ commitment to initiatives that strengthen professional knowledge, encourage collaboration and support innovation across the energy sector.",
        ],
      },
      {
        id: "shared-platforms",
        heading: "Why shared platforms matter",
        paragraphs: [
          "Ninewells views conferences and professional communities as important places for practitioners and industry participants to exchange knowledge and develop practical responses to evolving market needs.",
          "The firm thanked LEICA for the recognition and reaffirmed its commitment to the development of the legal profession and the broader business community.",
        ],
      },
    ],
  },
  {
    slug: "nigeria-energy-recovery-reform-outlook",
    category: "Article",
    date: "31 July 2026",
    dateTime: "2026-07-31",
    title: "Nigeria’s production recovery and the next phase of energy reform",
    summary:
      "Abdulmajeed Abolaji discusses investor interest, upstream divestments and host-community participation.",
    author: "Abdulmajeed Abolaji",
    readTime: "3 min read",
    image: insightEnergyOutlook,
    imageAlt:
      "Energy Outlook feature announcing Abdulmajeed Abolaji’s discussion of Nigeria’s oil and gas business",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-energyoutlook-oilandgas-activity-7488917817275154432-E-_h",
    lede: "Nigeria’s recent oil-production recovery is prompting renewed attention from investors while reforms, upstream divestments and host-community participation reshape the sector.",
    sections: [
      {
        id: "production-and-investment",
        heading: "Production recovery and renewed investor interest",
        paragraphs: [
          "In an Energy Outlook conversation with UpgradeTV, Ninewells Managing Associate Abdulmajeed Abolaji considered the factors behind Nigeria’s recent production recovery and the return of investor attention to the sector.",
        ],
      },
      {
        id: "reform-and-divestment",
        heading: "Reform, divestment and economic impact",
        paragraphs: [
          "The discussion addressed recent government reforms, the continuing divestment of upstream assets by international oil companies and the implications of those transactions for Nigeria’s economy.",
        ],
        points: [
          "The relationship between regulatory reform and investment confidence.",
          "What upstream divestments may mean for indigenous participation.",
          "How host communities could participate in upstream-asset ownership.",
        ],
      },
      {
        id: "full-conversation",
        heading: "Watch the full conversation",
        paragraphs: [
          "Ninewells shared the key themes and a link to the complete UpgradeTV conversation through its LinkedIn post.",
        ],
      },
    ],
  },
] as const;

export const featuredInsight = insightItems[2];

export const megaMenuContent = {
  expertise: {
    eyebrow: "Our expertise",
    heading: "Nigerian insight.\nIntegrated thinking.",
    action: "Explore our practices",
    columns: [
      {
        links: practiceAreas.slice(0, 4).map(({ title }) => title),
      },
      {
        links: practiceAreas.slice(4).map(({ title }) => title),
      },
    ],
  },
} as const;
