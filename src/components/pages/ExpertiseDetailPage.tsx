import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { people } from "../../data/people";
import {
  insightItems,
  insightPracticeSlugs,
  type PracticeArea,
} from "../../data/siteContent";
import { CentralCalloutSection } from "../sections/CentralCalloutSection";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

export function ExpertiseDetailPage({ detail }: { detail: PracticeArea }) {
  const relevantPeople = people.filter(
    (person) =>
      person.teamType === "Lawyer" && person.expertise.includes(detail.title),
  );
  const relatedInsights = insightItems.filter((item) =>
    insightPracticeSlugs[item.slug]?.includes(detail.slug),
  );

  return (
    <>
      <section
        className="relative overflow-hidden bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(46px,6vw,72px)] pb-[clamp(72px,9vw,118px)] text-ivory dark:bg-[#030d1d]"
        aria-labelledby="expertise-detail-heading"
      >
        <Link
          className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.12em] text-white/80 no-underline"
          to="/expertise"
        >
          <ArrowLeft size={16} /> All expertise
        </Link>
        <div
          className="mt-[clamp(72px,10vw,138px)] grid gap-10 lg:grid-cols-[.2fr_1fr] lg:items-end min-[1920px]:grid-cols-[.25fr_1.15fr_.6fr] min-[1920px]:gap-12"
          data-reveal="up"
        >
          <span className="font-serif text-[clamp(52px,6cqw,92px)] leading-none text-teal">
            {detail.number}
          </span>
          <h1
            className="m-0 max-w-[820px] hyphens-auto font-serif text-[clamp(48px,5.5cqw,84px)] leading-[.9] font-normal tracking-[-.055em] text-ivory [overflow-wrap:anywhere]"
            id="expertise-detail-heading"
          >
            {detail.title}
          </h1>
          <p className="m-0 max-w-[560px] border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82 lg:col-start-2 min-[1920px]:col-start-auto">
            {detail.introduction}
          </p>
        </div>
        <div
          className="absolute right-[8%] bottom-0 h-16 w-px bg-teal"
          aria-hidden="true"
        />
      </section>

      <section
        className="grid gap-14 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#08172a] lg:grid-cols-[.55fr_1.15fr] lg:gap-[clamp(80px,10vw,165px)]"
        id="overview"
      >
        <div data-reveal="left">
          <Eyebrow>Overview</Eyebrow>
          <p className="mt-6 max-w-[410px] text-[13px] leading-6 text-slate dark:text-paper/78">
            {detail.description}
          </p>
        </div>
        <div data-reveal="right" data-reveal-delay="1">
          <p className="m-0 max-w-[850px] font-serif text-[clamp(18px,1.45cqw,24px)] leading-[1.45] font-normal tracking-[-.01em] text-navy dark:text-paper">
            {detail.overview}
          </p>
          {detail.bodyHeading ? (
            <h2 className="mt-12 mb-0 max-w-[820px] font-serif text-[clamp(26px,2.5cqw,38px)] leading-[1.08] font-normal tracking-[-.03em] text-navy dark:text-paper">
              {detail.bodyHeading}
            </h2>
          ) : null}
          {detail.body?.length ? (
            <div
              className={`${detail.bodyHeading ? "mt-6" : "mt-9"} grid max-w-[840px] gap-6 text-[15px] leading-7 text-slate dark:text-paper/78`}
            >
              {detail.body.map((paragraph) => (
                <p className="m-0" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="grid bg-paper dark:bg-[#071224] lg:grid-cols-[.82fr_1.18fr]"
        id="capabilities"
      >
        <div className="bg-navy-deep px-[clamp(22px,7vw,92px)] py-[clamp(76px,9vw,108px)] text-ivory dark:bg-[#020914]">
          <Eyebrow className="text-teal">How we help</Eyebrow>
          <h2 className="mt-6 mb-0 font-serif text-[clamp(44px,5vw,68px)] leading-[.98] font-normal tracking-[-.04em]">
            Key capabilities.
          </h2>
        </div>
        <div className="px-[clamp(22px,7vw,92px)] py-[clamp(58px,8vw,98px)]">
          <div className="border-t border-navy dark:border-paper">
            {detail.capabilities.map((capability, index) => (
              <div
                className="grid min-h-[78px] grid-cols-[42px_1fr_24px] items-center border-b border-navy/15 text-navy dark:border-white/15 dark:text-paper"
                key={capability}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-serif text-[21px] font-normal">
                  {capability}
                </strong>
                <Check className="text-teal-dark dark:text-teal" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {detail.callout ? (
        <CentralCalloutSection callout={detail.callout} />
      ) : null}

      {detail.considerations?.length ? (
        <section
          className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:bg-[#071224]"
          aria-labelledby="client-considerations-heading"
        >
          <div className="grid gap-12 lg:grid-cols-[.45fr_1.15fr] lg:gap-20">
            <div>
              <Eyebrow>Client considerations</Eyebrow>
              <h2
                className="mt-5 mb-0 font-serif text-[clamp(38px,4.5vw,58px)] leading-none font-normal text-navy dark:text-paper"
                id="client-considerations-heading"
              >
                Why it matters.
              </h2>
            </div>
            <div className="border-t border-navy dark:border-paper">
              {detail.considerations.map(([title, description], index) => (
                <div
                  className="grid gap-3 border-b border-navy/15 py-6 dark:border-white/15 md:grid-cols-[42px_.45fr_1fr] md:gap-5"
                  key={title}
                >
                  <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="font-serif text-[21px] font-normal text-navy dark:text-paper">
                    {title}
                  </strong>
                  <p className="m-0 text-[13px] leading-6 text-slate dark:text-paper/78">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relevantPeople.length ? (
        <section
          className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,104px)] dark:bg-[#0a192c]"
          aria-labelledby="expertise-people-heading"
        >
          <div className="flex items-end justify-between gap-8 border-b border-navy pb-7 dark:border-paper">
            <div>
              <Eyebrow>Relevant lawyers</Eyebrow>
              <h2
                className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
                id="expertise-people-heading"
              >
                People who know the terrain.
              </h2>
            </div>
            <Link
              className="hidden border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline sm:inline-flex dark:text-paper"
              to="/people"
            >
              Meet the team
            </Link>
          </div>
          <div className="grid md:grid-cols-2">
            {relevantPeople.map((person, index) => (
              <Link
                className="group grid min-h-[118px] grid-cols-[48px_1fr_28px] items-center gap-5 border-b border-navy/15 py-6 text-navy no-underline md:odd:border-r md:odd:pr-7 md:even:pl-7 dark:border-white/15 dark:text-paper"
                to={`/people/${person.slug}`}
                key={person.slug}
              >
                <span className="font-serif text-[30px] text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block font-serif text-[25px] font-normal">
                    {person.name}
                  </strong>
                  <small className="mt-2 block text-[9px] font-semibold uppercase tracking-[.1em] text-slate dark:text-paper/75">
                    {person.position} · {person.role}
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
      ) : null}

      {relatedInsights.length ? (
        <section
          className="grid gap-12 border-t border-navy/15 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:border-white/15 dark:bg-[#071224] lg:grid-cols-[.55fr_1.15fr]"
          aria-labelledby="expertise-insights-heading"
        >
          <div>
            <Eyebrow>Related intelligence</Eyebrow>
            <h2
              className="mt-5 mb-0 font-serif text-[clamp(38px,4.5vw,58px)] leading-none font-normal text-navy dark:text-paper"
              id="expertise-insights-heading"
            >
              Thinking in context.
            </h2>
          </div>
          <div className="border-t border-navy dark:border-paper">
            {relatedInsights.slice(0, 2).map((item, index) => (
              <Link
                className="group grid min-h-[92px] grid-cols-[42px_1fr_24px] items-center border-b border-navy/15 text-navy no-underline dark:border-white/15 dark:text-paper"
                to={`/intelligence/${item.slug}`}
                key={item.title}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <small className="mb-2 block text-[9px] font-semibold uppercase tracking-[.1em] text-slate dark:text-paper/75">
                    {item.category} · {item.date}
                  </small>
                  <strong className="font-serif text-[20px] font-normal">
                    {item.title}
                  </strong>
                </span>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section
        className="grid gap-12 border-t border-navy/15 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:border-white/15 dark:bg-[#071224] lg:grid-cols-[.9fr_1.1fr]"
        aria-labelledby="relevant-industries-heading"
      >
        <figure className="relative m-0 min-h-[360px] overflow-hidden bg-[#eef0f5] lg:min-h-[510px]">
          <img
            className="h-full w-full object-cover object-center"
            src={detail.featureImage}
            alt={detail.featureImageAlt}
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 bg-navy-deep/95 px-5 py-3 text-[9px] uppercase tracking-[.13em] text-ivory">
            <span>{detail.featureImageLocation}</span>
            <span className="flex flex-wrap items-center gap-1 text-white/85">
              Photo:
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href={detail.featureImageSourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {detail.featureImageCreator}
              </a>
              /
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href={detail.featureImageLicenseUrl}
                target="_blank"
                rel="noreferrer"
              >
                {detail.featureImageLicense}
              </a>
            </span>
          </figcaption>
        </figure>
        <div>
          <Eyebrow>Relevant industries</Eyebrow>
          <h2
            className="mt-5 mb-0 font-serif text-[clamp(38px,4.5vw,58px)] leading-none font-normal text-navy dark:text-paper"
            id="relevant-industries-heading"
          >
            Context changes everything.
          </h2>
          <p className="mt-6 max-w-[520px] text-[14px] leading-6 text-slate dark:text-paper/80">
            Our advice is shaped by the commercial and regulatory realities of
            the industries this practice serves.
          </p>
          <div className="mt-10 border-t border-navy dark:border-paper">
            {detail.industries.map(([industry, description], index) => (
              <div
                className="grid min-h-[84px] grid-cols-[42px_1fr] items-center gap-4 border-b border-navy/15 py-4 text-navy dark:border-white/15 dark:text-paper"
                key={industry}
              >
                <span className="self-start pt-1 text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block font-serif text-[20px] font-normal">
                    {industry}
                  </strong>
                  <small className="mt-1 block text-[11px] leading-5 text-slate dark:text-paper/75">
                    {description}
                  </small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
