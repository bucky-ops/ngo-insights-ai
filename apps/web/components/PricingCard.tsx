import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export default function PricingCard({ name, price, features, cta, popular }: PricingCardProps) {
  return (
    <div className={`relative flex flex-col p-8 bg-white border ${popular ? 'border-brand-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} rounded-3xl transition-all duration-300 hover:shadow-premium`}>
      {popular && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-extrabold text-slate-900">{price}</span>
          <span className="ml-1 text-slate-500 text-sm font-medium">/month</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-slate-600">
            <Check className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/checkout?plan=${encodeURIComponent(name.toLowerCase())}`}
        className={popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
      >
        {cta}
      </Link>
    </div>
  );
}
