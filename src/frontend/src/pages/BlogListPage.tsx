import { useGetAllBlogArticles } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from '@tanstack/react-router';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import SEOHead from '../components/SEOHead';
import StructuredData, { generateLocalBusinessSchema, generateOrganizationSchema } from '../components/StructuredData';
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

export default function BlogListPage() {
  const { data: articles = [], isLoading } = useGetAllBlogArticles();
  const navigate = useNavigate();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getExcerpt = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  const handleArticleClick = (articleId: bigint) => {
    navigate({ to: '/blog/$articleId', params: { articleId: articleId.toString() } });
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Legal Articles & Insights"
        description="Expert legal articles covering family law, corporate law, criminal defense, and more. Get answers to common legal questions in Hyderabad."
        canonical="https://thejurists.in/blog"
        keywords="legal articles, law blog, legal advice India, Hyderabad legal insights"
      />
      <StructuredData data={[generateLocalBusinessSchema(), generateOrganizationSchema()]} />

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Legal Articles & Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert legal guidance and insights from The Jurists team
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} />

          {isLoading ? (
            <div className="text-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-6">No articles available yet. Check back soon!</p>
              <Button asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={Number(article.id)} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {practiceAreaLabels[article.category]}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {getExcerpt(article.content)}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedDate)}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleArticleClick(article.id)}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
