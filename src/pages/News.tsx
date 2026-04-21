import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Share2, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { uiTranslations } from '@/data/siteData';
import { useDbList } from '@/hooks/useSiteContent';

interface DbNews {
  id: string; slug: string; title_en: string; title_ar: string;
  excerpt_en: string | null; excerpt_ar: string | null;
  image_url: string | null; published_date: string; is_published: boolean;
}

const News: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const { items: articles, loading } = useDbList<DbNews>('news_articles', { order: 'published_date', ascending: false });
  const visible = articles.filter((a) => a.is_published);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title={{ en: 'News', ar: 'الأخبار' }}
          breadcrumbs={[{ label: { en: 'News', ar: 'الأخبار' } }]}
        />

        <section className="py-16 md:py-24">
          <div className="section-container">
            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
            ) : visible.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                {t({ en: 'No news articles yet.', ar: 'لا توجد أخبار حالياً.' })}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visible.map((article, index) => {
                  const title = language === 'ar' ? article.title_ar : article.title_en;
                  const excerpt = language === 'ar' ? article.excerpt_ar : article.excerpt_en;
                  return (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card variant="elevated" className="h-full overflow-hidden group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden bg-secondary">
                          {article.image_url && (
                            <img
                              src={article.image_url}
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <button className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card">
                            <Share2 className="w-4 h-4 text-primary" />
                          </button>
                        </div>

                        <CardContent className="p-6">
                          <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Calendar className="w-4 h-4" />
                            <time>
                              {new Date(article.published_date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', {
                                day: 'numeric', month: 'short', year: 'numeric',
                              })}
                            </time>
                          </div>
                          <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {title}
                          </h2>
                          {excerpt && <p className="text-muted-foreground line-clamp-3 mb-6">{excerpt}</p>}
                          <Button variant="link" className="p-0 h-auto group/btn">
                            {t(uiTranslations.common.readMore)}
                            <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
