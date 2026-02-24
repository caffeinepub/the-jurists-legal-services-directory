import { useEffect } from 'react';

interface StructuredDataProps {
  data?: object | object[];
  schema?: object | object[];
  id?: string;
}

export default function StructuredData({ data, schema, id }: StructuredDataProps) {
  const payload = schema ?? data;

  useEffect(() => {
    if (!payload) return;

    const schemaArray = Array.isArray(payload) ? payload : [payload];
    const scriptIds: string[] = [];

    schemaArray.forEach((schemaItem, index) => {
      const scriptId = id ? (index === 0 ? id : `${id}-${index}`) : `structured-data-${index}-${Date.now()}`;
      scriptIds.push(scriptId);

      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(schemaItem);
    });

    return () => {
      scriptIds.forEach((sid) => {
        const element = document.getElementById(sid);
        if (element) element.remove();
      });
    };
  }, [payload, id]);

  return null;
}

// ─── Helper: LocalBusiness schema ────────────────────────────────────────────

interface LocalBusinessOptions {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  openingHours?: string[];
}

export function generateLocalBusinessSchema(options?: LocalBusinessOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: options?.name ?? 'The Jurists',
    description:
      options?.description ??
      'Expert legal services in Hyderabad covering property law, corporate law, family law, contracts drafting, and more.',
    url: options?.url ?? 'https://thejurists.in',
    telephone: options?.telephone ?? '+91-80080-12892',
    email: 'info@thejurists.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: options?.address?.streetAddress ?? 'Hyderabad',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: options?.address?.postalCode ?? '500001',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4123,
      longitude: 78.2432,
    },
  };
}

// ─── Helper: Organization schema ─────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Jurists',
    url: 'https://thejurists.in',
    logo: 'https://thejurists.in/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-80080-12892',
      contactType: 'customer service',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  };
}

// ─── Helper: LegalService schema ─────────────────────────────────────────────

export function generateLegalServiceSchema(serviceType: string, areaServed: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'LegalService',
      name: 'The Jurists',
      url: 'https://thejurists.in',
    },
    areaServed: areaServed.map((area) => ({ '@type': 'City', name: area })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://thejurists.in/contact',
    },
  };
}

// ─── Helper: Breadcrumb schema ────────────────────────────────────────────────

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Helper: FAQ schema ───────────────────────────────────────────────────────

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── Helper: Article schema ───────────────────────────────────────────────────

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url ?? 'https://thejurists.in/blog',
    image: article.image ?? 'https://thejurists.in/logo.png',
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Jurists',
      url: 'https://thejurists.in',
    },
  };
}
