import { Link } from '@tanstack/react-router';
import { Scale, Mail, MapPin, Clock } from 'lucide-react';

const practiceAreas = [
  { name: 'Family Law', slug: 'family-law' },
  { name: 'Corporate Law', slug: 'corporate-law' },
  { name: 'Criminal Defense', slug: 'criminal-defense' },
  { name: 'Civil Litigation', slug: 'civil-litigation' },
  { name: 'Property Law', slug: 'property-law' },
  { name: 'Documentation Services', slug: 'documentation-services' },
  { name: 'Tax Law', slug: 'tax-law' },
  { name: 'IP Law', slug: 'ip-law' },
  { name: 'Startup Law', slug: 'startup-law' },
  { name: 'Employment Law', slug: 'employment-law' },
];

const jurisdictions = [
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Secunderabad', path: '/secunderabad' },
  { name: 'Rangareddy', path: '/rangareddy' },
  { name: 'Cyberabad', path: '/cyberabad' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'thejurists');

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-gold" />
              <span className="font-serif text-lg font-bold">The Jurists</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Premier legal services in Hyderabad. Expert counsel across all major practice areas with a commitment to justice and excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:thejuristshyd@gmail.com" className="hover:text-gold transition-colors">
                  thejuristshyd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 text-gold shrink-0" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as '/'}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to="/services/$serviceSlug"
                    params={{ serviceSlug: area.slug }}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Jurisdictions</h3>
            <ul className="space-y-2">
              {jurisdictions.map((j) => (
                <li key={j.path}>
                  <Link
                    to={j.path as '/hyderabad' | '/secunderabad' | '/rangareddy' | '/cyberabad'}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {j.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-serif text-gold font-semibold mb-3 text-sm uppercase tracking-wider">Office Hours</h3>
              <p className="text-sm text-white/60">Available 24/7</p>
              <p className="text-sm text-white/60">All days including holidays</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {year} The Jurists. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with{' '}
            <span className="text-gold">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
