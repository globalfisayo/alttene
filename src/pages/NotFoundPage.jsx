import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - Alttene Ventures</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-32 container-custom text-center">
          <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-6">
            <Compass className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            We couldn't find the page you're looking for. It might have been moved or the URL is incorrect.
          </p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
