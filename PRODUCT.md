# The Merc — Product Context

> Captured by `/impeccable init` on 2026-09-22. Update when position, users, or constraints change.

---

## What this product is

A marketing and presence website for **The Merc** — the only full-service venue in Flandreau, SD (population ~2,400). In a town of this size, "the only place" is not just a competitive claim; it is literal fact. The Merc combines a gastropub, coffee bar, live music stage, private event space, and liquor store under one roof at 113 E 2nd Ave.

**Tagline:** "Eat. Drink. Coffee. Music. Community."

The site is Phase 1 of a two-phase product:
- **Phase 1 (current):** Static marketing site — brand identity, hours, menu, events, gallery, location
- **Phase 2 (roadmap):** Square Catalog + Checkout API integration; Sanity CMS for self-managed content

---

## Platform and stack

- **Platform:** Web (desktop + mobile)
- **Framework:** Next.js 15 App Router, React 19, TypeScript 5
- **Styling:** Tailwind CSS 3 (brand tokens in `tailwind.config.ts`)
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display (display/headings) + Inter (body/UI)
- **Build/Deploy:** Vercel-ready, static generation + ISR
- **CMS (inactive):** Sanity v6 — studio deployed, not yet wired
- **Payments (stubs):** Square Catalog + Checkout API routes prepared, not connected

---

## Users

Three audiences at roughly equal weight — the site must serve all three without sacrificing any:

### 1. Locals (regulars + nearby residents)
**Situation:** They already know The Merc. They want a quick answer — is it open now? What's on tonight? What's on the menu?
**Job:** Confirm a detail before going or recommending it to someone else.
**Success:** Answer in under 10 seconds without hunting.

### 2. Out-of-towners (visitors, casino crowd, road-trippers)
**Situation:** They are in Flandreau or nearby (Royal River Casino draws traffic) and deciding whether The Merc is worth a stop.
**Job:** Evaluate the vibe, quality, and what's available before committing.
**Success:** Leave the site confident it's the right call — menu looks good, atmosphere reads well, location is easy to find.

### 3. Event and music seekers
**Situation:** Looking for live entertainment or a private event venue in the area.
**Job:** Confirm The Merc has what they need — upcoming shows, capacity, contact for private booking.
**Success:** Find the answer or a clear next step (call, social, booking link).

---

## Product position

**The Merc is the only full-service venue in Flandreau.** No competitor in town offers the same combination:

- Gastropub (award-winning pizza, burgers, craft beers)
- Coffee bar (Dakota Joe Coffee partnership — 7am open daily)
- Live music stage
- Private event space
- Liquor store

This is the community anchor. Not just a bar. Not just a coffee shop. The place where the same person can have their morning coffee, bring their family for dinner, and come back Friday night for live music.

**The site's job is to make that combination feel real and worth the trip** — not list-of-features, but atmosphere you can feel through the screen.

---

## Design system

| Token | Value |
|---|---|
| Primary amber | `#D4943A` |
| Cream / foreground | `#F5EFE0` |
| Dark background | `#100E0B` / `#181410` |
| Display font | Playfair Display |
| Body font | Inter |
| Aesthetic direction | Warm Modern Gastropub |
| Mode (impeccable) | Persuade |

The amber/cream/dark palette is fully committed — it is the brand identity, not an option.

---

## Pages and surfaces

| Route | Purpose |
|---|---|
| `/` (Home) | Brand impression, quick info, food/drink teaser, events preview, social proof, CTA |
| `/menu` | Tabbed menu: Pizza, Burgers, Good Eats, Coffee, Drinks |
| `/events` | Upcoming events, tonight detection |
| `/gallery` | Venue + atmosphere photos |
| `/about` | Story, team, philosophy |
| `/visit` | Hours, Google Maps embed, address, contact |

---

## Content status (as of init)

| Content area | Status |
|---|---|
| Hours, address, contact | Complete — `data/business.ts` |
| Menu structure | Incomplete — sections exist, most items empty |
| Events | Placeholder — real schedule not yet entered |
| Gallery images | Present |
| Square order URL | Placeholder (returns 404) — client must provide |
| Social links | Complete — `data/socials.ts` |

---

## Hours

| Day | Hours |
|---|---|
| Monday | 7:00 AM – 2:00 PM |
| Tue–Thu | 7:00 AM – 9:00 PM |
| Friday | 7:00 AM – 11:00 PM |
| Saturday | 8:00 AM – 11:00 PM |
| Sunday | 8:00 AM – 8:00 PM |

Live Open/Closed status runs on Central Time in the UI.

---

## Constraints that must be preserved

These are non-negotiable — do not remove or route around them:

- `SQUARE_ACCESS_TOKEN` must **never** use the `NEXT_PUBLIC_` prefix (server-side only)
- All external links must keep `rel="noopener noreferrer"`
- `overflow-x: hidden` on `html` element in `globals.css` — prevents horizontal scroll on narrow viewports
- Mobile bottom bar spacer in Footer (`h-16 lg:hidden`) — content hides behind `MobileBottomBar` without it
- Security headers in `next.config.ts` — do not remove
- Static data fallback pattern — all Sanity queries fall back to static files when `isSanityConfigured = false`
- `data/business.ts` types — referenced across many components; changing structure breaks TypeScript

---

## Immediate priorities (client-blocking)

1. Client provides correct Square Order URL → update `NEXT_PUBLIC_SQUARE_ORDER_URL`
2. Enter full menu items in `data/menu.ts`
3. Replace placeholder events in `data/events.ts` with real schedule
4. Phase 2: Sanity CMS activation, Square API integration
