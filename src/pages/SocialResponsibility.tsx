import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Leaf } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { socialResponsibility } from '@/data/siteData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  individuals: Users,
  community: Heart,
  environment: Leaf,
};

const colorMap: Record<string, string> = {
  individuals: 'bg-accent',
  community: 'bg-teal',
  environment: 'bg-gold',
};

const SocialResponsibility: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={socialResponsibility.title}
          breadcrumbs={[
            { label: { en: 'Content', ar: 'المحتوى' } },
            { label: socialResponsibility.title }
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
                <Card variant="elevated">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-primary mb-8">
                      {t(socialResponsibility.title)}
                    </h2>

                    <div className="space-y-12">
                      {socialResponsibility.sections.map((section, index) => {
                        const Icon = iconMap[section.id] || Users;
                        const bgColor = colorMap[section.id] || 'bg-primary';

                        return (
                          <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-primary pt-2">
                                :{t(section.title)}
                              </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-justify">
                              {t(section.content)}
                            </p>
                          </motion.div>
                        );
                      })}
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
                    <h3 className="text-lg font-bold text-primary mb-4">
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

                {/* Quick Facts */}
                <Card className="bg-gradient-to-br from-primary to-navy-dark text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">
                      {t({ en: 'Our Commitment', ar: 'التزامنا' })}
                    </h3>
                    <ul className="space-y-3 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {t({ en: 'Supporting charitable organizations', ar: 'دعم المنظمات الخيرية' })}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {t({ en: 'Training healthcare students', ar: 'تدريب طلاب الرعاية الصحية' })}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {t({ en: 'Environmental protection', ar: 'حماية البيئة' })}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {t({ en: 'Employee development', ar: 'تطوير الموظفين' })}
                      </li>
                    </ul>
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

export default SocialResponsibility;
