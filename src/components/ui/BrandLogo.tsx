import logo from '../../assets/ninewells-logo.svg'
import darkLogo from '../../assets/ninewells-logo-dark.svg'

type BrandLogoProps = {
  className?: string
  variant?: 'auto' | 'light' | 'dark'
}

export function BrandLogo({ className = '', variant = 'auto' }: BrandLogoProps) {
  const sizing = `inline-block ${className || 'w-[158px]'}`

  if (variant === 'light') return <img className={`h-auto ${sizing}`} src={logo} alt="Ninewells" />
  if (variant === 'dark') return <img className={`h-auto ${sizing}`} src={darkLogo} alt="Ninewells" />

  return (
    <span className={sizing}>
      <img className="h-auto w-full dark:hidden" src={logo} alt="Ninewells" />
      <img className="hidden h-auto w-full dark:block" src={darkLogo} alt="Ninewells" />
    </span>
  )
}
