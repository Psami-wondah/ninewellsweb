import { ArrowLeft, ArrowRight, ArrowSquareOut } from '@phosphor-icons/react'
import lagosIllustration from '../../assets/lagos-bridge-pen-illustration.png'
import type { Person } from '../../data/people'
import { people } from '../../data/people'
import { expertiseSlugs, insightItems } from '../../data/siteContent'
import { ContactSection } from '../sections/ContactSection'
import { Eyebrow } from '../ui/Eyebrow'

export function LawyerProfilePage({ person }: { person: Person }) {
  const relatedPeople = people.filter((entry) => entry.slug !== person.slug).slice(0, 2)

  return (
    <>
      <section className="grid min-h-[760px] border-b border-navy/15 bg-ivory dark:border-white/15 dark:bg-[#08172a] lg:grid-cols-[1.08fr_.92fr]" aria-labelledby="profile-heading">
        <div className="flex flex-col px-[clamp(22px,7vw,118px)] pt-[clamp(42px,6vw,72px)] pb-[clamp(56px,7vw,84px)]">
          <a className="mb-16 inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[.1em] text-slate no-underline dark:text-paper/80" href="/people"><ArrowLeft size={16} /> All people</a>
          <Eyebrow>{person.location} / {person.position}</Eyebrow>
          <h1 className="mt-6 mb-5 max-w-[690px] font-serif text-[clamp(58px,7.5vw,106px)] leading-[.86] font-normal tracking-[-.055em] text-navy dark:text-paper" id="profile-heading">{person.name}</h1>
          <p className="m-0 font-serif text-[clamp(22px,2.3vw,32px)] leading-tight text-slate dark:text-paper/85">{person.role}</p>
          <div className="mt-auto border-t border-navy/20 pt-7 dark:border-white/20 lg:mt-20">
            <a className="inline-flex items-center gap-3 text-[12px] font-semibold text-navy no-underline dark:text-paper" href={person.sourceUrl} target="_blank" rel="noreferrer"><ArrowSquareOut className="text-teal-dark dark:text-teal-light" size={20} /> View {person.sourceLabel}</a>
          </div>
        </div>
        <figure className="relative m-0 min-h-[520px] overflow-hidden bg-[#eef0f5]">
          <img className="h-full w-full object-cover object-center mix-blend-multiply" src={lagosIllustration} alt="Blue pen-and-ink illustration of the Lekki–Ikoyi Link Bridge and Lagos skyline" />
          <figcaption className="absolute right-0 bottom-0 bg-navy-deep px-6 py-4 text-[9px] font-semibold uppercase tracking-[.14em] text-ivory">Lagos in line / Editorial illustration</figcaption>
        </figure>
      </section>

      <section className="grid gap-14 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#071224] lg:grid-cols-[.45fr_1.15fr] lg:gap-[clamp(70px,10vw,170px)]">
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>Profile</Eyebrow>
          <nav className="mt-8 flex flex-col border-t border-navy/20 text-[12px] font-semibold text-navy dark:border-white/20 dark:text-paper" aria-label="On this page">
            {['Overview', 'Expertise', 'Experience', 'Perspectives'].map((item, index) => <a className="grid min-h-12 grid-cols-[32px_1fr] items-center border-b border-navy/15 no-underline dark:border-white/15" href={`#${item.toLowerCase()}`} key={item}><span className="text-[9px] text-teal-dark dark:text-teal-light">0{index + 1}</span>{item}</a>)}
          </nav>
        </div>
        <div>
          <div id="overview">
            <h2 className="m-0 max-w-[790px] font-serif text-[clamp(34px,4vw,55px)] leading-[1.08] font-normal tracking-[-.035em] text-navy dark:text-paper">{person.bio}</h2>
            <div className="mt-10 grid gap-7 text-[15px] leading-7 text-slate dark:text-paper/85 md:grid-cols-2">
              {person.background.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <ProfileList title="Expertise" id="expertise" items={person.expertise} linkItems />
          <ProfileList title="Industries" id="industries" items={person.industries} />

          <section className="mt-20 border-t border-navy pt-8 dark:border-paper" id="experience">
            <Eyebrow>Publicly reported experience</Eyebrow>
            <p className="mt-8 mb-0 max-w-[860px] font-serif text-[clamp(28px,3.5vw,43px)] leading-tight text-navy dark:text-paper">{person.experience}</p>
            <a className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.1em] text-teal-dark no-underline dark:text-teal-light" href={person.sourceUrl} target="_blank" rel="noreferrer">Source profile <ArrowSquareOut size={16} /></a>
          </section>

          <section className="mt-20 border-t border-navy pt-8 dark:border-paper" id="perspectives">
            <Eyebrow>Firm perspectives</Eyebrow>
            <div className="mt-6">
              {insightItems.slice(0, 2).map((item) => <a className="group grid min-h-[92px] grid-cols-[1fr_30px] items-center border-b border-navy/15 text-navy no-underline dark:border-white/15 dark:text-paper" href={item.href} target="_blank" rel="noreferrer" key={item.title}><span><small className="mb-2 block text-[9px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">{item.category} · {item.date}</small><strong className="font-serif text-[22px] font-normal">{item.title}</strong></span><ArrowRight className="transition-transform group-hover:translate-x-1" size={19} /></a>)}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(70px,8vw,100px)] dark:bg-[#0a192c]" aria-labelledby="related-people-heading">
        <div className="flex items-end justify-between gap-8 border-b border-navy pb-7 dark:border-paper">
          <div><Eyebrow>Related people</Eyebrow><h2 className="mt-5 mb-0 font-serif text-[clamp(39px,5vw,64px)] leading-none font-normal text-navy dark:text-paper" id="related-people-heading">A joined-up team.</h2></div>
          <a className="hidden border-b border-teal pb-1 text-[12px] font-semibold text-navy no-underline sm:inline-flex dark:text-paper" href="/people">View all people</a>
        </div>
        <div className="grid md:grid-cols-2">
          {relatedPeople.map((entry) => <a className="group grid min-h-[112px] grid-cols-[1fr_28px] items-center border-b border-navy/15 py-6 text-navy no-underline md:first:border-r md:first:pr-8 md:last:pl-8 dark:border-white/15 dark:text-paper" href={`/people/${entry.slug}`} key={entry.slug}><span><strong className="block font-serif text-[27px] font-normal">{entry.name}</strong><small className="mt-2 block text-[10px] font-semibold uppercase tracking-[.08em] text-slate dark:text-paper/75">{entry.position} · {entry.role}</small></span><ArrowRight className="transition-transform group-hover:translate-x-1" size={19} /></a>)}
        </div>
      </section>
      <ContactSection />
    </>
  )
}

function ProfileList({ title, id, items, linkItems = false }: { title: string; id: string; items: string[]; linkItems?: boolean }) {
  return (
    <section className="mt-20 border-t border-navy pt-8 dark:border-paper" id={id}>
      <Eyebrow>{title}</Eyebrow>
      <div className="mt-5 grid sm:grid-cols-2">
        {items.map((item, index) => {
          const slug = expertiseSlugs[item as keyof typeof expertiseSlugs]
          const content = <><span className="text-[10px] font-semibold text-teal-dark dark:text-teal-light">0{index + 1}</span><strong className="font-serif text-[21px] font-normal">{item}</strong>{linkItems ? <ArrowRight size={17} /> : null}</>
          const className = "grid min-h-[68px] grid-cols-[38px_1fr_24px] items-center border-b border-navy/15 text-navy no-underline sm:odd:pr-6 sm:even:pl-6 dark:border-white/15 dark:text-paper"
          return linkItems && slug ? <a className={className} href={`/expertise/${slug}`} key={item}>{content}</a> : <div className={className} key={item}>{content}</div>
        })}
      </div>
    </section>
  )
}
