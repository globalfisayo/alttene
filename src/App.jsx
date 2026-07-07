import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import KoffeechatPage from './pages/KoffeechatPage.jsx';
import InitiativesPage from './pages/InitiativesPage.jsx';
import BlogLanding from './pages/BlogLanding.jsx';
import BlogPostDetail from './pages/BlogPostDetail.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { Toaster } from '@/components/ui/toaster';

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
        <Route path="/koffeechat" element={<KoffeechatPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
