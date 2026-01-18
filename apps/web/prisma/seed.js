const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const plans = [
    { name: 'Community', monthlyPrice: 0, yearlyPrice: 0, features: ['Community data access', 'AI-generated brief', 'Public sector insights'], description: 'Free for small, local NGO chapters' },
    { name: 'Starter', monthlyPrice: 29, yearlyPrice: 299, features: ['Lead capture (50/mo)', 'Basic community analysis', 'Standard email support'], description: 'Ideal for growing NGOs' },
    { name: 'Growth', monthlyPrice: 99, yearlyPrice: 999, features: ['Unlimited leads', 'AI Automated drafting', 'WhatsApp & Calendly integration'], description: 'Professional research tools' },
    { name: 'Scale', monthlyPrice: 299, yearlyPrice: 2999, features: ['Multi-region dashboards', 'Advanced custom automations', 'Dedicated account manager'], description: 'Full-scale international operations' },
  ];
  // Upsert to ensure idempotent seed
  for (const p of plans) {
    await prisma.pricingPlan.upsert({
      where: { name: p.name },
      update: p,
      create: p
    });
  }
  console.log('Seeded pricing plans');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
