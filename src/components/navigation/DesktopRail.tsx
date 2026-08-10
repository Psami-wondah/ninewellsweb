import { ArrowRight, CaretDown, MagnifyingGlass } from '@phosphor-icons/react'
import { navItems } from '../../data/siteContent'
import type { MenuName, Theme } from '../../types/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { getNavHref } from './navHelpers'

type DesktopRailProps = {
  activeMenu: MenuName
  setActiveMenu: (menu: MenuName) => void
  theme: Theme
  onToggleTheme: () => void
}

export function DesktopRail({ activeMenu, setActiveMenu, theme, onToggleTheme }: DesktopRailProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[232px] flex-col border-r border-navy/15 bg-ivory dark:border-white/15 dark:bg-[#071224] lg:flex" aria-label="Primary navigation">
      <a className="flex min-h-[136px] items-center border-b border-navy/15 px-7 dark:border-white/15" href="/" aria-label="Ninewells home">
        <BrandLogo />
      </a>
      <nav className="flex flex-col gap-0.5 px-6 py-9">
        {navItems.map((item) => {
          const expandable = item === 'Expertise' || item === 'Industries'
          const menuName = item.toLowerCase() as 'expertise' | 'industries'
          const baseClass = "group relative flex min-h-12 w-full items-center justify-between border-0 bg-transparent py-0 pr-2 pl-4 text-left text-[14px] font-medium text-navy no-underline transition-all duration-200 before:absolute before:left-0 before:h-0.5 before:w-0 before:bg-teal before:transition-all hover:translate-x-1 hover:text-teal-dark hover:before:w-2 dark:text-paper dark:hover:text-teal-light"

          return expandable ? (
            <button
              className={`${baseClass} ${activeMenu === menuName ? 'translate-x-1 text-teal-dark before:w-2 dark:text-teal-light' : ''}`}
              type="button"
              key={item}
              onClick={() => setActiveMenu(activeMenu === menuName ? null : menuName)}
              aria-expanded={activeMenu === menuName}
            >
              <span>{item}</span>
              <CaretDown className={`transition-transform ${activeMenu === menuName ? 'rotate-180' : ''}`} size={15} aria-hidden="true" />
            </button>
          ) : (
            <a className={baseClass} key={item} href={getNavHref(item)}>{item}</a>
          )
        })}
      </nav>
      <div className="mt-auto flex flex-col gap-1 border-t border-navy/15 px-6 py-6 dark:border-white/15">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button className="flex min-h-11 items-center gap-3 border-0 bg-transparent text-[13px] text-navy transition-colors hover:text-teal-dark dark:text-paper dark:hover:text-teal-light" type="button" onClick={() => setActiveMenu('search')}>
          <MagnifyingGlass size={19} aria-hidden="true" /> Search
        </button>
        <a className="flex min-h-11 items-center gap-3 text-[13px] font-semibold text-teal-dark no-underline dark:text-teal-light" href="/#contact">
          <ArrowRight size={19} aria-hidden="true" /> Speak with our team
        </a>
      </div>
    </aside>
  )
}
