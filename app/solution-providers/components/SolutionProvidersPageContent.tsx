'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, Target, Users, Lightbulb, TrendingUp, Shield, ArrowRight, CircleCheck as CheckCircle, Building, Globe, Zap, Star, Award, Network, Eye, MessageSquare, Briefcase, Menu, X, Lock, Activity } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { HubSpotForm } from '@/components/ui/HubSpotForm';
import { FormSuccessMessage } from '@/components/ui/FormSuccessMessage';

export function SolutionProvidersPageContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [networkPulse, setNetworkPulse] = useState(0);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setNetworkPulse(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(pulseInterval);
  }, []);

  const partnerLogos = [
    { src: '/MicrosoftLogo.png', alt: 'Microsoft' },
    { src: '/Okta logo.png', alt: 'Okta' },
    { src: '/druva_logo_color.png', alt: 'Druva' },
    { src: '/Cyera_Logo.png', alt: 'Cyera' },
    { src: '/Acalvio-(AI-Powered)-EPS-vector-Logo-WHITE-RGB.png', alt: 'Acalvio' },
    { src: '/ibm-logo-white.png', alt: 'IBM' },
    { src: '/trendmicro.png', alt: 'Trend Micro' },
    { src: '/SentinelOne_Logo_RGB_1c_WHT.png', alt: 'SentinelOne' },
    { src: '/crowdstrike.png', alt: 'Crowdstrike' },
    { src: '/Dataminr_Logo_Full-Color_Reversed_RGB.png', alt: 'Dataminr' },
    { src: '/Fortinet-logo-cmyk-white.png', alt: 'Fortinet' },
    { src: '/Zscaler logo.png', alt: 'Zscaler' },
    { src: '/commvault.png', alt: 'Commvault' },
    { src: '/Logo_Varonis_White.png', alt: 'Varonis' },
    { src: '/threatlocker.png', alt: 'ThreatLocker' },
    { src: '/dux.png', alt: 'Dux Security' },
    { src: '/adaptivesecurity.png', alt: 'Adaptive Security' }
  ];

  const engagementLevels = [
    {
      icon: Star,
      title: 'STRATEGIC PARTNERSHIP',
      description: 'Full partnership with year-round engagement',
      features: ['Annual thought leadership', 'Executive advisory board', 'Custom research', 'Premium positioning'],
      color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Zap,
      title: 'PROGRAM SPONSORSHIP',
      description: 'Sponsor specific events and content series',
      features: ['Event sponsorship', 'Speaking opportunities', 'Content distribution', 'Lead generation'],
      color: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
      iconColor: 'text-teal-400'
    },
    {
      icon: MessageSquare,
      title: 'CONTENT COLLABORATION',
      description: 'Co-create thought leadership pieces',
      features: ['Research reports', 'Webinar hosting', 'Panel participation', 'Case studies'],
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: Network,
      title: 'EVENT PARTICIPATION',
      description: 'Join specific briefings or forums',
      features: ['Solution showcases', 'Roundtables', 'Demo presentations', 'Networking'],
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      iconColor: 'text-purple-400'
    }
  ];

  const valueProps = [
    {
      icon: Eye,
      title: 'VISIBILITY',
      description: 'Connect with decision-makers shaping security strategy.'
    },
    {
      icon: Lightbulb,
      title: 'LEADERSHIP',
      description: 'Position your team as trusted advisors.'
    },
    {
      icon: Target,
      title: 'ENGAGEMENT',
      description: 'Reach the right audience with curated messaging.'
    },
    {
      icon: TrendingUp,
      title: 'IMPACT',
      description: 'Build relationships that drive business outcomes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-teal-400/30"
      >
        {menuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6 text-teal-400" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-slate-900/98 backdrop-blur-xl z-40 p-8 pt-20"
          >
            <nav className="space-y-6">
              <a href="#partnership" className="block text-lg text-slate-300 hover:text-teal-400 transition-colors">
                Partnership Tiers
              </a>
              <a href="#audience" className="block text-lg text-slate-300 hover:text-teal-400 transition-colors">
                Target Audience
              </a>
              <a href="#engagement" className="block text-lg text-slate-300 hover:text-teal-400 transition-colors">
                Engagement Model
              </a>
              <a href="#contact" className="block text-lg text-slate-300 hover:text-teal-400 transition-colors">
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simplified Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Scanning line effect */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent absolute w-full"
            style={{
              animation: 'scan 10s linear infinite',
            }}
          />
        </div>

        {/* Desktop animations */}
        {!isMobile && (
          <>
            {/* Subtle network nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-1.5 h-1.5 bg-teal-400/20 rounded-full"
                style={{
                  left: `${15 + (i * 14) % 70}%`,
                  top: `${20 + (i * 11) % 60}%`,
                }}
                animate={{
                  opacity: networkPulse === i % 4 ? [0.2, 0.5, 0.2] : 0.15,
                }}
                transition={{ duration: 3 }}
              />
            ))}

            {/* Subtle glows */}
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-teal-500/3 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/3 rounded-full filter blur-3xl" />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center bg-teal-500/10 border border-teal-400/30 text-teal-400 px-5 py-2 rounded-full text-xs font-semibold tracking-wider">
                <Handshake className="w-3 h-3 mr-3" />
                STRATEGIC PARTNERSHIPS
                <Lock className="w-3 h-3 ml-3" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                PARTNER WITH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mt-2">
                  SENTINEL NEXUS
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Engage directly with enterprise security leaders through solution-oriented conversations
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
                <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-4">
                  <div className="text-3xl font-black text-teal-400 mb-1">500+</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">2,500+ Security Leaders</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-4">
                  <div className="text-3xl font-black text-cyan-400 mb-1">4</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Partnership Tiers</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-4">
                  <div className="text-3xl font-black text-purple-400 mb-1">100%</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Solution Focus</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setShowPartnershipForm(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-base rounded-lg hover:scale-105 transition-transform"
                >
                  <span className="flex items-center gap-2">
                    REQUEST INFO
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <Link href="/solution-provider-prospectus">
                  <button className="px-8 py-4 border border-teal-400/50 text-teal-400 font-semibold text-base rounded-lg hover:bg-teal-400/10 transition-all">
                    VIEW PROSPECTUS
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Logos Slider */}
        <section className="py-16 px-6 border-b border-slate-800/50 bg-slate-900/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <Building className="w-3 h-3" />
                TRUSTED PARTNERS
                <Building className="w-3 h-3" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                PARTNERING WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">INDUSTRY LEADERS</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Join these trusted organizations in shaping the future of cybersecurity leadership
              </p>
            </div>
            
            {/* Logo Slider */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-12 items-center">
                {/* First set of logos */}
                <img src="/MicrosoftLogo.png" alt="Microsoft" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Okta logo.png" alt="Okta" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/druva_logo_color.png" alt="Druva" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Cyera_Logo.png" alt="Cyera" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Acalvio-(AI-Powered)-EPS-vector-Logo-WHITE-RGB.png" alt="Acalvio" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/ibm-logo-white.png" alt="IBM" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/trendmicro.png" alt="Trend Micro" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/SentinelOne_Logo_RGB_1c_WHT.png" alt="SentinelOne" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/crowdstrike.png" alt="Crowdstrike" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Dataminr_Logo_Full-Color_Reversed_RGB.png" alt="Dataminr" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Fortinet-logo-cmyk-white.png" alt="Fortinet" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Zscaler logo.png" alt="Zscaler" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/commvault.png" alt="Commvault" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Logo_Varonis_White.png" alt="Varonis" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/threatlocker.png" alt="ThreatLocker" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/dux.png" alt="Dux Security" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/adaptivesecurity.png" alt="Adaptive Security" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />

                {/* Duplicate set for seamless loop */}
                <img src="/MicrosoftLogo.png" alt="Microsoft" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Okta logo.png" alt="Okta" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/druva_logo_color.png" alt="Druva" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Cyera_Logo.png" alt="Cyera" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Acalvio-(AI-Powered)-EPS-vector-Logo-WHITE-RGB.png" alt="Acalvio" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/ibm-logo-white.png" alt="IBM" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/trendmicro.png" alt="Trend Micro" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/SentinelOne_Logo_RGB_1c_WHT.png" alt="SentinelOne" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/crowdstrike.png" alt="Crowdstrike" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Dataminr_Logo_Full-Color_Reversed_RGB.png" alt="Dataminr" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Fortinet-logo-cmyk-white.png" alt="Fortinet" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Zscaler logo.png" alt="Zscaler" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/commvault.png" alt="Commvault" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/Logo_Varonis_White.png" alt="Varonis" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/threatlocker.png" alt="ThreatLocker" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/dux.png" alt="Dux Security" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
                <img src="/adaptivesecurity.png" alt="Adaptive Security" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 brightness-0 invert" />
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-400 text-sm italic">and many more trusted partners</p>
            </div>
          </div>
        </section>

        {/* Who You'll Reach Section */}
        <section className="py-32 px-6 border-y border-slate-800/50" id="audience">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <Eye className="w-3 h-3" />
                TARGET AUDIENCE
                <Eye className="w-3 h-3" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                WHO YOU'LL <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">REACH</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Connect with decision-makers actively shaping security strategy
              </p>
            </div>

            {/* Three Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">Director+ Executives</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Senior leadership with decision-making authority and strategic influence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">Global Leaders</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Manager+ leaders driving security initiatives and technology adoption.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-8 hover:border-teal-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">Mid-Market Specialists</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Security professionals in custom programs for specific markets.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Sponsors Engage Section */}
        <section className="py-32 px-6" id="engagement">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <Activity className="w-3 h-3" />
                ENGAGEMENT MODEL
                <Activity className="w-3 h-3" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                HOW SPONSORS <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">ENGAGE</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Sponsorship focuses on solving problems—not pushing products
              </p>
            </div>

            {/* Engagement Levels Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {engagementLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`group relative bg-gradient-to-br ${level.color} border rounded-lg p-8 hover:scale-[1.02] transition-transform`}
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6">
                      <level.icon className={`w-7 h-7 ${level.iconColor}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                      {level.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {level.description}
                    </p>
                    
                    <div className="space-y-2">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Solution-Oriented Approach Card */}
            <div className="bg-slate-900/60 border border-teal-400/30 rounded-lg p-10">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-teal-400" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Solution-Oriented Approach</h3>
                  <Lightbulb className="w-6 h-6 text-teal-400" />
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Every touchpoint is built around useful, solution-oriented content that positions your team as a trusted thought leader.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-teal-400 mb-2">PROBLEM-FOCUSED</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Address real challenges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400 mb-2">CURATED AUDIENCE</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Targeted invitations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400 mb-2">THOUGHT LEADERSHIP</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Trusted advisor positioning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers Section */}
        <section className="py-32 px-6 border-y border-slate-800/50" id="partnership">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <Award className="w-3 h-3" />
                PARTNERSHIP TIERS
                <Award className="w-3 h-3" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                PARTNERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">TIERS</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Choose the partnership level that aligns with your strategic objectives
              </p>
            </div>

            {/* Partnership Tiers */}
            <div className="space-y-8">
              {/* Vanguard Partner - Diamond Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-yellow-500/20 border border-yellow-400/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-yellow-400">DIAMOND LEVEL</span>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Vanguard Partner</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      The flagship sponsorship tier, ensuring category dominance and year-round engagement with IT leaders.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Diamond Keynote Sponsor at all 4 Sentinel Watchtower Forums</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">4 Custom Executive Dinners per quarter (16 annually)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">4 Digital Roundtables per quarter (16 annually)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Lead Sponsor of 1 Sentinel Shield Session</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">CISO Sentinel Guild Engagement</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Exclusive Insight Architect - National CISO survey ownership</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Long-Form Storytelling Opportunities</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Quarterly ROI Reporting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Innovator Partner - Platinum Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/30 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-teal-500/20 border border-teal-400/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-teal-400">PLATINUM LEVEL</span>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Innovator Partner</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      A high-impact sponsorship tier designed for organizations seeking consistent engagement and strong visibility.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Platinum Session Sponsor at all 4 Watchtower Forums</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">2 Custom Executive Dinners per quarter (8 annually)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">2 Digital Roundtables per quarter (8 annually)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Participation in 1 Shield Session (shared)</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Survey Access - Annual CISO survey findings</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Digital Visibility & Content Distribution</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Bi-annual ROI Reporting</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Branding as Innovator Partner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connector Partner - Gold Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-blue-400">GOLD LEVEL</span>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                    <Network className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Connector Partner</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      An entry-level package offering targeted access to IT leaders and meaningful brand visibility.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Gold Forum Sponsor at all 4 Watchtower Forums</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">1 Custom Executive Dinner per quarter (4 annually)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">1 Digital Roundtable per quarter (4 annually)</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Participation in 1 Shield Session (shared)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Survey Highlights - Executive summary</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Digital Visibility & Content Distribution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* A La Carte */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-400/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-purple-400">A LA CARTE</span>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">A La Carte</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Entry point for new partners. Sponsor individual Watchtower Forums, Shield Sessions, or Sentinel Digital/Dinner Briefings.
                    </p>
                    
                    <div className="text-center bg-slate-900/50 rounded-lg p-4">
                      <p className="text-slate-300 text-sm">
                        Flexible sponsorship options tailored to your specific needs and budget.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-32 px-6 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <Award className="w-3 h-3" />
                VALUE PROPOSITION
                <Award className="w-3 h-3" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                WHY IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">MATTERS</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                When you partner with Sentinel Nexus, you're helping steer the conversation
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-slate-900/60 border border-slate-800 rounded-lg p-8 text-center hover:border-teal-400/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                    <prop.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wider">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden" id="contact">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-teal-400/30 rounded-lg p-12"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-teal-400" />
                <Star className="w-12 h-12 text-teal-400" />
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
                READY TO GET <span className="text-teal-400">INVOLVED</span>?
              </h3>
              
              <p className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with us to explore sponsorship opportunities and start shaping the conversations that matter most to security leaders.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowPartnershipForm(true)}
                  className="group px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform"
                >
                  <span className="flex items-center gap-3">
                    SUBMIT INQUIRY
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
              
              <p className="text-slate-500 text-xs mt-6 uppercase tracking-wider">
                Partnership opportunities reviewed within 48 hours • Custom solutions available
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* HubSpot Partnership Form Modal */}
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
            {isFormSubmitted ? (
              <FormSuccessMessage
                title="Partnership Inquiry Received!"
                message="Thank you for your interest in partnering with Sentinel Nexus. Our team will review your inquiry and reach out within 48 hours."
              />
            ) : (
              <HubSpotForm
                portalId="45377644"
                formId="bd17030b-44b8-45b9-ad3d-d6d6fa2a8874"
                region="na1"
                onFormSubmitted={() => {
                  setIsFormSubmitted(true);
                  setTimeout(() => {
                    setShowPartnershipForm(false);
                    setIsFormSubmitted(false);
                  }, 3000);
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}