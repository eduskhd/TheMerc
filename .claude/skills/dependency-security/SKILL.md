---
name: dependency-security
description: >-
  Dependency security review for The Merc website. Audits npm packages for
  known vulnerabilities, outdated versions, abandoned libraries, and supply-chain
  risk. Distinguishes production exploitability from build-time-only exposure.
  Does not auto-apply major version upgrades.
---

# Dependency Security — The Merc Website

Systematic review of npm dependencies for security vulnerabilities, maintenance
risk, and supply-chain concerns. This is a **read-only audit by default** — it
will not run `npm install`, `npm audit fix`, or upgrade any package without
explicit user approval.

---

## Step 1: Run npm audit

```bash
npm audit --json > /tmp/npm-audit-$(date +%Y%m%d).json
npm audit
```

Parse the human-readable output first, then use the JSON for precise CVE data.

---

## Step 2: Classify by Exploitability

For each HIGH or CRITICAL finding, determine:

| Question | If Yes → | If No → |
|---|---|---|
| Is the vulnerable package a `devDependency`? | Lower severity (build-time only) | Check further |
| Is the vulnerability path reachable in production? | High concern | Lower concern |
| Does the site expose user input that reaches the vuln? | Blocker | Review context |
| Is there a non-breaking patch available? | Recommend patching | Document and accept |

### Known accepted findings (from KNOWN_ISSUES.md)

The following HIGH vulnerabilities are pre-accepted as **build-time only, not
exploitable in production**:

- Vulnerabilities in `sanity` CLI transitive deps (PostCSS, etc.)
- Vulnerabilities in `next` internal build tools (webpack transitive deps)

Do not re-flag these as blockers without new information. Reference
`docs/KNOWN_ISSUES.md` if new findings appear in the same packages.

---

## Step 3: Check Production Dependencies

Review these production packages specifically:

| Package | Check |
|---|---|
| `next` | Latest stable version? Known CVEs? |
| `react` + `react-dom` | Version 19.x — check for known issues |
| `framer-motion` | Known vulnerabilities? |
| `lucide-react` | Known vulnerabilities? |
| `next-sanity` | Known vulnerabilities? |
| `sanity` | Version aligned with `next-sanity`? |
| `@sanity/image-url` | Known vulnerabilities? |
| `styled-components` | Known vulnerabilities? (note: large bundle impact) |

```bash
npm outdated
```

Flag packages that are **2+ major versions behind** or **unmaintained** (last
publish > 18 months ago).

---

## Step 4: Supply Chain Risk Assessment

For any package added since the last audit:

- [ ] Package exists on npm registry under expected name (no typosquatting)
- [ ] Publisher account is the expected maintainer
- [ ] Weekly downloads are reasonable (not suspiciously new/low for a critical dep)
- [ ] Repository is linked and active
- [ ] No recent major ownership transfers

Check with:
```bash
npm info <package-name> | grep -E "latest|maintainers|homepage|repository"
```

---

## Step 5: Unnecessary Dependencies

Flag any dependency that:

- Is listed in `dependencies` but only used in `devDependencies` context
- Is a transitive dep that could be pruned
- Has a lighter-weight alternative for this static site

Specific check: `styled-components` is a large runtime dependency. Verify it is
actually used in production components (not just in Sanity Studio which is a
separate app):

```bash
grep -rn "styled-components\|createGlobalStyle\|styled\." app/ components/ --include="*.tsx" --include="*.ts"
```

If unused in the Next.js app (only in `studio/`), flag as a candidate for
removal from main `dependencies`.

---

## Step 6: Sanity and Square SDK Security

These packages handle external service communication:

- [ ] `sanity` SDK: used only server-side or falls back gracefully when unconfigured
- [ ] Square API credentials only in server-side routes (`app/api/square/`)
- [ ] No Square credentials logged or returned in error responses

---

## Upgrade Policy

**Do NOT automatically run:**
- `npm audit fix --force` (breaks semver constraints)
- Major version upgrades (breaking changes, requires testing)

**Safe to apply automatically (with user consent):**
- Patch updates (`x.y.Z` → `x.y.Z+1`) for production packages
- Minor updates for devDependencies

**Require review before applying:**
- Minor updates for production packages (`x.Y.z` → `x.Y+1.z`)
- Any upgrade to `next`, `react`, `sanity`, or `framer-motion`

---

## Reporting Format

```
Dependency Security Audit: <date>
Node: <version>  npm: <version>
Total packages: <N>

## npm audit Summary
Critical: <N>
High:     <N>
Moderate: <N>
Low:      <N>

## Production-Exploitable Findings
- [SEVERITY] <package>@<version> — CVE-XXXX-XXXX — <description>
  Impact: <what is exposed>
  Fix: <patch version available | workaround | accept>

## Accepted Build-Time Findings
- <package> — reason: build-time only (ref: KNOWN_ISSUES.md)

## Outdated Production Packages
- <package>: installed <X>, latest <Y> — <risk level>

## Supply Chain Concerns
- <package> — <concern> — <recommendation>

## Unnecessary Dependencies
- <package> — <reason> — <recommendation>

## Recommended Actions
1. <action>  [SAFE TO APPLY | REQUIRES REVIEW | ACCEPT AND DOCUMENT]
```

---

## When to Use This Skill

- After adding any new npm dependency
- After running `npm install` to update existing packages
- Before any production deployment
- Monthly as a routine security hygiene check
- After a CVE is published affecting any package in this stack
