import { Moon, Sun } from '@phosphor-icons/react'
import type { Theme } from '../../types/navigation'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
  showLabel?: boolean
}

export function ThemeToggle({ theme, onToggle, showLabel = true }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  return (
    <button
      className="group inline-flex min-h-11 items-center gap-3 border-0 bg-transparent text-[13px] font-medium text-navy transition-colors hover:text-teal-dark dark:text-paper dark:hover:text-teal-light"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="flex size-8 items-center justify-center border border-navy/20 transition-colors group-hover:border-teal dark:border-white/25">
        {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
      </span>
      {showLabel ? <span>{isDark ? 'Light theme' : 'Dark theme'}</span> : null}
    </button>
  )
}
