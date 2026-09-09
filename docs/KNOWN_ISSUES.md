# Known Issues — The Merc Website

**Last updated:** 2026-09-08

Issues are ordered by severity. Update this file when issues are resolved or discovered.

---

## Open Issues

### HIGH — Square Order URL is a Placeholder

**ID:** ISSUE-001  
**Severity:** High (user-facing broken link)  
**Status:** Open — waiting on client  
**Affects:** All pages with "Order Online" button

**Description:**  
`NEXT_PUBLIC_SQUARE_ORDER_URL` in `.env.local` points to a placeholder Square site URL that returns 404. Every "Order Online" button on the site links to a broken page.

**Fix:**  
Client must provide the live Square Online Ordering URL. Update `NEXT_PUBLIC_SQUARE_ORDER_URL` in `.env.local` (dev) and Vercel environment variables (prod).

**Workaround:**  
None. Button is visible and functional but destination is broken.

---

### MEDIUM — npm Audit: 4 Vulnerabilities in Build-Time Dependencies

**ID:** ISSUE-002  
**Severity:** Medium (build tooling only — NOT production runtime)  
**Status:** Open — deferred (requires breaking changes)  
**Affects:** Build process only; no production runtime risk

**Description:**  
`npm audit` reports 4 vulnerabilities in transitive build-time dependencies:

| Package | Severity | Path | CVE |
|---|---|---|---|
| `js-yaml` | HIGH | `@sanity/cli` → ... → `js-yaml` | Arbitrary code execution via malicious YAML |
| `postcss` | HIGH | `next` → internal `postcss` | RegExp denial of service |
| `smol-toml` | MODERATE | `@sanity/cli` → ... → `smol-toml` | — |
| `uuid` | MODERATE | `@sanity/cli` → ... → `uuid` | — |

All 4 are in the `@sanity/cli` or Next.js internal build toolchain. They are NOT included in the production JavaScript bundle served to users. A visitor to the site cannot trigger these vulnerabilities.

**Fix options:**
- `js-yaml` / `smol-toml` / `uuid`: Would require downgrading `sanity` to v5 (breaking — Sanity v6 is installed)
- `postcss`: Would require upgrading to Next.js 16 beta (breaking — not stable)

**Decision:** Deferred. Document and revisit when Next.js 16 stable ships or Sanity CLI updates its sub-dependencies.

**Verification:** Run `npm audit --omit=dev` to confirm 0 production runtime vulnerabilities.

---

### MEDIUM — No Content-Security-Policy Header

**ID:** ISSUE-003  
**Severity:** Medium (defense-in-depth gap)  
**Status:** Open — deferred (architectural complexity)  
**Affects:** All pages

**Description:**  
No `Content-Security-Policy` header is set. This is the strongest XSS defense layer and is missing.

**Why deferred:**  
CSP requires nonces for inline scripts. Next.js App Router generates inline scripts (hydration, JSON-LD, `next/font`). Implementing CSP correctly requires:
1. A Next.js middleware that generates a nonce per request
2. All inline `<script>` tags must receive the nonce
3. `frame-src` must allow `maps.google.com` (for Maps embed)
4. `font-src` must allow Google Fonts domains

This is a non-trivial change that risks breaking hydration if done incorrectly.

**Fix:**  
Implement nonce-based CSP in `middleware.ts` following Next.js official CSP guide. Test thoroughly after implementing.

---

### LOW — Menu Items Are Empty Placeholders

**ID:** ISSUE-004  
**Severity:** Low (content, not technical)  
**Status:** Open — waiting on client  
**Affects:** `/menu` page

**Description:**  
Most menu categories in `data/menu.ts` have empty `items` arrays. The Menu page renders correctly but shows no items for most categories.

**Fix:** Fill in real menu items in `data/menu.ts` with name, description, and price.

---

### LOW — Events Are Placeholder Data

**ID:** ISSUE-005  
**Severity:** Low (content, not technical)  
**Status:** Open — waiting on client  
**Affects:** `/events` page, Home page UpcomingEvents section

**Description:**  
`data/events.ts` contains 3 placeholder events in September 2026. These will quickly become stale.

**Fix:** Replace with real upcoming events. Long-term: activate Sanity CMS for live event management.

---

### LOW — Gallery Images Are Placeholders

**ID:** ISSUE-006  
**Severity:** Low (content, not technical)  
**Status:** Open — waiting on client  
**Affects:** `/gallery` page

**Description:**  
Gallery images in `/public/images/` are placeholder images, not real photos of The Merc.

**Fix:** Replace with real photos from the venue. Long-term: use Sanity image CDN via Phase 2 CMS activation.

---

### INFO — Google Review Link Is Indirect

**ID:** ISSUE-007  
**Severity:** Info (minor UX)  
**Status:** Open — waiting on Google My Business listing  
**Affects:** Google Reviews link in footer/About

**Description:**  
The Google Reviews URL links to a Google Maps search for The Merc rather than a direct "Write a Review" link. The direct link requires the Google Place ID, which requires an active Google My Business listing.

**Fix:**  
1. Client verifies/creates Google My Business listing for The Merc
2. Find Place ID: `https://developers.google.com/maps/documentation/places/web-service/place-id`
3. Update `googleReviewUrl` in `data/business.ts` to: `https://search.google.com/local/writereview?placeid=PLACE_ID`

---

## Resolved Issues

| ID | Description | Resolved | Fix |
|---|---|---|---|
| RESOLVED-001 | Horizontal scroll at 320px mobile | 2026-09-08 | Added `overflow-x: hidden` to `html` in globals.css; changed QuickInfo button row to `flex-wrap` |
| RESOLVED-002 | favicon.ico 404 on every page | 2026-09-08 | Created `public/favicon.ico` + `public/favicon.svg`; updated layout.tsx metadata |
| RESOLVED-003 | Next.js scroll-behavior warning in console | 2026-09-08 | Added `data-scroll-behavior="smooth"` to `<html>` in layout.tsx |
| RESOLVED-004 | Google Reviews URL was broken placeholder | 2026-09-08 | Replaced with Google Maps search URL that shows The Merc's business card |
