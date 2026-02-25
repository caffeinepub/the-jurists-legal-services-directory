import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const services = [
  {
    name: 'Family Law',
    path: '/services/family-law',
    desc: 'Divorce, child custody, adoption, and inheritance matters handled with sensitivity and expertise.',
    img: '/assets/generated/family-law-consultation.dim_800x500.jpg',
  },
  {
    name: 'Corporate Law',
    path: '/services/corporate-law',
    desc: 'Company formation, mergers, acquisitions, compliance, and corporate governance.',
    img: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
  },
  {
    name: 'Criminal Defense',
    path: '/services/criminal-defense',
    desc: 'Vigorous defense for all criminal matters across Hyderabad courts.',
    img: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
  },
  {
    name: 'Civil Litigation',
    path: '/services/civil-litigation',
    desc: 'Representation in civil disputes, contract breaches, and tort claims.',
    img: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
  },
  {
    name: 'Property Law',
    path: '/services/property-law',
    desc: 'Real estate transactions, property disputes, title verification, and documentation.',
    img: '/assets/generated/property-law-documents.dim_800x500.jpg',
  },
  {
    name: 'Documentation Services',
    path: '/services/documentation-services',
    desc: 'Contract drafting, legal documentation, and notarization services.',
    img: '/assets/generated/documentation-services.dim_800x500.jpg',
  },
  {
    name: 'Tax Law',
    path: '/services/tax-law',
    desc: 'Tax planning, compliance, and dispute resolution for individuals and businesses.',
    img: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
  },
  {
    name: 'IP Law',
    path: '/services/ip-law',
    desc: 'Patents, trademarks, copyrights, and intellectual property protection.',
    img: '/assets/generated/ip-law-documents.dim_800x500.jpg',
  },
  {
    name: 'Startup Law',
    path: '/services/startup-law',
    desc: 'Legal support for startups: incorporation, funding, IP, and compliance.',
    img: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
  },
  {
    name: 'Employment Law',
    path: '/services/employment-law',
    desc: 'Labor disputes, employment contracts, workplace rights, and HR compliance.',
    img: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
  },
  {
    name: 'Contracts & Agreements',
    path: '/services/contracts-agreements',
    desc: 'Professional drafting and review of all types of contracts and agreements.',
    img: '/assets/generated/legal-documents-gavel.dim_800x500.jpg',
    badge: '3-Day Turnaround',
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Legal Services – The Jurists Hyderabad"
        description="Comprehensive legal services in Hyderabad including family law, corporate law, criminal defense, property law, and more."
        keywords="legal services hyderabad, advocates hyderabad, family law, corporate law, criminal defense"
        canonical="https://thejurists.in/services"
      />

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">What We Offer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Legal Services
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Comprehensive legal representation across all major practice areas, serving clients throughout the Hyderabad metropolitan area.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.path}
                className="border border-black group cursor-pointer hover:shadow-luxury-lg transition-shadow"
                onClick={() => navigate({ to: service.path as any })}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 uppercase tracking-wide">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-lg font-semibold text-black mb-2">{service.name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-black group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
