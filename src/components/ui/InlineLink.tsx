import type { ReactNode } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

type InlineLinkProps = {
  children: ReactNode
  href?: string
  className?: string
}

export function InlineLink({ children, href = '#', className = '' }: InlineLinkProps) {
  const external = href.startsWith('http')
  return (
    <a
      className={`group inline-flex w-fit items-center gap-4 border-b border-teal pb-1.5 text-[13px] font-semibold text-navy no-underline dark:text-paper ${className}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" size={18} />
    </a>
  )
}
