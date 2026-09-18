import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  featuredInsight,
  insightGroups,
  insightItems,
} from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";
import { InlineLink } from "../ui/InlineLink";

export function InsightsSection() {
  return (
    <section
      className="grid gap-14 border-t border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,112px)] dark:border-white/15 dark:bg-[#0a192c] lg:grid-cols-[.8fr_1.1fr] lg:gap-16"
      id="intelligence"
      aria-labelledby="intelligence-heading"
    >
      <div data-reveal="left">
        <Eyebrow>Intelligence</Eyebrow>
        <h2
          className="my-6 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper"
          id="intelligence-heading"
        >
          Ideas for what comes next.
        </h2>
        <p className="mb-8 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/85">
          Read firm developments, keep pace with legal and regulatory change,
          and follow practical analysis from our lawyers.
        </p>
        <InlineLink href="/intelligence">Explore Legal Intelligence</InlineLink>
      </div>
      <article
        className="relative min-h-[420px] bg-navy p-[clamp(28px,5vw,54px)] text-ivory dark:bg-[#001641]"
        data-reveal="right"
        data-reveal-delay="1"
      >
        <Eyebrow className="text-teal">
          Featured insight · {featuredInsight.category}
        </Eyebrow>
        <h3 className="mt-24 mb-5 max-w-[560px] font-serif text-[clamp(38px,3.5vw,55px)] leading-none font-normal tracking-[-.035em]">
          {featuredInsight.title}
        </h3>
        <p className="max-w-[510px] text-[13px] leading-6 text-white/85">
          {featuredInsight.summary}
        </p>
        <Link
          className="absolute right-7 bottom-7 flex size-[52px] items-center justify-center bg-teal text-navy-deep transition-colors hover:bg-teal"
          to={`/intelligence/${featuredInsight.slug}`}
          aria-label={`Read ${featuredInsight.title}`}
        >
          <ArrowRight size={25} />
        </Link>
      </article>
      <div
        className="grid border-t border-navy dark:border-paper sm:grid-cols-3 lg:col-span-2"
        data-reveal="up"
        data-reveal-delay="2"
      >
        {insightGroups.map((group, index) => {
          const itemCount = insightItems.filter(
            (item) => item.category === group.category,
          ).length;

          return (
            <Link
              className="group flex min-h-[220px] flex-col border-b border-navy/15 px-5 py-7 text-navy no-underline sm:border-r sm:border-b-0 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 dark:border-white/15 dark:text-paper"
              to={`/intelligence#${group.title.toLowerCase()}`}
              key={group.category}
            >
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 mb-0 font-serif text-[clamp(30px,3vw,42px)] leading-none font-normal tracking-[-.03em]">
                {group.title}
              </h3>
              <p className="mt-4 mb-6 max-w-[330px] text-[11px] leading-5 text-slate dark:text-paper/75">
                {group.description}
              </p>
              <span className="mt-auto flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.08em]">
                {itemCount} {itemCount === 1 ? "insight" : "insights"}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
