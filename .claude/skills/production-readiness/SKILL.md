---
name: production-readiness
description: >-
  Pre-deployment production readiness checklist for The Merc website. Verifies
  build success, TypeScript, SEO, security headers, external service links,
  Square URL placeholder status, performance signals, and accessibility basics.
  Emits a final verdict: NOT READY / ALPHA READY / PRODUCTION READY.
---

# Production Readiness — The Merc Website

Systematic pre-deployment gate for a **static Next.js 15 site**. Run this
before any client demo, staging deploy, or go-live push.

This skill audits only — it does not deploy, push, or modify config files
without explicit user authorisation.

---

## Phase 1: Build & Type Safety

```bash
npm run build
```

- [ ] Build exits 0 (no errors)
- [ ] TypeScript compilation succeeds (no type errors)
- [ ] ESLint passes (`npm run lint`)
- [ ] No `any` types introduced in `data/` files (checked by tsc)
- [ ] `tsconfig.tsbuildinfo` reflects a clean build

If build fails → verdict is **NOT READY** regardless of other checks.

---

## Phase 2: Environment Variables

- [ ] `.env.local` exists with production values (not committed to git)
- [ ] `NEXT_PUBLIC_SITE_URL` is set to the production domain (e.g. `https://themercsd.com`)
- [ ] `NEXT_PUBLIC_SQUARE_ORDER_URL` is set — and is NOT the placeholder:
  ```bash
  grep "NEXT_PUBLIC_SQUARE_ORDER_URL" .env.local
  ```
  → If empty or placeholder: flag as **Major** (Order Online button 404s in prod)
- [ ] `SQUARE_ACCESS_TOKEN` has NO `NEXT_PUBLIC_` prefix
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` is either set correctly or intentionally empty
  (fallback to static data is safe)
- [ ] No secrets in `.env.example` (only variable names, no values)
- [ ] `.env.local` is in `.gitignore`

---

## Phase 3: Content Completeness

- [ ] Menu: check `data/menu.ts` — flag sections with empty `items: []` arrays
  ```bash
  grep -c "items: \[\]" data/menu.ts
  ```
- [ ] Events: check `data/events.ts` — are entries real or placeholder?
- [ ] Business info in `data/business.ts` matches physical signage:
  - Address: 113 E 2nd Ave, Flandreau, South Dakota 57028
  - Phone number correct
  - Hours accurate and current
- [ ] Social links in `data/socials.ts` point to correct, live accounts
- [ ] Gallery images in `/public/images/gallery/` are all client-approved

---

## Phase 4: SEO & Metadata

- [ ] `NEXT_PUBLIC_SITE_URL` used in canonical URLs and OG tags
- [ ] OG image exists: `/public/og-image.jpg`
- [ ] Twitter card type and image configured
- [ ] JSON-LD structured data present in `app/layout.tsx` (Restaurant/LocalBusiness)
- [ ] Each page has a unique `<title>` tag (check `metadata` exports)
- [ ] Sitemap generates at `/sitemap.xml` (check Next.js sitemap config)
- [ ] `robots.txt` is permissive for production domain
- [ ] Favicon present at `/public/favicon.ico` or `app/favicon.ico`

---

## Phase 5: Security Headers

Run against a local production build (`npm run build && npm run start`):

```bash
curl -s -I http://localhost:3000 | grep -i "x-content\|x-frame\|referrer\|permissions\|strict-transport"
```

- [ ] `X-Content-Type-Options: nosniff` present
- [ ] `X-Frame-Options: SAMEORIGIN` present
- [ ] `Referrer-Policy` present
- [ ] `Permissions-Policy` present
- [ ] No `X-Powered-By: Next.js` leaking (should be suppressed)

---

## Phase 6: External Service Links

Verify all external links the site depends on are live:

- [ ] Square Order URL (from `NEXT_PUBLIC_SQUARE_ORDER_URL`) — returns 200/redirect
- [ ] Google Maps embed — iframe renders (manual check)
- [ ] Instagram profile (`@themercsodak`) — accessible
- [ ] Facebook page (`/SiouxRiverSpirits/`) — accessible
- [ ] TikTok profile (`@themercsodak`) — accessible

Note: link-check these manually or with Playwright; do not block deployment
on third-party social platform availability.

---

## Phase 7: Responsive / Visual Check

Spot-check using Playwright or browser DevTools:

- [ ] Home page renders at 390px, 768px, 1024px, 1440px — no horizontal scroll
- [ ] Mobile bottom nav bar appears below 1024px
- [ ] Desktop nav appears at 1024px+
- [ ] Footer spacer present (content not hidden behind mobile bar)
- [ ] Menu tabs accessible and functional on mobile

---

## Phase 8: Performance Signals

Run Lighthouse (Chrome DevTools → Lighthouse) on the production build:

- [ ] Performance ≥ 80 (static site should be high)
- [ ] Accessibility ≥ 80 (aim for ≥ 90)
- [ ] Best Practices ≥ 80
- [ ] SEO ≥ 90

Check image optimisation:
- [ ] Images use Next.js `<Image>` component (automatic WebP + lazy loading)
- [ ] Hero image has a `priority` prop (above the fold)
- [ ] No unoptimised `<img>` tags for main content images

---

## Phase 9: Known Issues Acknowledgement

Review `docs/KNOWN_ISSUES.md` — confirm each open issue is:

- [ ] Accepted (documented, not blocking deployment)
- [ ] Or fixed (can be removed from KNOWN_ISSUES.md)

Current known open issues at time of writing:
- Square Order URL placeholder (client-dependent)
- npm HIGH vulns in build-time deps (not exploitable in production)
- No CSP header (deferred — complex with Google Fonts/Maps)

---

## Verdict

Emit exactly one of the following:

### NOT READY
Build fails, TypeScript errors, missing critical env vars, Blocker security
finding, or content is entirely placeholder.

### ALPHA READY
Build passes, site functions, core content present, but: Square URL still
placeholder, some menu sections empty, or open issues not yet reviewed.
Safe for internal review or client preview.

### PRODUCTION READY
All Phase 1–8 checks pass. No open Blockers. Content is final and approved.
Square URL is live. All known issues are accepted or resolved.
Site is ready for public launch.

---

## Reporting Format

```
Production Readiness Audit: <date>
Environment: <dev | staging | production build>

Phase 1 — Build & Types:      ✅ / ❌
Phase 2 — Env Vars:           ✅ / ⚠️ (Square URL placeholder) / ❌
Phase 3 — Content:            ✅ / ⚠️ (<N> menu sections empty) / ❌
Phase 4 — SEO/Metadata:       ✅ / ❌
Phase 5 — Security Headers:   ✅ / ❌
Phase 6 — External Services:  ✅ / ⚠️ / ❌
Phase 7 — Responsive:         ✅ / ❌
Phase 8 — Performance:        ✅ / ⚠️ / ❌
Phase 9 — Known Issues:       ✅ acknowledged / ❌ unreviewed

## Findings
- [SEVERITY] Phase N — Description — Action required

## VERDICT: NOT READY | ALPHA READY | PRODUCTION READY
```

---

## When to Use This Skill

- Before any client demo or stakeholder preview
- Before deploying to Vercel or any production host
- Before announcing the public launch URL
- After major content or configuration changes
