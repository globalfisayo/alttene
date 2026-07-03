import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from './supabaseConfig';

// Load the Supabase SDK lazily — only when it's first needed (a form submit or
// the admin dashboard) — so the library stays out of the main page bundle that
// every visitor downloads.
let clientPromise = null;

export async function getSupabase() {
  if (!isSupabaseConfigured) return null;
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(SUPABASE_URL, SUPABASE_ANON_KEY),
    );
  }
  return clientPromise;
}

export { isSupabaseConfigured };
