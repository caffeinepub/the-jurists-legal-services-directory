import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";

type JurisdictionKey =
  | "Hyderabad"
  | "Secunderabad"
  | "Rangareddy"
  | "MedchalMalkajgiri";

interface JurisdictionPageProps {
  jurisdiction: JurisdictionKey;
}

// All practice areas listed on the site
const ALL_PRACTICE_AREAS = [
  { name: "Corporate Law", path: "/services/corporate-law" },
  { name: "Family Law", path: "/services/family-law" },
  { name: "Criminal Defense", path: "/services/criminal-defense" },
  { name: "Civil Litigation", path: "/services/civil-litigation" },
  { name: "Property Law", path: "/services/property-law" },
  { name: "Employment Law", path: "/services/employment-law" },
  { name: "Tax Law", path: "/services/tax-law" },
  { name: "IP Law", path: "/services/ip-law" },
  { name: "Startup Law", path: "/services/startup-law" },
  { name: "Documentation Services", path: "/services/documentation-services" },
  {
    name: "Contracts & Agreements Drafting",
    path: "/services/contracts-agreements-drafting",
  },
];

const jurisdictionPaths: Record<JurisdictionKey, string> = {
  Hyderabad: "/hyderabad",
  Secunderabad: "/secunderabad",
  Rangareddy: "/rangareddy",
  MedchalMalkajgiri: "/medchal-malkajgiri-kukatpally",
};

const jurisdictionDisplayNames: Record<JurisdictionKey, string> = {
  Hyderabad: "Hyderabad",
  Secunderabad: "Secunderabad",
  Rangareddy: "Rangareddy",
  MedchalMalkajgiri: "Medchal Malkajgiri and Kukatpally Courts",
};

const jurisdictionData: Record<
  JurisdictionKey,
  {
    court: string;
    description: string;
    highlights: string[];
    img: string;
  }
> = {
  Hyderabad: {
    court: "City Civil Court, Hyderabad",
    description:
      "Information about legal practice in Hyderabad, covering matters before the City Civil Court and High Court of Telangana.",
    highlights: [
      "High Court of Telangana",
      "City Civil Court",
      "Family Court",
      "Labour Court",
    ],
    img: "/assets/generated/hyderabad-courthouse.dim_800x500.jpg",
  },
  Secunderabad: {
    court: "Civil Court, Secunderabad",
    description:
      "Information about legal practice in Secunderabad, covering civil and criminal matters before the Secunderabad courts.",
    highlights: [
      "Civil Court",
      "Criminal Court",
      "Consumer Forum",
      "Magistrate Court",
    ],
    img: "/assets/generated/hyderabad-courthouse.dim_800x500.jpg",
  },
  Rangareddy: {
    court: "District Court, Rangareddy",
    description:
      "Information about legal practice in the Rangareddy district, including family law, property disputes, and criminal matters.",
    highlights: [
      "District Court",
      "Family Court",
      "Revenue Court",
      "Fast Track Court",
    ],
    img: "/assets/generated/hyderabad-courthouse.dim_800x500.jpg",
  },
  MedchalMalkajgiri: {
    court: "District Court, Medchal Malkajgiri & Kukatpally",
    description:
      "Information about legal practice in the Medchal Malkajgiri and Kukatpally Courts area, covering technology, startup, and employment law matters in the IT corridor.",
    highlights: [
      "Civil Court",
      "Labour Court",
      "Consumer Forum",
      "Cyber Crime Cell",
    ],
    img: "/assets/generated/hyderabad-courthouse.dim_800x500.jpg",
  },
};

export default function JurisdictionPage({
  jurisdiction,
}: JurisdictionPageProps) {
  const data = jurisdictionData[jurisdiction];
  const slug = jurisdictionPaths[jurisdiction];
  const displayName = jurisdictionDisplayNames[jurisdiction];

  return (
    <>
      <SEOHead
        title={`${displayName} – The Jurists`}
        description={data.description}
        keywords={`lawyers ${displayName.toLowerCase()}, advocates ${displayName.toLowerCase()}, legal services ${displayName.toLowerCase()}`}
        canonical={`https://thejurists.in${slug}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: displayName }]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Jurisdiction
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
                {displayName}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {data.description}
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                {data.court}
              </p>
            </div>
            <div>
              <img
                src={data.img}
                alt={`${displayName} courthouse`}
                className="w-full object-cover border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Court Highlights */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-black mb-6">
            Courts in this Jurisdiction
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.highlights.map((h) => (
              <div key={h} className="border border-black p-4 text-center">
                <p className="text-sm font-medium text-black">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Practice Information
            </p>
            <h2 className="font-serif text-3xl font-bold text-black">
              Areas of Practice
            </h2>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              The following practice areas are covered in the {displayName}{" "}
              jurisdiction. Select a practice area for more information.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_PRACTICE_AREAS.map((area) => (
              <Link
                key={area.path}
                to={area.path as any}
                className="flex items-center justify-between border border-black bg-white p-4 group hover:bg-black hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-black group-hover:text-white flex-shrink-0" />
                  <span className="font-medium text-black group-hover:text-white">
                    {area.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-black group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Jurisdictions */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-black mb-6 text-center">
            Other Jurisdictions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(jurisdictionPaths) as JurisdictionKey[])
              .filter((key) => key !== jurisdiction)
              .map((key) => (
                <Link
                  key={key}
                  to={jurisdictionPaths[key] as any}
                  className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors group"
                >
                  <p className="font-serif font-semibold text-black group-hover:text-white text-sm">
                    {jurisdictionDisplayNames[key]}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Submit an Enquiry
          </h2>
          <p className="text-gray-400 mb-8">
            For information about legal matters in the {displayName}{" "}
            jurisdiction, please use the contact form. This website is for
            informational purposes only and does not constitute legal advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Contact Page <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
