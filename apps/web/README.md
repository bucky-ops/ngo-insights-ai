# NGO AI Landing (MVP) - Phase 1

This repository contains the Next.js + Prisma-based MVP for the NGO Insights & Automation Platform focused on East Africa (Kenya).

- Branching: We'll maintain a stable main and feature branches for design, API, DB, and integrations.
- How to run locally:
  1. Start a local Postgres instance (docker-compose up -d db)
  2. Copy env.example to .env and set DATABASE_URL
  3. Run npm install
  4. Run npx prisma migrate dev --name init
  5. Run npm run dev

- Endpoints:
  - POST /api/leads to create a lead
  - GET /pricing (currently statically seeded or DB-backed after Prisma integration)

- Next steps:
  - Bind pricing data to DB
  - Add Calendly integration and WhatsApp chat
  - Move toward Tailwind CSS styling and branding assets
