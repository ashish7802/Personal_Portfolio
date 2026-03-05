# 🧠 Personal Portfolio — Lead Researcher & WordPress Developer

> A modern, animated personal portfolio with a cyberpunk/hacker aesthetic built with React, TypeScript, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## ✨ Features

- **Cyberpunk / hacker aesthetic** — dark background with neon cyan, green, and purple gradients
- **Framer Motion animations** — smooth scroll transitions, entrance animations, hover effects
- **Matrix-style visuals** — animated background elements and glitch text effects
- **Fully responsive** — optimized for desktop, tablet, and mobile
- **Sections:** Hero, About, Skills, Projects, WordPress Work, Research, Contact
- **shadcn/ui components** — accessible, production-ready UI primitives
- **Dark theme only** — consistent dark mode throughout

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite.js |
| Styling | TailwindCSS + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | JetBrains Mono / Inter |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.0.0`
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/              # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   │   ├── layout/          # Navbar, Footer
│   │   └── animations/      # Reusable Framer Motion wrappers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and helpers
│   ├── data/                # Portfolio content (projects, skills, etc.)
│   ├── styles/
│   │   └── globals.css      # Global styles + Tailwind directives
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--neon-cyan` | `#00FFFF` | Primary accents, links |
| `--neon-green` | `#39FF14` | Success states, terminal text |
| `--neon-purple` | `#BF5FFF` | Highlights, gradients |
| `--bg-dark` | `#0A0A0F` | Page background |
| `--bg-card` | `#12121A` | Card backgrounds |
| `--text-muted` | `#8888AA` | Secondary text |

### Typography

- **Headings:** JetBrains Mono — reinforces the hacker/terminal aesthetic
- **Body:** Inter — clean and readable for long-form content
- **Code Blocks:** JetBrains Mono

### Animation Principles

- Entrance animations use `fadeInUp` with staggered children
- Hover states use subtle scale + glow effects
- Page transitions use `AnimatePresence` from Framer Motion
- Scroll-triggered animations use `whileInView` with `once: true`

---

## 🧩 Sections Overview

### Hero
Full-viewport landing with animated typewriter effect, Matrix-style background particles, and a CTA button. Includes name, title, and a one-liner bio.

### About
Split layout — personal photo with glitch border effect on the left, bio and core values on the right.

### Skills
Animated skill grid with neon-bordered cards. Grouped by category: Research, WordPress, Frontend, Tools.

### Projects
Filterable card grid (All / Research / WordPress / Web). Each card includes tags, description, live link, and GitHub link.

### WordPress Work
Dedicated section for WordPress projects — theme development, plugin builds, WooCommerce, performance optimization work.

### Research
Highlights published research, whitepapers, or academic work with citation-style formatting.

### Contact
Clean contact form with validation. Links to email, LinkedIn, and GitHub.

---

## ⚙️ Configuration

Edit `src/data/` to update all portfolio content without touching component code:

```ts
// src/data/projects.ts
export const projects = [
  {
    title: "Project Name",
    description: "Short description",
    tags: ["React", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    category: "web" | "wordpress" | "research"
  }
]
```

```ts
// src/data/skills.ts
export const skills = [
  { name: "WordPress", level: 95, category: "CMS" },
  { name: "React", level: 88, category: "Frontend" },
  ...
]
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag and drop the /dist folder to Netlify, or connect your GitHub repo
```

### GitHub Pages

```bash
# In vite.config.ts, set base: '/repo-name/'
npm run build
npm run deploy  # requires gh-pages package
```

---

## 📦 Key Dependencies

```json
{
  "react": "^18.x",
  "typescript": "^5.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "framer-motion": "^11.x",
  "@radix-ui/react-*": "latest",
  "lucide-react": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

---

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-idea`
3. Commit changes: `git commit -m 'feat: add your idea'`
4. Push: `git push origin feat/your-idea`
5. Open a pull request

---

## 📄 License

MIT © [Your Name] — feel free to use this as a template for your own portfolio.

---

<p align="center">
  Built with ⚡ by a Lead Researcher & WordPress Developer
</p>
