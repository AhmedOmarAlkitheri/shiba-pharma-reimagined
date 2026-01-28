import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Target, Eye, Award, Users, CheckCircle, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { aboutContent, companyInfo, productionLines, uiTranslations } from '@/data/siteData';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const aboutCards = [
    { icon: Mail, ...aboutContent.mission, color: 'bg-accent' },
    { icon: Eye, ...aboutContent.vision, color: 'bg-teal' },
    { icon: Target, ...aboutContent.goals, color: 'bg-gold' },
    { icon: Sparkles, ...aboutContent.values, color: 'bg-primary' },
    { icon: CheckCircle, ...aboutContent.standards, color: 'bg-accent' },
    { icon: Users, ...aboutContent.cadres, color: 'bg-teal' },
  ];

  const stats = [
    { value: companyInfo.productsCount, label: uiTranslations.stats.medicalProducts, icon: Award },
    { value: companyInfo.agentsCount, label: uiTranslations.stats.agents, icon: Users },
    { value: companyInfo.awardsCount, label: uiTranslations.stats.awards, icon: Award },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={uiTranslations.sections.aboutUs}
          breadcrumbs={[{ label: uiTranslations.sections.aboutUs }]}
        />

        {/* Company Introduction */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8">
                [ {t(companyInfo.name)} {t({ en: 'company for Pharmaceutical industries', ar: 'للصناعات الدوائية' })} ]
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(aboutContent.intro)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision, Mission, Goals Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title.en}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" className="h-full group hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{t(card.title)}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t(card.content)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/70">{t(stat.label)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Management */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t(uiTranslations.sections.productionManagement)}
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                {t({ 
                  en: 'Shiba Pharma Co for Pharmaceutical Manufacturing producing more than 300 products, and its production line includes:',
                  ar: 'تقوم شركة سبأ فارما للتصنيع الدوائي بإنتاج أكثر من 300 منتج، ويشمل خط إنتاجها:'
                })}
              </p>
            </motion.div>

            <div className="space-y-4">
              {productionLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                >
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground">{t(line)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-2xl"
            >
              <p className="text-foreground leading-relaxed">
                {t({
                  en: 'Quality control begins at the inspection facilities, With a focus on comprehensive documentation. This, in turn, ensures that the work is in line with good laboratory practices and thus ensure that the data is correct. When the product obtains the approval of the competent authorities and enters the production line The quality becomes guaranteed in all stages of production for both pharmaceutical materials and products.',
                  ar: 'تبدأ مراقبة الجودة في مرافق الفحص، مع التركيز على التوثيق الشامل. وهذا بدوره يضمن أن العمل يتماشى مع ممارسات المختبرات الجيدة وبالتالي ضمان صحة البيانات. عندما يحصل المنتج على موافقة السلطات المختصة ويدخل خط الإنتاج، تصبح الجودة مضمونة في جميع مراحل الإنتاج لكل من المواد والمنتجات الصيدلانية.'
                })}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
