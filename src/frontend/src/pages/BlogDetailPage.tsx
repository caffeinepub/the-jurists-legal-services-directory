import { useParams, Link } from '@tanstack/react-router';
import { useGetBlogArticleById } from '../hooks/useQueries';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateArticleSchema, generateLocalBusinessSchema } from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';
import { Variant__1 } from '../backend';

const practiceAreaLabels: Record<Variant__1, string> = {
  [Variant__1.familyLaw]: 'Family Law',
  [Variant__1.corporateLaw]: 'Corporate Law',
  [Variant__1.criminalDefense]: 'Criminal Defense',
  [Variant__1.civilLitigation]: 'Civil Litigation',
  [Variant__1.propertyLaw]: 'Property Law',
  [Variant__1.ipLaw]: 'IP Law',
  [Variant__1.taxLaw]: 'Tax Law',
  [Variant__1.employmentLaw]: 'Employment Law',
  [Variant__1.startupLaw]: 'Startup Law',
  [Variant__1.documentationServices]: 'Documentation',
};

export default function BlogDetailPage() {
  const { articleId } = useParams({ strict: false });
  const { data: article, isLoading } = useGetBlogArticleById(articleId ? BigInt(articleId) : BigInt(0));

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getISODate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toISOString();
  };

  if (isLoading) {
    return (
      <div className="container py-24">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const metaDescription = article.content.substring(0, 160);

  return (
    <div className="flex flex-col">
      <SEOHead
        title={article.title}
        description={metaDescription}
        canonical={`https://thejurists.in/blog/${article.id}`}
        ogType="article"
      />
      <StructuredData
        data={[
          generateArticleSchema({
            title: article.title,
            description: metaDescription,
            datePublished: getISODate(article.publishedDate),
            author: article.author,
          }),
          generateLocalBusinessSchema(),
        ]}
      />

      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: article.title, href: `/blog/${article.id}` },
              ]}
            />
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Badge variant="secondary" className="mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {practiceAreaLabels[article.category]}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(article.publishedDate)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="whitespace-pre-wrap leading-relaxed">{article.content}</div>
          </article>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact our expert legal team for personalized advice and representation.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
