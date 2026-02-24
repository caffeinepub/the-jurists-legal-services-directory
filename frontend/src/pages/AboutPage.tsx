import { Link } from '@tanstack/react-router';
import { Scale, Award, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';

const team = [
  {
    name: 'Senior Advocate',
    role: 'Founding Partner',
    specialization: 'Corporate & Commercial Law',
    experience: '20+ years',
  },
  {
    name: 'Principal Advocate',
    role: 'Managing Partner',
    specialization: 'Criminal Defense & Civil Litigation',
    experience: '15+ years',
  },
  {
    name: 'Associate Advocate',
    role: 'Senior Associate',
    specialization: 'Family Law & Property',
    experience: '10+ years',
  },
];

const values = [
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'Justice First',
    desc: 'We are committed to upholding justice and the rule of law in every case we handle.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Integrity',
    desc: 'Unwavering ethical standards guide every decision and action we take on your behalf.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Client Focus',
    desc: 'Your interests are our priority. We listen, advise, and advocate with your goals in mind.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    desc: 'We pursue the highest standards of legal practice and continuously improve our expertise.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About The Jurists – Hyderabad's Premier Legal Firm"
        description="Learn about The Jurists, Hyderabad's trusted legal firm with over 15 years of experience across all major practice areas."
        keywords="about the jurists, hyderabad law firm, legal advocates hyderabad, experienced lawyers"
        canonical="https://thejurists.in/about"
      />
      <StructuredData id="about-schema" data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/legal-documents-gavel.dim_800x500.jpg"
            alt="The Jurists law firm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-gold">The Jurists</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A premier legal firm in Hyderabad dedicated to providing exceptional legal services with integrity, expertise, and a client-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Jurists was founded with a singular vision: to make quality legal representation accessible to individuals and businesses across Hyderabad and the surrounding regions.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we have built a reputation for excellence, handling hundreds of cases across family law, corporate law, criminal defense, property disputes, and more.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of experienced advocates brings deep expertise and a commitment to achieving the best possible outcomes for every client we serve.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '500+', label: 'Cases Won' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '4', label: 'Jurisdictions' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-lg shadow-luxury border border-border">
                    <p className="font-serif text-2xl font-bold text-gold">{stat.number}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/lawyer-consultation.dim_600x400.jpg"
                alt="Legal consultation at The Jurists"
                className="rounded-lg shadow-luxury-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide our practice and define our commitment to clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-cream rounded-lg border border-border shadow-luxury text-center">
                <div className="inline-flex p-3 bg-gold/10 rounded-full text-gold mb-4">{value.icon}</div>
                <h3 className="font-serif font-semibold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Legal Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Experienced advocates dedicated to your legal success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg p-6 shadow-luxury border border-border text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-serif font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{member.specialization}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-gold" />
                  <span>{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 mb-8">
            Contact our team today for a consultation and let us help you navigate your legal challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
