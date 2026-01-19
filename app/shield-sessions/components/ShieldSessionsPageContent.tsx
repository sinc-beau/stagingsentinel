'use client'

import React, { useEffect, useState } from 'react';
import { Shield, MapPin, Users, Calendar, ArrowRight, Sparkles, Target, Network, Bell, Globe as Globe2, Zap, ChevronRight, Clock, Star, Lightbulb, Rocket, TriangleAlert as AlertTriangle, Lock, Eye, Activity, Terminal, Crosshair } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function ShieldSessionsPageContent() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState('SHIELD');
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
      const originalText = 'SHIELD';
      
      setGlitchText(originalText.split('').map((char, i) => 
        Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join(''));
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Load HubSpot script
  useEffect(() => {
    if (!hubspotLoaded) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => setHubspotLoaded(true);
      document.head.appendChild(script);
    }
  }, [hubspotLoaded]);

  // Load HubSpot form when script is ready
  useEffect(() => {
    if (hubspotLoaded && window.hbspt) {
      const formContainer = document.getElementById('shield-hubspot-form');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
      
      setTimeout(() => {
        if (window.hbspt && formContainer) {
          window.hbspt.forms.create({
            portalId: "45377644",
            formId: "302a74f5-6179-42a8-b01b-6592a8ffce3f",
            target: '#shield-hubspot-form',
            region: "na1",
            onFormSubmitted: function() {
              console.log('Shield Sessions form submitted successfully!');
              setIsFormSubmitted(true);
            }
          });
        }
      }, 100);
    }
  }, [hubspotLoaded]);

  // Add HubSpot form styles aligned with brand
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #shield-hubspot-form .hs-form {
        background-color: transparent !important;
        padding: 0 !important;
      }
      
      #shield-hubspot-form .hs-form label {
        color: #94a3b8 !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        margin-bottom: 8px !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
      }
      
      #shield-hubspot-form .hs-form input[type="text"],
      #shield-hubspot-form .hs-form input[type="email"],
      #shield-hubspot-form .hs-form input[type="tel"],
      #shield-hubspot-form .hs-form select {
        background-color: rgba(15, 23, 42, 0.8) !important;
        border: 2px solid #334155 !important;
        color: #14b8a6 !important;
        border-radius: 8px !important;
        padding: 14px 16px !important;
        font-size: 16px !important;
        width: 100% !important;
        transition: all 0.3s ease !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
      }
      
      #shield-hubspot-form .hs-form input:focus,
      #shield-hubspot-form .hs-form select:focus {
        border-color: #14b8a6 !important;
        box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.1) !important;
        outline: none !important;
        background-color: #0f172a !important;
      }
      
      #shield-hubspot-form .hs-form .hs-button,
      #shield-hubspot-form .hs-form input[type="submit"] {
        background: linear-gradient(to right, #14b8a6, #22d3ee) !important;
        color: #ffffff !important;
        border: none !important;
        border-radius: 12px !important;
        padding: 16px 32px !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        cursor: pointer !important;
        width: 100% !important;
        margin-top: 24px !important;
        transition: all 0.3s ease !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      #shield-hubspot-form .hs-form .hs-button:hover,
      #shield-hubspot-form .hs-form input[type="submit"]:hover {
        background: linear-gradient(to right, #0f766e, #06b6d4) !important;
        transform: scale(1.05) !important;
        box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.3) !important;
      }
      
      #shield-hubspot-form .hs-error-msgs {
        color: #f87171 !important;
        font-size: 11px !important;
        margin-top: 6px !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        text-transform: uppercase !important;
      }
      
      #shield-hubspot-form .hs-form-required {
        color: #f87171 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const cities = [
    { 
      name: 'NEW YORK', 
      code: 'NYC',
      status: 'ACTIVE',
      threat: 'HIGH',
      clearance: 'LEVEL 5'
    },
    { 
      name: 'BAY AREA', 
      code: 'SFO',
      status: 'ACTIVE',
      threat: 'CRITICAL',
      clearance: 'LEVEL 5'
    },
    { 
      name: 'LOS ANGELES', 
      code: 'LAX',
      status: 'STANDBY',
      threat: 'MODERATE',
      clearance: 'LEVEL 4'
    },
    { 
      name: 'CHICAGO', 
      code: 'ORD',
      status: 'ACTIVE',
      threat: 'HIGH',
      clearance: 'LEVEL 5'
    },
    { 
      name: 'DALLAS', 
      code: 'DFW',
      status: 'STANDBY',
      threat: 'MODERATE',
      clearance: 'LEVEL 4'
    },
    { 
      name: 'ATLANTA', 
      code: 'ATL',
      status: 'STANDBY',
      threat: 'ELEVATED',
      clearance: 'LEVEL 4'
    }
  ];

  const sessionFormats = [
    {
      icon: Crosshair,
      title: 'TARGET ACQUISITION',
      description: 'Identify and prioritize critical security objectives for your organization'
    },
    {
      icon: Shield,
      title: 'DEFENSE PROTOCOLS',
      description: 'Develop tactical countermeasures for emerging threat vectors'
    },
    {
      icon: Terminal,
      title: 'TACTICAL OPERATIONS',
      description: 'Execute hands-on security simulations and tabletop exercises'
    },
    {
      icon: Network,
      title: 'INTELLIGENCE NETWORK',
      description: 'Build connections with 35-40 elite security operatives'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        
        {/* Scanning lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent absolute w-full"
            style={{
              animation: 'scan 8s linear infinite',
              boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)'
            }}
          />
        </div>

        {/* Grid Pattern - Using brand colors */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
        
        {/* Corner markers - Hidden on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 text-teal-400/30 font-mono text-xs">
          <div>▲ CLASSIFIED</div>
          <div>GUILD ACCESS ONLY</div>
        </div>
        <div className="hidden sm:block absolute top-10 right-10 text-teal-400/30 font-mono text-xs text-right">
          <div>SENTINEL NEXUS ▲</div>
          <div>SECURE CHANNEL</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider mb-6 sm:mb-8">
                <Lock className="w-3 h-3" />
                RESTRICTED ACCESS
                <Shield className="w-3 h-3" />
              </div>
              
              {/* Title with Glitch Effect */}
              <h1 className="text-5xl sm:text-6xl lg:text-9xl font-black mb-6 sm:mb-8">
                <span className="text-white relative inline-block">
                  <span className="relative z-10">{glitchText}</span>
                  <span className="hidden sm:block absolute inset-0 text-teal-400 opacity-50" style={{transform: 'translateX(2px) translateY(-2px)'}}>
                    SHIELD
                  </span>
                  <span className="hidden sm:block absolute inset-0 text-cyan-400 opacity-50" style={{transform: 'translateX(-2px) translateY(2px)'}}>
                    SHIELD
                  </span>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mt-2">
                  SESSIONS
                </span>
              </h1>
              
              {/* Tactical Description */}
              <p className="text-sm sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-mono uppercase tracking-wider px-4">
                <span className="hidden sm:inline">CLASSIFIED GATHERINGS // 35-40 OPERATIVES // MAJOR URBAN CENTERS // EXPERIENTIAL EVENINGS //</span>
                <span className="sm:hidden">CLASSIFIED GATHERINGS // 35-40 OPERATIVES // EXPERIENTIAL EVENINGS</span>
              </p>

              {/* Status Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-teal-500/30 rounded-xl p-4 sm:p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-2">6</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Active Zones</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 sm:p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2">35-40</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Operatives</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 sm:p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl sm:text-4xl font-black text-purple-400 mb-2">LEVEL 5</div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Clearance</div>
                </div>
              </div>

              {/* Radar Animation */}
              <div className="relative inline-block">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  {/* Radar sweep */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(20, 184, 166, 0.3), transparent 30deg)',
                      animation: 'rotate 4s linear infinite'
                    }}
                  />
                  {/* Radar rings */}
                  {[1, 2, 3].map((ring) => (
                    <div 
                      key={ring}
                      className="absolute inset-0 rounded-full border border-teal-500/20"
                      style={{
                        transform: `scale(${ring * 0.33})`,
                      }}
                    />
                  ))}
                  {/* Center point */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-teal-500/50 animate-pulse" />
                  
                  {/* City dots */}
                  {cities.map((city, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                      style={{
                        top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                        left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Objectives */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 border-y border-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider mb-4 sm:mb-6">
                <Activity className="w-3 h-3" />
                MISSION PARAMETERS
                <Activity className="w-3 h-3" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
                OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">OBJECTIVES</span>
              </h2>
              <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                Each Shield Session combines strategic discussion with experiential activities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {sessionFormats.map((format, index) => (
                <div 
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <format.icon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-mono text-teal-400 mb-2 sm:mb-3 uppercase tracking-wider">{format.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Zones */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider mb-4 sm:mb-6">
                <MapPin className="w-3 h-3" />
               CITIES ONLINE
                <MapPin className="w-3 h-3" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
               CITIES <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">ONLINE</span>
              </h2>
              <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                Shield Sessions deploy across six major metropolitan areas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {cities.map((city, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCity(city.name)}
                  className={`group relative bg-slate-900/50 backdrop-blur-sm border-2 rounded-xl p-6 sm:p-8 text-left transition-all duration-300 ${
                    selectedCity === city.name 
                      ? 'border-teal-500 shadow-lg shadow-teal-500/20' 
                      : 'border-slate-800 hover:border-teal-500/50'
                  }`}
                >
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-2 h-2 rounded-full ${
                      city.status === 'ACTIVE' ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400/50' : 'bg-yellow-400'
                    }`} />
                  </div>
                  
                  <div className="font-mono text-xs text-slate-500 mb-2">{city.code}</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 group-hover:text-teal-400 transition-colors">
                    {city.name}
                  </h3>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">STATUS:</span>
                      <span className={city.status === 'ACTIVE' ? 'text-green-400' : 'text-yellow-400'}>
                        {city.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">THREAT:</span>
                      <span className={
                        city.threat === 'CRITICAL' ? 'text-red-400' :
                        city.threat === 'HIGH' ? 'text-orange-400' :
                        city.threat === 'ELEVATED' ? 'text-yellow-400' :
                        'text-green-400'
                      }>
                        {city.threat}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">CLEARANCE:</span>
                      <span className="text-slate-300">{city.clearance}</span>
                    </div>
                  </div>
                  
                  {selectedCity === city.name && (
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-teal-500/20 via-transparent to-teal-500/20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Alert System */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm border-2 border-teal-500/30 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 p-3 sm:p-4 border-b border-teal-500/30">
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-mono text-teal-400 uppercase tracking-wider">
                      Priority Alert System
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <p className="text-slate-400 font-mono text-xs sm:text-sm uppercase tracking-wider mb-2">
                     Get Notified About Shield Sessions
                    </p>
                    <p className="text-teal-400 text-xl sm:text-2xl font-black">
                     STAY INFORMED
                    </p>
                  </div>
                  
                  {isFormSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-full mb-6">
                        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-mono">CONNECTION ESTABLISHED</h3>
                      <p className="text-lg text-slate-300 font-mono">You'll receive Shield Sessions notifications.</p>
                    </div>
                  ) : (
                    <div id="shield-hubspot-form" className="min-h-[300px]">
                      {!hubspotLoaded && (
                        <div className="flex items-center justify-center py-12">
                          <div className="text-center">
                            <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-slate-500 font-mono text-xs uppercase">Establishing secure connection...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="text-center mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-mono">
                     EXCLUSIVE ACCESS • INVITATION ONLY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Newsletter Form Modal */}
      <Dialog open={showNewsletterForm} onOpenChange={setShowNewsletterForm}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-full bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
              Request Briefing Access
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-slate-300">
              Get notified about upcoming Shield Sessions and briefings.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    </>
  );
}