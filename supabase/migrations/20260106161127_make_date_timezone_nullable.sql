/*
  # Make Date and Timezone Columns Nullable

  1. Changes
    - Remove NOT NULL constraint from `date` column in `events` table
    - Remove NOT NULL constraint from `timezone` column in `events` table
  
  2. Purpose
    - Allow events to be created without requiring date and timezone information upfront
    - Provides flexibility for draft events or events with TBD scheduling
*/

-- Make date column nullable
ALTER TABLE events 
ALTER COLUMN date DROP NOT NULL;

-- Make timezone column nullable
ALTER TABLE events 
ALTER COLUMN timezone DROP NOT NULL;
