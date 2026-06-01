# The Artisan Kiln — Ceramic Tile Order Form

Interactive single-page ceramic-tile order form with a live design visualiser.
Front-end test task for **Tile Expert** (Frontend Developer, React).

- **Live demo:** https://spica.selim.services
- **Original task spec:** https://gitlab.com/tile-expert-test-tasks/frontend

## Stack

- **Next.js 15** (App Router) — static export
- **TypeScript** — every entity typed
- **Tailwind CSS 3** — all styling via utilities, custom tokens in `tailwind.config.ts`
- **Redux Toolkit** — cart + visualiser grid state
- **Framer Motion** — tile placement / panel animations
- **Vitest** — unit tests for the pricing logic

## Features

**Shopping cart**
- Per-tile quantity (input + −/+ steppers), remove line, re-add removed tiles
- Live **Subtotal**, **Shipping**, **Grand Total**

**Design tool (desktop only)**
- Interactive 6×6 grid
- Pick a tile from the palette and click cells, or drag-and-drop onto the grid
- Double-click to clear a cell, or clear the whole grid

**Checkout**
- Validation: required fields, email format, card number (16 digits + Luhn), MM/YY expiry, CVV
- Payment methods: Credit/Debit Card, PayPal, Apple Pay, Bank Transfer
- Card fields appear only for the card method

## Business rules

| Rule | Logic |
|------|-------|
| Subtotal | Σ (quantity × unit price) |
| Shipping | Free when Subtotal **> $500**, otherwise **$25.00** |
| Grand Total | Subtotal + Shipping |

Initial catalogue: Ocean Wave ($28), Forest Fern ($30), Terracotta Dot ($26), Yellow Star ($29).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static export to ./out
npm test         # pricing unit tests
```

Node 22 (see `.nvmrc`).
