import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectionRow } from '@/hooks/useSiteContent';

/** Design 2: Cinematic full-bleed with parallax overlay & centered glassmorphism content */
const HeroDesign2: React.FC<{ section: SectionRow }> = ({ section }) => {
  const { language, isRTL } = useLanguage();
  const title = language === 'ar' ? section.title_ar : section.title_en;
  const subtitle = language === 'ar' ? section.subtitle_ar : section.subtitle_en;
  const description = language === 'ar' ? section.description_ar : section.description_en;
  const buttonLabel = language === 'ar' ? section.button_label_ar : section.button_label_en;
  const bg = section.background_url || section.image_url;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {bg ? (
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img src={bg} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-gradient-hero" />
      )}

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-transparent to-accent/30" />

      {/* Animated dots */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative section-container text-center text-primary-foreground py-20 max-w-5xl"
      >
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-5 py-2 mb-8 rounded-full glass-dark border border-white/20"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-accent">{subtitle}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] drop-shadow-2xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-95 leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {buttonLabel && section.button_url && (
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-base px-8 group" asChild>
              <a href={section.button_url}>
                {buttonLabel}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </Button>
          )}
          <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
            <Play className="w-4 h-4" />
            Watch Video
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroDesign2;
