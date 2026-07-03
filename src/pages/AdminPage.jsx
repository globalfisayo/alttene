import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Database } from 'lucide-react';
import { isSupabaseConfigured, getSession, onAuthChange } from '@/lib/submissions';
import AdminLogin from '@/components/admin/AdminLogin.jsx';
import AdminDashboard from '@/components/admin/AdminDashboard.jsx';

const NotConfigured = () => (
  <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
    <div className="w-full max-w-md bg-card rounded-2xl border border-border shadow-sm p-8 text-center">
      <div className="h-14 w-14 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
        <Database className="h-6 w-6 text-muted-foreground" />
      </div>
      <h1 className="text-xl font-bold mb-2">Dashboard not connected yet</h1>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Add your Supabase project URL and anon key in <code>src/lib/supabaseConfig.js</code>,
        then run <code>supabase/schema.sql</code> in your Supabase SQL editor. Full steps are in{' '}
        <code>supabase/SETUP.md</code>.
      </p>
    </div>
  </div>
);

const AdminPage = () => {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setReady(true);
      return undefined;
    }
    getSession().then((s) => {
      setSession(s);
      setReady(true);
    });
    const unsubscribe = onAuthChange((s) => setSession(s));
    return unsubscribe;
  }, []);

  let content;
  if (!isSupabaseConfigured) {
    content = <NotConfigured />;
  } else if (!ready) {
    content = (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>
    );
  } else if (session) {
    content = <AdminDashboard session={session} />;
  } else {
    content = <AdminLogin />;
  }

  return (
    <>
      <Helmet>
        <title>Admin — Novola</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      {content}
    </>
  );
};

export default AdminPage;
