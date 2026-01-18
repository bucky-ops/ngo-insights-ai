import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const plans = await prisma.pricingPlan.findMany({
                orderBy: {
                    monthlyPrice: 'asc',
                },
            });
            return res.status(200).json(plans);
        } catch (error) {
            console.error('Error fetching pricing plans:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
