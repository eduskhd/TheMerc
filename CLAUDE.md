# The Merc — Project Context

> **Living documentation.** Update this file whenever a significant change is made to the project.
> For detailed information, see the `/docs` directory.

---

## Project Overview

Marketing and presence website for **The Merc**, a gastropub, coffee bar, and live music venue located at 113 E 2nd Ave, Flandreau, South Dakota 57028.

The site is a static Next.js 15 application. It has no user login, no shopping cart, and no database. All content is managed via static TypeScript data files. The site is designed to grow into a full Square-integrated ordering experience (Phase 2).

---

## Main Goals

1. Establish The Merc's online presence and brand identity
2. Display menu, events, gallery, hours, location, and contact info
3. Link to Square online ordering (when client provides live URL)
4. Support future Sanity CMS integration for content management (Phase 2)
5. Support future Square Catalog/Checkout API integration (Phase 2)

---

## Current Status: **Production-Ready MVP**

| Area | Status |
|---|---|
| Website core (all 6 pages) | ✅ Complete |
| Menu display | ✅ Complete (static data) |
| Events display | ✅ Complete (static data) |
| Gallery | ✅ Complete (static images) |
| Visit / Hours / Map | ✅ Complete |
| About page | ✅ Complete |
| Mobile responsive | ✅ Complete |
| SEO / metadata | ✅ Complete |
| Structured data (JSON-LD) | ✅ Complete |
| Security headers | ✅ Complete |
| Favicon | ✅ Complete |
| Square Order URL | ⚠️ Placeholder — client must provide live URL |
| Sanity CMS | 🟡 Studio deployed (https://the-merc.sanity.studio), not wired to site yet |
| Square API integration | ⚪ Stubs ready, not active |

---

## Architecture

```
Browser
  ↓
Next.js 15 App Router (Static Generation + ISR)
  ↓
Static TypeScript data files (menu, events, business, socials)
  ↓
External services (read-only links):
  - Square ordering page (external URL)
  - Google Maps (embed + links)
  - Sanity CMS (not active)
  - Square API (stubs, not active)
```

No backend server. No database. No authentication. All pages are statically generated.

---

## Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 3, Framer Motion, Lucide React  
**Fonts:** Inter + Playfair Display (Google Fonts, via `next/font`)  
**CMS (inactive):** Sanity v6 + next-sanity  
**Payments (stubs):** Square (API routes prepared, not connected)  
**Build/Deploy:** Vercel-ready (static + ISR), `npm run build`

---

## Important Directories

```
/app                    Next.js App Router pages and layouts
  /api/square           Server-side Square API stubs (future)
/components
  /home                 Home page section components
  /layout               Navbar, Footer, MobileBottomBar
  /menu                 MenuPageClient (tabbed menu)
  /ui                   Shared UI: SectionHeader, OrderOnlineButton, etc.
/config                 Shared config: navigation.ts (nav links)
/data                   Static content: business.ts, menu.ts, events.ts, socials.ts
/docs                   Project docs + client guides (CLIENT-GUIDE-*.md)
/lib/sanity             Sanity client + queries (inactive)
/lib/square             Square config: config.ts (order URL)
/public/images          Site images organized by category:
  /hero                 Hero background image
  /menu                 Menu section images
  /venue                Venue/food/atmosphere photos
  /gallery              Gallery grid images + yahoo_photo_*.jpg
  og-image.jpg          OG/social share image (stays at root)
/studio                 Sanity Studio (separate app, not deployed)
```

---

## Core Features

- ✅ 6-page site: Home, Menu, Events, Gallery, About, Visit
- ✅ Custom 404 page
- ✅ Responsive design (320px → 1920px)
- ✅ Mobile bottom navigation bar
- ✅ Live Open/Closed status (Central Time)
- ✅ Interactive tabbed menu (Pizza, Burgers, Good Eats, Coffee, Drinks)
- ✅ Events listing with tonight detection
- ✅ Google Maps embed on Visit page
- ✅ Sitemap + robots.txt auto-generated
- ✅ OG tags + Twitter cards
- ✅ JSON-LD structured data (Restaurant/BarOrPub/LocalBusiness)
- ⚠️ Order Online button — active but Square URL is a placeholder (returns 404)
- 🟡 Sanity CMS — Project ID configured (1zqf04a9), studio not yet deployed
- ⚪ Square Catalog API — stub only
- ⚪ Square Checkout API — stub only

---

## Important Files

| File | Purpose |
|---|---|
| `data/business.ts` | Address, phone, hours, features — edit to update business info |
| `data/events.ts` | Events list — add/remove events here |
| `data/menu.ts` | Menu sections and items |
| `data/socials.ts` | Social media URLs and handles |
| `app/layout.tsx` | Root layout, metadata, JSON-LD, fonts |
| `next.config.ts` | Security headers, image config |
| `app/globals.css` | Design system: colors, buttons, badges, typography |
| `tailwind.config.ts` | Brand tokens: colors, fonts, spacing, shadows |
| `.env.local` | Environment variables (not committed) |
| `.env.example` | Template for environment variables |

---

## APIs

### Internal (Next.js API Routes)
| Route | Method | Status | Purpose |
|---|---|---|---|
| `/api/square/catalog` | GET | Stub (503 if unconfigured) | Future: fetch Square menu catalog |
| `/api/square/checkout` | POST | Stub (503 if unconfigured) | Future: create Square checkout session |

### External
- **Square Online Ordering:** `NEXT_PUBLIC_SQUARE_ORDER_URL` — links to external Square ordering page
- **Google Maps:** embed + links (static, no API key required)
- **Google Fonts:** loaded via `next/font` at build time
- **Sanity CMS:** `NEXT_PUBLIC_SANITY_PROJECT_ID` — falls back to static data if empty

---

## Environment Variables

```bash
# Site URL (used for OG tags and sitemap)
NEXT_PUBLIC_SITE_URL=https://themercsd.com

# Square — public ordering page URL (client must provide)
NEXT_PUBLIC_SQUARE_ORDER_URL=

# Square — Phase 2 API (server-side only, never NEXT_PUBLIC_)
SQUARE_ACCESS_TOKEN=
SQUARE_LOCATION_ID=
SQUARE_ENVIRONMENT=sandbox

# Square — Phase 2 client-side SDK (semi-public)
NEXT_PUBLIC_SQUARE_APPLICATION_ID=

# Sanity CMS — Phase 2
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```

**Security rule:** `SQUARE_ACCESS_TOKEN` must NEVER use the `NEXT_PUBLIC_` prefix.

---

## External Services

| Service | Status | Purpose |
|---|---|---|
| Square (ordering URL) | ⚠️ Placeholder | Online ordering link |
| Square (API) | ⚪ Configured, inactive | Future catalog + checkout |
| Google Maps | ✅ Active | Embed + direction links |
| Google Fonts | ✅ Active | Inter + Playfair Display |
| Sanity CMS | 🟡 Studio deployed (the-merc.sanity.studio), not wired to site | Content management |
| Instagram | ✅ Linked | @themercsodak |
| Facebook | ✅ Linked | /SiouxRiverSpirits/ |
| TikTok | ✅ Linked | @themercsodak |

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build + type check
npm run start        # Serve production build
npm run lint         # ESLint check
```

---

## Known Issues

See `docs/KNOWN_ISSUES.md` for full detail.

**Summary:**
- Square Order URL is a placeholder (404) — client must provide correct URL
- npm audit reports HIGH vulnerabilities in build-time transitive deps (sanity CLI, Next.js internal postcss) — not exploitable in production, fix requires breaking version changes
- No Content-Security-Policy header — complex with Next.js + Google Fonts/Maps, deferred

---

## Do Not Break

- **`data/business.ts` types** — referenced across many components; changing structure breaks TypeScript
- **`SQUARE_ACCESS_TOKEN` server-side isolation** — must never move to `NEXT_PUBLIC_`
- **Static data fallback** — Sanity client always falls back to static files when `isSanityConfigured = false`; preserve this pattern
- **Security headers** in `next.config.ts` — do not remove
- **`overflow-x: hidden` on `html` element** in `globals.css` — prevents horizontal scroll on narrow viewports; required
- **`rel="noopener noreferrer"`** on all external links — do not remove
- **Mobile bottom bar spacer** in Footer (`h-16 lg:hidden`) — removes it and content hides behind MobileBottomBar

---

## Technical Decisions

See `docs/DECISIONS.md` for full detail.

**Summary:**
- Static TypeScript data files instead of a database (no backend needed for MVP)
- Sanity CMS wired but inactive — falls back to static data (zero-config deployment)
- Square ordering via external URL link (Phase 1) before API integration (Phase 2)
- `lg:` breakpoint (1024px) for desktop nav — gives tablet a comfortable mobile experience
- ISR on events (60s) and gallery (1h) pages for future CMS compatibility

---

## Current Priorities

1. Client provides correct Square Order URL → update `NEXT_PUBLIC_SQUARE_ORDER_URL`
2. Populate real events in `data/events.ts` (current entries are placeholders)
3. Complete menu items in `data/menu.ts` (most sections have empty items arrays)
4. Activate Sanity CMS when client is ready to manage content
5. Phase 2: Square API integration (catalog + checkout)

---

## Next Recommended Steps

1. **Immediate:** Replace Square placeholder URL in `.env.local`
2. **Short-term:** Enter full menu items in `data/menu.ts`
3. **Short-term:** Replace placeholder events in `data/events.ts` with real schedule
4. **Medium-term:** Set up Sanity project, enter `NEXT_PUBLIC_SANITY_PROJECT_ID`
5. **Medium-term:** Deploy to Vercel, set production `NEXT_PUBLIC_SITE_URL`
6. **Long-term:** Square API Phase 2 (catalog display + online checkout)
7. **Long-term:** Implement Content-Security-Policy with nonces

---

## Skills Workflow

Permanent skills are configured in `.claude/skills/`. Full documentation: `docs/CLAUDE_SKILLS.md`.

| Trigger | Skill |
|---|---|
| Page, component, or data change | `project-qa` |
| Frontend redesign or layout change | `frontend-visual-qa` + `frontend-ui` |
| Auth, headers, env vars, external URLs | `project-security` |
| New npm dependency added | `dependency-security` |
| Before any deployment or client demo | `production-readiness` |
| Browser automation / E2E testing | `playwright` |

Use cascading skills for significant changes:
- Major feature → `project-qa` → `project-security` if it touches env/API → `production-readiness` if pre-deploy
- Frontend redesign → `frontend-ui` → `frontend-visual-qa` → `project-qa`

Avoid running all skills after a trivial change. Match scope to change size.

---

## Documentation

| Document | Purpose |
|---|---|
| `docs/PROJECT_STATUS.md` | Current feature and task status |
| `docs/ARCHITECTURE.md` | Technical architecture in detail |
| `docs/CHANGELOG.md` | History of significant changes |
| `docs/ROADMAP.md` | Development phases and future plans |
| `docs/KNOWN_ISSUES.md` | Bugs and known problems |
| `docs/DECISIONS.md` | Technical decisions and their rationale |
| `docs/CLAUDE_SKILLS.md` | Active skills, plugins, and workflow map |

---

> **Maintenance rule:** Whenever a significant change is made to code, architecture, features, dependencies, integrations, configuration, or project status — update the relevant docs before considering the task complete.

**Last updated:** 2026-09-13
