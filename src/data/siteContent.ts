import insightBayoLeadPartner from "../assets/insight-bayo-lead-partner.jpg";
import insightEnergyOutlook from "../assets/insight-energy-outlook.jpg";
import insightJambVisit from "../assets/insight-jamb-visit.jpg";
import insightLeica2026 from "../assets/insight-leica-2026.jpg";
import insightVirtualAssets from "../assets/insight-virtual-assets.jpg";

export const LINKEDIN_URL = "https://www.linkedin.com/company/ninewells/";

export const navItems = [
  "About",
  "Expertise",
  "People",
  "Insights",
  "Contact",
] as const;

export const practiceAreas = [
  {
    number: "01",
    slug: "energy",
    title: "Energy",
    description:
      "Advice across the energy value chain, from operations and regulation to projects, finance and disputes.",
    introduction:
      "The energy sector is undergoing significant transformation. We advise clients across the energy value chain through the different stages of their operations.",
    overview:
      "Our work covers regulatory compliance, project development, financing, commercial transactions, dispute resolution and the acquisition or divestment of interests.",
    capabilities: [
      "Upstream, midstream and downstream oil & gas",
      "Renewable energy and power projects",
      "Project finance",
      "Licensing and regulatory compliance",
      "ESG and carbon initiatives",
      "Energy disputes",
    ],
    industries: [
      [
        "Oil & gas",
        "Upstream, midstream and downstream operators, projects and transactions",
      ],
      [
        "Power & utilities",
        "Generation, transmission, distribution and energy services",
      ],
      [
        "Renewable energy",
        "Solar, wind and other energy-transition projects",
      ],
      [
        "Energy infrastructure",
        "Pipelines, facilities and supporting assets",
      ],
    ],
  },
  {
    number: "02",
    slug: "extractives",
    title: "Extractives",
    description:
      "Legal and commercial guidance for mining and natural-resources projects throughout their lifecycle.",
    introduction:
      "We advise mining and natural-resources companies throughout the project lifecycle, from licensing to exploration, production and closure.",
    overview:
      "Our multidisciplinary approach connects project development, environmental obligations, commercial structures and fiscal considerations.",
    capabilities: [
      "Mining licences",
      "Project development",
      "Environmental compliance",
      "Joint ventures",
      "Royalties and taxation",
    ],
    industries: [
      [
        "Mining & minerals",
        "Licensing, exploration, production and closure",
      ],
      [
        "Natural resources",
        "Resource development and commercial arrangements",
      ],
      [
        "Energy & utilities",
        "Projects connected to power, fuels and infrastructure",
      ],
      [
        "Regulated businesses",
        "Public-sector engagement and compliance",
      ],
    ],
  },
  {
    number: "03",
    slug: "foreign-investments",
    title: "Foreign Investments",
    description:
      "Market-entry, investment-protection and regulatory advice for international businesses investing in Nigeria.",
    introduction:
      "We help multinational companies and foreign investors establish and operate businesses in Nigeria, repatriate profits and protect their investments.",
    overview:
      "Our advice helps clients manage expropriation risk and structure dispute resolution through arbitration while addressing regulatory compliance, immigration, technology transfer and taxation.",
    capabilities: [
      "Business establishment and market entry",
      "Investment protection",
      "Profit repatriation",
      "Arbitration strategy",
      "Regulatory compliance",
      "Immigration",
      "Technology transfer",
      "Taxation",
    ],
    industries: [
      [
        "Energy & natural resources",
        "Cross-border investments, acquisitions and project development",
      ],
      [
        "Financial services & fintech",
        "Market entry, investment structures and regulatory permissions",
      ],
      [
        "Technology & digital economy",
        "International growth, technology transfer and operating models",
      ],
      [
        "Infrastructure & real estate",
        "Development, investment and strategic partnerships",
      ],
      [
        "Regulated and public-sector markets",
        "Government engagement, approvals and investment protection",
      ],
    ],
  },
  {
    number: "04",
    slug: "financial-services",
    title: "Financial Services",
    description:
      "Regulatory and transactional advice for banks, fintechs and other financial institutions.",
    introduction:
      "We advise banks, fintechs and other financial institutions on the regulatory and transactional matters that shape their businesses.",
    overview:
      "We combine financial-sector knowledge with practical structuring advice for institutions, products, transactions and private clients.",
    capabilities: [
      "Banking & finance",
      "Loan structuring",
      "Insurance",
      "Private wealth",
    ],
    industries: [
      [
        "Banks & financial institutions",
        "Regulatory, transactional and financing matters",
      ],
      [
        "Fintech & digital finance",
        "Products, platforms, payments and innovation",
      ],
      [
        "Insurance & pensions",
        "Regulatory compliance, transactions and governance",
      ],
      [
        "Capital markets & investment funds",
        "Fundraising, securities and investment structures",
      ],
      [
        "Private wealth",
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
      "Our team provides practical, business-oriented counsel tailored to each client’s industry, operating realities and commercial objectives.",
    capabilities: [
      "Mergers & acquisitions",
      "Regulatory compliance",
      "Consumer protection & competition",
      "Governance & company secretarial services",
      "Real estate & infrastructure",
      "Employment & immigration",
    ],
    industries: [
      [
        "Infrastructure & real estate",
        "Development, investment, construction and commercial assets",
      ],
      [
        "Financial services",
        "Institutions, investors, products and strategic transactions",
      ],
      [
        "Technology & digital economy",
        "Platforms, innovation, data and commercial agreements",
      ],
      [
        "Consumer & commercial businesses",
        "Growth, operations, governance and risk management",
      ],
      [
        "Regulated businesses",
        "Compliance, licensing and public-sector engagement",
      ],
    ],
  },
  {
    number: "06",
    slug: "capital-markets",
    title: "Capital Markets",
    description:
      "Advice on equity and debt offerings, investment structures and securities regulation.",
    introduction:
      "We advise issuers, investors and financial institutions on equity and debt offerings and securities regulation.",
    overview:
      "Our capital-markets work connects transaction execution, fundraising objectives and the regulatory requirements governing Nigerian securities.",
    capabilities: [
      "Initial public offerings",
      "Bonds",
      "Private equity",
      "Funds",
      "Securities compliance",
    ],
    industries: [
      [
        "Financial institutions & funds",
        "Issuers, investors, banks and investment managers",
      ],
      [
        "Energy & natural resources",
        "Fundraising, acquisitions and project investment",
      ],
      [
        "Infrastructure & real assets",
        "Development, ownership and long-term investment structures",
      ],
      [
        "Technology & high-growth businesses",
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
      "Our lawyers act across every tier of the Nigerian courts and in domestic, international commercial and investor-state treaty arbitration, both as counsel and as members of arbitral tribunals.",
    capabilities: [
      "Commercial litigation",
      "All tiers of Nigerian courts",
      "Domestic arbitration",
      "International commercial arbitration",
      "Investor-state treaty arbitration",
      "Arbitral tribunal appointments",
    ],
    industries: [
      [
        "Energy & natural resources",
        "Commercial, regulatory, project and investment disputes",
      ],
      [
        "Financial services",
        "Banking, financing, investment and governance disputes",
      ],
      [
        "Technology & digital businesses",
        "Contracts, data, intellectual property and platform disputes",
      ],
      [
        "Infrastructure & real estate",
        "Projects, development, construction and asset disputes",
      ],
      [
        "Regulated and public-sector markets",
        "Public law, procurement and stakeholder disputes",
      ],
    ],
  },
  {
    number: "08",
    slug: "telecommunications-technology-digital-law",
    title: "Telecommunications, Technology & Digital Law",
    description:
      "Legal and regulatory guidance for technology-driven businesses operating in the digital economy.",
    introduction:
      "We advise technology-driven businesses on innovation, transactions, intellectual property and regulatory compliance.",
    overview:
      "Our practice supports established companies, financial institutions and emerging businesses as technology reshapes products, markets, risk and regulation.",
    capabilities: [
      "Telecommunications",
      "Technology",
      "Fintech",
      "Artificial intelligence",
      "E-commerce",
      "Data protection and privacy",
      "Betting & gaming",
      "Cybersecurity",
      "Blockchain",
      "Intellectual property",
    ],
    industries: [
      [
        "Technology & platforms",
        "Digital products, software, data and innovation",
      ],
      [
        "Telecommunications",
        "Networks, infrastructure, licensing and regulation",
      ],
      [
        "Fintech & digital finance",
        "Payments, financial products and technology-enabled services",
      ],
      [
        "E-commerce & consumer businesses",
        "Platforms, marketplaces, advertising and commercial operations",
      ],
      [
        "Sports, media & entertainment",
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

export const insightItems = [
  {
    slug: "jamb-registrar-visit-digital-reform-priorities",
    category: "Firm update",
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
    lede:
      "The newly appointed Registrar of the Joint Admissions and Matriculation Board, Professor Segun Aina, visited Ninewells’ Lagos office to share his priorities for the institution’s next chapter.",
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
    category: "Leadership",
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
    lede:
      "Ninewells has announced Professor Bayo Adaralegbe as Lead Partner, bringing almost forty years of experience across energy, extractives, foreign investment, disputes and corporate governance.",
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
    category: "Tax & technology",
    date: "10 August 2026",
    dateTime: "2026-08-10",
    title: "Taxing virtual assets in Nigeria: reviewing the NRS 2026 guidelines",
    summary:
      "Esther Gbenro and Babatunde Badejo consider how Nigeria’s latest guidance approaches the taxation of a rapidly evolving asset class.",
    author: "Esther Gbenro and Babatunde Badejo",
    readTime: "3 min read",
    image: insightVirtualAssets,
    imageAlt:
      "Ninewells illustration for Taxing Virtual Assets in Nigeria and the NRS Guidelines of 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/ninewells_ninewells-taxlaw-virtualassets-activity-7492571478081748993-L_I4",
    lede:
      "As Nigeria’s digital-asset ecosystem develops, the tax treatment of virtual assets is becoming increasingly important for investors, businesses and the wider market.",
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
    category: "Firm update",
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
    lede:
      "Ninewells received an Appreciation Award from the Lawyers in Energy International Conference 2026 in recognition of the firm’s support for the conference.",
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
    category: "Energy outlook",
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
    lede:
      "Nigeria’s recent oil-production recovery is prompting renewed attention from investors while reforms, upstream divestments and host-community participation reshape the sector.",
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
