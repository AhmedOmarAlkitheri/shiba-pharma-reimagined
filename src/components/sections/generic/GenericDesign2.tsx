import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 2: Centered with optional background */
const GenericDesign2: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section
      className="relative py-24"
      style={section.background_url ? {
        backgroundImage: `linear-gradient(hsl(var(--primary)/0.85), hsl(var(--primary)/0.85)), url(${section.background_url})`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      } : undefined}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`section-container text-center ${section.background_url ? 'text-primary-foreground' : ''}`}
      >
        {subtitle && <p className="text-accent font-semibold mb-3">{subtitle}</p>}
        {title && <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>}
        {description && <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90 whitespace-pre-line">{description}</p>}
        {buttonLabel && section.button_url && (
          <Button size="lg" variant={section.background_url ? 'secondary' : 'default'} asChild>
            <a href={section.button_url}>{buttonLabel}</a>
          </Button>
        )}
      </motion.div>
    </section>
  );
};

export default GenericDesign2;
