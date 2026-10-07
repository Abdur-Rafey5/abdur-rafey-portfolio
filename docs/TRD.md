# Technical Requirements Document (TRD)
## Abdur Rafey — Personal Portfolio Website
**Version:** 1.0 | **Author:** Abdur Rafey | **Date:** October 2026

---

## 1. Purpose & Scope
This document describes the architecture, technology choices, component design and deployment strategy for the personal portfolio website of Abdur Rafey — a Computer Science graduate from FAST-NUCES Lahore specialised in AI automation and agentic systems.

**Scope:** A fully static, client-rendered portfolio site with four routes (Home, O Levels, A Levels, FAST-NUCES). No backend, no database; all content is sourced from a single typed TypeScript file.

**Live URL:** `https://abdur-rafey-portfolio.vercel.app` *(auto-deployed on push to `main`)*

---

## 2. Tech Stack & Rationale

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14** (App Router, TypeScript) | Industry-standard React meta-framework with static export, optimised fonts, and SEO metadata APIs out of the box |
| Styling | **Tailwind CSS v3** | Utility-first, design-system-friendly, zero runtime CSS overhead |
| Animation | **Framer Motion v11** | Production-grade spring physics, `useInView`, layout animations; minimal bundle overhead |
| Icons | **react-icons v5** | Tree-shakeable SVG icon library (SI, FI sets) for tech and UI icons |
| Type Effects | **react-type-animation** | Lightweight hero typing effect |
| Intersection | **react-intersection-observer** | Scroll-reveal triggers for stat counters |
| Counters | **react-countup** | Animated number counters in the stats strip |
| Fonts | **next/font/google** (Inter + JetBrains Mono) | Zero-CLS font loading via Next.js font optimisation |
| Container | **Docker** (multi-stage) + **nginx:alpine** | Production-ready static serving with gzip and security headers |
| CI/CD | **GitHub Actions** → **Vercel** | Auto-deploy on every push to `main`; preview deployments for PRs |

**Static Export Strategy:** `output: 'export'` in `next.config.js` compiles the site to the `out/` directory as flat HTML/JS/CSS — perfectly suited for nginx serving and CDN caching. Vercel handles the same output natively.

---

## 3. Route Map

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Full home page: hero, stats, about, education snapshot, experience, projects, skills, contact |
| `/olevels` | `src/app/olevels/page.tsx` + `client.tsx` | Cambridge O Levels — subjects, grades, activities, societies |
| `/alevels` | `src/app/alevels/page.tsx` + `client.tsx` | Cambridge A Levels — subjects, grades, activities, societies |
| `/fast` | `src/app/fast/page.tsx` + `client.tsx` | FAST-NUCES BS CS — courses, CGPA, activities, societies |

Server components (`page.tsx`) carry `metadata` exports for SEO; interactive logic is in `client.tsx` (`'use client'`).

---

## 4. Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, Navbar, Footer, CustomCursor, ParticleBackground
│   ├── globals.css         # Design tokens, neon utilities, scrollbar, focus styles
│   ├── page.tsx            # Home page (all sections)
│   ├── olevels/            # O Levels route
│   ├── alevels/            # A Levels route
│   └── fast/               # FAST-NUCES route
├── components/
│   ├── Navbar.tsx          # Fixed top nav, active-route highlight, mobile menu
│   ├── Footer.tsx          # Brand, nav links, socials, copyright
│   ├── CustomCursor.tsx    # Neon glow cursor with spring animation
│   ├── ParticleBackground.tsx  # Canvas particle system reacting to mouse
│   ├── Section.tsx         # Scroll-reveal section wrapper + SectionHeading
│   ├── Card.tsx            # 3D tilt card with dynamic glow on hover
│   ├── NeonIcon.tsx        # Icon with wiggle, glow, tooltip on hover + click
│   ├── Timeline.tsx        # Experience timeline with animated dot connectors
│   ├── SkillGrid.tsx       # Category-grouped skill icons using NeonIcon
│   └── ProjectCard.tsx     # Project card with tags, tilt, conditional links
└── data/
    └── content.ts          # Single source of truth — all portfolio content (typed)
```

**Key design patterns:**
- **Server/Client split:** Server components for metadata, client for interactivity. No unneeded `'use client'` at layout level.
- **Single content file:** `content.ts` exports typed interfaces and all data. Editing the portfolio requires only editing this file.
- **Placeholder pattern:** Fields not yet provided by the owner are marked `"[TO FILL]"` and rendered with an `orange-dashed` badge so they are visually obvious.

---

## 5. Content Model

All content is stored in `src/data/content.ts` and typed with TypeScript interfaces:

- `profile` — name, taglines, summary, email, links
- `oLevels` — institution, subjects (Mathematics A* confirmed), extracurricular, societies
- `aLevels` — institution, period, subjects (Math A, CS A, Physics A), extracurricular, IYLO leadership
- `fast` — degree, campus, period, CGPA, courses, leadership roles (FAST Orators' League, GLI, VOICE, IYLO), core skills developed
- `experiences[]` — role, company, location, period, bullet points, tags
- `projects[]` — title, description, tags, github, demo
- `skillCategories[]` — category name and array of `{ name, icon }` skills
- `stats[]` — label, value, suffix (for animated counters)

---

## 6. Docker / nginx Setup

### Multi-Stage Build
- **Stage 1** (`node:20-alpine`): installs deps (`npm ci`), runs `next build` → outputs `out/`
- **Stage 2** (`nginx:alpine`): copies `out/` into `/usr/share/nginx/html`; uses custom `nginx.conf`

### nginx Features
- **gzip** compression for text, JS, CSS, SVG, fonts
- **Long-cache headers** (`Cache-Control: public, immutable`, 1 year) for all static assets
- **Security headers**: `X-Frame-Options`, `X-Content-Type-Options`, `CSP`, `Permissions-Policy`
- **Clean URLs** via `try_files $uri $uri.html $uri/ /404.html`
- **Custom 404** page

### Running Locally
```bash
docker compose up --build
# → http://localhost:8080
```

---

## 7. CI/CD Flow

```
Developer pushes to main
        ↓
GitHub repository (abdur-rafey-portfolio)
        ↓
Vercel detects push (GitHub integration)
        ↓
Vercel runs: npm install → next build → deploys out/
        ↓
https://abdur-rafey-portfolio.vercel.app (live, ~30s)
```

- **Pull Requests** get automatic preview URLs from Vercel.
- `main` branch is always deployable (CI gate: `next build` must pass).

---

## 8. Performance & Accessibility Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |

**Techniques used:**
- `next/font/google` for zero-CLS font loading
- `images: { unoptimized: true }` with static exports (images optimised manually)
- `prefers-reduced-motion` media query respected globally in CSS
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, single `<h1>` per page
- Keyboard focus states via `:focus-visible` with neon outline
- `aria-label` on all icon-only links, `aria-current="page"` on active nav links
- `alt` text on all images

---

## 9. AI Tools Used
- **Google Antigravity (AGY)** — primary agent that scaffolded the entire project, wrote all components, set up Docker/nginx, and handled Git commits
- **Claude Sonnet (via Antigravity)** — code generation and review

---

## 10. Future Improvements
- Add a `blog/` route powered by MDX for technical writing
- Integrate a CMS (e.g. Sanity, Contentlayer) so content can be edited without touching code
- Add contact form with email delivery (Resend / Nodemailer)
- Dark/light theme toggle
- Internationalise (Urdu language support)
- Add Cypress E2E tests and Lighthouse CI GitHub Action
