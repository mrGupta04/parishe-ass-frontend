# Parikshe UI Recreation

Rebuild of the Parikshe website using Next.js (App Router), TypeScript, Tailwind CSS, and mock APIs. Includes responsive layouts, reusable components, and stateful flows that mirror the original UX.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Native fetch calls with environment-based API base URL

## Project setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env.local
   ```
   Adjust `NEXT_PUBLIC_API_BASE_URL` if you proxy APIs.
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000.

## Implemented screens
- Home (hero, highlights, feature grid, API-driven course listing, testimonials, CTA)
- About (pillars, kept flows, stack choices, mission)
- Careers (open roles, culture, hiring process)
- Contact (contact options + validated form hitting mock API)
- SSLC Study (modules, weekly rhythm, support CTA)

## Mock APIs
- GET /api/courses – list of courses
- GET /api/courses/:id – single course
- POST /api/contact – accepts `{ name, email, message }`

Client components display loading/success/error states when consuming these endpoints. API base URL is driven by `NEXT_PUBLIC_API_BASE_URL` with a local fallback to `/api`.

## Folder hints
- src/app – routes and layouts
- src/components – shared UI (header, footer, section heading, course grid, contact form)
- src/lib/api-client.ts – helpers for GET/POST with env-based base URL

## Deployment
Deploy directly to Vercel or any Next.js-compatible host. Ensure environment variables are configured in the target platform.
