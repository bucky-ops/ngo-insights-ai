# NGO AI Platform — East Africa (Kenya)

A professional, high-performance website and AI-powered automation suite for NGOs and donor-funded startups in East Africa.

## Core Principles
- Clarity > Speed
- Trust > Hype
- Usefulness > Intelligence signaling
- Human-in-the-loop outreach (no automated messaging)

## Features
- NGO Research Brief Generation (5-section, 1-page, bullet-only format)
- Lead Discovery & Shortlisting (LinkedIn, NGO sites, job postings)
- Outreach Message Drafting (WhatsApp, LinkedIn, email drafts)
- Public website showcasing capabilities (pricing, demo, blog/insights)

## Tech Stack
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Node.js + Express
- Database: PostgreSQL (structured data for leads, briefs, pricing)
- AI/NLP: Python + LangChain + OpenAI API
- Scraping/Discovery: BeautifulSoup4 + Selenium
- Scheduling/Orchestration: Airflow or Prefect
- Messaging: Twilio WhatsApp API (human sends)
- Hosting: Vercel (frontend), Render/AWS/GCP (backend), Cloudflare CDN
- Storage: S3-compatible for briefs and cache

## Project Structure
```
apps/web/                 # Next.js frontend
├─ pages/
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ index.tsx          # Landing
│  ├─ pricing.tsx        # Pricing tiers
│  ├─ demo.tsx           # Demo + Calendly
│  ├─ contact.tsx         # Lead capture
│  ├─ about.tsx           # Mission
│  └─ blog/
│     ├─ index.tsx
│     └─ [slug].tsx
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ FeatureGrid.tsx
│  ├─ PricingCard.tsx
│  ├─ DemoSection.tsx
│  └─ Footer.tsx
├─ styles/
│  └─ globals.css          # Tailwind globals
├─ prisma/
│  ├─ schema.prisma        # DB models
│  ├─ index.ts            # Prisma singleton
│  └─ seed.js             # DB seed data
├─ pages/api/
│  └─ leads.ts             # Lead capture API
└─ docker-compose.yml         # Local Postgres

backend/                    # Node.js + Express (optional next phase)
└─ automation/                # Python + LangChain (later)
```

## Phase 1 MVP (2 weeks)
- Website with clean landing, pricing, demo/contact, and lead capture
- PostgreSQL + Prisma for leads and pricing data
- Calendly embed and WhatsApp chat button (no automated outreach)
- Mobile-first, fast performance, SEO basics
- Professional branding placeholders

## Phase 2 Brief Generator (2–3 weeks)
- Python/LangChain pipeline to ingest reports, surveys, sites
- UI for upload and preview
- 5-section bullet-only brief output (PDF/HTML/plain)

## Phase 3 Lead Discovery (2–3 weeks)
- LinkedIn and web scraping tools
- Curated shortlist dashboard
- CSV/CRM export

## Phase 4 Outreach Drafting (1–2 weeks)
- WhatsApp, LinkedIn, email drafts (human sends)
- Dashboard for review and history

## Phase 5 Integrations & Analytics (1–2 weeks)
- Optional CRM sync (HubSpot/Salesforce)
- GA4 + Hotjar with consent banner
- Performance polish, accessibility audit

## Local Development

1) Prerequisites
- Node.js 18+, npm 8+, Docker (optional)

2) Quick start
```bash
# 1. Clone and install
cd apps/web && npm install --legacy-peer-deps

# 2. Start a local Postgres (Docker)
docker-compose up -d  # from apps/web or repo root

# 3. Configure environment
cp env.example .env
# Edit DATABASE_URL to match your DB (default: postgresql://postgres:pass@localhost:5432/ngo_ai)

# 4. Database and client
npx prisma generate
npx prisma migrate dev --name init
npm run dev

# 5. Seed pricing (optional)
node apps/web/prisma/seed.js
```

3) Verification
- Open http://localhost:3000
- Submit a lead via /contact → check PostgreSQL table
- Browse /pricing to confirm data appears

## Deployment (Production)
- Frontend: Vercel (git branch: main)
- Backend: Render/AWS/GCP (DB + API)
- Database: Managed PostgreSQL (Render PostgreSQL or AWS RDS)
- CDN/DNS: Cloudflare
- Secrets: Environment variables only; never in code

## Compliance & Ethics
- No automated outbound messages
- Respect rate limits and robots.txt
- Consent banner for data collection
- Encrypted PII at rest; minimal retention

## Support
- Issues: Use GitHub issues in this repo
- Documentation: README in this file and apps/web/README.md
- Contact: via /contact form or site README

---

Next steps
- Implement Phase 1 MVP locally
- Add Calendly URL and WhatsApp number in DemoSection.tsx (replace placeholders)
- Prepare Tailwind integration (optional) and brand assets
- Plan backend and automation phases after MVP is stable