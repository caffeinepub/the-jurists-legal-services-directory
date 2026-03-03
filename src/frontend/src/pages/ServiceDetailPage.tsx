import { Link, useParams } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";

const serviceData: Record<
  string,
  {
    title: string;
    description: string;
    longDesc: string;
    features: string[];
    img: string;
    keywords: string;
  }
> = {
  "family-law": {
    title: "Family Law",
    description:
      "Information about family law practice including divorce, child custody, adoption, and inheritance.",
    longDesc:
      "Our family law practice covers all aspects of domestic relations. Family matters are deeply personal and require both legal knowledge and careful handling. This page provides information about the family law matters we handle.",
    features: [
      "Divorce & Separation",
      "Child Custody & Support",
      "Adoption Proceedings",
      "Inheritance & Succession",
      "Domestic Violence Protection",
      "Marriage Registration",
    ],
    img: "/assets/generated/family-law-consultation.dim_800x500.jpg",
    keywords:
      "family law hyderabad, divorce lawyer hyderabad, child custody hyderabad",
  },
  "corporate-law": {
    title: "Corporate Law",
    description:
      "Information about corporate legal practice for businesses of all sizes.",
    longDesc:
      "Our corporate law practice covers legal matters for businesses, from incorporation to complex transactions. This page provides information about the corporate law areas we handle, including regulatory matters and corporate governance.",
    features: [
      "Company Incorporation",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Contract Drafting",
      "Regulatory Compliance",
      "Board Advisory",
    ],
    img: "/assets/generated/corporate-law-meeting.dim_800x500.jpg",
    keywords:
      "corporate lawyer hyderabad, company formation hyderabad, business law hyderabad",
  },
  "criminal-defense": {
    title: "Criminal Defense",
    description:
      "Information about criminal defense representation across all Hyderabad courts.",
    longDesc:
      "Our criminal defense practice covers representation for clients facing criminal charges. We handle matters at all stages of the legal process, from bail applications to trial and appeals. This page provides information about the criminal defense matters we handle.",
    features: [
      "Bail Applications",
      "Trial Representation",
      "Appeals",
      "White Collar Crime",
      "Cybercrime Defense",
      "Anticipatory Bail",
    ],
    img: "/assets/generated/criminal-defense-courtroom.dim_800x500.jpg",
    keywords:
      "criminal lawyer hyderabad, criminal defense hyderabad, bail application hyderabad",
  },
  "civil-litigation": {
    title: "Civil Litigation",
    description:
      "Information about civil litigation and dispute representation.",
    longDesc:
      "Our civil litigation practice handles disputes across all civil courts in the Hyderabad jurisdiction. This page provides information about the types of civil matters we handle, including contract disputes, property matters, and consumer cases.",
    features: [
      "Contract Disputes",
      "Tort Claims",
      "Property Disputes",
      "Consumer Cases",
      "Injunctions",
      "Arbitration",
    ],
    img: "/assets/generated/civil-litigation-documents.dim_800x500.jpg",
    keywords:
      "civil litigation hyderabad, civil lawyer hyderabad, dispute resolution hyderabad",
  },
  "property-law": {
    title: "Property Law",
    description:
      "Information about property law practice including transactions, disputes, and documentation.",
    longDesc:
      "Our property law practice covers all aspects of real estate law in Hyderabad. This page provides information about property-related legal matters including title verification, sale deeds, property disputes, and RERA compliance.",
    features: [
      "Title Verification",
      "Sale Deed Drafting",
      "Property Disputes",
      "Encumbrance Certificates",
      "Land Acquisition",
      "RERA Compliance",
    ],
    img: "/assets/generated/property-law-documents.dim_800x500.jpg",
    keywords:
      "property lawyer hyderabad, real estate lawyer hyderabad, property dispute hyderabad",
  },
  "documentation-services": {
    title: "Documentation Services",
    description:
      "Information about legal documentation, drafting, and notarization services.",
    longDesc:
      "Our documentation practice covers preparation of legally sound documents for various needs. This page provides information about the documentation services available, including contract drafting, affidavits, and notarization.",
    features: [
      "Contract Drafting",
      "Affidavit Preparation",
      "Power of Attorney",
      "Notarization",
      "Legal Translations",
      "Agreement Review",
    ],
    img: "/assets/generated/documentation-services.dim_800x500.jpg",
    keywords:
      "legal documentation hyderabad, contract drafting hyderabad, notary hyderabad",
  },
  "tax-law": {
    title: "Tax Law",
    description:
      "Information about tax law practice and compliance matters for individuals and businesses.",
    longDesc:
      "Our tax law practice covers guidance on tax planning, compliance, and dispute matters. This page provides information about the tax law areas we handle, including GST compliance, income tax, and tax dispute resolution.",
    features: [
      "Tax Planning",
      "GST Compliance",
      "Income Tax Returns",
      "Tax Dispute Resolution",
      "Transfer Pricing",
      "Tax Audits",
    ],
    img: "/assets/generated/tax-law-consultation.dim_800x500.jpg",
    keywords:
      "tax lawyer hyderabad, GST consultant hyderabad, income tax hyderabad",
  },
  "ip-law": {
    title: "IP Law",
    description:
      "Information about intellectual property practice and enforcement.",
    longDesc:
      "Our IP law practice covers matters relating to innovations, brands, and creative works. This page provides information about intellectual property matters including registration, enforcement, and licensing.",
    features: [
      "Patent Filing",
      "Trademark Registration",
      "Copyright Protection",
      "IP Litigation",
      "Trade Secrets",
      "Licensing Agreements",
    ],
    img: "/assets/generated/ip-law-documents.dim_800x500.jpg",
    keywords:
      "IP lawyer hyderabad, patent attorney hyderabad, trademark registration hyderabad",
  },
  "startup-law": {
    title: "Startup Law",
    description:
      "Information about legal matters for startups and emerging businesses.",
    longDesc:
      "Our startup law practice covers the legal matters commonly faced by startups. This page provides information about startup-related legal areas including incorporation, founder agreements, investor contracts, and regulatory compliance.",
    features: [
      "Incorporation",
      "Founder Agreements",
      "Investor Contracts",
      "IP Protection",
      "Employment Contracts",
      "Regulatory Compliance",
    ],
    img: "/assets/generated/startup-law-meeting.dim_800x500.jpg",
    keywords:
      "startup lawyer hyderabad, startup legal services hyderabad, company registration hyderabad",
  },
  "employment-law": {
    title: "Employment Law",
    description:
      "Information about employment law practice for employers and employees.",
    longDesc:
      "Our employment law practice covers all aspects of workplace law. This page provides information about employment law matters including contracts, disputes, labor compliance, and industrial relations.",
    features: [
      "Employment Contracts",
      "Wrongful Termination",
      "Workplace Harassment",
      "Labor Compliance",
      "HR Policy Drafting",
      "Industrial Disputes",
    ],
    img: "/assets/generated/employment-law-workplace.dim_800x500.jpg",
    keywords:
      "employment lawyer hyderabad, labor law hyderabad, workplace rights hyderabad",
  },
  "contracts-agreements": {
    title: "Contracts & Agreements",
    description: "Information about contract drafting and review services.",
    longDesc:
      "Our contracts practice covers drafting and review of all types of agreements. This page provides information about the contract and agreement services available, including business contracts, service agreements, and NDAs.",
    features: [
      "Business Contracts",
      "Service Agreements",
      "NDA Drafting",
      "Partnership Deeds",
      "Lease Agreements",
      "Contract Review",
    ],
    img: "/assets/generated/legal-documents-gavel.dim_800x500.jpg",
    keywords:
      "contract drafting hyderabad, agreement drafting hyderabad, legal contracts hyderabad",
  },
  "contracts-agreements-drafting": {
    title: "Contracts & Agreements Drafting",
    description:
      "Professional drafting and review of all types of contracts and agreements, delivered within 3 days.",
    longDesc:
      "The Jurists provides professional contract drafting and review services for all types of agreements. From simple personal agreements to complex commercial contracts for startups and established businesses, our advocates ensure your agreements are legally sound. All contracts are drafted and approved within 3 working days.",
    features: [
      "All Types of Commercial Contracts",
      "Service Agreements & MSAs",
      "Non-Disclosure Agreements (NDA)",
      "Partnership & Shareholder Deeds",
      "Startup & Investor Agreements",
      "Employment Contracts",
      "Lease & Rental Agreements",
      "MOU & Letters of Intent",
      "Vendor & Supplier Contracts",
      "E-commerce & Terms of Service",
      "Franchise Agreements",
      "Loan & Security Agreements",
    ],
    img: "/assets/generated/documentation-services.dim_800x500.jpg",
    keywords:
      "contract drafting hyderabad, agreement drafting hyderabad, NDA drafting, startup contracts hyderabad, commercial contracts",
  },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams({ strict: false }) as {
    serviceSlug: string;
  };
  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-black mb-4">
            Service Not Found
          </h1>
          <Link
            to="/services"
            className="text-black underline hover:text-gray-600"
          >
            View All Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${service.title} – The Jurists Hyderabad`}
        description={service.description}
        keywords={service.keywords}
        canonical={`https://thejurists.in/services/${serviceSlug}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Practice Areas", href: "/services" },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Practice Area
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                Submit an Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src={service.img}
                alt={service.title}
                className="w-full object-cover border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {service.longDesc}
              </p>

              <h3 className="font-serif text-xl font-bold text-black mb-4">
                Areas Covered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 border border-black p-3"
                  >
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-sm text-black font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-black p-6">
                <h3 className="font-serif text-lg font-bold text-black mb-4">
                  Submit an Enquiry
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  For information about {service.title} matters, please use the
                  contact form or email us directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:thejuristshyd@gmail.com"
                    className="flex items-center gap-2 text-sm text-black hover:text-gray-600"
                  >
                    <Mail className="w-4 h-4" />
                    thejuristshyd@gmail.com
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 block w-full bg-black text-white text-center py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
                >
                  Contact Page
                </Link>
              </div>

              <div className="border border-black p-6">
                <h3 className="font-serif text-lg font-bold text-black mb-3">
                  Other Practice Areas
                </h3>
                <ul className="space-y-2">
                  {Object.entries(serviceData)
                    .filter(([slug]) => slug !== serviceSlug)
                    .slice(0, 5)
                    .map(([slug, s]) => (
                      <li key={slug}>
                        <Link
                          to={`/services/${slug}` as any}
                          className="text-sm text-black hover:text-gray-600 flex items-center gap-1"
                        >
                          <ArrowRight className="w-3 h-3" /> {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
