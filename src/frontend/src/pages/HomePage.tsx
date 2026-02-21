import { Link } from '@tanstack/react-router';
import { Scale, Heart, Building2, Shield, Gavel, Home, FileText, Landmark, Briefcase, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema, generateOrganizationSchema } from '../components/StructuredData';

export default function HomePage() {
  const practiceAreas = [
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Divorce, child custody, matrimonial disputes, and family legal matters',
      href: '/services/family-law',
      image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
      alt: 'Family law consultation services in Hyderabad',
    },
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Company formation, contracts, compliance, and business legal services',
      href: '/services/corporate-law',
      image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
      alt: 'Corporate law attorney meeting with business clients',
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Bail applications, trial defense, appeals, and criminal law representation',
      href: '/services/criminal-defense',
      image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
      alt: 'Criminal defense attorney representing clients in court',
    },
    {
      icon: Gavel,
      title: 'Civil Litigation',
      description: 'Contract disputes, recovery suits, and civil legal proceedings',
      href: '/services/civil-litigation',
      image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
      alt: 'Civil litigation legal documents and case files',
    },
    {
      icon: Home,
      title: 'Property Law',
      description: 'Real estate transactions, property disputes, and land matters',
      href: '/services/property-law',
      image: '/assets/generated/property-law-documents.dim_800x500.jpg',
      alt: 'Property law documentation and real estate legal services',
    },
  ];

  const whyChooseUs = [
    { icon: CheckCircle2, title: 'Expert Legal Team', description: 'Experienced attorneys across all practice areas' },
    { icon: CheckCircle2, title: 'Client-Focused Approach', description: 'Personalized attention to your legal needs' },
    { icon: CheckCircle2, title: 'Proven Track Record', description: '500+ successful cases and satisfied clients' },
    { icon: CheckCircle2, title: 'Multi-Jurisdiction Coverage', description: 'Serving Hyderabad, Secunderabad, Rangareddy, Cyberabad' },
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Premier Legal Services in Hyderabad"
        description="Expert legal services in Hyderabad, Secunderabad, Cyberabad, and Rangareddy. Family law, corporate law, criminal defense, property law specialists."
        canonical="https://thejurists.in/"
        keywords="lawyers Hyderabad, legal services Telangana, family law attorney, corporate lawyer, criminal defense"
      />
      <StructuredData data={[generateLocalBusinessSchema(), generateOrganizationSchema()]} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">Premier Legal Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Expert Legal Solutions in Hyderabad
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive legal services across Hyderabad, Secunderabad, Rangareddy, and Cyberabad. 
                Your trusted partner for family law, corporate law, criminal defense, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-legal-services.dim_1200x600.jpg"
                alt="Premier legal services in Hyderabad - The Jurists law firm"
                className="rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple practice areas to serve all your legal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.href} to={area.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={area.image}
                      alt={area.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All 10 Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose The Jurists</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted legal expertise with a client-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today for a free consultation. Our expert legal team is ready to help you navigate your legal challenges.
            </p>
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
