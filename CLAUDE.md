# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js config)
npm run start    # Start production server
```

No test framework is configured.

## Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** with a custom `texasCustomDark` theme
- **Shadcn/ui** (New York style, RSC enabled) — component primitives live in `components/ui/`
- **AWS S3** for file upload/image gallery
- **Resend** for transactional email
- **Vercel Analytics + Speed Insights** in the root layout

## Architecture

The app uses the Next.js App Router. All pages are server components by default; client components are marked `"use client"`.

**Page structure:**
- `app/page.tsx` — Home, composes `Header`, `Whoami`, `Footer`
- `app/whoami/whoami.tsx` — Client component, displays a random hardcoded quote from `lib/ai.ts`
- `app/projects/projects.tsx`, `app/timeline/timeline.tsx` — Portfolio content pages
- `app/portfolio/about/`, `app/portfolio/contact/` — Nested routes under a portfolio layout
- `app/birthday/` — Birthday page with Spotify integration (`spotify.tsx`, `spotifyForm.tsx`)
- `app/this-aint-texas/` — Theme/branding page

**API routes (`app/api/`):**
- `s3/route.ts` — GET (list with signed URLs) / POST (upload) to AWS S3
- `email/route.ts` — Sends email via Resend
- `login/route.ts` — Spotify OAuth (currently stubbed to return JSON)

**Key libraries (`lib/`):**
- `lib/ai.ts` — `getQuote()` returns a random quote from a hardcoded list
- `lib/s3.ts` — AWS S3 client setup
- `lib/email.ts` — Email utilities
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

**Shared components (`components/`):**
- `components/ui/` — Shadcn/ui primitives (button, card, form, input, textarea, toast, scroll-area, label)
- `components/FileUploadForm/` — S3 upload form
- `components/ImageGallery/` — Gallery reading from S3 signed URLs
- `components/animatedText.tsx` — Animated text with a CSS module
- `components/emailTemplate.tsx` — Resend email template

**Styling:** Dark mode is class-based. Custom Tailwind colors are defined in `tailwind.config.ts`. Global CSS variables for light/dark theming are in `styles/globals.css`.

**Path alias:** `@/*` maps to the project root (configured in `tsconfig.json`).

**Environment variables** (set in `.env` / Vercel): `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `RESEND_API_KEY`, AWS credentials, Vercel project vars.

**Image domains** for `next/image` are configured in `next.config.js` (S3 bucket hostname).

**Deployment:** Vercel — project config in `.vercel/project.json`.
