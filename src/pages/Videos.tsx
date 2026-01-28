import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Calendar, Award, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { videosData, uiTranslations } from '@/data/siteData';

const Videos: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={uiTranslations.sections.videos}
          breadcrumbs={[{ label: uiTranslations.sections.videos }]}
        />

        {/* Videos Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="space-y-16">
              {videosData.map((video, index) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`${isRTL ? 'text-right' : ''} ${index % 2 === 1 && !isRTL ? 'lg:order-2' : ''} ${index % 2 === 0 && isRTL ? 'lg:order-2' : ''}`}>
                    <h2 className="text-3xl font-bold text-primary mb-4">{t(video.title)}</h2>
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <time>
                        {new Date(video.date).toLocaleDateString(isRTL ? 'ar-YE' : 'en-US', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t(video.description)}</p>
                  </div>

                  {/* Video Thumbnail */}
                  <div className={`relative ${index % 2 === 1 && !isRTL ? 'lg:order-1' : ''} ${index % 2 === 0 && isRTL ? 'lg:order-1' : ''}`}>
                    <Card variant="elevated" className="overflow-hidden group cursor-pointer">
                      <div className="relative aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy-dark/40 rounded-full w-64 h-64 mx-auto my-auto flex items-center justify-center overflow-hidden">
                          {/* Circular frame for video */}
                          <div className="w-full h-full relative overflow-hidden rounded-full border-8 border-white/20">
                            <img
                              src={video.thumbnail}
                              alt={t(video.title)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Video';
                              }}
                            />
                          </div>
                        </div>
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <PlayCircle className="w-12 h-12 text-primary" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Info */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}
            >
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                {t({ en: 'Our Certifications', ar: 'شهاداتنا' })}
              </h2>
              <div className="space-y-4 text-white/80">
                {[
                  { en: 'First company to obtain WHO-GMP certification in 2000', ar: 'أول شركة تحصل على شهادة WHO-GMP عام 2000' },
                  { en: 'First company to obtain ISO 9001:2000 certification', ar: 'أول شركة تحصل على شهادة ISO 9001:2000' },
                  { en: 'Later obtained ISO 9001:2004 certification', ar: 'حصلت لاحقاً على شهادة ISO 9001:2004' },
                  { en: 'Later obtained ISO 9001:2008 certification', ar: 'حصلت لاحقاً على شهادة ISO 9001:2008' },
                ].map((cert, i) => (
                  <p key={i} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    {t(cert)}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
