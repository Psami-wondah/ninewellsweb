import { ArrowRight, LinkedinLogo, MapPin } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { LINKEDIN_URL } from "../../data/siteContent";
import { BrandLogo } from "../ui/BrandLogo";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="grid gap-12 bg-ivory px-[clamp(22px,7vw,118px)] pt-16 pb-7 dark:bg-[#071224] sm:grid-cols-2 lg:grid-cols-[1.15fr_.55fr_1.15fr] lg:gap-16">
      <section
        className="grid gap-9 border-b border-navy/20 pb-14 dark:border-white/20 sm:col-span-2 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16 lg:col-span-3"
        aria-labelledby="newsletter-heading"
      >
        <div>
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[.14em] text-teal-dark dark:text-teal">
            Ninewells newsletter
          </p>
          <h2
            className="mt-5 mb-0 max-w-[570px] font-serif text-[clamp(34px,4.3vw,55px)] leading-none font-normal tracking-[-.035em] text-navy dark:text-paper"
            id="newsletter-heading"
          >
            Insight for the decisions ahead.
          </h2>
        </div>
        <div>
          <p className="mt-0 mb-6 max-w-[610px] text-[12px] leading-6 text-slate dark:text-paper/75">
            Subscribe for firm updates and practical insights on the legal,
            regulatory and commercial issues shaping Nigerian business.
          </p>
          <form
            className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
            onSubmit={handleNewsletterSubmit}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Work email address
            </label>
            <input
              className="min-h-[52px] min-w-0 border border-navy/25 bg-transparent px-4 text-[13px] text-navy outline-0 placeholder:text-slate/70 focus:border-teal dark:border-white/25 dark:text-paper dark:placeholder:text-paper/55"
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Work email address"
              autoComplete="email"
              required
            />
            <button
              className="inline-flex min-h-[52px] items-center justify-center gap-5 border-0 bg-navy px-6 text-[12px] font-semibold text-white hover:bg-navy-deep dark:bg-teal dark:text-navy-deep"
              type="submit"
            >
              Subscribe <ArrowRight size={18} aria-hidden="true" />
            </button>
            <p
              className="m-0 min-h-5 text-[10px] leading-5 text-teal-dark dark:text-teal sm:col-span-2"
              aria-live="polite"
            >
              {submitted
                ? "Thank you for your interest in Ninewells insights."
                : "Occasional updates. You can unsubscribe at any time."}
            </p>
          </form>
        </div>
      </section>
      <div className="sm:col-span-2 lg:col-span-1">
        <BrandLogo />
        <p className="mt-4 max-w-[310px] font-serif text-[18px] leading-6 text-slate dark:text-paper/80">
          Experience. Innovation. Trust.
        </p>
        <p className="mt-5 max-w-[330px] text-[11px] leading-5 text-slate dark:text-paper/70">
          {company.organisationType}.
        </p>
      </div>
      <div className="flex flex-col gap-3 text-[12px]">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal">
          Explore
        </p>
        <Link className="no-underline" to="/about">
          About
        </Link>
        <Link className="no-underline" to="/#expertise">
          Expertise
        </Link>
        <Link className="no-underline" to="/people">
          People
        </Link>
        <Link className="no-underline" to="/#insights">
          Insights
        </Link>
        <Link className="no-underline" to="/contact">
          Contact
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-[12px]">
        <p className="mb-0 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal">
          Offices &amp; contact
        </p>
        <a
          className="flex items-center gap-2 no-underline"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={17} /> Ninewells on LinkedIn
        </a>
        {company.offices.map((office) => (
          <a
            className="flex items-start gap-2 leading-5 no-underline"
            href={office.mapUrl}
            target="_blank"
            rel="noreferrer"
            key={office.city}
          >
            <MapPin className="mt-0.5 shrink-0" size={17} />
            <span>
              <strong className="block text-navy dark:text-paper">
                {office.city}
              </strong>
              {office.address}
            </span>
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 border-t border-navy/15 pt-6 text-[10px] font-medium text-slate dark:border-white/15 dark:text-paper/70 sm:col-span-2 lg:col-span-3">
        <span className="w-full sm:mr-auto sm:w-auto">© 2026 Ninewells</span>
        <span>Fully integrated Nigerian legal practice</span>
      </div>
    </footer>
  );
}
