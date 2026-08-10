import { LinkedinLogo, MapPin } from '@phosphor-icons/react'
import { BrandLogo } from '../ui/BrandLogo'

export function SiteFooter() {
  return (
    <footer className="grid gap-12 bg-ivory px-[clamp(22px,7vw,118px)] pt-16 pb-7 dark:bg-[#071224] sm:grid-cols-2 lg:grid-cols-[1.2fr_.55fr_1fr] lg:gap-16">
      <div className="sm:col-span-2 lg:col-span-1"><BrandLogo /><p className="mt-4 max-w-[290px] font-serif text-[18px] text-slate dark:text-paper/80">Experience. Innovation. Trust.</p></div>
      <div className="flex flex-col gap-3 text-[12px]"><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">Explore</p><a className="no-underline" href="/#expertise">Expertise</a><a className="no-underline" href="/#industries">Industries</a><a className="no-underline" href="/people">People</a><a className="no-underline" href="/#insights">Insights</a></div>
      <div className="flex flex-col gap-3 text-[12px]"><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light">Connect</p><a className="flex items-center gap-2 no-underline" href="https://www.linkedin.com/company/ninewells/" target="_blank" rel="noreferrer"><LinkedinLogo size={17} /> Ninewells on LinkedIn</a><a className="flex items-start gap-2 no-underline" href="https://maps.google.com/?q=Construction+House+18+Adeyemo+Alakija+Victoria+Island+Lagos" target="_blank" rel="noreferrer"><MapPin className="mt-0.5 shrink-0" size={17} /> Construction House, 18 Adeyemo Alakija,<br />Victoria Island, Lagos 101241</a></div>
      <div className="flex flex-wrap gap-4 border-t border-navy/15 pt-6 text-[10px] font-medium text-slate dark:border-white/15 dark:text-paper/70 sm:col-span-2 lg:col-span-3"><span className="w-full sm:mr-auto sm:w-auto">© 2026 Ninewells</span><a className="no-underline" href="/#top">Privacy</a><a className="no-underline" href="/#top">Legal</a><a className="no-underline" href="/#top">Accessibility</a></div>
    </footer>
  )
}
