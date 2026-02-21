import { Link } from '@tanstack/react-router';
import { Scale, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'thejurists';

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/services/family-law', label: 'Family Law' },
    { href: '/services/corporate-law', label: 'Corporate Law' },
    { href: '/services/criminal-defense', label: 'Criminal Defense' },
    { href: '/services/property-law', label: 'Property Law' },
  ];

  const jurisdictions = [
    { href: '/jurisdiction/hyderabad', label: 'Hyderabad' },
    { href: '/jurisdiction/secunderabad', label: 'Secunderabad' },
    { href: '/jurisdiction/rangareddy', label: 'Rangareddy' },
    { href: '/jurisdiction/cyberabad', label: 'Cyberabad' },
  ];

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                The Jurists
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive legal services across Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Jurisdictions</h3>
            <ul className="space-y-2">
              {jurisdictions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} The Jurists. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
