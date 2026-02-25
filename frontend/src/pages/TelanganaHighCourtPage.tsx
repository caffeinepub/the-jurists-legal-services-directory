import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Star, Gavel, Scale, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const ALL_PRACTICE_AREAS = [
  { name: 'Corporate Law', path: '/services/corporate-law' },
  { name: 'Family Law', path: '/services/family-law' },
  { name: 'Criminal Defense', path: '/services/criminal-defense' },
  { name: 'Civil Litigation', path: '/services/civil-litigation' },
  { name: 'Property Law', path: '/services/property-law' },
  { name: 'Employment Law', path: '/services/employment-law' },
  { name: 'Tax Law', path: '/services/tax-law' },
  { name: 'IP Law', path: '/services/ip-law' },
  { name: 'Startup Law', path: '/services/startup-law' },
  { name: 'Documentation Services', path: '/services/documentation-services' },
];

const highCourtMatters = [
  { icon: Gavel, title: 'Writ Petitions', desc: 'Filing and arguing writ petitions under Articles 226 and 227 of the Constitution for enforcement of fundamental rights.' },
  { icon: Scale, title: 'Civil Appeals', desc: 'Representing clients in civil appeals challenging lower court decisions before the High Court bench.' },
  { icon: BookOpen, title: 'Criminal Appeals', desc: 'Handling criminal appeals, revisions, and bail applications before the High Court.' },
  { icon: Star, title: 'Constitutional Matters', desc: 'Challenging unconstitutional laws and government actions through constitutional litigation.' },
];

const otherJurisdictions = [
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Secunderabad', path: '/secunderabad' },
  { name: 'Rangareddy', path: '/rangareddy' },
  { name: 'Medchal Malkajgiri & Kukatpally', path: '/medchal-malkajgiri-kukatpally' },
];

export default function TelanganaHighCourtPage() {
  return (
    <>
      <SEOHead
        title="Telangana High Court Advocates – The Jurists"
        description="The Jurists practises at the Telangana High Court, handling writ petitions, civil and criminal appeals, constitutional matters, and more. Expert High Court advocates in Hyderabad."
        keywords="telangana high court advocates, high court lawyers hyderabad, writ petition hyderabad, high court appeals telangana"
        canonical="https://thejurists.in/jurisdiction/telangana-high-court"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Jurisdictions' },
              { label: 'Telangana High Court' },
            ]}
          />
        </div>
      </div>

      {/* Special Banner – Practising at Telangana High Court */}
      <section className="bg-black text-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          <div className="border-2 border-white p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-white" />
                <Scale className="w-8 h-8 text-white" />
                <div className="w-12 h-px bg-white" />
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                High Court Practice
              </p>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Practising at<br />Telangana High Court
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                The Jurists is privileged to practise before the Hon'ble High Court of Telangana at Hyderabad. Our advocates handle complex constitutional matters, writs, appeals, and revisions with the highest level of legal expertise and dedication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
                >
                  Consult Our Advocates <ArrowRight className="w-4 h-4" />
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
        </div>

        {/* Hero continuation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="border border-gray-700 p-6">
              <p className="font-serif text-3xl font-bold text-white mb-2">HC</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">High Court Practice</p>
            </div>
            <div className="border border-gray-700 p-6">
              <p className="font-serif text-3xl font-bold text-white mb-2">24/7</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Advocate Availability</p>
            </div>
            <div className="border border-gray-700 p-6">
              <p className="font-serif text-3xl font-bold text-white mb-2">10+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Practice Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* High Court Matters */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">What We Handle</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black">High Court Matters</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highCourtMatters.map((matter) => (
              <div key={matter.title} className="border border-black p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-black mb-4">
                  <matter.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-black mb-3">{matter.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{matter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Comprehensive Coverage</p>
            <h2 className="font-serif text-3xl font-bold text-black">Areas of Practice</h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Our High Court practice spans all major areas of law. We represent clients before the Telangana High Court across the following practice areas:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_PRACTICE_AREAS.map((area) => (
              <Link
                key={area.path}
                to={area.path as any}
                className="flex items-center justify-between border border-black bg-white p-4 group hover:bg-black hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-black group-hover:text-white flex-shrink-0" />
                  <span className="font-medium text-black group-hover:text-white">{area.name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-black group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why High Court */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Our Expertise</p>
              <h2 className="font-serif text-3xl font-bold text-black mb-6">
                Why Choose The Jurists for High Court Matters?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Telangana High Court is the apex court for the state, exercising original, appellate, and supervisory jurisdiction. Appearing before the High Court requires not only deep legal knowledge but also the ability to craft compelling arguments on complex points of law.
                </p>
                <p>
                  Our advocates have extensive experience in High Court litigation, having successfully argued writ petitions, appeals, and constitutional matters. We understand the procedural nuances and the high standards expected by the Hon'ble Court.
                </p>
                <p>
                  Whether you need to challenge a government order, appeal a lower court decision, or seek urgent interim relief, The Jurists is equipped to represent you effectively at the highest level.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Writ Petitions (Article 226 & 227)',
                  'Civil & Criminal Appeals',
                  'Bail Applications & Anticipatory Bail',
                  'Constitutional Challenges',
                  'Contempt Proceedings',
                  'Revision Petitions',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-black">
                    <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/hyderabad-courthouse.dim_800x500.jpg"
                alt="Telangana High Court"
                className="w-full object-cover border border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Jurisdictions */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-black mb-6 text-center">
            District Court Jurisdictions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherJurisdictions.map((j) => (
              <Link
                key={j.path}
                to={j.path as any}
                className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors group"
              >
                <p className="font-serif font-semibold text-black group-hover:text-white text-sm">
                  {j.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Need Representation at the Telangana High Court?
          </h2>
          <p className="text-gray-400 mb-8">
            Our experienced advocates are available 24/7 for High Court matters. Contact us for a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
