import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

type JurisdictionKey = 'Hyderabad' | 'Secunderabad' | 'Rangareddy' | 'MedchalMalkajgiri';

interface JurisdictionPageProps {
  jurisdiction: JurisdictionKey;
}

// All practice areas listed on the site
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

const jurisdictionPaths: Record<JurisdictionKey, string> = {
  Hyderabad: '/hyderabad',
  Secunderabad: '/secunderabad',
  Rangareddy: '/rangareddy',
  MedchalMalkajgiri: '/medchal-malkajgiri-kukatpally',
};

const jurisdictionDisplayNames: Record<JurisdictionKey, string> = {
  Hyderabad: 'Hyderabad',
  Secunderabad: 'Secunderabad',
  Rangareddy: 'Rangareddy',
  MedchalMalkajgiri: 'Medchal Malkajgiri and Kukatpally Courts',
};

const jurisdictionData: Record<JurisdictionKey, {
  court: string;
  description: string;
  highlights: string[];
  img: string;
}> = {
  Hyderabad: {
    court: 'City Civil Court, Hyderabad',
    description: 'Our Hyderabad office serves as the primary hub for legal services in the city, covering all matters before the City Civil Court and High Court of Telangana.',
    highlights: ['High Court of Telangana', 'City Civil Court', 'Family Court', 'Labour Court'],
    img: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
  },
  Secunderabad: {
    court: 'Civil Court, Secunderabad',
    description: 'Our Secunderabad practice handles all civil and criminal matters before the Secunderabad courts, serving the twin city area.',
    highlights: ['Civil Court', 'Criminal Court', 'Consumer Forum', 'Magistrate Court'],
    img: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
  },
  Rangareddy: {
    court: 'District Court, Rangareddy',
    description: 'Our Rangareddy practice covers all legal matters in the Rangareddy district, including family law, property disputes, and criminal defense.',
    highlights: ['District Court', 'Family Court', 'Revenue Court', 'Fast Track Court'],
    img: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
  },
  MedchalMalkajgiri: {
    court: 'District Court, Medchal Malkajgiri & Kukatpally',
    description: 'Our Medchal Malkajgiri and Kukatpally Courts practice specializes in technology, startup, and employment law matters, serving the IT corridor and surrounding areas.',
    highlights: ['Civil Court', 'Labour Court', 'Consumer Forum', 'Cyber Crime Cell'],
    img: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
  },
};

export default function JurisdictionPage({ jurisdiction }: JurisdictionPageProps) {
  const data = jurisdictionData[jurisdiction];
  const slug = jurisdictionPaths[jurisdiction];
  const displayName = jurisdictionDisplayNames[jurisdiction];

  return (
    <>
      <SEOHead
        title={`${displayName} Advocates – The Jurists`}
        description={data.description}
        keywords={`lawyers ${displayName.toLowerCase()}, advocates ${displayName.toLowerCase()}, legal services ${displayName.toLowerCase()}`}
        canonical={`https://thejurists.in${slug}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: displayName },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Jurisdiction</p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
                {displayName}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{data.description}</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">{data.court}</p>
            </div>
            <div>
              <img
                src={data.img}
                alt={`${displayName} courthouse`}
                className="w-full object-cover border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courts & Practice Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Courts */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-black mb-6">Courts We Appear In</h2>
              <div className="space-y-3">
                {data.highlights.map((court) => (
                  <div key={court} className="flex items-center gap-3 border border-black p-4">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-black font-medium">{court}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-black mb-6">
                Areas of Practice
              </h2>
              <div className="space-y-3">
                {ALL_PRACTICE_AREAS.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path as any}
                    className="flex items-center justify-between border border-black p-4 group hover:bg-black hover:text-white transition-colors"
                  >
                    <span className="font-medium text-black group-hover:text-white">{area.name}</span>
                    <ArrowRight className="w-4 h-4 text-black group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Jurisdictions */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-black mb-6 text-center">
            Other Jurisdictions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(jurisdictionData) as JurisdictionKey[])
              .filter((k) => k !== jurisdiction)
              .map((k) => (
                <Link
                  key={k}
                  to={jurisdictionPaths[k] as any}
                  className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors group"
                >
                  <p className="font-serif font-semibold text-black group-hover:text-white text-sm">
                    {jurisdictionDisplayNames[k]}
                  </p>
                </Link>
              ))}
            <Link
              to={'/jurisdiction/telangana-high-court' as any}
              className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors group"
            >
              <p className="font-serif font-semibold text-black group-hover:text-white text-sm">
                Telangana High Court
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Need Legal Help in {displayName}?
          </h2>
          <p className="text-gray-400 mb-8">
            Our advocates are registered in {data.court} and available 24/7.
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
