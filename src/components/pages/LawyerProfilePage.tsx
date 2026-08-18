import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type { Person } from "../../data/people";
import { people } from "../../data/people";
import { expertiseSlugs } from "../../data/siteContent";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

export function LawyerProfilePage({ person }: { person: Person }) {
  const relatedPeople = people
    .filter((entry) => entry.slug !== person.slug)
    .slice(0, 2);
  const navigation = [
    ["Overview", "overview"],
    ...(person.expertise.length
      ? [["Practice areas", "practice-areas"]]
      : []),
    ...(person.representativeWorks.length
      ? [["Representative work", "representative-work"]]
      : []),
    ["Qualifications", "qualifications"],
    ...(person.honours.length ? [["Honours", "honours"]] : []),
    ...(person.careerHighlights.length
      ? [["Career highlights", "career"]]
      : []),
    ["Memberships", "memberships"],
  ];

  return (
    <>
      <section
        className="grid min-h-[760px] border-b border-navy/15 bg-ivory dark:border-white/15 dark:bg-[#08172a] lg:grid-cols-[1.08fr_.92fr]"
        aria-labelledby="profile-heading"
      >
        <div
          className="flex flex-col px-[clamp(22px,7vw,118px)] pt-[clamp(42px,6vw,72px)] pb-[clamp(56px,7vw,84px)]"
          data-reveal="left"
        >
          <Link
            className="mb-16 inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[.1em] text-slate no-underline dark:text-paper/80"
            to="/people"
          >
            <ArrowLeft size={16} /> All people
          </Link>
          <Eyebrow>
            {person.location} / {person.position}
          </Eyebrow>
          <h1
            className="mt-6 mb-5 max-w-[760px] font-serif text-[clamp(55px,7vw,100px)] leading-[.88] font-normal tracking-[-.055em] text-navy dark:text-paper"
            id="profile-heading"
          >
            {person.name}
          </h1>
          <p className="m-0 font-serif text-[clamp(21px,2.2vw,30px)] leading-tight text-slate dark:text-paper/85">
            {person.role}
          </p>
          {person.title ? (
            <p className="mt-5 max-w-[610px] text-[12px] leading-5 font-semibold text-teal-dark dark:text-teal">
              {person.title}
            </p>
          ) : null}
          <div className="mt-auto grid gap-3 border-t border-navy/20 pt-7 dark:border-white/20 sm:grid-cols-2 lg:mt-16">
            <a
              className="inline-flex min-h-11 items-center gap-3 text-[12px] font-semibold text-navy no-underline dark:text-paper"
              href={`mailto:${person.email}`}
            >
              <EnvelopeSimple
                className="text-teal-dark dark:text-teal"
                size={20}
              />{" "}
              {person.email}
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-3 text-[12px] font-semibold text-navy no-underline dark:text-paper"
              href={`tel:${person.mobile.replace(/\s/g, "")}`}
            >
              <Phone className="text-teal-dark dark:text-teal" size={20} />{" "}
              {person.mobile}
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-3 text-[12px] font-semibold text-navy no-underline dark:text-paper"
              href={person.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut
                className="text-teal-dark dark:text-teal"
                size={20}
              />{" "}
              {person.sourceLabel}
            </a>
          </div>
        </div>
        <figure
          className="relative m-0 min-h-[560px] overflow-hidden bg-[#e5e9ec]"
          data-reveal="fade"
          data-reveal-delay="1"
        >
          <img
            className="h-full w-full object-cover"
            src={person.image}
            style={{ objectPosition: person.imagePosition }}
            alt={`${person.name}, ${person.position} at Ninewells`}
          />
          <figcaption className="absolute right-0 bottom-0 bg-navy-deep px-6 py-4 text-[9px] font-semibold uppercase tracking-[.14em] text-ivory">
            {person.teamType} / Ninewells
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-14 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#071224] lg:grid-cols-[.45fr_1.15fr] lg:gap-[clamp(70px,10vw,170px)]">
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>Profile</Eyebrow>
          <nav
            className="mt-8 flex flex-col border-t border-navy/20 text-[12px] font-semibold text-navy dark:border-white/20 dark:text-paper"
            aria-label="On this page"
          >
            {navigation.map(([label, id], index) => (
              <a
                className="grid min-h-12 grid-cols-[32px_1fr] items-center border-b border-navy/15 no-underline dark:border-white/15"
                href={`#${id}`}
                key={id}
              >
                <span className="text-[9px] text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div data-reveal="up">
          <section aria-labelledby="overview">
            <Eyebrow>Biography</Eyebrow>
            <h2
              className="mt-5 mb-0 scroll-mt-24 font-serif text-[clamp(34px,4vw,52px)] leading-none font-normal text-navy lg:scroll-mt-8 dark:text-paper"
              id="overview"
            >
              Overview
            </h2>
            <p className="mt-7 mb-0 max-w-[860px] font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.08] font-normal tracking-[-.03em] text-navy dark:text-paper">
              {person.bio}
            </p>
            <div className="mt-10 grid gap-7 text-[15px] leading-7 text-slate dark:text-paper/85 md:grid-cols-2">
              {person.background.map((paragraph) => (
                <p className="m-0" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {person.expertise.length ? (
            <ProfileList
              title="Practice areas"
              id="practice-areas"
              items={person.expertise}
              linkItems
            />
          ) : null}
          {person.representativeWorks.length ? (
            <ProfileCollection
              eyebrow="Selected experience"
              title="Representative work"
              id="representative-work"
              items={person.representativeWorks}
            />
          ) : null}

          <section
            className="mt-20 border-t border-navy pt-8 dark:border-paper"
            aria-labelledby="qualifications"
          >
            <Eyebrow>Credentials</Eyebrow>
            <h2
              className="mt-5 mb-0 scroll-mt-24 font-serif text-[clamp(34px,4vw,52px)] leading-none font-normal text-navy lg:scroll-mt-8 dark:text-paper"
              id="qualifications"
            >
              Qualifications
            </h2>
            <div
              className={`mt-7 grid gap-10 ${person.professionalQualifications.length ? "lg:grid-cols-2" : "max-w-[720px]"}`}
            >
              <QualificationBlock
                title="Academic"
                items={person.academicQualifications}
              />
              {person.professionalQualifications.length ? (
                <QualificationBlock
                  title="Professional"
                  items={person.professionalQualifications}
                />
              ) : null}
            </div>
          </section>

          {person.honours.length ? (
            <ProfileCollection
              eyebrow="Recognition"
              title="Honours"
              id="honours"
              items={person.honours}
            />
          ) : null}
          {person.careerHighlights.length ? (
            <ProfileCollection
              eyebrow="Career"
              title="Career highlights"
              id="career"
              items={person.careerHighlights}
              compact
            />
          ) : null}
          <ProfileCollection
            eyebrow="Professional community"
            title="Memberships"
            id="memberships"
            items={person.memberships}
            compact
          />

        </div>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:bg-[#0a192c]"
        aria-labelledby="related-people-heading"
      >
        <div className="flex items-end justify-between gap-8 border-b border-navy pb-7 dark:border-paper">
          <div>
            <Eyebrow>Related people</Eyebrow>
            <h2
              className="mt-5 mb-0 font-serif text-[clamp(39px,5vw,64px)] leading-none font-normal text-navy dark:text-paper"
              id="related-people-heading"
            >
              A joined-up team.
            </h2>
          </div>
          <Link
            className="hidden border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline sm:inline-flex dark:text-paper"
            to="/people"
          >
            View all people
          </Link>
        </div>
        <div className="grid md:grid-cols-2">
          {relatedPeople.map((entry) => (
            <Link
              className="group grid min-h-[132px] grid-cols-[76px_1fr_28px] items-center gap-5 border-b border-navy/15 py-5 text-navy no-underline md:first:border-r md:first:pr-8 md:last:pl-8 dark:border-white/15 dark:text-paper"
              to={`/people/${entry.slug}`}
              key={entry.slug}
            >
              <img
                className="h-20 w-[68px] object-cover"
                src={entry.image}
                style={{ objectPosition: entry.imagePosition }}
                alt=""
              />
              <span>
                <strong className="block font-serif text-[25px] font-normal">
                  {entry.name}
                </strong>
                <small className="mt-2 block text-[10px] font-semibold uppercase tracking-[.08em] text-slate dark:text-paper/75">
                  {entry.position} · {entry.role}
                </small>
              </span>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={19}
              />
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function ProfileList({
  title,
  id,
  items,
  linkItems = false,
}: {
  title: string;
  id: string;
  items: string[];
  linkItems?: boolean;
}) {
  return (
    <section
      className="mt-20 border-t border-navy pt-8 dark:border-paper"
      aria-labelledby={id}
    >
      <Eyebrow>Focus</Eyebrow>
      <h2
        className="mt-5 mb-0 scroll-mt-24 font-serif text-[clamp(34px,4vw,52px)] leading-none font-normal text-navy lg:scroll-mt-8 dark:text-paper"
        id={id}
      >
        {title}
      </h2>
      <div className="mt-8 grid sm:grid-cols-2">
        {items.map((item, index) => {
          const slug = expertiseSlugs[item as keyof typeof expertiseSlugs];
          const content = (
            <>
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="font-serif text-[21px] font-normal">
                {item}
              </strong>
              {linkItems && slug ? <ArrowRight size={17} /> : null}
            </>
          );
          const className =
            "grid min-h-[72px] grid-cols-[38px_1fr_24px] items-center border-b border-navy/15 text-navy no-underline sm:odd:pr-6 sm:even:pl-6 dark:border-white/15 dark:text-paper";
          return linkItems && slug ? (
            <Link className={className} to={`/expertise/${slug}`} key={item}>
              {content}
            </Link>
          ) : (
            <div className={className} key={item}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProfileCollection({
  eyebrow,
  title,
  id,
  items,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  id: string;
  items: string[];
  compact?: boolean;
}) {
  return (
    <section
      className="mt-20 border-t border-navy pt-8 dark:border-paper"
      aria-labelledby={id}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="mt-5 mb-0 scroll-mt-24 font-serif text-[clamp(34px,4vw,52px)] leading-none font-normal text-navy lg:scroll-mt-8 dark:text-paper"
        id={id}
      >
        {title}
      </h2>
      <ol
        className={`mt-8 grid list-none p-0 ${compact ? "gap-x-10 md:grid-cols-2" : ""}`}
      >
        {items.map((item, index) => (
          <li
            className="grid grid-cols-[42px_1fr] border-b border-navy/15 py-5 text-[14px] leading-6 text-slate dark:border-white/15 dark:text-paper/82"
            key={item}
          >
            <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function QualificationBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="m-0 font-serif text-[25px] font-normal text-navy dark:text-paper">
        {title}
      </h3>
      <ul className="mt-5 list-none border-t border-navy/15 p-0 dark:border-white/15">
        {items.map((item) => (
          <li
            className="border-b border-navy/15 py-4 text-[13px] leading-6 text-slate dark:border-white/15 dark:text-paper/80"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
