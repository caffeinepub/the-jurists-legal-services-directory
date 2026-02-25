import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, ChevronDown, Scale } from 'lucide-react';

const services = [
  { name: 'Family Law', path: '/services/family-law' },
  { name: 'Corporate Law', path: '/services/corporate-law' },
  { name: 'Criminal Defense', path: '/services/criminal-defense' },
  { name: 'Civil Litigation', path: '/services/civil-litigation' },
  { name: 'Property Law', path: '/services/property-law' },
  { name: 'Documentation Services', path: '/services/documentation-services' },
  { name: 'Tax Law', path: '/services/tax-law' },
  { name: 'IP Law', path: '/services/ip-law' },
  { name: 'Startup Law', path: '/services/startup-law' },
  { name: 'Employment Law', path: '/services/employment-law' },
  { name: 'Contracts & Agreements', path: '/services/contracts-agreements' },
];

const jurisdictions = [
  { name: 'Telangana High Court', path: '/jurisdiction/telangana-high-court' },
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Secunderabad', path: '/secunderabad' },
  { name: 'Rangareddy', path: '/rangareddy' },
  { name: 'Medchal Malkajgiri & Kukatpally', path: '/medchal-malkajgiri-kukatpally' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [jurisdictionsOpen, setJurisdictionsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Scale className="w-7 h-7 text-black" />
            <div>
              <span className="font-serif text-xl font-bold text-black tracking-wide">
                The Jurists
              </span>
              <p className="text-xs text-gray-600 leading-none tracking-widest uppercase">
                Advocates & Consultants
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-black shadow-luxury-lg z-50">
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => {
                        navigate({ to: service.path as any });
                        setServicesOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Jurisdictions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setJurisdictionsOpen(true)}
              onMouseLeave={() => setJurisdictionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide">
                Jurisdictions <ChevronDown className="w-4 h-4" />
              </button>
              {jurisdictionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-black shadow-luxury-lg z-50">
                  {jurisdictions.map((j) => (
                    <button
                      key={j.path}
                      onClick={() => {
                        navigate({ to: j.path as any });
                        setJurisdictionsOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors ${
                        j.name === 'Telangana High Court' ? 'font-semibold border-b border-gray-200' : ''
                      }`}
                    >
                      {j.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-black text-white px-5 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
            >
              Consult Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-black hover:text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-black">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-black hover:text-gray-600 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-black hover:text-gray-600 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                className="flex items-center gap-1 py-2 text-sm font-medium text-black uppercase tracking-wide w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 border-l border-gray-300 ml-2">
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => {
                        navigate({ to: service.path as any });
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                      className="block w-full text-left py-1.5 text-sm text-black hover:text-gray-600"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center gap-1 py-2 text-sm font-medium text-black uppercase tracking-wide w-full"
                onClick={() => setJurisdictionsOpen(!jurisdictionsOpen)}
              >
                Jurisdictions <ChevronDown className={`w-4 h-4 transition-transform ${jurisdictionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {jurisdictionsOpen && (
                <div className="pl-4 space-y-1 border-l border-gray-300 ml-2">
                  {jurisdictions.map((j) => (
                    <button
                      key={j.path}
                      onClick={() => {
                        navigate({ to: j.path as any });
                        setMobileMenuOpen(false);
                        setJurisdictionsOpen(false);
                      }}
                      className={`block w-full text-left py-1.5 text-sm text-black hover:text-gray-600 ${
                        j.name === 'Telangana High Court' ? 'font-semibold' : ''
                      }`}
                    >
                      {j.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="block py-2 text-sm font-medium text-black hover:text-gray-600 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium text-black hover:text-gray-600 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block mt-2 bg-black text-white px-5 py-2 text-sm font-medium uppercase tracking-wide text-center hover:bg-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consult Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
