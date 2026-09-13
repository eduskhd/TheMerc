# Changelog — The Merc Website

All significant changes to this project are documented here. Ordered most-recent first.

---

## 2026-09-13 — Professional Audit: Accessibility, Security & Skills System

### Security
- **Added HSTS header** — `Strict-Transport-Security: max-age=31536000; includeSubDomains` in `next.config.ts` (was missing)
- **Expanded Permissions-Policy** — added `payment=(), usb=(), bluetooth=(), serial=(), hid=()` to the existing deny list (was only camera, microphone, geolocation)
- Verified API stubs return 503 correctly when not configured — no accidental exposure

### Accessibility (WCAG 2.1 AA fixes)
- **Fixed broken `aria-labelledby` references** — three home page sections (`Welcome`, `FoodDrink`, `UpcomingEvents`) referenced heading IDs (`welcome-heading`, `food-drink-heading`, `events-heading`) that were never rendered to the DOM. Root cause: `SectionHeader` component lacked an `id` prop. Fixed by adding `id?: string` to `SectionHeader` and passing the correct IDs from each section.
- **Fixed invalid `aria-current="true"`** — `app/visit/page.tsx` hours table used the string `"true"` as an `aria-current` value. The correct WAI-ARIA value for the current calendar row is `"date"`. Fixed.

### Code Quality
- Identified dead code: `components/ui/PlaceholderImage.tsx` is never imported. Documented as ISSUE-008 in `KNOWN_ISSUES.md`.

### Tooling
- Created Claude Code skills system (`.claude/skills/`) with 4 new project skills: `project-qa`, `project-security`, `production-readiness`, `dependency-security`
- Updated `CLAUDE.md` with Skills Workflow trigger table
- Created `docs/CLAUDE_SKILLS.md` — full documentation for all 7 skills (3 global + 4 project)

### Documentation
- Updated `docs/KNOWN_ISSUES.md`: corrected npm audit count (4 → 16; same root packages, more CVEs published); added ISSUE-008 (dead code); added RESOLVED-005/006/007
- Updated last-updated dates throughout docs

---

## 2026-09-08 — Professional Audit & Documentation System

### Security
- Added 5 HTTP security headers to `next.config.ts`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-DNS-Prefetch-Control`
- Verified `SQUARE_ACCESS_TOKEN` isolation (server-side only, never in `NEXT_PUBLIC_`)
- Verified all external links have `rel="noopener noreferrer"`
- Verified `dangerouslySetInnerHTML` used only for JSON-LD (no user input path)

### Bug Fixes
- **Fixed horizontal scroll at 320px mobile** — root cause: `html` element had `overflow-x: visible` despite `body: overflow-x: hidden`. Fix: added `overflow-x: hidden` to `html` in `globals.css`. Secondary fix: changed QuickInfo button row from `flex` to `flex-wrap` so buttons wrap instead of overflowing.
- **Fixed favicon.ico 404** — created `public/favicon.ico` (16×16 binary ICO, amber M on dark background) and `public/favicon.svg`. Updated `app/layout.tsx` metadata to SVG-first order.
- **Fixed Next.js scroll-behavior warning** — added `data-scroll-behavior="smooth"` attribute to `<html>` element in `app/layout.tsx`.

### Accessibility & SEO
- Verified all images have `alt` attributes
- Verified heading hierarchy is logical on all pages
- Verified JSON-LD structured data is present and valid
- Fixed Google Reviews URL (was broken placeholder, now maps search URL)

### Documentation
- Created `CLAUDE.md` at project root — AI assistant context
- Created `docs/PROJECT_STATUS.md` — feature and task status
- Created `docs/ARCHITECTURE.md` — technical architecture with Mermaid diagrams
- Created `docs/CHANGELOG.md` — this file
- Created `docs/ROADMAP.md` — development phases and future plans
- Created `docs/KNOWN_ISSUES.md` — documented bugs and known issues
- Created `docs/DECISIONS.md` — technical decision log

---

## 2026-08-XX — MVP Build (Initial)

### Features
- Built all 6 public pages: Home, Menu, Events, Gallery, About, Visit
- Built custom 404 page
- Built mobile bottom navigation bar (`MobileBottomBar.tsx`)
- Built desktop navbar (`Navbar.tsx`)
- Built tabbed menu interface (`MenuPageClient.tsx`)
- Built events listing with tonight detection
- Built Open/Closed status indicator (Central Time)
- Built Google Maps embed on Visit page
- Built SocialFollow section with Instagram, Facebook, TikTok, Untappd, Linktree

### Data Layer
- Created `data/business.ts` with real business info, hours, helpers
- Created `data/events.ts` with event schema and helper functions
- Created `data/menu.ts` with menu section schema
- Created `data/socials.ts` with social media URLs

### Infrastructure
- Set up Next.js 15 App Router with TypeScript
- Configured Tailwind CSS with custom brand tokens
- Configured `next/font` for Inter + Playfair Display (no runtime font requests)
- Set up JSON-LD structured data (Restaurant, BarOrPub, LocalBusiness)
- Set up auto-generated sitemap (`app/sitemap.ts`)
- Set up auto-generated robots.txt (`app/robots.ts`) — disallows `/api/`
- Set up ISR: events (60s), gallery (1h)
- Added OG tags and Twitter card metadata

### Integrations (Stubs)
- Scaffolded `/api/square/catalog` GET route (503 until configured)
- Scaffolded `/api/square/checkout` POST route (503 until configured)
- Wired Sanity client in `lib/sanity/` — falls back to static data when `NEXT_PUBLIC_SANITY_PROJECT_ID` is empty
- Added `.env.example` documenting all environment variables

---

> **Maintenance rule:** Add an entry to this file for every significant change — features, bug fixes, security changes, infrastructure changes, dependency updates.
