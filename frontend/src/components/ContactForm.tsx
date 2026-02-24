import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ContactFormProps {
  defaultJurisdiction?: string;
  googleFormsUrl?: string;
}

export default function ContactForm({ googleFormsUrl }: ContactFormProps) {
  // User-provided Google Forms URL
  const formUrl = googleFormsUrl || 'https://docs.google.com/forms/d/e/1FAIpQLScwbjL6QpOP03v9AOZ4RXBWrsCjvRLgrdj86UHzAvUQZKyfUA/viewform?embedded=true';

  return (
    <Card className="w-full border-primary/20 shadow-luxury">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardTitle className="text-2xl">Request a Consultation</CardTitle>
        <CardDescription className="text-base">
          Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <iframe
          src={formUrl}
          width="640"
          height="978"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Form - Request a Consultation"
          className="w-full min-h-[978px]"
        >
          Loading form...
        </iframe>
      </CardContent>
    </Card>
  );
}
