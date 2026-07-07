import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A venture studio building products and initiatives that bring people together — home of Koffeechat, Fisayo.org, and Alto Partners.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4 block">Ecosystem</span>
            <ul className="space-y-2">
              <li>
                <Link to="/koffeechat" className="text-sm hover:text-foreground transition-colors duration-200">
                  Koffeechat <span className="text-xs text-primary font-medium">· Product</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://fisayo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-foreground transition-colors duration-200"
                >
                  Fisayo.org <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/initiatives#alto-partners" className="text-sm hover:text-foreground transition-colors duration-200">
                  Alto Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4 block">Company</span>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-foreground transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-foreground transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">hello@alttene.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4 block">Follow Us</span>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background hover:bg-accent transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background hover:bg-accent transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background hover:bg-accent transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Alttene Ventures. All rights reserved.
            </p>
            <p className="text-sm">
              Built with care, powered by coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
