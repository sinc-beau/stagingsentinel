'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Calendar, MapPin, Clock, Target, Shield, Zap, Eye, CircleCheck as CheckCircle, Utensils, Monitor, Building2 } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { HubSpotForm } from '@/components/ui/HubSpotForm';
import { FormSuccessMessage } from '@/components/ui/FormSuccessMessage';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  slug: string;
  title: string;
  date: string;
  city: string;
  venue: string;
  type: string;
  event_sponsors: Array<{
    logo_url: string;
    name: string;
  }>;
}

export function BriefingsPageContent() {
  const [mounted, setMounted] = useState(false);
  const [showBriefingForm, setShowBriefingForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchBriefingEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select(`
            slug,
            title,
            date,
            city,
            venue,
            type,
            event_sponsors(
              logo_url,
              name
            )
          `)
          .eq('islive', true)
          .eq('brand', 'Sentinel')
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching briefing events:', error);
        setEvents([]);
      } finally {
        setLoadingEvents(false);
      }
    }

    fetchBriefingEvents();
  }, []);

  const eventFormats = [
    {
      icon: Utensils,
      title: 'Leadership Dinners',
      description: 'Classified discussions for senior leaders to share what\'s working now.',
      duration: 'Evening',
      durationIcon: Clock,
      color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
    },
    {
      icon: Zap,
      title: 'Tactical Workshops',
      description: 'Hands-on builds for frameworks, playbooks, response procedures, and defense protocols.',
      duration: '3-4 hours',
      durationIcon: Clock,
      color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
    },
    {
      icon: Monitor,
      title: 'Virtual Intel Briefs',
      description: 'Tight 45-minute sessions with operators who\'ve done the thing.',
      duration: '45 mins',
      durationIcon: Clock,
      color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Consistent Background for Whole Page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.015)_1px,transparent_1px)] bg-[size:120px_120px]" />
        
        {/* Reduced floating particles */}
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Tag */}
              <motion.div
                className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-6 py-3 rounded-full text-sm font-mono tracking-wider mb-8 shadow-lg shadow-teal-500/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              >
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse" />
                SECURE GATHERINGS
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                className="text-6xl md:text-7xl font-black mb-6 leading-none tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                  SENTINEL
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                  BRIEFINGS
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                className="text-lg text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Classified, small-format gatherings built for security leaders who want to leave with something they can deploy.
              </motion.p>

              {/* Value Props */}
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-full text-slate-300 text-sm">
                  <span className="font-medium">Classified</span>
                  <span className="text-xs text-slate-400 ml-2">Limited access</span>
                </div>
                <div className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-full text-slate-300 text-sm">
                  <span className="font-medium">Tactical</span>
                  <span className="text-xs text-slate-400 ml-2">Deploy today</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <button 
                  onClick={() => setShowBriefingForm(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-semibold">Get Notified</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Right Side - What to Expect Card */}
            <div className="relative">
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Briefing Image */}
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    <img 
                      src="/briefings.png" 
                      alt="Briefing" 
                      className="w-full h-64 object-cover rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                    />
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                    
                    {/* Floating status indicator */}
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-3 py-1 rounded-full text-xs font-mono">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                        <span>SECURE CHANNEL</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* What to Expect Card */}
                  <motion.div
                    className="bg-slate-900/60 backdrop-blur-sm border border-teal-400/30 rounded-xl p-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-teal-400" />
                      <h3 className="text-xl font-bold text-white">What to expect</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div>
                          <span className="text-white font-semibold text-sm">Clear intelligence:</span>
                          <span className="text-slate-300 ml-2 text-sm">Small rooms, big insights</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div>
                          <span className="text-white font-semibold text-sm">No vendor theater:</span>
                          <span className="text-slate-300 ml-2 text-sm">Real intel, not pitches</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div>
                          <span className="text-white font-semibold text-sm">Deploy today:</span>
                          <span className="text-slate-300 ml-2 text-sm">Frameworks and tactics to implement</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Senior Only Badge */}
                    <div className="absolute bottom-3 right-3">
                      <div className="px-2 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-slate-300 text-xs font-mono">
                        Senior Only
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Types Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-teal-400 font-mono text-sm tracking-widest mb-4">OPERATIONAL FORMATS</div>
              <h2 className="text-6xl font-black text-white mb-6">Mission Types</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">Different operational formats designed for specific intelligence and tactical needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Executive Dinners */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Executive Dinners</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-purple-400 font-semibold text-sm mb-2">THE ADVANTAGE:</div>
                    <p className="text-slate-300">Classified discussions for senior leaders</p>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">YOUR BENEFIT:</div>
                    <p className="text-slate-400">Share what's working in intimate settings</p>
                  </div>
                </div>
              </div>

              {/* Lean and Gos */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Lean and Gos</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-yellow-400 font-semibold text-sm mb-2">THE ADVANTAGE:</div>
                    <p className="text-slate-300">Presentation and a meal to-go</p>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">YOUR BENEFIT:</div>
                    <p className="text-slate-400">Quick insights with convenient dining</p>
                  </div>
                </div>
              </div>

              {/* Virtual Roundtables */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Virtual Roundtables</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-blue-400 font-semibold text-sm mb-2">THE ADVANTAGE:</div>
                    <p className="text-slate-300">Remote collaborative discussions</p>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">YOUR BENEFIT:</div>
                    <p className="text-slate-400">Connect with experts from anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Value Icons */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-purple-400 font-semibold mb-2">Senior Only</div>
                <div className="text-slate-400 text-sm">Leadership level</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold mb-2">Hands-On</div>
                <div className="text-slate-400 text-sm">Practical frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">Real Intel</div>
                <div className="text-slate-400 text-sm">Operator insights</div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-teal-500 text-white font-bold text-lg rounded-xl hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20">
                Request Briefing Access
              </button>
            </div>
          </div>
        </section>

        {/* Events by Type Section */}
        {!loadingEvents && events.length > 0 && (
          <section className="py-16 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="text-teal-400 font-mono text-sm tracking-widest mb-4">UPCOMING SESSIONS</div>
                <h2 className="text-6xl font-black text-white mb-6">Scheduled Briefings</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">Join our upcoming briefing sessions tailored to your needs</p>
              </div>

              {/* Executive Dinners */}
              {events.filter(e => e.type === 'Executive Dinners' || e.type === 'Dinner').length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Executive Dinners</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.filter(e => e.type === 'Executive Dinners' || e.type === 'Dinner').map((event) => (
                      <EventCard key={event.slug} event={event} colorScheme="purple" />
                    ))}
                  </div>
                </div>
              )}

              {/* Lean and Gos */}
              {events.filter(e => e.type === 'Lean and Gos' || e.type === 'Lean and Go').length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Lean and Gos</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.filter(e => e.type === 'Lean and Gos' || e.type === 'Lean and Go').map((event) => (
                      <EventCard key={event.slug} event={event} colorScheme="yellow" />
                    ))}
                  </div>
                </div>
              )}

              {/* Virtual Roundtables */}
              {events.filter(e => e.type === 'Virtual Roundtables' || e.type === 'Virtual Roundtable').length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Virtual Roundtables</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.filter(e => e.type === 'Virtual Roundtables' || e.type === 'Virtual Roundtable').map((event) => (
                      <EventCard key={event.slug} event={event} colorScheme="blue" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Who Attends Section */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-teal-400 font-mono text-sm tracking-widest mb-4">THE AUDIENCE</div>
              <h2 className="text-6xl font-black text-white mb-6">Who attends</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">Senior cybersecurity leaders and carefully vetted attendees</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Description and Verification */}
              <div className="space-y-8">
                <p className="text-xl text-slate-300 leading-relaxed">
                  Senior cybersecurity leaders. CISOs, Security Directors, and department heads across enterprise defense, 
                  threat intelligence, and incident response. Handpicked sponsors when useful to the mission.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Senior security leaders only (VP+)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Carefully vetted attendee list</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Limited sponsors, maximum value</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Code of Conduct Card */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Code of conduct</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-semibold">Maintain operational security:</span>
                      <span className="text-slate-300 ml-2">Share openly within bounds</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-semibold">Protect intelligence:</span>
                      <span className="text-slate-300 ml-2">Keep confidences</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-semibold">Contribute value:</span>
                      <span className="text-slate-300 ml-2">Connect as much as you can</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Notified Section */}
        <section className="py-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Get Notified About Briefings Near You</h3>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Stay informed about upcoming Sentinel Briefings in your area. Be the first to know when new tactical sessions, leadership dinners, and security councils are scheduled.
              </p>
              
              <button 
                onClick={() => setShowBriefingForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
              >
                Request Briefing Notifications
              </button>
              
              <p className="text-xs text-slate-500 mt-4">
                Exclusive access • Senior leaders only • Invitation required
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      {/* HubSpot Briefing Form Modal */}
      <Dialog open={showBriefingForm} onOpenChange={setShowBriefingForm}>
        <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-400" />
              Briefing Notifications
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Get notified about upcoming Sentinel Briefings in your area.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {isFormSubmitted ? (
              <FormSuccessMessage
                title="You're on the List!"
                message="Thank you for subscribing to Sentinel Briefings notifications. We'll keep you informed about upcoming events in your area."
              />
            ) : (
              <HubSpotForm
                portalId="45377644"
                formId="302a74f5-6179-42a8-b01b-6592a8ffce3f"
                region="na1"
                onFormSubmitted={() => {
                  setIsFormSubmitted(true);
                  setTimeout(() => {
                    setShowBriefingForm(false);
                    setIsFormSubmitted(false);
                  }, 3000);
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface EventCardProps {
  event: Event;
  colorScheme: 'purple' | 'yellow' | 'blue';
}

function EventCard({ event, colorScheme }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  const colorClasses = {
    purple: {
      border: 'border-purple-400/20 hover:border-purple-400/40',
      shadow: 'hover:shadow-purple-400/10',
      iconBg: 'bg-purple-400/10 group-hover:bg-purple-400/20 border-purple-400/20',
      iconText: 'text-purple-400',
      dateText: 'text-purple-400',
      titleHover: 'group-hover:text-purple-400',
      accentIcon: 'text-purple-400/60'
    },
    yellow: {
      border: 'border-yellow-400/20 hover:border-yellow-400/40',
      shadow: 'hover:shadow-yellow-400/10',
      iconBg: 'bg-yellow-400/10 group-hover:bg-yellow-400/20 border-yellow-400/20',
      iconText: 'text-yellow-400',
      dateText: 'text-yellow-400',
      titleHover: 'group-hover:text-yellow-400',
      accentIcon: 'text-yellow-400/60'
    },
    blue: {
      border: 'border-blue-400/20 hover:border-blue-400/40',
      shadow: 'hover:shadow-blue-400/10',
      iconBg: 'bg-blue-400/10 group-hover:bg-blue-400/20 border-blue-400/20',
      iconText: 'text-blue-400',
      dateText: 'text-blue-400',
      titleHover: 'group-hover:text-blue-400',
      accentIcon: 'text-blue-400/60'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <Link
      href={`/${event.slug}`}
      className={`group relative bg-slate-900/60 backdrop-blur-sm border-2 ${colors.border} rounded-xl ${colors.shadow} hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden h-full`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 bg-${colorScheme}-400 rounded-full animate-pulse`}></div>
        </div>

        <div className="space-y-4 flex-1 flex flex-col">
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center transition-colors duration-300 border`}>
              <Calendar className={`w-5 h-5 ${colors.iconText}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-mono font-semibold ${colors.dateText} mb-1`}>
                {formatDate(event.date)}
              </p>
              <h3 className={`text-lg font-bold text-white line-clamp-2 ${colors.titleHover} transition-colors duration-300`}>
                {event.title}
              </h3>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800 mt-auto">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className={`w-4 h-4 flex-shrink-0 ${colors.accentIcon}`} />
              <span className="text-sm truncate">{event.city}</span>
            </div>
            {event.venue && (
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 className={`w-4 h-4 flex-shrink-0 ${colors.accentIcon}`} />
                <span className="text-sm truncate">{event.venue}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-4 mt-auto">
        {event.event_sponsors && event.event_sponsors.length > 0 && (
          <div className="flex justify-center pb-4 border-b border-slate-200 flex-wrap gap-2 min-h-[4rem]">
            {event.event_sponsors.slice(0, 2).map((sponsor, idx) => (
              <div key={idx} className="relative w-20 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        <div className={event.event_sponsors && event.event_sponsors.length > 0 ? "pt-4" : "min-h-[4rem] flex items-center"}>
          <div className="inline-flex items-center text-sm font-semibold font-mono text-slate-900 group-hover:gap-2 transition-all duration-300">
            <span>VIEW DETAILS</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}