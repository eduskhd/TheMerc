# 002 — Gate hover transforms with `pointer: fine` media query

- **Status**: TODO
- **Commit**: ae2fdfb
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 1 file (`app/globals.css`), ~20 lines added

## Problem

Three CSS hover rules apply `transform` (position change) without a `@media (hover: hover) and (pointer: fine)` gate. On touch devices, tapping any button or card fires the `:hover` pseudo-class, causing the element to flash its lift animation before the tap resolves. This produces a jarring visual glitch on every mobile tap — the element jumps up and snaps back.

Affected rules:

```css
/* app/globals.css:163 — current */
.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-amber-light) 0%, #FFB840 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 148, 58, 0.4), 0 2px 0 rgba(0,0,0,0.3);
}

/* app/globals.css:191 — current */
.btn-secondary:hover {
  border-color: rgba(245, 239, 224, 0.75);
  background: rgba(245, 239, 224, 0.08);
  transform: translateY(-1px);
}

/* app/globals.css:230 — current */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  border-color: rgba(212, 148, 58, 0.25);
}
```

The `background`, `border-color`, and `box-shadow` changes are desirable on all devices (they serve as tap feedback). Only the `transform: translateY(...)` needs to be gated.

## Target

Extract only the `transform` line from each hover rule and wrap it in a `@media (hover: hover) and (pointer: fine)` block. Leave all other hover properties (color, background, box-shadow) in their current ungated rules.

```css
/* app/globals.css — btn-primary:hover stays as-is MINUS transform */
.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-amber-light) 0%, #FFB840 100%);
  box-shadow: 0 6px 20px rgba(212, 148, 58, 0.4), 0 2px 0 rgba(0,0,0,0.3);
  /* transform removed from here */
}

/* New gated block — add after the .btn-primary rules */
@media (hover: hover) and (pointer: fine) {
  .btn-primary:hover { transform: translateY(-2px); }
  .btn-secondary:hover { transform: translateY(-1px); }
  .card:hover { transform: translateY(-5px); }
}
```

```css
/* app/globals.css — btn-secondary:hover stays as-is MINUS transform */
.btn-secondary:hover {
  border-color: rgba(245, 239, 224, 0.75);
  background: rgba(245, 239, 224, 0.08);
  /* transform removed from here */
}
```

```css
/* app/globals.css — .card:hover stays as-is MINUS transform */
.card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  border-color: rgba(212, 148, 58, 0.25);
  /* transform removed from here */
}
```

All three gated `transform` rules consolidated into a **single** `@media (hover: hover) and (pointer: fine)` block placed after the `.card` rules (around line 236), before the section divider comment.

## Repo conventions to follow

- All base component styles live in `app/globals.css` as plain CSS. Do not convert to Tailwind.
- Group the gated block together (one `@media` block for all three transforms) rather than wrapping each hover rule individually — keeps the file readable.
- Exemplar: there is currently no gated hover in this file; this plan introduces the pattern.

## Steps

1. In `app/globals.css`, find `.btn-primary:hover` (around line 163). Remove `transform: translateY(-2px);` from that rule. The rule should retain `background` and `box-shadow` only.

2. Find `.btn-secondary:hover` (around line 191). Remove `transform: translateY(-1px);`. The rule should retain `border-color` and `background`.

3. Find `.card:hover` (around line 232). Remove `transform: translateY(-5px);`. The rule should retain `box-shadow` and `border-color`.

4. After the `.card:hover` rule (after the closing `}`, before the next comment block), insert:

   ```css
   @media (hover: hover) and (pointer: fine) {
     .btn-primary:hover { transform: translateY(-2px); }
     .btn-secondary:hover { transform: translateY(-1px); }
     .card:hover { transform: translateY(-5px); }
   }
   ```

## Boundaries

- Do NOT move or modify `background`, `box-shadow`, or `border-color` declarations inside hover rules.
- Do NOT touch `.btn-ghost:hover` — it has no `transform` and is unaffected.
- Do NOT touch any Tailwind `hover:` utilities in TSX files (those are a separate issue for `SocialFollow.tsx:69` and `FoodDrink.tsx:132`).
- Do NOT change the card's existing `transition` property on line 230.
- If line numbers have drifted since commit `ae2fdfb`, locate by selector name.

## Verification

- **Mechanical**: `npm run build` — must exit 0.
- **Feel check**:
  - On a real touch device (or DevTools device emulation with Touch enabled): tap the primary CTA button, a secondary button, and a food card. None should flash a translateY lift on tap. Color/background changes are fine and expected.
  - On a desktop mouse: hover over all three element types and confirm the translateY lifts still fire normally.
  - In DevTools Animations panel at 10% speed: hover a `.card` — confirm `translateY(-5px)` still fires on desktop.
- **Done when**: No touch-device tap on a button or card causes a positional flash.
