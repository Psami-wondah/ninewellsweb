import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { insightGroups, insightItems } from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

export function InsightsDirectoryPage() {
  return (
    <>
      <section
        className="border-b border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] pt-[clamp(58px,8vw,108px)] pb-[clamp(64px,8vw,98px)] dark:border-white/15 dark:bg-[#08172a]"
        aria-labelledby="insights-directory-heading"
      >
        <div
          className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"
          data-reveal="up"
        >
          <div>
            <Eyebrow>Intelligence</Eyebrow>
            <h1
              className="mt-6 mb-0 max-w-[850px] font-serif text-[clamp(60px,8vw,112px)] leading-[.86] font-normal tracking-[-.055em] text-navy dark:text-paper"
              id="insights-directory-heading"
            >
              Legal Insights from a Modern Nigerian Law Firm
            </h1>
          </div>
          <p className="m-0 max-w-[500px] text-[15px] leading-7 text-slate dark:text-paper/80">
            Ninewells Intelligence is where we share our lawyers’ thinking on
            the issues shaping Nigerian business and regulation — from energy,
            extractives and foreign investment to financial services, corporate
            and commercial, capital markets, disputes and digital law. Written
            by the same team advising clients in Lagos and Abuja, this is
            practical analysis from the ground.
          </p>
          <div className="mt-8 grid gap-4 border-t border-navy/20 pt-5 text-[12px] leading-5 text-slate dark:border-white/20 dark:text-paper/75 sm:grid-cols-2">
            <p className="m-0"><strong>What you’ll find:</strong> regulatory updates and deal insights.</p>
            <p className="m-0"><strong>Also:</strong> sector spotlights and firm news.</p>
          </div>
        </div>
      </section>

      <nav
        className="grid border-b border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] dark:border-white/15 dark:bg-[#08172a] md:grid-cols-3"
        aria-label="Insight categories"
      >
        {insightGroups.map((group, index) => {
          const itemCount = insightItems.filter(
            (item) => item.category === group.category,
          ).length;

          return (
            <a
              className="group grid min-h-[132px] grid-cols-[36px_1fr_24px] items-center border-b border-navy/15 py-6 text-navy no-underline md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15 dark:text-paper"
              href={`#${group.title.toLowerCase()}`}
              key={group.category}
            >
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <strong className="block font-serif text-[28px] font-normal">
                  {group.title}
                </strong>
                <small className="mt-2 block text-[9px] font-semibold uppercase tracking-[.1em] text-slate dark:text-paper/70">
                  {itemCount} {itemCount === 1 ? "insight" : "insights"}
                </small>
              </span>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={18}
              />
            </a>
          );
        })}
      </nav>

      <div className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(58px,8vw,96px)] dark:bg-[#071224]">
        {insightGroups.map((group, groupIndex) => {
          const groupedItems = insightItems.filter(
            (item) => item.category === group.category,
          );

          return (
            <section
              className="grid scroll-mt-20 gap-8 border-t border-navy py-[clamp(48px,6vw,72px)] dark:border-paper lg:grid-cols-[.38fr_1fr] lg:gap-16"
              id={group.title.toLowerCase()}
              aria-labelledby={`${group.title.toLowerCase()}-heading`}
              key={group.category}
              data-reveal="up"
              data-reveal-delay={String((groupIndex % 3) + 1)}
            >
              <div>
                <Eyebrow>
                  {String(groupIndex + 1).padStart(2, "0")} / Category
                </Eyebrow>
                <h2
                  className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal tracking-[-.04em] text-navy dark:text-paper"
                  id={`${group.title.toLowerCase()}-heading`}
                >
                  {group.title}
                </h2>
                <p className="mt-5 mb-0 max-w-[340px] text-[13px] leading-6 text-slate dark:text-paper/75">
                  {group.description}
                </p>
              </div>
              <div className="border-t border-navy/20 dark:border-white/20">
                {groupedItems.map((item, index) => (
                  <Link
                    className="group grid min-h-[150px] grid-cols-[38px_minmax(0,1fr)_28px] items-center gap-3 border-b border-navy/15 py-7 text-navy no-underline transition-colors hover:bg-teal/5 dark:border-white/15 dark:text-paper dark:hover:bg-teal/10 sm:grid-cols-[48px_minmax(0,1fr)_30px]"
                    to={`/intelligence/${item.slug}`}
                    key={item.slug}
                  >
                    <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <small className="mb-3 block text-[9px] font-semibold uppercase tracking-[.1em] text-slate dark:text-paper/70">
                        <time dateTime={item.dateTime}>{item.date}</time> ·{" "}
                        {item.readTime}
                      </small>
                      <strong className="block max-w-[760px] font-serif text-[clamp(23px,2.5vw,32px)] leading-tight font-normal">
                        {item.title}
                      </strong>
                      <span className="mt-3 block max-w-[760px] text-[12px] leading-6 text-slate dark:text-paper/78">
                        {item.summary}
                      </span>
                    </span>
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-1"
                      size={20}
                    />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
        <Link
          className="mt-10 inline-flex items-center gap-3 border-b border-teal pb-2 text-[13px] font-semibold text-navy no-underline dark:text-paper"
          to="/contact"
        >
          Talk to Our Team About These Issues <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
}
