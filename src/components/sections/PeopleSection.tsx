import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { people } from "../../data/people";
import { Eyebrow } from "../ui/Eyebrow";
import { InlineLink } from "../ui/InlineLink";

export function PeopleSection() {
  return (
    <section
      className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,120px)] dark:bg-[#071224]"
      id="people"
      aria-labelledby="people-heading"
    >
      <div
        className="grid items-end gap-6 lg:grid-cols-[1.2fr_.65fr_auto] lg:gap-12"
        data-reveal="up"
      >
        <div>
          <Eyebrow>Our people</Eyebrow>
          <h2
            className="mt-6 mb-0 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper"
            id="people-heading"
          >
            Experienced people.
            <br />
            One integrated firm.
          </h2>
        </div>
        <p className="m-0 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/80">
          Our lawyers and business professionals bring experience from leading
          Nigerian firms, financial institutions and multinational businesses.
        </p>
        <InlineLink href="/people">Meet the team</InlineLink>
      </div>

      <div
        className="mt-16 grid border-t border-l border-navy/20 bg-ivory dark:border-white/20 dark:bg-[#0a192c] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
        data-reveal="up"
        data-reveal-delay="1"
      >
        {people.map((person, index) => (
          <Link
            className="group relative grid min-h-[470px] grid-rows-[310px_1fr] overflow-hidden border-r border-b border-navy/20 text-navy no-underline dark:border-white/20 dark:text-paper xl:min-h-[510px] xl:grid-rows-[340px_1fr]"
            to={`/people/${person.slug}`}
            key={person.name}
          >
            <span className="relative block overflow-hidden bg-stone">
              <img
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                src={person.image}
                style={{ objectPosition: person.imagePosition }}
                alt={`${person.name}, ${person.position}`}
              />
              <small className="absolute top-0 left-0 bg-navy-deep px-3 py-2 text-[9px] font-semibold tracking-[.12em] text-white">
                {String(index + 1).padStart(2, "0")}
              </small>
            </span>
            <span className="flex min-h-0 flex-col justify-between gap-5 p-5">
              <span>
                <strong className="block font-serif text-[clamp(23px,2vw,30px)] font-normal leading-[1.02]">
                  {person.name}
                </strong>
                <small className="mt-3 block text-[9px] font-semibold uppercase tracking-[.08em] text-slate dark:text-paper/75">
                  {person.position}
                  <br />
                  {person.role}
                </small>
              </span>
              <span className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.1em] text-teal-dark dark:text-teal">
                View profile{" "}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
