/*
  # Add brand column to events table

  1. Changes
    - Add `brand` column to `events` table
      - Type: text
      - Nullable: true (optional field)
      - Description: Brand identifier or name for the event (e.g., "Watchtower Forum", "Shield Sessions")
*/

-- Add brand column to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS brand TEXT;
