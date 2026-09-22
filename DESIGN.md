---
name: The Merc
description: Eat. Drink. Coffee. Music. Community. — Flandreau's only full-service venue.
colors:
  amber: "#D4943A"
  amber-light: "#F0A830"
  amber-dark: "#9A6520"
  amber-glow: "rgba(212, 148, 58, 0.18)"
  cream: "#F5EFE0"
  cream-dark: "#E8DFC8"
  cream-muted: "#C8B898"
  merc-black: "#100E0B"
  merc-dark: "#181410"
  merc-surface: "#221C16"
  merc-card: "#2C2418"
  merc-border: "#3D3220"
  muted: "#9A8A6A"
  text-subtle: "#7A6A50"
  red: "#9B3A2E"
  copper: "#A05030"
  green: "#3D7A4A"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 8.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.2em"
rounded:
  sharp: "2px"
  card: "4px"
  pill: "9999px"
spacing:
  section: "5rem"
  section-sm: "3rem"
  section-lg: "7rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #D4943A 0%, #F0A830 100%)"
    textColor: "#100E0B"
    rounded: "2px"
    padding: "0.9rem 2rem"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #F0A830 0%, #FFB840 100%)"
    textColor: "#100E0B"
  button-primary-active:
    backgroundColor: "linear-gradient(135deg, #D4943A 0%, #F0A830 100%)"
    textColor: "#100E0B"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#F5EFE0"
    rounded: "2px"
    padding: "0.9rem 2rem"
  button-secondary-hover:
    backgroundColor: "rgba(245, 239, 224, 0.08)"
    textColor: "#F5EFE0"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#D4943A"
    rounded: "2px"
    padding: "0.75rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "#D4943A"
    textColor: "#100E0B"
  card:
    backgroundColor: "#2C2418"
    rounded: "4px"
    padding: "0"
---

# Design System: The Merc

## Overview

**Creative North Star: "The Burnished Hearth"**

The Merc's visual system is built from the materials of a place that has earned its warmth — richly darkened wood, amber firelight, the weight of good food and cold beer. The palette is not warm-for-warm's-sake; it is earned depth. Brown-blacks that hover between espresso and woodsmoke anchor the backgrounds. Amber gold — always in gradient, never flat — carries the brand's energy the way a lit window carries welcome. Cream stands in for white: softer, richer, more honest.

The typography is deliberately theatrical without being theatrical about it. Playfair Display lands with editorial weight — tight leading, negative tracking, tight-to-the-edge on hero headings — and then steps back entirely to let Inter carry the actual work: labels, captions, buttons, navigation. The pairing is confident: Playfair makes the impression, Inter closes the deal.

Motion in this system is felt, not watched. Interactions respond to the user's hand — a 2px lift on hover, a 3% scale compression on press — without performing for an audience. The goal is tactile credibility, not animation theatre. Every moving thing in this system has a reason to move.

**Key Characteristics:**
- Amber gold earns its place — primary accent on ≤15% of any screen at a time
- Playfair Display for drama; Inter for everything that needs to be read
- Almost-square corners (2px on interactive elements, 4px on containers) — sharp and considered, not cold
- Depth through tonal layering and warm shadows, not flat decoration
- Motion is micro-physical: lifts, compressions, fades — not slides, spins, or bounces

---

## Colors

The palette is three values deep: the warmth of amber, the richness of near-black, and the relief of cream — nothing more is needed.

### Primary
- **Molten Amber** (`#D4943A`): The brand's defining accent. Used on CTAs, active nav states, icon accents, section dividers, and focus rings. In gradient form (`→ #F0A830`) on primary buttons and decorative glows. Rarity is the point — amber only appears where it must.
- **Amber Light** (`#F0A830`): The bright tip of the amber gradient; used as the gradient terminus on btn-primary and accent decorations. Never used as a flat fill — always as a gradient component alongside `amber`.
- **Amber Dark** (`#9A6520`): The shadow at amber's base. Used for hover states on links, amber gradient decorations that need grounding, and the scrollbar hover state.

### Neutral
- **Warm Almost-Black** (`#100E0B`): The absolute floor. Used for text on amber buttons — the only surface where text is dark-on-light. Scrollbar track, deepest background slots.
- **Rich Brown-Black** (`#181410`): Primary page background — dark but not cold. Distinguished from black by visible warmth in its brown undertone.
- **Warm Surface** (`#221C16`): Card and section background one step up. Used as the second layer — section backgrounds that need to read "inside."
- **Card Surface** (`#2C2418`): Card backgrounds. Enough contrast against `merc-surface` to register as a raised layer without a border alone.
- **Amber-Tinted Border** (`#3D3220`): All dividers and borders. Brown-amber tint prevents borders from reading as cool grey intrusions.
- **Warm Muted Text** (`#9A8A6A`): Supporting metadata — hours labels, nav subtitles, captions, secondary info. WCAG AA compliant at ~5.9:1 on `merc-black`.
- **Subtle Text** (`#7A6A50`): Decorative or tertiary text only — italicized footnotes, deeply subordinate labels. Below AA threshold; do not use for information.
- **Cream** (`#F5EFE0`): Primary foreground text and most UI text. Off-white with perceptible warmth — never bright white.
- **Cream Dark** (`#E8DFC8`): Secondary text and light decorative borders.
- **Cream Muted** (`#C8B898`): Placeholder text and image captions.

### Tertiary (semantic)
- **Ember Red** (`#9B3A2E`): Destructive actions, closed/unavailable status backgrounds.
- **Copper** (`#A05030`): Not yet actively used in the UI — reserved for potential secondary accent contexts.
- **Forge Green** (`#3D7A4A`): Open/available status backgrounds only.

### Named Rules
**The One Accent Rule.** Amber is used in one active role at a time: CTA, active state, or accent decoration. Stacking amber text, amber border, and amber glow on the same element dilutes the effect to noise.

**The Warm Floor Rule.** No pure `#000000` or `#FFFFFF` ever appears in this system. The floor is `#100E0B`; the ceiling is `#F5EFE0`. Neutrals carry warmth at every level.

---

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body/UI Font:** Inter (with system-ui, sans-serif fallback)
**Label/UI Font:** Inter, same stack — distinguished by weight and letter-spacing, not a third family

**Character:** Playfair Display carries the brand's editorial drama — its high contrast, open serifs, and weight make headlines feel carved rather than typed. Inter is chosen for its legibility at all sizes and its neutrality, which lets Playfair own the personality layer without competition.

### Hierarchy
- **Display / Hero** (weight 700, `clamp(3.5rem, 10vw, 8.5rem)`, leading 0.95, tracking -0.03em): Used only on the single most important heading per page — the home hero. Tight to the point of compression at large sizes; this is intentional.
- **Headline / XL** (weight 700, `clamp(2.75rem, 7vw, 6rem)`, leading 1.0, tracking -0.025em): Page headers on inner routes (Menu, Events, Gallery, About, Visit). One per page.
- **Title / Large** (weight 700, `clamp(2rem, 4.5vw, 4rem)`, leading 1.05, tracking -0.02em): Section headings on the home page (Welcome, FoodDrink, etc.).
- **Title / Medium** (weight 600, `clamp(1.5rem, 3vw, 2.5rem)`, leading 1.15, tracking -0.015em): Card headings, feature titles, modal headers.
- **Title / Small** (weight 600, `clamp(1.1rem, 2vw, 1.5rem)`, leading 1.2): Sub-section or component headings.
- **Body** (weight 400, `1rem`, leading 1.65): Primary reading text. All paragraph copy. Inter at body size is never bold — bold at body size belongs to labels or UI elements, not prose.
- **Label** (weight 700, `0.75rem`, tracking 0.2em, uppercase, Inter): Section eyebrow labels in amber — "Coffee Bar", "Live Music", "Tonight". The all-caps + ultra-wide tracking is the house voice for section identifiers.
- **Button / UI** (weight 700–800, `0.875rem`, tracking 0.1em, uppercase, Inter): All interactive labels — buttons, nav links, mobile nav items. Same family and case as Label, slightly larger.

### Named Rules
**The Display/Body Firewall.** Playfair Display is used exclusively for headings (h1–h5 and the display-* utility classes). Inter handles all UI, labels, buttons, and body copy. There is no middle ground — a Playfair Display paragraph is a system violation, not a stylistic choice.

**The Size Floor Rule.** No text smaller than 0.75rem (12px) is used for any information — only the `badge-*` status pill at 0.7rem is the documented exception, where weight and contrast compensate.

---

## Layout

The site uses a centered `max-w-7xl` (1280px) container with `px-4 sm:px-6` gutters — 16px on mobile, 24px on tablet/desktop. This applies to all page sections and the navbar.

The primary breakpoint is `lg` (1024px): below it, all layouts collapse to single-column and the desktop navbar is replaced by a mobile hamburger + bottom navigation bar. Tablet (640px–1023px) uses the mobile layout, not an intermediate grid — this is intentional; the lg breakpoint gives tablet users the same comfortable single-column flow as mobile.

Section vertical rhythm uses the `py-section` (5rem / 80px) token universally, with `py-section-sm` (3rem / 48px) on tighter interior sections. This spacing is not broken below lg — section rhythm stays constant.

**Grid behavior:**
- Two-column content sections (DakotaJoe, VisitCTA, Welcome trio): `grid-cols-1 lg:grid-cols-2`, stacked on mobile
- Three/four-column feature grids (Welcome pillars, QuickInfo): `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4`
- Gallery: responsive CSS grid, auto-fill with `minmax(280px, 1fr)`

**Named Rules**
**The Single Breakpoint Rule.** Design decisions are made for mobile first, then lg — not for sm, md, xl in sequence. If a layout looks right at 375px and 1280px, it works for everyone in between.

---

## Elevation & Depth

This system uses warm shadow layering as its primary depth mechanism — not flat color bands. Shadows are always amber-tinted (never neutral grey) to stay inside the warm brand world. Three elevation levels are used:

### Shadow Vocabulary
- **Ambient warm** (`0 4px 24px rgba(212, 148, 58, 0.18)`): Base glow under featured elements — cards at rest, featured sections. Not dramatic; present enough to separate layers.
- **Warm lifted** (`0 8px 48px rgba(212, 148, 58, 0.25)`): Hover state on prominent cards and feature tiles.
- **Warm hero** (`0 16px 64px rgba(212, 148, 58, 0.3)`): Full lift shadow — reserved for the most prominent interactive states or featured displays.
- **Card at rest** (`0 2px 16px rgba(0,0,0,0.5)`): Dark structural shadow under cards — pairs with the ambient warm glow on hover for a layered feel.
- **Card hover** (`0 12px 40px rgba(0,0,0,0.7)`): Deep shadow that appears on card hover alongside translateY(-5px) lift.
- **Button glow** (`0 6px 20px rgba(212, 148, 58, 0.4)`): Amber halo that appears under btn-primary on hover, reinforcing the lift with light.
- **Glow-pulse** (keyframe: `0 0 8px rgba(212,148,58,0.4)` → `0 0 28px rgba(212,148,58,0.8)`): Used for the glowing-pulse animation on featured decorative elements only.

### Named Rules
**The Flat-By-Default Rule.** All elements start flat. Shadows appear only in response to state (hover, elevation, focus), never as static decoration on body copy or plain containers.

**The Warm Shadow Rule.** No `rgba(0,0,0,X)` shadows appear without a corresponding amber warm shadow alongside them. The sole exception is `card` and `card-hover` (structural dark shadows) which are paired with `border-color` changes for warmth.

---

## Shapes

The form language is deliberately minimal and sharp — almost but not quite square. This avoids the softness of rounded-md/rounded-lg (too casual) and the clinical feel of zero radius (too institutional).

- **Interactive elements** (buttons, nav items, focus rings): `2px` radius (`rounded-merc`). This is the house unit — barely visible, but enough to show intention.
- **Card containers** and panels: `4px` radius (`rounded-card`). One step softer than interactive, used consistently on all `.card` surfaces, image tiles, and modal-style containers.
- **Pill shapes**: `9999px` (`rounded-pill`). Reserved exclusively for status badges (Open/Closed, Tonight) and tag-style labels. Not used on buttons.
- **Sharp** (`0px`): Some structural dividers and bottom-bar tab indicators use zero radius. Used only when a hard edge is structurally meaningful (e.g., the amber left-border active indicator on mobile nav items).

**Named Rules**
**The No-Round Rule.** `rounded-md` (6px), `rounded-lg` (8px), and above are not used in this system. Anything softer than `4px` breaks the sharp, considered character of the brand. Deviations require explicit justification.

---

## Components

### Buttons
Tactile, confident, uppercase — buttons command without shouting. The three-tier hierarchy (primary / secondary / ghost) covers all decision contexts.

- **Shape:** 2px radius (rounded-merc) on all variants. Uppercase text, Inter, 0.875rem, weight 700–800, tracking 0.1em.
- **Primary:** Amber-to-amber-light gradient (`linear-gradient(135deg, #D4943A 0%, #F0A830 100%)`), near-black text (`#100E0B`). Padding: `0.9rem 2rem`. Bold box shadow at rest (`0 2px 0 rgba(0,0,0,0.3)`) — the only button that casts a pressed-in shadow.
- **Hover (pointer: fine only):** `translateY(-2px)` lift + amber glow (`0 6px 20px rgba(212,148,58,0.4)`) + brighter gradient terminus. Gated behind `@media (hover: hover) and (pointer: fine)` — no hover transform on touch.
- **Active:** `scale(0.97)` press-in on all three variants. `translateY(0)` on primary to cancel the hover lift.
- **Secondary:** Transparent background, cream text (`#F5EFE0`), `1.5px solid rgba(245,239,224,0.35)` border. Hover: border opacifies to `0.75` + faint cream fill `rgba(245,239,224,0.08)`. `translateY(-1px)` on hover (pointer gate).
- **Ghost:** Transparent background, amber text and border (`1.5px solid #D4943A`). On hover: fills solid amber, text goes near-black — a full inversion. Glow appears: `0 4px 16px rgba(212,148,58,0.3)`.

### Cards
Cards are the primary content container for events, gallery items, menu items, and feature tiles. They lift on hover with a physical feel.

- **Corner Style:** 4px radius (rounded-card)
- **Background:** `#2C2418` (merc-card) — one step warmer than the section surface
- **Border:** `1px solid #3D3220` (merc-border) at rest; transitions to `rgba(212,148,58,0.25)` on hover
- **Shadow Strategy:** Dark structural shadow at rest (`0 2px 16px rgba(0,0,0,0.5)`); deep shadow on hover (`0 12px 40px rgba(0,0,0,0.7)`) paired with `translateY(-5px)` lift and eased by `var(--ease-out)` (cubic-bezier 0.23, 1, 0.32, 1). Hover transitions gated behind pointer: fine.
- **Internal Padding:** None on the card container itself (`overflow: hidden`); inner content sections add their own padding.

### Navigation
The navbar is fixed, transparent over hero imagery, and transitions to a near-black frosted state on scroll (97% opacity + `backdrop-blur-xl`). Transition covers only `background-color`, `border-color`, and `box-shadow` — not the full `transition: all` which would animate every CSS property on scroll.

- **Wordmark:** Playfair Display, 1.5–2rem, weight 700, tracking -0.02em, cream. Hover: transitions to amber (200ms). Subtitle "Flandreau · SD" in 9px Inter, tracking 0.25em, muted.
- **Desktop nav links:** Inter, 0.75rem, weight 700, tracking 0.12em, uppercase. Default: `#F5EFE0/70`. Hover: `#F5EFE0`. Active: amber (`#D4943A`). Active has an amber underline (`h-0.5`) that scales in from 0 to full; hover shows a 50% width half-opacity preview of the underline.
- **Mobile menu:** Framer Motion `AnimatePresence` — `opacity: 0, y: -8` → `opacity: 1, y: 0`, 200ms, ease-out. Active mobile item: amber text + amber left-border (2px) + amber-tinted background (`rgba(212,148,58,0.1)`). Inactive: cream/70.
- **Hamburger button:** 46px touch target (`p-3`). Cream icon, hover to amber. `aria-expanded` reflects state.

### Status Badges
Pill-shaped status indicators for venue open/closed state and event occurrence.

- **Open:** `rgba(61,122,74,0.2)` background, `#5DC877` text, `rgba(61,122,74,0.4)` border. 0.7rem, weight 800, uppercase, tracking 0.1em.
- **Closed:** `rgba(155,58,46,0.2)` background, `#E07060` text, `rgba(155,58,46,0.35)` border. Same type treatment.
- **Shape:** 9999px radius (pill) — the only pill shape in the system.
- No animation on status dots. The `animate-pulse` was removed from both the QuickInfo open indicator and the UpcomingEvents "Tonight" dot.

### Section Label
The house eyebrow identifier — amber, all-caps, ultra-wide tracking — that precedes every section heading.

- Inter, 0.75rem, weight 700, tracking 0.2em, uppercase, color `#D4943A`.
- Always appears directly above the section heading with a small bottom margin (0.75rem).
- Not used as a standalone label — always precedes a Playfair Display heading.

---

## Do's and Don'ts

### Do:
- **Do** use `rgba(212, 148, 58, X)` for all amber-tinted glow shadows — the exact color is the brand signature. Do not substitute with `rgba(255, 165, 0, X)` or any other orange.
- **Do** gate all hover `transform` effects (translateY lifts, scale lifts on images) behind `@media (hover: hover) and (pointer: fine)` — touch users get no transform flash.
- **Do** apply the `section-label` class (amber, Inter, uppercase, wide tracking) as the eyebrow above every Playfair Display section heading.
- **Do** use `var(--ease-out)` (`cubic-bezier(0.23, 1, 0.32, 1)`) for any translateY or translateX movement — the sharp deceleration is the physical feel of the brand.
- **Do** keep `muted` (`#9A8A6A`) as the minimum text color for informational text on dark backgrounds — it meets WCAG AA contrast (~5.9:1 on merc-black).
- **Do** use `transition-property` explicitly on all interactive elements — never `transition: all`, which composites off-GPU and introduces janky scroll-based repaints.

### Don't:
- **Don't** use `rounded-md` (6px) or larger on buttons, nav elements, or cards. The house radius is 2px (interactive) and 4px (containers). Rounder shapes break the sharp, considered character.
- **Don't** add amber text, amber border, and amber glow to the same element simultaneously — amber's power comes from scarcity. One amber role per element.
- **Don't** use `animate-pulse` or looping CSS animations on status indicators or decorative dots in the main UI flow. Looping motion is distracting and violates `prefers-reduced-motion` intent.
- **Don't** use Playfair Display for body copy, captions, or any text that needs to be sustained reading. Its high contrast and display proportions are designed for display sizes only.
- **Don't** use `transition: all` — specify only the properties that actually change (`transform`, `opacity`, `background`, `border-color`, `box-shadow`).
- **Don't** use `#7A6A50` (text-subtle) for any information that needs to be read — it is below WCAG AA contrast on dark backgrounds. Restrict it to decorative italic footnotes.
- **Don't** introduce pure `#000000` or `#FFFFFF` — the warm floor is `#100E0B`, the warm ceiling is `#F5EFE0`.
