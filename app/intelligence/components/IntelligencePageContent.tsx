'use client'

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Database, Network, Activity, Zap, TriangleAlert as AlertTriangle, Eye, Calendar, MapPin, Users, FileText, Video, Globe, TrendingUp, Clock, ChartBar as BarChart3 } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function IntelligencePageContent() {
  const [centralPulse, setCentralPulse] = useState(0);
  const [orbitalRotation, setOrbitalRotation] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setCentralPulse(prev => (prev + 1) % 100);
    }, 50);

    const rotationInterval = setInterval(() => {
      setOrbitalRotation(prev => prev + 1);
    }, 100);

    const flowInterval = setInterval(() => {
      setDataFlow(prev => (prev + 1) % 360);
    }, 80);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(rotationInterval);
      clearInterval(flowInterval);
    };
  }, []);

  const intelligenceNodes = [
    { name: 'CONTENT_ANALYSIS', status: 'ACTIVE', data: '847 GB', color: 'text-red-400', angle: 0 },
    { name: 'AUDIENCE_INSIGHTS', status: 'PROCESSING', data: '1.2 TB', color: 'text-yellow-400', angle: 60 },
    { name: 'ENGAGEMENT_TRACKING', status: 'LEARNING', data: '3.7 GB', color: 'text-blue-400', angle: 120 },
    { name: 'TREND_PREDICTION', status: 'COMPUTING', data: '892 MB', color: 'text-green-400', angle: 180 },
    { name: 'SECURITY_PROTOCOLS', status: 'SECURED', data: '156 GB', color: 'text-purple-400', angle: 240 },
    { name: 'COMMUNITY_NETWORK', status: 'EVOLVING', data: '2.1 TB', color: 'text-teal-400', angle: 300 }
  ];

  const contentSchedule = [
    { type: 'Content Report', location: 'Virtual', audience: 'COMMUNITY', topic: '2025 Recap and 2026 Outlook', date: 'JAN', month: 1, isVirtual: true },
    { type: 'Guild Meeting', location: 'Virtual', audience: 'Guild', topic: 'TBD', date: '16-Jan', month: 1, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'Responsible AI in Cybersecurity', date: '11-Feb', month: 2, isVirtual: true },
    { type: 'Content Report', location: 'Digital', audience: 'COMMUNITY', topic: 'Quarterly Recap', date: 'APRIL', month: 4, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'Moving to Board', date: '8-Apr', month: 4, isVirtual: true },
    { type: 'Guild Meeting', location: 'Virtual', audience: 'Guild', topic: 'TBD', date: '3-Apr', month: 4, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'Talking Cybersecurity, Risk & AI to BoD and Senior StakeHolders', date: '10-Jun', month: 6, isVirtual: true },
    { type: 'Content Report', location: 'Digital', audience: 'COMMUNITY', topic: 'Quarterly Recap', date: 'JULY', month: 7, isVirtual: true },
    { type: 'Guild Meeting', location: 'Virtual', audience: 'Guild', topic: 'TBD', date: '3-Jul', month: 7, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'Gen AI Data Privacy and Security', date: '12-Aug', month: 8, isVirtual: true },
    { type: 'Content Report', location: 'Digital', audience: 'COMMUNITY', topic: 'Quarterly Recap', date: 'OCT', month: 10, isVirtual: true },
    { type: 'Guild Meeting', location: 'Virtual', audience: 'Guild', topic: 'TBD', date: '2-Oct', month: 10, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'Building Culture from Top Down', date: '14-Oct', month: 10, isVirtual: true },
    { type: 'Virtual Debrief', location: 'Virtual', audience: 'COMMUNITY', topic: 'WTF Moments and how to handle - PTSD', date: '9-Dec', month: 12, isVirtual: true },
    { type: '2027 Content Report', location: 'Digital', audience: 'COMMUNITY', topic: '2026 abbreviated recap with 2027 outlook', date: 'DEC', month: 12, isVirtual: true }
  ];

  const getFilteredContent = () => {
    if (activeFilter === 'ALL') return contentSchedule;
    if (activeFilter === 'OPEN') return contentSchedule.filter(item => item.audience === 'OPEN');
    if (activeFilter === 'COMMUNITY') return contentSchedule.filter(item => item.audience === 'COMMUNITY');
    if (activeFilter === 'GUILD') return contentSchedule.filter(item => item.audience === 'Guild');
    return contentSchedule;
  };

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case 'OPEN': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'COMMUNITY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Guild': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-slate-400 bg-slate-400/20 border-slate-400/30';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Content Report')) return FileText;
    if (type.includes('Virtual') || type.includes('Debrief')) return Video;
    if (type.includes('Guild')) return Users;
    if (type.includes('Forum')) return Globe;
    return Calendar;
  };

  // Calculate content metrics
  const contentMetrics = useMemo(() => {
    const virtualEvents = contentSchedule.filter(item => item.type.includes('Virtual') || item.type.includes('Debrief')).length;
    const reports = contentSchedule.filter(item => item.type.includes('Content Report')).length;
    const guildMeetings = contentSchedule.filter(item => item.type.includes('Guild')).length;
    const total = contentSchedule.length;
    
    return {
      virtual: { count: virtualEvents, percentage: (virtualEvents / total * 100).toFixed(0) },
      reports: { count: reports, percentage: (reports / total * 100).toFixed(0) },
      guild: { count: guildMeetings, percentage: (guildMeetings / total * 100).toFixed(0) }
    };
  }, []);

  const monthsWithEvents = ['JAN', 'FEB', 'APR', 'JUN', 'JUL', 'AUG', 'OCT', 'DEC'];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Floating Data Particles - Reduced for performance */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`data-${i}`}
            className="absolute w-1 h-1 bg-teal-400/40 rounded-full hidden sm:block"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header - Mobile Responsive */}
        <motion.div
          className="text-center py-8 sm:py-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-teal-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]" />
            </motion.div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-wider">
              CONTENT INTELLIGENCE
            </h1>
          </motion.div>
          <motion.p
            className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto font-mono px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            COMPREHENSIVE CONTENT SCHEDULE AND INTELLIGENCE BRIEFINGS
          </motion.p>
        </motion.div>

        {/* Content Intelligence Dashboard - Mobile Responsive */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-4">CONTENT METRICS & INSIGHTS</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300">Real-time engagement and community analytics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

            {/* Upcoming Events */}
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-yellow-400/30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">NEXT EVENTS</h3>
              </div>
              
              <div className="space-y-3">
                {contentSchedule.slice(0, 3).map((event, i) => (
                  <motion.div 
                    key={i} 
                    className="border-l-2 border-yellow-400/40 pl-3 hover:border-yellow-400 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    <div className="text-white font-semibold text-xs sm:text-sm">{event.type}</div>
                    <div className="text-yellow-400 text-xs font-mono">{event.date}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${getAudienceColor(event.audience)}`}>
                        {event.audience}
                      </span>
                      {event.isVirtual && (
                        <span className="text-xs text-slate-500">Virtual</span>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div className="pt-3 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{contentSchedule.length} total events scheduled</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Distribution */}
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-400/30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">CONTENT BREAKDOWN</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Virtual Debriefs</span>
                    <span className="text-blue-400 font-mono">{contentMetrics.virtual.count} sessions</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${contentMetrics.virtual.percentage}%` }}
                      transition={{ delay: 1.7, duration: 1 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Content Reports</span>
                    <span className="text-green-400 font-mono">{contentMetrics.reports.count} reports</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${contentMetrics.reports.percentage}%` }}
                      transition={{ delay: 1.9, duration: 1 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Guild Meetings</span>
                    <span className="text-purple-400 font-mono">{contentMetrics.guild.count} meetings</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${contentMetrics.guild.percentage}%` }}
                      transition={{ delay: 2.1, duration: 1 }}
                    />
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-700/50">
                  <div className="text-xs text-slate-400 text-center">
                    2026 Intelligence Calendar
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Schedule Section - Mobile Responsive */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-2 flex gap-2">
              {['ALL', 'OPEN', 'COMMUNITY', 'GUILD'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Header with Timeline */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white mb-6 text-center">2026 INTELLIGENCE SIGNALS</h2>
            
            {/* Timeline Visualization */}
            <div className="mb-12 bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-teal-400/20 via-blue-400/40 to-purple-400/20"></div>
                </div>
                <div className="relative flex justify-between">
                  {monthsWithEvents.map((month, i) => (
                    <div key={month} className="flex flex-col items-center">
                      <motion.div 
                        className="w-3 h-3 bg-teal-400 rounded-full border-2 border-slate-900"
                        whileHover={{ scale: 1.5 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0px rgba(20,184,166,0)",
                            "0 0 10px rgba(20,184,166,0.8)",
                            "0 0 0px rgba(20,184,166,0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <span className="mt-2 text-xs text-slate-400 font-mono">{month}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4 text-xs text-slate-500">Events spanning 2026 (more to be added)</div>
            </div>
          </div>

          {/* Content Schedule Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredContent().map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <motion.div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800/70 transition-colors">
                      <TypeIcon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-mono border ${getAudienceColor(item.audience)}`}>
                          {item.audience}
                        </span>
                        <span className="text-slate-400 text-xs font-mono">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                        {item.type}
                      </h3>
                    </div>
                  </div>
                  
                  {item.topic && item.topic !== 'TBD' && (
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      {item.topic}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    {item.isVirtual ? (
                      <>
                        <Globe className="w-3 h-3" />
                        <span>{item.location}</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16">
            <div className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Get Access to Sentinel Nexus Intelligence</h3>
                <p className="text-slate-300 mb-2">Stay ahead with exclusive intelligence signals and early access to our content calendar.</p>
                <p className="text-xs text-slate-500">Join 500+ security leaders receiving exclusive intelligence updates</p>
              </div>

              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Platform Status - Removed the floating panel */}
      </div>
    </div>
  )
}