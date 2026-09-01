# The Merc — Full Technical Documentation

**Website for The Merc** — gastropub, coffee bar, and live music venue.
**113 E 2nd Ave, Flandreau, SD 57028 · (605) 573-0913**

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages](#4-pages)
5. [Components](#5-components)
6. [Data Files](#6-data-files)
7. [Images](#7-images)
8. [Design System](#8-design-system)
9. [Environment Variables](#9-environment-variables)
10. [Sanity CMS](#10-sanity-cms)
11. [Square Integration](#11-square-integration)
12. [Running Locally](#12-running-locally)
13. [Build & Deploy](#13-build--deploy)

---

## 1. Project Overview

The Merc website is a **static-first Next.js 15** site with App Router. Pages are statically generated at build time and served as HTML — fast, SEO-friendly, and cheap to host.

Dynamic content (events, gallery) is fetched from **Sanity CMS** when configured, with automatic fallback to the static data files when Sanity is not set up. Pages revalidate on a schedule (ISR) so changes in Sanity appear automatically without a full rebuild.

The site is mobile-first with a bottom action bar on small screens, designed to work on any device without a native app.

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.5.x | Framework — App Router, SSG, ISR, API routes |
| React | 19.x | UI rendering |
| TypeScript | 5.x | Type safety across all files |
| Tailwind CSS | 3.4.x | Utility-first styling |
| next-sanity | 13.x | Sanity CMS client + GROQ fetching |
| framer-motion | 12.x | Animations (subtle) |
| lucide-react | latest | Icon library |

---

## 3. Project Structure

```
The Merc/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, metadata, JSON-LD, navbar, footer
│   ├── page.tsx                  # Home page — assembles all home sections
│   ├── globals.css               # Global styles, CSS variables, utility classes
│   ├── not-found.tsx             # 404 page
│   ├── robots.ts                 # robots.txt (blocks /api/ and /studio/)
│   ├── sitemap.ts                # sitemap.xml — all 6 public routes
│   │
│   ├── menu/page.tsx             # Menu page — wraps MenuPageClient in Suspense
│   ├── events/page.tsx           # Events page — async, fetches from Sanity or data/
│   ├── gallery/page.tsx          # Gallery page — async, fetches from Sanity or data/
│   ├── about/page.tsx            # About page — static
│   ├── visit/page.tsx            # Visit/Hours/Directions — static
│   │
│   └── api/
│       └── square/
│           ├── catalog/route.ts  # GET — Square catalog (server-side, not yet active)
│           └── checkout/route.ts # POST — Square checkout (server-side, not yet active)
│
├── components/
│   ├── home/                     # Home page sections (used only in app/page.tsx)
│   │   ├── Hero.tsx              # Full-screen hero with background image + CTAs
│   │   ├── QuickInfo.tsx         # Open/closed status + quick info bar
│   │   ├── Welcome.tsx           # Intro text + 3-image grid
│   │   ├── FoodDrink.tsx         # 5 menu category cards with photos
│   │   ├── DakotaJoe.tsx         # Dakota Joe Coffee section
│   │   ├── UpcomingEvents.tsx    # Events preview (up to 3)
│   │   ├── SocialFollow.tsx      # Instagram / Facebook / TikTok cards
│   │   └── VisitCTA.tsx          # Address, hours, directions CTA
│   │
│   ├── layout/
│   │   ├── Navbar.tsx            # Top navigation — scroll state, mobile menu
│   │   ├── Footer.tsx            # 4-column footer — brand, address, hours, links
│   │   └── MobileBottomBar.tsx   # Fixed bottom bar (mobile only) — Menu/Order/Events/Directions
│   │
│   ├── menu/
│   │   └── MenuPageClient.tsx    # 'use client' — tab navigation, menu item grid
│   │
│   └── ui/
│       ├── OrderOnlineButton.tsx # Smart button — redirects to Square URL or shows "Coming Soon"
│       ├── SectionHeader.tsx     # Reusable section header with label, h2, divider
│       ├── PlaceholderImage.tsx  # Development placeholder (no longer visible on site)
│       └── TikTokIcon.tsx        # TikTok SVG icon (not in lucide-react)
│
├── data/                         # Static content — edit to update site content
│   ├── business.ts               # Address, phone, hours, open/closed logic
│   ├── events.ts                 # Events array + helper functions
│   ├── menu.ts                   # Full menu structure (sections, categories, items)
│   └── socials.ts                # Social media URLs and handles
│
├── lib/
│   └── sanity/
│       ├── client.ts             # Lazy Sanity client — returns null if not configured
│       └── queries.ts            # GROQ queries for events, gallery, menu
│
├── public/
│   └── images/
│       ├── hero-bg.jpg           # Home hero — outdoor concert at twilight
│       ├── og-image.jpg          # Open Graph / social sharing thumbnail
│       ├── merc-bar.jpg          # Bar interior — THE MERC sign
│       ├── merc-cocktail.jpg     # Bloody Mary cocktail
│       ├── merc-events.jpg       # Outdoor concert (events fallback)
│       ├── merc-community.jpg    # Halloween packed bar
│       ├── merc-decor.jpg        # Longhorn skull wall decor
│       ├── merc-interior-sign.jpg# Interior sign / coffee bar area
│       ├── merc-bratwurst.jpg    # Bratwurst plate
│       ├── merc-burger-cowboy.jpg# Cowboy Layer Cake Burger
│       ├── menu-pizza.jpg        # BBQ pizza
│       ├── menu-pizza-2.jpg      # Cheese pizza
│       ├── menu-burgers.jpg      # Garlic Parmesan Burger
│       ├── menu-good-eats.jpg    # Chili cheese fries
│       ├── menu-drinks.jpg       # Outdoor bar scene
│       ├── gallery/              # 12 photos for the gallery page
│       │   ├── merc-events-outdoor.jpg
│       │   ├── merc-bar.jpg
│       │   ├── merc-cocktail.jpg
│       │   ├── merc-pizza-bbq.jpg
│       │   ├── merc-burger-parmesan.jpg
│       │   ├── merc-events-crowd.jpg
│       │   ├── merc-chili-fries.jpg
│       │   ├── merc-community.jpg
│       │   ├── merc-pizza-cheese.jpg
│       │   ├── merc-burger-cowboy.jpg
│       │   ├── merc-decor.jpg
│       │   └── merc-bratwurst.jpg
│       └── yahoo_photo_*.jpg     # Original downloaded photos (source archive)
│
├── studio/                       # Sanity Studio — standalone, deployed separately
│   ├── package.json              # Own dependencies (sanity v3, react v18)
│   ├── sanity.config.ts          # Studio configuration + custom structure
│   ├── .env                      # SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET
│   └── schemas/
│       ├── event.ts              # Event document schema
│       ├── menuItem.ts           # Menu item document schema
│       ├── galleryImage.ts       # Gallery photo schema
│       └── index.ts              # Exports all schemas
│
├── .env.local                    # Local environment variables (gitignored)
├── .env.example                  # Template for all environment variables
├── .gitignore                    # Excludes node_modules, .next, .env.local
├── next.config.ts                # Next.js config — image formats avif/webp
├── tailwind.config.ts            # Custom design tokens
├── tsconfig.json                 # TypeScript config (excludes studio/)
└── package.json                  # Project dependencies and scripts
```

---

## 4. Pages

### Home (`/`)
Assembled from 8 section components in `app/page.tsx`:

| Section | Component | Description |
|---|---|---|
| Hero | `Hero.tsx` | Full-screen background, headline, 4 CTAs |
| Quick Info | `QuickInfo.tsx` | Today's hours, open/closed badge, phone, address |
| Welcome | `Welcome.tsx` | Intro paragraph + 3-image bar/cocktail/events grid |
| Food & Drink | `FoodDrink.tsx` | 5 category cards (pizza, burgers, good eats, coffee, drinks) |
| Dakota Joe | `DakotaJoe.tsx` | Coffee bar feature section |
| Upcoming Events | `UpcomingEvents.tsx` | Next 3 events from data/events.ts or Sanity |
| Social Follow | `SocialFollow.tsx` | Instagram, Facebook, TikTok links |
| Visit CTA | `VisitCTA.tsx` | Address, phone, hours, directions button |

### Menu (`/menu`)
- Server component wraps `<MenuPageClient>` in `<Suspense>` (required for `useSearchParams`)
- Tabs: Pizza · Burgers · Good Eats · Coffee · Drinks
- URL parameter: `/menu?tab=pizza` — direct-links to a tab
- Each tab shows a hero banner photo, then the items from `data/menu.ts`
- Empty state shown per category when no items are entered yet

### Events (`/events`)
- **Async server component** — fetches from Sanity if configured, else reads from `data/events.ts`
- `revalidate = 60` — rebuilds every 60 seconds in the background
- Tonight banner appears automatically if an event is scheduled for today (Central Time)
- EventRow: date sidebar + photo + description + ticket link

### Gallery (`/gallery`)
- **Async server component** — fetches from Sanity if configured, else uses static 12-photo list
- `revalidate = 3600` — rebuilds every hour
- CSS Grid masonry layout: some items span 2 columns or 2 rows for visual rhythm
- Hover: overlay with label and category badge

### About (`/about`)
- Fully static — no dynamic data
- Hero split: text + `merc-bar.jpg`
- Story section with 3 photos: `merc-events.jpg`, `merc-decor.jpg`, `merc-interior-sign.jpg`
- 4 pillars: Dakota Joe Coffee · Food · Live Music · Community
- Flandreau section with Visit and Instagram CTAs

### Visit (`/visit`)
- Fully static — no dynamic data
- Hours table with today's row highlighted (using `getTodayHours()` from `data/business.ts`)
- Address with Google Maps link
- Phone number
- All social media links
- Map placeholder with Google Maps embed note
- Google Reviews CTA

### 404 (`/not-found.tsx`)
- Custom 404 with links back to Home, Menu, Events

---

## 5. Components

### `OrderOnlineButton`
Reads `process.env.NEXT_PUBLIC_SQUARE_ORDER_URL`:
- **Set:** Renders an `<a>` tag linking to the Square URL
- **Empty:** Shows "Coming Soon" state (grayed out, not clickable)

Variants: `navbar` (small), `hero` (full), `full` (full), `mobile` (icon + label)

### `Navbar`
- Uses `usePathname` to highlight active links
- `isScrolled` state: adds background blur after 60px scroll
- Mobile hamburger with `isMobileOpen` — closes on route change

### `QuickInfo` (home page)
- Calls `getOpenStatus()` from `data/business.ts`
- Shows green "Open Now" or red "Closes at X" badge
- All timing is in `America/Chicago` (Central Time, Flandreau SD)

---

## 6. Data Files

### `data/business.ts`
Contains all factual business information:

```ts
export const business = {
  name: 'The Merc',
  tagline: 'Gastropub · Coffee Bar · Live Music',
  description: '...',
  address: {
    street: '113 E 2nd Ave',
    city: 'Flandreau',
    state: 'SD',
    zip: '57028',
    googleMapsUrl: 'https://maps.google.com/?q=...',
  },
  contact: {
    phone: '(605) 573-0913',
    phoneHref: 'tel:+16055730913',
  },
  hours: [
    { day: 'Monday',    open: '07:00', close: '14:00', display: '7:00 AM – 2:00 PM' },
    { day: 'Tuesday',   open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Wednesday', open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Thursday',  open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Friday',    open: '07:00', close: '23:00', display: '7:00 AM – 11:00 PM' },
    { day: 'Saturday',  open: '08:00', close: '23:00', display: '8:00 AM – 11:00 PM' },
    { day: 'Sunday',    open: '08:00', close: '20:00', display: '8:00 AM – 8:00 PM' },
  ],
  timezone: 'America/Chicago',
}
```

**To update hours:** change both `open`/`close` (24h format, used for logic) and `display` (shown to users).

### `data/events.ts`

```ts
export interface MercEvent {
  id: string
  artist: string
  eventType: 'live-music' | 'trivia' | 'open-mic' | 'community' | 'other'
  date: string          // 'YYYY-MM-DD'
  startTime: string     // '19:00' — 24h, Central Time
  endTime?: string
  description: string
  image: string | null  // path to image or null
  ticketUrl: string | null
  isFeatured?: boolean
}
```

Helper functions:
- `getUpcomingEvents(limit?)` — returns future events, sorted ascending
- `getTonightEvents()` — events happening today (Central Time)
- `formatTime('19:00')` → `'7:00 PM'`
- `formatEventDate('2026-09-15')` → `{ dayOfWeek, month, day }`

When Sanity is configured, the events page uses Sanity data instead of this file.

### `data/menu.ts`

Three-level hierarchy: `MenuSection → MenuCategory → MenuItem`

```ts
export interface MenuItem {
  id: string
  name: string
  description?: string
  price?: string
  tags?: string[]       // 'vegetarian', 'gluten-free', 'spicy', etc.
  note?: string
}
```

Sections: `pizza` · `burgers` · `good-eats` · `coffee` · `drinks`

### `data/socials.ts`

```ts
export const socials = {
  instagram:     { url: 'https://instagram.com/themercsodak',         handle: '@themercsodak' },
  facebook:      { url: 'https://facebook.com/SiouxRiverSpirits',     handle: 'The Merc' },
  tiktok:        { url: 'https://tiktok.com/@themercsodak',           handle: '@themercsodak' },
  dakotaJoeCoffee: {
    instagram: 'https://instagram.com/dakotajoesodak',
    handle: '@dakotajoesodak',
  },
}
```

---

## 7. Images

All images are in `public/images/`. They were sourced from The Merc's Yahoo Local listing and are real photos of the establishment.

### Adding new images
1. Place the file in `public/images/` (or `public/images/gallery/` for gallery)
2. Reference it as `/images/filename.jpg` in any `<Image>` component
3. Always use `next/image` — not `<img>` — for automatic optimization

### Gallery images
When Sanity is active, gallery photos come from Sanity (uploaded through the admin panel). When not active, the 12 static photos from `public/images/gallery/` are used.

### Open Graph image
`public/images/og-image.jpg` — shown when the site is shared on social media (Facebook, Twitter, iMessage, etc.). Dimensions should be 1200×630px.

---

## 8. Design System

### Color Palette (`tailwind.config.ts`)

| Token | Value | Usage |
|---|---|---|
| `amber-merc` | `#C4842A` | Primary brand amber — CTAs, accents, headings |
| `merc-black` | `#111110` | Darkest background |
| `merc-dark` | `#1C1C1A` | Main page background |
| `merc-surface` | `#252521` | Cards, sections |
| `merc-card` | `#2E2E2A` | Nested cards |
| `merc-border` | `#3A3A35` | Dividers, borders |
| `merc-muted` | `#7A7568` | Subdued text |
| `merc-warm` | `#C4842A` | Same as amber-merc |
| `merc-cream` | `#F5F0E8` | Primary text on dark |
| `merc-red` | `#9B3A2E` | Error states, accents |

### Typography Classes (`globals.css`)

| Class | Size | Usage |
|---|---|---|
| `.display-xl` | clamp(3rem–7rem) | Hero headline |
| `.display-lg` | clamp(2rem–4rem) | Section hero headings |
| `.display-md` | clamp(1.5rem–2.5rem) | Section headings |
| `.section-label` | 0.65rem, uppercase | Small label above headings |

**Fonts:**
- Body: `Inter` (Google Fonts) — `var(--font-inter)`
- Display: `Playfair Display` (Google Fonts) — `var(--font-playfair)`

### Button Classes

| Class | Description |
|---|---|
| `.btn-primary` | Amber background, dark text — primary CTA |
| `.btn-secondary` | Transparent, amber border — secondary action |
| `.btn-ghost` | Transparent, amber border with amber text — tertiary action |

### Other Utility Classes

- `.card` — dark surface card with border and hover lift (`translateY(-4px)`)
- `.badge-open` — green "Open Now" pill
- `.badge-closed` — red "Closed" pill
- `.section-divider` — short amber horizontal rule used under section headers

---

## 9. Environment Variables

| Variable | Where | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `.env.local` | Public URL of the site — used for OG and sitemaps |
| `NEXT_PUBLIC_SQUARE_ORDER_URL` | `.env.local` | Square order page URL — empty = "Coming Soon" |
| `NEXT_PUBLIC_SQUARE_APPLICATION_ID` | `.env.local` | Square app ID (client-safe) |
| `SQUARE_ACCESS_TOKEN` | `.env.local` | Square API token — **server-side ONLY, never expose** |
| `SQUARE_LOCATION_ID` | `.env.local` | Square location ID |
| `SQUARE_ENVIRONMENT` | `.env.local` | `sandbox` or `production` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `.env.local` | Sanity project ID — empty = use static data |
| `NEXT_PUBLIC_SANITY_DATASET` | `.env.local` | Sanity dataset name (default: `production`) |

**Security rule:** Any variable without `NEXT_PUBLIC_` prefix is server-only — it's never sent to the browser. `SQUARE_ACCESS_TOKEN` must never have that prefix.

---

## 10. Sanity CMS

### Architecture

When `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`:
- Events page fetches from Sanity via GROQ query
- Gallery page fetches from Sanity via GROQ query
- If Sanity is unreachable, both pages fall back to static data

When `NEXT_PUBLIC_SANITY_PROJECT_ID` is empty:
- All pages use static data from `data/` files
- No Sanity calls are made
- Build works without any Sanity account

### Revalidation

| Page | `revalidate` | Sanity change appears in |
|---|---|---|
| Events | 60 seconds | ~1 minute |
| Gallery | 3600 seconds | ~1 hour |

### Schemas (in `studio/schemas/`)

**Event**
- `artist` (string, required)
- `eventType` (radio: live-music / trivia / special / community)
- `date` (date, required)
- `startTime` (string, 24h format)
- `endTime` (string, optional)
- `description` (text)
- `image` (image with hotspot)
- `ticketUrl` (url, optional)
- `isFeatured` (boolean)

**Menu Item**
- `name` (string, required)
- `section` (radio: pizza / burgers / good-eats / coffee / drinks)
- `description` (text)
- `price` (string, e.g. `$12`)
- `tags` (checkbox: gluten-free, vegetarian, vegan, spicy, new, popular)
- `image` (image with hotspot)
- `note` (string, optional)
- `available` (boolean — uncheck to hide without deleting)

**Gallery Image**
- `image` (image with hotspot, required)
- `alt` (string, required — accessibility description)
- `category` (radio: food / drinks / music / venue / people)
- `order` (number — lower = displayed first)

### GROQ Queries (`lib/sanity/queries.ts`)

```groq
// Events — upcoming only, sorted ascending
*[_type == "event" && date >= $today] | order(date asc) { ... }

// Gallery — sorted by order field
*[_type == "galleryImage"] | order(order asc, _createdAt desc) { ... }

// Menu items — available only
*[_type == "menuItem" && available != false] | order(section asc, name asc) { ... }
```

### Activating Sanity (Setup Steps)

1. Create account at **sanity.io** → New Project → copy **Project ID**
2. Add to `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id`
3. In `studio/` folder:
   ```bash
   cd studio
   npm install
   ```
4. Add to `studio/.env`: `SANITY_STUDIO_PROJECT_ID=your_project_id`
5. Deploy the admin studio:
   ```bash
   npx sanity@latest deploy
   ```
   Choose a name (e.g. `the-merc`) → studio live at `https://the-merc.sanity.studio`
6. Invite the client: Sanity dashboard → Members → Invite
7. Restart the Next.js dev server

---

## 11. Square Integration

### Phase 1 — URL Redirect (Ready)

The `OrderOnlineButton` component reads `NEXT_PUBLIC_SQUARE_ORDER_URL`. When set, all order buttons across the site redirect to that URL.

```env
NEXT_PUBLIC_SQUARE_ORDER_URL=https://order.squareup.com/preview/YOUR_LOCATION
```

### Phase 2 — Full API (Architecture Ready)

Routes exist at `app/api/square/catalog/route.ts` and `app/api/square/checkout/route.ts` with commented implementation blocks. To activate:

1. `npm install squareup`
2. Set all Square env vars in `.env.local`
3. Uncomment the implementation in the route files

**Security:** `SQUARE_ACCESS_TOKEN` is server-only — used only in the API route, never exposed to the browser or JavaScript bundle.

---

## 12. Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

If port 3000 is in use, Next.js automatically uses the next available port (3001, 3002, etc.).

**To clear cache issues:**
```bash
Remove-Item -Recurse -Force .next  # PowerShell
rm -rf .next                       # bash
npm run dev
```

---

## 13. Build & Deploy

### Production Build

```bash
npm run build
npm run start
```

Expected output: 13 static routes, 0 errors, 0 warnings.

### Vercel (Recommended)

1. Push project to GitHub
2. Import repo in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy → automatic HTTPS, CDN, ISR support

### Cloudflare Pages

1. `npm run build`
2. Deploy `.next/` directory
3. Configure environment variables in dashboard

### Environment Variables for Production

Must be set in the hosting platform's dashboard:
- `NEXT_PUBLIC_SITE_URL` → actual domain (e.g. `https://themercsd.com`)
- `NEXT_PUBLIC_SANITY_PROJECT_ID` → your Sanity project ID
- `NEXT_PUBLIC_SQUARE_ORDER_URL` → Square ordering URL (when ready)
- `SQUARE_ACCESS_TOKEN` → Square secret token (when Phase 2 is activated)

---

*Last updated: September 2026*
