import { people } from '../../data/people'
import lagosIllustration from '../../assets/lagos-bridge-pen-illustration.png'
import { ArrowRight } from '@phosphor-icons/react'
import { Eyebrow } from '../ui/Eyebrow'
import { InlineLink } from '../ui/InlineLink'

export function PeopleSection() {
  return (
    <section className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,120px)] dark:bg-[#071224]" id="people" aria-labelledby="people-heading">
      <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_.65fr_auto] lg:gap-12" data-reveal="up">
        <div><Eyebrow>Our people</Eyebrow><h2 className="mt-6 mb-0 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper" id="people-heading">Accomplished lawyers.<br />Invested partners.</h2></div>
        <p className="m-0 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/80">Our lawyers combine technical command with the perspective to help clients act decisively.</p>
        <InlineLink href="/people">Find a lawyer</InlineLink>
      </div>
      <div className="mt-16 grid overflow-hidden border-y border-navy/20 bg-ivory dark:border-white/20 dark:bg-[#0a192c] lg:grid-cols-[.78fr_1.22fr]" data-reveal="up" data-reveal-delay="1">
        <figure className="relative m-0 min-h-[370px] overflow-hidden bg-[#eef0f5] lg:min-h-full">
          <img className="h-full w-full object-cover object-center mix-blend-multiply transition-transform duration-1000 hover:scale-[1.02]" src={lagosIllustration} alt="Blue pen-and-ink study of Lagos and the Lekki–Ikoyi Link Bridge" />
          <figcaption className="absolute bottom-0 left-0 bg-navy-deep/95 px-5 py-3 text-[9px] uppercase tracking-[.13em] text-ivory">One city. Connected perspectives.</figcaption>
        </figure>
        <div className="lg:border-l lg:border-navy/20 lg:dark:border-white/20">
          {people.map((person, index) => (
            <a className="group grid min-h-[126px] grid-cols-[42px_1fr_30px] items-center gap-3 border-b border-navy/15 px-5 text-navy no-underline last:border-b-0 dark:border-white/15 dark:text-paper sm:px-8" href={`/people/${person.slug}`} key={person.name}>
              <span className="text-[10px] font-semibold tracking-[.12em] text-teal-dark dark:text-teal-light">{String(index + 1).padStart(2, '0')}</span>
              <span><strong className="block font-serif text-[clamp(24px,2.4vw,35px)] font-normal leading-tight">{person.name}</strong><small className="mt-2 block text-[9px] font-semibold uppercase tracking-[.09em] text-slate dark:text-paper/75">{person.position} · {person.role}</small></span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={19} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
