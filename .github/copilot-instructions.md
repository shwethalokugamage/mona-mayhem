# Project Guidelines

## Project Overview
**Mona Mayhem** is a retro arcade-themed website that compares GitHub contribution graphs of two users. It is built using the Astro framework and runs on Node.js using the `@astrojs/node` adapter.

## Code Style & Conventions
- **Astro Best Practices:**
  - Favor `.astro` files for UI components and pages.
  - Keep server-side data fetching and logic in the component frontmatter (`---`).
  - Use client-side `<script>` tags only when interactive client-side JavaScript is necessary.
- **Routing & API:**
  - File-based routing is used. Pages are located in `src/pages/`.
  - API endpoints are located in `src/pages/api/` (e.g., `src/pages/api/contributions/[username].ts`).
- **Styling:**
  - Keep styling modular. You can use scoped CSS within `.astro` files or global stylesheets (e.g., `docs/styles.css`).
  - The project uses a retro gaming font ("Press Start 2P").

## Architecture
- **Framework:** Astro v5.
- **Environment:** Node.js runtime with SSR enabled via the `@astrojs/node` adapter.
- **Entry Points:** The main page is `src/pages/index.astro`. 

## Build and Test
Execute the following commands using npm (or your preferred package manager):

- **Development Server:** `npm run dev` (starts the local Astro dev server)
- **Production Build:** `npm run build` (builds the project for production)
- **Preview Production:** `npm run preview` (previews the built production site locally)
