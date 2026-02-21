import { Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  // Replace this with your actual Google Forms URL
  const googleFormsUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our legal team. We're here to help with all your legal needs.
            </p>
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
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Serving Hyderabad, Secunderabad, Rangareddy, and Cyberabad
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
                <p className="text-muted-foreground">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
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
            <ContactForm googleFormsUrl={googleFormsUrl} />
          </div>
        </div>
      </section>
    </div>
  );
}
