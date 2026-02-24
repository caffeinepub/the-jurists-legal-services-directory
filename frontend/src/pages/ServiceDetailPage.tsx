import { useParams, Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Scale, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const serviceData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  keywords: string;
}> = {
  'family-law': {
    name: 'Family Law',
    description: 'Compassionate legal support for all family matters including divorce, custody, and matrimonial disputes.',
    longDescription: 'Our family law practice provides sensitive and effective legal representation for all family-related matters. We understand the emotional complexity of family disputes and work to achieve the best outcomes for you and your loved ones.',
    image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
    features: ['Divorce & Separation', 'Child Custody & Support', 'Adoption Proceedings', 'Matrimonial Property', 'Domestic Violence Protection', 'Maintenance & Alimony'],
    keywords: 'family law hyderabad, divorce lawyer hyderabad, child custody hyderabad',
  },
  'corporate-law': {
    name: 'Corporate Law',
    description: 'Comprehensive corporate legal services for businesses of all sizes.',
    longDescription: 'Our corporate law team provides end-to-end legal support for businesses, from incorporation to complex mergers and acquisitions. We help companies navigate regulatory requirements and protect their interests.',
    image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
    features: ['Company Incorporation', 'Mergers & Acquisitions', 'Corporate Governance', 'Contract Drafting', 'Regulatory Compliance', 'Board Advisory'],
    keywords: 'corporate lawyer hyderabad, company formation hyderabad, business law hyderabad',
  },
  'criminal-defense': {
    name: 'Criminal Defense',
    description: 'Vigorous criminal defense representation for all types of charges.',
    longDescription: 'Our criminal defense advocates provide aggressive and strategic representation for clients facing criminal charges. We protect your rights at every stage of the legal process.',
    image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
    features: ['Bail Applications', 'Trial Representation', 'Appeals', 'White Collar Crime', 'Cybercrime Defense', 'Anticipatory Bail'],
    keywords: 'criminal lawyer hyderabad, criminal defense hyderabad, bail lawyer hyderabad',
  },
  'civil-litigation': {
    name: 'Civil Litigation',
    description: 'Expert civil litigation services for dispute resolution and court representation.',
    longDescription: 'Our civil litigation team handles all types of civil disputes with strategic expertise. We represent clients in courts across Hyderabad and surrounding jurisdictions.',
    image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
    features: ['Contract Disputes', 'Property Disputes', 'Injunctions', 'Debt Recovery', 'Consumer Disputes', 'Arbitration & Mediation'],
    keywords: 'civil lawyer hyderabad, litigation hyderabad, dispute resolution hyderabad',
  },
  'property-law': {
    name: 'Property Law',
    description: 'Complete property law services for real estate transactions and disputes.',
    longDescription: 'Our property law practice covers all aspects of real estate law, from transactions to disputes. We ensure your property interests are protected with thorough due diligence and expert legal advice.',
    image: '/assets/generated/property-law-documents.dim_800x500.jpg',
    features: ['Property Purchase & Sale', 'Title Verification', 'Property Disputes', 'Landlord-Tenant Issues', 'RERA Compliance', 'Property Documentation'],
    keywords: 'property lawyer hyderabad, real estate lawyer hyderabad, property dispute hyderabad',
  },
  'documentation-services': {
    name: 'Documentation Services',
    description: 'Professional legal document drafting, notarization, and attestation.',
    longDescription: 'Our documentation services team provides comprehensive support for all legal document needs. From drafting to notarization, we ensure your documents are legally sound and properly executed.',
    image: '/assets/generated/documentation-services.dim_800x500.jpg',
    features: ['Legal Document Drafting', 'Notarization', 'Attestation', 'Affidavits', 'Power of Attorney', 'Agreement Drafting'],
    keywords: 'legal documents hyderabad, notary hyderabad, document attestation hyderabad',
  },
  'tax-law': {
    name: 'Tax Law',
    description: 'Expert tax law services for individuals and businesses.',
    longDescription: 'Our tax law practice provides comprehensive tax planning, compliance, and dispute resolution services. We help clients minimize tax liability while ensuring full compliance with tax laws.',
    image: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
    features: ['Tax Planning', 'GST Compliance', 'Income Tax Returns', 'Tax Disputes', 'Transfer Pricing', 'Tax Audits'],
    keywords: 'tax lawyer hyderabad, GST lawyer hyderabad, income tax hyderabad',
  },
  'ip-law': {
    name: 'IP Law',
    description: 'Comprehensive intellectual property protection and enforcement.',
    longDescription: 'Our IP law team provides full-spectrum intellectual property services, from registration to enforcement. We protect your innovations, brands, and creative works.',
    image: '/assets/generated/ip-law-documents.dim_800x500.jpg',
    features: ['Patent Registration', 'Trademark Registration', 'Copyright Protection', 'IP Litigation', 'Trade Secrets', 'IP Licensing'],
    keywords: 'IP lawyer hyderabad, patent lawyer hyderabad, trademark hyderabad',
  },
  'startup-law': {
    name: 'Startup Law',
    description: 'Specialized legal support for startups and emerging businesses.',
    longDescription: 'Our startup law practice provides tailored legal services for early-stage companies and growing businesses. We understand the unique challenges startups face and provide practical, cost-effective legal solutions.',
    image: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
    features: ['Startup Incorporation', 'Founder Agreements', 'Investor Agreements', 'ESOP Structuring', 'Regulatory Compliance', 'Term Sheet Review'],
    keywords: 'startup lawyer hyderabad, startup legal services hyderabad, venture capital lawyer',
  },
  'employment-law': {
    name: 'Employment Law',
    description: 'Comprehensive employment law services for employers and employees.',
    longDescription: 'Our employment law practice covers all aspects of workplace law. We represent both employers and employees in disputes and provide proactive legal advice to prevent workplace issues.',
    image: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
    features: ['Employment Contracts', 'Wrongful Termination', 'Workplace Harassment', 'Labor Compliance', 'HR Policy Drafting', 'Industrial Disputes'],
    keywords: 'employment lawyer hyderabad, labor lawyer hyderabad, workplace law hyderabad',
  },
  'contracts-agreements': {
    name: 'Contracts & Agreements Drafting',
    description: 'Expert drafting and review of all types of contracts and legal agreements.',
    longDescription: 'Our contracts and agreements practice provides meticulous drafting, review, and negotiation of all types of legal agreements. We ensure your contracts are comprehensive, enforceable, and protect your interests.',
    image: '/assets/generated/documentation-services.dim_800x500.jpg',
    features: ['Commercial Contracts', 'Service Agreements', 'NDA & Confidentiality', 'Partnership Agreements', 'Vendor Contracts', 'Contract Review & Negotiation'],
    keywords: 'contract drafting hyderabad, agreement drafting hyderabad, legal contracts hyderabad',
  },
  'contracts-agreements-drafting': {
    name: 'Contracts & Agreements Drafting',
    description: 'Expert drafting and review of all types of contracts and legal agreements.',
    longDescription: 'Our contracts and agreements practice provides meticulous drafting, review, and negotiation of all types of legal agreements. We ensure your contracts are comprehensive, enforceable, and protect your interests.',
    image: '/assets/generated/documentation-services.dim_800x500.jpg',
    features: ['Commercial Contracts', 'Service Agreements', 'NDA & Confidentiality', 'Partnership Agreements', 'Vendor Contracts', 'Contract Review & Negotiation'],
    keywords: 'contract drafting hyderabad, agreement drafting hyderabad, legal contracts hyderabad',
  },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams({ from: '/services/$serviceSlug' });
  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <Scale className="h-12 w-12 text-gold mx-auto mb-4" />
          <h1 className="font-serif text-2xl font-bold text-navy mb-2">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-2 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" /> View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${service.name} – The Jurists Hyderabad`}
        description={service.description}
        keywords={service.keywords}
        canonical={`https://thejurists.in/services/${serviceSlug}`}
      />
      <StructuredData id={`service-${serviceSlug}-schema`} data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-white/60 hover:text-gold text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> All Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-navy mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.longDescription}</p>

              <h2 className="font-serif text-2xl font-bold text-navy mb-4">Our Services Include</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border shadow-luxury">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-sm text-navy font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white rounded-lg p-6 shadow-luxury-lg">
                <h3 className="font-serif text-lg font-bold mb-3">Get Expert Advice</h3>
                <p className="text-white/70 text-sm mb-4">
                  Speak with our {service.name} specialists today. Available 24/7.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors text-sm"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-luxury border border-border">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">Other Practice Areas</h3>
                <ul className="space-y-2">
                  {Object.entries(serviceData)
                    .filter(([slug]) => slug !== serviceSlug && !slug.includes('contracts-agreements-drafting'))
                    .slice(0, 5)
                    .map(([slug, svc]) => (
                      <li key={slug}>
                        <Link
                          to="/services/$serviceSlug"
                          params={{ serviceSlug: slug }}
                          className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1"
                        >
                          <ArrowRight className="h-3 w-3" /> {svc.name}
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
