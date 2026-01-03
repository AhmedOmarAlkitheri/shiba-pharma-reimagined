import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsArticles, uiTranslations } from '@/data/siteData';

const NewsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(uiTranslations.sections.latestNews)}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Card variant="glass" className="h-full overflow-hidden group cursor-pointer bg-white/10 border-white/20">
                <div className="aspect-video overflow-hidden">
                  <img src={article.image} alt={t(article.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=News'; }} />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">{t(article.title)}</h3>
                  <p className="text-white/70 text-sm line-clamp-3">{t(article.excerpt)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg" className="group">
            {t(uiTranslations.common.viewAll)}
            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
