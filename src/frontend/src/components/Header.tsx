import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, Scale, X } from "lucide-react";
import React, { useState } from "react";

const services = [
  { name: "Family Law", path: "/services/family-law" },
  { name: "Corporate Law", path: "/services/corporate-law" },
  { name: "Criminal Defense", path: "/services/criminal-defense" },
  { name: "Civil Litigation", path: "/services/civil-litigation" },
  { name: "Property Law", path: "/services/property-law" },
  { name: "Documentation Services", path: "/services/documentation-services" },
  { name: "Tax Law", path: "/services/tax-law" },
  { name: "IP Law", path: "/services/ip-law" },
  { name: "Startup Law", path: "/services/startup-law" },
  { name: "Employment Law", path: "/services/employment-law" },
  {
    name: "Contracts & Agreements Drafting",
    path: "/services/contracts-agreements-drafting",
  },
];

const jurisdictions = [
  { name: "Telangana High Court", path: "/jurisdiction/telangana-high-court" },
  { name: "Hyderabad", path: "/hyderabad" },
  { name: "Secunderabad", path: "/secunderabad" },
  { name: "Rangareddy", path: "/rangareddy" },
  {
    name: "Medchal Malkajgiri & Kukatpally",
    path: "/medchal-malkajgiri-kukatpally",
  },
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
                Advocates & Legal Consultants
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
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-black shadow-luxury-lg z-50">
                  {services.map((service) => (
                    <button
                      type="button"
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
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
              >
                Jurisdictions <ChevronDown className="w-4 h-4" />
              </button>
              {jurisdictionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-black shadow-luxury-lg z-50">
                  {jurisdictions.map((jurisdiction) => (
                    <button
                      type="button"
                      key={jurisdiction.path}
                      onClick={() => {
                        navigate({ to: jurisdiction.path as any });
                        setJurisdictionsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors"
                    >
                      {jurisdiction.name}
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
              className="text-sm font-medium bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors uppercase tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-black">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-black uppercase tracking-wide border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-black uppercase tracking-wide border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Services
              </p>
              <div className="space-y-1 pl-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path as any}
                    className="block py-1 text-sm text-black hover:text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Jurisdictions
              </p>
              <div className="space-y-1 pl-2">
                {jurisdictions.map((jurisdiction) => (
                  <Link
                    key={jurisdiction.path}
                    to={jurisdiction.path as any}
                    className="block py-1 text-sm text-black hover:text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {jurisdiction.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/blog"
              className="block py-2 text-sm font-medium text-black uppercase tracking-wide border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium text-black uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
