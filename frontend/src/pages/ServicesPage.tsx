import React from 'react';
import { Link } from '@tanstack/react-router';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateOrganizationSchema } from '../components/StructuredData';
import {
  Users,
  Building2,
  Shield,
  Scale,
  Home,
  FileText,
  Calculator,
  Lightbulb,
  Rocket,
  Briefcase,
  ArrowRight,
  FileSignature,
} from 'lucide-react';

const services = [
  {
    slug: 'family-law',
    title: 'Family Law',
    description: 'Compassionate legal support for divorce, child custody, adoption, and matrimonial disputes.',
    icon: Users,
    gradient: 'from-rose-900 via-primary to-primary/80',
    accent: 'bg-rose-900/30',
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    description: 'Comprehensive corporate legal services including company formation, mergers, acquisitions, and compliance.',
    icon: Building2,
    gradient: 'from-primary via-primary/90 to-blue-900',
    accent: 'bg-blue-900/30',
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'Aggressive defense strategies for all criminal matters, from bail applications to trial representation.',
    icon: Shield,
    gradient: 'from-slate-800 via-primary to-primary/80',
    accent: 'bg-slate-800/30',
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Expert representation in civil disputes, contract breaches, property conflicts, and recovery matters.',
    icon: Scale,
    gradient: 'from-primary via-secondary/30 to-primary/90',
    accent: 'bg-secondary/20',
  },
  {
    slug: 'property-law',
    title: 'Property Law',
    description: 'Complete property legal services — sale deeds, title verification, registration, and dispute resolution.',
    icon: Home,
    gradient: 'from-emerald-900 via-primary to-primary/80',
    accent: 'bg-emerald-900/30',
  },
  {
    slug: 'contracts-agreements-drafting',
    title: 'Contracts & Agreements Drafting',
    description:
      'All types of contracts and agreements drafted and legally approved within 3 days. From basic personal contracts to full startup needs — all covered.',
    icon: FileSignature,
    gradient: 'from-amber-900 via-primary to-secondary/40',
    accent: 'bg-amber-900/30',
    badge: '3-Day Turnaround',
  },
  {
    slug: 'documentation-services',
    title: 'Documentation Services',
    description: 'Professional drafting and notarization of legal documents, affidavits, and agreements.',
    icon: FileText,
    gradient: 'from-primary via-primary/80 to-indigo-900',
    accent: 'bg-indigo-900/30',
  },
  {
    slug: 'tax-law',
    title: 'Tax Law',
    description: 'Strategic tax planning, GST compliance, income tax disputes, and representation before tax authorities.',
    icon: Calculator,
    gradient: 'from-teal-900 via-primary to-primary/80',
    accent: 'bg-teal-900/30',
  },
  {
    slug: 'ip-law',
    title: 'Intellectual Property Law',
    description: 'Protection of patents, trademarks, copyrights, and trade secrets for individuals and businesses.',
    icon: Lightbulb,
    gradient: 'from-violet-900 via-primary to-primary/80',
    accent: 'bg-violet-900/30',
  },
  {
    slug: 'startup-law',
    title: 'Startup Law',
    description: 'End-to-end legal support for startups — incorporation, funding agreements, IP protection, and compliance.',
    icon: Rocket,
    gradient: 'from-orange-900 via-primary to-primary/80',
    accent: 'bg-orange-900/30',
  },
  {
    slug: 'employment-law',
    title: 'Employment Law',
    description: 'Protecting employee and employer rights — wrongful termination, labor disputes, and HR compliance.',
    icon: Briefcase,
    gradient: 'from-cyan-900 via-primary to-primary/80',
    accent: 'bg-cyan-900/30',
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Legal Services | The Jurists Hyderabad"
        description="Explore all legal services offered by The Jurists in Hyderabad — property law, contracts drafting, family law, corporate law, criminal defense, and more."
        canonical="https://thejurists.in/services"
        keywords="legal services Hyderabad, lawyer Hyderabad, property law, contracts drafting, family law, corporate law"
      />
      <StructuredData data={generateOrganizationSchema()} id="services-org-schema" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 80px)',
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Practice Areas</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive legal expertise across all major practice areas. Expert advocates serving Hyderabad and
            surrounding regions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: service.slug }}
                  className="group block"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Color Banner */}
                    <div
                      className={`relative h-40 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                    >
                      <div
                        className={`w-20 h-20 ${service.accent} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10`}
                      >
                        <Icon className="w-10 h-10 text-secondary" />
                      </div>
                      {service.badge && (
                        <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.description}</p>
                      <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                        Learn More{' '}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Legal Assistance?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our expert advocates are available 24/7. Contact us today for a consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
          >
            Contact Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
