import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Event } from '@/lib/supabase';
import { HubSpotFormEmbed } from '@/components/ui/HubSpotFormEmbed';

interface RegistrationSectionProps {
  event: Event;
}

export function RegistrationSection({ event }: RegistrationSectionProps) {
  if (!event.hubspot_form_id) return null;

  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">
              Registration
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Secure Your Spot
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Register now to attend {event.title}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-300">
                    <strong className="text-white">Full Event Access:</strong> Attend all sessions and activities
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-300">
                    <strong className="text-white">Networking Opportunities:</strong> Connect with industry leaders
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-300">
                    <strong className="text-white">Exclusive Content:</strong> Access to presentations and materials
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-300">
                    <strong className="text-white">Meals & Refreshments:</strong> All meals and refreshments included
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <HubSpotFormEmbed
              portalId="45377644"
              formId={event.hubspot_form_id}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
