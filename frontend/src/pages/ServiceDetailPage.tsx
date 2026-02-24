import { Link } from '@tanstack/react-router';
import { Heart, Building2, Shield, Gavel, Home, FileText, Landmark, Briefcase, Users, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLegalServiceSchema, generateLocalBusinessSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSection from '../components/FAQSection';

interface ServiceDetailPageProps {
  service: string;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const serviceData: Record<string, any> = {
    'family-law': {
      title: 'Family Law Services in Hyderabad',
      icon: Heart,
      description: 'Expert family law services in Hyderabad covering divorce, child custody, matrimonial disputes, and all family legal matters.',
      image: '/assets/generated/family-law-consultation.dim_800x500.jpg',
      alt: 'Family law services including divorce and child custody in Hyderabad',
      services: [
        'Divorce and Separation',
        'Child Custody and Visitation',
        'Alimony and Maintenance',
        'Domestic Violence Protection',
        'Adoption Proceedings',
        'Matrimonial Disputes',
      ],
      benefits: [
        'Compassionate and confidential legal counsel',
        'Expert negotiation and mediation services',
        'Strong courtroom representation',
        'Child-focused custody solutions',
      ],
      faqs: [
        {
          question: 'What are the grounds for divorce in India?',
          answer: 'In India, divorce can be filed on grounds including adultery, cruelty, desertion, conversion to another religion, mental disorder, communicable disease, and mutual consent under Section 13 of the Hindu Marriage Act.',
        },
        {
          question: 'How is child custody determined in India?',
          answer: 'Child custody is determined based on the best interests of the child, considering factors like the child\'s age, preference, parent\'s financial stability, and ability to provide care. Courts prioritize the child\'s welfare above all.',
        },
        {
          question: 'What is the process for legal separation?',
          answer: 'Legal separation involves filing a petition in family court, attending counseling sessions, negotiating terms for alimony and custody, and obtaining a court order. The process typically takes 6-18 months depending on the case complexity.',
        },
        {
          question: 'Can I get maintenance during divorce proceedings?',
          answer: 'Yes, you can file for interim maintenance during divorce proceedings. The court can order the spouse to provide financial support for living expenses and legal costs during the pendency of the case.',
        },
      ],
    },
    'corporate-law': {
      title: 'Corporate Law Services in Hyderabad',
      icon: Building2,
      description: 'Comprehensive corporate law services for businesses in Hyderabad including company formation, compliance, contracts, and corporate governance.',
      image: '/assets/generated/corporate-law-meeting.dim_800x500.jpg',
      alt: 'Corporate law services for businesses and startups in Hyderabad',
      services: [
        'Company Formation and Registration',
        'Corporate Compliance and Governance',
        'Mergers and Acquisitions',
        'Commercial Contracts',
        'Shareholder Agreements',
        'Corporate Restructuring',
      ],
      benefits: [
        'Expert guidance on business structure',
        'Regulatory compliance support',
        'Risk mitigation strategies',
        'Efficient contract management',
      ],
      faqs: [
        {
          question: 'What legal structure is best for my startup?',
          answer: 'The choice depends on your business needs. Private Limited Company offers limited liability and easier funding. LLP provides flexibility with limited liability. Sole Proprietorship is simple but offers no liability protection. We help you choose based on your specific requirements.',
        },
        {
          question: 'How do I register a private limited company in India?',
          answer: 'Registration involves obtaining Digital Signature Certificate (DSC), Director Identification Number (DIN), name approval, filing incorporation documents with MCA, and obtaining Certificate of Incorporation. The process typically takes 10-15 days.',
        },
        {
          question: 'What are the compliance requirements for companies?',
          answer: 'Companies must file annual returns, maintain statutory registers, conduct board meetings, file income tax returns, comply with GST regulations, and maintain proper accounting records. Requirements vary based on company type and turnover.',
        },
      ],
    },
    'criminal-defense': {
      title: 'Criminal Defense Services in Hyderabad',
      icon: Shield,
      description: 'Expert criminal defense representation in Hyderabad for all types of criminal cases including bail, trial defense, and appeals.',
      image: '/assets/generated/criminal-defense-courtroom.dim_800x500.jpg',
      alt: 'Criminal defense attorney services in Hyderabad courts',
      services: [
        'Bail Applications',
        'Trial Defense',
        'Criminal Appeals',
        'White Collar Crime Defense',
        'Cyber Crime Defense',
        'Pre-Trial Negotiations',
      ],
      benefits: [
        'Experienced criminal defense attorneys',
        '24/7 emergency legal support',
        'Strong courtroom advocacy',
        'Confidential legal counsel',
      ],
      faqs: [
        {
          question: 'What should I do if I am arrested?',
          answer: 'Remain calm and exercise your right to remain silent. Do not make any statements without a lawyer present. Contact a criminal defense attorney immediately. You have the right to legal representation and to know the charges against you.',
        },
        {
          question: 'Can I get bail in a criminal case?',
          answer: 'Bail availability depends on the nature of the offense. For bailable offenses, bail is a right. For non-bailable offenses, the court has discretion based on factors like severity of crime, flight risk, and likelihood of tampering with evidence.',
        },
        {
          question: 'What are the stages of a criminal trial?',
          answer: 'A criminal trial involves: FIR filing, investigation, charge sheet filing, framing of charges, prosecution evidence, defense evidence, arguments, and judgment. The process can take months to years depending on case complexity.',
        },
      ],
    },
    'civil-litigation': {
      title: 'Civil Litigation Services in Hyderabad',
      icon: Gavel,
      description: 'Professional civil litigation services in Hyderabad for contract disputes, recovery suits, and civil legal proceedings.',
      image: '/assets/generated/civil-litigation-documents.dim_800x500.jpg',
      alt: 'Civil litigation and dispute resolution services in Hyderabad',
      services: [
        'Contract Disputes',
        'Recovery Suits',
        'Property Disputes',
        'Consumer Disputes',
        'Injunction Applications',
        'Civil Appeals',
      ],
      benefits: [
        'Strategic litigation planning',
        'Alternative dispute resolution',
        'Cost-effective legal solutions',
        'Experienced trial lawyers',
      ],
      faqs: [
        {
          question: 'How long does a civil case take in India?',
          answer: 'Civil cases typically take 2-5 years depending on complexity, court workload, and whether appeals are filed. Simple cases may be resolved faster through mediation or settlement.',
        },
        {
          question: 'What is the limitation period for filing a civil suit?',
          answer: 'The Limitation Act prescribes different periods for different types of suits. Generally, it\'s 3 years for most civil suits from the date the cause of action arises. Property disputes may have different limitation periods.',
        },
        {
          question: 'Can civil disputes be resolved without going to court?',
          answer: 'Yes, through Alternative Dispute Resolution (ADR) methods like mediation, arbitration, and negotiation. These methods are faster, less expensive, and can preserve business relationships.',
        },
      ],
    },
    'property-law': {
      title: 'Property Law Services in Hyderabad',
      icon: Home,
      description: 'Comprehensive property law services in Hyderabad including real estate transactions, title verification, and property disputes.',
      image: '/assets/generated/property-law-documents.dim_800x500.jpg',
      alt: 'Property law and real estate legal services in Hyderabad',
      services: [
        'Property Title Verification',
        'Sale and Purchase Agreements',
        'Property Disputes',
        'Land Acquisition',
        'Lease Agreements',
        'Property Registration',
      ],
      benefits: [
        'Thorough title verification',
        'Secure property transactions',
        'Dispute resolution expertise',
        'Complete legal documentation',
      ],
      faqs: [
        {
          question: 'Why is title verification important?',
          answer: 'Title verification ensures the seller has clear ownership, the property is free from encumbrances, and there are no legal disputes. It protects you from future legal complications and financial losses.',
        },
        {
          question: 'What documents are needed for property registration?',
          answer: 'Required documents include sale deed, encumbrance certificate, property tax receipts, identity and address proofs of buyer and seller, and previous sale deeds. Additional documents may be needed based on property type.',
        },
        {
          question: 'How can I resolve a property dispute?',
          answer: 'Property disputes can be resolved through negotiation, mediation, or litigation. The approach depends on the nature of the dispute. Legal remedies include filing a suit for specific performance, declaration of title, or injunction.',
        },
      ],
    },
    'ip-law': {
      title: 'Intellectual Property Law Services',
      icon: Landmark,
      description: 'Expert IP law services including trademark registration, patent filing, copyright protection, and IP litigation.',
      image: '/assets/generated/ip-law-documents.dim_800x500.jpg',
      alt: 'Intellectual property law and trademark services',
      services: [
        'Trademark Registration',
        'Patent Filing',
        'Copyright Protection',
        'IP Litigation',
        'Licensing Agreements',
        'Trade Secret Protection',
      ],
      benefits: [
        'Comprehensive IP protection',
        'Expert registration services',
        'IP portfolio management',
        'Enforcement and litigation support',
      ],
      faqs: [
        {
          question: 'How long does trademark registration take?',
          answer: 'Trademark registration in India typically takes 12-18 months. The process includes application filing, examination, publication in the trademark journal, and registration certificate issuance if no opposition is filed.',
        },
        {
          question: 'What can be patented in India?',
          answer: 'Inventions that are novel, involve an inventive step, and are capable of industrial application can be patented. Software, business methods, and mathematical formulas cannot be patented, but software with technical applications may qualify.',
        },
        {
          question: 'How do I protect my copyright?',
          answer: 'Copyright protection is automatic upon creation of original work. However, registration with the Copyright Office provides legal evidence of ownership and is useful for enforcement. Registration can be done online through the Copyright Office portal.',
        },
      ],
    },
    'tax-law': {
      title: 'Tax Law Services in Hyderabad',
      icon: Calculator,
      description: 'Professional tax law services including tax planning, compliance, GST advisory, and tax dispute resolution.',
      image: '/assets/generated/tax-law-consultation.dim_800x500.jpg',
      alt: 'Tax law consultation and compliance services',
      services: [
        'Tax Planning and Advisory',
        'GST Compliance',
        'Income Tax Returns',
        'Tax Dispute Resolution',
        'Transfer Pricing',
        'Tax Litigation',
      ],
      benefits: [
        'Expert tax planning strategies',
        'Compliance management',
        'Dispute resolution expertise',
        'Minimize tax liabilities legally',
      ],
      faqs: [
        {
          question: 'What is the GST registration threshold?',
          answer: 'Businesses with annual turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) must register for GST. Service providers and e-commerce operators have different thresholds and requirements.',
        },
        {
          question: 'How can I reduce my tax liability legally?',
          answer: 'Legal tax reduction strategies include claiming all eligible deductions under Section 80C, 80D, etc., investing in tax-saving instruments, optimizing business structure, and proper tax planning with professional guidance.',
        },
        {
          question: 'What should I do if I receive an income tax notice?',
          answer: 'Do not ignore the notice. Understand the reason for the notice, gather relevant documents, respond within the specified time frame, and consult a tax professional for proper representation and compliance.',
        },
      ],
    },
    'employment-law': {
      title: 'Employment Law Services in Hyderabad',
      icon: Users,
      description: 'Comprehensive employment law services including labor disputes, employment contracts, and workplace compliance.',
      image: '/assets/generated/employment-law-workplace.dim_800x500.jpg',
      alt: 'Employment law and workplace legal services',
      services: [
        'Employment Contracts',
        'Wrongful Termination',
        'Workplace Discrimination',
        'Labor Compliance',
        'Employee Benefits',
        'Industrial Disputes',
      ],
      benefits: [
        'Protect employee rights',
        'Employer compliance support',
        'Dispute resolution expertise',
        'Contract drafting and review',
      ],
      faqs: [
        {
          question: 'What constitutes wrongful termination?',
          answer: 'Wrongful termination includes dismissal without proper notice, termination based on discrimination, retaliation for whistleblowing, or violation of employment contract terms. Employees have legal remedies including reinstatement or compensation.',
        },
        {
          question: 'What are my rights as an employee in India?',
          answer: 'Employee rights include minimum wages, working hours limits, leave entitlements, safe working conditions, protection against discrimination, and right to form unions. Specific rights depend on applicable labor laws and employment terms.',
        },
        {
          question: 'How do I file a complaint for workplace harassment?',
          answer: 'File a written complaint with the Internal Complaints Committee (ICC) within 3 months of the incident. If ICC is not constituted or you\'re unsatisfied with the response, you can approach the Local Complaints Committee or file a police complaint.',
        },
      ],
    },
    'startup-law': {
      title: 'Startup Law Services in Hyderabad',
      icon: Briefcase,
      description: 'Specialized legal services for startups including business formation, funding, contracts, and regulatory compliance.',
      image: '/assets/generated/startup-law-meeting.dim_800x500.jpg',
      alt: 'Startup legal services and business formation',
      services: [
        'Business Formation',
        'Funding and Investment',
        'Founder Agreements',
        'ESOP Implementation',
        'Regulatory Compliance',
        'Exit Strategy Planning',
      ],
      benefits: [
        'Startup-focused legal expertise',
        'Cost-effective solutions',
        'Investor-ready documentation',
        'Scalable legal framework',
      ],
      faqs: [
        {
          question: 'Should I register as a Private Limited Company or LLP?',
          answer: 'Private Limited Company is better for startups seeking venture capital funding as investors prefer equity. LLP offers more flexibility and lower compliance but is less attractive to investors. Choose based on your funding and growth plans.',
        },
        {
          question: 'What legal documents do I need for fundraising?',
          answer: 'Key documents include term sheet, shareholders agreement, subscription agreement, articles of association, board resolutions, and due diligence documents. Proper documentation protects both founders and investors.',
        },
        {
          question: 'How do I protect my startup idea?',
          answer: 'Use Non-Disclosure Agreements (NDAs) when discussing with potential partners or investors. Register trademarks for your brand, file patents for inventions, and maintain trade secrets. Document your IP creation process.',
        },
      ],
    },
    'documentation-services': {
      title: 'Legal Documentation Services',
      icon: FileText,
      description: 'Professional legal documentation services including notarization, affidavits, agreements, and document drafting.',
      image: '/assets/generated/documentation-services.dim_800x500.jpg',
      alt: 'Legal documentation and notary services',
      services: [
        'Notarization Services',
        'Affidavit Drafting',
        'Agreement Preparation',
        'Power of Attorney',
        'Legal Notices',
        'Document Verification',
      ],
      benefits: [
        'Accurate legal documentation',
        'Fast turnaround time',
        'Affordable pricing',
        'Expert legal drafting',
      ],
      faqs: [
        {
          question: 'What is the difference between notarization and attestation?',
          answer: 'Notarization is done by a notary public who verifies the identity of signatories and witnesses the signing. Attestation is done by a gazetted officer who certifies that a document is a true copy of the original.',
        },
        {
          question: 'When do I need a power of attorney?',
          answer: 'Power of Attorney is needed when you want to authorize someone to act on your behalf for property transactions, bank operations, legal proceedings, or other matters when you cannot be present personally.',
        },
        {
          question: 'How do I send a legal notice?',
          answer: 'A legal notice should be drafted by a lawyer, clearly stating facts, legal grounds, and demands. It should be sent via registered post with acknowledgment due or through a courier service that provides proof of delivery.',
        },
      ],
    },
  };

  const data = serviceData[service];

  if (!data) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

  const Icon = data.icon;
  const areaServed = ['Hyderabad', 'Secunderabad', 'Rangareddy', 'Cyberabad'];

  return (
    <div className="flex flex-col">
      <SEOHead
        title={data.title}
        description={data.description}
        canonical={`https://thejurists.in/services/${service}`}
        ogImage={data.image}
        keywords={`${data.title}, ${service} lawyer Hyderabad, ${service} attorney Telangana`}
      />
      <StructuredData
        data={[
          generateLegalServiceSchema(data.title, areaServed),
          generateLocalBusinessSchema(),
        ]}
      />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: data.title.split(' in ')[0], href: `/services/${service}` },
              ]}
            />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">{data.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <img
              src={data.image}
              alt={data.alt}
              className="w-full rounded-2xl shadow-lg border border-border/50 mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <ul className="space-y-3">
                  {data.services.map((service: string) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <ul className="space-y-3">
                  {data.benefits.map((benefit: string) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <FAQSection faqs={data.faqs} />
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Contact us today for expert legal assistance. Our experienced team is ready to help you with your {data.title.toLowerCase()}.
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
