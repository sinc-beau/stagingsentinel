"use client"
import React from 'react';
import { useState } from 'react';
import { ArrowRight, Shield, Target, Zap, Users, Lock, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function WhatWeCoverSection() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  const topics = [
    { icon: Shield, text: 'Identity sprawl', color: 'text-red-400' },
    { icon: Target, text: 'Incident readiness', color: 'text-orange-400' },
    { icon: Users, text: 'Board reporting that lands', color: 'text-blue-400' },
    { icon: Lock, text: 'Third-party exposure', color: 'text-purple-400' },
    { icon: Eye, text: 'Detection quality', color: 'text-green-400' },
    { icon: Zap, text: 'Team structure that scales', color: 'text-yellow-400' }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              The problems on the <span className="text-teal-400">table</span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Rotating, member-driven topics. Examples:
            </p>

            {/* Topic Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-teal-400/50 transition-all duration-300 group"
                >
                  <topic.icon className={`w-5 h-5 ${topic.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">
                    {topic.text}
                  </span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowNewsletterForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
            >
              Join the Nexus
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative group">
              <img 
                src="/problemsatthetable.png" 
                alt="Problems on the table" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-sm border border-teal-400/30 rounded-xl p-4">
                <div className="text-teal-400 font-mono text-xs mb-1">MEMBER DRIVEN</div>
                <div className="text-white font-bold text-2xl">100%</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-teal-500/20 rounded-full border-2 border-teal-400/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-teal-400" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border-2 border-cyan-400/30 flex items-center justify-center">
              <Target className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
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