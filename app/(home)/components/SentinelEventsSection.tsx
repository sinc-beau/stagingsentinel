'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Shield, Eye, ArrowRight } from 'lucide-react';

export function SentinelEventsSection() {
  const events = [
    {
      date: 'Feb 25',
      title: 'Shield Sessions',
      location: 'New York City',
      type: 'shield',
      link: '/shield-sessions'
    },
    {
      date: 'Mar 1–3',
      title: 'National Watchtower Forum',
      location: 'Downright Hotel, Austin',
      type: 'watchtower',
      level: 'national',
      link: '/watchtower-ciso-forum-austin-march-2026'
    },
    {
      date: 'May 13',
      title: 'Shield Sessions',
      location: 'San Francisco',
      type: 'shield',
      link: '/shield-sessions'
    },
    {
      date: 'May 17–19',
      title: 'West Watchtower Forum',
      location: 'M Resort, Las Vegas',
      type: 'watchtower',
      level: 'regional',
      link: '/watchtower-ciso-forum-las-vegas-march-2026'
    },
    {
      date: 'Jun 14–16',
      title: 'East Watchtower Forum',
      location: 'Trump Doral Creek, Miami',
      type: 'watchtower',
      level: 'regional',
      link: '/watchtower-ciso-forum-miami-may-2026'
    },
    {
      date: 'Aug',
      title: 'Canada Watchtower Forum',
      location: 'TBD, Toronto',
      type: 'watchtower',
      level: 'regional',
      link: '/watchtower-ciso-forum-canada-august-2026'
    },
    {
      date: 'Sep 20–22',
      title: 'National Watchtower Forum',
      location: 'Hyatt Lost Pines, Austin',
      type: 'watchtower',
      level: 'national',
      link: '/watchtower-ciso-forum-austin-september-2026'
    },
    {
      date: 'Nov 11',
      title: 'Shield Sessions',
      location: 'Austin',
      type: 'shield',
      link: '/shield-sessions'
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-slate-950">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:14px_14px] opacity-20" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Shield className="w-10 h-10 text-teal-400" />
              <div className="absolute inset-0 blur-xl bg-teal-400/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              2026 SENTINEL EVENTS
            </h2>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Elite cybersecurity gatherings for strategic leaders and security architects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with gradient */}
          <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent" />

          {/* Events List */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-10 group"
              >
                {/* Date */}
                <div className="md:w-28 flex-shrink-0">
                  <div className={`inline-block md:block px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none backdrop-blur-sm ${
                    event.type === 'shield'
                      ? 'bg-teal-500/10 md:bg-transparent'
                      : 'bg-cyan-500/10 md:bg-transparent'
                  }`}>
                    <p className="text-base md:text-lg font-mono font-bold text-white">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Dot indicator with pulse effect */}
                <div className="hidden md:flex items-center justify-center absolute left-[132px] top-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full border-2 border-slate-900 ${
                      event.type === 'shield'
                        ? 'bg-teal-400'
                        : event.level === 'national'
                        ? 'bg-cyan-400'
                        : 'bg-cyan-500'
                    }`} />
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                      event.type === 'shield'
                        ? 'bg-teal-400'
                        : 'bg-cyan-400'
                    }`} />
                  </div>
                </div>

                {/* Event Card */}
                <div className={`flex-1 p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  event.type === 'shield'
                    ? 'border-teal-400/20 bg-slate-900/50 hover:border-teal-400/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-teal-400/10'
                    : event.level === 'national'
                    ? 'border-cyan-400/30 bg-slate-900/60 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-400/10'
                    : 'border-cyan-500/20 bg-slate-900/50 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-cyan-500/10'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {event.type === 'shield' ? (
                          <Shield className="w-5 h-5 text-teal-400" />
                        ) : (
                          <Eye className="w-5 h-5 text-cyan-400" />
                        )}
                        <h3 className={`text-lg md:text-xl font-bold ${
                          event.type === 'shield'
                            ? 'text-teal-400'
                            : 'text-cyan-400'
                        }`}>
                          {event.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-slate-500" />
                        <span className="text-sm md:text-base font-mono">{event.location}</span>
                      </div>
                      
                      {/* Level badge and button */}
                      <div className="mt-4 flex items-center gap-3">
                        {event.type === 'watchtower' && event.level && (
                          <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                            event.level === 'national'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          }`}>
                            {event.level}
                          </span>
                        )}
                        <Link href={event.link}>
                          <button className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                            event.type === 'shield'
                              ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30 hover:bg-teal-500/30 hover:border-teal-400/50'
                              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400/50'
                          }`}>
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Mobile type indicator */}
                    <div className="md:hidden">
                      <div className={`p-2 rounded-lg ${
                        event.type === 'shield'
                          ? 'bg-teal-500/20'
                          : 'bg-cyan-500/20'
                      }`}>
                        {event.type === 'shield' ? (
                          <Shield className="w-4 h-4 text-teal-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-cyan-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-slate-300 font-mono text-sm">Shield Sessions</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 font-mono text-sm">Watchtower Forums</span>
          </div>
        </div>

      </div>
    </section>
  );
}