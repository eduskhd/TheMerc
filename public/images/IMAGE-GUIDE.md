# The Merc — Image Guide

This directory contains (or will contain) all images for the website.

## Required Images

Replace the placeholder components in the code with actual photos from The Merc.
All images should be high-quality JPG or WebP format.

### Hero & General
| File | Description | Ideal size |
|------|-------------|------------|
| `hero-bg.jpg` | Full-width hero background — exterior or bar at night | 1920×1080+ |
| `og-image.jpg` | Social sharing / Open Graph image | 1200×630 |

### Venue
| File | Description |
|------|-------------|
| `merc-exterior.jpg` | Building exterior from the street |
| `merc-interior.jpg` | Wide interior shot showing both coffee bar and bar area |
| `merc-bar.jpg` | Bar counter / tap handles |
| `merc-front.jpg` | Coffee bar / front seating area |

### Food & Drink
| File | Description |
|------|-------------|
| `menu-pizza.jpg` | Hero shot of The Merc's pizza |
| `menu-burgers.jpg` | Burger photo |
| `menu-good-eats.jpg` | Food variety shot |
| `menu-coffee.jpg` | Dakota Joe coffee / espresso drink |
| `menu-drinks.jpg` | Craft beers or cocktails |
| `dakota-joe-coffee.jpg` | Dakota Joe Coffee setup at The Merc |

### Events & Music
| File | Description |
|------|-------------|
| `events/live-music-1.jpg` | Live music performance on stage |
| `events/live-music-2.jpg` | Another performance or musician close-up |
| `events/crowd.jpg` | Audience / crowd shot |

### Gallery
Place gallery photos in `/public/images/gallery/`:
- `merc-exterior.jpg`
- `merc-interior-bar.jpg`
- `merc-interior-front.jpg`
- `merc-pizza.jpg`
- `merc-burger.jpg`
- `merc-coffee.jpg`
- `merc-cocktail.jpg`
- `merc-beer.jpg`
- `merc-live-music-1.jpg`
- `merc-live-music-2.jpg`
- `merc-crowd.jpg`
- `merc-good-eats.jpg`

## Adding Images to the Code

After placing images, replace `PlaceholderImage` components with Next.js `Image`:

```tsx
import Image from 'next/image'

// Replace:
<PlaceholderImage label="..." />

// With:
<Image
  src="/images/merc-exterior.jpg"
  alt="The Merc exterior — 113 E 2nd Ave, Flandreau SD"
  fill
  className="object-cover"
/>
```

## Sources
- Download real photos from The Merc's Instagram: @themercsodak
- Check The Merc's Facebook page for additional photos
- Ask the owner directly for high-res marketing photos
