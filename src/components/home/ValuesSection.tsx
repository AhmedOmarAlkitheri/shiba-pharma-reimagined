import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Award, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { companyValues, uiTranslations } from '@/data/siteData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  TrendingUp,
  Shield,
  Award,
  RefreshCw,
};

const ValuesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">
              {t({ en: 'Why Choose Us', ar: 'لماذا تختارنا' })}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t(uiTranslations.sections.ourValues)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({ en: 'Our core values drive everything we do, ensuring excellence in pharmaceutical manufacturing.', ar: 'قيمنا الأساسية تدفع كل ما نفعله، لضمان التميز في التصنيع الدوائي.' })}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((value, index) => {
            const Icon = iconMap[value.icon] || Award;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full text-center group">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                      {t(value.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(value.description)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
