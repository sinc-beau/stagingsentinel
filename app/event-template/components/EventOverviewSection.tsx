import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '@/lib/supabase';
import { format } from 'date-fns';

interface EventOverviewSectionProps {
  event: Event;
}

export function EventOverviewSection({ event }: EventOverviewSectionProps) {
  const eventDate = event.date ? new Date(event.date) : null;

  return (
    <section className="py-24 relative bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4 uppercase">Event Details</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            About This Event
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {eventDate && (
            <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300">
              <Calendar className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Date & Time</h3>
              <p className="text-slate-300">{format(eventDate, 'EEEE, MMMM d, yyyy')}</p>
              {event.timezone && <p className="text-slate-400 text-sm mt-1">{event.timezone}</p>}
            </div>
          )}

          <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300">
            <MapPin className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-slate-300">{event.location}</p>
            <p className="text-slate-400 text-sm mt-1">{event.city}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 md:col-span-2">
            <Clock className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Event Type</h3>
            <p className="text-slate-300">{event.type}</p>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-12">
            <p className="text-xl text-slate-300 leading-relaxed">
              {event.blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
