import { ArrowRight, X } from '@phosphor-icons/react'
import { useDialogFocus } from '../../hooks/useDialogFocus'
import { Eyebrow } from '../ui/Eyebrow'

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const dialogRef = useDialogFocus()
  return (
    <div ref={dialogRef} className="fixed inset-x-0 top-0 z-[80] min-h-[460px] border-b border-navy/15 bg-ivory px-[clamp(24px,6vw,95px)] pt-7 pb-11 shadow-[0_24px_60px_rgba(0,22,65,.12)] dark:border-white/15 dark:bg-[#08172a] lg:left-[232px]" role="dialog" aria-modal="true" aria-label="Search Ninewells">
      <div className="flex items-center justify-between border-b border-navy/15 pb-5 dark:border-white/15">
        <Eyebrow className="text-navy dark:text-paper">Search Ninewells</Eyebrow>
        <button className="flex size-10 items-center justify-center border border-navy/20 bg-transparent text-navy dark:border-white/25 dark:text-paper" type="button" onClick={onClose} aria-label="Close search"><X size={23} /></button>
      </div>
      <form className="my-14" onSubmit={(event) => event.preventDefault()}>
        <label className="mb-4 block text-[11px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal-light" htmlFor="site-search">What can we help you find?</label>
        <div className="flex border-b border-navy dark:border-paper">
          <input data-autofocus className="w-full border-0 bg-transparent py-4 font-serif text-[clamp(30px,4vw,55px)] text-navy outline-0 placeholder:text-slate/85 dark:text-paper dark:placeholder:text-paper/70" id="site-search" type="search" placeholder="Search people, expertise and insights" />
          <button className="w-16 border-0 bg-transparent text-navy dark:text-paper" type="submit" aria-label="Submit search"><ArrowRight size={27} /></button>
        </div>
      </form>
      <div className="flex flex-wrap gap-7 text-[12px] text-navy dark:text-paper">
        <span className="font-semibold text-teal-dark dark:text-teal-light">Suggested</span>
        <a className="no-underline" href="/expertise/energy-extractives-foreign-investment">Energy & investment</a><a className="no-underline" href="/people">Find a lawyer</a><a className="no-underline" href="/#insights">Latest insights</a>
      </div>
    </div>
  )
}
