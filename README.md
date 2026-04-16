# Nevada Leadership & Accountability Series (NLAS) — Website

Official website for the Nevada Leadership & Accountability Series.
Built with **Astro 5 + TypeScript + Tailwind CSS v4** as a fully static site
(zero JS by default, Lighthouse 95–100 target).

---

## Stack

- **Astro 5** (static output)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **TypeScript** strict
- **@astrojs/sitemap** — automatic `sitemap-index.xml`
- Google Fonts: Inter + Archivo + Dancing Script (for the "Series" script accent)
- No client runtime except a tiny inline mobile-nav toggle

## Pages

| Route        | Purpose                                                          |
|--------------|------------------------------------------------------------------|
| `/`          | Hero · Pressures · Topics · Speakers teaser · Why partner · Mission · CTA |
| `/about`     | Full about + mission beliefs                                     |
| `/speakers`  | Full bios (Cody Whipple, Joey Charafi, Marlon Medina)            |
| `/contact`   | Booking form (Formspree-ready) + mailto fallback                 |

## Design system (summary)

| Token              | Value         | Role                                          |
|--------------------|---------------|-----------------------------------------------|
| Canvas             | `#0A1628`     | Page background (deep navy, from PDF)         |
| Canvas lifted      | `#0F1E35`     | Nested sections                               |
| Canvas deep        | `#050D1A`     | Footer                                        |
| Brand blue         | `#2B5DA8`     | Primary CTA, active nav                       |
| Brand blue (hi/lo) | `#3D78C9` / `#1A3E7C` | Hero gradient, hover states          |
| Brand gold         | `#E8B547`     | "Series" script accent, eyebrow dots, satellite CTAs |
| Ink / Ink-muted    | `#F5F7FA` / `#8B9BB4` | Text                                  |

Radii: `20px` (cards), `40px` (stadium hero frames), `999px` (pills, portraits).
Typography: Archivo display (headlines, -2% tracking), Inter body (weight 450),
Dancing Script for the "Series" accent.

---

## Local development

```bash
# Install (pick one)
pnpm install        # recommended
# npm install
# bun install

# Dev server on http://localhost:4321
pnpm dev

# Production build → ./dist
pnpm build

# Preview the built site
pnpm preview
```

---

## Deployment — Coolify

This is a **fully static site**. Deploy to Coolify in under 2 minutes:

### Option A — Static (recommended)

1. Push this repo to GitHub.
2. In Coolify → **+ New Resource → Public Repository** (or Private, if using a PAT).
3. Paste your repo URL, pick the branch.
4. **Build Pack → Static** (or Nixpacks with "Is it a static site?" checked).
5. Set build settings:
   - **Install command:** `pnpm install --frozen-lockfile`  (or `npm ci`)
   - **Build command:** `pnpm build`  (or `npm run build`)
   - **Publish directory:** `dist`
   - **Node version:** `20` or `22`
6. Add your domain + let Coolify issue the Let's Encrypt cert.
7. Deploy.

### Option B — Docker (if you later add SSR)

A ready-to-use `Dockerfile` can be added at the repo root:

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* package-lock.json* ./
RUN corepack enable && (pnpm install --frozen-lockfile || npm ci)
COPY . .
RUN pnpm build || npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY <<'CONF' /etc/nginx/conf.d/default.conf
server {
  listen 80;
  root /usr/share/nginx/html;
  index index.html;
  location / { try_files $uri $uri/ /index.html =404; }
  location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|woff2)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
  }
}
CONF
EXPOSE 80
```

Then in Coolify pick **Dockerfile** build pack.

---

## Updating content

- **Speaker bios** live in [`src/content/speakers.ts`](src/content/speakers.ts) — verbatim from the PDF brochure. Update there once, renders everywhere.
- **Hero / mission / topics copy** lives in [`src/pages/index.astro`](src/pages/index.astro).
- **Contact endpoint**: replace `FORMSPREE_ENDPOINT` in [`src/pages/contact.astro`](src/pages/contact.astro) with your real Formspree form ID. Update `FALLBACK_EMAIL` for the mailto link.

## Accessibility & SEO

- Semantic HTML, ARIA labels on interactive elements, `:focus-visible` outlines
- Skip-to-content link, reduced-motion honored
- Canonical URLs, Open Graph + Twitter meta, JSON-LD Organization schema
- Automatic `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` generated from [`src/pages/robots.txt.ts`](src/pages/robots.txt.ts)

## Image placeholders

Speaker portraits currently use Unsplash placeholders. Replace with real headshots
in `src/content/speakers.ts` (keep 1:1 square crop — they render inside circles).

---

## License

© Nevada Leadership & Accountability Series. All rights reserved.
