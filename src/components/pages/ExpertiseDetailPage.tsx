import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import lagosIllustration from "../../assets/lagos-bridge-pen-illustration.webp";
import { people } from "../../data/people";
import { expertiseDetails, insightItems } from "../../data/siteContent";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

type ExpertiseDetail = (typeof expertiseDetails)[string];

export function ExpertiseDetailPage({ detail }: { detail: ExpertiseDetail }) {
  const lawyers = people.filter((person) => person.teamType === "Lawyer");
  const relevantPeople = lawyers
    .filter((person) => person.expertise.includes(detail.title))
    .slice(0, 2);
  const displayedPeople =
    relevantPeople.length > 0 ? relevantPeople : lawyers.slice(0, 2);
  const representativeWork = relevantPeople
    .flatMap((person) => person.representativeWorks)
    .slice(0, 6);

  return (
    <>
      <section
        className="relative overflow-hidden bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(46px,6vw,72px)] pb-[clamp(72px,9vw,118px)] text-ivory dark:bg-[#030d1d]"
        aria-labelledby="expertise-detail-heading"
      >
        <Link
          className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.12em] text-white/80 no-underline"
          to="/#expertise"
        >
          <ArrowLeft size={16} /> All expertise
        </Link>
        <div
          className="mt-[clamp(72px,10vw,138px)] grid gap-12 lg:grid-cols-[.25fr_1.15fr_.6fr] lg:items-end"
          data-reveal="up"
        >
          <span className="font-serif text-[clamp(62px,7vw,92px)] leading-none text-teal">
            {detail.number}
          </span>
          <h1
            className="m-0 max-w-[820px] font-serif text-[clamp(58px,7.5vw,108px)] leading-[.86] font-normal tracking-[-.055em] text-ivory"
            id="expertise-detail-heading"
          >
            {detail.title}
          </h1>
          <p className="m-0 max-w-[430px] border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82">
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
          <Eyebrow>Overview / Client needs</Eyebrow>
          <p className="mt-6 max-w-[410px] text-[13px] leading-6 text-slate dark:text-paper/78">
            {detail.overview}
          </p>
        </div>
        <div data-reveal="right" data-reveal-delay="1">
          <h2 className="m-0 max-w-[850px] font-serif text-[clamp(38px,4.5vw,62px)] leading-[1.04] font-normal tracking-[-.04em] text-navy dark:text-paper">
            The legal answer is only useful when it works in the real world.
          </h2>
          <div className="mt-10 grid gap-8 text-[15px] leading-7 text-slate dark:text-paper/78 md:grid-cols-2">
            <p className="m-0">
              Clients need to see the whole decision: legal position, commercial
              leverage, stakeholder expectations and the practical path to
              delivery.
            </p>
            <p className="m-0">
              Ninewells works across its Nigerian practices from the outset,
              giving decision-makers a coherent view without unnecessary layers
              or delay.
            </p>
          </div>
        </div>
      </section>

      <section
        className="grid bg-paper dark:bg-[#071224] lg:grid-cols-[.82fr_1.18fr]"
        id="capabilities"
      >
        <div className="bg-navy-deep px-[clamp(22px,7vw,92px)] py-[clamp(76px,9vw,108px)] text-ivory dark:bg-[#020914]">
          <Eyebrow className="text-teal">How we help</Eyebrow>
          <h2 className="mt-6 mb-0 font-serif text-[clamp(44px,5vw,68px)] leading-[.98] font-normal tracking-[-.04em]">
            Capability built around the decision.
          </h2>
          <p className="mt-8 max-w-[420px] text-[14px] leading-7 text-white/75">
            We assemble the expertise a matter needs, with a senior team that
            remains accountable for the whole picture.
          </p>
        </div>
        <div className="px-[clamp(22px,7vw,92px)] py-[clamp(58px,8vw,98px)]">
          <div className="border-t border-navy dark:border-paper">
            {detail.capabilities.map((capability, index) => (
              <div
                className="grid min-h-[78px] grid-cols-[42px_1fr_24px] items-center border-b border-navy/15 text-navy dark:border-white/15 dark:text-paper"
                key={capability}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  0{index + 1}
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

      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,110px)] text-ivory dark:bg-[#030d1d]"
        aria-labelledby="experience-heading"
      >
        <div className="grid gap-12 lg:grid-cols-[.4fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="text-teal">Experience / Approach</Eyebrow>
            <p className="mt-5 text-[11px] leading-5 text-white/80">
              Selected experience from the lawyers associated with this
              practice.
            </p>
          </div>
          <div id="experience-heading">
            <p className="m-0 font-serif text-[clamp(31px,4vw,52px)] leading-[1.08]">
              Senior judgement, regulatory awareness and commercially astute
              advice for complex Nigerian and cross-border mandates.
            </p>
            {representativeWork.length ? (
              <ol className="mt-10 grid list-none gap-x-10 border-t border-white/25 p-0 md:grid-cols-2">
                {representativeWork.map((item, index) => (
                  <li
                    className="grid grid-cols-[38px_1fr] border-b border-white/20 py-5 text-[12px] leading-5 text-white/85"
                    key={item}
                  >
                    <span className="font-semibold text-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-8 max-w-[720px] text-[13px] leading-6 text-white/75">
                Representative matters for this practice are available on
                request. Contact the team for relevant experience.
              </p>
            )}
          </div>
        </div>
        <div className="mt-16 grid border-t border-white/25 sm:grid-cols-3">
          {[
            ["NG", "Nigerian market insight"],
            ["SR", "senior-led judgement"],
            ["01", "integrated point of view"],
          ].map(([value, label]) => (
            <div
              className="border-b border-white/20 py-7 sm:border-r sm:border-b-0 sm:pl-7 sm:first:pl-0 sm:last:border-r-0"
              key={label}
            >
              <strong className="block font-serif text-[50px] font-normal text-teal">
                {value}
              </strong>
              <span className="text-[11px] text-white/85">{label}</span>
            </div>
          ))}
        </div>
      </section>

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
          {displayedPeople.map((person, index) => (
            <Link
              className="group grid min-h-[118px] grid-cols-[48px_1fr_28px] items-center gap-5 border-b border-navy/15 py-6 text-navy no-underline md:first:border-r md:first:pr-7 md:last:pl-7 dark:border-white/15 dark:text-paper"
              to={`/people/${person.slug}`}
              key={person.slug}
            >
              <span className="font-serif text-[30px] text-teal-dark dark:text-teal">
                0{index + 1}
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

      <section
        className="grid gap-12 border-t border-navy/15 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:border-white/15 dark:bg-[#071224] lg:grid-cols-[.55fr_1.15fr]"
        aria-labelledby="expertise-insights-heading"
      >
        <div>
          <Eyebrow>Related insights</Eyebrow>
          <h2
            className="mt-5 mb-0 font-serif text-[clamp(38px,4.5vw,58px)] leading-none font-normal text-navy dark:text-paper"
            id="expertise-insights-heading"
          >
            Thinking in context.
          </h2>
        </div>
        <div className="border-t border-navy dark:border-paper">
          {insightItems.slice(0, 2).map((item, index) => (
            <a
              className="group grid min-h-[92px] grid-cols-[42px_1fr_24px] items-center border-b border-navy/15 text-navy no-underline dark:border-white/15 dark:text-paper"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                0{index + 1}
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
            </a>
          ))}
        </div>
      </section>

      <section
        className="grid gap-12 border-t border-navy/15 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:border-white/15 dark:bg-[#071224] lg:grid-cols-[.9fr_1.1fr]"
        aria-labelledby="relevant-industries-heading"
      >
        <figure className="relative m-0 min-h-[360px] overflow-hidden bg-[#eef0f5] lg:min-h-[510px]">
          <img
            className="h-full w-full object-cover object-center mix-blend-multiply"
            src={lagosIllustration}
            alt="Original blue pen-and-ink illustration of the Lekki–Ikoyi Link Bridge and Lagos skyline"
          />
          <figcaption className="absolute bottom-0 left-0 bg-navy-deep/95 px-5 py-3 text-[9px] uppercase tracking-[.13em] text-ivory">
            Lagos in line / Original Ninewells study
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
