# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro 5 static site for medical training courses at Hospital de Dénia Urgencias. Deployed to Netlify.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
npm run format    # Prettier format src/**/*.{ts,astro,css}
npx astro check   # TypeScript + Astro type checking
```

## Architecture

- **Framework:** Astro 5 + Tailwind CSS 4 + TypeScript (strict mode)
- **Bilingual:** Spanish (`es`) and Valencian (`va`) — see i18n section below
- **Data:** Course data lives in `src/data/courses.json` (canonical, object keyed by section). `src/data/cursos.json` is legacy with a *different shape* (flat array, not section-keyed) — do not edit it. `src/data/courses.json.backup` and the empty `src/types/courses.ts` are unused dead files — the real types are in `src/data/types.ts`.

## i18n System

Custom (not a standard library). Key files:

| File | Purpose |
|------|---------|
| `src/data/translations.ts` | All UI strings for both languages — single source of truth |
| `src/utils/languageStore.ts` | Singleton class; persists language in `localStorage` |
| `src/scripts/i18n.client.ts` | Client-side language switching logic |

- `Language` type is `'es' | 'va'`
- Server-side default is always `'es'`; language preference is restored client-side on hydration
- To add a new string: add to the `Translation` interface first, then add values for both `es` and `va` keys in the `translations` object
- Client-side switching targets `data-i18n`, `data-section-key`, and `data-course-count` attributes in markup — `i18n.client.ts` reads these to swap text without a framework re-render.

## Sections (`src/data/sections.config.ts`)

Maps each section `key` (`rcp`, `acreditados`, `talleres`, `enfermeria`) to its `dataKey` in `courses.json`, a static `imageUrl`, and an `icon`; `title`/`description` are pulled live from `translations.ts`. Adding a new section means touching `sections.config.ts`, `translations.ts`, and `courses.json` together.

## Course Data (`src/data/courses.json`)

Top-level keys are section names (e.g. `"SECCIÓN RCP"`). Each section has a `"Descripción"` string and a `"cursos"` array. Each course object has `Title`, `For`, `Date`, and `Link`.

- `Date` is a free-text string, rendered literally — never parsed as a JS `Date`. (Recent commits fixed date-format typos by hand for this reason.)

When adding or editing courses, keep the bilingual description in `src/data/translations.ts` (section descriptions live there, not in the JSON).

## Git

Direct commits to `master`. No PRs required.
