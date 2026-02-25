import React from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Mail, Clock, Scale } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'thejurists');

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-white" />
              <span className="font-serif text-xl font-bold text-white">The Jurists</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional legal services across Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally Courts.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <a href="mailto:thejuristshyd@gmail.com" className="hover:text-white transition-colors">
                  thejuristshyd@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path as any}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Family Law', path: '/services/family-law' },
                { name: 'Corporate Law', path: '/services/corporate-law' },
                { name: 'Criminal Defense', path: '/services/criminal-defense' },
                { name: 'Property Law', path: '/services/property-law' },
                { name: 'Employment Law', path: '/services/employment-law' },
                { name: 'IP Law', path: '/services/ip-law' },
                { name: 'Tax Law', path: '/services/tax-law' },
                { name: 'Startup Law', path: '/services/startup-law' },
                { name: 'Civil Litigation', path: '/services/civil-litigation' },
                { name: 'Documentation Services', path: '/services/documentation-services' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path as any}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
              Jurisdictions
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Telangana High Court', path: '/jurisdiction/telangana-high-court' },
                { name: 'Hyderabad', path: '/hyderabad' },
                { name: 'Secunderabad', path: '/secunderabad' },
                { name: 'Rangareddy', path: '/rangareddy' },
                { name: 'Medchal Malkajgiri & Kukatpally', path: '/medchal-malkajgiri-kukatpally' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path as any}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {year} The Jurists. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with{' '}
            <span className="text-white">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
