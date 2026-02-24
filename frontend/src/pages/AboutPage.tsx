import { Scale, Award, Users, Target, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from '@tanstack/react-router';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateOrganizationSchema, generateLocalBusinessSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our legal practices and client relationships.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every case, delivering superior legal solutions and outcomes.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your needs are our priority. We provide personalized attention and dedicated service.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Our team brings deep legal knowledge and years of experience across all practice areas.',
    },
  ];

  const achievements = [
    '500+ successful cases',
    '15+ years of combined experience',
    'Serving 4 major jurisdictions',
    '10+ practice areas covered',
    '24/7 legal support available',
    'Multilingual legal services',
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="About Us"
        description="Learn about The Jurists - Hyderabad's trusted legal firm with expertise in family, corporate, criminal, and property law. Our values: integrity, excellence, client focus."
        canonical="https://thejurists.in/about"
        keywords="about The Jurists, law firm Hyderabad, legal team Telangana"
      />
      <StructuredData data={[generateOrganizationSchema(), generateLocalBusinessSchema()]} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">About The Jurists</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your trusted legal partner across Hyderabad, Secunderabad, Rangareddy, and Cyberabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Jurists was founded with a vision to provide accessible, high-quality legal services across Telangana.
                We combine deep legal expertise with a client-first approach to deliver exceptional results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced lawyers specializes in diverse practice areas, from corporate law and criminal defense
                to family law and property matters. We serve individuals, families, and businesses across Hyderabad,
                Secunderabad, Rangareddy, and Cyberabad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a proven track record of successful cases and satisfied clients, we have established ourselves as
                a trusted name in legal services throughout Telangana.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/lawyer-consultation.dim_600x400.jpg"
                alt="The Jurists legal team in Hyderabad office"
                loading="lazy"
                className="rounded-2xl shadow-lg border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our legal practice and client relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Our Achievements</h2>
              <p className="text-lg text-muted-foreground">
                Building trust through excellence and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-lg font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the difference of working with dedicated legal professionals who put your interests first.
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
