import { ArrowRight, EnvelopeSimple, LinkedinLogo, MapPin, Phone } from '@phosphor-icons/react'
import { company } from '../../data/company'
import { people } from '../../data/people'
import { LINKEDIN_URL } from '../../data/siteContent'
import { Eyebrow } from '../ui/Eyebrow'

export function ContactPage() {
  return (
    <>
      <section className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white" aria-labelledby="contact-page-heading">
        <Eyebrow className="text-teal-light">Contact Ninewells</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.2fr_.6fr] lg:items-end">
          <h1 className="m-0 max-w-[930px] font-serif text-[clamp(65px,9vw,126px)] leading-[.84] font-normal tracking-[-.055em]" id="contact-page-heading">Let’s begin with the decision.</h1>
          <div className="border-t border-white/30 pt-6"><p className="m-0 text-[15px] leading-7 text-white/82">Contact a member of our team directly or connect with Ninewells through one of our Nigerian offices.</p><a className="mt-7 inline-flex items-center gap-3 text-[12px] font-semibold text-teal-light no-underline" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><LinkedinLogo size={20} /> Ninewells on LinkedIn</a></div>
        </div>
      </section>

      <section className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,106px)] dark:bg-[#08172a]" aria-labelledby="offices-heading">
        <Eyebrow>Offices</Eyebrow>
        <h2 className="mt-5 mb-12 max-w-[820px] font-serif text-[clamp(42px,5vw,68px)] leading-none font-normal text-navy dark:text-paper" id="offices-heading">Present in Nigeria’s commercial and regulatory centres.</h2>
        <div className="grid border-t border-l border-navy/20 dark:border-white/20 md:grid-cols-2">
          {company.offices.map((office, index) => <article className="min-h-[310px] border-r border-b border-navy/20 p-[clamp(24px,4vw,48px)] dark:border-white/20" key={office.city}><span className="text-[10px] font-semibold text-teal-dark dark:text-teal-light">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-8 mb-2 font-serif text-[44px] font-normal text-navy dark:text-paper">{office.city}</h3><p className="text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">{office.area}</p><p className="mt-7 max-w-[460px] text-[13px] leading-6 text-slate dark:text-paper/80">{office.address}<br />{office.description}</p><a className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold text-navy no-underline dark:text-paper" href={office.mapUrl} target="_blank" rel="noreferrer"><MapPin className="text-teal-dark dark:text-teal-light" size={18} /> View map <ArrowRight size={16} /></a></article>)}
        </div>
      </section>

      <section className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,106px)] dark:bg-[#071224]" aria-labelledby="direct-contacts-heading">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.15fr] lg:gap-20">
          <div><Eyebrow>Direct contacts</Eyebrow><h2 className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal text-navy dark:text-paper" id="direct-contacts-heading">Speak with the right person.</h2><p className="mt-7 max-w-[390px] text-[13px] leading-6 text-slate dark:text-paper/78">Every published team member’s confirmed telephone and email details are available below and on their profile.</p></div>
          <div className="border-t border-navy dark:border-paper">
            {people.map((person) => <article className="grid gap-5 border-b border-navy/15 py-6 dark:border-white/15 sm:grid-cols-[72px_1fr_auto] sm:items-center" key={person.slug}><img className="h-20 w-16 object-cover" src={person.image} style={{ objectPosition: person.imagePosition }} alt="" /><div><a className="font-serif text-[24px] text-navy no-underline dark:text-paper" href={`/people/${person.slug}`}>{person.name}</a><p className="mt-1 mb-0 text-[10px] font-semibold uppercase tracking-[.08em] text-slate dark:text-paper/70">{person.position} · {person.role}</p></div><div className="flex flex-col gap-2 text-[11px]"><a className="inline-flex items-center gap-2 text-navy no-underline dark:text-paper" href={`mailto:${person.email}`}><EnvelopeSimple className="text-teal-dark dark:text-teal-light" size={17} /> {person.email}</a><a className="inline-flex items-center gap-2 text-navy no-underline dark:text-paper" href={`tel:${person.mobile.replace(/\s/g, '')}`}><Phone className="text-teal-dark dark:text-teal-light" size={17} /> {person.mobile}</a></div></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
