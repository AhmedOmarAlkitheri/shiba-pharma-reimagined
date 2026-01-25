import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { managementWord } from '@/data/siteData';

const Management: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const paragraphs = t(managementWord.content).split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={managementWord.title}
          breadcrumbs={[
            { label: { en: 'Content', ar: 'المحتوى' } },
            { label: managementWord.title }
          ]}
        />

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card variant="elevated" className="overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    {/* Header with Image */}
                    <div className={`flex flex-col md:flex-row gap-6 items-start mb-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                      {/* Author Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-navy-dark">
                          <img
                            src={managementWord.author.image}
                            alt={t(managementWord.author.name)}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x150?text=Chairman';
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-primary mb-2">
                          {t(managementWord.title)}
                        </h2>
                        <div className="text-muted-foreground">
                          <p className="font-semibold text-foreground">{t(managementWord.author.name)}</p>
                          <p>{t(managementWord.author.position)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-accent/30" />
                    </div>

                    {/* Content Paragraphs */}
                    <div className="space-y-6">
                      {paragraphs.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="text-muted-foreground leading-relaxed text-justify"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    {/* Signature */}
                    <div className={`mt-12 pt-8 border-t border-border ${isRTL ? 'text-left' : 'text-right'}`}>
                      <p className="font-bold text-primary">{t(managementWord.author.name)}</p>
                      <p className="text-muted-foreground">{t(managementWord.author.position)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Share */}
                <Card className="bg-white shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      {t({ en: 'Share', ar: 'مشاركة الرابط' })}
                    </h3>
                    <div className="flex gap-3">
                      {['twitter', 'facebook', 'whatsapp', 'linkedin'].map((social) => (
                        <button
                          key={social}
                          className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Search */}
                <Card className="bg-white shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">
                      {t({ en: 'Search', ar: 'البحث' })}
                    </h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={t({ en: 'search ...', ar: 'بحث ...' })}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Management;
