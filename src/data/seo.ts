import { company } from "./company";
import type { Person } from "./people";

export type JsonLd = Record<string, unknown>;

export type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  image?: string;
  structuredData?: JsonLd;
};

const configuredSiteUrl = import.meta.env.VITE_SITE_URL as string | undefined;

export const siteOrigin = (
  configuredSiteUrl ||
  (typeof window !== "undefined" ? window.location.origin : "http://localhost:5173")
).replace(/\/$/, "");

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

const organisationJsonLd: JsonLd = {
  "@type": "LegalService",
  "@id": `${siteOrigin}/#legal-service`,
  name: company.name,
  url: siteOrigin,
  email: company.contact.email,
  telephone: company.contact.phones,
  areaServed: "Nigeria",
  sameAs: [company.social.linkedin, company.social.instagram],
  location: company.offices.map((office) => ({
    "@type": "Place",
    name: `${company.shortName} ${office.city} office`,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.area,
      addressCountry: "NG",
    },
  })),
};

export const seoRoutes = {
  home: {
    title: "Ninewells | Modern Law Firm in Lagos & Abuja, Nigeria",
    description:
      "Ninewells is a fully integrated, multidisciplinary Nigerian law firm with offices in Lagos and Abuja, advising clients across key industries and legal practices.",
    canonicalPath: "/",
  },
  about: {
    title: "About Ninewells | Modern Nigerian Law Firm in Lagos & Abuja",
    description:
      "Learn about Ninewells, a fully integrated, multidisciplinary Nigerian law firm built on experience, innovation and trust, with offices in Lagos and Abuja.",
    canonicalPath: "/about",
  },
  technology: {
    title: "Technology | Modern Nigerian Law Firm | Ninewells",
    description:
      "See how Ninewells combines human legal judgement with modern technology and advises on Telecommunications, Technology & Digital Law in Nigeria.",
    canonicalPath: "/technology",
  },
  expertise: {
    title: "Legal Expertise in Nigeria | Ninewells",
    description:
      "Explore Ninewells’ integrated legal expertise across energy, extractives, foreign investments, financial services, corporate and commercial matters, capital markets, disputes and digital law.",
    canonicalPath: "/expertise",
  },
  people: {
    title: "Our People | Nigerian Lawyers | Ninewells",
    description:
      "Meet the lawyers and business professionals behind Ninewells and their experience across Nigeria’s key legal and commercial sectors.",
    canonicalPath: "/people",
  },
  intelligence: {
    title: "Legal Intelligence & Insights | Ninewells",
    description:
      "Read practical Ninewells legal intelligence on energy, extractives, investment, finance, corporate and commercial matters, capital markets, disputes and digital law.",
    canonicalPath: "/intelligence",
  },
  contact: {
    title: "Contact Ninewells | Law Firm Offices in Lagos & Abuja",
    description:
      "Contact Ninewells at its Victoria Island, Lagos or Maitama, Abuja office for legal counsel across Nigeria’s key industries and practices.",
    canonicalPath: "/contact",
  },
} satisfies Record<string, SeoConfig>;

export function withFirmStructuredData(config: SeoConfig): SeoConfig {
  return { ...config, structuredData: organisationJsonLd };
}

export function getExpertiseSeo(detail: { title: string; slug: string }): SeoConfig {
  return withFirmStructuredData({
    title: `${detail.title} Lawyers in Nigeria | Ninewells`,
    description: `Ninewells advises clients in Nigeria on ${detail.title.toLowerCase()} matters through an integrated, multidisciplinary legal practice.`,
    canonicalPath: `/expertise/${detail.slug}`,
  });
}

export function getPersonSeo(person: Person): SeoConfig {
  const primaryPractice = person.expertise[0] || "Business Operations";
  const roleLabel = person.teamType === "Lawyer" ? "Lawyer" : "Professional";
  return {
    title: `${person.name} | ${primaryPractice} ${roleLabel} | Ninewells`,
    description: `${person.name} is a ${person.position.toLowerCase()} at Ninewells with experience in ${person.role.toLowerCase()}.`,
    canonicalPath: `/people/${person.slug}`,
    structuredData: {
      "@type": "ProfilePage",
      "@id": `${siteOrigin}/people/${person.slug}#profile`,
      url: absoluteUrl(`/people/${person.slug}`),
      mainEntity: {
        "@type": "Person",
        name: person.name,
        jobTitle: person.position,
        worksFor: {
          "@id": `${siteOrigin}/#legal-service`,
          name: company.name,
        },
        email: person.email,
        knowsAbout: person.expertise,
        image: absoluteUrl(person.image),
        url: absoluteUrl(`/people/${person.slug}`),
      },
    },
  };
}

export function getInsightSeo(insight: {
  title: string;
  slug: string;
  summary: string;
  author: string;
  dateTime: string;
  image: string;
}): SeoConfig {
  return {
    title: `${insight.title} | Ninewells Intelligence`,
    description: insight.summary,
    canonicalPath: `/intelligence/${insight.slug}`,
    ogType: "article",
    image: insight.image,
    structuredData: {
      "@type": "BlogPosting",
      headline: insight.title,
      description: insight.summary,
      datePublished: insight.dateTime,
      author: { "@type": "Person", name: insight.author },
      publisher: { "@id": `${siteOrigin}/#legal-service`, name: company.name },
      image: absoluteUrl(insight.image),
      mainEntityOfPage: absoluteUrl(`/intelligence/${insight.slug}`),
    },
  };
}
