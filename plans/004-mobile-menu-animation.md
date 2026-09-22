# 004 — Animate mobile menu open and close

- **Status**: TODO
- **Commit**: ae2fdfb
- **Severity**: HIGH
- **Category**: Interruptibility
- **Estimated scope**: 1 file (`components/layout/Navbar.tsx`), ~25 lines changed

## Problem

The mobile menu is conditionally rendered with a JavaScript boolean — the dropdown mounts and unmounts instantly with zero transition. This is the most-touched mobile interaction on the site and it currently hard-cuts in both directions.

```tsx
/* components/layout/Navbar.tsx:106 — current */
{isMobileOpen && (
  <div className="lg:hidden bg-merc-black border-t border-merc-border">
    <nav aria-label="Mobile navigation">
      ...
    </nav>
  </div>
)}
```

Because the element is conditionally mounted, CSS transitions cannot run on entry or exit — a transition fires on a property change, but mount/unmount is not a property change.

## Target

Use Framer Motion's `AnimatePresence` + `motion.div` — Framer Motion is already installed in this project (`package.json` lists it as a dependency) and no new install is needed.

The menu slides down (`y: -8`) and fades in on open; reverses on close. Duration matches the existing nav link transition cadence (200ms):

```tsx
/* components/layout/Navbar.tsx — target */
import { AnimatePresence, motion } from 'framer-motion'

{/* Inside the <> return, wrapping the mobile menu */}
<AnimatePresence>
  {isMobileOpen && (
    <motion.div
      key="mobile-menu"
      className="lg:hidden bg-merc-black border-t border-merc-border"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      <nav aria-label="Mobile navigation">
        ...
      </nav>
    </motion.div>
  )}
</AnimatePresence>
```

**Why these values:**
- `y: -8` — small displacement (8px) so the menu appears to unfold from the header rather than slide in from far above
- `opacity: 0 → 1` — fade-in reinforces the reveal
- `duration: 0.2` — matches `transition-colors duration-200` used on nav links; feels cohesive
- `ease: [0.23, 1, 0.32, 1]` — strong ease-out (cubic-bezier from AUDIT.md `--ease-out`); starts fast and settles, making the open feel responsive
- `exit` reverses at the same duration — symmetric close is correct for a simple drawer (no reason to make close faster than open here)

## Repo conventions to follow

- Framer Motion is already a dependency; do not install anything.
- The only existing Framer Motion usage in this file is none — this plan introduces it.
- Import `AnimatePresence` and `motion` from `'framer-motion'` at the top of the file, after the existing React/Next imports.
- Keep the existing `className` values on the div unchanged — only convert `<div>` to `<motion.div>` and add the animation props.

## Steps

1. Open `components/layout/Navbar.tsx`.

2. Add to the import block at the top (after the existing imports):
   ```tsx
   import { AnimatePresence, motion } from 'framer-motion'
   ```

3. Locate the mobile menu block starting at line 106:
   ```tsx
   {isMobileOpen && (
     <div className="lg:hidden bg-merc-black border-t border-merc-border">
   ```

4. Wrap the entire `{isMobileOpen && (...)}` expression in `<AnimatePresence>`:
   ```tsx
   <AnimatePresence>
     {isMobileOpen && (
       ...
     )}
   </AnimatePresence>
   ```

5. Change the outer `<div>` to `<motion.div>` and add the animation props and `key`:
   ```tsx
   <motion.div
     key="mobile-menu"
     className="lg:hidden bg-merc-black border-t border-merc-border"
     initial={{ opacity: 0, y: -8 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -8 }}
     transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
   >
   ```

6. Close with `</motion.div>` instead of `</div>`. All interior content (`<nav>`, `<ul>`, links, `OrderOnlineButton`) remains unchanged.

7. Close `</AnimatePresence>` after the `{isMobileOpen && (...)}` expression.

## Boundaries

- Do NOT change any interior content, links, or classes inside the menu.
- Do NOT change the hamburger button toggle logic (`isMobileOpen` state, `setIsMobileOpen`).
- Do NOT animate individual menu items (link stagger) — that is out of scope for this plan.
- Do NOT add `useReducedMotion()` in this plan — the global CSS plan 003 handles reduced-motion for keyframe animations; Framer Motion checks `prefers-reduced-motion` at the JS level and will disable its own animations automatically when the user preference is set.
- If Framer Motion's version in `package.json` is below v11, check if `AnimatePresence` import path differs. Do not upgrade Framer Motion versions.

## Verification

- **Mechanical**: `npm run build` — must exit 0 with no TypeScript errors. TypeScript may flag `motion.div` props if Framer Motion types are missing — run `npm run build` to confirm.
- **Feel check**:
  - On mobile viewport (≤1024px), tap the hamburger icon. The menu should fade-slide down from the header over ~200ms.
  - Tap the X to close. The menu should fade-slide back up and disappear.
  - Tap rapidly (open → close → open before animation finishes). `AnimatePresence` should handle this cleanly without stuttering — confirm no visual artifact.
  - In DevTools Animations panel at 10% speed: open the menu and confirm the `opacity` and `transform` values animate from their `initial` to `animate` values.
- **Done when**: Mobile menu open and close both have a smooth 200ms ease-out transition with no hard cut.
