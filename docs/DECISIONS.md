# Technical Decisions — The Merc Website

**Last updated:** 2026-09-08

A record of significant technical decisions, their rationale, and tradeoffs. Helps future contributors understand *why* the code is the way it is.

---

## DECISION-001: Static TypeScript Data Files Instead of a Database

**Decision:** All site content (menu, events, hours, business info, socials) lives in `data/*.ts` TypeScript files, not a database or external API.

**Rationale:**
- Zero infrastructure cost for MVP
- No backend server needed
- Content is type-safe and validated at build time
- Trivially version-controlled with git
- Zero latency — all data is available at build time

**Tradeoffs:**
- Client cannot update content without a developer and a code deploy
- Mitigated by Phase 2 plan: Sanity CMS activation makes content editable without code

**Alternatives considered:** PostgreSQL, Supabase, Firebase — all require backend infrastructure not warranted for a static marketing site.

---

## DECISION-002: Sanity CMS Wired But Inactive (Static Data Fallback)

**Decision:** Sanity v6, `next-sanity`, and `@sanity/image-url` are installed as dependencies. The Sanity client in `lib/sanity/` checks `isSanityConfigured` and falls back to static `data/*.ts` files when `NEXT_PUBLIC_SANITY_PROJECT_ID` is empty.

**Rationale:**
- Enables zero-config deployment for Phase 1 (no Sanity credentials needed)
- When client is ready for CMS, activation is a configuration change, not a code rewrite
- Static fallback means the site never breaks if Sanity is down or misconfigured
- ISR on events (60s) and gallery (1h) pages means they're CMS-ready when Sanity activates

**Tradeoffs:**
- `sanity` package is ~large; adds to `node_modules` even when inactive
- npm audit vulnerabilities in `@sanity/cli` transitive deps (see KNOWN_ISSUES.md ISSUE-002)

---

## DECISION-003: Square Ordering via External URL (Phase 1) Before API (Phase 2)

**Decision:** "Order Online" buttons link to `NEXT_PUBLIC_SQUARE_ORDER_URL` (an external Square-hosted ordering page) rather than an in-site checkout built on the Square API.

**Rationale:**
- External Square ordering page requires zero development — client configures it in Square dashboard
- Significantly simpler than building a cart + checkout flow
- Square API stubs (`/api/square/catalog`, `/api/square/checkout`) are already scaffolded for Phase 2
- Allows the site to go live immediately once client provides the URL

**Tradeoffs:**
- User is redirected off-site to complete order (worse UX)
- No control over the ordering page design
- Mitigated by Phase 2: in-site checkout replaces the redirect

---

## DECISION-004: `lg:` Breakpoint (1024px) for Desktop Navigation

**Decision:** The mobile bottom bar is shown below `lg:` (1024px); the desktop top navbar is shown at `lg:` and above.

**Rationale:**
- Tablets (768px–1023px) get the mobile bottom bar experience, which works well on touch devices
- Desktop (1024px+) gets the traditional top navbar
- 1024px is a natural breakpoint: most iPad landscape and up

**Tradeoffs:**
- Large tablets in landscape (1024px+) see the desktop nav — acceptable

---

## DECISION-005: `overflow-x: hidden` on BOTH `html` AND `body`

**Decision:** Both `html` and `body` elements have `overflow-x: hidden` in `globals.css`.

**Rationale:**
- `body: overflow-x: hidden` alone was insufficient — the `html` element (document root) had `overflow-x: visible`, which allowed actual horizontal scrollability even though `body` content couldn't overflow visually
- Root cause was QuickInfo buttons (`whitespace-nowrap`) pushing content to 396px on 320px viewport
- Added fix at both levels: `flex-wrap` on the button row (prevents overflow), `overflow-x: hidden` on `html` (catches any future overflow)

**Verification:** After fix, `document.documentElement.scrollWidth = 314px` ≤ `window.innerWidth = 320px` → `canScrollX: false` ✓

---

## DECISION-006: Security Headers in `next.config.ts` (Not Middleware)

**Decision:** HTTP security headers are applied via `headers()` in `next.config.ts`, not `middleware.ts`.

**Rationale:**
- `next.config.ts` headers are applied at the Next.js runtime level, covering all routes
- No middleware overhead per request
- Simpler configuration, easier to audit

**Tradeoffs:**
- Cannot generate per-request nonces (needed for Content-Security-Policy)
- When CSP is implemented (Phase 3 prerequisite), it will need to move to `middleware.ts`

---

## DECISION-007: No `NEXT_PUBLIC_` Prefix for Square Access Token

**Decision:** Square API credentials (`SQUARE_ACCESS_TOKEN`, `SQUARE_LOCATION_ID`) must NEVER use the `NEXT_PUBLIC_` prefix.

**Rationale:**
- `NEXT_PUBLIC_` variables are inlined into the client-side JavaScript bundle and visible to anyone who inspects the page source
- Square Access Tokens are live payment credentials — exposure would allow unauthorized charges
- Only the Square Application ID (`NEXT_PUBLIC_SQUARE_APPLICATION_ID`) is semi-public (needed for client-side Square Web Payments SDK)

**Enforcement:** API routes in `/api/square/` check for `process.env.SQUARE_ACCESS_TOKEN` (server-side only) and return 503 if unset, preventing accidental exposure.

---

## DECISION-008: Google Fonts via `next/font` (Not CDN)

**Decision:** Inter and Playfair Display are loaded via `next/font` (build-time), not via a `<link>` tag to Google Fonts CDN.

**Rationale:**
- No runtime network requests to Google Fonts → no privacy concern, no latency
- Fonts are self-hosted from the same domain → eliminates cross-origin font requests (helpful for future CSP)
- No FOUT (Flash of Unstyled Text) — fonts are available immediately
- `next/font` automatically optimizes font loading with `font-display: swap`

---

## DECISION-009: ISR on Events and Gallery (Not Static)

**Decision:** Events page uses `revalidate = 60` (1 minute); Gallery page uses `revalidate = 3600` (1 hour). All other pages are fully static.

**Rationale:**
- Events change frequently (nightly, weekly); 60-second freshness is appropriate
- Gallery changes rarely; 1-hour freshness is appropriate
- When Sanity CMS activates, these pages will automatically pick up new content on revalidation without a full redeploy
- Home page shows upcoming events inline — it's static because it only shows a subset that changes slowly

**Tradeoffs:**
- Slight increase in server compute vs. fully static, but negligible at this traffic scale

---

## DECISION-010: No Server-Side Rendering (No `'use server'` Directives Beyond API Routes)

**Decision:** All page components are React Server Components generating static HTML. No Server Actions. Only `MenuPageClient.tsx` is a Client Component (for tab state).

**Rationale:**
- Marketing site has no form submissions or user-specific server-side logic at Phase 1
- Static generation is faster, cheaper, and more cacheable than SSR
- `MenuPageClient.tsx` must be a Client Component because it manages interactive tab state — everything else is read-only display

**Tradeoffs:**
- When Square checkout is added (Phase 3), checkout flow will require Server Actions or API route calls
