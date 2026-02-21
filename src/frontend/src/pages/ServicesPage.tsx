import { Link } from '@tanstack/react-router';
import { Heart, Building2, Shield, Gavel, Home, FileText, Landmark, Briefcase, Users, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema, generateOrganizationSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Comprehensive family law services including divorce, child custody, matrimonial disputes, and family legal matters.',
      href: '/services/family-law',
      image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
      alt: 'Family law attorney consultation for divorce and custody cases',
    },
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Business legal services including company formation, contracts, compliance, mergers, and corporate governance.',
      href: '/services/corporate-law',
      image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
      alt: 'Corporate law services for businesses in Hyderabad',
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Expert criminal defense representation including bail applications, trial defense, appeals, and legal counsel.',
      href: '/services/criminal-defense',
      image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
      alt: 'Criminal defense attorney representing clients in court',
    },
    {
      icon: Gavel,
      title: 'Civil Litigation',
      description: 'Civil dispute resolution including contract disputes, recovery suits, property disputes, and civil proceedings.',
      href: '/services/civil-litigation',
      image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
      alt: 'Civil litigation legal documents and case files',
    },
    {
      icon: Home,
      title: 'Property Law',
      description: 'Real estate legal services including property transactions, title verification, disputes, and land matters.',
      href: '/services/property-law',
      image: '/assets/generated/property-law-documents.dim_800x500.jpg',
      alt: 'Property law documentation and real estate legal services',
    },
    {
      icon: Landmark,
      title: 'IP Law',
      description: 'Intellectual property protection including trademarks, patents, copyrights, and IP litigation services.',
      href: '/services/ip-law',
      image: '/assets/generated/ip-law-documents.dim_800x500.jpg',
      alt: 'Intellectual property law and patent services',
    },
    {
      icon: Calculator,
      title: 'Tax Law',
      description: 'Tax advisory and compliance services including tax planning, disputes, GST, and income tax matters.',
      href: '/services/tax-law',
      image: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
      alt: 'Tax law consultation and advisory services',
    },
    {
      icon: Users,
      title: 'Employment Law',
      description: 'Workplace legal services including labor disputes, employment contracts, compliance, and HR matters.',
      href: '/services/employment-law',
      image: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
      alt: 'Employment law services for workplace disputes',
    },
    {
      icon: Briefcase,
      title: 'Startup Law',
      description: 'Legal services for startups including business formation, funding, contracts, and regulatory compliance.',
      href: '/services/startup-law',
      image: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
      alt: 'Startup legal services and business formation',
    },
    {
      icon: FileText,
      title: 'Documentation Services',
      description: 'Legal documentation including notarization, affidavits, agreements, and document drafting services.',
      href: '/services/documentation-services',
      image: '/assets/generated/documentation-services.dim_800x500.jpg',
      alt: 'Legal documentation and notary services',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Legal Services"
        description="Comprehensive legal services including family law, corporate law, criminal defense, civil litigation, property law, IP law, and more in Hyderabad."
        canonical="https://thejurists.in/services"
        keywords="legal services Hyderabad, law firm services, attorney services Telangana"
      />
      <StructuredData data={[generateLocalBusinessSchema(), generateOrganizationSchema()]} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Legal Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive legal expertise across 10 major practice areas to serve all your legal needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.href} to={service.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
