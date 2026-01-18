import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import DemoSection from '../components/DemoSection';
import Link from 'next/link';
import { ArrowRight, Database, Cpu, Mail, Layers, MapPin, Clock } from 'lucide-react';
import { GetStaticProps } from 'next';
import { prisma } from '../prisma';

interface CommunityNeed {
  id: string;
  title: string;
  sector: string;
  urgency: string;
  location: string;
  scrapedAt: string;
}

export default function Home({ latestNeeds }: { latestNeeds: CommunityNeed[] }) {
  return (
    <>
      <Head>
        <title>NGO Insights & Outreach AI — East Africa</title>
        <meta name="description" content="AI-powered NGO insights and outreach automation platform tailored for Kenyan NGOs and East Africa." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />

          {/* Automation Architecture */}
          <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Automation Architecture</h2>
                <p className="text-slate-600">A high-level view of how data flows through our regional intelligence system.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-3xl bg-brand-50 flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Database className="w-10 h-10 text-brand-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. Collection</h3>
                  <p className="text-slate-500 text-sm">Distributed scrapers gather community needs from regional forums and news.</p>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-3xl bg-brand-50 flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Cpu className="w-10 h-10 text-brand-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Analysis</h3>
                  <p className="text-slate-500 text-sm">LangChain-powered workflows identify sentiment and urgent categories.</p>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-3xl bg-brand-50 flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-10 h-10 text-brand-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Outreach</h3>
                  <p className="text-slate-500 text-sm">AI drafts tailored donor messages, pairing data with funder priorities.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Live Data Feed */}
          <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6 max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Community Insights</h2>
                  <p className="text-slate-600">Real-time data from regional scrapers across East Africa.</p>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  LIVE FEED
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {latestNeeds.length > 0 ? latestNeeds.map((need) => (
                  <div key={need.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${need.urgency === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-brand-100 text-brand-700'}`}>
                        {need.urgency}
                      </span>
                      <div className="flex items-center text-slate-400 text-[10px]">
                        <Clock className="w-3 h-3 mr-1" />
                        {new Date(need.scrapedAt).toLocaleTimeString()}
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 line-clamp-2">{need.title}</h4>
                    <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center text-xs text-slate-500">
                        <Layers className="w-3 h-3 mr-1 text-slate-400" />
                        {need.sector}
                      </div>
                      <div className="flex items-center text-xs text-slate-500">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                        {need.location || 'Regional'}
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                    <p className="text-slate-400 italic">Connecting to data clusters... Sample insights will appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <DemoSection />

          <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <div className="bg-brand-600 rounded-[2.5rem] p-12 sm:p-20 relative overflow-hidden shadow-2xl">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                      Ready to accelerate your <br className="hidden sm:block" />
                      NGO’s outreach?
                    </h2>
                    <p className="text-brand-100 text-lg mb-0 max-w-xl">
                      Join forward-thinking NGOs in Kenya using AI to transform community research into funding.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/demo" className="btn-ghost px-8 py-4 w-full sm:w-auto">
                      Schedule Demo
                    </Link>
                    <Link href="/contact" className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-brand-50 transition-colors w-full sm:w-auto text-center">
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 mb-6 block">NGO <span className="text-brand-500">Insights</span></span>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  The leading AI-powered outreach intelligence platform for NGOs across East Africa.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><Link href="/pricing" className="hover:text-brand-500 transition-colors">Pricing</Link></li>
                  <li><Link href="/blog" className="hover:text-brand-500 transition-colors">Blog</Link></li>
                  <li><Link href="/demo" className="hover:text-brand-500 transition-colors">Request Demo</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><Link href="/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
                  <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
              <p>© 2026 NGO Community Research AI. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-brand-500">Twitter</a>
                <a href="#" className="hover:text-brand-500">LinkedIn</a>
                <a href="#" className="hover:text-brand-500">Facebook</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const needs = await prisma.communityNeed.findMany({
      orderBy: { scrapedAt: 'desc' },
      take: 3
    });

    return {
      props: {
        latestNeeds: JSON.parse(JSON.stringify(needs))
      },
      revalidate: 60
    };
  } catch (e) {
    // Fallback for demo
    const fallbackNeeds = [
      { id: '1', title: 'Water Scarcity in Laikipia County', sector: 'WASH', urgency: 'Critical', location: 'Kenya', scrapedAt: new Date().toISOString() },
      { id: '2', title: 'Educational Resource Gap in Karamoja', sector: 'Education', urgency: 'Medium', location: 'Uganda', scrapedAt: new Date().toISOString() },
      { id: '3', title: 'Mobile Clinic Shortage in Dodoma', sector: 'Healthcare', urgency: 'High', location: 'Tanzania', scrapedAt: new Date().toISOString() },
    ];
    return {
      props: { latestNeeds: fallbackNeeds }
    };
  }
}
