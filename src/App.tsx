import { useEffect, useState, type ReactNode } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { DesktopRail } from "./components/navigation/DesktopRail";
import { MegaMenu } from "./components/navigation/MegaMenu";
import { MobileHeader } from "./components/navigation/MobileHeader";
import { MobileMenu } from "./components/navigation/MobileMenu";
import { SearchOverlay } from "./components/navigation/SearchOverlay";
import { ExpertiseDetailPage } from "./components/pages/ExpertiseDetailPage";
import { LawyerProfilePage } from "./components/pages/LawyerProfilePage";
import { PeopleDirectoryPage } from "./components/pages/PeopleDirectoryPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { InsightDetailPage } from "./components/pages/InsightDetailPage";
import { InsightsDirectoryPage } from "./components/pages/InsightsDirectoryPage";
import { ContactSection } from "./components/sections/ContactSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { HeroSection } from "./components/sections/HeroSection";
import { InsightsSection } from "./components/sections/InsightsSection";
import { PeopleSection } from "./components/sections/PeopleSection";
import { ProofSection } from "./components/sections/ProofSection";
import { SiteFooter } from "./components/sections/SiteFooter";
import { people } from "./data/people";
import { expertiseDetails, insightItems } from "./data/siteContent";
import { useTheme } from "./hooks/useTheme";
import type { MenuName } from "./types/navigation";

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow =
      activeMenu === "mobile" || activeMenu === "search" ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeMenu]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = location.hash
        ? document.getElementById(location.hash.slice(1))
        : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen overflow-x-clip bg-paper text-navy transition-colors duration-300 dark:bg-[#071224] dark:text-paper"
      id="top"
    >
      <a
        className="fixed top-3 left-3 z-[100] -translate-y-[180%] bg-teal px-4 py-3 font-semibold text-navy-deep no-underline focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <DesktopRail
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <MobileHeader
        onOpen={() => setActiveMenu("mobile")}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {activeMenu === "expertise" ? (
        <MegaMenu menu={activeMenu} onClose={() => setActiveMenu(null)} />
      ) : null}
      {activeMenu === "mobile" ? (
        <MobileMenu
          onClose={() => setActiveMenu(null)}
          onSearch={() => setActiveMenu("search")}
        />
      ) : null}
      {activeMenu === "search" ? (
        <SearchOverlay onClose={() => setActiveMenu(null)} />
      ) : null}

      <main className="pt-[74px] lg:ml-[232px] lg:pt-0" id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <ContentPage title="About">
                <AboutPage />
              </ContentPage>
            }
          />
          <Route
            path="/contact"
            element={
              <ContentPage title="Contact">
                <ContactPage />
              </ContentPage>
            }
          />
          <Route
            path="/people"
            element={
              <ContentPage title="People" contact>
                <PeopleDirectoryPage />
              </ContentPage>
            }
          />
          <Route path="/people/:profileSlug" element={<PersonRoute />} />
          <Route
            path="/insights"
            element={
              <ContentPage title="Insights" contact>
                <InsightsDirectoryPage />
              </ContentPage>
            }
          />
          <Route
            path="/expertise/energy-extractives-foreign-investment"
            element={<Navigate to="/expertise/energy" replace />}
          />
          <Route
            path="/expertise/dispute-resolution"
            element={<Navigate to="/expertise/disputes" replace />}
          />
          <Route
            path="/expertise/financial-services-capital-markets"
            element={<Navigate to="/expertise/financial-services" replace />}
          />
          <Route
            path="/expertise/:expertiseSlug"
            element={<ExpertiseRoute />}
          />
          <Route path="/insights/:insightSlug" element={<InsightRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PageTitle />
      <HeroSection />
      <ExpertiseSection />
      <ProofSection />
      <PeopleSection />
      <InsightsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}

function ContentPage({
  title,
  contact = false,
  children,
}: {
  title: string;
  contact?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <PageTitle title={title} />
      {children}
      {contact ? <ContactSection /> : null}
      <SiteFooter />
    </>
  );
}

function PersonRoute() {
  const { profileSlug } = useParams();
  const person = people.find((entry) => entry.slug === profileSlug);
  if (!person) return <Navigate to="/people" replace />;
  return (
    <>
      <PageTitle title={person.name} />
      <LawyerProfilePage person={person} />
      <SiteFooter />
    </>
  );
}

function ExpertiseRoute() {
  const { expertiseSlug } = useParams();
  const detail = expertiseSlug ? expertiseDetails[expertiseSlug] : null;
  if (!detail) return <Navigate to="/#expertise" replace />;
  return (
    <>
      <PageTitle title={detail.title} />
      <ExpertiseDetailPage detail={detail} />
      <SiteFooter />
    </>
  );
}

function InsightRoute() {
  const { insightSlug } = useParams();
  const insight = insightItems.find((item) => item.slug === insightSlug);
  if (!insight) return <Navigate to="/insights" replace />;
  return (
    <>
      <PageTitle title={insight.title} />
      <InsightDetailPage insight={insight} />
      <SiteFooter />
    </>
  );
}

function PageTitle({ title }: { title?: string }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Ninewells`
      : "Ninewells | Nigerian legal counsel";
  }, [title]);
  return null;
}

export default App;
