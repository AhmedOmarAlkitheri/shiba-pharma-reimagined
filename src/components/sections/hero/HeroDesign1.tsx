import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 1: Premium split — text left, image right with floating cards & gradient blobs */
const HeroDesign1: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-teal/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative section-container py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">{subtitle}</span>
            </motion.div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            <span className="text-gradient">{title}</span>
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed whitespace-pre-line">
              {description}
            </p>
          )}
          {buttonLabel && section.button_url && (
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-strong hover:shadow-glow transition-all group" asChild>
                <a href={section.button_url}>
                  {buttonLabel}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </a>
              </Button>
            </div>
          )}
        </motion.div>

        {section.image_url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/20 to-teal/20 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-strong border border-white/40">
              <img src={section.image_url} alt={title || ''} className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 glass rounded-2xl p-5 shadow-strong w-56 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">+50</p>
                  <p className="text-xs text-muted-foreground">Quality Products</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroDesign1;
