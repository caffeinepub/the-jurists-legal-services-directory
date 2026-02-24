import { Link } from '@tanstack/react-router';
import { Scale, Shield, Users, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const practiceAreas = [
  {
    name: 'Family Law',
    slug: 'family-law',
    description: 'Divorce, custody, adoption, and matrimonial disputes handled with sensitivity.',
    icon: '👨‍👩‍👧',
  },
  {
    name: 'Corporate Law',
    slug: 'corporate-law',
    description: 'Company formation, mergers, acquisitions, and corporate governance.',
    icon: '🏢',
  },
  {
    name: 'Criminal Defense',
    slug: 'criminal-defense',
    description: 'Vigorous defense for all criminal charges with experienced advocates.',
    icon: '⚖️',
  },
  {
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    description: 'Dispute resolution, contract enforcement, and civil court representation.',
    icon: '📋',
  },
  {
    name: 'Property Law',
    slug: 'property-law',
    description: 'Real estate transactions, title disputes, and property documentation.',
    icon: '🏠',
  },
  {
    name: 'Documentation Services',
    slug: 'documentation-services',
    description: 'Legal document drafting, notarization, and attestation services.',
    icon: '📄',
  },
  {
    name: 'Tax Law',
    slug: 'tax-law',
    description: 'Tax planning, compliance, and dispute resolution with tax authorities.',
    icon: '💰',
  },
  {
    name: 'IP Law',
    slug: 'ip-law',
    description: 'Patents, trademarks, copyrights, and intellectual property protection.',
    icon: '💡',
  },
  {
    name: 'Startup Law',
    slug: 'startup-law',
    description: 'Legal support for startups from incorporation to funding rounds.',
    icon: '🚀',
  },
  {
    name: 'Employment Law',
    slug: 'employment-law',
    description: 'Labor disputes, employment contracts, and workplace rights.',
    icon: '👔',
  },
  {
    name: 'Contracts & Agreements',
    slug: 'contracts-agreements',
    description: 'Expert drafting and review of all types of contracts and legal agreements.',
    icon: '✍️',
  },
];

const whyChooseUs = [
  { icon: <Award className="h-6 w-6" />, title: 'Experienced Advocates', desc: 'Over 15 years of combined legal expertise across all practice areas.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Client Confidentiality', desc: 'Your privacy and case details are protected with the highest standards.' },
  { icon: <Users className="h-6 w-6" />, title: 'Dedicated Team', desc: 'A full team of specialists assigned to every case for comprehensive support.' },
  { icon: <Star className="h-6 w-6" />, title: 'Proven Track Record', desc: 'Hundreds of successful cases across Hyderabad and surrounding jurisdictions.' },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="The Jurists – Premier Legal Services in Hyderabad"
        description="Expert legal counsel in Hyderabad for family law, corporate law, criminal defense, property law, and more. Contact The Jurists today."
        keywords="lawyer hyderabad, legal services hyderabad, advocate hyderabad, corporate law, family law, criminal defense"
        canonical="https://thejurists.in/"
      />
      <StructuredData id="home-schema" data={generateLocalBusinessSchema()} />

      {/* Legal Notice Banner */}
      <div className="bg-gold text-navy text-center py-2 px-4 text-xs font-medium">
        ⚖️ Legal Notice: The information on this website is for general informational purposes only and does not constitute legal advice.
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-legal-services.dim_1200x600.jpg"
            alt="Legal services in Hyderabad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8 text-gold" />
              <span className="text-gold font-serif text-lg tracking-wide">The Jurists</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premier Legal Services in{' '}
              <span className="text-gold">Hyderabad</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Expert legal counsel across all major practice areas. Trusted by hundreds of clients across Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors text-base"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded hover:border-gold hover:text-gold transition-colors text-base"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Our Practice Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services covering every aspect of law, delivered by experienced advocates.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                to="/services/$serviceSlug"
                params={{ serviceSlug: area.slug }}
                className="group bg-white rounded-lg p-5 shadow-luxury hover:shadow-luxury-lg border border-border hover:border-gold/40 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                <div className="mt-3 flex items-center gap-1 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Choose The Jurists?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine deep legal expertise with a client-first approach to deliver outcomes that matter. Our advocates are committed to your success.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-2 bg-gold/10 rounded text-gold shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/lawyer-consultation.dim_600x400.jpg"
                alt="Lawyer consultation at The Jurists"
                className="rounded-lg shadow-luxury-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-navy text-white p-4 rounded-lg shadow-luxury">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-semibold text-sm">500+ Cases</p>
                    <p className="text-xs text-white/60">Successfully resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Our experienced advocates are available 24/7 to provide the legal guidance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Contact Us Today <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/30 text-white font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
