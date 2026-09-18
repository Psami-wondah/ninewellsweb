import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { practiceAreas } from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

export function ExpertiseDirectoryPage() {
  return (
    <>
      <section
        className="border-b border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] pt-[clamp(58px,8vw,108px)] pb-[clamp(64px,8vw,98px)] dark:border-white/15 dark:bg-[#08172a]"
        aria-labelledby="expertise-directory-heading"
      >
        <div
          className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"
          data-reveal="up"
        >
          <div>
            <Eyebrow>Expertise / Directory</Eyebrow>
            <h1
              className="mt-6 mb-0 max-w-[900px] font-serif text-[clamp(58px,7.5vw,108px)] leading-[.86] font-normal tracking-[-.055em] text-navy dark:text-paper"
              id="expertise-directory-heading"
            >
              Legal Expertise Across Nigeria&apos;s Key Industries
            </h1>
          </div>
          <p className="m-0 max-w-[500px] text-[15px] leading-7 text-slate dark:text-paper/80">
            As a fully integrated, multidisciplinary law firm, Ninewells
            advises multinational companies, financial institutions and
            indigenous businesses across Nigeria’s key industries.
          </p>
        </div>
      </section>

      <section
        className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(58px,8vw,102px)] dark:bg-[#071224]"
        aria-label="Ninewells practice areas"
      >
        <div className="border-t border-navy dark:border-paper">
          {practiceAreas.map((practice, index) => (
            <article
              className="grid gap-7 border-b border-navy/15 py-9 dark:border-white/15 lg:grid-cols-[72px_1.05fr_1fr_auto] lg:items-start lg:gap-10"
              key={practice.slug}
              data-reveal="up"
              data-reveal-delay={String((index % 3) + 1)}
            >
              <span className="font-serif text-[30px] text-teal-dark dark:text-teal">
                {practice.number}
              </span>
              <div>
                <h2 className="m-0 font-serif text-[clamp(30px,3vw,44px)] font-normal leading-none text-navy dark:text-paper">
                  {practice.title}
                </h2>
                <p className="mt-5 mb-0 max-w-[520px] text-[14px] leading-6 text-slate dark:text-paper/80">
                  {practice.description}
                </p>
              </div>
              <div>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal">
                  Key capabilities
                </p>
                <p className="mt-4 mb-0 max-w-[440px] text-[13px] leading-6 text-slate dark:text-paper/75">
                  {practice.capabilities.join(" · ")}
                </p>
              </div>
              <Link
                className="group inline-flex w-fit items-center gap-3 border-b border-teal pb-1.5 text-[12px] font-semibold text-navy no-underline dark:text-paper"
                to={`/expertise/${practice.slug}`}
              >
                Explore practice
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-end">
          <Link
            className="group inline-flex items-center gap-4 border-b border-teal pb-1.5 text-[13px] font-semibold text-navy no-underline dark:text-paper"
            to="/people"
          >
            Meet the Lawyers Behind Our Expertise
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
