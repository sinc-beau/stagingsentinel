'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Activity, Award, Database, Target, Circle, ArrowRight, CheckCircle, DollarSign, TrendingDown, Handshake, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { HubSpotForm } from '@/components/ui/HubSpotForm';

interface TierFeatures {
  forums: {
    title: string;
    desc: string;
    icon?: React.ComponentType<any>;
  };
  dinners: {
    count: number;
    quarterly: number;
    title: string;
  };
  digital: {
    count: number;
    quarterly: number;
    title: string;
  };
  shield: {
    title: string;
    desc: string;
  };
  guild: {
    title: string;
    desc: string;
  };
  survey: {
    title: string;
    desc: string;
  };
  extras: string[];
}

interface PricingBreakdown {
  forums: { name: string; unitPrice: number; quantity: number; total: number };
  forumExperience?: { name: string; unitPrice: number; quantity: number; total: number };
  dinners: { name: string; unitPrice: number; quantity: number; total: number };
  digital: { name: string; unitPrice: number; quantity: number; total: number };
  shieldSession: { name: string; price: number };
  guildSession?: { name: string; price: number };
  survey: { name: string; price: number };
  storytelling?: { name: string; price: number };
  rateCard: number;
  discount: number;
  savings: number;
  finalPrice: number;
}

interface Tier {
  name: string;
  subtitle: string;
  price: string;
  color: string;
  borderColor: string;
  glowColor: string;
  minEngagements: number;
  avgEngagements: number;
  cplMin: number;
  cplAvg: number;
  features: TierFeatures;
  pricing: PricingBreakdown;
}

type TierKey = 'vanguard' | 'innovator' | 'connector';

export function SolutionProviderProspectusContent() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [selectedTier, setSelectedTier] = useState<TierKey>('vanguard');
  const [glitchText, setGlitchText] = useState('SENTINEL');
  const [activeTab, setActiveTab] = useState('benefits');
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '0649') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid passcode');
      setPasscode('');
    }
  };

  // Glitch effect
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const glitchInterval = setInterval(() => {
      const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
      const originalText = 'SENTINEL';
      
      setGlitchText(originalText.split('').map((char) => 
        Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join(''));
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [isAuthenticated]);

  const tiers: Record<TierKey, Tier> = {
    vanguard: {
      name: 'VANGUARD',
      subtitle: 'Diamond Partnership',
      price: '$1,129,496',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20',
      minEngagements: 721,
      avgEngagements: 971,
      cplMin: 1566,
      cplAvg: 1163,
      features: {
        forums: {
          title: 'Diamond Keynote Sponsor',
          desc: 'All 5 Watchtower Forums',
          icon: Award
        },
        dinners: {
          count: 16,
          quarterly: 4,
          title: 'Sentinel Dinner Briefings'
        },
        digital: {
          count: 16,
          quarterly: 4,
          title: 'Sentinel Digital Briefings'
        },
        shield: {
          title: 'Lead Sponsor',
          desc: 'Choice of city'
        },
        guild: {
          title: 'Full Guild Access',
          desc: 'Sponsor-driven sessions'
        },
        survey: {
          title: 'Exclusive Ownership',
          desc: '100 CISO dataset'
        },
        extras: [
          'Exclusive Experience Choice at Forums',
          'Year-Round Vanguard Branding',
          'Long-Form Storytelling Opportunities',
          'Quarterly ROI Reporting',
          'Proprietary Survey Rights'
        ]
      },
      pricing: {
        forums: { name: 'Diamond Keynote @ Forums', unitPrice: 57950, quantity: 5, total: 289750 },
        forumExperience: { name: 'Forum Exclusive Experience', unitPrice: 25000, quantity: 4, total: 100000 },
        dinners: { name: 'Sentinel Dinner Briefings', unitPrice: 32945, quantity: 16, total: 527120 },
        digital: { name: 'Sentinel Digital Briefings', unitPrice: 22500, quantity: 16, total: 360000 },
        shieldSession: { name: 'Shield Session (Lead)', price: 30000 },
        guildSession: { name: 'Sentinel Guild Session', price: 50000 },
        survey: { name: 'Exclusive Survey (100 CISOs)', price: 30000 },
        storytelling: { name: 'Long-form Storytelling', price: 25000 },
        rateCard: 1411870,
        discount: 20,
        savings: 282374,
        finalPrice: 1129496
      }
    },
    innovator: {
      name: 'INNOVATOR',
      subtitle: 'Platinum Partnership',
      price: '$604,000',
      color: 'from-teal-500 to-cyan-500',
      borderColor: 'border-teal-500/30',
      glowColor: 'shadow-teal-500/20',
      minEngagements: 493,
      avgEngagements: 641,
      cplMin: 1225,
      cplAvg: 942,
      features: {
        forums: {
          title: 'Platinum Session Sponsor',
          desc: 'All 5 Watchtower Forums',
          icon: Award
        },
        dinners: {
          count: 8,
          quarterly: 2,
          title: 'Sentinel Dinner Briefings'
        },
        digital: {
          count: 8,
          quarterly: 2,
          title: 'Sentinel Digital Briefings'
        },
        shield: {
          title: 'Shared Participation',
          desc: '1 Shield Session'
        },
        guild: {
          title: 'Survey Access',
          desc: 'Topline findings'
        },
        survey: {
          title: 'Benchmarking Reports',
          desc: 'Industry insights'
        },
        extras: [
          'Digital Visibility Year-Round',
          'Bi-Annual ROI Reporting',
          'Thought Leadership Distribution',
          'Innovator Partner Recognition'
        ]
      },
      pricing: {
        forums: { name: 'Platinum Sessions @ Forums', unitPrice: 44950, quantity: 5, total: 224750 },
        dinners: { name: 'Sentinel Dinner Briefings', unitPrice: 32945, quantity: 8, total: 263560 },
        digital: { name: 'Sentinel Digital Briefings', unitPrice: 22500, quantity: 8, total: 180000 },
        shieldSession: { name: 'Shield Session (Shared)', price: 22500 },
        survey: { name: 'Survey Access (Topline findings)', price: 20000 },
        rateCard: 710810,
        discount: 15,
        savings: 106810,
        finalPrice: 604000
      }
    },
    connector: {
      name: 'CONNECTOR',
      subtitle: 'Gold Partnership',
      price: '$395,000',
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500/30',
      glowColor: 'shadow-yellow-500/20',
      minEngagements: 429,
      avgEngagements: 525,
      cplMin: 921,
      cplAvg: 752,
      features: {
        forums: {
          title: 'Gold Forum Sponsor',
          desc: 'All 5 Watchtower Forums',
          icon: Circle
        },
        dinners: {
          count: 4,
          quarterly: 1,
          title: 'Sentinel Dinner Briefings'
        },
        digital: {
          count: 4,
          quarterly: 1,
          title: 'Sentinel Digital Briefings'
        },
        shield: {
          title: 'Shared Participation',
          desc: '1 Shield Session'
        },
        guild: {
          title: 'Survey Summary',
          desc: 'Executive highlights'
        },
        survey: {
          title: 'Topline Findings',
          desc: 'Key insights'
        },
        extras: [
          'Digital Content Distribution',
          'Connector Partner Recognition',
          'Newsletter Presence',
          'Community Channel Access'
        ]
      },
      pricing: {
        forums: { name: 'Gold Shared Slots @ Forums', unitPrice: 34950, quantity: 5, total: 174750 },
        dinners: { name: 'Sentinel Dinner Briefings', unitPrice: 32945, quantity: 4, total: 131780 },
        digital: { name: 'Sentinel Digital Briefings', unitPrice: 22500, quantity: 4, total: 90000 },
        shieldSession: { name: 'Shield Session (Shared)', price: 22500 },
        survey: { name: 'Survey Access (Summary)', price: 20000 },
        rateCard: 439030,
        discount: 10,
        savings: 44030,
        finalPrice: 395000
      }
    }
  };

  const currentTier = tiers[selectedTier];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Passcode Form */}
        <div className="relative z-10 max-w-md w-full mx-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/80 backdrop-blur-xl border border-teal-400/30 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-teal-400" />
                <Shield className="w-10 h-10 text-teal-400" />
                <Lock className="w-8 h-8 text-teal-400" />
              </div>
              <h1 className="text-2xl font-black text-white mb-2">RESTRICTED ACCESS</h1>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-wider">
                Partnership Prospectus
              </p>
            </div>

            <form onSubmit={handlePasscodeSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Access Code
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-400/50 focus:bg-slate-800/70 transition-all font-mono text-center text-lg tracking-widest"
                  placeholder="••••"
                  maxLength={4}
                  required
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-400/30 text-red-400 px-4 py-2 rounded-lg text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                ACCESS PROSPECTUS
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-500">
              <p>Authorized personnel only</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              {/* Classification Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-6 py-2 rounded-full text-xs font-mono tracking-wider mb-8">
                <Lock className="w-3 h-3" />
                PARTNERSHIP PROSPECTUS
                <Shield className="w-3 h-3" />
              </div>
              
              {/* Title */}
              <h1 className="text-7xl lg:text-9xl font-black mb-8">
                <span className="text-white relative inline-block">
                  <span className="relative z-10">{glitchText}</span>
                  <span className="absolute inset-0 text-teal-400 opacity-50" style={{transform: 'translateX(2px) translateY(-2px)'}}>
                    SENTINEL
                  </span>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mt-2 text-6xl lg:text-7xl">
                  NEXUS PARTNERSHIPS
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed font-mono uppercase tracking-wider">
                THE PREMIER CISO COMMUNITY // EXCLUSIVE ACCESS // STRATEGIC PARTNERSHIPS
              </p>

              {/* Tier Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {(Object.entries(tiers) as [TierKey, Tier][]).map(([key, tier]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTier(key)}
                    className={`
                      relative px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider
                      transition-all duration-300 overflow-hidden group
                      ${selectedTier === key 
                        ? `bg-gradient-to-r ${tier.color} text-black shadow-2xl scale-105`
                        : 'bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-white hover:border-teal-500/50'
                      }
                    `}
                  >
                    <span className="relative z-10">{tier.name}</span>
                    {selectedTier === key && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Selected Tier Display */}
              <div className={`
                max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-sm 
                border-2 ${currentTier.borderColor} rounded-2xl p-12 
                shadow-2xl ${currentTier.glowColor} relative overflow-hidden
              `}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTier.color} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Tier Header */}
                  <div className="text-center mb-12">
                    <h2 className={`text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${currentTier.color}`}>
                      {currentTier.name}
                    </h2>
                    <p className="text-lg text-slate-400 font-mono uppercase tracking-wider mb-4">
                      {currentTier.subtitle}
                    </p>
                    <div className="text-6xl font-black text-white">
                      {currentTier.price}
                      <span className="text-lg text-slate-500 font-normal ml-2">USD</span>
                    </div>
                  </div>

                  {/* Engagement Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-2xl font-black text-teal-400 mb-2">
                        {currentTier.minEngagements}
                      </div>
                      <div className="text-xs text-slate-400 font-mono uppercase">
                        Min Engagements
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-2xl font-black text-cyan-400 mb-2">
                        {currentTier.avgEngagements}
                      </div>
                      <div className="text-xs text-slate-400 font-mono uppercase">
                        Avg Engagements
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-2xl font-black text-purple-400 mb-2">
                        ${currentTier.cplMin}
                      </div>
                      <div className="text-xs text-slate-400 font-mono uppercase">
                        CPL (Min)
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-2xl font-black text-yellow-400 mb-2">
                        ${currentTier.cplAvg}
                      </div>
                      <div className="text-xs text-slate-400 font-mono uppercase">
                        CPL (Avg)
                      </div>
                    </div>
                  </div>

                  {/* Feature Tabs */}
                  <div className="flex justify-center gap-2 mb-8">
                    {['benefits', 'events', 'pricing', 'extras'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                          px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-wider
                          transition-all duration-300
                          ${activeTab === tab
                            ? `bg-gradient-to-r ${currentTier.color} text-black font-bold`
                            : 'bg-slate-800/50 text-slate-400 hover:text-white'
                          }
                        `}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                      {activeTab === 'benefits' && (
                        <motion.div
                          key="benefits"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="grid md:grid-cols-2 gap-6"
                        >
                          {/* Forums */}
                          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-4">
                              <Award className="w-5 h-5 text-teal-400" />
                              <h3 className="font-mono text-sm uppercase text-teal-400">
                                Forum Sponsorship
                              </h3>
                            </div>
                            <div className="text-xl font-bold text-white mb-2">
                              {currentTier.features.forums.title}
                            </div>
                            <div className="text-sm text-slate-400">
                              {currentTier.features.forums.desc}
                            </div>
                          </div>

                          {/* Guild */}
                          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-4">
                              <Shield className="w-5 h-5 text-cyan-400" />
                              <h3 className="font-mono text-sm uppercase text-cyan-400">
                                Sentinel Guild
                              </h3>
                            </div>
                            <div className="text-xl font-bold text-white mb-2">
                              {currentTier.features.guild.title}
                            </div>
                            <div className="text-sm text-slate-400">
                              {currentTier.features.guild.desc}
                            </div>
                          </div>

                          {/* Survey */}
                          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-4">
                              <Database className="w-5 h-5 text-purple-400" />
                              <h3 className="font-mono text-sm uppercase text-purple-400">
                                CISO Survey
                              </h3>
                            </div>
                            <div className="text-xl font-bold text-white mb-2">
                              {currentTier.features.survey.title}
                            </div>
                            <div className="text-sm text-slate-400">
                              {currentTier.features.survey.desc}
                            </div>
                          </div>

                          {/* Shield Sessions */}
                          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-4">
                              <Target className="w-5 h-5 text-yellow-400" />
                              <h3 className="font-mono text-sm uppercase text-yellow-400">
                                Shield Sessions
                              </h3>
                            </div>
                            <div className="text-xl font-bold text-white mb-2">
                              {currentTier.features.shield.title}
                            </div>
                            <div className="text-sm text-slate-400">
                              {currentTier.features.shield.desc}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'events' && (
                        <motion.div
                          key="events"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          {/* Dinner Briefings */}
                          <div className="bg-gradient-to-r from-slate-800/30 to-slate-800/10 rounded-xl p-8 border border-teal-500/20">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {currentTier.features.dinners.title}
                                </h3>
                                <p className="text-slate-400">
                                  Custom, invite-only gatherings of 10-20 executives (8 min)
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-black text-teal-400">
                                  {currentTier.features.dinners.count}
                                </div>
                                <div className="text-xs text-slate-500 font-mono uppercase">
                                  Per Year
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {currentTier.features.dinners.quarterly} per quarter
                            </div>
                          </div>

                          {/* Digital Briefings */}
                          <div className="bg-gradient-to-r from-slate-800/30 to-slate-800/10 rounded-xl p-8 border border-cyan-500/20">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {currentTier.features.digital.title}
                                </h3>
                                <p className="text-slate-400">
                                  60-minute virtual roundtables with 15-25 executives (8 min)
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-black text-cyan-400">
                                  {currentTier.features.digital.count}
                                </div>
                                <div className="text-xs text-slate-500 font-mono uppercase">
                                  Per Year
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {currentTier.features.digital.quarterly} per quarter
                            </div>
                          </div>

                          {/* Forums */}
                          <div className="bg-gradient-to-r from-slate-800/30 to-slate-800/10 rounded-xl p-8 border border-purple-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">
                              Watchtower Forums (5)
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                                <div className="text-xs font-mono text-slate-500 mb-1">EAST</div>
                                <div className="text-white font-bold">March 15-16</div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                                <div className="text-xs font-mono text-slate-500 mb-1">NATIONAL</div>
                                <div className="text-white font-bold">April/May</div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                                <div className="text-xs font-mono text-slate-500 mb-1">CANADA</div>
                                <div className="text-white font-bold">August</div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                                <div className="text-xs font-mono text-slate-500 mb-1">WEST</div>
                                <div className="text-white font-bold">Oct 11-13</div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 md:col-span-2">
                                <div className="text-xs font-mono text-slate-500 mb-1">ADDITIONAL</div>
                                <div className="text-white font-bold">TBD</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'pricing' && (
                        <motion.div
                          key="pricing"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-green-400" />
                              Investment Breakdown
                            </h3>
                            
                            <div className="space-y-3">
                              {/* Forums */}
                              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                <div className="text-slate-300">
                                  {currentTier.pricing.forums.name}
                                  <span className="text-xs text-slate-500 ml-2">
                                    ({currentTier.pricing.forums.quantity} × {formatCurrency(currentTier.pricing.forums.unitPrice)})
                                  </span>
                                </div>
                                <div className="text-white font-bold">
                                  {formatCurrency(currentTier.pricing.forums.total)}
                                </div>
                              </div>

                              {/* Forum Experience (Vanguard only) */}
                              {currentTier.pricing.forumExperience && (
                                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                  <div className="text-slate-300">
                                    {currentTier.pricing.forumExperience.name}
                                    <span className="text-xs text-slate-500 ml-2">
                                      ({currentTier.pricing.forumExperience.quantity} × {formatCurrency(currentTier.pricing.forumExperience.unitPrice)})
                                    </span>
                                  </div>
                                  <div className="text-white font-bold">
                                    {formatCurrency(currentTier.pricing.forumExperience.total)}
                                  </div>
                                </div>
                              )}

                              {/* Dinners */}
                              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                <div className="text-slate-300">
                                  {currentTier.pricing.dinners.name}
                                  <span className="text-xs text-slate-500 ml-2">
                                    ({currentTier.pricing.dinners.quantity} × {formatCurrency(currentTier.pricing.dinners.unitPrice)})
                                  </span>
                                </div>
                                <div className="text-white font-bold">
                                  {formatCurrency(currentTier.pricing.dinners.total)}
                                </div>
                              </div>

                              {/* Digital */}
                              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                <div className="text-slate-300">
                                  {currentTier.pricing.digital.name}
                                  <span className="text-xs text-slate-500 ml-2">
                                    ({currentTier.pricing.digital.quantity} × {formatCurrency(currentTier.pricing.digital.unitPrice)})
                                  </span>
                                </div>
                                <div className="text-white font-bold">
                                  {formatCurrency(currentTier.pricing.digital.total)}
                                </div>
                              </div>

                              {/* Shield Session */}
                              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                <div className="text-slate-300">{currentTier.pricing.shieldSession.name}</div>
                                <div className="text-white font-bold">
                                  {formatCurrency(currentTier.pricing.shieldSession.price)}
                                </div>
                              </div>

                              {/* Guild Session (Vanguard only) */}
                              {currentTier.pricing.guildSession && (
                                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                  <div className="text-slate-300">{currentTier.pricing.guildSession.name}</div>
                                  <div className="text-white font-bold">
                                    {formatCurrency(currentTier.pricing.guildSession.price)}
                                  </div>
                                </div>
                              )}

                              {/* Survey */}
                              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                <div className="text-slate-300">{currentTier.pricing.survey.name}</div>
                                <div className="text-white font-bold">
                                  {formatCurrency(currentTier.pricing.survey.price)}
                                </div>
                              </div>

                              {/* Storytelling (Vanguard only) */}
                              {currentTier.pricing.storytelling && (
                                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                                  <div className="text-slate-300">{currentTier.pricing.storytelling.name}</div>
                                  <div className="text-white font-bold">
                                    {formatCurrency(currentTier.pricing.storytelling.price)}
                                  </div>
                                </div>
                              )}

                              {/* Total Value */}
                              <div className="flex justify-between items-center py-4 mt-2">
                                <div className="text-2xl text-white font-black">Total Value</div>
                                <div className="text-3xl text-white font-black">
                                  {formatCurrency(currentTier.pricing.rateCard)}
                                </div>
                              </div>

                              {/* Partner Discount */}
                              <div className="flex justify-between items-center py-3 border-t border-slate-700">
                                <div className="text-lg text-teal-400 font-bold flex items-center gap-2">
                                  <TrendingDown className="w-5 h-5" />
                                  Partner Discount ({currentTier.pricing.discount}%)
                                </div>
                                <div className="text-xl text-teal-400 font-black">
                                  -{formatCurrency(currentTier.pricing.savings)}
                                </div>
                              </div>

                              {/* Partner Savings Highlight */}
                              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/30">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-green-400" />
                                    <span className="text-lg font-bold text-green-400">Partner Realized Savings</span>
                                  </div>
                                  <div className="text-2xl font-black text-green-400">
                                    {formatCurrency(currentTier.pricing.savings)}
                                  </div>
                                </div>
                              </div>

                              {/* Final Package Price */}
                              <div className={`flex justify-between items-center py-5 rounded-lg px-4 bg-gradient-to-r ${currentTier.color} bg-opacity-10 border-2 ${currentTier.borderColor}`}>
                                <div className="text-xl font-black text-white">Package Investment</div>
                                <div className="text-4xl font-black text-white">
                                  {formatCurrency(currentTier.pricing.finalPrice)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'extras' && (
                        <motion.div
                          key="extras"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          {currentTier.features.extras.map((extra, i) => (
                            <div 
                              key={i}
                              className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-teal-500/50 transition-all"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-white">{extra}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA */}
                  <div className="mt-12 text-center">
                    <button 
                      onClick={() => setShowPartnershipForm(true)}
                      className={`
                      inline-flex items-center gap-3 px-10 py-5 rounded-xl
                      bg-gradient-to-r ${currentTier.color} text-white
                      font-black text-lg uppercase tracking-wider
                      hover:scale-105 transition-all duration-300
                      shadow-2xl hover:shadow-3xl
                    `}
                    >
                      <Shield className="w-6 h-6" />
                      Secure {currentTier.name} Partnership
                      <ArrowRight className="w-6 h-6" />
                    </button>
                    <p className="mt-4 text-sm text-slate-500 font-mono">
                      LIMITED AVAILABILITY • EXCLUSIVE ACCESS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="py-32 px-6 border-t border-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider mb-6">
                <Activity className="w-3 h-3" />
                PARTNERSHIP MATRIX
                <Activity className="w-3 h-3" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                COMPARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">TIERS</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-xs font-mono text-slate-500 uppercase">Feature</th>
                    <th className="px-6 py-4 text-center">
                      <div className="text-xs font-mono text-purple-400 uppercase mb-2">Vanguard</div>
                      <div className="text-2xl font-black text-white">$1.13M</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="text-xs font-mono text-teal-400 uppercase mb-2">Innovator</div>
                      <div className="text-2xl font-black text-white">$604K</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="text-xs font-mono text-yellow-400 uppercase mb-2">Connector</div>
                      <div className="text-2xl font-black text-white">$395K</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Forum Sponsorship</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Diamond Keynote</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Platinum Session</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Gold Shared</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Forums</td>
                    <td className="px-6 py-4 text-center text-white font-bold">5</td>
                    <td className="px-6 py-4 text-center text-white font-bold">5</td>
                    <td className="px-6 py-4 text-center text-white font-bold">5</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Dinner Briefings</td>
                    <td className="px-6 py-4 text-center text-white font-bold">16</td>
                    <td className="px-6 py-4 text-center text-white font-bold">8</td>
                    <td className="px-6 py-4 text-center text-white font-bold">4</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Digital Briefings</td>
                    <td className="px-6 py-4 text-center text-white font-bold">16</td>
                    <td className="px-6 py-4 text-center text-white font-bold">8</td>
                    <td className="px-6 py-4 text-center text-white font-bold">4</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Shield Sessions</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Lead (Choice)</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Shared</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Shared</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Survey Access</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Full Ownership</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Topline Access</td>
                    <td className="px-6 py-4 text-center text-white font-bold">Summary Only</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Min Engagements</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">721</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">493</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">429</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Avg Engagements</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">971</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">641</td>
                    <td className="px-6 py-4 text-center text-teal-400 font-bold text-xl">525</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Cost Per Lead (Min)</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$1,566</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$1,225</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$921</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-6 py-4 text-slate-400">Cost Per Lead (Avg)</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$1,163</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$942</td>
                    <td className="px-6 py-4 text-center text-cyan-400 font-bold text-xl">$752</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Discount</td>
                    <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">20%</td>
                    <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">15%</td>
                    <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 border-t border-teal-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider mb-6">
              <Lock className="w-3 h-3" />
              SECURE CHANNEL
              <Lock className="w-3 h-3" />
            </div>
            <h2 className="text-5xl font-black text-white mb-8">
              INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">CONTACT</span>
            </h2>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border-2 border-teal-500/30 rounded-2xl p-12">
              <div className="text-center mb-8">
                <div className="text-3xl font-black text-white mb-2">Ross Abbott</div>
                <div className="text-lg text-teal-400 font-mono uppercase">CEO</div>
              </div>
              <a 
                href="mailto:ross.abbott@sincusa.com"
                className="inline-flex items-center gap-3 text-xl text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
              >
                ross.abbott@sincusa.com
              </a>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="text-sm text-slate-500 font-mono uppercase">
                  Driven By: SINC
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partnership Form Modal */}
      <Dialog open={showPartnershipForm} onOpenChange={setShowPartnershipForm}>
        <DialogContent className="max-w-2xl bg-slate-900/98 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <Handshake className="w-6 h-6 text-teal-400" />
              Partnership Request
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Tell us about your organization and how you'd like to partner with Sentinel Nexus.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <HubSpotForm
              portalId="45377644"
              formId="bd17030b-44b8-45b9-ad3d-d6d6fa2a8874"
              region="na1"
              onFormSubmitted={() => {
                setTimeout(() => setShowPartnershipForm(false), 2000);
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}