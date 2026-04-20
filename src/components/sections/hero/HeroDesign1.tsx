import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 1: Image right + text left (classic split) */
const HeroDesign1: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="section-container py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {subtitle && <p className="text-accent font-semibold mb-4">{subtitle}</p>}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{title}</h1>
          {description && <p className="text-lg text-muted-foreground mb-8">{description}</p>}
          {buttonLabel && section.button_url && (
            <Button size="lg" asChild>
              <a href={section.button_url}>
                {buttonLabel}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </a>
            </Button>
          )}
        </motion.div>
        {section.image_url && (
          <motion.img
            src={section.image_url}
            alt={title || ''}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl shadow-2xl w-full"
          />
        )}
      </div>
    </section>
  );
};

export default HeroDesign1;
