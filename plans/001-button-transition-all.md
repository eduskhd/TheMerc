# 001 — Replace `transition: all` on button classes

- **Status**: TODO
- **Commit**: ae2fdfb
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 1 file (`app/globals.css`), ~6 lines changed

## Problem

All three button classes share `transition: all 0.2s ease`, which animates every animatable CSS property — including layout-triggering properties (`width`, `height`, `padding`, `margin`) and paint-triggering properties (`background-color`, `color`, `border-color`) — through the compositor, the most expensive path. Only `transform` and `opacity` are GPU-composited. Every button press on every page hits this.

```css
/* app/globals.css:160 — current */
.btn-primary {
  transition: all 0.2s ease;
}

/* app/globals.css:189 — current */
.btn-secondary {
  transition: all 0.2s ease;
}

/* app/globals.css:213 — current */
.btn-ghost {
  transition: all 0.2s ease;
}
```

The actual properties that change in each button's hover/active state:
- **btn-primary**: `background` (gradient swap), `transform` (translateY), `box-shadow`
- **btn-secondary**: `border-color`, `background`, `transform` (translateY)
- **btn-ghost**: `background`, `color`, `box-shadow`

## Target

Replace `transition: all` with explicit property lists matching only what each button's hover/active state actually animates:

```css
/* app/globals.css — target for btn-primary */
.btn-primary {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

/* app/globals.css — target for btn-secondary */
.btn-secondary {
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

/* app/globals.css — target for btn-ghost */
.btn-ghost {
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}
```

Duration `0.2s` and easing `ease` are retained as-is (color/background changes → `ease` is correct per spec; this plan does not change timing, only property scope).

## Repo conventions to follow

- All transitions in this codebase are written as raw CSS strings in `app/globals.css` for the base component classes. Do not convert to Tailwind utilities.
- No easing tokens exist yet; use raw values matching what is currently there (`0.2s ease`).
- Exemplar of correct property-specific transition already in this file: `globals.css:230` — `.card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }` — follow that exact multi-value pattern.

## Steps

1. In `app/globals.css`, locate line 160 inside `.btn-primary {}`. Replace:
   ```css
   transition: all 0.2s ease;
   ```
   with:
   ```css
   transition:
     transform 0.2s ease,
     box-shadow 0.2s ease,
     background 0.2s ease;
   ```

2. In `app/globals.css`, locate line 189 inside `.btn-secondary {}`. Replace:
   ```css
   transition: all 0.2s ease;
   ```
   with:
   ```css
   transition:
     border-color 0.2s ease,
     background 0.2s ease,
     transform 0.2s ease;
   ```

3. In `app/globals.css`, locate line 213 inside `.btn-ghost {}`. Replace:
   ```css
   transition: all 0.2s ease;
   ```
   with:
   ```css
   transition:
     background 0.2s ease,
     color 0.2s ease,
     box-shadow 0.2s ease;
   ```

## Boundaries

- Do NOT touch any hover or active state rules — only the base `transition:` property on each class.
- Do NOT change durations or easing values.
- Do NOT touch `Navbar.tsx`, `components/`, or any TSX file.
- Do NOT change the `.card` transition on line 230 (handled by plan 005 if needed).
- If the line numbers have shifted since commit `ae2fdfb`, locate by class name (`.btn-primary`, `.btn-secondary`, `.btn-ghost`) rather than line number.

## Verification

- **Mechanical**: `npm run build` — must exit 0 with no TypeScript or lint errors.
- **Feel check**: Open http://localhost:3000, hover and click the amber "Order Online" button (hero), a secondary button, and a ghost button.
  - In DevTools → Animations panel, set playback to 10% speed.
  - Confirm each button's hover and press transition animates only the expected visual properties (lift, glow, color fill) with no unexpected layout shifts.
  - Toggle `prefers-reduced-motion` in DevTools → Rendering panel — buttons should lose the transform lift but retain color transitions (note: full reduced-motion fix is plan 003).
- **Done when**: No button class contains `transition: all` in `globals.css`.
