import { ArrowDownRight, ArrowRight, MagnifyingGlass, Minus, Plus, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { expertise, expertiseSlugs, LINKEDIN_URL, navItems, sectors } from '../../data/siteContent'
import { useDialogFocus } from '../../hooks/useDialogFocus'
import { useActiveNavigation } from '../../hooks/useActiveNavigation'
import { BrandLogo } from '../ui/BrandLogo'
import { getNavHref } from './navHelpers'

export function MobileMenu({ onClose, onSearch }: { onClose: () => void; onSearch: () => void }) {
  const activeItem = useActiveNavigation()
  const [openGroup, setOpenGroup] = useState<string | null>(() => activeItem === 'Expertise' || activeItem === 'Industries' ? activeItem : null)
  const dialogRef = useDialogFocus()
  return (
    <div ref={dialogRef} className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-navy-deep text-ivory animate-[mobile-in_300ms_cubic-bezier(.2,.7,.2,1)] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <div className="flex min-h-[76px] items-center justify-between border-b border-white/20 px-5">
        <BrandLogo className="w-[120px]" variant="dark" />
        <button className="border-0 bg-transparent text-ivory" type="button" onClick={onClose} aria-label="Close navigation"><X size={26} /></button>
      </div>
      <nav className="px-5 py-6">
        {navItems.map((item, index) => {
          const expandable = item === 'Expertise' || item === 'Industries'
          const isOpen = openGroup === item
          const isCurrent = activeItem === item
          const label = <span><small className="inline-block w-9 font-sans text-[9px] text-teal-light">{String(index + 1).padStart(2, '0')}</small>{item}</span>
          return (
            <div className="border-b border-white/15" key={item}>
              {expandable ? (
                <>
                  <button className={`flex min-h-[60px] w-full items-center justify-between border-0 bg-transparent font-serif text-[25px] ${isCurrent ? 'text-teal-light' : 'text-ivory'}`} type="button" onClick={() => setOpenGroup(isOpen ? null : item)} aria-expanded={isOpen} aria-current={isCurrent ? 'page' : undefined}>
                    {label}{isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <div className={`flex flex-col overflow-hidden pl-9 transition-all duration-300 ${isOpen ? 'max-h-[340px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`} aria-hidden={!isOpen}>
                    {(item === 'Expertise' ? expertise.map((entry) => entry[1]) : sectors.map((entry) => entry[0])).map((link) => {
                      const expertiseHref = expertiseSlugs[link as keyof typeof expertiseSlugs]
                      const href = item === 'Expertise' && expertiseHref ? `/expertise/${expertiseHref}` : '/#industries'
                      const isSubpageCurrent = window.location.pathname === href
                      return <a className={`py-2 text-[13px] no-underline ${isSubpageCurrent ? 'font-semibold text-teal-light' : 'text-white/80'}`} href={href} key={link} onClick={onClose} tabIndex={isOpen ? 0 : -1} aria-current={isSubpageCurrent ? 'page' : undefined}>{link}</a>
                    })}
                  </div>
                </>
              ) : (
                <a className={`flex min-h-[60px] items-center justify-between font-serif text-[25px] no-underline ${isCurrent ? 'text-teal-light' : 'text-ivory'}`} href={getNavHref(item)} onClick={onClose} aria-current={isCurrent ? 'page' : undefined}>{label}{item === 'People' ? <ArrowRight size={20} /> : <ArrowDownRight size={20} />}</a>
              )}
            </div>
          )
        })}
      </nav>
      <div className="mt-auto flex flex-col gap-4 px-5 pt-6 pb-9">
        <button className="flex min-h-11 items-center gap-3 border-0 bg-transparent text-left text-[12px] text-ivory" type="button" onClick={onSearch}><MagnifyingGlass className="text-teal" size={18} /> Search Ninewells</button>
        <a className="flex items-center justify-between text-[12px] text-teal-light no-underline" href="/#contact" onClick={onClose}>Speak with our team <ArrowDownRight size={18} /></a>
        <a className="text-[12px] text-white/85 no-underline" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Ninewells on LinkedIn</a>
      </div>
    </div>
  )
}
