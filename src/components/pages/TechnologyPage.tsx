import { ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { technologyPage } from "../../data/siteContent";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

export function TechnologyPage() {
  return (
    <>
      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white"
        aria-labelledby="technology-heading"
      >
        <Eyebrow className="text-teal">Ninewells</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.12fr_.62fr] lg:items-end">
          <h1
            className="m-0 max-w-[900px] font-serif text-[clamp(46px,6vw,84px)] leading-[.92] font-normal tracking-[-.045em]"
            id="technology-heading"
          >
            A Modern Law Firm Built for the Technology Era
          </h1>
          <p className="m-0 border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82">
            {technologyPage.philosophy}
          </p>
        </div>
      </section>

      <section
        className="grid gap-14 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#08172a] lg:grid-cols-[.48fr_1.2fr] lg:gap-[clamp(70px,10vw,170px)]"
        aria-labelledby="technology-practice-heading"
      >
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>Advising clients</Eyebrow>
          <h2
            className="mt-6 mb-0 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
            id="technology-practice-heading"
          >
            Telecommunications, Technology &amp; Digital Law
          </h2>
        </div>
        <div className="text-[16px] leading-8 text-slate dark:text-paper/82">
          <p className="m-0">{technologyPage.practiceIntroduction}</p>
          <p className="mt-7 m-0">{technologyPage.practiceClosing}</p>
          <Link
            className="mt-9 inline-flex items-center gap-3 border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline dark:text-paper"
            to="/expertise/telecommunications-technology-digital-law"
          >
            See Our Technology &amp; Digital Law Expertise <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section
        className="grid bg-paper dark:bg-[#071224] lg:grid-cols-[.82fr_1.18fr]"
        aria-labelledby="technology-matters-heading"
      >
        <div className="bg-navy-deep px-[clamp(22px,7vw,92px)] py-[clamp(76px,9vw,108px)] text-white dark:bg-[#020914]">
          <Eyebrow className="text-teal">Why it matters for our clients</Eyebrow>
          <h2
            className="mt-6 mb-0 max-w-[520px] font-serif text-[clamp(44px,5vw,68px)] leading-[.98] font-normal tracking-[-.04em]"
            id="technology-matters-heading"
          >
            Speed and quality, with judgement kept human-led.
          </h2>
        </div>
        <div className="px-[clamp(22px,7vw,92px)] py-[clamp(58px,8vw,98px)]">
          <div className="border-t border-navy dark:border-paper">
            {technologyPage.whyItMatters.map(([title, description], index) => (
              <div
                className="grid min-h-[98px] grid-cols-[42px_1fr_24px] items-start gap-3 border-b border-navy/15 py-5 text-navy dark:border-white/15 dark:text-paper"
                key={title}
              >
                <span className="pt-1 text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block font-serif text-[22px] font-normal">
                    {title}
                  </strong>
                  <small className="mt-2 block text-[12px] leading-5 text-slate dark:text-paper/75">
                    {description}
                  </small>
                </span>
                <Check className="mt-1 text-teal-dark dark:text-teal" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

