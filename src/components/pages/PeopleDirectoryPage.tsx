import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { people } from "../../data/people";
import { Eyebrow } from "../ui/Eyebrow";

export function PeopleDirectoryPage() {
  return (
    <>
      <section
        className="border-b border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] pt-[clamp(58px,8vw,108px)] pb-[clamp(64px,8vw,98px)] dark:border-white/15 dark:bg-[#08172a]"
        aria-labelledby="people-directory-heading"
      >
        <div
          className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"
          data-reveal="up"
        >
          <div>
            <Eyebrow>People / Directory</Eyebrow>
            <h1
              className="mt-6 mb-0 max-w-[760px] font-serif text-[clamp(60px,8vw,112px)] leading-[.86] font-normal tracking-[-.055em] text-navy dark:text-paper"
              id="people-directory-heading"
            >
              Find the right adviser.
            </h1>
          </div>
          <p className="m-0 max-w-[490px] text-[15px] leading-7 text-slate dark:text-paper/80">
            Meet the lawyers and business professionals behind Ninewells. Search
            the team by expertise, sector, location or position.
          </p>
        </div>
      </section>

      <section
        className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(54px,7vw,86px)] dark:bg-[#071224]"
        aria-label="People search and results"
      >
        <div
          className="flex min-h-[92px] items-center justify-between border-b border-navy px-1 dark:border-paper"
          aria-live="polite"
        >
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.14em] text-navy dark:text-paper">
            {people.length}{" "}
            {people.length === 1 ? "team member" : "team members"}
          </p>
        </div>

        {people.length > 0 ? (
          <div>
            {people.map((person, index) => (
              <Link
                className="group grid gap-5 border-b border-navy/15 py-8 text-navy no-underline dark:border-white/15 dark:text-paper md:grid-cols-[92px_1.1fr_.8fr_52px] md:items-center lg:py-9"
                to={`/people/${person.slug}`}
                key={person.slug}
                data-reveal="up"
                data-reveal-delay={String((index % 3) + 1)}
              >
                <span className="relative block h-24 w-20 overflow-hidden bg-stone">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    src={person.image}
                    style={{ objectPosition: person.imagePosition }}
                    alt=""
                  />
                  <small className="absolute bottom-0 left-0 bg-navy-deep px-2 py-1 text-[8px] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </small>
                </span>
                <span>
                  <small className="text-[9px] font-semibold uppercase tracking-[.13em] text-teal-dark dark:text-teal">
                    {person.location} · {person.position}
                  </small>
                  <strong className="mt-3 block font-serif text-[clamp(31px,3vw,45px)] leading-none font-normal">
                    {person.name}
                  </strong>
                  <span className="mt-3 block text-[13px] font-medium text-slate dark:text-paper/80">
                    {person.role}
                  </span>
                </span>
                <span className="text-[12px] leading-5 text-slate dark:text-paper/80">
                  {person.expertise.join(" · ")}
                </span>
                <span
                  className="flex size-12 items-center justify-center border border-navy/30 text-navy transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-navy-deep dark:border-white/35 dark:text-paper"
                  aria-hidden="true"
                >
                  <ArrowRight size={20} />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-b border-navy/15 py-24 text-center dark:border-white/15">
            <p className="font-serif text-[34px] text-navy dark:text-paper">
              No team members match those filters.
            </p>
            <button
              className="mt-2 border-0 border-b border-teal bg-transparent pb-1 text-[13px] font-semibold text-navy dark:text-paper"
              type="button"
            >
              Reset the directory
            </button>
          </div>
        )}
      </section>
    </>
  );
}
