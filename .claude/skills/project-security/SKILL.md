---
name: project-security
description: >-
  Security review for The Merc Next.js 15 static website. Covers React XSS
  patterns, security headers, environment variable isolation (Square tokens),
  external link safety, JSON-LD/OG injection, CSP status, dependency
  vulnerabilities, and API stub hardening.
---

# Project Security — The Merc Website

Security audit for a **static Next.js 15 site** with no auth, no database, and
no user-generated content. The attack surface is narrow but real. This skill
covers the areas that apply.

Default to **audit-only**. Never modify `.env.local`, secrets, or dependencies
without explicit user authorisation.

---

## Scope (what applies to this project)

| Category | Applies | Rationale |
|---|---|---|
| XSS in React components | ✅ | `dangerouslySetInnerHTML` usage, unescaped content |
| Security headers | ✅ | Configured in `next.config.ts` |
| Env var isolation | ✅ | `SQUARE_ACCESS_TOKEN` must never be `NEXT_PUBLIC_` |
| External link safety | ✅ | `rel="noopener noreferrer"` on all `target="_blank"` links |
| JSON-LD injection | ✅ | Structured data in `app/layout.tsx` |
| OG/meta injection | ✅ | User-controlled data flows into meta tags |
| Dependency vulnerabilities | ✅ | `npm audit` |
| SSRF | ⚠️ | Limited — API stubs call external services server-side |
| API stub hardening | ✅ | `/api/square/catalog` and `/api/square/checkout` |
| CSP | 🟡 | Deferred by design (documented in KNOWN_ISSUES.md) |
| Auth / IDOR / CSRF | ⛔ | No auth system — not applicable |
| File uploads | ⛔ | No upload endpoints — not applicable |
| SQL injection | ⛔ | No database — not applicable |

---

## Checklist

### 1. React XSS Patterns

- [ ] Search all components for `dangerouslySetInnerHTML`
  ```bash
  grep -rn "dangerouslySetInnerHTML" app/ components/
  ```
- [ ] If found: verify the content source is NOT user-controlled or external API data
- [ ] Verify no `eval()`, `Function()`, or `document.write()` in client code
- [ ] Verify no inline `<script>` tags constructed from dynamic data

### 2. Environment Variable Isolation

Critical invariant: `SQUARE_ACCESS_TOKEN` must NEVER use `NEXT_PUBLIC_` prefix.

- [ ] Check `.env.example` — `SQUARE_ACCESS_TOKEN` has no `NEXT_PUBLIC_` prefix
  ```bash
  grep "NEXT_PUBLIC_SQUARE_ACCESS_TOKEN" .env.example .env.local 2>/dev/null
  ```
  → Any match is a **Blocker**
- [ ] Verify all `NEXT_PUBLIC_` variables are safe to expose to the browser
  (Square Order URL, Site URL, Sanity Project ID are all fine)
- [ ] Confirm API routes read `SQUARE_ACCESS_TOKEN` from `process.env` server-side only
  ```bash
  grep -rn "SQUARE_ACCESS_TOKEN" app/ components/ lib/
  ```
  → Must only appear in `app/api/` server-side routes, never in client components

### 3. Security Headers

Check `next.config.ts` for the following headers:

- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: SAMEORIGIN` (or `DENY`)
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy` configured
- [ ] `Strict-Transport-Security` (HSTS) — note: may not apply in dev
- [ ] No header leaks `Server`, `X-Powered-By` that expose stack info

Verify headers are applied to all routes (not just `/`):

```bash
curl -s -I http://localhost:3000/menu | grep -i "x-content\|x-frame\|referrer\|permissions"
```

### 4. External Link Safety

Every `<a target="_blank">` that opens an external URL must have
`rel="noopener noreferrer"` to prevent tab-napping.

- [ ] Search all components:
  ```bash
  grep -rn 'target="_blank"' app/ components/ | grep -v 'noopener'
  ```
  → Any match without `noopener noreferrer` is a **Major** finding
- [ ] Social links (Instagram, Facebook, TikTok) — verify `rel` attribute
- [ ] Order Online button — verify `rel` attribute
- [ ] Google Maps links — verify `rel` attribute

### 5. JSON-LD Structured Data Injection

`app/layout.tsx` embeds JSON-LD. Verify it is constructed from static data only.

- [ ] Check that JSON-LD content comes exclusively from `data/business.ts` (static)
  ```bash
  grep -n "dangerouslySetInnerHTML\|__html" app/layout.tsx
  ```
- [ ] Confirm no runtime user input or external API response is interpolated into JSON-LD
- [ ] Verify JSON-LD is valid JSON (no template literal injection)

### 6. OG Tags / Meta Injection

- [ ] OG tags in `app/layout.tsx` come from static config only
- [ ] No page-level metadata reads from URL query params without sanitisation
- [ ] `NEXT_PUBLIC_SITE_URL` is used in canonical URLs — confirm it is a trusted static value

### 7. API Stub Hardening (`/api/square/*`)

The stubs at `app/api/square/catalog/route.ts` and `app/api/square/checkout/route.ts`
will return 503 when `SQUARE_ACCESS_TOKEN` is unset. Verify:

- [ ] Stubs return 503 (not 500 with stack trace) when unconfigured
- [ ] No secret values are included in error responses
- [ ] Checkout stub (`POST`) validates request body before forwarding — no raw pass-through
- [ ] Square API calls use HTTPS and validate the response status before returning data

Check for request body passthrough:
```bash
grep -n "req.body\|request.json\|body\." app/api/square/checkout/route.ts
```

### 8. Dependency Security

Run the standard npm audit:

```bash
npm audit
```

Then classify findings:

- [ ] Are any HIGH/CRITICAL vulnerabilities in **production** dependencies?
  (Distinguish from build-time / devDependency — see KNOWN_ISSUES.md for context)
- [ ] `next`, `react`, `framer-motion`, `sanity`, `next-sanity`, `lucide-react` — check for known CVEs
- [ ] Flag any package with 0 downloads / abandoned (check npm registry)
- [ ] Identify unnecessary dependencies that expand attack surface

**Do not run `npm audit fix --force`** without explicit user approval. Major
version bumps can break the build.

### 9. Content Security Policy (CSP) Status

CSP is deferred by design (documented in `docs/KNOWN_ISSUES.md`) due to
complexity with Google Fonts and Google Maps iframes.

- [ ] Confirm the deferred decision is still intentional
- [ ] Note that without CSP, XSS (if introduced) has no second line of defence
- [ ] If CSP is to be added: suggest `script-src 'self'`, `frame-src maps.google.com`,
  `style-src 'self' fonts.googleapis.com`; nonces required for Next.js inline scripts

### 10. Sanity Client Safety

`lib/sanity/` includes the Sanity client. It falls back to static data when
`isSanityConfigured = false`.

- [ ] Confirm `isSanityConfigured` check prevents network calls when not configured
- [ ] Sanity queries use GROQ — verify no unsanitised user input is interpolated
  into GROQ queries (not currently applicable — queries are static)
- [ ] Sanity Project ID is public — confirm it is the correct project

---

## Reporting Format

```
Security Audit: <date>
Project: The Merc Website (Next.js 15 static)
Scope: XSS, headers, env isolation, external links, JSON-LD, deps, API stubs

## Critical Invariant Check
SQUARE_ACCESS_TOKEN isolation:  ✅ SAFE / ❌ EXPOSED
dangerouslySetInnerHTML usage:  ✅ NONE / ⚠️ <location>
target="_blank" without rel:    ✅ NONE / ❌ <count> found

## Security Headers
X-Content-Type-Options:  ✅ / ❌
X-Frame-Options:         ✅ / ❌
X-XSS-Protection:        ✅ / ❌
Referrer-Policy:         ✅ / ❌
Permissions-Policy:      ✅ / ❌

## Dependency Audit
npm audit result: <X vulnerabilities: Y critical, Z high, ...>
Production dep findings: <list or "none">
Known accepted findings: <reference KNOWN_ISSUES.md>

## Findings
- [SEVERITY] Category — Description — File:line — Recommendation

## CSP Status
Deferred: yes/no — <rationale>

## Verdict
SECURE | FINDINGS PRESENT | CRITICAL ISSUE
```

Severity: **Critical** | **High** | **Medium** | **Low** | **Informational**

---

## When to Use This Skill

- Before any deployment to production
- After adding new external API calls or links
- After touching `app/api/square/`
- After adding or modifying environment variables
- After adding new npm dependencies
- After significant changes to `app/layout.tsx` (JSON-LD, meta)
- After any change to `next.config.ts` (headers)
