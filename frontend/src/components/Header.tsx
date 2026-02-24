import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, ChevronDown, Scale } from 'lucide-react';

const services = [
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
  { name: 'Contracts & Agreements', slug: 'contracts-agreements' },
];

const jurisdictions = [
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Secunderabad', path: '/secunderabad' },
  { name: 'Rangareddy', path: '/rangareddy' },
  { name: 'Cyberabad', path: '/cyberabad' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [jurisdictionsOpen, setJurisdictionsOpen] = useState(false);

  return (
    <header className="bg-navy text-white shadow-luxury-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Scale className="h-7 w-7 text-gold group-hover:scale-110 transition-transform" />
            <div>
              <span className="font-serif text-xl font-bold text-white">The Jurists</span>
              <span className="hidden sm:block text-xs text-gold/80 tracking-widest uppercase -mt-1">Legal Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded">
                Services <ChevronDown className="h-3 w-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded shadow-luxury-lg border border-gold/20 py-1 z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gold/10 hover:text-navy font-medium border-b border-gray-100"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/services/$serviceSlug"
                      params={{ serviceSlug: service.slug }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-navy"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Jurisdictions Dropdown */}
            <div className="relative" onMouseEnter={() => setJurisdictionsOpen(true)} onMouseLeave={() => setJurisdictionsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded">
                Jurisdictions <ChevronDown className="h-3 w-3" />
              </button>
              {jurisdictionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded shadow-luxury-lg border border-gold/20 py-1 z-50">
                  {jurisdictions.map((j) => (
                    <Link
                      key={j.path}
                      to={j.path as '/hyderabad' | '/secunderabad' | '/rangareddy' | '/cyberabad'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-navy"
                    >
                      {j.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="px-3 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 text-sm bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-light border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-sm text-white/80 hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-sm text-white/80 hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$serviceSlug"
                params={{ serviceSlug: service.slug }}
                className="block px-6 py-1.5 text-xs text-white/60 hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <div className="pt-1 border-t border-white/10">
              {jurisdictions.map((j) => (
                <Link
                  key={j.path}
                  to={j.path as '/hyderabad' | '/secunderabad' | '/rangareddy' | '/cyberabad'}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {j.name}
                </Link>
              ))}
            </div>
            <div className="pt-1 border-t border-white/10">
              <Link
                to="/about"
                className="block px-3 py-2 text-sm text-white/80 hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-sm text-white/80 hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm bg-gold text-navy font-semibold rounded mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
