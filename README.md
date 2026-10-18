# alessiomicci.it

This is my personal portfolio. Built with Astro, Tailwind CSS, and GSAP, focused on a clean, minimal, engineering-first presentation rather than a typical agency/portfolio look.

## Stack

- **[Astro](https://astro.build)** — static site generation, content collections
- **Tailwind CSS** — CSS-first config via `@tailwindcss/vite`, no `tailwind.config.js`
- **GSAP + ScrollTrigger** — subtle scroll-in animations (`[data-animate-item]` elements)
- **[simple-icons](https://simpleicons.org)** — accurate, official brand icons/colors for the tech stack badges in the Hero
- **MDX** — each project in "Selected Work / Other Work" is a content-collection entry

## Project structure

```text
src/
├── components/
│   ├── Hero.astro            # name, role, tech stack, CTAs
│   ├── HeroBackground.astro  # subtle static dot-grid background
│   ├── Projects.astro        # "Selected Work / Other Work" section, lists all projects
│   ├── ProjectCard.astro     # single project card (renders MDX body + optional links)
│   ├── Workflow.astro        # "How I Build Software" section
│   ├── Footer.astro          # contact section
│   └── ThemeToggle.astro     # light/dark toggle (defaults to dark)
├── content/
│   └── projects/*.mdx        # one file per project, see below
├── content.config.ts         # Zod schema for the projects collection
├── layouts/BaseLayout.astro  # <head>, theme init script, fonts
├── scripts/animations.ts     # GSAP ScrollTrigger init
├── styles/global.css         # Tailwind v4 @theme tokens (dark + light palettes)
└── pages/index.astro         # assembles the page
```

## Notes

- Theme defaults to dark on first visit regardless of OS preference; the user's choice is then persisted in `localStorage`.

## Portfolio content

Use `featured: true` for selected projects; other entries appear under Other Work. `order` controls display order. The date is optional so anonymous methodology case studies need no identifying timeline.

The AI-native method describes current practice, not the development history of every project. The anonymous case study must contain methodology only: no names, client, sector, product features, identifying details, screenshots or private links. Do not add a public CV file or download link.
