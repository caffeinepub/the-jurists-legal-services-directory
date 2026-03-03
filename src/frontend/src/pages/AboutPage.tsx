import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Globe,
  Search,
  Users,
} from "lucide-react";
import React from "react";
import SEOHead from "../components/SEOHead";
import StructuredData, {
  generateLocalBusinessSchema,
} from "../components/StructuredData";

const values = [
  {
    title: "Accessibility",
    desc: "Making legal services accessible to everyone through dedicated advocacy.",
  },
  {
    title: "Transparency",
    desc: "Clear, honest communication that helps clients understand their legal options.",
  },
  {
    title: "Integrity",
    desc: "Upholding the highest ethical standards in all legal practice.",
  },
  {
    title: "Excellence",
    desc: "Committed to delivering the best possible outcomes for every client.",
  },
];

const platformFeatures = [
  {
    icon: Search,
    title: "Diverse Practice Areas",
    desc: "Comprehensive legal services across family law, corporate law, criminal defense, property law, and more.",
  },
  {
    icon: BookOpen,
    title: "Legal Resources",
    desc: "Informational articles, guides, and blog content on legal topics relevant to India.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    desc: "Dedicated to understanding your legal needs and providing practical, effective guidance.",
  },
  {
    icon: Globe,
    title: "Multi-Jurisdiction",
    desc: "Covering Telangana High Court, Hyderabad, Secunderabad, Rangareddy, and Medchal Malkajgiri courts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About The Jurists – Advocates & Legal Consultants in Hyderabad"
        description="The Jurists is a team of experienced advocates providing comprehensive legal services across Hyderabad and Telangana. Learn about our mission and practice areas."
        keywords="about the jurists, advocates hyderabad, legal consultants hyderabad, legal services telangana"
        canonical="https://thejurists.in/about"
      />
      <StructuredData schema={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            About Us
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            About The Jurists
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            The Jurists is a team of experienced advocates providing
            comprehensive legal services to individuals and businesses across
            Hyderabad and Telangana.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl font-bold text-black mb-6">
                Dedicated Legal Advocacy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Jurists was founded with a clear mission: to provide
                  accessible, high-quality legal services to individuals and
                  businesses in Hyderabad and across Telangana. We believe that
                  everyone deserves skilled legal representation.
                </p>
                <p>
                  Our team of experienced advocates brings deep expertise across
                  a wide range of practice areas. We are committed to
                  understanding each client's unique situation and delivering
                  practical, effective legal solutions.
                </p>
                <p>
                  We are registered and practice in all major courts in the
                  Hyderabad metropolitan area — from the Telangana High Court to
                  district courts in Hyderabad, Secunderabad, Rangareddy, and
                  Medchal Malkajgiri & Kukatpally.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Family Law",
                  "Corporate Law",
                  "Criminal Defense",
                  "Property Law",
                  "Employment Law",
                  "IP Law",
                  "Tax Law",
                  "Startup Law",
                  "Civil Litigation",
                  "Documentation Services",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm text-black"
                  >
                    <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hyderabad-courthouse.dim_800x500.jpg"
                alt="Hyderabad courthouse"
                className="w-full object-cover border border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-bold text-black">
              Our Services
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-black p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 border border-black mb-4">
                  <feature.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Our Principles
            </p>
            <h2 className="font-serif text-3xl font-bold text-black">
              Core Values
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-black p-6">
                <h3 className="font-serif text-lg font-semibold text-black mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Explore Our Services
          </h2>
          <p className="text-gray-400 mb-8">
            Browse our practice areas or submit an enquiry. This website is for
            informational purposes only and does not constitute legal advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              <Search className="w-4 h-4" /> Practice Areas
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Submit an Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
