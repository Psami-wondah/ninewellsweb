import homeImage from "../assets/lagos-lekki-ikoyi.webp";
import { company } from "./company";
import { people, type Person } from "./people";
import { insightItems, practiceAreas, type PracticeArea } from "./siteContent";

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: unknown;
};

export function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim();
  if (configuredOrigin) return configuredOrigin.replace(/\/$/, "");
  return typeof window !== "undefined" ? window.location.origin : "";
}

export function absoluteUrl(path: string) {
  const origin = getSiteOrigin();
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export const seoPages = {
  home: {
    title: "Ninewells | Modern Law Firm in Lagos & Abuja, Nigeria",
    description:
      "Ninewells is a fully integrated, modern Nigerian law firm with offices in Lagos and Abuja, advising across its approved practices.",
    path: "/",
    image: homeImage,
  },
  about: {
    title: "About Ninewells | Modern Nigerian Law Firm in Lagos & Abuja",
    description:
      "Discover Ninewells, a fully integrated, multidisciplinary Nigerian law firm based in Victoria Island, Lagos, with a strategic office in Abuja.",
    path: "/about",
    image: homeImage,
  },
  expertise: {
    title: "Legal Expertise in Nigeria | Ninewells",
    description:
      "Explore Ninewells’ integrated legal expertise across energy, extractives, foreign investments, financial services, corporate and commercial, capital markets, disputes and digital law.",
    path: "/expertise",
    image: homeImage,
  },
  people: {
    title: "Our People | Nigerian Lawyers | Ninewells",
    description:
      "Meet the lawyers and business professionals behind Ninewells and their experience across the firm’s integrated Nigerian practices.",
    path: "/people",
    image: homeImage,
  },
  intelligence: {
    title: "Legal Intelligence & Insights | Ninewells",
    description:
      "Read practical legal intelligence from Ninewells on the issues shaping Nigerian business and regulation across energy, finance, disputes and digital law.",
    path: "/intelligence",
    image: homeImage,
  },
  contact: {
    title: "Contact Ninewells | Law Firm Offices in Lagos & Abuja",
    description:
      "Reach Ninewells Law Practice at our Lagos office in Victoria Island or our Abuja office in Maitama.",
    path: "/contact",
    image: homeImage,
  },
  careers: {
    title: "Careers | Ninewells",
    description:
      "Explore careers at Ninewells Law Practice.",
    path: "/careers",
  },
} as const satisfies Record<string, SeoConfig>;

export function getPracticeSeo(detail: PracticeArea): SeoConfig {
  const keyword =
    detail.slug === "telecommunications-technology-digital-law"
      ? "Telecommunications, Technology & Digital Law"
      : detail.title === "Disputes"
        ? "Dispute Resolution"
        : detail.title;
  return {
    title: `${keyword} Lawyers in Nigeria | Ninewells`,
    description: detail.description,
    path: `/expertise/${detail.slug}`,
    image: detail.featureImage,
  };
}

export function getPersonSeo(person: Person): SeoConfig {
  const image = person.image;
  return {
    title: `${person.name} | ${person.role} | Ninewells`,
    description: person.bio,
    path: `/people/${person.slug}`,
    image,
    type: "profile",
  };
}

type Insight = (typeof insightItems)[number];

export function getInsightSeo(insight: Insight): SeoConfig {
  return {
    title: `${insight.title} | Ninewells Intelligence`,
    description: insight.summary,
    path: `/intelligence/${insight.slug}`,
    image: insight.image,
    type: "article",
  };
}

function addressSchema(city: string, address: string) {
  return {
    "@type": "Place",
    name: `${company.shortName} ${city} office`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressCountry: "NG",
    },
  };
}

export function buildFirmJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${origin}/#legal-service`,
        name: company.name,
        url: `${origin}/`,
        email: company.contact.email,
        telephone: company.contact.phones,
        areaServed: "Nigeria",
        sameAs: [company.social.linkedin, company.social.instagram],
        location: company.offices.map((office) =>
          addressSchema(office.city, office.address),
        ),
      },
    ],
  };
}

export function buildPersonJsonLd(person: Person) {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildFirmJsonLd()["@graph"][0],
      {
        "@type": "Person",
        "@id": `${origin}/people/${person.slug}#person`,
        name: person.name,
        jobTitle: person.position,
        worksFor: { "@id": `${origin}/#legal-service` },
        email: person.email,
        telephone: person.mobile,
        knowsAbout: person.expertise,
        url: `${origin}/people/${person.slug}`,
        ...(person.image ? { image: absoluteUrl(person.image) } : {}),
      },
      {
        "@type": "ProfilePage",
        "@id": `${origin}/people/${person.slug}#profile`,
        url: `${origin}/people/${person.slug}`,
        mainEntity: { "@id": `${origin}/people/${person.slug}#person` },
      },
    ],
  };
}

export function buildInsightJsonLd(insight: Insight) {
  const origin = getSiteOrigin();
  const authors = insight.author
    .split(" and ")
    .map((author) =>
      author === "Ninewells Law Practice"
        ? { "@type": "Organization", name: author }
        : { "@type": "Person", name: author },
    );
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildFirmJsonLd()["@graph"][0],
      {
        "@type": "Article",
        headline: insight.title,
        description: insight.summary,
        datePublished: insight.dateTime,
        author: authors,
        publisher: { "@id": `${origin}/#legal-service` },
        mainEntityOfPage: `${origin}/intelligence/${insight.slug}`,
        ...(insight.image ? { image: [absoluteUrl(insight.image)] } : {}),
      },
    ],
  };
}

export function findPracticeBySlug(slug: string) {
  return practiceAreas.find((practice) => practice.slug === slug);
}

export function findPersonBySlug(slug: string) {
  return people.find((person) => person.slug === slug);
}
