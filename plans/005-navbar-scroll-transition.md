# 005 — Fix Navbar scroll-state transition

- **Status**: TODO
- **Commit**: ae2fdfb
- **Severity**: HIGH
- **Category**: Performance + Easing
- **Estimated scope**: 1 file (`components/layout/Navbar.tsx`), 1 line changed; optional 1-line addition to `tailwind.config.ts`

## Problem

The Navbar header uses `transition-all duration-400` on the element that fires on every scroll frame:

```tsx
/* components/layout/Navbar.tsx:28 — current */
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
  isScrolled || isMobileOpen
    ? 'bg-merc-black/97 backdrop-blur-xl border-b border-merc-border shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
    : 'bg-gradient-to-b from-merc-black/70 to-transparent'
}`}
```

Two bugs on one line:

1. **`transition-all`** — fires on every scroll tick and animates every CSS property (including `width`, `height`, `padding`, `position` — any property the browser decides to transition). On a fixed header this fires constantly while the user scrolls.

2. **`duration-400`** — this value does not exist in Tailwind's default transition-duration scale (which ships: 75, 100, 150, 200, 300, 500, 700, 1000ms) and is not registered in `tailwind.config.ts`. Tailwind JIT generates nothing for this class. The actual scroll transition runs at Tailwind's default `150ms` from the `transition-all` class — the intended 400ms never fires. This is a silent bug.

The scroll-state change involves: `background-color`, `backdrop-filter`, `border-color`, and `box-shadow`. Those are the only four properties that should transition.

## Target

Replace `transition-all duration-400` with explicit property-specific Tailwind utilities. The correct duration for a navbar background fill is `300ms` — slow enough to feel intentional, fast enough to not lag the scroll.

```tsx
/* components/layout/Navbar.tsx:28 — target */
className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
  isScrolled || isMobileOpen
    ? 'bg-merc-black/97 backdrop-blur-xl border-b border-merc-border shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
    : 'bg-gradient-to-b from-merc-black/70 to-transparent'
}`}
```

Note: `backdrop-filter` (used for `backdrop-blur-xl`) is not included in the transition list intentionally — `backdrop-filter` transitions are expensive in Safari and not visually required here. The blur appears/disappears instantly as part of the background fill.

**Why `duration-300`:** The current button transitions use `0.2s`; the card uses `0.3s`. A navbar fill-in at `300ms` sits in the card range — appropriate for a larger element changing state. `150ms` (what was silently firing before) is correct for small elements but too fast for a full-width header fill.

## Repo conventions to follow

- Tailwind arbitrary property transitions use the `transition-[...]` syntax with square brackets. This is standard Tailwind v3 JIT syntax, already used elsewhere in this codebase (e.g. `shadow-[0_4px_24px_rgba(...)]`).
- Duration tokens in Tailwind default scale: use `duration-300` (300ms). Do NOT add `duration-400` to `tailwind.config.ts` — it is no longer needed.
- Exemplar of correct property-specific transition in this project: `globals.css:230` — `.card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }`.

## Steps

1. Open `components/layout/Navbar.tsx`.

2. Locate line 28 (the `<header>` className). Find `transition-all duration-400`.

3. Replace `transition-all duration-400` with `transition-[background-color,border-color,box-shadow] duration-300`.

   The full updated className string:
   ```tsx
   className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
     isScrolled || isMobileOpen
       ? 'bg-merc-black/97 backdrop-blur-xl border-b border-merc-border shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
       : 'bg-gradient-to-b from-merc-black/70 to-transparent'
   }`}
   ```

4. No changes to `tailwind.config.ts` required.

## Boundaries

- Do NOT change any other className on the `<header>` element.
- Do NOT touch the `isScrolled` or `isMobileOpen` logic.
- Do NOT add `backdrop-filter` to the transition list.
- Do NOT touch any other element in `Navbar.tsx`.

## Verification

- **Mechanical**: `npm run build` — must exit 0.
- **Feel check**:
  - Load http://localhost:3000. Scroll down slowly past 50px. The navbar should transition from transparent to the solid dark background over ~300ms with a perceptible but smooth fill. It should not hard-cut (too fast) or feel laggy (too slow).
  - In DevTools Animations panel at 10% speed: trigger the scroll transition and confirm only `background-color`, `border-color`, and `box-shadow` animate. No `width`, `height`, or layout properties should appear.
  - Scroll up rapidly and down rapidly — the transition should retarget cleanly (CSS transitions retarget mid-animation).
- **Done when**: `transition-all` and `duration-400` are both gone from `Navbar.tsx:28`; the scroll state change animates at 300ms with no layout-property side effects.
