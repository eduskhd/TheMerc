# Claude Skills — The Merc Website

Active skills and plugins configured for this project. All project-specific
skills live in `.claude/skills/` and are versioned with the repository.

**Last updated:** 2026-09-13

---

## Active Skills

### project-qa
| Field | Value |
|---|---|
| **Type** | Custom (project-specific) |
| **Purpose** | Functional QA for all 6 pages, components, navigation, and responsive behaviour |
| **Source** | Created for this project |
| **Location** | `.claude/skills/project-qa/SKILL.md` |
| **Scope** | Project |
| **When to use** | After any page, component, or data file change; before client demos |
| **Command** | `/project-qa` |

Covers: Home, Menu (tabbed), Events, Gallery, About, Visit — plus Navbar,
MobileBottomBar, Footer, Open/Closed indicator, and Order Online button.
Follows AUDIT → TEST → FIX → RETEST cycle.

---

### project-security
| Field | Value |
|---|---|
| **Type** | Custom (project-specific) |
| **Purpose** | Security review — XSS, env var isolation, security headers, external links, JSON-LD, deps, API stubs |
| **Source** | Created for this project |
| **Location** | `.claude/skills/project-security/SKILL.md` |
| **Scope** | Project |
| **When to use** | Before deployment; after env var changes, new deps, header changes, or API stub edits |
| **Command** | `/project-security` |

Specifically guards: `SQUARE_ACCESS_TOKEN` server-side isolation,
`rel="noopener noreferrer"` on all external links, security headers in
`next.config.ts`, and JSON-LD injection risk.

---

### production-readiness
| Field | Value |
|---|---|
| **Type** | Custom (project-specific) |
| **Purpose** | Pre-deployment gate — build, types, env vars, content, SEO, headers, performance, known issues |
| **Source** | Created for this project |
| **Location** | `.claude/skills/production-readiness/SKILL.md` |
| **Scope** | Project |
| **When to use** | Before any production deployment or public launch |
| **Command** | `/production-readiness` |

Emits one of: **NOT READY** / **ALPHA READY** / **PRODUCTION READY**.
Never declares Production Ready without running all 9 phases.

---

### dependency-security
| Field | Value |
|---|---|
| **Type** | Custom (project-specific) |
| **Purpose** | npm audit, outdated packages, supply-chain risk, production vs build-time exploitability |
| **Source** | Created for this project |
| **Location** | `.claude/skills/dependency-security/SKILL.md` |
| **Scope** | Project (candidate for global) |
| **When to use** | After adding any new package; monthly; before deployment |
| **Command** | `/dependency-security` |

Does NOT auto-apply `npm audit fix --force`. Major version upgrades require
explicit approval.

---

### frontend-visual-qa
| Field | Value |
|---|---|
| **Type** | Installed (third-party, audited) |
| **Purpose** | Visual audit of rendered UI — overflow, alignment, responsive, typography, spacing |
| **Source** | Installed from external source; reviewed before installation |
| **Location** | `.claude/skills/frontend-visual-qa/SKILL.md` |
| **Scope** | Project |
| **When to use** | After frontend redesigns, layout changes, Tailwind config changes |
| **Command** | `/frontend-visual-qa` |
| **Dependencies** | Playwright (bundled scripts) |

Includes Playwright sweep scripts and reference documents for parity checks.

---

### frontend-ui
| Field | Value |
|---|---|
| **Type** | Installed (Anthropic cookbook) |
| **Purpose** | Create aesthetically distinctive frontend UIs — typography, color, motion, backgrounds |
| **Source** | Anthropic's frontend aesthetics cookbook |
| **Location** | `.claude/skills/frontend-ui/SKILL.md` |
| **Scope** | Project |
| **When to use** | When creating new UI components or redesigning sections |
| **Command** | `/frontend-ui` |

---

### playwright
| Field | Value |
|---|---|
| **Type** | Installed (third-party, MIT) |
| **Purpose** | Browser automation — screenshots, E2E tests, responsive checks, link validation |
| **Source** | lackeyjb/playwright-skill (v5.0.0, MIT) |
| **Location** | `.claude/skills/playwright/SKILL.md` |
| **Scope** | Project |
| **When to use** | E2E testing, visual checks against running dev server, QA automation |
| **Command** | `/playwright` |
| **Dependencies** | Node.js 20+, Playwright (installed in skill dir) |

---

## Skills NOT Installed (and why)

| Skill | Reason not installed |
|---|---|
| `video-security` | No video processing, FFmpeg, yt-dlp, or file uploads |
| `library-ux` | No large asset library or content database |
| `clipping-engine` | Not a video clipping platform |
| `clipper-qa` | Not applicable to this project |

---

## Skill Map

| Task | Skill |
|---|---|
| Page / component change | `project-qa` |
| Data file change (menu, events, business) | `project-qa` |
| Frontend redesign | `frontend-ui` → `frontend-visual-qa` → `project-qa` |
| Responsive / mobile issue | `frontend-visual-qa` |
| New npm dependency | `dependency-security` |
| Security-sensitive change (env, headers, API) | `project-security` |
| Before deployment or client demo | `production-readiness` |
| E2E browser testing | `playwright` |
| Major milestone (pre-launch) | `project-security` + `production-readiness` |

---

## Cascade Examples

### Before production launch
```
project-security
  ↓
dependency-security
  ↓
project-qa
  ↓
production-readiness
```

### After significant frontend redesign
```
frontend-ui (design)
  ↓
frontend-visual-qa (visual audit)
  ↓
project-qa (functional check)
```

### After adding a new npm package
```
dependency-security (is it safe?)
  ↓
project-qa (does the site still work?)
```

---

## Global vs Project Skills

| Skill | Recommendation |
|---|---|
| `project-qa` | Keep in project — deeply specific to The Merc pages |
| `project-security` | Keep in project — specific to Square env isolation and Next.js config |
| `production-readiness` | Keep in project — specific to this deployment context |
| `dependency-security` | Could move to `~/.claude/skills/` — mostly generic npm audit logic |
| `frontend-visual-qa` | Could move to `~/.claude/skills/` — fully generic |
| `frontend-ui` | Could move to `~/.claude/skills/` — fully generic |
| `playwright` | Could move to `~/.claude/skills/` — fully generic |

---

## Third-Party Review Notes

| Source | Reviewed | Decision |
|---|---|---|
| `frontend-ui` (Anthropic cookbook) | Design skill only; no code execution, no secrets access | ✅ Installed |
| `frontend-visual-qa` (external) | Playwright scripts reviewed; no external network calls; no secrets access | ✅ Installed |
| `playwright` (lackeyjb, MIT v5.0.0) | Scripts reviewed; runs Node + Chromium locally only; no external data exfiltration | ✅ Installed |
| Global video/content skills (`~/.claude/skills/`) | Not relevant to this project | ⛔ Not loaded |
