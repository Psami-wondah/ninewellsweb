import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  expertiseLanding,
  pageCallouts,
  practiceAreas,
} from "../../data/siteContent";
import { CentralCalloutSection } from "../sections/CentralCalloutSection";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

export function ExpertisePage() {
  return (
    <>
      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white"
        aria-labelledby="expertise-heading"
      >
        <Eyebrow className="text-teal">Our Expertise</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.1fr_.62fr] lg:items-end">
          <h1
            className="m-0 max-w-[900px] font-serif text-[clamp(46px,6vw,84px)] leading-[.92] font-normal tracking-[-.045em]"
            id="expertise-heading"
          >
            Legal Expertise Across Nigeria&apos;s Key Industries
          </h1>
          <p className="m-0 border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82">
            {expertiseLanding.introduction}
          </p>
        </div>
      </section>

      <section
        className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,110px)] dark:bg-[#071224]"
        aria-label="Ninewells practice areas"
      >
        <div className="border-t border-navy dark:border-paper">
          {practiceAreas.map((practice) => (
            <Link
              className="group grid gap-6 border-b border-navy/15 py-8 text-navy no-underline dark:border-white/15 dark:text-paper md:grid-cols-[72px_1fr_1fr_28px] md:items-center md:gap-8"
              to={`/expertise/${practice.slug}`}
              key={practice.slug}
            >
              <span className="text-[11px] font-semibold text-teal-dark dark:text-teal">
                {practice.number}
              </span>
              <span>
                <h2 className="m-0 font-serif text-[clamp(28px,3vw,42px)] leading-none font-normal">
                  {practice.title}
                </h2>
              </span>
              <span className="text-[13px] leading-6 text-slate dark:text-paper/75">
                {practice.description}
              </span>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Link>
          ))}
        </div>
        <Link
          className="mt-10 inline-flex items-center gap-3 border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline dark:text-paper"
          to="/people"
        >
          Meet the Lawyers Behind Our Expertise <ArrowRight size={17} />
        </Link>
      </section>

      <CentralCalloutSection callout={pageCallouts.expertise} />

      <ContactSection />
    </>
  );
}
