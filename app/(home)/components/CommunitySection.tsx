"use client"

import React from 'react';
import { useState } from 'react';
import { FileText, TrendingUp, Award, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function CommunitySection() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  return (
    <section className="py-32 px-6 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">THE ADVANTAGE</div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            INSIGHTS BUILT FOR <span className="text-teal-400">YOU</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            As a member, you receive quarterly and annual reports shaped from the conversations you take part in — turning peer exchange into actionable intelligence.
          </p>
        </div>

        {/* Content Type Header */}
        <div className="text-center mb-16">
          <div className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">CYBERSECURITY LEADERSHIP CONTENT</div>
          <h3 className="text-3xl font-bold text-white mb-6">PRACTICAL VALUE</h3>
        </div>

        {/* Reports Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quarterly Reports */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  Quarterly Intelligence Reports
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Executive foresight, survey benchmarks, and leadership spotlights curated from your community.
                </p>
              </div>
            </div>
          </div>

          {/* Annual Report */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Annual State of Cyber Leadership
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  A definitive guide with emerging trends, year-over-year insights, and peer strategies for the year ahead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Gain Section */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-10 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-teal-400" />
              <h3 className="text-3xl font-bold text-white">What You Gain</h3>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Clarity on where the industry is heading. Benchmarks to validate your strategy. 
              Stories and lessons from leaders facing the same challenges as you.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button 
            onClick={() => setShowNewsletterForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
          >
            Join the Nexus
          </button>
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