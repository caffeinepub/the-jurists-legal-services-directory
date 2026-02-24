import { Link } from '@tanstack/react-router';
import { MapPin, Scale, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

type JurisdictionName = 'Hyderabad' | 'Secunderabad' | 'Rangareddy' | 'Cyberabad';

interface JurisdictionPageProps {
  jurisdiction: JurisdictionName;
}

const jurisdictionData: Record<JurisdictionName, {
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  keywords: string;
}> = {
  Hyderabad: {
    slug: 'hyderabad',
    description: "Premier legal services in Hyderabad – the heart of Telangana's legal landscape.",
    longDescription: "Hyderabad is the capital of Telangana and one of India's major legal hubs. Our Hyderabad practice covers all courts including the High Court of Telangana, City Civil Courts, and specialized tribunals.",
    image: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
    highlights: ['High Court of Telangana', 'City Civil Courts', 'District Courts', 'Consumer Forums', 'Labour Tribunals', 'RERA Hyderabad'],
    keywords: 'lawyer hyderabad, advocate hyderabad, legal services hyderabad, high court hyderabad',
  },
  Secunderabad: {
    slug: 'secunderabad',
    description: 'Expert legal representation across all courts in Secunderabad.',
    longDescription: 'Secunderabad, the twin city of Hyderabad, has its own distinct legal landscape. Our Secunderabad practice provides comprehensive legal services across all local courts and tribunals.',
    image: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
    highlights: ['Secunderabad Courts', 'Civil Courts', 'Criminal Courts', 'Consumer Forums', 'Revenue Courts', 'Family Courts'],
    keywords: 'lawyer secunderabad, advocate secunderabad, legal services secunderabad',
  },
  Rangareddy: {
    slug: 'rangareddy',
    description: 'Comprehensive legal services covering all courts in Rangareddy district.',
    longDescription: 'Rangareddy district encompasses a large area around Hyderabad with its own court system. Our Rangareddy practice handles all matters in district courts, revenue courts, and specialized tribunals.',
    image: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
    highlights: ['Rangareddy District Courts', 'Revenue Courts', 'Civil Courts', 'Criminal Courts', 'Family Courts', 'Consumer Forums'],
    keywords: 'lawyer rangareddy, advocate rangareddy, legal services rangareddy',
  },
  Cyberabad: {
    slug: 'cyberabad',
    description: "Specialized legal services for Cyberabad's tech-driven business environment.",
    longDescription: "Cyberabad is home to Hyderabad's IT corridor and a thriving startup ecosystem. Our Cyberabad practice specializes in technology law, startup legal services, IP protection, and corporate law for the tech sector.",
    image: '/assets/generated/hyderabad-courthouse.dim_800x500.jpg',
    highlights: ['IT & Technology Law', 'Startup Legal Services', 'IP Protection', 'Corporate Law', 'Employment Law', 'Cyberabad Courts'],
    keywords: 'lawyer cyberabad, advocate cyberabad, IT lawyer hyderabad, startup lawyer cyberabad',
  },
};

const otherJurisdictions: { name: JurisdictionName; path: string }[] = [
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Secunderabad', path: '/secunderabad' },
  { name: 'Rangareddy', path: '/rangareddy' },
  { name: 'Cyberabad', path: '/cyberabad' },
];

export default function JurisdictionPage({ jurisdiction }: JurisdictionPageProps) {
  const data = jurisdictionData[jurisdiction];

  return (
    <>
      <SEOHead
        title={`Legal Services in ${jurisdiction} – The Jurists`}
        description={data.description}
        keywords={data.keywords}
        canonical={`https://thejurists.in/${data.slug}`}
      />
      <StructuredData id={`jurisdiction-${data.slug}-schema`} data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={`Legal services in ${jurisdiction}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Serving {jurisdiction}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Services in <span className="text-gold">{jurisdiction}</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-navy mb-4">
                Our {jurisdiction} Practice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{data.longDescription}</p>

              <h2 className="font-serif text-2xl font-bold text-navy mb-4">Courts & Tribunals We Cover</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border shadow-luxury">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-sm text-navy font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white rounded-lg p-6 shadow-luxury-lg">
                <h3 className="font-serif text-lg font-bold mb-3">
                  Need Legal Help in {jurisdiction}?
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Our advocates are available 24/7 to assist you with any legal matter.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors text-sm"
                >
                  Get Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-luxury border border-border">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">Other Jurisdictions</h3>
                <ul className="space-y-2">
                  {otherJurisdictions
                    .filter((j) => j.name !== jurisdiction)
                    .map((j) => (
                      <li key={j.path}>
                        <Link
                          to={j.path as '/hyderabad' | '/secunderabad' | '/rangareddy' | '/cyberabad'}
                          className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1"
                        >
                          <MapPin className="h-3 w-3" /> {j.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-luxury border border-border">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">Contact Us</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-gold shrink-0" />
                    Available 24/7
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold shrink-0" />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
