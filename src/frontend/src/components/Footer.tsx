import { Link } from "@tanstack/react-router";
import { Clock, Heart, Mail, MapPin, Scale } from "lucide-react";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "thejurists",
  );

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-white" />
              <div>
                <span className="font-serif text-xl font-bold text-white">
                  The Jurists
                </span>
                <p className="text-xs text-gray-500 leading-none tracking-widest uppercase mt-0.5">
                  Advocates & Legal Consultants
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Experienced advocates providing comprehensive legal services
              across Hyderabad and Telangana.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <a
                  href="mailto:thejuristshyd@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  thejuristshyd@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span>Available 24/7 for enquiries</span>
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
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Practice Areas", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
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
                { name: "Family Law", path: "/services/family-law" },
                { name: "Corporate Law", path: "/services/corporate-law" },
                {
                  name: "Criminal Defense",
                  path: "/services/criminal-defense",
                },
                { name: "Property Law", path: "/services/property-law" },
                { name: "Employment Law", path: "/services/employment-law" },
                { name: "IP Law", path: "/services/ip-law" },
                { name: "Tax Law", path: "/services/tax-law" },
                { name: "Startup Law", path: "/services/startup-law" },
                {
                  name: "Civil Litigation",
                  path: "/services/civil-litigation",
                },
                {
                  name: "Documentation Services",
                  path: "/services/documentation-services",
                },
                {
                  name: "Contracts & Agreements Drafting",
                  path: "/services/contracts-agreements-drafting",
                },
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
                {
                  name: "Telangana High Court",
                  path: "/jurisdiction/telangana-high-court",
                },
                { name: "Hyderabad", path: "/hyderabad" },
                { name: "Secunderabad", path: "/secunderabad" },
                { name: "Rangareddy", path: "/rangareddy" },
                {
                  name: "Medchal Malkajgiri & Kukatpally",
                  path: "/medchal-malkajgiri-kukatpally",
                },
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

        {/* Bar Council of India Disclaimer */}
        <div className="mt-10 border border-gray-700 p-5 bg-gray-900">
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="font-bold text-gray-200 uppercase tracking-wide">
              Bar Council of India Disclaimer:{" "}
            </span>
            This website is published solely for{" "}
            <strong className="text-gray-200">informational purposes</strong>{" "}
            and does <strong className="text-gray-200">not</strong> constitute
            legal advice, a legal opinion, or an advertisement or solicitation
            of any kind. No attorney-client relationship is formed by accessing
            or using this website. The content on this website should not be
            relied upon as a substitute for professional legal advice tailored
            to your specific circumstances. As per the Rules of the Bar Council
            of India, advocates are not permitted to solicit work or advertise.
            By accessing this website, you confirm that you are seeking
            information of your own accord and that there has been no form of
            solicitation, advertisement, or inducement by The Jurists or its
            advocates.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} The Jurists. All rights reserved. For informational
            purposes only.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-gray-400 fill-gray-400" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
