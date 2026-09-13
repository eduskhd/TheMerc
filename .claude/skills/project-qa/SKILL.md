---
name: project-qa
description: >-
  Functional QA for The Merc website. Covers all 6 pages (Home, Menu, Events,
  Gallery, About, Visit), mobile bottom navigation, Open/Closed status, tabbed
  menu, Order Online button, Google Maps embed, and responsive behaviour across
  desktop/tablet/mobile. Runs AUDIT → TEST → FIX → RETEST cycle.
---

# Project QA — The Merc Website

Complete functional review of the live site at http://localhost:3000. Always
test against the running dev server or production build, not just by reading
code. Follow the AUDIT → TEST → FIX → RETEST cycle.

Default to **audit-only**. Do not edit implementation files unless the user
explicitly authorises a fix pass.

---

## Pre-flight

Before testing, confirm the dev server is running:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

If it returns anything other than 200, ask the user to start it with
`npm run dev` or use the `run` skill to launch it.

---

## Pages & Coverage Matrix

Test every page. Mark each item ✅ pass / ❌ fail / ⚠️ partial / 🔲 not tested.

### 1. Home `/`

- [ ] Hero section renders with background image (no broken img)
- [ ] Headline and sub-headline text visible
- [ ] "Order Online" CTA button present and clickable (external link opens)
- [ ] Open/Closed badge shows correct state for current Central Time
- [ ] Hours displayed accurately (match `data/business.ts`)
- [ ] Section transitions and Framer Motion animations complete without jank
- [ ] No layout overflow at 1440px, 1024px, 768px, 390px
- [ ] Page fully visible without horizontal scrollbar at any width

### 2. Menu `/menu`

- [ ] Tabbed navigation renders: Pizza, Burgers, Good Eats, Coffee, Drinks
- [ ] Default tab selected on load (first tab active)
- [ ] Clicking each tab switches content without page reload
- [ ] Section images load without broken img tags
- [ ] Menu items display name, description, price correctly
- [ ] Empty items arrays handled gracefully (no crash, no blank section)
- [ ] Mobile: tabs scroll horizontally or wrap correctly

### 3. Events `/events`

- [ ] Events list renders
- [ ] "Tonight" badge appears on events matching today's date
- [ ] Past events handled (not shown or clearly labelled)
- [ ] Empty state rendered if no events are present
- [ ] Date/time formatting correct (no "Invalid Date")
- [ ] ISR revalidation tag in place (check `revalidate` export in page)

### 4. Gallery `/gallery`

- [ ] Grid of images renders without broken srcs
- [ ] Images from `/public/images/gallery/` load correctly
- [ ] Grid layout responsive: 1→2→3 columns at mobile→tablet→desktop
- [ ] No overflow or clipped images

### 5. About `/about`

- [ ] Page loads without error
- [ ] Content sections visible
- [ ] Social media links present and point to correct handles
- [ ] All external social links have `rel="noopener noreferrer"`

### 6. Visit `/visit`

- [ ] Address displayed: 113 E 2nd Ave, Flandreau, SD 57028
- [ ] Phone number displayed and clickable (`tel:` link)
- [ ] Business hours table visible and accurate
- [ ] Google Maps embed loads (iframe present)
- [ ] "Get Directions" external link present and correct
- [ ] Open/Closed status consistent with Home page

---

## Global Components

### Navbar (desktop ≥1024px)

- [ ] All nav links render: Home, Menu, Events, Gallery, About, Visit
- [ ] Active page link highlighted
- [ ] Logo / site name visible
- [ ] Order Online button present in nav
- [ ] No overflow at 1024px exactly

### Mobile Bottom Bar (<1024px)

- [ ] Bottom navigation bar visible on mobile
- [ ] All nav icons/labels present and tappable
- [ ] Active page highlighted
- [ ] Bar does not cover page content (Footer spacer `h-16 lg:hidden` present)
- [ ] Order Online accessible from mobile

### Footer

- [ ] Social media icons present: Instagram, Facebook, TikTok
- [ ] Social links open in new tab with `rel="noopener noreferrer"`
- [ ] Address and phone repeated in footer
- [ ] Copyright year correct
- [ ] Mobile bottom bar spacer present (`h-16 lg:hidden`)

### Order Online Button

- [ ] Button renders wherever it appears (Navbar, Hero)
- [ ] Clicking opens external URL in new tab
- [ ] URL is not the placeholder (check `.env.local` or `NEXT_PUBLIC_SQUARE_ORDER_URL`)
- [ ] `rel="noopener noreferrer"` present

### Open/Closed Indicator

- [ ] Reads current time in Central Time (America/Chicago)
- [ ] Shows "Open" / "Closed" correctly for current time
- [ ] Hours from `data/business.ts` match indicator logic
- [ ] Does not crash when called outside business hours

---

## Functional Tests (use Playwright skill when available)

Run against `http://localhost:3000`:

1. Navigate all 6 pages — no 404s, no JS errors in console
2. Click every tab on Menu page — content switches, no errors
3. Resize to 390px — mobile bottom bar appears, desktop nav disappears
4. Resize to 1440px — desktop nav appears, bottom bar disappears
5. Click every external link — opens in new tab (check target=_blank)
6. Check browser console for JS errors on each page
7. Verify no network 404s for images (check DevTools Network tab)

---

## Regression Guards

After any fix, re-run the full page matrix above before marking RETEST complete.

Critical invariants that must never break:

- `overflow-x: hidden` on `html` element (globals.css) — removing it causes horizontal scroll
- `h-16 lg:hidden` spacer in Footer — removing hides content behind MobileBottomBar
- `rel="noopener noreferrer"` on all external links
- TypeScript types in `data/business.ts` — changing structure breaks components
- `SQUARE_ACCESS_TOKEN` must never appear with `NEXT_PUBLIC_` prefix

---

## Reporting Format

```
QA Run: <date> <time>
Server: http://localhost:3000 (dev | production build)
Viewport tested: <list>
Browser: <Chromium via Playwright | manual>

## Page Results
Home:       ✅ / ❌ / ⚠️
Menu:       ✅ / ❌ / ⚠️
Events:     ✅ / ❌ / ⚠️
Gallery:    ✅ / ❌ / ⚠️
About:      ✅ / ❌ / ⚠️
Visit:      ✅ / ❌ / ⚠️

## Component Results
Navbar:     ✅ / ❌ / ⚠️
MobileBar:  ✅ / ❌ / ⚠️
Footer:     ✅ / ❌ / ⚠️
OrderBtn:   ✅ / ❌ / ⚠️
OpenClosed: ✅ / ❌ / ⚠️

## Findings
- [SEVERITY] Description — Page/Component — Reproduction steps

## Console Errors
- <list or "none">

## Verdict
PASS | FAIL | PARTIAL — <summary>
```

Severity levels: **Blocker** | **Major** | **Moderate** | **Minor**

---

## When to Use This Skill

- After adding or changing any page component
- After editing `data/` files (menu, events, business, socials)
- After layout or navigation changes
- After adding new pages or routes
- Before any deployment or client demo
- After Tailwind config or globals.css changes
