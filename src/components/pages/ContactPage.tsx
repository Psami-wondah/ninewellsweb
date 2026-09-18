import {
  ArrowRight,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { company } from "../../data/company";
import { Eyebrow } from "../ui/Eyebrow";

export function ContactPage() {
  return (
    <>
      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white"
        aria-labelledby="contact-page-heading"
      >
        <Eyebrow className="text-teal">Contact Ninewells</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.2fr_.6fr] lg:items-end">
          <h1
            className="m-0 max-w-[930px] font-serif text-[clamp(46px,6vw,84px)] leading-[.92] font-normal tracking-[-.045em]"
            id="contact-page-heading"
          >
            Law Firm Offices in Lagos and Abuja
          </h1>
          <div className="border-t border-white/30 pt-6">
            <p className="m-0 text-[15px] leading-7 text-white/82">
              Contact Ninewells directly or connect with us through one of our
              Nigerian offices.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              <a
                className="inline-flex items-center gap-3 text-[12px] font-semibold text-teal no-underline"
                href={company.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={20} /> LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-3 text-[12px] font-semibold text-teal no-underline"
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo size={20} /> {company.social.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,106px)] dark:bg-[#08172a]"
        aria-labelledby="offices-heading"
      >
        <Eyebrow>Offices</Eyebrow>
        <h2
          className="mt-5 mb-12 max-w-[820px] font-serif text-[clamp(42px,5vw,68px)] leading-none font-normal text-navy dark:text-paper"
          id="offices-heading"
        >
          Lagos and Abuja, close to the decisions that matter.
        </h2>
        <div className="grid border-t border-l border-navy/20 dark:border-white/20 md:grid-cols-2">
          {company.offices.map((office, index) => (
            <article
              className="min-h-[310px] border-r border-b border-navy/20 p-[clamp(24px,4vw,48px)] dark:border-white/20"
              key={office.city}
            >
              <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 mb-2 font-serif text-[clamp(30px,3.5vw,44px)] font-normal text-navy dark:text-paper">
                {office.city} Office
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal">
                {office.area}
              </p>
              <p className="mt-7 max-w-[460px] text-[13px] leading-6 text-slate dark:text-paper/80">
                {office.address}
                <br />
                {office.description}
              </p>
              <a
                className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold text-navy no-underline dark:text-paper"
                href={office.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="text-teal-dark dark:text-teal" size={18} />{" "}
                View map <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,106px)] dark:bg-[#071224]"
        aria-labelledby="firm-contacts-heading"
      >
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Firm contacts</Eyebrow>
            <h2
              className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal text-navy dark:text-paper"
              id="firm-contacts-heading"
            >
              Talk to Ninewells.
            </h2>
            <p className="mt-7 max-w-[430px] text-[13px] leading-6 text-slate dark:text-paper/78">
              Whether you need energy, corporate, finance, dispute resolution
              or technology law counsel, Ninewells is ready to help — from our
              offices in Lagos and Abuja, or wherever your business takes you
              across Nigeria.
            </p>
          </div>
          <div className="grid border-t border-l border-navy/20 dark:border-white/20 md:grid-cols-2">
            <a
              className="group min-h-[230px] border-r border-b border-navy/20 p-[clamp(24px,4vw,42px)] text-navy no-underline dark:border-white/20 dark:text-paper"
              href={`mailto:${company.contact.email}`}
            >
              <EnvelopeSimple
                className="text-teal-dark dark:text-teal"
                size={28}
              />
              <small className="mt-14 block text-[9px] font-semibold uppercase tracking-[.12em] text-slate dark:text-paper/70">
                General enquiries
              </small>
              <strong className="mt-3 block font-serif text-[clamp(23px,2.4vw,32px)] leading-tight font-normal break-words">
                {company.contact.email}
              </strong>
            </a>
            <div className="min-h-[230px] border-r border-b border-navy/20 p-[clamp(24px,4vw,42px)] text-navy dark:border-white/20 dark:text-paper">
              <Phone
                className="text-teal-dark dark:text-teal"
                size={28}
              />
              <small className="mt-14 block text-[9px] font-semibold uppercase tracking-[.12em] text-slate dark:text-paper/70">
                Call the firm
              </small>
              <div className="mt-3 flex flex-col gap-2 font-serif text-[clamp(24px,2.7vw,34px)] leading-tight">
                {company.contact.phones.map((phone) => (
                  <a
                    className="w-fit text-navy no-underline dark:text-paper"
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    key={phone}
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-[11px] leading-5 text-slate dark:text-paper/75">
                Chief Operating Officer: {company.contact.chiefOperatingOfficerPhone}
              </p>
            </div>
          </div>
        </div>
        <a
          className="mt-12 inline-flex items-center gap-3 border-b border-teal pb-2 text-[13px] font-semibold text-navy no-underline dark:text-paper"
          href={`mailto:${company.contact.email}`}
        >
          Send Us a Message <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}
