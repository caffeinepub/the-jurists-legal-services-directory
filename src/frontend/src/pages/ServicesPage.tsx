import { Link } from '@tanstack/react-router';
import { Heart, Building2, Shield, Gavel, Home, FileText, Banknote, Landmark, Rocket, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function ServicesPage() {
  const services = [
    {
      title: 'Family Law',
      description: 'Comprehensive family law services including divorce, child custody, matrimonial disputes, adoption, maintenance, and domestic violence cases.',
      icon: Heart,
      href: '/services/family-law',
      image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
    },
    {
      title: 'Corporate Law',
      description: 'Expert corporate legal services for businesses including company formation, compliance, contracts, mergers & acquisitions, and corporate governance.',
      icon: Building2,
      href: '/services/corporate-law',
      image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
    },
    {
      title: 'Criminal Defense',
      description: 'Aggressive criminal defense representation for all charges including bail applications, trial defense, appeals, and white-collar crime defense.',
      icon: Shield,
      href: '/services/criminal-defense',
      image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
    },
    {
      title: 'Civil Litigation',
      description: 'Expert civil litigation services for property disputes, contract disputes, recovery suits, injunctions, and damages claims.',
      icon: Gavel,
      href: '/services/civil-litigation',
      image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
    },
    {
      title: 'Property Law',
      description: 'Complete real estate legal services including property transactions, title verification, documentation, property disputes, and lease agreements.',
      icon: Home,
      href: '/services/property-law',
      image: '/assets/generated/property-law-documents.dim_800x500.jpg',
    },
    {
      title: 'Documentation Services',
      description: 'Professional legal documentation services including drafting, notarization, affidavits, power of attorney, agreements, and wills.',
      icon: FileText,
      href: '/services/documentation',
      image: '/assets/generated/documentation-services.dim_800x500.jpg',
    },
    {
      title: 'Tax Law',
      description: 'Comprehensive tax law services including GST compliance, income tax planning, tax disputes, and representation before tax authorities.',
      icon: Banknote,
      href: '/services/tax-law',
      image: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Complete IP protection services including trademark registration, patent filing, copyright protection, and IP litigation.',
      icon: Landmark,
      href: '/services/ip-law',
      image: '/assets/generated/ip-law-documents.dim_800x500.jpg',
    },
    {
      title: 'Startup & Business Law',
      description: 'Specialized legal services for startups including business structuring, funding agreements, ESOP, compliance, and contracts.',
      icon: Rocket,
      href: '/services/startup-law',
      image: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
    },
    {
      title: 'Employment & Labor Law',
      description: 'Expert employment law services including employment contracts, workplace disputes, termination matters, and labor compliance.',
      icon: Users,
      href: '/services/employment-law',
      image: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our Legal Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive legal solutions across all practice areas in Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} to={service.href}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full group">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                    </div>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Need Legal Assistance?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today for a free consultation. Our experienced legal team is ready to help you.
            </p>
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
