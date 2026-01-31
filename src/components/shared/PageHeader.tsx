import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Translation } from '@/data/siteData';

interface PageHeaderProps {
  title: Translation;
  breadcrumbs?: { label: Translation; href?: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent blur-3xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ opacity: 0.2 }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <motion.nav 
              className="mb-4"
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ol className={`flex items-center gap-2 text-white/70 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.li whileHover={{ scale: 1.05 }}>
                  <a href="/" className="hover:text-white transition-colors">
                    {t({ en: 'Home', ar: 'الرئيسية' })}
                  </a>
                </motion.li>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <motion.li 
                      className={isRTL ? 'rotate-180' : ''}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      /
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {crumb.href ? (
                        <a href={crumb.href} className="hover:text-white transition-colors">
                          {t(crumb.label)}
                        </a>
                      ) : (
                        <span className="text-white">{t(crumb.label)}</span>
                      )}
                    </motion.li>
                  </React.Fragment>
                ))}
              </ol>
            </motion.nav>
          )}

          {/* Title with Letter Animation */}
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white overflow-hidden">
            {t(title).split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.03, duration: 0.3 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-accent to-transparent mt-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '200px', opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Animated Bottom Wave */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V60Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default PageHeader;
