# Changelog — The Merc Website

All significant changes to this project are documented here. Ordered most-recent first.

---

## 2026-09-22 — Animation System, Accessibility & UX Polish

### Animation (15 plans via `/improve-animations`)

**Performance**
- Replaced `transition: all` with property-specific transitions on all three button classes (`btn-primary`, `btn-secondary`, `btn-ghost`) and navbar scroll state — eliminates off-GPU property animation on every interaction and every scroll tick
- Navbar: `transition-all duration-400` → `transition-[background-color,border-color,box-shadow] duration-300`; `duration-400` was a non-existent Tailwind token silently falling back to 150ms

**Accessibility**
- `prefers-reduced-motion` block replaced from nuclear (`transition-duration: 0.01ms !important` on `*`) to surgical — kills movement and looping animations, preserves color/opacity feedback on all interactive elements
- All hover `transform: translateY` lifts (buttons, cards) gated behind `@media (hover: hover) and (pointer: fine)` — prevents tap-flash on touch devices

**Motion quality**
- Mobile menu open/close animated with Framer Motion `AnimatePresence` + `motion.div` — `opacity + y: -8` ease-out 200ms; was a hard-cut
- `scale(0.97)` press feedback added to all button `:active` states
- `.card:hover` transition easing `ease` → `var(--ease-out)` (cubic-bezier(0.23, 1, 0.32, 1)) for translateY movement
- Image hover durations reduced: Welcome `700ms` → `300ms`, FoodDrink/UpcomingEvents/Gallery `500ms` → `300ms`; image scale hovers gated behind `pointer: fine`
- SocialFollow icon `scale-110` → `scale-105` with pointer gate and explicit `duration-200`
- Infinite `animate-pulse` removed from Open/Closed indicator dot and Tonight event dot

**Tokens and system**
- Easing tokens added to `:root`: `--ease-out`, `--ease-in-out`, `--ease-drawer`
- Duration tokens added to `:root`: `--duration-fast` (150ms), `--duration-base` (200ms), `--duration-slow` (300ms)
- Duplicate `glowPulse` keyframe reconciled — CSS globals value (28px/0.8) now canonical in `tailwind.config.ts`; dead `shimmer` and `slideRight` keyframes removed
- Gallery overlay `transition-all` → `transition-colors`
- `scale(0.96)` added to `fadeUp`/`fadeIn` `from` frames for physical entry feel

### Accessibility Fixes
- **Skip link focus indicator restored** — `focus:outline-none` removed from skip-to-content link in Navbar; global amber `:focus-visible` ring now applies
- **Hamburger touch target** — `p-2` (38px) → `p-3` (46px), meeting WCAG 2.5.5 recommended target size
- **Muted text contrast** — `merc.muted` token `#7A6A50` (~2.8:1) → `#9A8A6A` (~5.9:1 on merc-black); affects nav subtitle, section metadata, hours labels, card metadata throughout

### Typography
- All button font-size `0.8rem` (12.8px) → `0.875rem` (14px) — `btn-primary`, `btn-secondary`, `btn-ghost`
- `section-label` `0.7rem` (11.2px) → `0.75rem` (12px)

### UX / Content
- **Order Online CTA (P0 fix)** — all variants (`navbar`, `mobile`, `full`) now fall back to `tel:+16055730913` link when `NEXT_PUBLIC_SQUARE_ORDER_URL` is empty; no more disabled/greyed-out states or "Coming Soon" block
- **Out-of-towner value proposition** — VisitCTA now includes a second paragraph addressing road-trip visitors: I-29 proximity, award-winning pizza, live music
- **Section order** — `VisitCTA` moved before `SocialFollow` in home page; conversion CTA no longer interrupted by social section
- **VisitCTA background image** — `opacity-20` → `opacity-35`, dark overlay `/80` → `/65`; image now visible at ~12% effective opacity (was ~4%)
- **JSON-LD `sameAs`** — hardcoded Facebook/Instagram URLs replaced with `socials.ts` references; TikTok added; stays in sync when client updates social URLs
- **DakotaJoe icon** — `☕` Unicode emoji replaced with `<Coffee />` from Lucide — consistent with the site-wide icon system
- **Text selection** — `::selection` styled with amber brand tint (`rgba(212, 148, 58, 0.28)`) + cream text

### Build
- Zero TypeScript errors, zero ESLint warnings
- All 13 pages/routes compile clean

---

## 2026-09-13 — Complete Visual Redesign: Warm Modern Gastropub

### Design Direction
Full redesign replacing the cool-charcoal palette with a warm rich brown-black + amber gold + cream system ("Warm Modern Gastropub"). Goal: more joyful, energetic, and inviting — less dark-mode app, more neighbourhood gastropub.

### Design Tokens (`tailwind.config.ts`, `app/globals.css`)
- **New color palette** — warm brown-black bases (`#181410` dark, `#221C16` surface, `#2C2418` card), amber gold (`#D4943A` primary, `#F0A830` light, `#9A6520` dark), cream (`#F5EFE0`). All merc-border values now amber-tinted (`#3D3220`).
- **New `display-hero` class** — `clamp(3.5rem, 10vw, 8.5rem)` — dramatically larger than old `display-xl` for hero headings
- **Gradient buttons** — `btn-primary` uses `linear-gradient(135deg, amber → amber-light)` with lift-and-glow on hover
- **New shadows** — `warm`, `warm-lg`, `warm-xl`, `glow` (amber-tinted depth shadows)
- **New ambient decorators** — `bg-amber-glow`, amber gradient accent lines (h-px top/bottom of sections)
- **New animations** — `glow-pulse`, `slide-right`, `fade-up-slow` in keyframes + Tailwind animation utilities

### Layout Components
- **`Navbar`** — animated amber underline on active nav links; `Flandreau · SD` subtitle under wordmark; warmer scroll shadow; mobile menu has amber left-border indicator for active page
- **`MobileBottomBar`** — converted to `'use client'` with `usePathname()` active state; added Home nav item; amber top-border indicator per active page; `aria-current="page"` on active items
- **`QuickInfo`** — warm gradient background; amber accent lines top/bottom; improved grid layout with Open/Closed badge, Hours, Location, Phone, and Directions + Order Online CTA

### Home Sections
- **`Hero`** — `display-hero` heading (massive), warm amber radial glow atmosphere bottom-left, vignette sides, CTAs reordered (Order Online primary), feature pills with `backdrop-blur-sm`
- **`Welcome`** — warm gradient background (`#181410 → #221C16`), amber radial glow accent, pillar icon cards with amber hover state and glow
- **`FoodDrink`** — fixed hardcoded `#C4842A` pizza accent → `#D4943A` (new amber token)
- `DakotaJoe`, `UpcomingEvents`, `SocialFollow`, `VisitCTA`, `Footer` — verified use correct new tokens throughout

### Inner Pages
- **Page headers** (Menu, Events, Gallery, About, Visit) — replaced flat `bg-merc-surface` with warm gradient (`#1A1510 → #221C16`), added amber gradient accent lines top/bottom, added radial amber glow, semi-transparent image overlays now warmer
- **About** — fixed `#C4842A` → `#D4943A` in pillar accent and radial gradient decoration; hero image overlay now uses warm brown gradient

### Build
- Zero TypeScript errors, zero ESLint warnings
- All 13 pages/routes compile clean

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
