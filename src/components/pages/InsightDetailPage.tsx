import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Clock,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { insightItems } from "../../data/siteContent";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

type Insight = (typeof insightItems)[number];

export function InsightDetailPage({ insight }: { insight: Insight }) {
  const relatedInsights = insightItems
    .filter((item) => item.slug !== insight.slug)
    .slice(0, 2);

  return (
    <>
      <section
        className="grid min-h-[720px] border-b border-navy/15 bg-ivory dark:border-white/15 dark:bg-[#08172a] lg:grid-cols-[1.08fr_.92fr]"
        aria-labelledby="insight-heading"
      >
        <div className="flex flex-col px-[clamp(22px,7vw,118px)] pt-[clamp(42px,6vw,72px)] pb-[clamp(58px,8vw,92px)]">
          <Link
            className="inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[.12em] text-slate no-underline dark:text-paper/80"
            to="/#insights"
          >
            <ArrowLeft size={16} /> All insights
          </Link>
          <div className="mt-[clamp(74px,9vw,124px)]" data-reveal="up">
            <Eyebrow>
              {insight.category} / <time dateTime={insight.dateTime}>{insight.date}</time>
            </Eyebrow>
            <h1
              className="mt-7 mb-0 max-w-[900px] font-serif text-[clamp(52px,6.5vw,92px)] leading-[.9] font-normal tracking-[-.05em] text-navy dark:text-paper"
              id="insight-heading"
            >
              {insight.title}
            </h1>
            <p className="mt-8 max-w-[680px] text-[15px] leading-7 text-slate dark:text-paper/82">
              {insight.summary}
            </p>
          </div>
          <div className="mt-auto flex flex-wrap gap-x-8 gap-y-3 border-t border-navy/20 pt-6 text-[10px] font-semibold uppercase tracking-[.08em] text-slate dark:border-white/20 dark:text-paper/75 lg:mt-16">
            <span>By {insight.author}</span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} aria-hidden="true" /> {insight.readTime}
            </span>
          </div>
        </div>
        <figure className="relative m-0 min-h-[420px] overflow-hidden bg-[#dfe3ec]" data-reveal="fade">
          <img
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
            src={insight.image}
            alt=""
            aria-hidden="true"
          />
          <img
            className="relative h-full w-full object-contain p-[clamp(14px,2.5vw,34px)]"
            src={insight.image}
            alt={insight.imageAlt}
          />
          <figcaption className="absolute right-0 bottom-0 bg-navy-deep px-6 py-4 text-[9px] uppercase tracking-[.13em] text-ivory">
            Image: Ninewells / LinkedIn
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-14 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#071224] lg:grid-cols-[.38fr_1.12fr] lg:gap-[clamp(76px,10vw,164px)]">
        <aside className="self-start lg:sticky lg:top-10">
          <Eyebrow>In this insight</Eyebrow>
          <nav
            className="mt-7 flex flex-col border-t border-navy/20 text-[11px] font-semibold text-navy dark:border-white/20 dark:text-paper"
            aria-label="Insight sections"
          >
            {insight.sections.map((section, index) => (
              <a
                className="grid min-h-12 grid-cols-[32px_1fr] items-center border-b border-navy/15 no-underline dark:border-white/15"
                href={`#${section.id}`}
                key={section.id}
              >
                <span className="text-[9px] text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </a>
            ))}
          </nav>
          <a
            className="mt-7 inline-flex items-center gap-3 border-b border-teal pb-1.5 text-[11px] font-semibold text-navy no-underline dark:text-paper"
            href={insight.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Original LinkedIn post <ArrowSquareOut size={16} />
          </a>
        </aside>

        <article className="max-w-[820px]" data-reveal="up">
          <p className="m-0 font-serif text-[clamp(31px,3.8vw,49px)] leading-[1.08] tracking-[-.025em] text-navy dark:text-paper">
            {insight.lede}
          </p>
          {insight.sections.map((section) => (
            <section
              className="mt-16 scroll-mt-24 border-t border-navy pt-7 lg:scroll-mt-8 dark:border-paper"
              id={section.id}
              key={section.id}
            >
              <h2 className="mt-0 mb-7 font-serif text-[clamp(32px,4vw,50px)] leading-none font-normal text-navy dark:text-paper">
                {section.heading}
              </h2>
              <div className="grid gap-5 text-[15px] leading-7 text-slate dark:text-paper/82">
                {section.paragraphs.map((paragraph) => (
                  <p className="m-0" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {"points" in section ? (
                <ul className="mt-8 grid list-none gap-0 border-t border-navy/15 p-0 dark:border-white/15">
                  {section.points.map((point, index) => (
                    <li
                      className="grid grid-cols-[40px_1fr] border-b border-navy/15 py-4 text-[13px] leading-6 text-slate dark:border-white/15 dark:text-paper/82"
                      key={point}
                    >
                      <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

        </article>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:bg-[#0a192c]"
        aria-labelledby="related-insights-heading"
      >
        <div className="border-b border-navy pb-7 dark:border-paper">
          <Eyebrow>Continue reading</Eyebrow>
          <h2
            className="mt-5 mb-0 font-serif text-[clamp(39px,5vw,64px)] leading-none font-normal text-navy dark:text-paper"
            id="related-insights-heading"
          >
            More from Ninewells.
          </h2>
        </div>
        <div className="grid md:grid-cols-2">
          {relatedInsights.map((item, index) => (
            <Link
              className="group grid min-h-[170px] grid-cols-[42px_1fr_28px] items-center gap-4 border-b border-navy/15 py-7 text-navy no-underline md:first:border-r md:first:pr-8 md:last:pl-8 dark:border-white/15 dark:text-paper"
              to={`/insights/${item.slug}`}
              key={item.slug}
            >
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <small className="mb-3 block text-[9px] font-semibold uppercase tracking-[.1em] text-slate dark:text-paper/70">
                  {item.category} · {item.date}
                </small>
                <strong className="block font-serif text-[24px] leading-tight font-normal">
                  {item.title}
                </strong>
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
