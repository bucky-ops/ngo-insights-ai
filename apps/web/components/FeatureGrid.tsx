import React from 'react';
import { Database, Search, MessageSquare, BarChart3, Globe, Users } from 'lucide-react';

const features = [
  {
    title: "Insight Collection",
    description: "Automatically crawl and gather community needs from disparate sources across East Africa.",
    icon: Database,
  },
  {
    title: "Deep Analysis",
    description: "Our AI identifies key trends and urgent community requirements with human-like precision.",
    icon: Search,
  },
  {
    title: "Drafting Outreach",
    description: "Generate tailored donor messages and grant proposals in minutes using regional context.",
    icon: MessageSquare,
  },
  {
    title: "Impact Monitoring",
    description: "Track donor engagement and community feedback in real-time within one dashboard.",
    icon: BarChart3,
  },
  {
    title: "Regional Expertise",
    description: "Trained on specific socioeconomic data for Kenya, Uganda, and Tanzania.",
    icon: Globe,
  },
  {
    title: "NGO Collaboration",
    description: "Tools built specifically for collaborative workflows within NGO teams.",
    icon: Users,
  }
];

export default function FeatureGrid({ compact = false }: { compact?: boolean }) {
  const displayFeatures = compact ? features.slice(0, 3) : features;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {displayFeatures.map((feature, idx) => (
        <div key={idx} className="glass-card group">
          <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
            <feature.icon className="w-6 h-6 text-brand-500 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{feature.title}</h3>
          <p className="text-slate-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
