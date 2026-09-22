# 003 — Fix nuclear `prefers-reduced-motion` implementation

- **Status**: TODO
- **Commit**: ae2fdfb
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 1 file (`app/globals.css`), ~15 lines replaced

## Problem

The current reduced-motion block uses `transition-duration: 0.01ms !important` on `*` — the "nuclear" approach that kills every transition on the page for users who prefer reduced motion. This includes color changes on hover, focus indicator transitions, and active state feedback that aids comprehension. Users who opt into reduced motion for vestibular or seizure reasons lose all interactive feedback, making the site harder to use, not easier.

```css
/* app/globals.css:331 — current */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

The correct approach: remove positional/scale animations (the ones that cause vestibular symptoms) while preserving color and opacity transitions (the ones that confirm user actions).

## Target

Replace the nuclear block with a surgical approach:

```css
/* app/globals.css — target */
@media (prefers-reduced-motion: reduce) {
  /* Kill all movement and looping animations */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    /* intentionally NOT setting transition-duration here */
  }

  /* Zero out transform-based transitions on specific moving elements */
  .btn-primary,
  .btn-secondary,
  .btn-ghost {
    transition-property: background, color, border-color, box-shadow, opacity !important;
  }

  .card {
    transition-property: box-shadow, border-color, opacity !important;
  }

  header {
    transition: none !important;
  }

  /* Zero transform on all hover states */
  .btn-primary:hover,
  .btn-secondary:hover,
  .card:hover {
    transform: none !important;
  }

  /* Zero transform on active press states */
  .btn-primary:active,
  .btn-secondary:active,
  .btn-ghost:active {
    transform: none !important;
  }
}
```

**What this preserves (still transitions for reduced-motion users):**
- `transition-colors` on nav links, footer links, social icons — confirms hover
- `background`, `color`, `border-color`, `box-shadow` on buttons — confirms active state
- `opacity` changes — confirms any fade-based feedback

**What this removes:**
- All `@keyframes` animation loops (fadeUp, fadeIn, pulse-dot, glowPulse, shimmer)
- `transform: translateY` lifts on hover (buttons, cards)
- `transform: translateY` on scroll (navbar header)
- Press-state scale (plan 006, once added)

## Repo conventions to follow

- The `prefers-reduced-motion` block lives at the end of the `/* ANIMATIONS */` section in `globals.css`, before `/* UTILITY OVERRIDES */`. Keep it there.
- Exemplar: no correct exemplar exists in this codebase yet; this plan introduces the pattern.
- Use `!important` sparingly and only where needed to override specificity, matching the pattern in the current block.

## Steps

1. In `app/globals.css`, locate the `@media (prefers-reduced-motion: reduce)` block (lines 331–338). Delete the entire block.

2. In its place, insert the target block exactly as written in the Target section above.

3. If plan 001 has already been executed (button `transition: all` replaced with explicit properties), the `transition-property` overrides in this plan are still correct — they further narrow what transitions even if the base button transitions are already specific.

## Boundaries

- Do NOT touch any other CSS rules outside the `@media (prefers-reduced-motion: reduce)` block.
- Do NOT add `prefers-reduced-motion` handling to any TSX file — this plan is CSS-only.
- Do NOT change `scroll-behavior: auto !important` — retain it from the original block.
- Execute plan 001 first if possible, so the button `transition:` properties are already specific before this plan locks them down further.

## Verification

- **Mechanical**: `npm run build` — must exit 0.
- **Feel check**:
  - In DevTools → Rendering panel, enable "Emulate CSS media feature prefers-reduced-motion: reduce".
  - Hover the primary CTA button — confirm the amber background fills in (color transition works) but the button does NOT lift (transform removed).
  - Hover a food card — confirm border color shift works but card does NOT translateY up.
  - Hover a nav link — confirm text color change still animates normally.
  - The `animate-pulse` dots (QuickInfo open indicator, Tonight banner dot) — confirm they stop pulsing and remain static.
  - Disable reduced-motion emulation — confirm all animations are fully restored.
- **Done when**: With reduced-motion enabled, interactive color feedback survives; no element moves position or scales.
