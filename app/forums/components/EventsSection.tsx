"use client"

import React from 'react';
import Link from 'next/link';
import { Shield, Calendar, MapPin, ChevronRight, Users } from 'lucide-react';

export function EventsSection() {
  const events = [
    {
      id: 1,
      name: "Watchtower Forum (National)",
      type: "SINC Forum",
      dates: "March 1–3, 2026",
      fullDate: "Saturday, March 1-3, 2026",
      location: "Downright Hotel",
      city: "Austin",
      state: "TX",
      url: "/watchtower-ciso-forum-austin-march-2026"
    },
    {
      id: 2,
      name: "Watchtower Forum (West)",
      type: "SINC Forum",
      dates: "March 1–3, 2026",
      fullDate: "Saturday, March 1-3, 2026",
      location: "M Resort",
      city: "Las Vegas",
      state: "NV",
      url: "/watchtower-ciso-forum-las-vegas-march-2026"
    },
    {
      id: 3,
      name: "Watchtower Forum (East)",
      type: "SINC Forum",
      dates: "May 31–June 2, 2026",
      fullDate: "Saturday, May 31 - June 2, 2026",
      location: "Trump Doral",
      city: "Miami",
      state: "FL",
      url: "/watchtower-ciso-forum-miami-may-2026"
    },
    {
      id: 4,
      name: "Watchtower Forum (Canada National)",
      type: "SINC Forum",
      dates: "August 2026",
      fullDate: "August 2026 (Dates TBD)",
      location: "Canada",
      city: "TBD",
      state: "",
      url: "/watchtower-ciso-forum-canada-august-2026"
    },
    {
      id: 5,
      name: "Watchtower Forum (National)",
      type: "SINC Forum",
      dates: "Sept 20–22, 2026",
      fullDate: "Saturday, September 20-22, 2026",
      location: "Hyatt Lost Pines",
      city: "Austin",
      state: "TX",
      url: "/watchtower-ciso-forum-austin-september-2026"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">2026 WATCHTOWER FORUMS</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Register for Forums
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join exclusive cybersecurity leadership gatherings across North America.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {event.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar className="w-5 h-5 text-teal-400" />
                    <span className="text-base font-semibold">
                      {event.fullDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <span className="text-base">
                      {event.location} - {event.city}{event.state && `, ${event.state}`}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-6">
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">What to Expect</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">75+ senior security leaders</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">48 hours of intensive sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">Classified intelligence briefings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">Executive networking</span>
                    </div>
                  </div>
                </div>

                {event.url ? (
                  <Link href={event.url}>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30">
                      LEARN MORE
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => alert(`Registration for ${event.name} - Coming Soon!`)}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30"
                  >
                    REGISTER NOW
                    <Shield className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-slate-500">
            Registration is secure and invitation-only
          </p>
        </div>
      </div>
    </section>
  );
}
