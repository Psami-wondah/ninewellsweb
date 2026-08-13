import { LinkedinLogo, MapPin } from '@phosphor-icons/react'
import { company } from '../../data/company'
import { LINKEDIN_URL } from '../../data/siteContent'
import { BrandLogo } from '../ui/BrandLogo'

export function SiteFooter() {
  return (
    <footer className="grid gap-12 bg-ivory px-[clamp(22px,7vw,118px)] pt-16 pb-7 dark:bg-[#071224] sm:grid-cols-2 lg:grid-cols-[1.15fr_.55fr_1.15fr] lg:gap-16">
      <div className="sm:col-span-2 lg:col-span-1"><BrandLogo /><p className="mt-4 max-w-[310px] font-serif text-[18px] leading-6 text-slate dark:text-paper/80">Experience. Innovation. Trust.</p><p className="mt-5 max-w-[330px] text-[11px] leading-5 text-slate dark:text-paper/70">{company.organisationType}.</p></div>
      <div className="flex flex-col gap-3 text-[12px]"><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">Explore</p><a className="no-underline" href="/about">About</a><a className="no-underline" href="/#expertise">Expertise</a><a className="no-underline" href="/#industries">Industries</a><a className="no-underline" href="/people">People</a><a className="no-underline" href="/#insights">Insights</a><a className="no-underline" href="/contact">Contact</a></div>
      <div className="flex flex-col gap-4 text-[12px]"><p className="mb-0 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">Offices &amp; contact</p><a className="flex items-center gap-2 no-underline" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><LinkedinLogo size={17} /> Ninewells on LinkedIn</a>{company.offices.map((office) => <a className="flex items-start gap-2 leading-5 no-underline" href={office.mapUrl} target="_blank" rel="noreferrer" key={office.city}><MapPin className="mt-0.5 shrink-0" size={17} /><span><strong className="block text-navy dark:text-paper">{office.city}</strong>{office.address}</span></a>)}</div>
      <div className="flex flex-wrap gap-4 border-t border-navy/15 pt-6 text-[10px] font-medium text-slate dark:border-white/15 dark:text-paper/70 sm:col-span-2 lg:col-span-3"><span className="w-full sm:mr-auto sm:w-auto">© 2026 Ninewells</span><span>Fully integrated Nigerian legal practice</span></div>
    </footer>
  )
}
