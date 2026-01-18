# NGO Insights AI (v0.0.1)

An AI-powered outreach intelligence platform for East African NGOs. 

## Overview
NGO Insights AI automates community data collection, identifies urgent regional needs, and streamlines donor engagement through personalized AI-generated outreach.

## Core Features
- **Distributed Scrapers**: Gather community needs from regional forums and news.
- **AI Analysis**: Identify sentiment and urgent categories using LangChain.
- **Automated Outreach**: Draft tailored donor messages pairing data with funder priorities.
- **Regional Intelligence**: Specific datasets for Kenya, Uganda, Tanzania, and Ethiopia.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS, Lucide Icons
- **Backend/Database**: Prisma ORM, PostgreSQL
- **Automation Engine**: Python (Scrapers & AI Processors)

## Getting Started
1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Generate Prisma client: `npx prisma generate`
4. Run development server: `npm run dev`
