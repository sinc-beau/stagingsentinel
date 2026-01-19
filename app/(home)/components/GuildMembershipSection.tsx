"use client"
import React from 'react';
import { useState } from 'react';
import { Crown, Users, Target, Sparkles, Shield, Award } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { GuildMembershipForm } from '@/components/forms/GuildMembershipForm';

export function GuildMembershipSection() {
  const [showGuildForm, setShowGuildForm] = useState(false);

  return (
    <section className="py-32 px-6 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-sm tracking-widest mb-6 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30">
            <Crown className="w-4 h-4" />
            ELITE MEMBERSHIP
            <Crown className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Sentinel Guild
          </h2>
          <div className="text-2xl text-slate-300 font-light italic mb-8">
            The Fellowship of Cyber Defense
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* First Paragraph */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/30 to-amber-500/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    Invitation-Only Circle
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  An invitation-only circle of senior security leaders guiding Sentinel Nexus. Guild members publish with authority, shape research and forums, and set the direction for the next era of cybersecurity. This is where thought leadership becomes strategy and influence becomes impact.
                </p>
              </div>
            </div>

            {/* Second Paragraph */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Direct Access & Impact
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Through private dinners, leadership forums, and advisory roles, members gain direct access to peers who act: CISOs, operators, and policymakers. Together, the Guild forges partnerships, accelerates rising talent, and leaves a lasting mark on the global security ecosystem.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowGuildForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
                >
                  Apply for Guild Access
                </button>
                <Link href="/guild-membership">
                  <button className="px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 font-bold text-lg rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View All Benefits
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative group">
              <img 
               src="/guild.png" 
                alt="Executive leadership meeting" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-sm border border-teal-400/30 rounded-xl p-4">
                <div className="text-teal-400 font-mono text-xs mb-1">INVITATION ONLY</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-500/20 rounded-full border-2 border-yellow-400/30 flex items-center justify-center">
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full border-2 border-purple-400/30 flex items-center justify-center">
              <Award className="w-10 h-10 text-purple-400" />
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-teal-500/20 rounded-full border border-teal-400/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-teal-400" />
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="group text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-amber-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
              Thought Leadership
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Shape industry direction through authoritative publications and strategic guidance
            </p>
          </div>
          
          <div className="group text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-teal-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
              Elite Network
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Connect with CISOs, operators, and policymakers who drive real change
            </p>
          </div>
          
          <div className="group text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              Lasting Impact
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Leave a mark on the global security ecosystem through strategic partnerships
            </p>
          </div>
        </div>
      </div>

      {/* Guild Membership Form Modal */}
      <Dialog open={showGuildForm} onOpenChange={setShowGuildForm}>
        <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-400" />
              Guild Membership Application
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Apply for exclusive access to the Sentinel Guild leadership community.
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
    </section>
  );
}