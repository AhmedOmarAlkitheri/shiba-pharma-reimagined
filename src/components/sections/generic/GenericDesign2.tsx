import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 2: Cinematic full-bleed banner with overlay */
const GenericDesign2: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;
  const bg = section.background_url || section.image_url;

  return (
    <section className="relative py-32 overflow-hidden">
      {bg ? (
        <>
          <div className="absolute inset-0">
            <img src={bg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-hero" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative section-container text-center text-primary-foreground max-w-4xl"
      >
        {subtitle && (
          <span className="inline-block px-5 py-2 mb-6 rounded-full glass-dark border border-white/20 text-accent text-sm font-bold tracking-widest uppercase">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] drop-shadow-lg">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
        {buttonLabel && section.button_url && (
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group px-8" asChild>
            <a href={section.button_url}>
              {buttonLabel}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
          </Button>
        )}
      </motion.div>
    </section>
  );
};

export default GenericDesign2;
