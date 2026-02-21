import { useEffect } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const schemaArray = Array.isArray(data) ? data : [data];
    const scriptIds: string[] = [];

    schemaArray.forEach((schema, index) => {
      const scriptId = `structured-data-${index}-${Date.now()}`;
      scriptIds.push(scriptId);

      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      
      scriptElement.textContent = JSON.stringify(schema);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      scriptIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.remove();
        }
      });
    };
  }, [data]);

  return null;
}

// Helper functions to generate common schemas
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'The Jurists',
    image: 'https://thejurists.in/assets/generated/hero-legal-services.dim_1200x600.jpg',
    '@id': 'https://thejurists.in',
    url: 'https://thejurists.in',
    telephone: '+91-80080-12892',
    email: 'thejuristshyd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jubilee Hills',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500033',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.385,
      longitude: 78.4867,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Hyderabad',
      },
      {
        '@type': 'City',
        name: 'Secunderabad',
      },
      {
        '@type': 'City',
        name: 'Rangareddy',
      },
      {
        '@type': 'City',
        name: 'Cyberabad',
      },
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'The Jurists',
    url: 'https://thejurists.in',
    logo: 'https://thejurists.in/assets/generated/scales-justice-icon-transparent.dim_200x200.png',
    description: 'Premier legal services in Hyderabad, Secunderabad, Cyberabad, and Rangareddy. Expert attorneys specializing in family law, corporate law, criminal defense, and more.',
    email: 'thejuristshyd@gmail.com',
    telephone: '+91-80080-12892',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/thejurists',
      'https://www.facebook.com/thejurists',
      'https://twitter.com/thejurists',
    ],
  };
}

export function generateLegalServiceSchema(serviceType: string, areaServed: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceType,
    provider: {
      '@type': 'LegalService',
      name: 'The Jurists',
      url: 'https://thejurists.in',
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://thejurists.in/contact',
    },
  };
}

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

export function generateArticleSchema(article: {
  title: string;
  description: string;
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
    image: article.image || 'https://thejurists.in/assets/generated/hero-legal-services.dim_1200x600.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Jurists',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thejurists.in/assets/generated/scales-justice-icon-transparent.dim_200x200.png',
      },
    },
  };
}
