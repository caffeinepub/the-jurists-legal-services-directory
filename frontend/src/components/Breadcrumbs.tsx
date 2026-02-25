import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import StructuredData, { generateBreadcrumbSchema } from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schemaItems = items
    .filter((item) => item.href)
    .map((item) => ({
      name: item.label,
      url: `https://thejurists.in${item.href}`,
    }));

  return (
    <>
      {schemaItems.length > 0 && <StructuredData data={generateBreadcrumbSchema(schemaItems)} />}
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 mx-1 opacity-50" />}
                {isLast || !item.href ? (
                  <span className="current font-medium">{item.label}</span>
                ) : (
                  <Link
                    to={item.href as '/'}
                    className="hover:underline transition-colors"
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
