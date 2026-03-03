import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  FileText,
  HelpCircle,
  Scale,
  Search,
  Shield,
  Users,
} from "lucide-react";
import React from "react";
import SEOHead from "../components/SEOHead";
import StructuredData, {
  generateLocalBusinessSchema,
} from "../components/StructuredData";

const practiceAreas = [
  {
    name: "Family Law",
    desc: "Divorce, custody, adoption, and inheritance matters handled with care.",
    path: "/services/family-law",
    icon: "⚖",
  },
  {
    name: "Corporate Law",
    desc: "Company formation, mergers, acquisitions, and compliance.",
    path: "/services/corporate-law",
    icon: "🏛",
  },
  {
    name: "Criminal Defense",
    desc: "Defense representation for criminal matters across Hyderabad courts.",
    path: "/services/criminal-defense",
    icon: "🛡",
  },
  {
    name: "Property Law",
    desc: "Real estate transactions, disputes, and documentation.",
    path: "/services/property-law",
    icon: "🏠",
  },
  {
    name: "Employment Law",
    desc: "Labor disputes, compliance, and workplace rights.",
    path: "/services/employment-law",
    icon: "💼",
  },
  {
    name: "IP Law",
    desc: "Patents, trademarks, and intellectual property matters.",
    path: "/services/ip-law",
    icon: "💡",
  },
  {
    name: "Contracts & Agreements Drafting",
    desc: "All types of contracts and agreements drafted and approved within 3 days. Basic to startup needs covered.",
    path: "/services/contracts-agreements-drafting",
    icon: "📝",
  },
];

const highlights = [
  {
    icon: Scale,
    title: "Experienced Advocates",
    desc: "Qualified advocates registered across all major Hyderabad courts and Telangana.",
  },
  {
    icon: Shield,
    title: "Trusted Legal Services",
    desc: "Providing reliable legal assistance for individuals and businesses across Telangana.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    desc: "Dedicated to understanding your legal needs and providing clear, practical guidance.",
  },
  {
    icon: Award,
    title: "Diverse Practice Areas",
    desc: "Covering a wide range of practice areas across all major Hyderabad jurisdictions.",
  },
];

const homeFaqs = [
  {
    question: "What is a legal notice?",
    answer:
      "A legal notice is a formal written communication sent by one party to another, informing them of a legal claim, demand, or intention to take legal action. It is typically the first step before filing a lawsuit and gives the recipient an opportunity to respond or resolve the matter.",
  },
  {
    question: "What services does The Jurists offer?",
    answer:
      "The Jurists provides a wide range of legal services including family law, corporate law, criminal defense, property law, employment law, IP law, tax law, startup law, civil litigation, and documentation services across Hyderabad and Telangana courts.",
  },
  {
    question: "Which courts do your advocates practice in?",
    answer:
      "Our advocates are registered and practice in all major courts in the Hyderabad metropolitan area, including the Telangana High Court, Hyderabad District Court, Secunderabad, Rangareddy, and Medchal Malkajgiri & Kukatpally courts.",
  },
  {
    question: "Is the information on this website legal advice?",
    answer:
      "No. All content on The Jurists website is for informational purposes only and does not constitute legal advice, a legal opinion, or solicitation of any kind. For advice specific to your situation, please consult a qualified advocate.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="The Jurists – Advocates & Legal Consultants | Hyderabad"
        description="The Jurists provides comprehensive legal services across Hyderabad and Telangana. Experienced advocates in family law, corporate law, criminal defense, property law, and more."
        keywords="advocates hyderabad, legal services hyderabad, lawyers hyderabad, legal consultants telangana, family law hyderabad, corporate law hyderabad"
        canonical="https://thejurists.in"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />
      <StructuredData schema={faqSchema} id="faq-schema" />

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-legaltech.dim_1400x600.png"
            alt="Legal services Hyderabad"
            className="w-full h-full object-cover opacity-25"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/generated/hero-legal-services.dim_1200x600.jpg";
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Advocates & Legal Consultants · Hyderabad, Telangana
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Experienced Legal Advocates in Hyderabad
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The Jurists provides comprehensive legal services across
              Hyderabad, Secunderabad, Rangareddy, and Telangana courts.
              Experienced advocates for individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                <Search className="w-4 h-4" /> Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                Submit an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Banner */}
      <section className="bg-black text-white py-4 border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight">⚖</span>
              <p className="font-serif text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                Send a Legal Notice / Reply to a Legal Notice — within 24 hours
              </p>
            </div>
            <a
              href="/contact"
              data-ocid="legal_notice.primary_button"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Connect Now
            </a>
          </div>
        </div>
      </section>

      {/* Platform Features Banner */}
      <section className="bg-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-black uppercase tracking-wide">
                Practice Areas
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-black uppercase tracking-wide">
                Legal Notice Services
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-black uppercase tracking-wide">
                Legal Resources & Blog
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Our Expertise
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black">
              Practice Areas
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
              Our advocates provide expert legal assistance across a wide range
              of practice areas.
            </p>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path as any}
                className="group border border-black p-6 hover:bg-black hover:text-white transition-colors"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-white text-black">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed">
                  {area.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-black group-hover:text-white">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-black text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Why The Jurists
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black">
              Our Commitment
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-black mb-4">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-white py-16 border-y border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Legal Services
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
                Comprehensive Legal Assistance in Hyderabad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our experienced advocates provide legal assistance across all
                major practice areas. From family law and corporate matters to
                criminal defense and property disputes, we are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
                >
                  <Search className="w-4 h-4" /> Browse Services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-black text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                >
                  Submit an Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Experienced Advocates",
                  desc: "Qualified professionals across all practice areas",
                },
                {
                  label: "Multiple Practice Areas",
                  desc: "Comprehensive legal coverage",
                },
                {
                  label: "All Major Courts",
                  desc: "Registered in Hyderabad area courts",
                },
                {
                  label: "Client-Focused",
                  desc: "Dedicated to your legal needs",
                },
              ].map((item) => (
                <div key={item.label} className="border border-black p-4">
                  <h4 className="font-serif text-sm font-bold text-black mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Courts
            </p>
            <h2 className="font-serif text-3xl font-bold text-black">
              Courts We Cover
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <Link
              to={"/jurisdiction/telangana-high-court" as any}
              className="border-2 border-black p-6 text-center hover:bg-black hover:text-white transition-colors group sm:col-span-2 lg:col-span-3"
            >
              <p className="font-serif text-xl font-bold text-black group-hover:text-white">
                Telangana High Court
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-300 mt-1 uppercase tracking-wide">
                High Court · Writs · Appeals · Constitutional Matters
              </p>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Hyderabad", path: "/hyderabad" },
              { name: "Secunderabad", path: "/secunderabad" },
              { name: "Rangareddy", path: "/rangareddy" },
              {
                name: "Medchal Malkajgiri & Kukatpally",
                path: "/medchal-malkajgiri-kukatpally",
              },
            ].map((j) => (
              <Link
                key={j.path}
                to={j.path as any}
                className="border border-black p-6 text-center hover:bg-black hover:text-white transition-colors group"
              >
                <p className="font-serif text-base font-semibold text-black group-hover:text-white">
                  {j.name}
                </p>
                <p className="text-xs text-gray-500 group-hover:text-gray-300 mt-1 uppercase tracking-wide">
                  District Court
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Help & Information
            </p>
            <h2 className="font-serif text-3xl font-bold text-black flex items-center justify-center gap-2">
              <HelpCircle className="w-7 h-7" /> Frequently Asked Questions
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {homeFaqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border border-black px-4 bg-white"
              >
                <AccordionTrigger className="font-serif text-base font-semibold text-black text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-black text-black px-6 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              Have More Questions? Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our experienced advocates are here to help. Browse our practice
            areas or submit an enquiry to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              <Search className="w-4 h-4" /> Browse Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Submit an Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
