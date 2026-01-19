import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Event } from '@/lib/supabase';

interface VenueSectionProps {
  event: Event;
}

export function VenueSection({ event }: VenueSectionProps) {
  if (!event.venue) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">VENUE & LOCATION</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            {event.venue}
          </h2>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-bold">
            {event.city}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
            <div className="relative h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
              <img
                src={event.venue_image || "/cisoforumpanel.jpg"}
                alt={`${event.venue}, ${event.city}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            {event.venue_description && (
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {event.venue_description}
              </p>
            )}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Prime Location:</strong> {event.venue_highlight_1 || 'Easy airport access'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Modern Facilities:</strong> {event.venue_highlight_2 || 'State-of-the-art meeting spaces'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">All-Inclusive:</strong> {event.venue_highlight_3 || 'Accommodations, meals, and activities included'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
