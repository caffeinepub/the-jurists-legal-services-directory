import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import React from "react";
import SEOHead from "../components/SEOHead";

const services = [
  {
    name: "Family Law",
    path: "/services/family-law",
    desc: "Divorce, child custody, adoption, and inheritance matters.",
    img: "/assets/generated/family-law-consultation.dim_800x500.jpg",
  },
  {
    name: "Corporate Law",
    path: "/services/corporate-law",
    desc: "Company formation, mergers, acquisitions, compliance, and corporate governance.",
    img: "/assets/generated/corporate-law-meeting.dim_800x500.jpg",
  },
  {
    name: "Criminal Defense",
    path: "/services/criminal-defense",
    desc: "Defense representation for criminal matters across Hyderabad courts.",
    img: "/assets/generated/criminal-defense-courtroom.dim_800x500.jpg",
  },
  {
    name: "Civil Litigation",
    path: "/services/civil-litigation",
    desc: "Resolution of civil disputes through the court system.",
    img: "/assets/generated/civil-litigation-documents.dim_800x500.jpg",
  },
  {
    name: "Property Law",
    path: "/services/property-law",
    desc: "Real estate transactions, property disputes, and documentation.",
    img: "/assets/generated/property-law-documents.dim_800x500.jpg",
  },
  {
    name: "Documentation Services",
    path: "/services/documentation-services",
    desc: "Contract drafting, legal documentation, and paperwork assistance.",
    img: "/assets/generated/documentation-services.dim_800x500.jpg",
  },
  {
    name: "Tax Law",
    path: "/services/tax-law",
    desc: "Tax compliance, planning, and dispute resolution for individuals and businesses.",
    img: "/assets/generated/tax-law-consultation.dim_800x500.jpg",
  },
  {
    name: "IP Law",
    path: "/services/ip-law",
    desc: "Patents, trademarks, copyrights, and intellectual property protection.",
    img: "/assets/generated/ip-law-documents.dim_800x500.jpg",
  },
  {
    name: "Startup Law",
    path: "/services/startup-law",
    desc: "Legal support for startups including incorporation, contracts, and IP.",
    img: "/assets/generated/startup-law-meeting.dim_800x500.jpg",
  },
  {
    name: "Employment Law",
    path: "/services/employment-law",
    desc: "Labor disputes, employment contracts, and workplace compliance.",
    img: "/assets/generated/employment-law-workplace.dim_800x500.jpg",
  },
  {
    name: "Contracts & Agreements Drafting",
    path: "/services/contracts-agreements-drafting",
    desc: "All types of contracts and agreements drafted and approved within 3 days. Covering basic personal agreements to complex startup contracts.",
    img: "/assets/generated/documentation-services.dim_800x500.jpg",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Practice Areas – The Jurists | Advocates & Legal Consultants Hyderabad"
        description="Explore the practice areas covered by The Jurists advocates in Hyderabad. Family law, corporate law, criminal defense, property law, contracts drafting, and more."
        keywords="legal services hyderabad, practice areas hyderabad, family law, corporate law, criminal defense, property law, employment law, contracts drafting hyderabad"
        canonical="https://thejurists.in/services"
      />

      {/* Hero */}
      <section className="bg-black text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Our Expertise
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Practice Areas
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Our advocates provide legal assistance across a wide range of
            practice areas in Hyderabad and Telangana courts. Select a practice
            area below for detailed information.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path as any}
                className="group border border-black cursor-pointer hover:shadow-luxury transition-shadow block no-underline"
                data-ocid={`services.item.${services.indexOf(service) + 1}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-lg font-bold text-black mb-2">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-black group-hover:gap-2 transition-all">
                    More information <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-gray-400 mb-8">
            For information about any of our practice areas, please submit an
            enquiry. This website is for informational purposes only and does
            not constitute legal advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate({ to: "/contact" as any })}
              data-ocid="services.primary_button"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Submit an Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
