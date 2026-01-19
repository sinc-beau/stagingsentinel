/*
  # Event Management System Setup

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL slug for the event
      - `title` (text) - Event title
      - `blurb` (text) - Event description
      - `date` (timestamptz) - Event date and time
      - `timezone` (text) - Event timezone
      - `city` (text) - Event city
      - `location` (text) - Event location name
      - `type` (text) - Event type
      - `venue` (text) - Venue name
      - `venue_address` (text) - Venue address
      - `venue_link` (text) - Venue website
      - `hubspot_form_id` (text) - HubSpot form ID for registration
      - `islive` (boolean) - Whether the event page is published
      - `created_at` (timestamptz) - Record creation timestamp

    - `agenda_items`
      - `id` (uuid, primary key)
      - `event_id` (uuid, foreign key) - References events table
      - `time_slot` (text) - Time slot for the agenda item
      - `title` (text) - Agenda item title
      - `description` (text) - Agenda item description
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Record creation timestamp

    - `event_speakers`
      - `id` (uuid, primary key)
      - `event_id` (uuid, foreign key) - References events table
      - `name` (text) - Speaker name
      - `about` (text) - Speaker bio
      - `headshot_url` (text) - URL to speaker headshot image
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Record creation timestamp

    - `event_sponsors`
      - `id` (uuid, primary key)
      - `event_id` (uuid, foreign key) - References events table
      - `name` (text) - Sponsor name
      - `about` (text) - Sponsor description
      - `logo_url` (text) - URL to sponsor logo
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (events are publicly viewable)
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  blurb TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  timezone TEXT NOT NULL,
  city TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  venue TEXT,
  venue_address TEXT,
  venue_link TEXT,
  hubspot_form_id TEXT,
  islive BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create agenda_items table
CREATE TABLE IF NOT EXISTS agenda_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  time_slot TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create event_speakers table
CREATE TABLE IF NOT EXISTS event_speakers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  about TEXT,
  headshot_url TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create event_sponsors table
CREATE TABLE IF NOT EXISTS event_sponsors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  about TEXT,
  logo_url TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE agenda_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_sponsors ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to events"
  ON events FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to agenda items"
  ON agenda_items FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to speakers"
  ON event_speakers FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to sponsors"
  ON event_sponsors FOR SELECT
  TO anon
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_events_islive ON events(islive);
CREATE INDEX IF NOT EXISTS idx_agenda_items_event_id ON agenda_items(event_id);
CREATE INDEX IF NOT EXISTS idx_event_speakers_event_id ON event_speakers(event_id);
CREATE INDEX IF NOT EXISTS idx_event_sponsors_event_id ON event_sponsors(event_id);