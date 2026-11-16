# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, and potential collaborators who land on Rafael's public site to decide whether to open a conversation. They scan who he is, what he has shipped, which tools he uses, and how to reach him. Inferred from the existing single-page portfolio and the redesign brief; not separately confirmed in an interview.

## Product Purpose

A personal developer portfolio that presents Rafael Gomes (GitHub `rafaelsantos7520`) as a web developer and makes it easy to inspect his projects and contact him. Success is a visitor who understands his focus, opens a project or a contact channel, and does not mistake the page for a generic template.

## Positioning

The only truthful differentiator is Rafael himself: his real name, GitHub identity, three shipped projects (MotorsShop, Hamburgeria, Kenzie Hub), his stack, and his stated interests (games, anime, coffee). Neighboring portfolios can copy layout; they cannot copy this person or these repositories.

## Operating Context

Single-page public site. Portuguese UI. Visitors arrive from GitHub, LinkedIn, WhatsApp, or a shared URL. Evaluation happens in a browser on desktop or phone, often in a few minutes.

## Capabilities and Constraints

- Stack is Vite + React + Stitches. Lightweight motion (CSS or a small lib already present: framer-motion) is allowed; do not bloat.
- Keep real content from `src/utils/userData.ts` (name, role, links) and the projects already listed in the Project component. Copy may be rewritten for punch and hierarchy.
- Do not invent fake jobs, companies, or metrics.
- Portuguese site copy stays Portuguese.
- Ship keyboard nav, visible focus, semantic headings, mobile and desktop.
- Full visual freedom: color, typography, motion, layout, components. The incumbent Kenzi/purple-on-black look is anti-reference, not brand.

## Brand Commitments

- Name on the site: Rafael Gomes (from `userData.nameUser`).
- GitHub: rafaelsantos7520. LinkedIn: rafaelsantos7520. Instagram: raffinhasanto. Email and WhatsApp as in `userData.ts`.
- Personality already in the copy: web developer, enjoys programming, games, anime, coffee. Do not invent a new biography.
- Binding visual bans from the redesign brief: no purple-on-black gradient, no Inter/Roboto as brand, no identical rounded cards with faint borders, no generic Lottie blobs.

## Evidence on Hand

- Identity and contacts: `src/utils/userData.ts`
- Stack list: `src/utils/stackData.ts` (HTML, CSS, JS, TypeScript, Node, React, Next.js, Docker, PostgreSQL, Git, Python)
- Projects (names, languages, descriptions, live/repo URLs): `src/components/Project/index.tsx` — MotorsShop, Hamburgeria, Kenzie Hub
- GitHub avatar via `https://github.com/rafaelsantos7520.png`
- No résumé PDF, no testimonials, no metrics, no company history. Future work must not fabricate them.

## Product Principles

1. Truth over résumé inflation: only real identity, projects, and contacts.
2. A hiring visit should reach work and contact in one scroll, on phone and desktop.
3. The page should be recognizably Rafael's, not a bootcamp template.
4. Accessibility is part of shipping: keyboard, focus, headings, contrast.
5. Personality (games, anime, coffee) may flavor voice; it may not invent career facts.

## Accessibility & Inclusion

Keyboard navigation, visible focus, semantic heading order, and usable mobile and desktop layouts are required by the redesign brief.
