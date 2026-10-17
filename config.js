/*
  Tracking configuration
  ----------------------
  1. Create a Supabase project.
  2. Copy Project URL and the anon/public key from Project Settings > API.
  3. Replace the two placeholder values below.

  The anon key is designed to be public in a browser app. Security is enforced
  by the Row Level Security policies in supabase-setup.sql. Never place the
  service_role key or an admin password in this file.
*/
window.QUIZ_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY"
};
