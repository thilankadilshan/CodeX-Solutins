# CodeX Solutions — Official Website

> Modern, animated website for **CodeX Solutions** — a full-service software development company.

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Animations | Framer Motion + GSAP |
| Icons | Lucide React + React Icons |
| Runtime | Docker (Node.js 20 Alpine) |

---

## 🚀 Running with Docker

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Development (hot reload)

```bash
docker compose up dev
```

The site will be available at **http://localhost:3000**

> Hot reload is enabled — any file change reflects instantly.

### Production

```bash
docker compose --profile prod up prod
```

Available at **http://localhost:3001**

### Stop all containers

```bash
docker compose down
```

---

## 📁 Project Structure

```
codex-solutions/
├── app/
│   ├── layout.tsx          # Root layout (fonts, SEO metadata)
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Global styles + design tokens
│
├── components/
│   ├── layout/             # Navbar, Footer, Section wrapper
│   ├── ui/                 # Buttons, Cards, Badges, Animations
│   └── sections/           # Hero, Services, About, Portfolio, Contact...
│
├── lib/
│   └── utils.ts            # cn() helper and shared utilities
│
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript interfaces
├── public/                 # Static assets (images, icons, SVGs)
│
├── Dockerfile              # Multi-stage: dev / builder / production
├── docker-compose.yml      # Services: dev (3000) + prod (3001)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind + design system tokens
├── tsconfig.json           # TypeScript paths and settings
└── package.json            # Dependencies
```

---

## 🎨 Design System

- **Primary Color**: `#6366f1` (Indigo)
- **Accent Color**: `#10b981` (Emerald)
- **Background**: Dark scale (`#080b14` → `#1f2937`)
- **Typography**: Inter (body) + Outfit (display) + JetBrains Mono (code)
- **Style**: Glassmorphism cards, gradient text, mesh backgrounds, glow effects

---

## 📋 Planned Sections

- [ ] Hero — Full screen with animated headline and CTA
- [ ] Services — Web Dev, Mobile, QA, DevOps, UI/UX, Consulting
- [ ] About — Company story and values
- [ ] Process — Step-by-step development workflow
- [ ] Portfolio — Featured project showcase
- [ ] Technologies — Scrolling tech marquee
- [ ] Stats — Animated counters
- [ ] Team — Team member profiles
- [ ] Testimonials — Client reviews
- [ ] Contact — Contact form
- [ ] CTA — Call to action banner
