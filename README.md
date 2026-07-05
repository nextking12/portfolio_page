# Portfolio Page

Modern single-page developer portfolio built with SvelteKit, Tailwind CSS v4, and a light/dark theme system.

## Features

- Minimal black/white visual style with muted cyan accents
- Sticky nav with active section highlight and theme toggle
- Subtle reveal-on-scroll section animations
- Responsive layout for desktop and mobile
- Centralized content data for quick editing

## Tech Stack

- SvelteKit (Svelte 5)
- TypeScript
- Tailwind CSS v4
- Inter Variable font (`@fontsource-variable/inter`)

## Getting Started

```sh
pnpm install
pnpm dev -- --open
```

## Content Editing

- Update profile, project cards, skills, and contact links in `src/lib/data/site.ts`.
- Global theme tokens (colors, surfaces, spacing feel) live in `src/routes/layout.css`.

## Scripts

```sh
pnpm dev
pnpm check
pnpm build
pnpm preview
```
