import type { ReactNode } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

type InlineLinkProps = {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
}

export function InlineLink({ children, href = '#', className = '', onClick }: InlineLinkProps) {
  const external = href.startsWith('http')
  const linkClass = `group inline-flex w-fit items-center gap-4 border-b border-teal pb-1.5 text-[13px] font-semibold text-navy no-underline dark:text-paper ${className}`
  const content = <><span>{children}</span><ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" size={18} /></>

  if (!external && href.startsWith('/')) return <Link className={linkClass} to={href} onClick={onClick}>{content}</Link>

  return (
    <a
      className={linkClass}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
    >
      {content}
    </a>
  )
}
