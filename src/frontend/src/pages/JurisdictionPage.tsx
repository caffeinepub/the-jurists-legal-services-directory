import { Scale, MapPin, Mail, Heart, FileText, Landmark, Gavel, Building2, Users, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';

interface JurisdictionPageProps {
  jurisdiction: 'Hyderabad' | 'Secunderabad' | 'Rangareddy' | 'Cyberabad';
}

export default function JurisdictionPage({ jurisdiction }: JurisdictionPageProps) {
  // Replace this with your actual Google Forms URL
  const googleFormsUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

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
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
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
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${data.email}`} className="text-lg font-medium text-primary hover:underline">
                  {data.email}
                </a>
              </div>
            </CardContent>
          </Card>
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
            <ContactForm googleFormsUrl={googleFormsUrl} defaultJurisdiction={jurisdiction} />
          </div>
        </div>
      </section>
    </div>
  );
}
