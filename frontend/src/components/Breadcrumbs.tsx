import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import StructuredData, { generateBreadcrumbSchema } from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `https://thejurists.in${item.href}`,
  }));

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
                {isLast ? (
                  <span className="text-foreground font-medium">{item.label}</span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
