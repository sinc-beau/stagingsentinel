import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  slug: string;
  title: string;
  blurb: string;
  date: string | null;
  timezone: string | null;
  city: string;
  location?: string;
  type: string;
  brand?: string;
  venue?: string;
  venue_address?: string;
  venue_link?: string;
  venue_image?: string;
  venue_description?: string;
  venue_highlight_1?: string;
  venue_highlight_2?: string;
  venue_highlight_3?: string;
  hero_image?: string;
  attendee_count?: number;
  hubspot_form_id?: string;
  islive: boolean;
  created_at: string;
}

export interface AgendaItem {
  id: string;
  event_id: string;
  time_slot: string;
  title: string;
  description?: string;
  order_index: number;
  created_at: string;
}

export interface EventSpeaker {
  id: string;
  event_id: string;
  name: string;
  about?: string;
  headshot_url?: string;
  order_index: number;
  created_at: string;
}

export interface EventSponsor {
  id: string;
  event_id: string;
  name: string;
  about?: string;
  logo_url?: string;
  order_index: number;
  created_at: string;
}
