import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma'

type Lead = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  country?: string;
  region?: string;
  interest?: string;
  source?: string;
  createdAt?: string;
}

import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, organization, country, region, interest, source } = req.body || {}

    const leadData = {
      name,
      email,
      phone,
      organization,
      country,
      region,
      interest,
      source,
      createdAt: new Date().toISOString()
    };

    try {
      const lead = await prisma.lead.create({
        data: leadData
      })
      return res.status(201).json({ success: true, lead })
    } catch (e) {
      console.warn('Database connection failed, falling back to file storage:', e);

      // Fallback: Save to a local JSON file
      try {
        const filePath = path.join(process.cwd(), 'leads_dump.json');
        let leads = [];
        if (fs.existsSync(filePath)) {
          leads = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
        leads.push({ id: `local-${Date.now()}`, ...leadData });
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

        return res.status(201).json({
          success: true,
          message: 'Saved to local storage (DB Offline)',
          lead: { id: `local-${Date.now()}`, ...leadData }
        })
      } catch (fileError) {
        return res.status(500).json({ error: 'Failed to save lead in both DB and file storage' })
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
