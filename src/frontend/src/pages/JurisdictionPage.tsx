import { Scale, MapPin, Mail, Heart, FileText, Landmark, Gavel, Building2, Users, Home, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

interface JurisdictionPageProps {
  jurisdiction: 'Hyderabad' | 'Secunderabad' | 'Rangareddy' | 'Cyberabad';
}

export default function JurisdictionPage({ jurisdiction }: JurisdictionPageProps) {
  const jurisdictionData = {
    Hyderabad: {
      description: 'Comprehensive legal services in Hyderabad covering all major practice areas including corporate law, criminal defense, family law, property law, and civil litigation.',
      email: 'hyderabad@thejurists.in',
      practiceAreas: [
        { name: 'Family Law', icon: Heart, description: 'Divorce, custody, matrimonial disputes' },
        { name: 'Corporate Law', icon: Building2, description: 'Company formation, compliance, contracts' },
        { name: 'Criminal Defense', icon: Scale, description: 'Bail, trial defense, appeals' },
        { name: 'Property Law', icon: Home, description: 'Real estate transactions, disputes' },
        { name: 'Civil Litigation', icon: Gavel, description: 'Contract disputes, recovery suits' },
      ],
    },
    Secunderabad: {
      description: 'Expert legal representation in Secunderabad for individuals and businesses across all legal matters including criminal defense, family law, and property disputes.',
      email: 'secunderabad@thejurists.in',
      practiceAreas: [
        { name: 'Criminal Defense', icon: Scale, description: 'Comprehensive criminal law services' },
        { name: 'Family Law', icon: Heart, description: 'Matrimonial and custody matters' },
        { name: 'Property Law', icon: Home, description: 'Property transactions and disputes' },
        { name: 'Documentation', icon: FileText, description: 'Legal documentation services' },
        { name: 'Civil Litigation', icon: Gavel, description: 'Civil dispute resolution' },
      ],
    },
    Rangareddy: {
      description: 'Specialized legal services in Rangareddy district covering family law, property law, civil litigation, and documentation services for individuals and families.',
      email: 'rangareddy@thejurists.in',
      practiceAreas: [
        { name: 'Family Law', icon: Heart, description: 'Complete family law solutions' },
        { name: 'Property Law', icon: Home, description: 'Real estate and land matters' },
        { name: 'Civil Litigation', icon: Gavel, description: 'Property and contract disputes' },
        { name: 'Documentation', icon: FileText, description: 'Notarization and legal drafting' },
        { name: 'Employment Law', icon: Users, description: 'Workplace disputes and compliance' },
      ],
    },
    Cyberabad: {
      description: 'Modern legal services in Cyberabad focusing on corporate law, intellectual property, startup law, employment law, and technology-related legal matters.',
      email: 'cyberabad@thejurists.in',
      practiceAreas: [
        { name: 'Corporate Law', icon: Building2, description: 'Business and corporate services' },
        { name: 'IP Law', icon: Landmark, description: 'Trademark, patent, copyright' },
        { name: 'Startup Law', icon: Scale, description: 'Startup legal advisory' },
        { name: 'Employment Law', icon: Users, description: 'Labor and employment matters' },
        { name: 'Property Law', icon: Home, description: 'Commercial real estate' },
      ],
    },
  };

  const data = jurisdictionData[jurisdiction];

  return (
    <div className="flex flex-col">
      <SEOHead
        title={`Legal Services in ${jurisdiction}`}
        description={data.description}
        canonical={`https://thejurists.in/jurisdiction/${jurisdiction.toLowerCase()}`}
        ogImage="/assets/generated/hyderabad-courthouse.dim_800x500.jpg"
        keywords={`lawyers ${jurisdiction}, legal services ${jurisdiction}, attorney ${jurisdiction}`}
      />
      <StructuredData data={generateLocalBusinessSchema()} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: jurisdiction, href: `/jurisdiction/${jurisdiction.toLowerCase()}` },
              ]}
            />
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">{jurisdiction}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Legal Services in {jurisdiction}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:thejuristshyd@gmail.com" className="text-primary hover:underline">
                  thejuristshyd@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+918008012892" className="text-primary hover:underline">
                  +91-80080-12892
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Jubilee Hills, Hyderabad, Telangana 500033, India
                </p>
                <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407253!2d78.24323209999999!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`The Jurists office location in ${jurisdiction}`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Practice Areas in {jurisdiction}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive legal services tailored for {jurisdiction}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {data.practiceAreas.map((area) => (
              <Card key={area.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{area.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Us for Legal Assistance</h3>
            <ContactForm defaultJurisdiction={jurisdiction} />
          </div>
        </div>
      </section>
    </div>
  );
}
