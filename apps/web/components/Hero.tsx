import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-50 to-transparent opacity-50 -z-10 blur-3xl rounded-full" />

      <div className="container relative mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Empowering NGOs in East Africa with AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Collect, Analyze, and <br />
            <span className="gradient-text">Automate Donor Outreach</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            The mission-critical AI platform for Kenyan NGOs. Turn community insights into actionable donor messages in minutes, not days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo" className="btn-primary space-x-2 px-8 py-4 w-full sm:w-auto">
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4 w-full sm:w-auto">
              Contact Sales
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-slate-500">
              <Zap className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium uppercase tracking-wider">Fast Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-500">
              <ShieldCheck className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium uppercase tracking-wider">Secure Data</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-500">
              <Layout className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium uppercase tracking-wider">Intuitive UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
  )
}
