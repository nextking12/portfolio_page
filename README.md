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

## Contact form

Copy `.env.example` to `.env.local` and set Resend values before testing submissions:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `RESEND_FROM_EMAIL`

The API applies validation, a honeypot, and an in-process IP rate limit (5 / 15 min, 20 / day). Limits are best-effort on serverless (per instance, reset on cold start).

## Validation

```sh
pnpm check
pnpm lint
pnpm test -- --run
pnpm build
```
