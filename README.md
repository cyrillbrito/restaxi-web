# Táxis Restauração

> Family-owned taxi service in Olhão, Algarve since 2000

[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://taxisrestauracao.pt)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)

## About

Static multilingual website for **Táxis Restauração** - a 24/7 taxi service covering Olhão, Faro Airport, Tavira, Fuseta, Ria Formosa and all of the Algarve region.

**Languages:** Portuguese, French, English

## Tech Stack

- **Framework:** [Astro](https://astro.build) (100% static output)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com)
- **Package Manager:** pnpm

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server → localhost:4321
pnpm build        # Build static site → ./dist/
pnpm preview      # Preview build locally
pnpm deploy       # Deploy to Cloudflare Pages
```

## Auto Deploy

Build and ship in one go:

```bash
pnpm build && pnpm deploy
```

## Project Structure

```
src/
├── components/     # Astro components
├── i18n/           # Translations (pt, fr, en)
├── layouts/        # Page layouts
└── pages/          # Routes (/, /en/, /fr/)
public/             # Static assets
```

## License

All rights reserved - Táxis Restauração
