import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { uiTranslations } from '@/data/siteData';
import { useDbList } from '@/hooks/useSiteContent';

interface DbVideo {
  id: string; title_en: string; title_ar: string;
  description_en: string | null; description_ar: string | null;
  video_url: string; thumbnail_url: string | null; published_date: string; is_published: boolean;
}

const Videos: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const { items: videos, loading } = useDbList<DbVideo>('videos', { order: 'published_date', ascending: false });
  const visible = videos.filter((v) => v.is_published);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader title={uiTranslations.sections.videos} breadcrumbs={[{ label: uiTranslations.sections.videos }]} />

        <section className="py-16 md:py-24">
          <div className="section-container">
            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
            ) : visible.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                {t({ en: 'No videos yet.', ar: 'لا توجد فيديوهات حالياً.' })}
              </p>
            ) : (
              <div className="space-y-16">
                {visible.map((video, index) => {
                  const title = language === 'ar' ? video.title_ar : video.title_en;
                  const description = language === 'ar' ? video.description_ar : video.description_en;
                  return (
                    <motion.article
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                          <Calendar className="w-4 h-4" />
                          <time>
                            {new Date(video.published_date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', {
                              day: 'numeric', month: 'long', year: 'numeric',
                            })}
                          </time>
                        </div>
                        {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
                      </div>

                      <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <a href={video.video_url} target="_blank" rel="noopener noreferrer">
                          <Card variant="elevated" className="overflow-hidden group cursor-pointer">
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-navy-dark/40">
                              {video.thumbnail_url && (
                                <img
                                  src={video.thumbnail_url}
                                  alt={title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              )}
                              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300">
                                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                                </button>
                              </div>
                            </div>
                          </Card>
                        </a>
                      </div>
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

export default Videos;
