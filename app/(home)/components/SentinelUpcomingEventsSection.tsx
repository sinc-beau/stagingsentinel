'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Building2, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface Event {
  slug: string;
  title: string;
  date: string | null;
  city: string;
  venue: string;
  type: string;
  event_sponsors: Array<{
    logo_url: string;
    name: string;
  }>;
}

export function SentinelUpcomingEventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLiveEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select(`
            slug,
            title,
            date,
            city,
            venue,
            type,
            event_sponsors(
              logo_url,
              name
            )
          `)
          .eq('islive', true)
          .eq('brand', 'Sentinel')
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching live events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveEvents();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  if (loading) {
    return (
      <section className="relative py-16 md:py-20 px-6 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:14px_14px] opacity-20" />
        <div className="relative max-w-6xl mx-auto text-center py-12">
          <div className="inline-block animate-pulse">
            <div className="w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-slate-400">Loading events...</p>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 md:py-20 px-6 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:14px_14px] opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Shield className="w-10 h-10 text-teal-400" />
              <div className="absolute inset-0 blur-xl bg-teal-400/30" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              UPCOMING SENTINEL EVENTS
            </h2>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join us at our exclusive cybersecurity events and connect with industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/${event.slug}`}
              className="group relative bg-slate-900/60 backdrop-blur-sm border-2 border-teal-400/20 rounded-xl hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300 flex flex-col overflow-hidden h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center group-hover:bg-teal-400/20 transition-colors duration-300 border border-teal-400/20">
                      <Calendar className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-mono font-semibold text-teal-400 mb-1">
                        {formatDate(event.date)}
                      </p>
                      <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-teal-400 transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 mt-auto">
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-teal-400/60" />
                      <span className="text-sm truncate">{event.city}</span>
                    </div>
                    {event.venue && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <Building2 className="w-4 h-4 flex-shrink-0 text-teal-400/60" />
                        <span className="text-sm truncate">{event.venue}</span>
                      </div>
                    )}
                    {event.type && (
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-teal-400/10 rounded-full text-xs font-mono uppercase tracking-wider text-teal-400 border border-teal-400/20">
                          {event.type}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white px-6 py-4 mt-auto">
                {event.event_sponsors && event.event_sponsors.length > 0 && (
                  <div className="flex justify-center pb-4 border-b border-slate-200 flex-wrap gap-2 min-h-[4rem]">
                    {event.event_sponsors.slice(0, 2).map((sponsor, idx) => (
                      <div key={idx} className="relative w-20 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src={sponsor.logo_url}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className={event.event_sponsors && event.event_sponsors.length > 0 ? "pt-4" : "min-h-[4rem] flex items-center"}>
                  <div className="inline-flex items-center text-sm font-semibold font-mono text-slate-900 group-hover:gap-2 transition-all duration-300">
                    <span>VIEW DETAILS</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
