# Abdur Rafey — Personal Portfolio

[![Live on Vercel](https://img.shields.io/badge/Live-abdur--rafey--portfolio.vercel.app-00f5ff?style=flat-square&logo=vercel)](https://abdur-rafey-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Docker](https://img.shields.io/badge/Docker-nginx%3Aalpine-2496ed?style=flat-square&logo=docker)](https://docker.com)

A visually striking personal portfolio for **Abdur Rafey**, a Computer Science graduate from FAST-NUCES Lahore specialised in AI automation and agentic systems.

**🌐 Live URL:** https://abdur-rafey-portfolio.vercel.app

---

## ✨ Features

- **Neon dark theme** with cyan / magenta / violet / lime accents and glow effects
- **Animated particle background** that reacts to mouse movement
- **Custom glow cursor** with spring-physics animation
- **Wiggle + glow icons** on every hover interaction
- **3D tilt cards** with per-card colour glow
- **Typing hero** animation cycling through role titles
- **Scroll-reveal** sections, **animated counters**
- Four pages: Home, O Levels, A Levels, FAST-NUCES
- Fully **responsive**, keyboard-accessible, `prefers-reduced-motion` aware

---

## 🏗️ Tech Stack

| | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Icons | react-icons v5 |
| Fonts | Inter + JetBrains Mono (next/font) |
| Container | Docker multi-stage → nginx:alpine |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## 🚀 Local Development

### Prerequisites
- Node.js v18+
- npm v9+

```bash
# Clone the repo
git clone https://github.com/Abdur-Rafey5/abdur-rafey-portfolio.git
cd abdur-rafey-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000
```

---

## 🐳 Docker (nginx)

```bash
# Build and run with Docker Compose
docker compose up --build

# → http://localhost:8080
```

This runs the production build served by nginx with:
- Gzip compression
- Long-cache headers for static assets
- Security headers (CSP, X-Frame-Options, etc.)
- Clean URLs

---

## 📝 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build static output to `out/` |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## 📁 Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── page.tsx       # Home (all sections)
│   ├── olevels/       # O Levels page
│   ├── alevels/       # A Levels page
│   └── fast/          # FAST-NUCES page
├── components/        # Reusable UI components
└── data/
    └── content.ts     # ← Edit this to update all content
docs/
└── TRD.md             # Technical Requirements Document
```

---

## ✏️ Updating Content

All portfolio content lives in **`src/data/content.ts`**. Fields marked `[TO FILL]` are placeholders that render with an orange dashed badge on the site — replace them with real data.

---

## 📄 Documentation

See [`docs/TRD.md`](docs/TRD.md) for the full Technical Requirements Document covering architecture, component design, Docker/nginx setup and CI/CD flow.

---

## 📜 License

MIT © Abdur Rafey
