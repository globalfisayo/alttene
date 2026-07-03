import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import BlogLanding from './pages/BlogLanding.jsx';
import BlogPostDetail from './pages/BlogPostDetail.jsx';
import ImpactPage from './pages/ImpactPage.jsx';
import GetInvolvedPage from './pages/GetInvolvedPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { Toaster } from '@/components/ui/toaster';

// The admin dashboard (charts + Supabase admin code) is heavy and only used by
// the team, so it's lazy-loaded — regular visitors never download it.
const AdminPage = lazy(() => import('./pages/AdminPage.jsx'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>
);

// Follows Vite's base setting so routes work when the site is served
// from a subpath (e.g. GitHub Pages project sites).
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<PageLoader />}>
              <AdminPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;