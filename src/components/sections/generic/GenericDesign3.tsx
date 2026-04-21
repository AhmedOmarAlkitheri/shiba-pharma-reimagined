import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 3: Premium card with overlapping image and gradient frame */
const GenericDesign3: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative section-container max-w-6xl"
      >
        <div className="relative bg-card rounded-[2.5rem] shadow-strong overflow-hidden border border-border">
          <div className="grid md:grid-cols-2">
            {section.image_url && (
              <div className="relative h-72 md:h-auto min-h-[400px]">
                <img src={section.image_url} alt={title || ''} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent md:hidden" />
              </div>
            )}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              {subtitle && (
                <span className="inline-block w-fit px-4 py-1.5 mb-5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wide uppercase">
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  <span className="text-gradient">{title}</span>
                </h2>
              )}
              {description && (
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              )}
              {buttonLabel && section.button_url && (
                <Button size="lg" className="w-fit bg-gradient-primary shadow-medium group" asChild>
                  <a href={section.button_url}>
                    {buttonLabel}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GenericDesign3;
