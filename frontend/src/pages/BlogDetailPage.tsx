import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateArticleSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGetBlogArticleById } from '../hooks/useQueries';
import { Skeleton } from '../components/ui/skeleton';

const categoryLabels: Record<string, string> = {
  familyLaw: 'Family Law',
  corporateLaw: 'Corporate Law',
  criminalDefense: 'Criminal Defense',
  civilLitigation: 'Civil Litigation',
  propertyLaw: 'Property Law',
  documentationServices: 'Documentation',
  taxLaw: 'Tax Law',
  ipLaw: 'IP Law',
  startupLaw: 'Startup Law',
  employmentLaw: 'Employment Law',
};

export default function BlogDetailPage() {
  const { articleId } = useParams({ strict: false }) as { articleId: string };
  const { data: article, isLoading } = useGetBlogArticleById(BigInt(articleId ?? '0'));

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-black mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-black underline hover:text-gray-600">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = new Date(Number(article.publishedDate) / 1_000_000);

  return (
    <>
      <SEOHead
        title={`${article.title} – The Jurists Blog`}
        description={article.content.substring(0, 160)}
        keywords={`${categoryLabels[article.category] ?? ''}, legal blog hyderabad`}
        canonical={`https://thejurists.in/blog/${article.id}`}
      />
      <StructuredData
        schema={generateArticleSchema({
          title: article.title,
          description: article.content.substring(0, 160),
          datePublished: publishedDate.toISOString(),
          author: article.author,
        })}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      {/* Article */}
      <article className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category */}
          <span className="inline-block bg-black text-white text-xs px-3 py-1 uppercase tracking-widest mb-6">
            {categoryLabels[article.category] ?? article.category}
          </span>

          {/* Title */}
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-black">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {publishedDate.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-black">
            {article.content.split('\n').map((para, i) =>
              para.trim() ? (
                <p key={i} className="mb-4 text-gray-800 leading-relaxed">
                  {para}
                </p>
              ) : null
            )}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-black">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-600 transition-colors uppercase tracking-wide text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
