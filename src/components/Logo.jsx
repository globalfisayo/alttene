import React from 'react';

// Alttene Ventures brand mark: a blue-gradient rounded square holding an "A"
// cut like an upward arrow — products and initiatives, both pointing up.
// Inline SVG so the logo is crisp at any size and needs no image asset.
export const LogoMark = ({ className = 'h-9 w-9' }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    role="img"
    aria-label="Alttene Ventures"
  >
    <defs>
      <linearGradient id="alttene-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="11" fill="url(#alttene-mark)" />
    <path
      d="M20 8.5 L31 31.5 h-5.4 l-2.2-4.9 h-6.8 l-2.2 4.9 H9 Z M20 17.2 l-2.4 5.4 h4.8 Z"
      fill="#fff"
    />
  </svg>
);

const Logo = ({ markClassName = 'h-9 w-9', wordmark = true }) => (
  <span className="inline-flex items-center gap-2.5">
    <LogoMark className={markClassName} />
    {wordmark && (
      <span
        className="text-xl font-bold tracking-tight text-foreground leading-none"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Alttene<span className="text-primary"> Ventures</span>
      </span>
    )}
  </span>
);

export default Logo;
