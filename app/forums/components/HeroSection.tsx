import React from 'react';
import { Shield, Users, Lock, Target, ArrowRight, TriangleAlert as AlertTriangle, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-8">
      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Simplified */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/30 text-red-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">
                <AlertTriangle className="w-3 h-3 animate-pulse" />
                <span className="hidden sm:inline">SECURE ACCESS REQUIRED</span>
                <span className="sm:hidden">SECURE ACCESS</span>
                <Lock className="w-3 h-3" />
              </div>
              
              {/* Main Title */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-transparent bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text">
                    SENTINEL
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text">
                    WATCHTOWER
                  </span>
                  <span className="block text-white text-2xl sm:text-3xl lg:text-5xl mt-3 sm:mt-4">
                    FORUMS
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
                  Where cybersecurity leaders unite to defend the digital frontier.
                </p>
              </div>

              {/* Key Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-lg text-slate-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                    <span>Classified Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                    <span>Vetted Leaders Only</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-lg text-slate-400">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                    <span>Chatham House Rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                    <span>Zero Vendor Noise</span>
                  </div>
                </div>
              </div>

              {/* Simple CTA */}
              <div>
                <button 
                  onClick={onRegisterClick}
                  className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-base sm:text-lg rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    Secure Your Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative">
                <img 
                  src="/watchtowerforum.png" 
                  alt="Sentinel Watchtower Forums" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-teal-400">2026 PROGRAM ACTIVE</span>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <button
                    onClick={onRegisterClick}
                    className="w-full bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl p-3 sm:p-4 hover:border-teal-400/50 hover:bg-black/90 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-[10px] sm:text-xs text-slate-400 mb-1">NEXT EVENT</div>
                        <div className="text-sm sm:text-base text-white font-semibold">March 1-3, 2026 • Austin, TX</div>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}