import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 2: Full background + centered text */
const HeroDesign2: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;
  const bg = section.background_url || section.image_url;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {bg && (
        <div className="absolute inset-0">
          <img src={bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative section-container text-center text-primary-foreground py-20"
      >
        {subtitle && <p className="text-accent text-lg font-semibold mb-4">{subtitle}</p>}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
        {description && <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">{description}</p>}
        {buttonLabel && section.button_url && (
          <Button size="lg" variant="secondary" asChild>
            <a href={section.button_url}>
              {buttonLabel}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </Button>
        )}
      </motion.div>
    </section>
  );
};

export default HeroDesign2;
