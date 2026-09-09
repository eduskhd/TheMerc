# Roadmap — The Merc Website

**Last updated:** 2026-09-08

---

## Phase 1 — MVP Launch (Current)

**Goal:** Live, professional marketing site with all core information.  
**Status:** ✅ Code complete. Blocked on client-provided content.

### Completed
- [x] All 6 pages (Home, Menu, Events, Gallery, About, Visit)
- [x] Mobile responsive design (320px → 1920px)
- [x] Mobile bottom navigation bar
- [x] Live Open/Closed status (Central Time)
- [x] SEO metadata, OG tags, JSON-LD structured data
- [x] Security HTTP headers
- [x] Favicon (SVG + ICO)
- [x] Google Maps embed
- [x] Social media links
- [x] Auto-generated sitemap + robots.txt
- [x] Production build passing (TypeScript clean)
- [x] Living documentation system

### Remaining (Content — Client Provides)
- [ ] Real Square Order URL → update `NEXT_PUBLIC_SQUARE_ORDER_URL`
- [ ] Real menu items → fill `data/menu.ts`
- [ ] Real events schedule → fill `data/events.ts`
- [ ] Real gallery photos → replace `/public/images/` placeholders
- [ ] Email address → add to `data/business.ts` when confirmed

### Remaining (Infrastructure)
- [ ] Deploy to Vercel — set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Configure production environment variables in Vercel dashboard
- [ ] Verify Google Maps embed works on production domain

---

## Phase 2 — Content Management (Medium-term)

**Goal:** Non-technical client can update menu, events, and gallery without developer help.  
**Prerequisites:** Phase 1 deployed and stable.

### Sanity CMS Activation
- [ ] Deploy Sanity Studio (`/studio` directory, separate Vercel project or standalone)
- [ ] Set `NEXT_PUBLIC_SANITY_PROJECT_ID=1zqf04a9` in production env
- [ ] Create Sanity schema documents for: MenuSection, MenuItem, Event, GalleryImage
- [ ] Update GROQ queries in `lib/sanity/` to fetch content
- [ ] Migrate static data from `data/*.ts` into Sanity datasets
- [ ] Set up Sanity webhook → Vercel deploy hook for ISR invalidation
- [ ] Client training: how to add events, update menu, upload photos

### Content Updates
- [ ] Replace static TypeScript data with Sanity document queries
- [ ] Gallery: replace local images with Sanity-hosted assets (Sanity image CDN)
- [ ] Events: real-time event management via Sanity Studio
- [ ] Menu: live menu editing without code deploys

---

## Phase 3 — Square API Integration (Long-term)

**Goal:** Full online ordering experience built into the site — no redirect to external Square page.  
**Prerequisites:** Phase 2 stable. Square account fully configured.

### Square Catalog
- [ ] Set `SQUARE_ACCESS_TOKEN`, `SQUARE_LOCATION_ID`, `SQUARE_ENVIRONMENT=production`
- [ ] Activate `/api/square/catalog` route — fetch live menu from Square
- [ ] Display Square catalog items on Menu page (replace or supplement static data)
- [ ] Handle catalog sync with Sanity CMS (source of truth decision)

### Square Checkout
- [ ] Set `NEXT_PUBLIC_SQUARE_APPLICATION_ID` for Square Web Payments SDK
- [ ] Activate `/api/square/checkout` route — create checkout sessions
- [ ] Build cart component (add items, adjust quantities)
- [ ] Build checkout flow (Square hosted payment page or embedded)
- [ ] Order confirmation page

### Security (Phase 3 prerequisite)
- [ ] Implement Content-Security-Policy header with nonces (required for Square SDK)
- [ ] Square webhook endpoint for order status updates
- [ ] Rate limiting on `/api/square/checkout`

---

## Phase 4 — Growth Features (Future)

**Goal:** Loyalty, analytics, direct customer engagement.

- [ ] Email list signup (Mailchimp or similar)
- [ ] Event RSVP with email confirmation
- [ ] Loyalty program integration
- [ ] Analytics dashboard (Vercel Analytics or Plausible)
- [ ] Performance monitoring
- [ ] Direct Google Review link (requires Place ID from Google My Business)

---

## Dependency Graph

```
Phase 1 (done) → Phase 2 (CMS) → Phase 4 (Growth)
                 Phase 2       → Phase 3 (Square)
                 Phase 3       depends on Security hardening
```

---

## Key External Dependencies

| Dependency | Status | Owner |
|---|---|---|
| Square Order URL (live) | ⚠️ Pending | Client |
| Sanity Studio deployment | ⚪ Not started | Developer |
| Vercel deployment | ⚪ Not started | Developer + Client |
| Production domain (themercsd.com or similar) | ⚪ Not started | Client |
| Square developer account + production app | ⚪ Not started | Client + Developer |
| Google My Business listing | ⚪ Unknown | Client |
