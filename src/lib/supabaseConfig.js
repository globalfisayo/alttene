// Supabase connection — these are PUBLIC values and safe to commit.
//
// The anon (public) key is DESIGNED to be exposed in the browser. Your data is
// protected by Row Level Security (RLS) policies in the database, NOT by hiding
// this key. NEVER put the "service_role" / secret key here — that one bypasses
// all security and must stay private.
//
// To fill these in: Supabase dashboard → your project → Settings → API →
// copy "Project URL" and the "anon public" key into the two strings below.

const CONFIG = {
  url: '', // e.g. https://abcdefgh.supabase.co
  anonKey: '', // the long "anon public" key
};

// Env vars (if set at build time) take precedence over the committed values.
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || CONFIG.url;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || CONFIG.anonKey;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
