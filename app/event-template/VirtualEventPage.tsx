"use client"

import { useEffect, useState } from 'react';
import { supabase, Event, AgendaItem, EventSpeaker, EventSponsor } from '@/lib/supabase';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SpeakerSection } from './components/SpeakerSection';
import { AboutSponsorsSection } from './components/AboutSponsorsSection';
import { SponsorsHeroSection } from './components/SponsorsHeroSection';
import { HubSpotFormEmbed } from '@/components/ui/HubSpotFormEmbed';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

interface VirtualEventPageProps {
  slug: string;
}

export function VirtualEventPage({ slug }: VirtualEventPageProps) {
  const [event, setEvent] = useState<Event | null>(null);
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [speakers, setSpeakers] = useState<EventSpeaker[]>([]);
  const [sponsors, setSponsors] = useState<EventSponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const { data: eventData, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (eventError) throw eventError;
        if (!eventData) {
          setError('Event not found');
          setLoading(false);
          return;
        }

        setEvent(eventData);

        const [agendaRes, speakersRes, sponsorsRes] = await Promise.all([
          supabase
            .from('agenda_items')
            .select('*')
            .eq('event_id', eventData.id)
            .order('order_index', { ascending: true }),
          supabase
            .from('event_speakers')
            .select('*')
            .eq('event_id', eventData.id)
            .order('order_index', { ascending: true }),
          supabase
            .from('event_sponsors')
            .select('*')
            .eq('event_id', eventData.id)
            .order('order_index', { ascending: true }),
        ]);

        if (agendaRes.data) setAgendaItems(agendaRes.data);
        if (speakersRes.data) setSpeakers(speakersRes.data);
        if (sponsorsRes.data) setSponsors(sponsorsRes.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching event data:', err);
        setError('Failed to load event data');
        setLoading(false);
      }
    }

    fetchEventData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Event Not Found</h1>
          <p className="text-slate-300 mb-8">{error || 'The event you are looking for does not exist.'}</p>
          <a href="/" className="text-teal-400 hover:text-teal-300 underline">Return to Home</a>
        </div>
      </div>
    );
  }

  const formatEventDate = (dateString: string | null) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatEventTime = (dateString: string | null) => {
    if (!dateString) return null;
    const timePart = dateString.split('T')[1];
    if (!timePart) return '';
    const [hours, minutes] = timePart.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHour}:${displayMinutes} ${ampm} ${event.timezone}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black border-b border-teal-500/20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.015)_1px,transparent_1px)] bg-[size:120px_120px]" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-8">
                <span className="text-teal-400 font-bold text-sm uppercase tracking-wider">{event.type}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                {event.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-6 text-slate-300 mb-8">
                {event.date && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-teal-400" />
                      <span className="text-lg font-semibold">{formatEventDate(event.date)}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-teal-400 rounded-full"></div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-teal-400" />
                      <span className="text-lg font-semibold">{formatEventTime(event.date)}</span>
                    </div>
                  </div>
                )}
                {event.venue && (
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-teal-400" />
                      <span className="text-lg font-semibold">{event.venue}</span>
                    </div>
                    {event.venue_address && (
                      <span className="text-sm text-slate-400">{event.venue_address}</span>
                    )}
                    {event.venue_link && (
                      <a
                        href={event.venue_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm"
                      >
                        <span>View Venue</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4">
                <a
                  href="#registration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {sponsors.length > 0 && <SponsorsHeroSection sponsors={sponsors} />}

        <section className="relative py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                      About This Event
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mb-8"></div>
                    <div className="prose prose-lg max-w-none">
                      <div
                        className="text-slate-700 leading-relaxed text-lg [&>p]:mb-4 [&>strong]:text-black [&>strong]:font-semibold [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2"
                        dangerouslySetInnerHTML={{ __html: event.blurb }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  {agendaItems.length > 0 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                          Event Agenda
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mb-8"></div>
                      </div>
                      <div className="space-y-6">
                        {agendaItems.map((item, index) => (
                          <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <div className="flex items-center gap-4 mb-4">
                              {item.time_slot && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 rounded-lg">
                                  <Clock className="w-4 h-4 text-white" />
                                  <span className="text-white font-bold text-sm">
                                    {item.time_slot}
                                  </span>
                                </div>
                              )}
                              <h3 className="text-black font-bold text-xl">
                                {item.title}
                              </h3>
                            </div>
                            {item.description && (
                              <div
                                className="agenda-content text-slate-700 leading-relaxed [&>p]:mb-4 [&>ul]:list-none [&>ul]:space-y-3 [&>ul]:ml-0 [&>ul>li]:pl-5 [&>ul>li]:relative [&>ul>li]:block [&>ul>li:before]:content-[''] [&>ul>li:before]:w-2 [&>ul>li:before]:h-2 [&>ul>li:before]:rounded-full [&>ul>li:before]:bg-teal-400 [&>ul>li:before]:absolute [&>ul>li:before]:left-0 [&>ul>li:before]:top-2 [&_strong]:inline [&_strong]:text-black [&_strong]:font-semibold"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {event.hubspot_form_id && (
          <section id="registration" className="relative py-16 bg-gradient-to-b from-slate-950 to-black">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Register for this Event
                  </h2>
                  <p className="text-slate-300 text-lg">
                    Secure your spot for this exclusive virtual event
                  </p>
                </div>
                <div className="bg-slate-900/50 border border-teal-500/20 rounded-2xl p-8">
                  <HubSpotFormEmbed
                    portalId="45377644"
                    formId={event.hubspot_form_id}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {speakers.length > 0 && <SpeakerSection speakers={speakers} />}
        {sponsors.length > 0 && <AboutSponsorsSection sponsors={sponsors} />}
      </main>
      <Footer />
    </div>
  );
}
