import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navItems } from '../data/siteContent'

export type NavItem = (typeof navItems)[number]

const homeSections: Array<[NavItem, string]> = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['People', 'people'],
  ['Intelligence', 'intelligence'],
  ['Contact', 'contact'],
]

function getRouteItem(pathname: string): NavItem | null {
  if (pathname === '/about') return 'About'
  if (pathname === '/contact') return 'Contact'
  if (pathname === '/expertise') return 'Expertise'
  if (pathname.startsWith('/expertise/')) return 'Expertise'
  if (pathname === '/intelligence' || pathname.startsWith('/intelligence/')) return 'Intelligence'
  if (pathname === '/insights' || pathname.startsWith('/insights/')) return 'Intelligence'
  if (pathname === '/people' || pathname.startsWith('/people/')) return 'People'
  return null
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
  const { pathname } = useLocation()
  const routeItem = getRouteItem(pathname)
  const [homeItem, setHomeItem] = useState<NavItem>('About')

  useEffect(() => {
    if (routeItem) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setHomeItem(getHomeItem()))
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
  }, [routeItem])

  return routeItem ?? homeItem
}
