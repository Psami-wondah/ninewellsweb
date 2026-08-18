import { ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import lagosBridge from "../../assets/lagos-lekki-ikoyi.webp";
import { company } from "../../data/company";
import { people } from "../../data/people";
import { practiceAreas } from "../../data/siteContent";
import { ContactSection } from "../sections/ContactSection";
import { Eyebrow } from "../ui/Eyebrow";

export function AboutPage() {
  return (
    <>
      <section
        className="grid min-h-[760px] bg-navy text-white lg:grid-cols-[1.15fr_.85fr]"
        aria-labelledby="about-page-heading"
      >
        <div
          className="flex flex-col justify-between px-[clamp(22px,7vw,118px)] py-[clamp(58px,8vw,104px)]"
          data-reveal="left"
        >
          <Eyebrow className="text-teal">About Ninewells</Eyebrow>
          <div className="my-16">
            <h1 className="m-0 max-w-[850px] font-serif text-[clamp(62px,8.5vw,120px)] leading-[.86] font-normal tracking-[-.055em]">
              One firm.
              <br />
              Connected thinking.
            </h1>
            <p className="mt-9 max-w-[690px] text-[16px] leading-8 text-white/82">
              {company.description}
            </p>
          </div>
          <p className="m-0 border-t border-white/25 pt-6 text-[11px] font-semibold uppercase tracking-[.13em] text-teal">
            Experience · Innovation · Trust
          </p>
        </div>
        <figure
          className="relative m-0 min-h-[460px] overflow-hidden bg-navy-deep"
          data-reveal="fade"
          data-reveal-delay="1"
        >
          <img
            className="h-full w-full object-cover opacity-85 mix-blend-luminosity"
            src={lagosBridge}
            alt="Lekki–Ikoyi Link Bridge in Lagos"
          />
          <figcaption className="absolute right-0 bottom-0 bg-navy-deep/95 px-6 py-4 text-[9px] uppercase tracking-[.13em] text-white">
            Victoria Island · Lagos
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-14 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,120px)] dark:bg-[#08172a] lg:grid-cols-[.52fr_1.18fr] lg:gap-[clamp(70px,10vw,170px)]">
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-6 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper">
            Built around the client’s whole decision.
          </h2>
        </div>
        <div
          className="grid gap-9 text-[16px] leading-8 text-slate dark:text-paper/82 md:grid-cols-2"
          data-reveal="up"
        >
          {company.about.map((paragraph, index) => (
            <p
              className={`m-0 border-t border-navy/15 pt-5 dark:border-white/15 ${index === 0 ? "font-serif text-[clamp(26px,3vw,38px)] leading-tight text-navy md:col-span-2 dark:text-paper" : ""}`}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,104px)] dark:bg-[#071224]"
        aria-labelledby="firm-in-numbers"
      >
        <Eyebrow>At a glance</Eyebrow>
        <h2
          className="mt-6 mb-12 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
          id="firm-in-numbers"
        >
          A multidisciplinary Nigerian practice.
        </h2>
        <div className="grid border-t border-l border-navy/20 bg-ivory dark:border-white/20 dark:bg-[#0a192c] sm:grid-cols-2 xl:grid-cols-4">
          {[
            [
              String(practiceAreas.length).padStart(2, "0"),
              "distinct practice areas",
            ],
            [String(people.length).padStart(2, "0"), "published team profiles"],
            [
              company.professionalBodies,
              "local and international professional bodies",
            ],
            [
              String(company.offices.length).padStart(2, "0"),
              "strategic Nigerian locations",
            ],
          ].map(([value, label]) => (
            <div
              className="min-h-[190px] border-r border-b border-navy/20 p-7 dark:border-white/20"
              key={label}
            >
              <strong className="block font-serif text-[58px] font-normal text-teal-dark dark:text-teal">
                {value}
              </strong>
              <span className="mt-5 block max-w-[210px] text-[12px] leading-5 text-slate dark:text-paper/78">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[820px] text-[14px] leading-7 text-slate dark:text-paper/80">
          {company.professionalBodiesDescription}
        </p>
      </section>

      <section
        className="grid bg-navy-deep text-white lg:grid-cols-[.78fr_1.22fr]"
        aria-labelledby="standards-heading"
      >
        <div className="px-[clamp(22px,7vw,92px)] py-[clamp(76px,9vw,108px)]">
          <Eyebrow className="text-teal">Standards and infrastructure</Eyebrow>
          <h2
            className="mt-6 mb-0 font-serif text-[clamp(44px,5vw,70px)] leading-[.98] font-normal"
            id="standards-heading"
          >
            Rigour behind every mandate.
          </h2>
          <p className="mt-8 max-w-[440px] text-[14px] leading-7 text-white/75">
            An excellent legal library, cutting-edge technology and formal
            compliance systems support the firm’s commitment to professional
            values, regulatory compliance and service excellence.
          </p>
        </div>
        <div className="grid border-t border-white/20 sm:grid-cols-2 lg:border-t-0 lg:border-l">
          {company.certifications.map(([shortName, fullName]) => (
            <div
              className="grid min-h-[150px] grid-cols-[64px_1fr] items-center gap-5 border-r border-b border-white/20 p-6"
              key={shortName}
            >
              <span className="flex size-12 items-center justify-center border border-teal/70 text-[10px] font-bold text-teal">
                <Check size={18} />
              </span>
              <span>
                <strong className="block font-serif text-[25px] font-normal">
                  {shortName}
                </strong>
                <small className="mt-2 block text-[10px] leading-4 text-white/72">
                  {fullName}
                </small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,104px)] dark:bg-[#08172a]"
        aria-labelledby="locations-heading"
      >
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-navy pb-7 dark:border-paper">
          <div>
            <Eyebrow>Our locations</Eyebrow>
            <h2
              className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal text-navy dark:text-paper"
              id="locations-heading"
            >
              Close to commerce and government.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-3 border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline dark:text-paper"
            to="/contact"
          >
            Contact Ninewells <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2">
          {company.offices.map((office, index) => (
            <a
              className="group grid min-h-[240px] grid-cols-[48px_1fr_28px] border-b border-navy/15 py-8 text-navy no-underline md:first:border-r md:first:pr-10 md:last:pl-10 dark:border-white/15 dark:text-paper"
              href={office.mapUrl}
              target="_blank"
              rel="noreferrer"
              key={office.city}
            >
              <span className="font-serif text-[30px] text-teal-dark dark:text-teal">
                0{index + 1}
              </span>
              <span>
                <strong className="block font-serif text-[36px] font-normal">
                  {office.city}
                </strong>
                <small className="mt-2 block text-[10px] font-semibold uppercase tracking-[.1em] text-teal-dark dark:text-teal">
                  {office.area}
                </small>
                <span className="mt-6 block max-w-[430px] text-[13px] leading-6 text-slate dark:text-paper/78">
                  {office.address}
                  <br />
                  {office.description}
                </span>
              </span>
              <ArrowRight
                className="mt-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </a>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
