import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const serviceData: Record<string, {
  title: string;
  description: string;
  longDesc: string;
  features: string[];
  img: string;
  keywords: string;
}> = {
  'family-law': {
    title: 'Family Law',
    description: 'Expert family law services including divorce, child custody, adoption, and inheritance.',
    longDesc: 'Our family law practice handles all aspects of domestic relations with sensitivity and expertise. We understand that family matters are deeply personal and require both legal acumen and compassionate guidance.',
    features: ['Divorce & Separation', 'Child Custody & Support', 'Adoption Proceedings', 'Inheritance & Succession', 'Domestic Violence Protection', 'Marriage Registration'],
    img: '/assets/generated/family-law-consultation.dim_800x500.jpg',
    keywords: 'family law hyderabad, divorce lawyer hyderabad, child custody hyderabad',
  },
  'corporate-law': {
    title: 'Corporate Law',
    description: 'Comprehensive corporate legal services for businesses of all sizes.',
    longDesc: 'Our corporate law team provides end-to-end legal support for businesses, from incorporation to complex M&A transactions. We help companies navigate regulatory requirements and protect their interests.',
    features: ['Company Incorporation', 'Mergers & Acquisitions', 'Corporate Governance', 'Contract Drafting', 'Regulatory Compliance', 'Board Advisory'],
    img: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
    keywords: 'corporate lawyer hyderabad, company formation hyderabad, business law hyderabad',
  },
  'criminal-defense': {
    title: 'Criminal Defense',
    description: 'Vigorous criminal defense representation across all Hyderabad courts.',
    longDesc: 'Our criminal defense advocates provide aggressive representation for clients facing criminal charges. We ensure your rights are protected at every stage of the legal process.',
    features: ['Bail Applications', 'Trial Representation', 'Appeals', 'White Collar Crime', 'Cybercrime Defense', 'Anticipatory Bail'],
    img: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
    keywords: 'criminal lawyer hyderabad, criminal defense hyderabad, bail application hyderabad',
  },
  'civil-litigation': {
    title: 'Civil Litigation',
    description: 'Expert representation in civil disputes and litigation matters.',
    longDesc: 'Our civil litigation team handles complex disputes with strategic precision. We represent clients in all civil courts across the Hyderabad jurisdiction.',
    features: ['Contract Disputes', 'Tort Claims', 'Property Disputes', 'Consumer Cases', 'Injunctions', 'Arbitration'],
    img: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
    keywords: 'civil litigation hyderabad, civil lawyer hyderabad, dispute resolution hyderabad',
  },
  'property-law': {
    title: 'Property Law',
    description: 'Complete property law services including transactions, disputes, and documentation.',
    longDesc: 'Our property law practice covers all aspects of real estate law in Hyderabad. From title verification to dispute resolution, we protect your property interests.',
    features: ['Title Verification', 'Sale Deed Drafting', 'Property Disputes', 'Encumbrance Certificates', 'Land Acquisition', 'RERA Compliance'],
    img: '/assets/generated/property-law-documents.dim_800x500.jpg',
    keywords: 'property lawyer hyderabad, real estate lawyer hyderabad, property dispute hyderabad',
  },
  'documentation-services': {
    title: 'Documentation Services',
    description: 'Professional legal documentation, drafting, and notarization services.',
    longDesc: 'Our documentation services team provides accurate and legally sound document preparation for all your needs. We ensure every document meets legal requirements.',
    features: ['Contract Drafting', 'Affidavit Preparation', 'Power of Attorney', 'Notarization', 'Legal Translations', 'Agreement Review'],
    img: '/assets/generated/documentation-services.dim_800x500.jpg',
    keywords: 'legal documentation hyderabad, contract drafting hyderabad, notary hyderabad',
  },
  'tax-law': {
    title: 'Tax Law',
    description: 'Expert tax law advisory and compliance services for individuals and businesses.',
    longDesc: 'Our tax law specialists provide comprehensive guidance on tax planning, compliance, and dispute resolution. We help clients minimize tax liability while ensuring full legal compliance.',
    features: ['Tax Planning', 'GST Compliance', 'Income Tax Returns', 'Tax Dispute Resolution', 'Transfer Pricing', 'Tax Audits'],
    img: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
    keywords: 'tax lawyer hyderabad, GST consultant hyderabad, income tax hyderabad',
  },
  'ip-law': {
    title: 'IP Law',
    description: 'Comprehensive intellectual property protection and enforcement services.',
    longDesc: 'Our IP law team protects your innovations, brands, and creative works. We handle all aspects of intellectual property from registration to enforcement.',
    features: ['Patent Filing', 'Trademark Registration', 'Copyright Protection', 'IP Litigation', 'Trade Secrets', 'Licensing Agreements'],
    img: '/assets/generated/ip-law-documents.dim_800x500.jpg',
    keywords: 'IP lawyer hyderabad, patent attorney hyderabad, trademark registration hyderabad',
  },
  'startup-law': {
    title: 'Startup Law',
    description: 'Specialized legal services for startups and emerging businesses.',
    longDesc: 'We understand the unique legal challenges faced by startups. Our team provides practical, cost-effective legal solutions to help your startup grow and succeed.',
    features: ['Incorporation', 'Founder Agreements', 'Investor Contracts', 'IP Protection', 'Employment Contracts', 'Regulatory Compliance'],
    img: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
    keywords: 'startup lawyer hyderabad, startup legal services hyderabad, company registration hyderabad',
  },
  'employment-law': {
    title: 'Employment Law',
    description: 'Comprehensive employment law services for employers and employees.',
    longDesc: 'Our employment law practice covers all aspects of workplace law. We represent both employers and employees in disputes and provide proactive compliance advice.',
    features: ['Employment Contracts', 'Wrongful Termination', 'Workplace Harassment', 'Labor Compliance', 'HR Policy Drafting', 'Industrial Disputes'],
    img: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
    keywords: 'employment lawyer hyderabad, labor law hyderabad, workplace rights hyderabad',
  },
  'contracts-agreements': {
    title: 'Contracts & Agreements',
    description: 'Professional drafting and review of all types of contracts and agreements.',
    longDesc: 'Our contracts team provides expert drafting and review services with a 3-day turnaround guarantee. We ensure your agreements are legally sound and protect your interests.',
    features: ['Business Contracts', 'Service Agreements', 'NDA Drafting', 'Partnership Deeds', 'Lease Agreements', 'Contract Review'],
    img: '/assets/generated/legal-documents-gavel.dim_800x500.jpg',
    keywords: 'contract drafting hyderabad, agreement drafting hyderabad, legal contracts hyderabad',
  },
  'contracts-agreements-drafting': {
    title: 'Contracts & Agreements Drafting',
    description: 'Professional contract drafting and review with 3-day delivery.',
    longDesc: 'Our contracts team provides expert drafting and review of all types of commercial and personal agreements. We ensure your contracts are comprehensive, enforceable, and protect your interests — delivered within 3 business days.',
    features: ['Commercial Contracts', 'Service Agreements', 'NDA Drafting', 'Partnership Deeds', 'MOU Drafting', '3-Day Delivery Guarantee'],
    img: '/assets/generated/legal-documents-gavel.dim_800x500.jpg',
    keywords: 'contract drafting hyderabad, agreement drafting, NDA, commercial contracts',
  },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams({ strict: false }) as { serviceSlug: string };
  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-black mb-4">Service Not Found</h1>
          <Link to="/services" className="text-black underline hover:text-gray-600">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${service.title} – The Jurists Hyderabad`}
        description={service.description}
        keywords={service.keywords}
        canonical={`https://thejurists.in/services/${serviceSlug}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Practice Area</p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                Get a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src={service.img}
                alt={service.title}
                className="w-full object-cover border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-black mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{service.longDesc}</p>

              <h3 className="font-serif text-xl font-bold text-black mb-4">What We Cover</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 border border-black p-3">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-sm text-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-black p-6">
                <h3 className="font-serif text-lg font-bold text-black mb-4">Get in Touch</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak with one of our {service.title} specialists today.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:thejuristshyd@gmail.com"
                    className="flex items-center gap-2 text-sm text-black hover:text-gray-600"
                  >
                    <Mail className="w-4 h-4" />
                    thejuristshyd@gmail.com
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 block w-full bg-black text-white text-center py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="border border-black p-6">
                <h3 className="font-serif text-lg font-bold text-black mb-3">Other Services</h3>
                <ul className="space-y-2">
                  {Object.entries(serviceData)
                    .filter(([slug]) => slug !== serviceSlug)
                    .slice(0, 5)
                    .map(([slug, s]) => (
                      <li key={slug}>
                        <Link
                          to={`/services/${slug}` as any}
                          className="text-sm text-black hover:text-gray-600 flex items-center gap-1"
                        >
                          <ArrowRight className="w-3 h-3" /> {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
