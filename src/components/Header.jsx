import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import BlogDropdown from '@/components/BlogDropdown.jsx';
import Logo from '@/components/Logo.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Koffeechat', path: '/koffeechat' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Blog', path: '/blog', isDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between">
        <Link to="/" aria-label="Alttene Ventures — home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive(link.path)
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <BlogDropdown />
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive(link.path)
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Work With Us
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
