import React from 'react';
import { Link } from '@tanstack/react-router';
import { Scale, Shield, Users, Award, ArrowRight, Clock, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const practiceAreas = [
  { name: 'Family Law', desc: 'Divorce, custody, adoption, and inheritance matters handled with care.', path: '/services/family-law', icon: '⚖' },
  { name: 'Corporate Law', desc: 'Company formation, mergers, acquisitions, and compliance.', path: '/services/corporate-law', icon: '🏛' },
  { name: 'Criminal Defense', desc: 'Vigorous defense for all criminal matters across Hyderabad courts.', path: '/services/criminal-defense', icon: '🛡' },
  { name: 'Property Law', desc: 'Real estate transactions, disputes, and documentation.', path: '/services/property-law', icon: '🏠' },
  { name: 'Employment Law', desc: 'Labor disputes, compliance, and workplace rights.', path: '/services/employment-law', icon: '💼' },
  { name: 'IP Law', desc: 'Patents, trademarks, and intellectual property protection.', path: '/services/ip-law', icon: '💡' },
];

const highlights = [
  { icon: Scale, title: 'Expert Advocates', desc: 'Registered in all Hyderabad courts with years of experience.' },
  { icon: Shield, title: 'Confidential & Trusted', desc: 'Your matters handled with complete discretion and professionalism.' },
  { icon: Users, title: 'Client-First Approach', desc: 'Personalized legal strategies tailored to your unique situation.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Successful outcomes across diverse practice areas and jurisdictions.' },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="The Jurists – Advocates & Legal Consultants in Hyderabad"
        description="Expert legal services in Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally Courts. Family law, corporate law, criminal defense, and more."
        keywords="lawyers hyderabad, advocates hyderabad, legal services hyderabad, family law, corporate law, criminal defense"
        canonical="https://thejurists.in"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-legal-services.dim_1200x600.jpg"
            alt="Legal services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Advocates & Consultants · Hyderabad
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trusted Legal Counsel. Proven Results.
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The Jurists provides expert legal representation across Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally courts. From family matters to corporate law, we stand by your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-black flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <p className="font-serif text-lg sm:text-xl font-bold text-black text-center sm:text-left">
                Send a Legal Notice / Reply to a Legal Notice under 24 hours
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Clock className="w-4 h-4 text-black" />
              <span className="text-xs uppercase tracking-widest font-semibold text-black">Fast · Reliable · Professional</span>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">What We Do</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black">Practice Areas</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path as any}
                className="group border border-black p-6 hover:bg-black hover:text-white transition-colors"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-white text-black">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed">
                  {area.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-black group-hover:text-white">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-black text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Why Us</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black">The Jurists Difference</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-black mb-4">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Coverage</p>
            <h2 className="font-serif text-3xl font-bold text-black">Courts We Practice In</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <Link
              to={'/jurisdiction/telangana-high-court' as any}
              className="border-2 border-black p-6 text-center hover:bg-black hover:text-white transition-colors group sm:col-span-2 lg:col-span-3"
            >
              <p className="font-serif text-xl font-bold text-black group-hover:text-white">Telangana High Court</p>
              <p className="text-xs text-gray-500 group-hover:text-gray-300 mt-1 uppercase tracking-wide">High Court · Writs · Appeals · Constitutional Matters</p>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Hyderabad', path: '/hyderabad' },
              { name: 'Secunderabad', path: '/secunderabad' },
              { name: 'Rangareddy', path: '/rangareddy' },
              { name: 'Medchal Malkajgiri & Kukatpally', path: '/medchal-malkajgiri-kukatpally' },
            ].map((j) => (
              <Link
                key={j.path}
                to={j.path as any}
                className="border border-black p-6 text-center hover:bg-black hover:text-white transition-colors group"
              >
                <p className="font-serif text-base font-semibold text-black group-hover:text-white">{j.name}</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-300 mt-1 uppercase tracking-wide">District Court</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our advocates are available 24/7. Reach out for a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
