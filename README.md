# The Merc — Official Website

Website for **The Merc** — Flandreau, South Dakota's neighborhood gastropub, coffee bar, and live music venue.

**113 E 2nd Ave, Flandreau, SD 57028 · (605) 573-0913**

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run ESLint checks |

---

## Project Structure

```
The Merc/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── menu/page.tsx       # Menu page
│   ├── events/page.tsx     # Events & Live Music
│   ├── gallery/page.tsx    # Photo Gallery
│   ├── about/page.tsx      # About The Merc
│   ├── visit/page.tsx      # Visit / Hours / Directions
│   └── api/square/         # Square API routes (server-side)
│
├── components/
│   ├── home/               # Home page sections
│   ├── layout/             # Navbar, Footer, MobileBottomBar
│   ├── menu/               # Menu components
│   └── ui/                 # Reusable UI components
│
├── data/                   # ← EDIT HERE to update content
│   ├── business.ts         # Address, phone, hours
│   ├── events.ts           # Events & live music schedule
│   ├── menu.ts             # Menu categories and items
│   └── socials.ts          # Social media links
│
├── public/
│   └── images/             # Photos — see IMAGE-GUIDE.md
│
└── .env.local              # Local environment variables
```

---

## How to Update Content

### Hours
Edit `data/business.ts` — find the `hours` array:

```ts
{ day: 'Monday', open: '07:00', close: '14:00', display: '7:00 AM – 2:00 PM' },
```

Use 24-hour format for `open`/`close` (used for OPEN/CLOSED calculation).
`display` is the human-readable string shown on the site.

### Events & Live Music
Edit `data/events.ts` — add to the `events` array:

```ts
{
  id: 'event-2026-09-15',          // Unique ID
  artist: 'Band Name',              // Artist or event name
  eventType: 'live-music',          // 'live-music' | 'trivia' | 'open-mic' | 'other'
  date: '2026-09-15',               // YYYY-MM-DD
  startTime: '19:00',               // 24h format, Central Time
  endTime: '22:00',                 // Optional
  description: 'Short description', // Brief event description
  image: null,                      // Path to event poster or null
  ticketUrl: null,                  // Ticket URL or null if free
  isFeatured: true,                 // Highlight this event?
},
```

Past events are automatically hidden. No server restart needed in production.

### Menu Items
Edit `data/menu.ts` — find the relevant section (pizza, burgers, etc.) and add to `items`:

```ts
{
  id: 'pizza-margherita',
  name: 'Margherita',
  description: 'Fresh tomato, mozzarella, basil.',
  price: '$14.00',
  tags: ['vegetarian'],
  note: null,
},
```

### Social Media Links
Edit `data/socials.ts` — update any social URLs.

### Business Info (Address, Phone)
Edit `data/business.ts` — update `address` and `contact` objects.

---

## Images

See `public/images/IMAGE-GUIDE.md` for a full list of images needed and how to add them.

**Summary:** Replace `PlaceholderImage` components in the code with Next.js `<Image>` components pointing to real photos from The Merc.

---

## Square Online Ordering

### Phase 1 — Order URL redirect (ready now)
Set the ordering URL in `.env.local`:

```env
NEXT_PUBLIC_SQUARE_ORDER_URL=https://order.squareup.com/preview/YOUR_LOCATION
```

Once set, all "Order Online" buttons across the site will automatically redirect there.

If left empty, buttons show an elegant "Coming Soon" state.

### Phase 2 — Full Square API integration (future)
The architecture is ready. API routes exist at:
- `app/api/square/catalog/route.ts` — Fetch catalog from Square
- `app/api/square/checkout/route.ts` — Create checkout sessions

To activate:
1. Install Square SDK: `npm install squareup`
2. Add to `.env.local`:
   ```
   SQUARE_ACCESS_TOKEN=your_secret_token
   SQUARE_LOCATION_ID=your_location_id
   NEXT_PUBLIC_SQUARE_APPLICATION_ID=your_app_id
   SQUARE_ENVIRONMENT=production
   ```
3. Uncomment the implementation in the API route files

**Security:** `SQUARE_ACCESS_TOKEN` is ONLY used server-side. It's never exposed to the browser.

---

## Environment Variables

See `.env.example` for all available variables.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site (for SEO/OG) |
| `NEXT_PUBLIC_SQUARE_ORDER_URL` | Square ordering page URL |
| `NEXT_PUBLIC_SQUARE_APPLICATION_ID` | Square app ID (client-safe) |
| `SQUARE_ACCESS_TOKEN` | Square API token — **SERVER ONLY** |
| `SQUARE_LOCATION_ID` | Your Square location ID |
| `SQUARE_ENVIRONMENT` | `sandbox` or `production` |

---

## Deployment

This project is ready to deploy to **Vercel** or **Cloudflare Pages**.

### Vercel (recommended)
1. Push the project to a GitHub repository
2. Connect the repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Cloudflare Pages
1. Run `npm run build`
2. Deploy the `.next` directory
3. Configure environment variables in Cloudflare dashboard

---

## Tech Stack

- **Next.js 15** — App Router, SSG, server components
- **React 19** — UI framework
- **TypeScript** — Full type safety
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icons

---

## Business Information (as of September 2026)

- **Address:** 113 E 2nd Ave, Flandreau, SD 57028
- **Phone:** (605) 573-0913
- **Facebook:** facebook.com/SiouxRiverSpirits
- **Instagram:** @themercsodak
- **Hours:** Mon 7AM–2PM · Tue–Thu 7AM–9PM · Fri 7AM–11PM · Sat 8AM–11PM · Sun 8AM–8PM
