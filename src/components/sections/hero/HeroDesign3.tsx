import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 3: Minimal centered with accent badge */
const HeroDesign3: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="relative section-container text-center py-20">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">{subtitle}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {description}
          </motion.p>
        )}
        {buttonLabel && section.button_url && (
          <Button size="lg" asChild>
            <a href={section.button_url}>
              {buttonLabel}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </Button>
        )}
        {section.image_url && (
          <motion.img
            src={section.image_url}
            alt=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
          />
        )}
      </div>
    </section>
  );
};

export default HeroDesign3;
