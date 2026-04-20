import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 1: Image left, text right */
const GenericDesign1: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="py-20 bg-background">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {section.image_url && (
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={section.image_url}
            alt={title || ''}
            className="rounded-2xl shadow-xl w-full"
          />
        )}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {subtitle && <p className="text-accent font-semibold mb-3">{subtitle}</p>}
          {title && <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>}
          {description && <p className="text-muted-foreground text-lg mb-8 whitespace-pre-line">{description}</p>}
          {buttonLabel && section.button_url && (
            <Button asChild><a href={section.button_url}>{buttonLabel}</a></Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GenericDesign1;
