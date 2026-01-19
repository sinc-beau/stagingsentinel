'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, MessageSquare, Shield, ArrowRight, Sparkles, ChevronDown, Zap, Eye, Network } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function HowItWorksSection() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  const steps: Array<{
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    iconBg: string;
    iconColor: string;
    hoverShadow: string;
    ctaText?: string | null;
    ctaLink?: string;
    forumLinks?: Array<{ name: string; path: string }>;
  }> = [
    {
      icon: MessageSquare,
      title: 'Sentinel Briefings',
      subtitle: 'Focused Deep Dives',
      description: 'Both in-person and digital events curated around single topics of interest to security professionals',
      color: 'from-red-500/20 to-orange-500/20 border-red-500/30',
      iconBg: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-red-400',
      hoverShadow: 'hover:shadow-red-500/20',
      ctaText: 'Learn More',
      ctaLink: '/briefings'
    },
    {
      icon: Shield,
      title: 'Shield Sessions',
      subtitle: 'Experiential Gatherings',
      description: 'Larger in-person gatherings in key cities with 35-40 attendees around an experiential evening to build future Sentinel agendas and meet guild members',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      iconBg: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20',
      ctaText: 'Learn More',
      ctaLink: '/shield-sessions'
    },
    {
      icon: Eye,
      title: 'Watchtower Forums',
      subtitle: 'Regional & National Events',
      description: '70+ CISOs and Security Leaders at regional and national events to bring together the full Sentinel Nexus throughout the year',
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      iconBg: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
      hoverShadow: 'hover:shadow-green-500/20',
      ctaText: null,
      forumLinks: [
        { name: 'Austin - March 1-3', path: '/watchtower-ciso-forum-austin-march-2026' },
        { name: 'Las Vegas - March 1-3', path: '/watchtower-ciso-forum-las-vegas-march-2026' },
        { name: 'Miami - May 31-June 2', path: '/watchtower-ciso-forum-miami-may-2026' },
        { name: 'Canada - August', path: '/watchtower-ciso-forum-canada-august-2026' },
        { name: 'Austin - Sept 20-22', path: '/watchtower-ciso-forum-austin-september-2026' }
      ]
    },
    {
      icon: Network,
      title: 'Vendors are Present, Capped, and Vetted',
      subtitle: 'Quality Over Quantity',
      description: 'To fit the problem at hand, not dominate the conversation. Real solutions from proven partners',
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      iconBg: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20',
      ctaText: 'Partnership Opportunities',
      ctaLink: '/solution-providers'
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-sm tracking-widest mb-6 bg-teal-500/10 px-4 py-2 rounded-full border border-teal-500/30">
            <Sparkles className="w-4 h-4" />
            HOW WE CONNECT
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Three Ways to <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Engage</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From focused briefings to regional gatherings, we bring security leaders together in formats that foster real connection and actionable insights
          </p>
        </div>

        {/* Desktop Layout - Zigzag with Arrows */}
        <div className="hidden lg:block relative">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div
                    className={`group relative p-8 bg-gradient-to-br ${step.color} backdrop-blur-sm border-2 rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl shadow-lg ${step.hoverShadow} ${
                      index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                    }`}
                    style={{ width: '650px' }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.iconBg} border-2 border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-black text-lg flex items-center justify-center shadow-lg">
                            {index + 1}
                          </span>
                          <div className="h-px bg-gradient-to-r from-teal-400/50 to-transparent flex-1 max-w-[100px]" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                          {step.title}
                        </h3>
                        
                        {step.subtitle && (
                          <p className="text-sm font-mono text-teal-400 mb-3 tracking-wider">
                            {step.subtitle}
                          </p>
                        )}
                        
                        <p className="text-slate-300 leading-relaxed text-lg mb-4">
                          {step.description}
                        </p>

                        {step.forumLinks ? (
                          <div className="flex flex-wrap gap-2">
                            {step.forumLinks.map((forum, idx) => (
                              <Link key={idx} href={forum.path}>
                                <button className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/20">
                                  {forum.name}
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </Link>
                            ))}
                          </div>
                        ) : step.ctaText && (
                          <Link href={step.ctaLink || '#'}>
                            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg transition-all duration-300 border border-white/20">
                              {step.ctaText}
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrows */}
                {index < steps.length - 1 && (
                  <div className={`flex justify-center my-8 ${index % 2 === 0 ? 'lg:ml-[325px]' : 'lg:mr-[325px]'}`}>
                    <div className="relative">
                      <ArrowRight 
                        className={`w-12 h-12 text-teal-400/50 animate-pulse ${index % 2 === 0 ? 'rotate-45' : 'rotate-[135deg]'}`} 
                      />
                      <div className="absolute inset-0 blur-xl">
                        <ArrowRight 
                          className={`w-12 h-12 text-teal-400/30 ${index % 2 === 0 ? 'rotate-45' : 'rotate-[135deg]'}`} 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical Cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`group p-6 bg-gradient-to-br ${step.color} backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 hover:shadow-xl shadow-lg ${step.hoverShadow}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className="h-px bg-gradient-to-r from-teal-400/50 to-transparent flex-1 max-w-[50px]" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    
                    {step.subtitle && (
                      <p className="text-xs font-mono text-teal-400 mb-2 tracking-wider">
                        {step.subtitle}
                      </p>
                    )}
                    
                    <p className="text-slate-300 leading-relaxed text-sm mb-3">
                      {step.description}
                    </p>

                    {step.forumLinks ? (
                      <div className="flex flex-wrap gap-2">
                        {step.forumLinks.map((forum, idx) => (
                          <Link key={idx} href={forum.path}>
                            <button className="inline-flex items-center gap-2 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/20">
                              {forum.name}
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </Link>
                        ))}
                      </div>
                    ) : step.ctaText && (
                      <Link href={step.ctaLink || '#'}>
                        <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/20">
                          {step.ctaText}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ChevronDown className="w-8 h-8 text-teal-400/50 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-lg text-slate-300">
              Ready to experience security leadership done differently?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowNewsletterForm(true)}
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30"
              >
                Join the Sentinel Nexus
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Form Modal */}
      <Dialog open={showNewsletterForm} onOpenChange={setShowNewsletterForm}>
        <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              Join the Nexus
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Connect with 500+ security leaders and access exclusive intelligence.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}