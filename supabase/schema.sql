-- Novola submissions backend — database schema and security policies.
--
-- HOW TO RUN THIS (one time):
--   1. In your Supabase project, open "SQL Editor" in the left sidebar.
--   2. Click "New query", paste this whole file, and click "Run".
-- It creates the submissions table and locks it down so the public can only
-- SUBMIT the form, while only your logged-in team can read/manage entries.

create table if not exists public.submissions (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  type         text not null default 'contact',   -- volunteer | mentor | donation | partnership | contact
  name         text not null,
  email        text not null,
  inquiry_type text,                               -- the dropdown value chosen on the form
  message      text not null,
  status       text not null default 'new'         -- new | in_review | contacted | closed
);

create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
create index if not exists submissions_type_idx       on public.submissions (type);

-- ── Row Level Security ────────────────────────────────────────────────────────
alter table public.submissions enable row level security;

-- Anyone (anonymous website visitors) may SUBMIT a form…
drop policy if exists "public can insert submissions" on public.submissions;
create policy "public can insert submissions"
  on public.submissions for insert
  to anon, authenticated
  with check (true);

-- …but only logged-in team members may READ submissions.
drop policy if exists "authenticated can read submissions" on public.submissions;
create policy "authenticated can read submissions"
  on public.submissions for select
  to authenticated
  using (true);

-- …and only logged-in team members may UPDATE a submission's status.
drop policy if exists "authenticated can update submissions" on public.submissions;
create policy "authenticated can update submissions"
  on public.submissions for update
  to authenticated
  using (true)
  with check (true);
