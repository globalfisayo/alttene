# Submissions dashboard — setup (about 5 minutes, one time)

The site can collect form submissions (volunteer, mentor, donation, contact) into
a free database and show them in a private dashboard at **/admin**. It all works
without this setup — forms just show a friendly confirmation and store nothing —
until you connect Supabase with the steps below.

## 1. Create a free Supabase project
1. Go to <https://supabase.com>, sign up, and click **New project**.
2. Give it a name (e.g. `novola`), set a database password (save it somewhere),
   pick the closest region, and create it. Wait ~1 minute for it to finish.

## 2. Create the database table
1. In your project, open **SQL Editor** (left sidebar) → **New query**.
2. Open the file [`supabase/schema.sql`](./schema.sql) from this repo, copy all of
   it, paste into the query box, and click **Run**. You should see "Success".

## 3. Connect the site to your project
1. In Supabase, go to **Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. Paste them into [`src/lib/supabaseConfig.js`](../src/lib/supabaseConfig.js) —
   the two empty strings `url` and `anonKey`. (These two values are public and
   safe to commit. Never paste the `service_role` secret key.)
4. Commit and push. The dashboard is now live. (Or just send me the two values
   and I'll do this part.)

## 4. Create your team's login(s)
1. In Supabase, go to **Authentication → Users → Add user → Create new user**.
2. Enter an email + password for each team member who should see the dashboard,
   and tick "Auto Confirm User".
3. They can now sign in at **https://novolafoundation.org/admin** with that email
   and password.

## How your team uses it
- Go to **/admin**, sign in.
- See totals and a chart of submissions by type (volunteers, mentors, donations…).
- Search/filter the table, open any entry to read the full message, email the
  person directly, and set a status (New → In review → Contacted → Closed).

## Security (how your data stays private)
- The database uses Row Level Security: the public website can only **insert** a
  submission — nobody can read submissions without logging in.
- Only the users you create in step 4 can sign in and view the dashboard.
- The `/admin` page is marked "noindex" so search engines don't list it.
