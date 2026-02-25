import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Calendar, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useGetAllBlogArticles } from '../hooks/useQueries';
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

export default function BlogListPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { data: articles, isLoading } = useGetAllBlogArticles();

  const filtered = activeCategory === 'all'
    ? (articles ?? [])
    : (articles ?? []).filter((a) => a.category === activeCategory);

  const categories = ['all', ...Object.keys(categoryLabels)];

  return (
    <>
      <SEOHead
        title="Legal Blog – The Jurists Hyderabad"
        description="Legal insights, updates, and articles from The Jurists advocates in Hyderabad."
        keywords="legal blog hyderabad, law articles hyderabad, legal news hyderabad"
        canonical="https://thejurists.in/blog"
      />

      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Insights</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">Legal Blog</h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Expert legal insights, case updates, and practical guidance from our advocates.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 text-xs font-medium uppercase tracking-wide border transition-colors ${
                  activeCategory === cat
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border border-gray-200">
                  <Skeleton className="h-44 w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-black mb-2">No articles yet</p>
              <p className="text-gray-500">Check back soon for legal insights and updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <div
                  key={String(article.id)}
                  className="border border-black group cursor-pointer hover:shadow-luxury transition-shadow"
                  onClick={() => navigate({ to: `/blog/${article.id}` as any })}
                >
                  <div className="p-5">
                    <span className="inline-block bg-black text-white text-xs px-2 py-1 uppercase tracking-wide mb-3">
                      {categoryLabels[article.category] ?? article.category}
                    </span>
                    <h2 className="font-serif text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {article.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(Number(article.publishedDate) / 1_000_000).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
