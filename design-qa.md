# Design QA

- Source visual truth: `src/assets/reference-option-2.png`
- Source mockup pixels: 1373 × 1146
- Intended implementation viewport: 1440 × 1200 CSS px at device scale factor 1
- Implementation URL: local Vite preview
- Implementation screenshot: unavailable
- States requiring comparison: homepage desktop light/dark, Expertise and Industries mega-menus, people directory with filters, lawyer profile, expertise detail, mobile light/dark, mobile navigation and search
- Density normalization: not performed because no browser-rendered implementation capture was available
- State: implementation complete; visual comparison blocked

**Findings**

- [P0] Browser-rendered evidence is unavailable
  - Location: all implemented routes and responsive states.
  - Evidence: the source mockup opens correctly, the local preview responds with HTTP 200 for the homepage, people directory, lawyer profile and expertise detail routes, but the in-app browser runtime reports no available browser surface.
  - Impact: crop, wrapping, breakpoint behaviour, interaction presentation, focus order, browser console output and source-to-implementation fidelity cannot be accepted from code inspection alone.
  - Fix: connect the in-app browser or approve a Playwright CLI fallback; capture every required state and run the comparison loop before declaring visual QA passed.

**Required Fidelity Surfaces**

- Fonts and typography: Source Serif 4 and Inter are bundled locally and map to the brief; browser wrapping, antialiasing and optical balance remain unverified.
- Spacing and layout rhythm: the asymmetrical editorial homepage, varied section compositions, structured detail pages and responsive grids are implemented without generic rounded cards; rendered breakpoints remain unverified.
- Colors and visual tokens: the light palette now uses white `#FFFFFF`, cool paper `#F7F8F8`, navy `#002060`, deep navy `#001641`, teal `#32A5A5`, accessible teal `#126F72`, dark-surface teal `#78D6D2` and slate `#44516A`. Measured contrast includes navy on white at 15.27:1, slate on white at 7.98:1, slate on paper at 7.50:1, teal-dark on white at 5.93:1, dark-surface teal on deep navy at 10.37:1, and paper on dark navy at 17.61:1.
- Image quality and asset fidelity: the supplied vector logo, three 1122 × 1402 editorial portraits and 1672 × 941 infrastructure photograph are used directly; rendered crops and sharpness remain unverified.
- Copy and content: homepage copy, people-finder content, lawyer biography, expertise capabilities, representative experience, relevant people, industries, perspectives and contact conversion content are implemented.
- Accessibility: semantic landmarks, labels, visible focus, skip link, reduced-motion support, 44px-class touch targets, modal focus containment, Escape handling and contrast-safe text tokens are implemented; keyboard and zoom behaviour remain unverified in a browser.

**Full-view Comparison Evidence**

- Source visual inspected: yes.
- Browser-rendered homepage screenshot: no; blocked by unavailable browser surface.
- Browser-rendered secondary-page screenshots: no; blocked by unavailable browser surface.
- Result: no visual fidelity claim is made.

**Focused Region Comparison Evidence**

- Navigation, hero typography, portrait crop, filters, profile masthead, expertise capabilities, contact section, dark theme and mobile menu all require browser captures.
- No focused comparison was accepted because the implementation could not be captured.

**Engineering Verification**

- `yarn build`: passed.
- `yarn lint`: passed.
- Local route health checks: HTTP 200 for `/`, `/people`, `/people/kwame-adebayo` and `/expertise/corporate-commercial`.
- People search and five filter dimensions are implemented with a reset and empty state.
- Mega-menu practice links, homepage people links, lawyer profiles, expertise details, email/telephone actions, theme persistence, mobile navigation and mobile search routing are connected.

**Primary Interactions Tested**

- TypeScript compilation and lint validation: passed.
- Route response checks: passed.
- Browser click, keyboard, responsive and console testing: blocked.

**Implementation Checklist**

1. Capture desktop light and dark homepage states at 1440 × 1200.
2. Capture Expertise and Industries mega-menus and search overlay.
3. Exercise people search, every filter dimension, reset and empty state.
4. Capture the people directory, lawyer profile and expertise detail at desktop and 390 × 844 mobile.
5. Test focus containment, Escape handling, theme persistence, reduced motion and console output.
6. Compare the normalized implementation capture with `src/assets/reference-option-2.png`, fix any P0/P1/P2 drift and repeat until passed.

**Comparison History**

- Source-level implementation pass: secondary routes, functional directory filters, route-connected navigation, stronger light-theme contrast and dialog focus handling were added.
- Visual comparison pass: blocked before first capture because no browser surface is available.

final result: blocked
