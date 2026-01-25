import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsArticles, uiTranslations } from '@/data/siteData';

const News: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={{ en: 'News', ar: 'الأخبار' }}
          breadcrumbs={[{ label: { en: 'News', ar: 'الأخبار' } }]}
        />

        {/* News Grid */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" className="h-full overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={t(article.title)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=News';
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Share button */}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                        <Share2 className="w-4 h-4 text-primary" />
                      </button>
                    </div>

                    <CardContent className="p-6">
                      {/* Date */}
                      <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <time>
                          {new Date(article.date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {t(article.title)}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-3 mb-6">
                        {t(article.excerpt)}
                      </p>

                      {/* Read More */}
                      <Button variant="link" className="p-0 h-auto group/btn">
                        {t(uiTranslations.common.readMore)}
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg">
                {t({ en: 'Load More News', ar: 'تحميل المزيد من الأخبار' })}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Sidebar Section */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t(uiTranslations.common.share)}
                </h3>
                <div className="flex gap-3">
                  {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((social) => (
                    <button
                      key={social}
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <Share2 className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t({ en: 'Search', ar: 'البحث' })}
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t(uiTranslations.common.search)}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t({ en: 'Categories', ar: 'التصنيفات' })}
                </h3>
                <div className="space-y-2">
                  {[
                    { en: 'Company News', ar: 'أخبار الشركة' },
                    { en: 'Events', ar: 'الفعاليات' },
                    { en: 'Awards', ar: 'الجوائز' },
                  ].map((cat, i) => (
                    <button
                      key={i}
                      className="block w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {t(cat)}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
