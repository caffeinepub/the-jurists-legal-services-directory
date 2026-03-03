import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle } from "lucide-react";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

const faqs = [
  {
    question: "What is a legal notice?",
    answer:
      "A legal notice is a formal written communication sent by one party to another, informing them of a legal claim, demand, or intention to take legal action. It is typically the first step before filing a lawsuit and gives the recipient an opportunity to respond or resolve the matter without going to court.",
  },
  {
    question: "What types of legal services does The Jurists offer?",
    answer:
      "The Jurists offers a comprehensive range of legal services including family law (divorce, custody, adoption), corporate law (company formation, contracts, compliance), criminal defense, civil litigation, property law, documentation services, tax law, IP law, startup law, and employment law.",
  },
  {
    question: "Which courts do your advocates practice in?",
    answer:
      "Our advocates are registered and practice in all major courts in the Hyderabad metropolitan area, including the Telangana High Court, Hyderabad District Court, Secunderabad Court, Rangareddy District Court, and Medchal Malkajgiri & Kukatpally courts.",
  },
  {
    question: "How do I submit an enquiry?",
    answer:
      "You can submit an enquiry through our Contact page. Fill in your details including your name, email, phone number, and a brief description of your legal matter. Our team will review your enquiry and get back to you.",
  },
  {
    question: "Is the information on this website legal advice?",
    answer:
      "No. All content on The Jurists website is for informational purposes only and does not constitute legal advice, a legal opinion, or solicitation of any kind. As per the Rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. For advice specific to your situation, please consult a qualified advocate.",
  },
  {
    question: "What is the Bar Council of India disclaimer?",
    answer:
      "As per the Rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is published solely for informational purposes and does not constitute legal advice or solicitation. By accessing this website, you confirm that you are seeking information of your own accord.",
  },
  {
    question: "How do I find the right practice area for my legal matter?",
    answer:
      "You can browse our Practice Areas page to learn about the different types of legal services we offer. Each practice area page provides informational content about that area of law. If you are unsure which area applies to your situation, you can submit an enquiry and our team will guide you.",
  },
  {
    question: "What jurisdictions do you cover?",
    answer:
      "We cover all major courts in the Hyderabad metropolitan area: the Telangana High Court (for writs, appeals, and constitutional matters), Hyderabad District Court, Secunderabad Court, Rangareddy District Court, and Medchal Malkajgiri & Kukatpally courts.",
  },
  {
    question: "Can I get a consultation before engaging your services?",
    answer:
      "You can submit an enquiry through our Contact page to get in touch with our team. Please note that any initial communication is for informational purposes only and does not constitute legal advice or create an attorney-client relationship.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "When submitting an enquiry, please include your name, contact details, the jurisdiction relevant to your matter (e.g., Hyderabad, Rangareddy), and a brief description of your legal matter. The more context you provide, the better we can assist you.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
        title="Frequently Asked Questions – The Jurists | Hyderabad Legal Services"
        description="Find answers to common questions about The Jurists legal services, practice areas, jurisdictions, and how to submit an enquiry."
        keywords="faq legal services hyderabad, legal questions hyderabad, advocates faq telangana, legal notice faq"
        canonical="https://thejurists.in/faq"
      />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <section className="bg-black text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
            className="mb-4 text-gray-400"
          />
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Answers to common questions about our legal services, practice
            areas, and how to get in touch.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border border-black px-5 bg-white"
              >
                <AccordionTrigger className="font-serif text-base font-semibold text-black text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 border-t border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-black mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            If you didn't find the answer you were looking for, submit an
            enquiry and our team will get back to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
            >
              Submit an Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-black text-black px-8 py-3 font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              Browse Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
