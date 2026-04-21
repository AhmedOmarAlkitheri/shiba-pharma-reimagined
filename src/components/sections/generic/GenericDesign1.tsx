import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Generic Design 1: Asymmetric split with image collage feel */
const GenericDesign1: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  // Optional bullet points from extra.bullets
  const bullets: string[] = (section.extra as any)?.bullets ?? [];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative section-container grid lg:grid-cols-12 gap-12 items-center">
        {section.image_url && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-strong">
              <img src={section.image_url} alt={title || ''} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-2xl shadow-strong hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary rounded-2xl hidden md:block" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          {subtitle && (
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wide uppercase">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              <span className="text-gradient">{title}</span>
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          )}
          {bullets.length > 0 && (
            <ul className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          )}
          {buttonLabel && section.button_url && (
            <Button size="lg" className="bg-gradient-primary shadow-medium group" asChild>
              <a href={section.button_url}>
                {buttonLabel}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GenericDesign1;
