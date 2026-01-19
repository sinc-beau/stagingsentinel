"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { EventPage } from './EventPage';
import { VirtualEventPage } from './VirtualEventPage';

export default function EventTemplatePage() {
  const searchParams = useSearchParams();
  const eventSlug = searchParams.get('id');
  const [eventType, setEventType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventType() {
      if (!eventSlug) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('events')
          .select('type')
          .eq('slug', eventSlug)
          .maybeSingle();

        if (error) throw error;
        if (data) {
          setEventType(data.type);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching event type:', err);
        setLoading(false);
      }
    }

    fetchEventType();
  }, [eventSlug]);

  if (!eventSlug) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-black text-white mb-4">Event Preview</h1>
          <p className="text-slate-300 mb-8">
            To preview an event, add the event slug as a query parameter:
          </p>
          <code className="bg-slate-900 text-teal-400 px-4 py-2 rounded-lg inline-block">
            /event-template?id=your-event-slug
          </code>
          <div className="mt-8">
            <a href="/" className="text-teal-400 hover:text-teal-300 underline">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading event preview...</p>
        </div>
      </div>
    );
  }

  if (eventType === 'virtual') {
    return <VirtualEventPage slug={eventSlug} />;
  }

  return <EventPage slug={eventSlug} />;
}
