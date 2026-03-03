import { Clock, Mail, MapPin } from "lucide-react";
import React from "react";
import ContactForm from "../components/ContactForm";
import SEOHead from "../components/SEOHead";
import StructuredData, {
  generateLocalBusinessSchema,
} from "../components/StructuredData";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    lines: ["Hyderabad, Telangana", "India"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["thejuristshyd@gmail.com"],
    link: "mailto:thejuristshyd@gmail.com",
  },
  {
    icon: Clock,
    title: "Enquiries",
    lines: ["Available 24/7", "Enquiries accepted all days including holidays"],
  },
];

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact – The Jurists Hyderabad"
        description="Submit an enquiry to The Jurists. This page is for informational enquiries only and does not constitute legal advice or solicitation."
        keywords="contact lawyers hyderabad, legal enquiry hyderabad, advocates hyderabad contact"
        canonical="https://thejurists.in/contact"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Enquiries
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact & Enquiries
          </h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Use the form below to submit an informational enquiry. This does not
            constitute legal advice or create an attorney-client relationship.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="border border-black p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-black mb-4">
                  <info.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-black mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, i) =>
                  info.link && i === 0 ? (
                    <a
                      key={line}
                      href={info.link}
                      className="block text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer notice before form */}
      <section className="bg-gray-50 pt-10 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-300 bg-white p-4 text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Please note:</strong> Submitting
            this form is an informational enquiry only. It does not constitute
            legal advice, create an attorney-client relationship, or amount to
            solicitation of legal services. As per Bar Council of India Rules,
            advocates are not permitted to solicit work or advertise. Any
            information shared via this form will be treated in confidence.
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-black mb-3">
              Submit an Enquiry
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we will respond to your informational
              enquiry.
            </p>
          </div>
          <div className="border border-black bg-white p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-black overflow-hidden">
            <img
              src="/assets/generated/hyderabad-courthouse.dim_800x500.jpg"
              alt="Hyderabad location"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
