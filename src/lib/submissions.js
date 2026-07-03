import { getSupabase, isSupabaseConfigured } from './supabaseClient';

export { isSupabaseConfigured };

// Group each form's inquiry type into a dashboard "type" bucket.
const TYPE_BY_INQUIRY = {
  volunteer: 'volunteer',
  mentorship: 'mentor',
  donation: 'donation',
  partnership: 'partnership',
  general: 'contact',
};

export const TYPE_LABELS = {
  volunteer: 'Volunteer',
  mentor: 'Mentor',
  donation: 'Donation',
  partnership: 'Partnership',
  contact: 'Contact',
};

export const STATUSES = ['new', 'in_review', 'contacted', 'closed'];
export const STATUS_LABELS = {
  new: 'New',
  in_review: 'In review',
  contacted: 'Contacted',
  closed: 'Closed',
};

export function inquiryToType(inquiry) {
  return TYPE_BY_INQUIRY[inquiry] || 'contact';
}

// ── Public: submit a form ─────────────────────────────────────────────────────
// Falls back to a no-op "success" when the backend isn't configured yet, so the
// site keeps working (and the form keeps its friendly confirmation) pre-setup.
export async function submitApplication({ name, email, inquiryType, message }) {
  const supabase = await getSupabase();
  if (!supabase) {
    return { ok: true, stored: false };
  }
  const { error } = await supabase.from('submissions').insert({
    type: inquiryToType(inquiryType),
    name,
    email,
    inquiry_type: inquiryType || null,
    message,
  });
  if (error) return { ok: false, stored: false, error: error.message };
  return { ok: true, stored: true };
}

// ── Admin auth ────────────────────────────────────────────────────────────────
export async function getSession() {
  const supabase = await getSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export function onAuthChange(cb) {
  let unsubscribe = () => {};
  let cancelled = false;
  getSupabase().then((supabase) => {
    if (!supabase || cancelled) return;
    const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(session));
    unsubscribe = () => data.subscription.unsubscribe();
  });
  return () => {
    cancelled = true;
    unsubscribe();
  };
}

export async function signIn(email, password) {
  const supabase = await getSupabase();
  if (!supabase) return { error: 'Backend not configured' };
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error?.message };
}

export async function signOut() {
  const supabase = await getSupabase();
  if (supabase) await supabase.auth.signOut();
}

// ── Admin data ────────────────────────────────────────────────────────────────
export async function listSubmissions() {
  const supabase = await getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data || [];
}

export async function updateStatus(id, status) {
  const supabase = await getSupabase();
  if (!supabase) return;
  const { error } = await supabase.from('submissions').update({ status }).eq('id', id);
  if (error) throw new Error(error.message);
}

// Derives dashboard statistics from a list of submissions (computed client-side
// so the numbers always match what's on screen after filtering).
export function computeStats(submissions) {
  const byType = { volunteer: 0, mentor: 0, donation: 0, partnership: 0, contact: 0 };
  let newCount = 0;
  for (const s of submissions) {
    if (byType[s.type] !== undefined) byType[s.type] += 1;
    else byType.contact += 1;
    if (s.status === 'new') newCount += 1;
  }
  return { total: submissions.length, newCount, byType };
}
