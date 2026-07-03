import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Novola Charity Foundation"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering African youths for economic leadership through transformative fellowship programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-foreground transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-foreground transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm hover:text-foreground transition-colors duration-200">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm hover:text-foreground transition-colors duration-200">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4 block">Contact</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@novola.org</span>
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background hover:bg-accent transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
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
              © {currentYear} Novola Charity Foundation. All rights reserved.
            </p>
            {/* Add Privacy Policy / Terms links here once those pages exist */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;