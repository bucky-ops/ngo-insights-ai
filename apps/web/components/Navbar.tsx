import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Layout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NGO <span className="text-brand-500">Insights</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors">Contact</Link>
            <Link href="/demo" className="btn-primary py-2 px-4 text-sm">
              Get a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4 shadow-xl">
          <Link href="/pricing" className="block text-base font-medium text-slate-600">Pricing</Link>
          <Link href="/blog" className="block text-base font-medium text-slate-600">Blog</Link>
          <Link href="/contact" className="block text-base font-medium text-slate-600">Contact</Link>
          <Link href="/demo" className="block btn-primary w-full text-center">
            Get a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
