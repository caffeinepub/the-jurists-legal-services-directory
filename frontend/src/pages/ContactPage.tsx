import { MapPin, Mail, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema } from '../components/StructuredData';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Office Location',
    details: ['Hyderabad, Telangana', 'India'],
    link: undefined as string | undefined,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email Us',
    details: ['thejuristshyd@gmail.com'],
    link: 'mailto:thejuristshyd@gmail.com',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Office Hours',
    details: ['Available 24/7', 'All days including holidays'],
    link: undefined as string | undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact The Jurists – Legal Services in Hyderabad"
        description="Get in touch with The Jurists for expert legal advice in Hyderabad. Available 24/7 for consultations."
        keywords="contact lawyer hyderabad, legal consultation hyderabad, the jurists contact"
        canonical="https://thejurists.in/contact"
      />
      <StructuredData id="contact-schema" data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/legal-documents-gavel.dim_800x500.jpg"
            alt="Contact The Jurists"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-gold">The Jurists</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Reach out to our team for expert legal guidance. We're available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-lg p-6 shadow-luxury border border-border text-center">
                <div className="inline-flex p-3 bg-gold/10 rounded-full text-gold mb-4">{info.icon}</div>
                <h3 className="font-serif font-semibold text-navy mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  info.link ? (
                    <a key={i} href={info.link} className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  )
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-navy mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-luxury border border-border overflow-hidden">
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-navy mb-6 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-luxury border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160040456!2d78.24323045!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Jurists Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
