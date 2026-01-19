'use client';

import React from 'react';
import { useState } from 'react';
import { Shield, Globe, Handshake, ArrowRight, Lock, Users, Building } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { HubSpotForm } from '@/components/ui/HubSpotForm';

export function GetInvolvedSection() {
  const [openForm, setOpenForm] = useState<string | null>(null);

  const operations = [
    {
      icon: Shield,
      badge: 'RESTRICTED',
      title: 'Join the Guild',
      classification: 'Senior Leadership Only',
      description: 'Invitation-only access to our core network of 500+ verified security executives.',
      clearance: 'Background verification required',
      cta: 'Request Clearance',
      glowColor: 'teal',
      formId: 'cb3679cd-bf00-43d0-b67c-85f1a9bfdf6c',
      portalId: '45377644',
      region: 'na1',
      formKey: 'guild'
    },
    {
      icon: Globe,
      badge: 'CONFIDENTIAL',
      title: 'Join the Nexus',
      classification: 'Extended Operations Network',
      description: 'Connect with the broader intelligence community and access tactical briefings.',
      clearance: 'Professional credentials required',
      cta: 'Apply for Access',
      glowColor: 'cyan',
      formId: '302a74f5-6179-42a8-b01b-6592a8ffce3f',
      portalId: '45377644',
      region: 'na1',
      formKey: 'nexus'
    },
    {
      icon: Building,
      badge: 'CLASSIFIED',
      title: 'Partnership Request',
      classification: 'Vendor Integration Program',
      description: 'Strategic alliances for organizations solving critical defense challenges.',
      clearance: 'Executive approval required',
      cta: 'Submit Proposal',
      glowColor: 'amber',
      formId: 'bd17030b-44b8-45b9-ad3d-d6d6fa2a8874',
      portalId: '45377644',
      region: 'na1',
      formKey: 'partnership'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-teal-400/30 rounded-full mb-6">
            <Lock className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Access Control</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            CLEARANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">LEVELS</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Select your engagement tier based on operational requirements
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {operations.map((op, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b from-${op.glowColor}-500/10 to-transparent rounded-2xl blur-xl group-hover:from-${op.glowColor}-500/20 transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-teal-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 hover:transform hover:scale-[1.02]">
                {/* Security Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono ${
                    op.badge === 'RESTRICTED' ? 'text-yellow-400' :
                    op.badge === 'CONFIDENTIAL' ? 'text-blue-400' :
                    'text-red-400'
                  } tracking-wider`}>
                    ● {op.badge}
                  </span>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-teal-400/50 transition-all duration-300">
                  <op.icon className="w-8 h-8 text-teal-400" />
                </div>

                {/* Title & Classification */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {op.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                  {op.classification}
                </p>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {op.description}
                </p>

                {/* Clearance Requirement */}
                <div className="text-xs text-slate-500 italic mb-8 pb-8 border-b border-slate-800">
                  <Lock className="w-3 h-3 inline mr-1" />
                  {op.clearance}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setOpenForm(op.formKey)}
                  className="w-full px-6 py-3 bg-slate-900/50 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-teal-400/50 hover:text-teal-400 hover:bg-slate-900/70 transition-all duration-300 group/btn"
                >
                    <span className="flex items-center justify-center gap-2">
                      {op.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* HubSpot Form Modals */}
        {operations.map((op) => (
          <Dialog key={op.formKey} open={openForm === op.formKey} onOpenChange={(open) => !open && setOpenForm(null)}>
            <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <op.icon className="w-6 h-6 text-teal-400" />
                  {op.title}
                </DialogTitle>
                <DialogDescription className="text-slate-300">
                  {op.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <HubSpotForm
                  portalId={op.portalId}
                  formId={op.formId}
                  region={op.region}
                  onFormSubmitted={() => {
                    setTimeout(() => setOpenForm(null), 2000);
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}

        {/* Bottom Notice */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            All access requests subject to verification and approval by Security Operations
          </p>
        </div>
      </div>
    </section>
  );
}