"use client"
import React from 'react';
import { useState } from 'react';
import { Shield, Target, Zap, Users, Award, TrendingUp, Sparkles, CircleCheck as CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { PartnershipForm } from '@/components/forms/PartnershipForm';

export function VendorParticipationSection() {
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);

  return (
    <section className="py-32 px-6 bg-slate-900/95 backdrop-blur-sm">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-sm tracking-widest mb-4 bg-teal-500/10 px-4 py-2 rounded-full border border-teal-500/30">
            <Sparkles className="w-4 h-4" />
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent">
            Vendors, Without the Circus
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We work with solution providers who solve real problems and can prove it
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Principles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Limited Sponsor Slots */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-teal-400 group-hover:text-teal-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                    Limited Sponsor Slots
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Carefully curated partnerships so leaders can speak freely without vendor overload
                  </p>
                </div>
              </div>

              {/* Clear Purpose */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    Clear Purpose
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Every vendor presence is aligned to the discussion and adds genuine value
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-850/90 to-slate-900/90 backdrop-blur-xl p-10 rounded-3xl border border-teal-400/40 shadow-2xl shadow-teal-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 text-teal-400 mb-6">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white">Our Philosophy</h3>
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-xl text-slate-200 leading-relaxed mb-6 font-medium">
                  If you solve real problems and can prove it, you belong.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mb-6" />
                <p className="text-lg text-slate-400 italic font-light">
                  If you need a booth and a bullhorn, you don't.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-6">
            {/* Professional Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/vendors.png" 
                alt="Professional meeting" 
                className="w-full h-64 object-cover shadow-2xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
              <div className="absolute bottom-6 left-6 text-white z-30">
                <div className="flex items-center gap-2 text-sm font-mono text-teal-400 mb-2">
                  <Award className="w-4 h-4" />
                  QUALITY PARTNERSHIPS
                </div>
                <div className="text-lg font-bold">Solution-Focused Vendors</div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 text-center hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text mb-2">15+</div>
                <div className="text-slate-300 text-sm">Trusted Partners</div>
              </div>
              
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 text-center hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">100%</div>
                <div className="text-slate-300 text-sm">Value-Aligned</div>
              </div>
            </div>

            {/* Additional Stat */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl p-6 rounded-xl border border-purple-500/30 text-center hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Zero Noise</div>
              <div className="text-purple-300 text-sm">Maximum Impact</div>
            </div>
          </div>
        </div>

        {/* Vendor Benefits Section */}
        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              What Our Partners Get
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">Direct Access</h4>
                <p className="text-slate-300 leading-relaxed">Meaningful conversations with decision makers who need solutions</p>
              </div>
              
              <div className="group text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">Targeted Engagement</h4>
                <p className="text-slate-300 leading-relaxed">Aligned to specific problems and solutions that matter</p>
              </div>
              
              <div className="group text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">Trusted Environment</h4>
                <p className="text-slate-300 leading-relaxed">Build relationships, not just transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setShowPartnershipForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
            >
              Partnership Inquiry
            </button>
            <Link href="/solution-providers">
              <button className="px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 font-bold text-lg rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                View Partner Benefits
              </button>
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            Interested in becoming a strategic partner? Let's discuss how we can create value together.
          </p>
        </div>
      </div>

      {/* Partnership Form Modal */}
      <Dialog open={showPartnershipForm} onOpenChange={setShowPartnershipForm}>
        <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              Partnership Inquiry
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Tell us about your organization and partnership interests.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <PartnershipForm />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}