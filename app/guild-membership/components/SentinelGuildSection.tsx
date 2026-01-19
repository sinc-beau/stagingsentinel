'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import { Shield, Users, Brain, Rocket, Heart, Award, ArrowRight, Lock, Crown, Target, Sparkles, CircleCheck as CheckCircle2, Star, Zap, Network, Eye, Terminal, Activity, ChevronRight, Globe, Calendar, MessageSquare, BookOpen, PenTool, Handshake, TrendingUp, Gem, Flame, Compass, Layers, MousePointer, Cpu, Signal, Command } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { GuildMembershipForm } from '@/components/forms/GuildMembershipForm';
import { CouncilSection } from '@/components/CouncilSection';

export function SentinelGuildSection() {
  const [showGuildForm, setShowGuildForm] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: PenTool, label: 'THOUGHT LEADERSHIP', color: 'teal' },
    { icon: Handshake, label: 'PEER NETWORK', color: 'cyan' },
    { icon: TrendingUp, label: 'CAREER GROWTH', color: 'teal' },
    { icon: Users, label: 'MENTORSHIP', color: 'cyan' },
    { icon: Crown, label: 'LEGACY', color: 'teal' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Unified Background for entire page */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Subtle floating orbs that don't change between sections */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24">
          {/* Interactive Background Elements - Hidden on mobile */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Floating nodes that connect */}
            {benefits.map((benefit, i) => {
              const angle = (i * 72) * Math.PI / 180;
              const radius = 250;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                  }}
                >
                  <div 
                    className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                      activeSection === i ? 'scale-125' : 'scale-100 opacity-50'
                    }`}
                  >
                    <div className={`w-20 h-20 bg-${benefit.color}-500/10 rounded-full flex items-center justify-center border border-${benefit.color}-500/30`}>
                      <benefit.icon className={`w-8 h-8 text-${benefit.color}-400`} />
                    </div>
                    {activeSection === i && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-mono text-teal-400">{benefit.label}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {benefits.map((_, i) => {
                const angle1 = (i * 72) * Math.PI / 180;
                const angle2 = ((i + 1) * 72) * Math.PI / 180;
                const radius = 250;
                return (
                  <line
                    key={i}
                    x1={`${50 + Math.cos(angle1) * radius / 10}%`}
                    y1={`${50 + Math.sin(angle1) * radius / 10}%`}
                    x2={`${50 + Math.cos(angle2) * radius / 10}%`}
                    y2={`${50 + Math.sin(angle2) * radius / 10}%`}
                    stroke="url(#guild-gradient)"
                    strokeWidth="1"
                    opacity={activeSection === i ? 0.5 : 0.1}
                    className="transition-opacity duration-1000"
                  />
                );
              })}
              <defs>
                <linearGradient id="guild-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Hero Content */}
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-md border border-teal-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
              <Signal className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-teal-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">Founding Members Wanted</span>
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            </div>

            {/* Main Title with Animation */}
            <div className="mb-8 sm:mb-12 px-4">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-3 sm:mb-4 tracking-tight sm:tracking-wider break-words">
                SENTINEL<span className="text-teal-400">GUILD</span>
              </h1>
              
              <p className="text-lg sm:text-2xl lg:text-3xl text-slate-300 font-light mt-6 sm:mt-8">
                Wardens of Sentinel Nexus
              </p>
              <p className="text-sm sm:text-xl text-slate-400 mt-3 sm:mt-4">
                Guiding the fellowship, shaping the future of cyber defense
              </p>
            </div>

            {/* Interactive CTA */}
            <button 
              onClick={() => setShowGuildForm(true)}
              className="group relative px-8 sm:px-16 py-4 sm:py-6 overflow-hidden rounded-2xl font-bold text-base sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 bg-[size:200%_auto] animate-gradient rounded-2xl" />
              <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 text-white">
                Apply to Join
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </section>

        {/* Council Section */}
        <CouncilSection />

        {/* Section 1: Amplify Thought Leadership */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <PenTool className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                  <span className="text-[10px] sm:text-xs font-mono text-teal-400 uppercase tracking-wider">Benefit 01</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black">
                  <span className="text-white">Amplify Your</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Thought Leadership
                  </span>
                </h2>
                
                <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
                  Publish with authority, set the agenda, and expand your influence across programs peers actually use.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Influence executive dialogue on strategy and risk',
                    'Contribute to white papers and research',
                    'Shape Watchtower Forum topics',
                    'Establish yourself as a respected voice'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-slate-900/30 to-black/30 rounded-3xl border border-teal-500/20 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-32 h-32 sm:w-48 sm:h-48 border-2 border-teal-500/20 rounded-full animate-spin-slow" />
                      <div className="absolute inset-0 w-32 h-32 sm:w-48 sm:h-48 border-2 border-cyan-500/20 rounded-full animate-spin-slow-reverse" />
                      <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center">
                        <PenTool className="w-12 h-12 sm:w-20 sm:h-20 text-teal-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Build Powerful Relationships */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              {/* Visual Element First */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-slate-900/30 to-black/30 rounded-3xl border border-cyan-500/20 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Network visualization */}
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const radius = 80;
                        return (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              transform: `translate(${Math.cos(angle) * radius - 16}px, ${Math.sin(angle) * radius - 16}px)`,
                            }}
                          >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                            </div>
                          </div>
                        );
                      })}
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full flex items-center justify-center border-2 border-cyan-500/50">
                          <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Handshake className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider">Benefit 02</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black">
                  <span className="text-white">Build Powerful</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    Relationships
                  </span>
                </h2>
                
                <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
                  Direct access to operators who can act, turning conversations into allies, opportunities, and faster outcomes.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Collaborate with CISOs and changemakers',
                    'Access private dinners and forums',
                    'Form partnerships and alliances',
                    'Judge the Sentinel Awards'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Grow Professionally */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                  <span className="text-[10px] sm:text-xs font-mono text-teal-400 uppercase tracking-wider">Benefit 03</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black">
                  <span className="text-white">Grow</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Professionally
                  </span>
                </h2>
                
                <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
                  Build board-ready leadership signal and a portfolio of work without adding committee bloat.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: Target, label: 'Shape Strategy', desc: 'Guide community direction' },
                    { icon: Eye, label: 'Increase Visibility', desc: 'Expand your influence' },
                    { icon: Award, label: 'Board Credentials', desc: 'Build executive portfolio' },
                    { icon: Rocket, label: 'Platform Advisory', desc: 'Drive innovation' }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-teal-500/50 transition-colors">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 mb-3" />
                      <h4 className="text-sm sm:text-base text-white font-semibold mb-1">{item.label}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-slate-900/30 to-black/30 rounded-3xl border border-teal-500/20 overflow-hidden backdrop-blur-sm">
                  <img 
                    src="/guildcareer.png" 
                    alt="Career advancement" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 & 5: Champion & Legacy */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4">
                Shape the Future
              </h2>
              <p className="text-base sm:text-xl text-slate-400">
                Champion the next generation and leave your legacy
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Champion Next Gen */}
              <div className="bg-gradient-to-br from-slate-900/30 to-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 sm:p-10 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Champion the Next Generation</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
                      Compound your impact by accelerating capable talent and setting the cultural bar for the field.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Support mentorship programs',
                        'Foster inclusive culture',
                        'Shape the environment you wished for'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Leave Legacy */}
              <div className="bg-gradient-to-br from-slate-900/30 to-black/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-6 sm:p-10 hover:border-teal-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Leave Your Legacy</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
                      Convert service into a durable footprint across research, programs, and community standards.
                    </p>
                    <div className="bg-black/30 rounded-xl p-3 sm:p-4 border border-teal-500/20">
                      <p className="text-xs sm:text-sm text-teal-400">
                        Guild members are foundational voices in a movement to elevate cybersecurity leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Gem className="w-12 h-12 sm:w-20 sm:h-20 text-teal-400 mx-auto mb-6 sm:mb-8" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Thank You for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Considering the Guild
              </span>
            </h2>
            
            <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Your insights, leadership, and presence help shape Sentinel Nexus into a uniquely valuable force for cybersecurity collaboration.
            </p>
            
            <p className="text-xl sm:text-2xl font-bold text-teal-400 mb-8 sm:mb-12">
              Let's build what cybersecurity leadership needs next.
            </p>
            
            <button 
              onClick={() => setShowGuildForm(true)}
              className="group relative px-8 sm:px-16 py-4 sm:py-6 overflow-hidden rounded-2xl font-bold text-base sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 bg-[size:200%_auto] animate-gradient" />
              <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 text-white">
                Begin Your Application
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes slideUp {
          from { height: 0; }
          to { height: var(--height); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>

      {/* HubSpot Form Modal */}
      <Dialog open={showGuildForm} onOpenChange={setShowGuildForm}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-full bg-slate-900 border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
              Guild Membership Application
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-slate-400">
              Complete your application for exclusive Guild membership consideration.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <GuildMembershipForm
              onFormSubmitted={() => {
                setTimeout(() => setShowGuildForm(false), 2000);
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}