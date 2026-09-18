import { insightItems, practiceAreas } from "./siteContent";
import { people } from "./people";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  type: "Page" | "Practice" | "Person" | "Intelligence";
};

export const searchEntries: SearchEntry[] = [
  {
    title: "Technology",
    description: "Technology-assisted legal delivery and digital law expertise.",
    href: "/technology",
    type: "Page",
  },
  {
    title: "Expertise",
    description: "Legal expertise across Nigeria’s key industries.",
    href: "/expertise",
    type: "Page",
  },
  {
    title: "Intelligence",
    description: "Practical legal insights from a modern Nigerian law firm.",
    href: "/intelligence",
    type: "Page",
  },
  {
    title: "About Ninewells",
    description: "A fully integrated, multidisciplinary law firm.",
    href: "/about",
    type: "Page",
  },
  {
    title: "Contact Ninewells",
    description: "Law firm offices in Lagos and Abuja.",
    href: "/contact",
    type: "Page",
  },
  ...practiceAreas.map((practice) => ({
    title: practice.title,
    description: practice.description,
    href: `/expertise/${practice.slug}`,
    type: "Practice" as const,
  })),
  ...people.map((person) => ({
    title: person.name,
    description: `${person.position} · ${person.role}`,
    href: `/people/${person.slug}`,
    type: "Person" as const,
  })),
  ...insightItems.map((item) => ({
    title: item.title,
    description: item.summary,
    href: `/intelligence/${item.slug}`,
    type: "Intelligence" as const,
  })),
];
