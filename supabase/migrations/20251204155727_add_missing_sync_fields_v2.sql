/*
  # Add missing fields for sync functionality

  1. Changes to events table
    - Add `agenda` column (text, nullable) - Legacy field, may be deprecated in favor of agenda_items
    - Add `user_id` column (uuid, nullable) - References auth.users for ownership tracking
  
  2. Changes to event_sponsors table
    - Add `asset_link` column (text, nullable) - Link to sponsor assets or resources
  
  3. Changes to ordering fields
    - Make `order_index` nullable in all related tables for flexibility
  
  4. Security
    - Add RLS policies for authenticated users to manage their own events
*/

-- Add agenda column to events table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'events' AND column_name = 'agenda'
  ) THEN
    ALTER TABLE events ADD COLUMN agenda TEXT;
  END IF;
END $$;

-- Add user_id column to events table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'events' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE events ADD COLUMN user_id UUID REFERENCES auth.users(id);
  END IF;
END $$;

-- Add asset_link column to event_sponsors table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'event_sponsors' AND column_name = 'asset_link'
  ) THEN
    ALTER TABLE event_sponsors ADD COLUMN asset_link TEXT;
  END IF;
END $$;

-- Make order_index nullable in agenda_items table
DO $$
BEGIN
  ALTER TABLE agenda_items ALTER COLUMN order_index DROP NOT NULL;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

-- Make order_index nullable in event_speakers table
DO $$
BEGIN
  ALTER TABLE event_speakers ALTER COLUMN order_index DROP NOT NULL;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

-- Make order_index nullable in event_sponsors table
DO $$
BEGIN
  ALTER TABLE event_sponsors ALTER COLUMN order_index DROP NOT NULL;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Authenticated users can insert events" ON events;
DROP POLICY IF EXISTS "Authenticated users can update their events" ON events;
DROP POLICY IF EXISTS "Authenticated users can delete their events" ON events;
DROP POLICY IF EXISTS "Authenticated users can insert agenda items for their events" ON agenda_items;
DROP POLICY IF EXISTS "Authenticated users can update agenda items for their events" ON agenda_items;
DROP POLICY IF EXISTS "Authenticated users can delete agenda items for their events" ON agenda_items;
DROP POLICY IF EXISTS "Authenticated users can insert speakers for their events" ON event_speakers;
DROP POLICY IF EXISTS "Authenticated users can update speakers for their events" ON event_speakers;
DROP POLICY IF EXISTS "Authenticated users can delete speakers for their events" ON event_speakers;
DROP POLICY IF EXISTS "Authenticated users can insert sponsors for their events" ON event_sponsors;
DROP POLICY IF EXISTS "Authenticated users can update sponsors for their events" ON event_sponsors;
DROP POLICY IF EXISTS "Authenticated users can delete sponsors for their events" ON event_sponsors;

-- Add policies for authenticated users to manage events
CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their events"
  ON events FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their events"
  ON events FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Add policies for agenda items
CREATE POLICY "Authenticated users can insert agenda items for their events"
  ON agenda_items FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can update agenda items for their events"
  ON agenda_items FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can delete agenda items for their events"
  ON agenda_items FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

-- Add policies for speakers
CREATE POLICY "Authenticated users can insert speakers for their events"
  ON event_speakers FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can update speakers for their events"
  ON event_speakers FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can delete speakers for their events"
  ON event_speakers FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

-- Add policies for sponsors
CREATE POLICY "Authenticated users can insert sponsors for their events"
  ON event_sponsors FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can update sponsors for their events"
  ON event_sponsors FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );

CREATE POLICY "Authenticated users can delete sponsors for their events"
  ON event_sponsors FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_id AND events.user_id = auth.uid()
    )
  );