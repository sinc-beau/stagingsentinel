/*
  # Add sponsor short description column

  1. Changes
    - Add `sponsor_short_description` column to `event_sponsors` table
      - Type: text
      - Nullable: true
      - Used for brief descriptions of sponsors on event pages
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'event_sponsors' AND column_name = 'sponsor_short_description'
  ) THEN
    ALTER TABLE event_sponsors ADD COLUMN sponsor_short_description text;
  END IF;
END $$;
