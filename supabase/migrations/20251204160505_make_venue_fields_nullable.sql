/*
  # Make venue and location fields nullable for virtual events

  1. Changes to events table
    - Make `venue` nullable (already nullable in original schema)
    - Make `location` nullable (currently NOT NULL)
    - Make `city` nullable (currently NOT NULL)
    - Make `venue_address` nullable (already nullable in original schema)
    - Make `venue_link` nullable (already nullable in original schema)
  
  2. Notes
    - These fields are not required for virtual events
    - Virtual events are identified by type='Virtual Roundtable' or absence of venue information
*/

-- Make location field nullable
DO $$
BEGIN
  ALTER TABLE events ALTER COLUMN location DROP NOT NULL;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

-- Make city field nullable
DO $$
BEGIN
  ALTER TABLE events ALTER COLUMN city DROP NOT NULL;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;