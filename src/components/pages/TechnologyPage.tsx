import { ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { expertiseDetails } from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

const technologyPractice = expertiseDetails["telecommunications-technology-digital-law"];

export function TechnologyPage() {
  return (
    <>
      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white dark:bg-[#030d1d]"
        aria-labelledby="technology-page-heading"
      >
        <Eyebrow className="text-teal">Technology at Ninewells</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.2fr_.6fr] lg:items-end">
          <h1
            className="m-0 max-w-[970px] font-serif text-[clamp(62px,8.5vw,120px)] leading-[.86] font-normal tracking-[-.055em]"
            id="technology-page-heading"
          >
            Ninewells — A Modern Law Firm Built for the Technology Era
          </h1>
          <p className="m-0 max-w-[480px] border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82">
            Ninewells is a technology-assisted Nigerian law firm. Our lawyers
            remain responsible for judgement, advice and client outcomes;
            modern technology helps us work with greater speed, quality and
            consistency.
          </p>
        </div>
      </section>

      <section
        className="grid gap-14 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#08172a] lg:grid-cols-[.55fr_1.15fr] lg:gap-[clamp(80px,10vw,165px)]"
        aria-labelledby="technology-advice-heading"
      >
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>Advising clients</Eyebrow>
          <h2
            className="mt-6 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
            id="technology-advice-heading"
          >
            Legal advice for a connected economy.
          </h2>
        </div>
        <div className="grid gap-8 text-[15px] leading-7 text-slate dark:text-paper/82">
          <p className="m-0">
            We advise telecommunications operators, ISPs, fintechs and digital
            platforms on the legal issues shaping Nigeria’s connected economy.
            Our lawyers handle NCC licensing and spectrum matters, data
            protection compliance under the NDPA, cybersecurity and incident
            response obligations, technology transactions and SaaS agreements.
          </p>
          <p className="m-0">
            We also advise on telecom interconnection disputes, platform
            liability and digital-economy regulatory matters. As Nigeria’s
            digital economy scales, our clients need counsel who understand
            both the regulatory terrain and the commercial pressure to move
            quickly.
          </p>
        </div>
      </section>

      <section
        className="grid bg-paper dark:bg-[#071224] lg:grid-cols-[.82fr_1.18fr]"
        aria-labelledby="technology-delivery-heading"
      >
        <div className="bg-navy-deep px-[clamp(22px,7vw,92px)] py-[clamp(76px,9vw,108px)] text-ivory dark:bg-[#020914]">
          <Eyebrow className="text-teal">How we work</Eyebrow>
          <h2
            className="mt-6 mb-0 font-serif text-[clamp(44px,5vw,68px)] leading-[.98] font-normal tracking-[-.04em]"
            id="technology-delivery-heading"
          >
            Modern tools. Human judgement.
          </h2>
          <p className="mt-8 max-w-[440px] text-[14px] leading-7 text-white/75">
            Technology supports our lawyers’ work; it does not independently
            provide legal advice. Where appropriate, carefully supervised AI
            assistance can support research or document workflows, while human
            oversight remains central to every recommendation and outcome.
          </p>
        </div>
        <div className="px-[clamp(22px,7vw,92px)] py-[clamp(58px,8vw,98px)]">
          <div className="border-t border-navy dark:border-paper">
            {[
              "Speedier research and knowledge access",
              "Consistent, high-quality legal workflows",
              "Efficient document review and production",
              "Closer collaboration across integrated practices",
              "Clear human review and oversight",
            ].map((item, index) => (
              <div
                className="grid min-h-[78px] grid-cols-[42px_1fr_24px] items-center border-b border-navy/15 text-navy dark:border-white/15 dark:text-paper"
                key={item}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-serif text-[21px] font-normal">
                  {item}
                </strong>
                <Check className="text-teal-dark dark:text-teal" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,104px)] dark:bg-[#08172a]"
        aria-labelledby="technology-practice-heading"
      >
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-navy pb-7 dark:border-paper">
          <div>
            <Eyebrow>Our digital law practice</Eyebrow>
            <h2
              className="mt-5 mb-0 max-w-[900px] font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
              id="technology-practice-heading"
            >
              Telecommunications, Technology &amp; Digital Law
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-3 border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline dark:text-paper"
            to={`/expertise/${technologyPractice.slug}`}
          >
            See the full practice <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-8 pt-8 md:grid-cols-2">
          <p className="m-0 max-w-[560px] text-[15px] leading-7 text-slate dark:text-paper/82">
            {technologyPractice.overview}
          </p>
          <div className="border-t border-navy dark:border-paper">
            {technologyPractice.capabilities.slice(0, 8).map((capability, index) => (
              <Link
                className="grid min-h-[58px] grid-cols-[38px_1fr_20px] items-center border-b border-navy/15 text-navy no-underline dark:border-white/15 dark:text-paper"
                to={`/expertise/${technologyPractice.slug}`}
                key={capability}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px]">{capability}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
