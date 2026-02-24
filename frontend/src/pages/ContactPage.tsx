import { Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="Contact Us"
        description="Contact The Jurists for legal consultation in Hyderabad. Office hours: Mon-Sat 9 AM - 6 PM. Expert legal advice for all practice areas."
        canonical="https://thejurists.in/contact"
        keywords="contact lawyer Hyderabad, legal consultation, law firm contact"
      />
      <StructuredData data={generateLocalBusinessSchema()} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with our legal team. We're here to help with all your legal needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jubilee Hills, Hyderabad, Telangana 500033
                </p>
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
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>The Jurists</strong><br />
                  Jubilee Hills<br />
                  Hyderabad, Telangana 500033<br />
                  India
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
                    title="The Jurists office location in Hyderabad"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
