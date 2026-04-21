import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Globe2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 3: Editorial centered hero with stats strip + featured image showcase */
const HeroDesign3: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  const stats = [
    { icon: Award, value: '15+', label: language === 'ar' ? 'سنوات خبرة' : 'Years' },
    { icon: Globe2, value: '20+', label: language === 'ar' ? 'دولة' : 'Countries' },
    { icon: Shield, value: 'GMP', label: language === 'ar' ? 'معتمد' : 'Certified' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-primary rounded-full" />
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-teal rounded-full" />

      <div className="relative section-container py-20 text-center">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wider uppercase">{subtitle}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 max-w-5xl mx-auto leading-[1.05]"
        >
          {title?.split(' ').map((word, i) => (
            <span key={i} className={i % 2 === 1 ? 'text-gradient-accent' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {buttonLabel && section.button_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="bg-gradient-primary shadow-strong hover:shadow-glow group px-8" asChild>
              <a href={section.button_url}>
                {buttonLabel}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </Button>
          </motion.div>
        )}

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 hover-lift">
              <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {section.image_url && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={section.image_url}
              alt=""
              className="relative rounded-3xl shadow-strong w-full border border-border"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroDesign3;
