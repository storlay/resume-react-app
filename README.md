# React Landing Page

Personal landing page. Built with React 19, TypeScript, Vite and Tailwind CSS.

## Features

- Sections: Hero, About, Experience, Stack, Contacts
- Light/dark theme toggle
- Locale toggle (RU/EN)
- Semantic HTML, ARIA attributes, visible focus
- Strict CSP in `index.html`

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- ESLint + typescript-eslint

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (default `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project structure

```
src/
  components/   shared UI: Header, Footer, ThemeToggle, LocaleToggle, ...
  sections/     page sections: Hero, About, Experience, Stack, Contacts
  content/      static content
  hooks/        custom hooks
  i18n/         locale context and dictionaries
  types/        shared TypeScript types
  utils/        helpers
  App.tsx
  main.tsx
  index.css
```
