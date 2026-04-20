import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 3: Card-based with image on top */
const GenericDesign3: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="py-20 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-container max-w-5xl"
      >
        <Card className="overflow-hidden shadow-2xl">
          {section.image_url && (
            <img src={section.image_url} alt={title || ''} className="w-full h-80 object-cover" />
          )}
          <CardContent className="p-10 text-center">
            {subtitle && <p className="text-accent font-semibold mb-3">{subtitle}</p>}
            {title && <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>}
            {description && <p className="text-muted-foreground text-lg mb-8 whitespace-pre-line">{description}</p>}
            {buttonLabel && section.button_url && (
              <Button asChild><a href={section.button_url}>{buttonLabel}</a></Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default GenericDesign3;
