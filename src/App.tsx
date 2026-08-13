import { useEffect, useState } from 'react'
import { DesktopRail } from './components/navigation/DesktopRail'
import { MegaMenu } from './components/navigation/MegaMenu'
import { MobileHeader } from './components/navigation/MobileHeader'
import { MobileMenu } from './components/navigation/MobileMenu'
import { SearchOverlay } from './components/navigation/SearchOverlay'
import { ExpertiseDetailPage } from './components/pages/ExpertiseDetailPage'
import { LawyerProfilePage } from './components/pages/LawyerProfilePage'
import { PeopleDirectoryPage } from './components/pages/PeopleDirectoryPage'
import { AboutPage } from './components/pages/AboutPage'
import { ContactPage } from './components/pages/ContactPage'
import { ContactSection } from './components/sections/ContactSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { HeroSection } from './components/sections/HeroSection'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { InsightsSection } from './components/sections/InsightsSection'
import { PeopleSection } from './components/sections/PeopleSection'
import { ProofSection } from './components/sections/ProofSection'
import { SiteFooter } from './components/sections/SiteFooter'
import { people } from './data/people'
import { expertiseDetails } from './data/siteContent'
import { useTheme } from './hooks/useTheme'
import type { MenuName } from './types/navigation'

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuName>(null)
  const { theme, toggleTheme } = useTheme()
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMenu(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = activeMenu === 'mobile' || activeMenu === 'search' ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeMenu])

  useEffect(() => {
    if (pathname === '/') return
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  const profileSlug = pathname.startsWith('/people/') ? pathname.split('/')[2] : null
  const expertiseSlug = pathname.startsWith('/expertise/') ? pathname.split('/')[2] : null
  const person = profileSlug ? people.find((entry) => entry.slug === profileSlug) : null
  const expertiseDetail = expertiseSlug ? expertiseDetails[expertiseSlug] : null

  useEffect(() => {
    const routeName = pathname === '/people' ? 'People' : pathname === '/about' ? 'About' : pathname === '/contact' ? 'Contact' : null
    const pageName = person?.name || expertiseDetail?.title || routeName
    document.title = pageName ? `${pageName} | Ninewells` : 'Ninewells | Nigerian legal counsel'
  }, [expertiseDetail?.title, pathname, person?.name])

  const page = pathname === '/about'
    ? <><AboutPage /><SiteFooter /></>
    : pathname === '/contact'
      ? <><ContactPage /><SiteFooter /></>
      : pathname === '/people'
        ? <><PeopleDirectoryPage /><ContactSection /><SiteFooter /></>
        : person
          ? <><LawyerProfilePage person={person} /><SiteFooter /></>
          : expertiseDetail
            ? <><ExpertiseDetailPage detail={expertiseDetail} /><SiteFooter /></>
            : <HomePage />

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-navy transition-colors duration-300 dark:bg-[#071224] dark:text-paper" id="top">
      <a className="fixed top-3 left-3 z-[100] -translate-y-[180%] bg-teal px-4 py-3 font-semibold text-navy-deep no-underline focus:translate-y-0" href="#main-content">Skip to content</a>
      <DesktopRail activeMenu={activeMenu} setActiveMenu={setActiveMenu} theme={theme} onToggleTheme={toggleTheme} />
      <MobileHeader onOpen={() => setActiveMenu('mobile')} theme={theme} onToggleTheme={toggleTheme} />

      {activeMenu === 'expertise' || activeMenu === 'industries' ? <MegaMenu menu={activeMenu} onClose={() => setActiveMenu(null)} /> : null}
      {activeMenu === 'mobile' ? <MobileMenu onClose={() => setActiveMenu(null)} onSearch={() => setActiveMenu('search')} /> : null}
      {activeMenu === 'search' ? <SearchOverlay onClose={() => setActiveMenu(null)} /> : null}

      <main className="pt-[74px] lg:ml-[232px] lg:pt-0" id="main-content">
        {page}
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <IndustriesSection />
      <ProofSection />
      <PeopleSection />
      <InsightsSection />
      <ContactSection />
      <SiteFooter />
    </>
  )
}

export default App
