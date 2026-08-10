import { List } from '@phosphor-icons/react'
import type { Theme } from '../../types/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { ThemeToggle } from '../ui/ThemeToggle'

type MobileHeaderProps = {
  onOpen: () => void
  theme: Theme
  onToggleTheme: () => void
}

export function MobileHeader({ onOpen, theme, onToggleTheme }: MobileHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[74px] items-center justify-between border-b border-navy/15 bg-ivory px-5 dark:border-white/15 dark:bg-[#071224] lg:hidden">
      <a href="/" aria-label="Ninewells home"><BrandLogo className="w-[132px]" /></a>
      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} showLabel={false} />
        <button className="flex min-h-11 items-center gap-2 border-0 bg-transparent text-[12px] font-semibold text-navy dark:text-paper" type="button" onClick={onOpen} aria-label="Open navigation">
          <span>Menu</span><List size={24} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
