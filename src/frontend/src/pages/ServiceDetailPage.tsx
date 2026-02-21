import { Heart, Building2, Shield, Gavel, Home, FileText, Banknote, Landmark, Rocket, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';
import { Button } from '../components/ui/button';
import { Link } from '@tanstack/react-router';

interface ServiceDetailPageProps {
  service: string;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  // Replace this with your actual Google Forms URL
  const googleFormsUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

  const serviceData: Record<string, any> = {
    'family-law': {
      title: 'Family Law',
      icon: Heart,
      image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
      description: 'Comprehensive family law services to help you navigate sensitive personal matters with care and expertise.',
      longDescription: 'Our family law practice provides compassionate and effective legal representation for all family-related matters. We understand that family issues are deeply personal and emotionally challenging. Our experienced attorneys work diligently to protect your rights and interests while seeking the best possible outcomes for you and your loved ones.',
      services: [
        'Divorce and separation proceedings',
        'Child custody and visitation rights',
        'Matrimonial disputes and settlements',
        'Adoption and guardianship',
        'Maintenance and alimony',
        'Domestic violence protection',
      ],
      benefits: [
        'Compassionate and understanding approach',
        'Experienced in complex family matters',
        'Focus on amicable resolutions',
        'Protection of your rights and interests',
      ],
    },
    'corporate-law': {
      title: 'Corporate Law',
      icon: Building2,
      image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
      description: 'Expert corporate legal services to help your business thrive and stay compliant.',
      longDescription: 'Our corporate law practice provides comprehensive legal support for businesses of all sizes. From startup formation to complex mergers and acquisitions, we offer strategic legal guidance to help your business succeed. We understand the challenges businesses face and provide practical, business-focused legal solutions.',
      services: [
        'Company formation and registration',
        'Corporate compliance and governance',
        'Contract drafting and negotiation',
        'Mergers and acquisitions',
        'Shareholder agreements',
        'Corporate restructuring',
      ],
      benefits: [
        'Business-focused legal strategies',
        'Comprehensive compliance support',
        'Experienced in complex transactions',
        'Proactive risk management',
      ],
    },
    'criminal-defense': {
      title: 'Criminal Defense',
      icon: Shield,
      image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
      description: 'Aggressive criminal defense representation to protect your rights and freedom.',
      longDescription: 'Our criminal defense practice is dedicated to protecting the rights of individuals facing criminal charges. We provide vigorous representation at every stage of the criminal justice process, from investigation through trial and appeals. Our experienced defense attorneys fight tirelessly to achieve the best possible outcome for our clients.',
      services: [
        'Bail applications and hearings',
        'Trial defense representation',
        'Appeals and revisions',
        'White-collar crime defense',
        'Drug offense defense',
        'Assault and violent crime defense',
      ],
      benefits: [
        'Aggressive defense strategies',
        'Experienced trial attorneys',
        '24/7 emergency support',
        'Confidential consultations',
      ],
    },
    'civil-litigation': {
      title: 'Civil Litigation',
      icon: Gavel,
      image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
      description: 'Strategic civil litigation services to resolve disputes and protect your interests.',
      longDescription: 'Our civil litigation practice handles a wide range of disputes in civil courts. We represent clients in contract disputes, property matters, recovery suits, and other civil matters. Our litigation team combines legal expertise with strategic thinking to achieve favorable outcomes for our clients.',
      services: [
        'Contract dispute resolution',
        'Property and land disputes',
        'Recovery and money suits',
        'Injunction applications',
        'Partition suits',
        'Specific performance suits',
      ],
      benefits: [
        'Strategic litigation approach',
        'Experienced court representation',
        'Alternative dispute resolution',
        'Cost-effective solutions',
      ],
    },
    'property-law': {
      title: 'Property Law',
      icon: Home,
      image: '/assets/generated/property-law-documents.dim_800x500.jpg',
      description: 'Complete property law services for residential and commercial real estate matters.',
      longDescription: 'Our property law practice provides comprehensive legal services for all types of real estate transactions and disputes. Whether you are buying, selling, or dealing with property disputes, our experienced attorneys ensure your property rights are protected and transactions are completed smoothly.',
      services: [
        'Property purchase and sale',
        'Title verification and due diligence',
        'Property dispute resolution',
        'Lease and rental agreements',
        'Property registration',
        'Encumbrance certificate services',
      ],
      benefits: [
        'Thorough title verification',
        'Secure transaction handling',
        'Dispute prevention strategies',
        'Expert legal documentation',
      ],
    },
    'documentation-services': {
      title: 'Documentation Services',
      icon: FileText,
      image: '/assets/generated/documentation-services.dim_800x500.jpg',
      description: 'Professional legal documentation and drafting services for all your legal needs.',
      longDescription: 'Our documentation services provide expert legal drafting and documentation for individuals and businesses. We ensure all legal documents are properly prepared, legally sound, and protect your interests. Our attention to detail and legal expertise ensures your documents stand up to scrutiny.',
      services: [
        'Contract drafting and review',
        'Agreement preparation',
        'Notarization services',
        'Affidavit drafting',
        'Power of attorney',
        'Legal notice drafting',
      ],
      benefits: [
        'Legally sound documentation',
        'Quick turnaround time',
        'Affordable pricing',
        'Expert legal review',
      ],
    },
    'tax-law': {
      title: 'Tax Law',
      icon: Banknote,
      image: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
      description: 'Expert tax law services for individuals and businesses to ensure compliance and minimize liability.',
      longDescription: 'Our tax law practice provides comprehensive tax planning, compliance, and dispute resolution services. We help individuals and businesses navigate complex tax laws, minimize tax liability, and resolve disputes with tax authorities. Our tax attorneys stay current with changing tax regulations to provide the best advice.',
      services: [
        'Tax planning and advisory',
        'Income tax compliance',
        'GST registration and compliance',
        'Tax dispute resolution',
        'Tax appeals and litigation',
        'International tax matters',
      ],
      benefits: [
        'Expert tax planning',
        'Compliance assurance',
        'Dispute resolution expertise',
        'Minimize tax liability',
      ],
    },
    'ip-law': {
      title: 'Intellectual Property Law',
      icon: Landmark,
      image: '/assets/generated/ip-law-documents.dim_800x500.jpg',
      description: 'Comprehensive intellectual property protection and enforcement services.',
      longDescription: 'Our intellectual property practice helps individuals and businesses protect their valuable intellectual assets. From trademark registration to patent filing and copyright protection, we provide comprehensive IP services. We also handle IP disputes and enforcement to protect your rights.',
      services: [
        'Trademark registration and protection',
        'Patent filing and prosecution',
        'Copyright registration',
        'IP licensing agreements',
        'IP dispute resolution',
        'Trade secret protection',
      ],
      benefits: [
        'Comprehensive IP protection',
        'Expert registration services',
        'Enforcement and litigation',
        'Strategic IP portfolio management',
      ],
    },
    'startup-law': {
      title: 'Startup Law',
      icon: Rocket,
      image: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
      description: 'Specialized legal services for startups and entrepreneurs to build and grow their businesses.',
      longDescription: 'Our startup law practice provides comprehensive legal support for entrepreneurs and startups at every stage. From company formation to funding rounds and exits, we provide strategic legal guidance to help your startup succeed. We understand the unique challenges startups face and provide practical, cost-effective solutions.',
      services: [
        'Company formation and structuring',
        'Founder agreements',
        'Funding and investment documentation',
        'Employee stock options (ESOPs)',
        'Regulatory compliance',
        'Exit strategy planning',
      ],
      benefits: [
        'Startup-focused expertise',
        'Cost-effective solutions',
        'Strategic legal guidance',
        'Investor-ready documentation',
      ],
    },
    'employment-law': {
      title: 'Employment Law',
      icon: Users,
      image: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
      description: 'Complete employment law services for employers and employees.',
      longDescription: 'Our employment law practice represents both employers and employees in workplace matters. We help businesses maintain compliance with labor laws and handle employment disputes. For employees, we protect workplace rights and pursue remedies for violations. Our goal is to create fair and productive workplaces.',
      services: [
        'Employment contracts and policies',
        'Workplace compliance',
        'Wrongful termination claims',
        'Discrimination and harassment',
        'Wage and hour disputes',
        'Labor law compliance',
      ],
      benefits: [
        'Expert employment law guidance',
        'Compliance assurance',
        'Dispute resolution',
        'Protection of rights',
      ],
    },
  };

  const data = serviceData[service];

  if (!data) {
    return (
      <div className="container py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-luxury mb-12"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Our {data.title} Practice</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Services We Offer</h3>
                <ul className="space-y-3">
                  {data.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.benefits.map((benefit: string, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {benefit}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Get Started Today</h2>
              <p className="text-lg text-muted-foreground">
                Contact us for a consultation about your {data.title.toLowerCase()} needs.
              </p>
            </div>
            <ContactForm googleFormsUrl={googleFormsUrl} />
          </div>
        </div>
      </section>
    </div>
  );
}
