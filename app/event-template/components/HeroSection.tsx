import React from 'react';
import { Calendar, MapPin, Shield, ChevronRight, ExternalLink } from 'lucide-react';
import { Event } from '@/lib/supabase';
import { format } from 'date-fns';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';

interface HeroSectionProps {
  event: Event;
}

export function HeroSection({ event }: HeroSectionProps) {
  const eventDate = event.date ? new Date(event.date) : null;

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-400" />
                <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">
                  {event.type}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text">
                    {event.title}
                  </span>
                </h1>

                <div className="flex flex-col gap-3 text-slate-300">
                  {eventDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-400" />
                      <span className="text-base font-semibold">
                        {format(eventDate, 'MMMM d-dd, yyyy')}
                      </span>
                    </div>
                  )}
                  {event.venue && (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <span className="text-base font-semibold">
                          {event.venue}{event.city && `, ${event.city}`}
                        </span>
                      </div>
                      {event.venue_address && (
                        <span className="text-sm text-slate-400 ml-6">{event.venue_address}</span>
                      )}
                      {event.venue_link && (
                        <a
                          href={event.venue_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm ml-6"
                        >
                          <span>View Venue Details</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {event.blurb}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton onClick={scrollToRegistration} className="flex items-center gap-2">
                  SECURE YOUR SPOT
                  <ChevronRight className="w-5 h-5" />
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src={event.hero_image || "/cisoforumpanel.jpg"}
                  alt={event.title}
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-teal-400">REGISTRATION OPEN</span>
                  </div>
                </div>

                {event.attendee_count && (
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-3">
                    <div className="bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl p-3">
                      <div className="text-center">
                        <div className="text-2xl font-black text-teal-400 mb-1">{event.attendee_count}+</div>
                        <div className="text-[10px] sm:text-xs text-slate-300">Security Leaders</div>
                      </div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl p-3">
                      <div className="text-center">
                        <div className="text-2xl font-black text-cyan-400 mb-1">48</div>
                        <div className="text-[10px] sm:text-xs text-slate-300">Hours of Networking</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
