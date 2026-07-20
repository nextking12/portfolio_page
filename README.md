# ecking.dev

Career-focused site for Edward King, built for hiring managers and technical leaders evaluating experience across physical security systems, solutions engineering, program delivery, and software engineering.

## Site Structure

- Career profile and positioning
- Professional experience
- Security, infrastructure, software, and automation expertise
- Evidence-based impact
- Applied engineering projects
- Downloadable resume and contact paths

## Tech Stack

- SvelteKit and Svelte 5
- TypeScript
- Tailwind CSS v4
- Inter Variable font
- Vercel adapter

## Content Editing

- Career, experience, expertise, impact, project, and contact data: `src/lib/data/site.ts`
- Page composition: `src/routes/+page.svelte`
- Global responsive styles and theme tokens: `src/routes/layout.css`
- Project direction: `CAREER_SITE_DIRECTION.md`
- Public resume: `static/Edward-King-Resume.pdf`

## Local Development

```sh
pnpm install
pnpm dev
```

## Validation

```sh
pnpm check
pnpm lint
pnpm test -- --run
pnpm build
```
