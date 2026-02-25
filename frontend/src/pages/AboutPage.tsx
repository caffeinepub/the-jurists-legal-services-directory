import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const values = [
  { title: 'Integrity', desc: 'We uphold the highest ethical standards in every case we handle.' },
  { title: 'Excellence', desc: 'Rigorous legal research and preparation for every client matter.' },
  { title: 'Accessibility', desc: 'Legal services available 24/7 across all Hyderabad courts.' },
  { title: 'Client Focus', desc: 'Your goals drive our strategy — personalized attention always.' },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About The Jurists – Advocates in Hyderabad"
        description="Learn about The Jurists, a team of experienced advocates serving Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally courts."
        keywords="about the jurists, hyderabad advocates, legal team hyderabad"
        canonical="https://thejurists.in/about"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">About Us</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            Advocates Committed to Justice
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            The Jurists is a full-service law firm registered across all Hyderabad courts, providing expert legal counsel to individuals and businesses since our founding.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Our Story</p>
              <h2 className="font-serif text-3xl font-bold text-black mb-6">
                Built on Trust, Driven by Results
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Jurists was founded with a singular mission: to make quality legal representation accessible to everyone in the Hyderabad region. Our team of dedicated advocates brings decades of combined experience across diverse practice areas.
                </p>
                <p>
                  We are registered advocates in the Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally courts, giving our clients comprehensive coverage across the entire metropolitan area.
                </p>
                <p>
                  From complex corporate transactions to sensitive family matters, we approach every case with the same level of dedication and professionalism.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Family Law', 'Corporate Law', 'Criminal Defense', 'Property Law', 'Employment Law', 'IP Law', 'Tax Law', 'Startup Law', 'Civil Litigation', 'Documentation Services'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-black">
                    <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hyderabad-courthouse.dim_800x500.jpg"
                alt="Hyderabad courthouse"
                className="w-full object-cover border border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">What We Stand For</p>
            <h2 className="font-serif text-3xl font-bold text-black">Our Core Values</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-black p-6">
                <h3 className="font-serif text-lg font-semibold text-black mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Work With Our Team</h2>
          <p className="text-gray-400 mb-8">
            Get in touch today for a confidential consultation with one of our advocates.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
