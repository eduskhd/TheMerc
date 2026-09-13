# Project Status — The Merc Website

**Last updated:** 2026-09-13  
**Build status:** ✅ PASS (TypeScript clean, 0 errors, 13 pages)  
**Overall:** Production-ready MVP. Complete visual redesign applied ("Warm Modern Gastropub"). Blocked on client-provided Square URL.

---

## Feature Status

### Pages

| Page | Route | Status | Notes |
|---|---|---|---|
| Home | `/` | ✅ Complete | Hero, QuickInfo, Welcome, FoodDrink, UpcomingEvents, DakotaJoe, SocialFollow, VisitCTA sections |
| Menu | `/menu` | ✅ Complete | Tabbed interface (Pizza, Burgers, Good Eats, Coffee, Drinks). Needs real menu items entered. |
| Events | `/events` | ✅ Complete | Tonight detection, upcoming list. Current entries are placeholders. |
| Gallery | `/gallery` | ✅ Complete | Responsive grid. Static images in `/public/images/`. |
| About | `/about` | ✅ Complete | |
| Visit | `/visit` | ✅ Complete | Hours, phone, Google Maps embed, directions link |
| 404 | `/not-found` | ✅ Complete | Custom branded 404 |
| Sitemap | `/sitemap.xml` | ✅ Auto-generated | |
| Robots | `/robots.txt` | ✅ Auto-generated | `/api/` disallowed |

### Core Functionality

| Feature | Status | Blocker |
|---|---|---|
| Mobile responsive (320px–1920px) | ✅ Done | — |
| Mobile bottom navigation bar | ✅ Done | — |
| Live Open/Closed status (Central Time) | ✅ Done | — |
| SEO metadata (OG, Twitter cards) | ✅ Done | — |
| JSON-LD structured data | ✅ Done | — |
| Security HTTP headers (6) | ✅ Done | — |
| Favicon (SVG + ICO) | ✅ Done | — |
| Google Maps embed | ✅ Done | — |
| Social media links | ✅ Done | — |
| Order Online button | ⚠️ Placeholder URL | Client must provide Square URL |
| Sanity CMS | 🟡 Studio deployed, inactive on site | Wire site to Sanity when ready |
| Square Catalog API | ⚪ Stub only | Phase 2 |
| Square Checkout API | ⚪ Stub only | Phase 2 |
| Content-Security-Policy header | ⚪ Deferred | Requires nonce architecture |

### Content Status

| Content | Status | Action Needed |
|---|---|---|
| Business info (name, address, phone, hours) | ✅ Real data | — |
| Menu items | ⚠️ Partial | Fill in real items in `data/menu.ts` |
| Events | ⚠️ Placeholders | Replace with real schedule in `data/events.ts` |
| Gallery images | 🟡 Placeholder images | Replace with real photos |
| Social links | ✅ Real | @themercsodak, /SiouxRiverSpirits/ |

---

## Immediate Action Items (Client-Blocked)

1. **Square Order URL** — client provides live URL → update `NEXT_PUBLIC_SQUARE_ORDER_URL` in `.env.local`
2. **Menu items** — fill in `data/menu.ts` sections (Pizza, Burgers, Good Eats, Coffee, Drinks)
3. **Events** — replace placeholders in `data/events.ts` with real schedule
4. **Gallery photos** — replace `/public/images/` placeholders with real photos
5. **Email address** — add to `data/business.ts` contact section when confirmed

---

## Environment Status

| Variable | Value | Status |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | ⚠️ Must update to production domain |
| `NEXT_PUBLIC_SQUARE_ORDER_URL` | placeholder | ⚠️ Client must provide |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `1zqf04a9` | 🟡 Set, studio deployed at the-merc.sanity.studio |
| `SQUARE_ACCESS_TOKEN` | unset | ⚪ Phase 2 |
| `SQUARE_LOCATION_ID` | unset | ⚪ Phase 2 |

---

## Build & Quality Metrics

| Metric | Result |
|---|---|
| TypeScript errors | 0 |
| ESLint warnings | 0 |
| Production build | ✅ PASS |
| Console errors (runtime) | 0 |
| Console warnings (runtime) | 0 |
| Horizontal scroll (any viewport) | Fixed ✅ |
| npm audit (prod runtime) | 0 vulnerabilities |
| npm audit (build-time deps) | 16 (3 HIGH, 13 MOD) — all build-time only, non-exploitable at runtime. See KNOWN_ISSUES.md ISSUE-002 |
| Broken aria-labelledby refs | Fixed ✅ (RESOLVED-005) |
| Invalid aria-current="true" | Fixed ✅ (RESOLVED-006) |
| HSTS header | Fixed ✅ (RESOLVED-007) |
