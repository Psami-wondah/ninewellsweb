import { useEffect, useState } from 'react'
import { navItems } from '../data/siteContent'

export type NavItem = (typeof navItems)[number]

const homeSections: Array<[NavItem, string]> = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Industries', 'industries'],
  ['People', 'people'],
  ['Insights', 'insights'],
  ['Contact', 'contact'],
]

function getRouteItem(pathname: string): NavItem | null {
  if (pathname.startsWith('/expertise/')) return 'Expertise'
  if (pathname === '/people' || pathname.startsWith('/people/')) return 'People'
  return pathname === '/' ? null : 'About'
}

function getHomeItem(): NavItem {
  const activationLine = Math.min(window.innerHeight * 0.34, 280)
  let current: NavItem = 'About'

  homeSections.forEach(([item, id]) => {
    const section = document.getElementById(id)
    if (section && section.getBoundingClientRect().top <= activationLine) current = item
  })

  return current
}

export function useActiveNavigation() {
  const [activeItem, setActiveItem] = useState<NavItem>(() => getRouteItem(window.location.pathname) ?? 'About')

  useEffect(() => {
    const routeItem = getRouteItem(window.location.pathname)
    if (routeItem) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setActiveItem(getHomeItem()))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.addEventListener('hashchange', update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])

  return activeItem
}
