-- Drop existing table if it exists (CAUTION: This will delete all data)
DROP TABLE IF EXISTS contact_messages;

-- Create the contact_messages table
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL DEFAULT 'No Subject',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow public to insert contact messages" ON contact_messages;

-- Create a policy that allows anyone to insert messages
CREATE POLICY "Enable insert for all users"
  ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create a policy to allow authenticated users to read all messages
-- Uncomment the following lines if you want to view messages from an authenticated Supabase dashboard user
-- CREATE POLICY "Enable read for authenticated users only"
--   ON contact_messages
--   FOR SELECT
--   USING (auth.role() = 'authenticated');

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages(created_at DESC);

-- Grant necessary permissions (this is important!)
GRANT INSERT ON contact_messages TO anon;
GRANT INSERT ON contact_messages TO authenticated;

-- Grant usage on the sequence for ID generation
GRANT USAGE ON SEQUENCE contact_messages_id_seq TO anon;
GRANT USAGE ON SEQUENCE contact_messages_id_seq TO authenticated;
