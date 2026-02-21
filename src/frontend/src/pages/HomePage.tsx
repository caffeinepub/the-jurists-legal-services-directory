import { Link } from '@tanstack/react-router';
import { Scale, Shield, Users, ArrowRight, CheckCircle2, Heart, FileText, Landmark, Gavel, Building2, Rocket, Banknote, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function HomePage() {
  const practiceAreas = [
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
  ];

  const whyChooseUs = [
    'Experienced lawyers with 15+ years of combined legal expertise',
    'Proven track record of 500+ successful cases across Telangana',
    'Personalized attention and dedicated case management',
    'Transparent and competitive pricing with no hidden costs',
    'Available 24/7 for urgent legal matters and consultations',
    'Multilingual legal support in English, Telugu, Hindi, and Urdu',
  ];

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20">
              <Scale className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Trusted Legal Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Expert Legal Services in{' '}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Telangana
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive legal services covering Hyderabad, Secunderabad, Rangareddy, and Cyberabad. 
              Browse practice areas including corporate, criminal, family, property law, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive legal services across Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.title} to={area.href}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full group">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={area.image}
                      alt={area.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <area.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {area.title}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                    </div>
                    <CardDescription className="leading-relaxed">{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/assets/generated/lawyer-consultation.dim_600x400.jpg"
                alt="Legal Consultation at The Jurists"
                loading="lazy"
                className="rounded-2xl shadow-lg border border-border/50"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose The Jurists?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Jurists combines deep legal expertise with personalized service to deliver exceptional results for clients 
                  across Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
                </p>
              </div>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a free consultation with our legal experts today. We serve clients across Hyderabad, Secunderabad, 
              Rangareddy, and Cyberabad with comprehensive legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
