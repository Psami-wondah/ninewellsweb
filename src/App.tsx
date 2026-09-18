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
import { ExpertisePage } from "./components/pages/ExpertisePage";
import { LawyerProfilePage } from "./components/pages/LawyerProfilePage";
import { PeopleDirectoryPage } from "./components/pages/PeopleDirectoryPage";
import { AboutPage } from "./components/pages/AboutPage";
import { CareersPage } from "./components/pages/CareersPage";
import { ContactPage } from "./components/pages/ContactPage";
import { InsightDetailPage } from "./components/pages/InsightDetailPage";
import { InsightsDirectoryPage } from "./components/pages/InsightsDirectoryPage";
import { TechnologyPage } from "./components/pages/TechnologyPage";
import { PageMeta } from "./components/seo/PageMeta";
import { ContactSection } from "./components/sections/ContactSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { HeroSection } from "./components/sections/HeroSection";
import { InsightsSection } from "./components/sections/InsightsSection";
import { PeopleSection } from "./components/sections/PeopleSection";
import { ProofSection } from "./components/sections/ProofSection";
import { SiteFooter } from "./components/sections/SiteFooter";
import { people } from "./data/people";
import {
  expertiseDetails,
  insightItems,
} from "./data/siteContent";
import {
  buildInsightJsonLd,
  buildPersonJsonLd,
  getInsightSeo,
  getPersonSeo,
  getPracticeSeo,
  seoPages,
} from "./data/seo";
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

      <main
        className="app-main pt-[74px] xl:ml-[216px] xl:pt-0 2xl:ml-[232px]"
        id="main-content"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <ContentPage seo={seoPages.about}>
                <AboutPage />
              </ContentPage>
            }
          />
          <Route
            path="/technology"
            element={
              <ContentPage seo={seoPages.technology}>
                <TechnologyPage />
              </ContentPage>
            }
          />
          <Route
            path="/expertise"
            element={
              <ContentPage seo={seoPages.expertise}>
                <ExpertisePage />
              </ContentPage>
            }
          />
          <Route
            path="/careers"
            element={
              <ContentPage seo={seoPages.careers}>
                <CareersPage />
              </ContentPage>
            }
          />
          <Route
            path="/contact"
            element={
              <ContentPage seo={seoPages.contact}>
                <ContactPage />
              </ContentPage>
            }
          />
          <Route
            path="/people"
            element={
              <ContentPage seo={seoPages.people} contact>
                <PeopleDirectoryPage />
              </ContentPage>
            }
          />
          <Route path="/people/:profileSlug" element={<PersonRoute />} />
          <Route
            path="/intelligence"
            element={
              <ContentPage seo={seoPages.intelligence} contact>
                <InsightsDirectoryPage />
              </ContentPage>
            }
          />
          <Route path="/insights" element={<Navigate to="/intelligence" replace />} />
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
          <Route
            path="/intelligence/:insightSlug"
            element={<InsightRoute />}
          />
          <Route
            path="/insights/:insightSlug"
            element={<LegacyInsightRedirect />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PageMeta config={seoPages.home} />
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
  seo,
  contact = false,
  children,
}: {
  seo: (typeof seoPages)[keyof typeof seoPages];
  contact?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <PageMeta config={seo} />
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
      <PageMeta config={{ ...getPersonSeo(person), jsonLd: buildPersonJsonLd(person) }} />
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
      <PageMeta config={getPracticeSeo(detail)} />
      <ExpertiseDetailPage detail={detail} />
      <SiteFooter />
    </>
  );
}

function InsightRoute() {
  const { insightSlug } = useParams();
  const insight = insightItems.find((item) => item.slug === insightSlug);
  if (!insight) return <Navigate to="/intelligence" replace />;
  return (
    <>
      <PageMeta config={{ ...getInsightSeo(insight), jsonLd: buildInsightJsonLd(insight) }} />
      <InsightDetailPage insight={insight} />
      <SiteFooter />
    </>
  );
}

function LegacyInsightRedirect() {
  const { insightSlug } = useParams();
  return <Navigate to={`/intelligence/${insightSlug ?? ""}`} replace />;
}

export default App;
